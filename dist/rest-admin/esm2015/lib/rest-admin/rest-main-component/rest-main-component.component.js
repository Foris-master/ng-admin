import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { MenuFilterPipe } from './menu-filter.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../rest-resource/service/rest-admin-config.service";
import * as i3 from "./../rest-resource/service/rest-lang.service";
import * as i4 from "../../@theme/layouts/one-column/one-column.layout";
import * as i5 from "@nebular/theme";
import * as i6 from "@angular/forms";
import * as i7 from "@angular/common";
import * as i8 from "@ngx-translate/core";
import * as i9 from "./menu-filter.pipe";
function RestMainComponentComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-menu-item", 5);
    i0.ɵɵelementContainerStart(2);
    i0.ɵɵelement(3, "nb-icon", 6);
    i0.ɵɵtext(4);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("routerLink", item_r1.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r2.transformTitle(item_r1.title), " ");
} }
function RestMainComponentComponent_ng_container_5_ng_template_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-menu-item", 5);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "nb-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const childItem_r7 = ctx.$implicit;
    const item_r1 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", childItem_r7.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r6.transformTitle(childItem_r7.title), " ");
} }
function RestMainComponentComponent_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-menu-item", 5);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelement(2, "nb-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, RestMainComponentComponent_ng_container_5_ng_template_2_ng_template_4_Template, 4, 3, "ng-template", 7);
} if (rf & 2) {
    const item_r1 = i0.ɵɵnextContext().$implicit;
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("routerLink", item_r1.link);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("icon", item_r1.icon);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.transformTitle(item_r1.title), " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", item_r1.children);
} }
function RestMainComponentComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestMainComponentComponent_ng_container_5_ng_container_1_Template, 5, 3, "ng-container", 3);
    i0.ɵɵtemplate(2, RestMainComponentComponent_ng_container_5_ng_template_2_Template, 5, 4, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const _r3 = i0.ɵɵreference(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r1.children)("ngIfElse", _r3);
} }
export class RestMainComponentComponent {
    constructor(activatedRoute, serviceConfig, restLangService, router // private permissionsService: NgxPermissionsService
    ) {
        this.activatedRoute = activatedRoute;
        this.serviceConfig = serviceConfig;
        this.restLangService = restLangService;
        this.router = router;
        this.searchText = '';
        this.menuItems = [...this.serviceConfig.generateMenus()];
        this.title$ = this.activatedRoute.data.pipe(map((data) => data.title));
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        // this.permissionsService.loadPermissions([]);
    }
    transformTitle(title) {
        return title.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (letter) => letter.toUpperCase());
    }
    onChange(event) {
        this.searchText = event;
    }
}
RestMainComponentComponent.ɵfac = function RestMainComponentComponent_Factory(t) { return new (t || RestMainComponentComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.RestAdminConfigService), i0.ɵɵdirectiveInject(i3.RestLangService), i0.ɵɵdirectiveInject(i1.Router)); };
RestMainComponentComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestMainComponentComponent, selectors: [["ngx-rest-main-component"]], features: [i0.ɵɵProvidersFeature([MenuFilterPipe])], decls: 7, vars: 9, consts: [["type", "text", "nbInput", "", "fullWidth", "", "nbPrefixIcon", "search-outline", 3, "ngModel", "placeholder", "ngModelChange"], ["tag", "menu", 3, "items"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["subMenu", ""], ["routerLinkActive", "active", 3, "routerLink"], [3, "icon"], ["ngFor", "", 3, "ngForOf"]], template: function RestMainComponentComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "ngx-one-column-layout");
        i0.ɵɵelementStart(1, "input", 0);
        i0.ɵɵlistener("ngModelChange", function RestMainComponentComponent_Template_input_ngModelChange_1_listener($event) { return ctx.searchText = $event; })("ngModelChange", function RestMainComponentComponent_Template_input_ngModelChange_1_listener($event) { return ctx.onChange($event); });
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-menu", 1);
        i0.ɵɵpipe(4, "menuFilter");
        i0.ɵɵtemplate(5, RestMainComponentComponent_ng_container_5_Template, 4, 2, "ng-container", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(6, "router-outlet");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngModel", ctx.searchText)("placeholder", i0.ɵɵpipeBind1(2, 4, "rest-list.searchPlaceholder"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("items", i0.ɵɵpipeBind2(4, 6, ctx.menuItems, ctx.searchText));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.menuItems);
    } }, directives: [i4.OneColumnLayoutComponent, i5.NbInputDirective, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel, i5.NbMenuComponent, i7.NgForOf, i1.RouterOutlet, i7.NgIf, i1.RouterLinkActive, i1.RouterLink, i5.NbIconComponent], pipes: [i8.TranslatePipe, i9.MenuFilterPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestMainComponentComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestAdminConfigService }, { type: i3.RestLangService }, { type: i1.Router }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFHbEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7O0lBb0IxQyw2QkFBbUQ7SUFDakQsdUNBQWlFO0lBQy9ELDZCQUNDO0lBQ0MsNkJBQXNDO0lBQ3RDLFlBQ0Y7SUFBQSwwQkFBZTtJQUNqQixpQkFBZTtJQUNqQiwwQkFBZTs7OztJQVBDLGVBQXdCO0lBQXhCLHlDQUF3QjtJQUd6QixlQUFrQjtJQUFsQixtQ0FBa0I7SUFDM0IsZUFDRjtJQURFLHFFQUNGOzs7SUFZQSx1Q0FBc0U7SUFDcEUsNkJBQ0M7SUFDQyw2QkFBc0M7SUFDdEMsWUFDRjtJQUFBLDBCQUFlO0lBQ2pCLGlCQUFlOzs7OztJQU5ELDhDQUE2QjtJQUc5QixlQUFrQjtJQUFsQixtQ0FBa0I7SUFDM0IsZUFDRjtJQURFLDBFQUNGOzs7SUFiSix1Q0FBaUU7SUFDL0QsNkJBQ0M7SUFDQyw2QkFBc0M7SUFDdEMsWUFDRjtJQUFBLDBCQUFlO0lBQ2pCLGlCQUFlO0lBQ2Ysd0hBUWM7Ozs7SUFmQSx5Q0FBd0I7SUFHekIsZUFBa0I7SUFBbEIsbUNBQWtCO0lBQzNCLGVBQ0Y7SUFERSxxRUFDRjtJQUUrQixlQUF5QjtJQUF6QiwwQ0FBeUI7OztJQWxCOUQsNkJBQTZDO0lBQzNDLDRHQVFlO0lBQ2YsMklBaUJjO0lBQ2hCLDBCQUFlOzs7O0lBM0JFLGVBQXNCO0lBQXRCLHdDQUFzQixpQkFBQTs7QUFrQy9DLE1BQU0sT0FBTywwQkFBMEI7SUFJckMsWUFDVSxjQUE4QixFQUM5QixhQUFxQyxFQUNyQyxlQUFnQyxFQUNoQyxNQUFjLENBQUMsb0RBQW9EOztRQUhuRSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQXdCO1FBQ3JDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUHhCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7UUFRbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QywrQ0FBK0M7SUFDakQsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RyxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQVU7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7b0dBeEJVLDBCQUEwQjs2RUFBMUIsMEJBQTBCLDZFQWpEMUIsQ0FBQyxjQUFjLENBQUM7UUFFekIsNkNBQXVCO1FBQ3JCLGdDQVFFO1FBTkEsdUpBQXdCLCtHQUNQLG9CQUFnQixJQURUOztRQUYxQixpQkFRRTtRQUVGLGtDQUFpRTs7UUFDL0QsNkZBNEJlO1FBQ2pCLGlCQUFVO1FBRVYsZ0NBQStCO1FBQ2pDLGlCQUF3Qjs7UUF6Q3BCLGVBQXdCO1FBQXhCLHdDQUF3QixvRUFBQTtRQVFOLGVBQTRDO1FBQTVDLDJFQUE0QztRQUMvQixlQUFZO1FBQVosdUNBQVk7O3VGQW1DdEMsMEJBQTBCO2NBcER0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7Z0JBQ25ELFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOENUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuLy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTWVudUZpbHRlclBpcGUgfSBmcm9tICcuL21lbnUtZmlsdGVyLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1tYWluLWNvbXBvbmVudCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnNjc3MnXSxcbiAgcHJvdmlkZXJzOiBbTWVudUZpbHRlclBpcGVdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtb25lLWNvbHVtbi1sYXlvdXQ+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIlxuICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcbiAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgbmJJbnB1dFxuICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgbmJQcmVmaXhJY29uPVwic2VhcmNoLW91dGxpbmVcIlxuICAgICAgLz5cblxuICAgICAgPG5iLW1lbnUgdGFnPVwibWVudVwiIFtpdGVtc109XCJtZW51SXRlbXMgfCBtZW51RmlsdGVyOiBzZWFyY2hUZXh0XCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgbWVudUl0ZW1zXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLmNoaWxkcmVuOyBlbHNlIHN1Yk1lbnVcIj5cbiAgICAgICAgICAgIDxuYi1tZW51LWl0ZW0gW3JvdXRlckxpbmtdPVwiaXRlbS5saW5rXCIgcm91dGVyTGlua0FjdGl2ZT1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBbaWNvbl09XCJpdGVtLmljb25cIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAge3sgdHJhbnNmb3JtVGl0bGUoaXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25iLW1lbnUtaXRlbT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI3N1Yk1lbnU+XG4gICAgICAgICAgICA8bmItbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIml0ZW0ubGlua1wiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gW2ljb25dPVwiaXRlbS5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgIHt7IHRyYW5zZm9ybVRpdGxlKGl0ZW0udGl0bGUpIH19XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uYi1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgbGV0LWNoaWxkSXRlbSBuZ0ZvciBbbmdGb3JPZl09XCJpdGVtLmNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgIDxuYi1tZW51LWl0ZW0gW3JvdXRlckxpbmtdPVwiY2hpbGRJdGVtLmxpbmtcIiByb3V0ZXJMaW5rQWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1pY29uIFtpY29uXT1cIml0ZW0uaWNvblwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgIHt7IHRyYW5zZm9ybVRpdGxlKGNoaWxkSXRlbS50aXRsZSkgfX1cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uYi1tZW51LWl0ZW0+XG4gICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uYi1tZW51PlxuXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9uZ3gtb25lLWNvbHVtbi1sYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc2VhcmNoVGV4dCA9ICcnO1xuICBtZW51SXRlbXMgPSBbLi4udGhpcy5zZXJ2aWNlQ29uZmlnLmdlbmVyYXRlTWVudXMoKV07XG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHNlcnZpY2VDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZXN0TGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyIC8vIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy50aXRsZSQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLmRhdGEucGlwZShtYXAoKGRhdGEpID0+IGRhdGEudGl0bGUpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzdExhbmdTZXJ2aWNlLnNldEluaXRpYWxBcHBMYW5ndWFnZSgpO1xuICAgIC8vIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmxvYWRQZXJtaXNzaW9ucyhbXSk7XG4gIH1cblxuICB0cmFuc2Zvcm1UaXRsZSh0aXRsZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGl0bGUucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxICQyJykucmVwbGFjZSgvXFxiXFx3L2csIChsZXR0ZXIpID0+IGxldHRlci50b1VwcGVyQ2FzZSgpKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaFRleHQgPSBldmVudDtcbiAgfVxufVxuIl19