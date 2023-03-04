import { Observable } from 'rxjs';
import { RestLangService } from './../rest-resource/service/rest-lang.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminConfigService } from '../rest-resource/service/rest-admin-config.service';
import { map } from 'rxjs/operators';
import { MenuFilterPipe } from './menu-filter.pipe';

@Component({
  selector: 'ngx-rest-main-component',
  styleUrls: ['./rest-main-component.component.scss'],
  providers: [MenuFilterPipe],
  template: `
    <ngx-one-column-layout>
      <input
        type="text"
        [(ngModel)]="searchText"
        (ngModelChange)="onChange($event)"
        [placeholder]="'rest-list.searchPlaceholder' | translate"
        nbInput
        fullWidth
        nbPrefixIcon="search-outline"
      />

      <nb-menu tag="menu" [items]="menuItems | menuFilter: searchText">
        <ng-container *ngFor="let item of menuItems">
          <ng-container *ngIf="!item.children; else subMenu">
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container
              >
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
          </ng-container>
          <ng-template #subMenu>
            <nb-menu-item [routerLink]="item.link" routerLinkActive="active">
              <ng-container
              >
                <nb-icon [icon]="item.icon"></nb-icon>
                {{ transformTitle(item.title) }}
              </ng-container>
            </nb-menu-item>
            <ng-template let-childItem ngFor [ngForOf]="item.children">
              <nb-menu-item [routerLink]="childItem.link" routerLinkActive="active">
                <ng-container
                >
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
  `,
})
export class RestMainComponentComponent implements OnInit {
  searchText = '';
  menuItems = [...this.serviceConfig.generateMenus()];
  title$: Observable<string>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceConfig: RestAdminConfigService,
    private restLangService: RestLangService,
    private router: Router // private permissionsService: NgxPermissionsService
  ) {
    this.title$ = this.activatedRoute.data.pipe(map((data) => data.title));
  }

  ngOnInit(): void {
    this.restLangService.setInitialAppLanguage();
    // this.permissionsService.loadPermissions([]);
  }

  transformTitle(title: string): string {
    return title.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (letter) => letter.toUpperCase());
  }

  onChange(event: any) {
    this.searchText = event;
  }
}
