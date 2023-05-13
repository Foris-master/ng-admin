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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFekUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7O0lBb0JwQyw2QkFBbUQ7SUFDakQsdUNBQWlFO0lBQy9ELDZCQUFjO0lBQ1osNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTtJQUNqQiwwQkFBZTs7OztJQU5DLGVBQXdCO0lBQXhCLHlDQUF3QjtJQUV6QixlQUFrQjtJQUFsQixtQ0FBa0I7SUFDM0IsZUFDRjtJQURFLHFFQUNGOzs7SUFXQSx1Q0FHQztJQUNDLDZCQUFjO0lBQ1osNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTs7Ozs7SUFQYiwrQ0FBNkI7SUFJbEIsZUFBa0I7SUFBbEIsbUNBQWtCO0lBQzNCLGVBQ0Y7SUFERSwyRUFDRjs7O0lBZEosdUNBQWlFO0lBQy9ELDZCQUFjO0lBQ1osNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTtJQUNmLGdKQVVjOzs7O0lBaEJBLHlDQUF3QjtJQUV6QixlQUFrQjtJQUFsQixt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LENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDekIsQ0FBQyxDQUNGLENBQUM7d0JBQ0osTUFBTTtvQkFFUjt3QkFDRSxNQUFNO2lCQUNUO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O29HQWpGVSwwQkFBMEI7NkVBQTFCLDBCQUEwQiw2RUF4RjFCLENBQUMsY0FBYyxDQUFDO1FBRXpCLCtHQTRDd0I7UUFFeEIsNEhBcUNjOzs7UUFuRlUscURBQThCLGlCQUFBOzt1RkFzRjdDLDBCQUEwQjtjQTNGdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO2dCQUNuRCxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFGVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi8uLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9tZW51LWZpbHRlci5waXBlJztcbmltcG9ydCB7IFBFUk1JU1NJT04gfSBmcm9tICcuLi9yZXN0LXJlc291cmNlL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tICcuLi8uLi91dGlscy9nbG9iYWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtbWFpbi1jb21wb25lbnQnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudC5zY3NzJ10sXG4gIHByb3ZpZGVyczogW01lbnVGaWx0ZXJQaXBlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LW9uZS1jb2x1bW4tbGF5b3V0ICpuZ0lmPVwiIWlzUGVuZGluZyAmJiBwYWdlTG9hZDsgZWxzZSBlcnJvclRyeUFnYWluXCI+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgbmJJbnB1dFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbmJQcmVmaXhJY29uPVwic2VhcmNoLW91dGxpbmVcIlxuICAgICAgLz5cblxuICAgICAgPG5iLW1lbnUgdGFnPVwibWVudVwiIFtpdGVtc109XCJtZW51SXRlbXMgfCBtZW51RmlsdGVyIDogc2VhcmNoVGV4dFwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIG1lbnVJdGVtc1wiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS5jaGlsZHJlbjsgZWxzZSBzdWJNZW51XCI+XG4gICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNmb3JtVGl0bGUoaXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25iLW1lbnUtaXRlbT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3N1Yk1lbnU+XG4gICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNmb3JtVGl0bGUoaXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25iLW1lbnUtaXRlbT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtY2hpbGRJdGVtIG5nRm9yIFtuZ0Zvck9mXT1cIml0ZW0uY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgPG5iLW1lbnUtaXRlbVxuICAgICAgICAgICAgICAgIFtyb3V0ZXJMaW5rXT1cImNoaWxkSXRlbS5saW5rXCJcbiAgICAgICAgICAgICAgICByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICB7eyB0cmFuc2Zvcm1UaXRsZShjaGlsZEl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmItbWVudS1pdGVtPlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmItbWVudT5cblxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvbmd4LW9uZS1jb2x1bW4tbGF5b3V0PlxuXG4gICAgPG5nLXRlbXBsYXRlICNlcnJvclRyeUFnYWluPlxuICAgICAgPG5iLWxheW91dD5cbiAgICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgICAgPG5iLWNhcmRcbiAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1uby1hdXRob3JpemVcIlxuICAgICAgICAgICAgW25iU3Bpbm5lcl09XCJpc1BlbmRpbmdcIlxuICAgICAgICAgICAgbmJTcGlubmVyU3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBuYlNwaW5uZXJTaXplPVwibGFyZ2VcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuYi1jYXJkLWhlYWRlcj48L25iLWNhcmQtaGVhZGVyPlxuICAgICAgICAgICAgPG5iLWNhcmQtYm9keT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtMlwiICpuZ0lmPVwiIWlzUGVuZGluZ1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICBWb3VzIG4nZXRlcyBwYXMgYXV0b3Jpc8OpIMOgIHZvdXMgY29ubmVjdGVyXG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDwhLS0gPG5iLWFsZXJ0IG91dGxpbmU9XCJpbmZvXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPlZvdXMgc2VyZXogcmVkaXJpZ8OpIHZlcnMgbGEgcGFnZSBkZSBjb248L2I+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9uYi1hbGVydD4gLS0+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2dpbigpXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZGlzcGxheTogZmxleDsgbWFyZ2luOjAgYXV0b1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUmV0b3VyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNQZW5kaW5nXCIgY2xhc3M9XCJwLTJcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlZldWlsbGV6IHBhdGllbnRlcjwvaDU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYi1jYXJkLWJvZHk+XG4gICAgICAgICAgPC9uYi1jYXJkPlxuICAgICAgICA8L25iLWxheW91dC1jb2x1bW4+XG4gICAgICA8L25iLWxheW91dD5cbiAgICA8L25nLXRlbXBsYXRlPlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHNlYXJjaFRleHQgPSAnJztcbiAgbWVudUl0ZW1zID0gWy4uLnRoaXMuc2VydmljZUNvbmZpZy5nZW5lcmF0ZU1lbnVzKCldO1xuICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcGFnZUxvYWQgPSBmYWxzZTtcbiAgaXNQZW5kaW5nID0gdHJ1ZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVzdExhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0OiBSZXN0UmVzb3VyY2VTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5kYXRhLnBpcGUobWFwKChkYXRhKSA9PiBkYXRhLnRpdGxlKSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcblxuICAgIHRoaXMudGNoZWNrUGVybWlzc2lvbnMoKTtcbiAgfVxuXG4gIHRyYW5zZm9ybVRpdGxlKHRpdGxlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aXRsZVxuICAgICAgLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpXG4gICAgICAucmVwbGFjZSgvXFxiXFx3L2csIChsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaFRleHQgPSBldmVudDtcbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoJy9sb2dpbicpO1xuICB9XG5cbiAgdGNoZWNrUGVybWlzc2lvbnMoKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSB0aGlzLnNlcnZpY2VDb25maWcucGVybWlzc2lvbjtcbiAgICBpZiAocGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgcGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBlcm1pc3Npb24udHlwZSkge1xuICAgICAgICAgIGNhc2UgUEVSTUlTU0lPTi5DQU5MT0dJTjpcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgYXBpOiBwZXJtaXNzaW9uLmZpZWxkS2V5LmFwaS5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG4gICAgICAgICAgICAgICAgICBsZXQgaXNPayA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICBpc09rID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoIWlzT2spIHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oR0xPQkFMUy5BVVRIX0FQUF9UT0tFTik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEdMT0JBTFMuQVVUSF9BUFBfVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5pc1BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=