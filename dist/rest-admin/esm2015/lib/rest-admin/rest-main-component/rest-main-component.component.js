import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuFilterPipe } from './menu-filter.pipe';
import { PERMISSION } from '../rest-resource/models/rest-resource.model';
import * as _ from 'lodash';
import { GLOBALS } from '../../utils/globals';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../rest-resource/service/rest-admin-config.service";
import * as i3 from "./../rest-resource/service/rest-lang.service";
import * as i4 from "../rest-resource/service/rest-resource.service";
import * as i5 from "../../@theme/layouts/one-column/one-column.layout";
import * as i6 from "@nebular/theme";
import * as i7 from "@angular/common";
import * as i8 from "@angular/forms";
import * as i9 from "@ngx-translate/core";
import * as i10 from "./menu-filter.pipe";
export class RestMainComponentComponent {
    constructor(activatedRoute, serviceConfig, restLangService, router, serviceRest) {
        this.activatedRoute = activatedRoute;
        this.serviceConfig = serviceConfig;
        this.restLangService = restLangService;
        this.router = router;
        this.serviceRest = serviceRest;
        this.searchText = '';
        this.menuItems = [...this.serviceConfig.generateMenus()];
        this.pageLoad = false;
        this.isPending = true;
        this.title$ = this.activatedRoute.data.pipe(map((data) => data.title));
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        this.tcheckPermissions();
    }
    transformTitle(title) {
        return title
            .replace(/([a-z])([A-Z])/g, '$1 $2')
            .replace(/\b\w/g, (letter) => letter.toUpperCase());
    }
    onChange(event) {
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
                            .subscribe((resp) => {
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
                            }
                            else {
                                this.pageLoad = true;
                                this.isPending = false;
                            }
                        }, (err) => {
                            localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                            this.isPending = false;
                        });
                        break;
                    default:
                        break;
                }
            });
        }
        else {
            this.pageLoad = true;
            this.isPending = false;
        }
    }
}
RestMainComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, deps: [{ token: i1.ActivatedRoute }, { token: i2.RestAdminConfigService }, { token: i3.RestLangService }, { token: i1.Router }, { token: i4.RestResourceService }], target: i0.ɵɵFactoryTarget.Component });
RestMainComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestMainComponentComponent, selector: "ngx-rest-main-component", providers: [MenuFilterPipe], ngImport: i0, template: `
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
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}.card-no-authorize{display:block;width:100%;max-width:35rem;min-height:15rem;margin:0 auto}\n"], components: [{ type: i5.OneColumnLayoutComponent, selector: "ngx-one-column-layout" }, { type: i6.NbMenuComponent, selector: "nb-menu", inputs: ["autoCollapse", "tag", "items"] }, { type: i6.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i6.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i6.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i6.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i6.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i6.NbCardBodyComponent, selector: "nb-card-body" }, { type: i6.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }], directives: [{ type: i7.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i8.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i8.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i8.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i7.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }, { type: i1.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }, { type: i1.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }, { type: i6.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }], pipes: { "translate": i9.TranslatePipe, "menuFilter": i10.MenuFilterPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, decorators: [{
            type: Component,
            args: [{
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
                }]
        }], ctorParameters: function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestAdminConfigService }, { type: i3.RestLangService }, { type: i1.Router }, { type: i4.RestResourceService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFekUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7QUE2RjlDLE1BQU0sT0FBTywwQkFBMEI7SUFNckMsWUFDVSxjQUE4QixFQUM5QixhQUFxQyxFQUNyQyxlQUFnQyxFQUNoQyxNQUFjLEVBQ2QsV0FBZ0M7UUFKaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQUNyQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQVYxQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRXBELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQVFmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMs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QUFjLENBQUMsMEJBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUZUOzJGQUVVLDBCQUEwQjtrQkEzRnRDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7b0JBQ25ELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztvQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUZUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi8uLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9tZW51LWZpbHRlci5waXBlJztcbmltcG9ydCB7IFBFUk1JU1NJT04gfSBmcm9tICcuLi9yZXN0LXJlc291cmNlL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tICcuLi8uLi91dGlscy9nbG9iYWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtbWFpbi1jb21wb25lbnQnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW01lbnVGaWx0ZXJQaXBlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LW9uZS1jb2x1bW4tbGF5b3V0ICpuZ0lmPVwiIWlzUGVuZGluZyAmJiBwYWdlTG9hZDsgZWxzZSBlcnJvclRyeUFnYWluXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgbmJJbnB1dFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbmJQcmVmaXhJY29uPVwic2VhcmNoLW91dGxpbmVcIlxuICAgICAgLz5cblxuICAgICAgPG5iLW1lbnUgdGFnPVwibWVudVwiIFtpdGVtc109XCJtZW51SXRlbXMgfCBtZW51RmlsdGVyIDogc2VhcmNoVGV4dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnVJdGVtc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS5jaGlsZHJlbjsgZWxzZSBzdWJNZW51XCI+XG4gICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNmb3JtVGl0bGUoaXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25iLW1lbnUtaXRlbT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3N1Yk1lbnU+XG4gICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNmb3JtVGl0bGUoaXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25iLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY2hpbGRJdGVtIG5nRm9yIFtuZ0Zvck9mXT1cIml0ZW0uY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgPG5iLW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cImNoaWxkSXRlbS5saW5rXCJcbiAgICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICB7eyB0cmFuc2Zvcm1UaXRsZShjaGlsZEl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmItbWVudS1pdGVtPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmItbWVudT5cblxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvbmd4LW9uZS1jb2x1bW4tbGF5b3V0PlxuXG4gICAgPG5nLXRlbXBsYXRlICNlcnJvclRyeUFnYWluPlxuICAgICAgPG5iLWxheW91dD5cbiAgICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgICAgPG5iLWNhcmRcbiAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1uby1hdXRob3JpemVcIlxuICAgICAgICAgICAgW25iU3Bpbm5lcl09XCJpc1BlbmRpbmdcIlxuICAgICAgICAgICAgbmJTcGlubmVyU3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBuYlNwaW5uZXJTaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuYi1jYXJkLWhlYWRlcj48L25iLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgPG5iLWNhcmQtYm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMlwiICpuZ0lmPVwiIWlzUGVuZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBWb3VzIG4nZXRlcyBwYXMgYXV0b3Jpc8OpIMOgIHZvdXMgY29ubmVjdGVyXG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDwhLS0gPG5iLWFsZXJ0IG91dGxpbmU9XCJpbmZvXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPlZvdXMgc2VyZXogcmVkaXJpZ8OpIHZlcnMgbGEgcGFnZSBkZSBjb248L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9uYi1hbGVydD4gLS0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2dpbigpXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luOjAgYXV0b1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmV0b3VyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNQZW5kaW5nXCIgY2xhc3M9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlZldWlsbGV6IHBhdGllbnRlcjwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYi1jYXJkLWJvZHk+XG4gICAgICAgICAgPC9uYi1jYXJkPlxuICAgICAgICA8L25iLWxheW91dC1jb2x1bW4+XG4gICAgICA8L25iLWxheW91dD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNlYXJjaFRleHQgPSAnJztcbiAgbWVudUl0ZW1zID0gWy4uLnRoaXMuc2VydmljZUNvbmZpZy5nZW5lcmF0ZU1lbnVzKCldO1xuICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcGFnZUxvYWQgPSBmYWxzZTtcbiAgaXNQZW5kaW5nID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVzdExhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0OiBSZXN0UmVzb3VyY2VTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnBpcGUobWFwKChkYXRhKSA9PiBkYXRhLnRpdGxlKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcblxuICAgIHRoaXMudGNoZWNrUGVybWlzc2lvbnMoKTtcbiAgfVxuXG4gIHRyYW5zZm9ybVRpdGxlKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZVxuICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpXG4gICAgICAucmVwbGFjZSgvXFxiXFx3L2csIChsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaFRleHQgPSBldmVudDtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICB9XG5cbiAgdGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSB0aGlzLnNlcnZpY2VDb25maWcucGVybWlzc2lvbjtcbiAgICBpZiAocGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBlcm1pc3Npb24udHlwZSkge1xuICAgICAgICAgIGNhc2UgUEVSTUlTU0lPTi5DQU5MT0dJTjpcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgYXBpOiBwZXJtaXNzaW9uLmZpZWxkS2V5LmFwaS5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG4gICAgICAgICAgICAgICAgICBsZXQgaXNPayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzT2spIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oR0xPQkFMUy5BVVRIX0FQUF9UT0tFTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEdMT0JBTFMuQVVUSF9BUFBfVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnBhZ2VMb2FkID0gdHJ1ZTtcbiAgICAgIHRoaXMuaXNQZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgIFxuICAgIH1cbiAgfVxufVxuIl19