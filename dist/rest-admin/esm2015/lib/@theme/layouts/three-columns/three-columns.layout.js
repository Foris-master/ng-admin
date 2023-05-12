import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../components/header/header.component";
import * as i3 from "../../components/footer/footer.component";
const _c0 = [[["nb-menu"]], [["router-outlet"]]];
const _c1 = ["nb-menu", "router-outlet"];
export class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.ɵfac = function ThreeColumnsLayoutComponent_Factory(t) { return new (t || ThreeColumnsLayoutComponent)(); };
ThreeColumnsLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ThreeColumnsLayoutComponent, selectors: [["ngx-three-columns-layout"]], ngContentSelectors: _c1, decls: 11, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]], template: function ThreeColumnsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "nb-layout", 0);
        i0.ɵɵelementStart(1, "nb-layout-header", 1);
        i0.ɵɵelement(2, "ngx-header");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-sidebar", 2);
        i0.ɵɵprojection(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "nb-layout-column", 3);
        i0.ɵɵelementStart(6, "nb-layout-column");
        i0.ɵɵprojection(7, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "nb-layout-column", 3);
        i0.ɵɵelementStart(9, "nb-layout-footer", 1);
        i0.ɵɵelement(10, "ngx-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.NbLayoutComponent, i1.NbLayoutHeaderComponent, i2.HeaderComponent, i1.NbSidebarComponent, i1.NbLayoutColumnComponent, i1.NbLayoutFooterComponent, i3.FooterComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThreeColumnsLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-three-columns-layout',
                styleUrls: ['./three-columns.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-column class="small">
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUtY29sdW1ucy5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL2xheW91dHMvdGhyZWUtY29sdW1ucy90aHJlZS1jb2x1bW5zLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBK0IxQyxNQUFNLE9BQU8sMkJBQTJCOztzR0FBM0IsMkJBQTJCOzhFQUEzQiwyQkFBMkI7O1FBekJwQyxvQ0FBc0I7UUFDcEIsMkNBQXdCO1FBQ3RCLDZCQUF5QjtRQUMzQixpQkFBbUI7UUFFbkIscUNBQStEO1FBQzdELGtCQUEwQztRQUM1QyxpQkFBYTtRQUViLHNDQUNtQjtRQUVuQix3Q0FBa0I7UUFDaEIscUJBQWdEO1FBQ2xELGlCQUFtQjtRQUVuQixzQ0FDbUI7UUFFbkIsMkNBQXdCO1FBQ3RCLDhCQUF5QjtRQUMzQixpQkFBbUI7UUFDckIsaUJBQVk7O3VGQUdILDJCQUEyQjtjQTdCdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO2dCQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10aHJlZS1jb2x1bW5zLWxheW91dCcsXG4gIHN0eWxlVXJsczogWycuL3RocmVlLWNvbHVtbnMubGF5b3V0LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItbGF5b3V0IHdpbmRvd01vZGU+XG4gICAgICA8bmItbGF5b3V0LWhlYWRlciBmaXhlZD5cbiAgICAgICAgPG5neC1oZWFkZXI+PC9uZ3gtaGVhZGVyPlxuICAgICAgPC9uYi1sYXlvdXQtaGVhZGVyPlxuXG4gICAgICA8bmItc2lkZWJhciBjbGFzcz1cIm1lbnUtc2lkZWJhclwiIHRhZz1cIm1lbnUtc2lkZWJhclwiIHJlc3BvbnNpdmU+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIm5iLW1lbnVcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25iLXNpZGViYXI+XG5cbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uIGNsYXNzPVwic21hbGxcIj5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInJvdXRlci1vdXRsZXRcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG5cbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uIGNsYXNzPVwic21hbGxcIj5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XG4gICAgICAgIDxuZ3gtZm9vdGVyPjwvbmd4LWZvb3Rlcj5cbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cbiAgICA8L25iLWxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50IHt9XG4iXX0=