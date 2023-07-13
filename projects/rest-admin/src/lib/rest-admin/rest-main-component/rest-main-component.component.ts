import { Observable } from 'rxjs';
import { RestLangService } from './../rest-resource/service/rest-lang.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminConfigService } from '../rest-resource/service/rest-admin-config.service';
import { map } from 'rxjs/operators';
import { MenuFilterPipe } from './menu-filter.pipe';
import { PERMISSION } from '../rest-resource/models/rest-resource.model';
import { RestResourceService } from '../rest-resource/service/rest-resource.service';
import * as _ from 'lodash';
import { GLOBALS } from '../../utils/globals';

@Component({
  selector: 'ngx-rest-main-component',
  styleUrls: ['./rest-main-component.component.scss'],
  providers: [MenuFilterPipe],
  template: `
    <ngx-one-column-layout *ngIf="!isPending && pageLoad; else errorTryAgain">
      <input
        type="text"
        [(ngModel)]="searchText"
        (ngModelChange)="onChange($event)"
        [placeholder]="'rest-list.searchPlaceholder' | translate"
        nbInput
        fullWidth
        nbPrefixIcon="search-outline"
      />

      <nb-menu tag="menu" [items]="menuItems | menuFilter : searchText">
        <ng-container *ngFor="let item of menuItems">
          <ng-container *ngIf="!item.children; else subMenu">
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container>
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
          </ng-container>
          <ng-template #subMenu>
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container>
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
            <ng-template let-childItem ngFor [ngForOf]="item.children">
              <nb-menu-item
                [routerLink]="childItem.link"
                routerLinkActive="active"
              >
                <ng-container>
                  <nb-icon [icon]="item.icon"></nb-icon>
                  {{ transformTitle(childItem.title) }}
                </ng-container>
              </nb-menu-item>
            </ng-template>
          </ng-template>
        </ng-container>
      </nb-menu>

      <router-outlet></router-outlet>
    </ngx-one-column-layout>

    <ng-template #errorTryAgain>
      <nb-layout>
        <nb-layout-column>
          <nb-card
            class="card-no-authorize"
            [nbSpinner]="isPending"
            nbSpinnerStatus="primary"
            nbSpinnerSize="large"
          >
            <nb-card-header></nb-card-header>
            <nb-card-body>
              <div class="p-2" *ngIf="!isPending">
                <h3 class="text-center">
                  Vous n'etes pas autorisé à vous connecter
                </h3>

                <!-- <nb-alert outline="info" role="alert">
                  <p class="alert-title">
                    <b>Vous serez redirigé vers la page de con</b>
                  </p>
                </nb-alert> -->
                <button
                  nbButton
                  type="primary"
                  (click)="login()"
                  style="display: flex; margin:0 auto"
                >
                  Retour
                </button>
              </div>
              <div *ngIf="isPending" class="p-2">
                <h5 class="text-center">Veuillez patienter</h5>
              </div>
            </nb-card-body>
          </nb-card>
        </nb-layout-column>
      </nb-layout>
    </ng-template>
  `,
})
export class RestMainComponentComponent implements OnInit {
  searchText = '';
  menuItems = [...this.serviceConfig.generateMenus()];
  title$: Observable<string>;
  pageLoad = false;
  isPending = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceConfig: RestAdminConfigService,
    private restLangService: RestLangService,
    private router: Router,
    private serviceRest: RestResourceService
  ) {
    this.title$ = this.activatedRoute.data.pipe(map((data) => data.title));
  }

  ngOnInit(): void {
    this.restLangService.setInitialAppLanguage();

    this.tcheckPermissions();
  }

  transformTitle(title: string): string {
    return title
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  onChange(event: any) {
    this.searchText = event;
  }

  login() {
    this.router.navigateByUrl('/login');
  }

  tcheckPermissions() {
    const permissions = this.serviceConfig.permission;
    if (permissions.length > 0) {
      permissions.forEach((permission) => {
        switch (permission.type) {
          case PERMISSION.CANLOGIN:
            this.serviceRest
              .getResources({
                api: permission.fieldKey.api.substring(1),
                queryParams: permission.fieldKey.queryParams
                  ? permission.fieldKey.queryParams
                  : {},
              })
              .subscribe(
                (resp) => {
                  const val = {};
                  let isOk = true;

                  permission.fieldKey.fieldForNextQuery.forEach((item) => {
                    val[item] = _.get(resp, item);
                    if (!val[item]) {
                      isOk = false;
                    }
                  });

                  if (!isOk) {
                    localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                    this.isPending = false;
                  } else {
                    this.pageLoad = true;
                    this.isPending = false;
                  }
                },
                (err) => {
                  localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                  this.isPending = false;
                }
              );
            break;

          default:
            break;
        }
      });
    }else{
      this.pageLoad = true;
      this.isPending = false;

      
    }
  }
}
