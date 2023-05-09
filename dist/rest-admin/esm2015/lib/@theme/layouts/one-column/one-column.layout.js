import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../components/header/header.component";
import * as i3 from "../../components/footer/footer.component";
const _c0 = [[["input"]], [["nb-menu"]], [["router-outlet"]]];
const _c1 = ["input", "nb-menu", "router-outlet"];
export class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.ɵfac = function OneColumnLayoutComponent_Factory(t) { return new (t || OneColumnLayoutComponent)(); };
OneColumnLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: OneColumnLayoutComponent, selectors: [["ngx-one-column-layout"]], ngContentSelectors: _c1, decls: 10, vars: 0, consts: [["windowMode", ""], ["tag", "menu-sidebar", "responsive", "", 1, "menu-sidebar"], ["fixed", ""]], template: function OneColumnLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵelementStart(0, "nb-layout", 0);
        i0.ɵɵelementStart(1, "nb-layout-header");
        i0.ɵɵelement(2, "ngx-header");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "nb-sidebar", 1);
        i0.ɵɵprojection(4);
        i0.ɵɵprojection(5, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "nb-layout-column");
        i0.ɵɵprojection(7, 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "nb-layout-footer", 2);
        i0.ɵɵelement(9, "ngx-footer");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.NbLayoutComponent, i1.NbLayoutHeaderComponent, i2.HeaderComponent, i1.NbSidebarComponent, i1.NbLayoutColumnComponent, i1.NbLayoutFooterComponent, i3.FooterComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-dark   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .menu-sidebar[_ngcontent-%COMP%]     .scrollable{padding-top:2.25rem}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(OneColumnLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-one-column-layout',
                styleUrls: ['./one-column.layout.scss'],
                template: `
    <nb-layout windowMode>
      <nb-layout-header >
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
        <ng-content select="input"></ng-content>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWNvbHVtbi5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL2xheW91dHMvb25lLWNvbHVtbi9vbmUtY29sdW1uLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBMEIxQyxNQUFNLE9BQU8sd0JBQXdCOztnR0FBeEIsd0JBQXdCOzJFQUF4Qix3QkFBd0I7O1FBcEJqQyxvQ0FBc0I7UUFDcEIsd0NBQW1CO1FBQ2pCLDZCQUF5QjtRQUMzQixpQkFBbUI7UUFFbkIscUNBQStEO1FBQzdELGtCQUF3QztRQUN4QyxxQkFBMEM7UUFDNUMsaUJBQWE7UUFFYix3Q0FBa0I7UUFDaEIscUJBQWdEO1FBQ2xELGlCQUFtQjtRQUVuQiwyQ0FBd0I7UUFDdEIsNkJBQXlCO1FBQzNCLGlCQUFtQjtRQUNyQixpQkFBWTs7dUZBR0gsd0JBQXdCO2NBeEJwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1vbmUtY29sdW1uLWxheW91dCcsXG4gIHN0eWxlVXJsczogWycuL29uZS1jb2x1bW4ubGF5b3V0LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItbGF5b3V0IHdpbmRvd01vZGU+XG4gICAgICA8bmItbGF5b3V0LWhlYWRlciA+XG4gICAgICAgIDxuZ3gtaGVhZGVyPjwvbmd4LWhlYWRlcj5cbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cblxuICAgICAgPG5iLXNpZGViYXIgY2xhc3M9XCJtZW51LXNpZGViYXJcIiB0YWc9XCJtZW51LXNpZGViYXJcIiByZXNwb25zaXZlPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInJvdXRlci1vdXRsZXRcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG5cbiAgICAgIDxuYi1sYXlvdXQtZm9vdGVyIGZpeGVkPlxuICAgICAgICA8bmd4LWZvb3Rlcj48L25neC1mb290ZXI+XG4gICAgICA8L25iLWxheW91dC1mb290ZXI+XG4gICAgPC9uYi1sYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE9uZUNvbHVtbkxheW91dENvbXBvbmVudCB7fVxuIl19