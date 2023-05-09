import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../components/header/header.component";
import * as i3 from "../../components/footer/footer.component";
const _c0 = [[["nb-menu"]], [["router-outlet"]]];
const _c1 = ["nb-menu", "router-outlet"];
export class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.ɵfac = function TwoColumnsLayoutComponent_Factory(t) { return new (t || TwoColumnsLayoutComponent)(); };
TwoColumnsLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TwoColumnsLayoutComponent, selectors: [["ngx-two-columns-layout"]], ngContentSelectors: _c1, decls: 10, vars: 0, consts: [["windowMode", ""], ["fixed", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], [1, "small"]], template: function TwoColumnsLayoutComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(8, "nb-layout-footer", 1);
        i0.ɵɵelement(9, "ngx-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.NbLayoutComponent, i1.NbLayoutHeaderComponent, i2.HeaderComponent, i1.NbSidebarComponent, i1.NbLayoutColumnComponent, i1.NbLayoutFooterComponent, i3.FooterComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TwoColumnsLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-two-columns-layout',
                styleUrls: ['./two-columns.layout.scss'],
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

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>

    </nb-layout>
  `,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLWNvbHVtbnMubGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0B0aGVtZS9sYXlvdXRzL3R3by1jb2x1bW5zL3R3by1jb2x1bW5zLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBNkIxQyxNQUFNLE9BQU8seUJBQXlCOztrR0FBekIseUJBQXlCOzRFQUF6Qix5QkFBeUI7O1FBdkJsQyxvQ0FBc0I7UUFDcEIsMkNBQXdCO1FBQ3RCLDZCQUF5QjtRQUMzQixpQkFBbUI7UUFFbkIscUNBQStEO1FBQzdELGtCQUEwQztRQUM1QyxpQkFBYTtRQUViLHNDQUNtQjtRQUVuQix3Q0FBa0I7UUFDaEIscUJBQWdEO1FBQ2xELGlCQUFtQjtRQUVuQiwyQ0FBd0I7UUFDdEIsNkJBQXlCO1FBQzNCLGlCQUFtQjtRQUVyQixpQkFBWTs7dUZBR0gseUJBQXlCO2NBM0JyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7Z0JBQ3hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10d28tY29sdW1ucy1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi90d28tY29sdW1ucy5sYXlvdXQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1sYXlvdXQgd2luZG93TW9kZT5cbiAgICAgIDxuYi1sYXlvdXQtaGVhZGVyIGZpeGVkPlxuICAgICAgICA8bmd4LWhlYWRlcj48L25neC1oZWFkZXI+XG4gICAgICA8L25iLWxheW91dC1oZWFkZXI+XG5cbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4gY2xhc3M9XCJzbWFsbFwiPlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicm91dGVyLW91dGxldFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XG4gICAgICAgIDxuZ3gtZm9vdGVyPjwvbmd4LWZvb3Rlcj5cbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cblxuICAgIDwvbmItbGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50IHt9XG4iXX0=