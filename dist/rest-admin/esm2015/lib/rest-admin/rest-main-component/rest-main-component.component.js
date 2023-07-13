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
import * as i5 from "@angular/common";
import * as i6 from "../../@theme/layouts/one-column/one-column.layout";
import * as i7 from "@nebular/theme";
import * as i8 from "@angular/forms";
import * as i9 from "@ngx-translate/core";
import * as i10 from "./menu-filter.pipe";
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-menu-item", 6);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelement(3, "nb-icon", 7);
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", item_r4.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r5.transformTitle(item_r4.title), " ");
} }
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-menu-item", 6);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "nb-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childItem_r10 = ctx.$implicit;
    const item_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", childItem_r10.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r9.transformTitle(childItem_r10.title), " ");
} }
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-menu-item", 6);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "nb-icon", 7);
    i0.ɵɵtext(3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_ng_template_4_Template, 4, 3, "ng-template", 8);
} if (rf & 2) {
    const item_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("routerLink", item_r4.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r4.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r7.transformTitle(item_r4.title), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r4.children);
} }
function RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_ng_template_2_Template, 5, 4, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const _r6 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r4.children)("ngIfElse", _r6);
} }
function RestMainComponentComponent_ngx_one_column_layout_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-one-column-layout");
    i0.ɵɵelementStart(1, "input", 2);
    i0.ɵɵlistener("ngModelChange", function RestMainComponentComponent_ngx_one_column_layout_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.searchText = $event; })("ngModelChange", function RestMainComponentComponent_ngx_one_column_layout_0_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.onChange($event); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-menu", 3);
    i0.ɵɵpipe(4, "menuFilter");
    i0.ɵɵtemplate(5, RestMainComponentComponent_ngx_one_column_layout_0_ng_container_5_Template, 4, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "router-outlet");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.searchText)("placeholder", i0.ɵɵpipeBind1(2, 4, "rest-list.searchPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("items", i0.ɵɵpipeBind2(4, 6, ctx_r0.menuItems, ctx_r0.searchText));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.menuItems);
} }
function RestMainComponentComponent_ng_template_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "h3", 12);
    i0.ɵɵtext(2, " Vous n'etes pas autoris\u00E9 \u00E0 vous connecter ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 13);
    i0.ɵɵlistener("click", function RestMainComponentComponent_ng_template_1_div_5_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.login(); });
    i0.ɵɵtext(4, " Retour ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestMainComponentComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "h5", 12);
    i0.ɵɵtext(2, "Veuillez patienter");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestMainComponentComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-layout");
    i0.ɵɵelementStart(1, "nb-layout-column");
    i0.ɵɵelementStart(2, "nb-card", 9);
    i0.ɵɵelement(3, "nb-card-header");
    i0.ɵɵelementStart(4, "nb-card-body");
    i0.ɵɵtemplate(5, RestMainComponentComponent_ng_template_1_div_5_Template, 5, 0, "div", 10);
    i0.ɵɵtemplate(6, RestMainComponentComponent_ng_template_1_div_6_Template, 3, 0, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbSpinner", ctx_r2.isPending);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r2.isPending);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isPending);
} }
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
RestMainComponentComponent.ɵfac = function RestMainComponentComponent_Factory(t) { return new (t || RestMainComponentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.RestAdminConfigService), i0.ɵɵdirectiveInject(i3.RestLangService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i4.RestResourceService)); };
RestMainComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestMainComponentComponent, selectors: [["ngx-rest-main-component"]], features: [i0.ɵɵProvidersFeature([MenuFilterPipe])], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["errorTryAgain", ""], ["type", "text", "nbInput", "", "fullWidth", "", "nbPrefixIcon", "search-outline", 3, "ngModel", "placeholder", "ngModelChange"], ["tag", "menu", 3, "items"], [4, "ngFor", "ngForOf"], ["subMenu", ""], ["routerLinkActive", "active", 3, "routerLink"], [3, "icon"], ["ngFor", "", 3, "ngForOf"], ["nbSpinnerStatus", "primary", "nbSpinnerSize", "large", 1, "card-no-authorize", 3, "nbSpinner"], ["class", "p-2", 4, "ngIf"], [1, "p-2"], [1, "text-center"], ["nbButton", "", "type", "primary", 2, "display", "flex", "margin", "0 auto", 3, "click"]], template: function RestMainComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestMainComponentComponent_ngx_one_column_layout_0_Template, 7, 9, "ngx-one-column-layout", 0);
        i0.ɵɵtemplate(1, RestMainComponentComponent_ng_template_1_Template, 7, 3, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngIf", !ctx.isPending && ctx.pageLoad)("ngIfElse", _r1);
    } }, directives: [i5.NgIf, i6.OneColumnLayoutComponent, i7.NbInputDirective, i8.DefaultValueAccessor, i8.NgControlStatus, i8.NgModel, i7.NbMenuComponent, i5.NgForOf, i1.RouterOutlet, i1.RouterLinkActive, i1.RouterLink, i7.NbIconComponent, i7.NbLayoutComponent, i7.NbLayoutColumnComponent, i7.NbCardComponent, i7.NbSpinnerDirective, i7.NbCardHeaderComponent, i7.NbCardBodyComponent, i7.NbButtonComponent], pipes: [i9.TranslatePipe, i10.MenuFilterPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}.card-no-authorize[_ngcontent-%COMP%]{display:block;width:100%;max-width:35rem;min-height:15rem;margin:0 auto}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestMainComponentComponent, [{
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
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestAdminConfigService }, { type: i3.RestLangService }, { type: i1.Router }, { type: i4.RestResourceService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFekUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0lBb0JwQyw2QkFBbUQ7SUFDakQsdUNBQWlFO0lBQy9ELDZCQUFjO0lBQ1osNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTtJQUNqQiwwQkFBZTs7OztJQU5DLGVBQXdCO0lBQXhCLHlDQUF3QjtJQUV6QixlQUFrQjtJQUFsQixtQ0FBa0I7SUFDM0IsZUFDRjtJQURFLHFFQUNGOzs7SUFXQSx1Q0FHQztJQUNDLDZCQUFjO0lBQ1osNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTs7Ozs7SUFQYiwrQ0FBNkI7SUFJbEIsZUFBa0I7SUFBbEIsbUNBQWtCO0lBQzNCLGVBQ0Y7SUFERSwyRUFDRjs7O0lBZEosdUNBQWlFO0lBQy9ELDZCQUFjO0lBQ1osNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTtJQUNmLGdKQVVjOzs7O0lBaEJBLHlDQUF3QjtJQUV6QixlQUFrQjtJQUFsQixt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LENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsQ0FBQyxDQUNGLENBQUM7d0JBQ0osTUFBTTtvQkFFUjt3QkFDRSxNQUFNO2lCQUNUO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjthQUFJO1lBQ0gsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FHeEI7SUFDSCxDQUFDOztvR0F0RlUsMEJBQTBCOzZFQUExQiwwQkFBMEIsNkVBeEYxQixDQUFDLGNBQWMsQ0FBQztRQUV6QiwrR0E0Q3dCO1FBRXhCLDRIQXFDYzs7O1FBbkZVLHFEQUE4QixpQkFBQTs7dUZBc0Y3QywwQkFBMEI7Y0EzRnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDbkQsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxRlQ7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc3RMYW5nU2VydmljZSB9IGZyb20gJy4vLi4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZW51RmlsdGVyUGlwZSB9IGZyb20gJy4vbWVudS1maWx0ZXIucGlwZSc7XG5pbXBvcnQgeyBQRVJNSVNTSU9OIH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBHTE9CQUxTIH0gZnJvbSAnLi4vLi4vdXRpbHMvZ2xvYmFscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LW1haW4tY29tcG9uZW50JyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyddLFxuICBwcm92aWRlcnM6IFtNZW51RmlsdGVyUGlwZV0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5neC1vbmUtY29sdW1uLWxheW91dCAqbmdJZj1cIiFpc1BlbmRpbmcgJiYgcGFnZUxvYWQ7IGVsc2UgZXJyb3JUcnlBZ2FpblwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCJcbiAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0LnNlYXJjaFBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgIG5iSW5wdXRcbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIG5iUHJlZml4SWNvbj1cInNlYXJjaC1vdXRsaW5lXCJcbiAgICAgIC8+XG5cbiAgICAgIDxuYi1tZW51IHRhZz1cIm1lbnVcIiBbaXRlbXNdPVwibWVudUl0ZW1zIHwgbWVudUZpbHRlciA6IHNlYXJjaFRleHRcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBtZW51SXRlbXNcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0uY2hpbGRyZW47IGVsc2Ugc3ViTWVudVwiPlxuICAgICAgICAgICAgPG5iLW1lbnUtaXRlbSBbcm91dGVyTGlua109XCJpdGVtLmxpbmtcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiaXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zZm9ybVRpdGxlKGl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uYi1tZW51LWl0ZW0+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNzdWJNZW51PlxuICAgICAgICAgICAgPG5iLW1lbnUtaXRlbSBbcm91dGVyTGlua109XCJpdGVtLmxpbmtcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiaXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zZm9ybVRpdGxlKGl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uYi1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNoaWxkSXRlbSBuZ0ZvciBbbmdGb3JPZl09XCJpdGVtLmNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgIDxuYi1tZW51LWl0ZW1cbiAgICAgICAgICAgICAgICBbcm91dGVyTGlua109XCJjaGlsZEl0ZW0ubGlua1wiXG4gICAgICAgICAgICAgICAgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiaXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAge3sgdHJhbnNmb3JtVGl0bGUoY2hpbGRJdGVtLnRpdGxlKSB9fVxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25iLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25iLW1lbnU+XG5cbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICA8L25neC1vbmUtY29sdW1uLWxheW91dD5cblxuICAgIDxuZy10ZW1wbGF0ZSAjZXJyb3JUcnlBZ2Fpbj5cbiAgICAgIDxuYi1sYXlvdXQ+XG4gICAgICAgIDxuYi1sYXlvdXQtY29sdW1uPlxuICAgICAgICAgIDxuYi1jYXJkXG4gICAgICAgICAgICBjbGFzcz1cImNhcmQtbm8tYXV0aG9yaXplXCJcbiAgICAgICAgICAgIFtuYlNwaW5uZXJdPVwiaXNQZW5kaW5nXCJcbiAgICAgICAgICAgIG5iU3Bpbm5lclN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgbmJTcGlubmVyU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmItY2FyZC1oZWFkZXI+PC9uYi1jYXJkLWhlYWRlcj5cbiAgICAgICAgICAgIDxuYi1jYXJkLWJvZHk+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTJcIiAqbmdJZj1cIiFpc1BlbmRpbmdcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgVm91cyBuJ2V0ZXMgcGFzIGF1dG9yaXPDqSDDoCB2b3VzIGNvbm5lY3RlclxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8IS0tIDxuYi1hbGVydCBvdXRsaW5lPVwiaW5mb1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJhbGVydC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Yj5Wb3VzIHNlcmV6IHJlZGlyaWfDqSB2ZXJzIGxhIHBhZ2UgZGUgY29uPC9iPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvbmItYWxlcnQ+IC0tPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwibG9naW4oKVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbjowIGF1dG9cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFJldG91clxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzUGVuZGluZ1wiIGNsYXNzPVwicC0yXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGV4dC1jZW50ZXJcIj5WZXVpbGxleiBwYXRpZW50ZXI8L2g1PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmItY2FyZC1ib2R5PlxuICAgICAgICAgIDwvbmItY2FyZD5cbiAgICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuICAgICAgPC9uYi1sYXlvdXQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzZWFyY2hUZXh0ID0gJyc7XG4gIG1lbnVJdGVtcyA9IFsuLi50aGlzLnNlcnZpY2VDb25maWcuZ2VuZXJhdGVNZW51cygpXTtcbiAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHBhZ2VMb2FkID0gZmFsc2U7XG4gIGlzUGVuZGluZyA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgc2VydmljZUNvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlc3RMYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnRpdGxlJCA9IHRoaXMuYWN0aXZhdGVkUm91dGUuZGF0YS5waXBlKG1hcCgoZGF0YSkgPT4gZGF0YS50aXRsZSkpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0TGFuZ1NlcnZpY2Uuc2V0SW5pdGlhbEFwcExhbmd1YWdlKCk7XG5cbiAgICB0aGlzLnRjaGVja1Blcm1pc3Npb25zKCk7XG4gIH1cblxuICB0cmFuc2Zvcm1UaXRsZSh0aXRsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGl0bGVcbiAgICAgIC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEgJDInKVxuICAgICAgLnJlcGxhY2UoL1xcYlxcdy9nLCAobGV0dGVyKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG4gIH1cblxuICBvbkNoYW5nZShldmVudDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gZXZlbnQ7XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcbiAgfVxuXG4gIHRjaGVja1Blcm1pc3Npb25zKCkge1xuICAgIGNvbnN0IHBlcm1pc3Npb25zID0gdGhpcy5zZXJ2aWNlQ29uZmlnLnBlcm1pc3Npb247XG4gICAgaWYgKHBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgc3dpdGNoIChwZXJtaXNzaW9uLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFBFUk1JU1NJT04uQ0FOTE9HSU46XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgIGFwaTogcGVybWlzc2lvbi5maWVsZEtleS5hcGkuc3Vic3RyaW5nKDEpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICA/IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IHt9O1xuICAgICAgICAgICAgICAgICAgbGV0IGlzT2sgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICBwZXJtaXNzaW9uLmZpZWxkS2V5LmZpZWxkRm9yTmV4dFF1ZXJ5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsW2l0ZW1dID0gXy5nZXQocmVzcCwgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaXNPayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgaWYgKCFpc09rKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEdMT0JBTFMuQVVUSF9BUFBfVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGVuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShHTE9CQUxTLkFVVEhfQVBQX1RPS0VOKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1lbHNle1xuICAgICAgdGhpcy5wYWdlTG9hZCA9IHRydWU7XG4gICAgICB0aGlzLmlzUGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICBcbiAgICB9XG4gIH1cbn1cbiJdfQ==