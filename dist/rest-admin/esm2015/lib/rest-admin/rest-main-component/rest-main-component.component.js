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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFekUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7QUE2RjlDLE1BQU0sT0FBTywwQkFBMEI7SUFNckMsWUFDVSxjQUE4QixFQUM5QixhQUFxQyxFQUNyQyxlQUFnQyxFQUNoQyxNQUFjLEVBQ2QsV0FBZ0M7UUFKaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQUNyQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFxQjtRQVYxQyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1FBRXBELGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQVFmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMs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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRlQ7MkZBRVUsMEJBQTBCO2tCQTNGdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztvQkFDbkQsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRlQ7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuLy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVudUZpbHRlclBpcGUgfSBmcm9tICcuL21lbnUtZmlsdGVyLnBpcGUnO1xuaW1wb3J0IHsgUEVSTUlTU0lPTiB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgR0xPQkFMUyB9IGZyb20gJy4uLy4uL3V0aWxzL2dsb2JhbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1tYWluLWNvbXBvbmVudCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbTWVudUZpbHRlclBpcGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtb25lLWNvbHVtbi1sYXlvdXQgKm5nSWY9XCIhaXNQZW5kaW5nICYmIHBhZ2VMb2FkOyBlbHNlIGVycm9yVHJ5QWdhaW5cIj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIFsobmdNb2RlbCldPVwic2VhcmNoVGV4dFwiXG4gICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5zZWFyY2hQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICBuYklucHV0XG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBuYlByZWZpeEljb249XCJzZWFyY2gtb3V0bGluZVwiXG4gICAgICAvPlxuXG4gICAgICA8bmItbWVudSB0YWc9XCJtZW51XCIgW2l0ZW1zXT1cIm1lbnVJdGVtcyB8IG1lbnVGaWx0ZXIgOiBzZWFyY2hUZXh0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWVudUl0ZW1zXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLmNoaWxkcmVuOyBlbHNlIHN1Yk1lbnVcIj5cbiAgICAgICAgICAgIDxuYi1tZW51LWl0ZW0gW3JvdXRlckxpbmtdPVwiaXRlbS5saW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIml0ZW0uaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICB7eyB0cmFuc2Zvcm1UaXRsZShpdGVtLnRpdGxlKSB9fVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmItbWVudS1pdGVtPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc3ViTWVudT5cbiAgICAgICAgICAgIDxuYi1tZW51LWl0ZW0gW3JvdXRlckxpbmtdPVwiaXRlbS5saW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIml0ZW0uaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICB7eyB0cmFuc2Zvcm1UaXRsZShpdGVtLnRpdGxlKSB9fVxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmItbWVudS1pdGVtPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIGxldC1jaGlsZEl0ZW0gbmdGb3IgW25nRm9yT2ZdPVwiaXRlbS5jaGlsZHJlblwiPlxuICAgICAgICAgICAgICA8bmItbWVudS1pdGVtXG4gICAgICAgICAgICAgICAgW3JvdXRlckxpbmtdPVwiY2hpbGRJdGVtLmxpbmtcIlxuICAgICAgICAgICAgICAgIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIml0ZW0uaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgIHt7IHRyYW5zZm9ybVRpdGxlKGNoaWxkSXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uYi1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uYi1tZW51PlxuXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9uZ3gtb25lLWNvbHVtbi1sYXlvdXQ+XG5cbiAgICA8bmctdGVtcGxhdGUgI2Vycm9yVHJ5QWdhaW4+XG4gICAgICA8bmItbGF5b3V0PlxuICAgICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgICA8bmItY2FyZFxuICAgICAgICAgICAgY2xhc3M9XCJjYXJkLW5vLWF1dGhvcml6ZVwiXG4gICAgICAgICAgICBbbmJTcGlubmVyXT1cImlzUGVuZGluZ1wiXG4gICAgICAgICAgICBuYlNwaW5uZXJTdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIG5iU3Bpbm5lclNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG5iLWNhcmQtaGVhZGVyPjwvbmItY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICA8bmItY2FyZC1ib2R5PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC0yXCIgKm5nSWY9XCIhaXNQZW5kaW5nXCI+XG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIFZvdXMgbidldGVzIHBhcyBhdXRvcmlzw6kgw6Agdm91cyBjb25uZWN0ZXJcbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8bmItYWxlcnQgb3V0bGluZT1cImluZm9cIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYWxlcnQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+Vm91cyBzZXJleiByZWRpcmlnw6kgdmVycyBsYSBwYWdlIGRlIGNvbjwvYj5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L25iLWFsZXJ0PiAtLT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvZ2luKClcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW46MCBhdXRvXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBSZXRvdXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc1BlbmRpbmdcIiBjbGFzcz1cInAtMlwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyXCI+VmV1aWxsZXogcGF0aWVudGVyPC9oNT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25iLWNhcmQtYm9keT5cbiAgICAgICAgICA8L25iLWNhcmQ+XG4gICAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cbiAgICAgIDwvbmItbGF5b3V0PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2VhcmNoVGV4dCA9ICcnO1xuICBtZW51SXRlbXMgPSBbLi4udGhpcy5zZXJ2aWNlQ29uZmlnLmdlbmVyYXRlTWVudXMoKV07XG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBwYWdlTG9hZCA9IGZhbHNlO1xuICBpc1BlbmRpbmcgPSB0cnVlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHNlcnZpY2VDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZXN0TGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3Q6IFJlc3RSZXNvdXJjZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEucGlwZShtYXAoKGRhdGEpID0+IGRhdGEudGl0bGUpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzdExhbmdTZXJ2aWNlLnNldEluaXRpYWxBcHBMYW5ndWFnZSgpO1xuXG4gICAgdGhpcy50Y2hlY2tQZXJtaXNzaW9ucygpO1xuICB9XG5cbiAgdHJhbnNmb3JtVGl0bGUodGl0bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRpdGxlXG4gICAgICAucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxICQyJylcbiAgICAgIC5yZXBsYWNlKC9cXGJcXHcvZywgKGxldHRlcikgPT4gbGV0dGVyLnRvVXBwZXJDYXNlKCkpO1xuICB9XG5cbiAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IGV2ZW50O1xuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG4gIH1cblxuICB0Y2hlY2tQZXJtaXNzaW9ucygpIHtcbiAgICBjb25zdCBwZXJtaXNzaW9ucyA9IHRoaXMuc2VydmljZUNvbmZpZy5wZXJtaXNzaW9uO1xuICAgIGlmIChwZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBwZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGVybWlzc2lvbi50eXBlKSB7XG4gICAgICAgICAgY2FzZSBQRVJNSVNTSU9OLkNBTkxPR0lOOlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICBhcGk6IHBlcm1pc3Npb24uZmllbGRLZXkuYXBpLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgPyBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICAgICAgICAgIGxldCBpc09rID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbi5maWVsZEtleS5maWVsZEZvck5leHRRdWVyeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbFtpdGVtXSA9IF8uZ2V0KHJlc3AsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgICAgICAgIGlzT2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghaXNPaykge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShHTE9CQUxTLkFVVEhfQVBQX1RPS0VOKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUxvYWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oR0xPQkFMUy5BVVRIX0FQUF9UT0tFTik7XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==