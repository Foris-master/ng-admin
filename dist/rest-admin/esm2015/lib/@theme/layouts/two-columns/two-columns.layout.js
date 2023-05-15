import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../components/header/header.component";
import * as i3 from "../../components/footer/footer.component";
export class TwoColumnsLayoutComponent {
}
TwoColumnsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TwoColumnsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
TwoColumnsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: TwoColumnsLayoutComponent, selector: "ngx-two-columns-layout", ngImport: i0, template: `
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
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: i2.HeaderComponent, selector: "ngx-header" }, { type: i1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: i3.FooterComponent, selector: "ngx-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TwoColumnsLayoutComponent, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdvLWNvbHVtbnMubGF5b3V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0B0aGVtZS9sYXlvdXRzL3R3by1jb2x1bW5zL3R3by1jb2x1bW5zLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQTZCMUMsTUFBTSxPQUFPLHlCQUF5Qjs7c0hBQXpCLHlCQUF5QjswR0FBekIseUJBQXlCLDhEQXhCMUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7MkZBRVUseUJBQXlCO2tCQTNCckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztvQkFDeEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBc0JUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC10d28tY29sdW1ucy1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi90d28tY29sdW1ucy5sYXlvdXQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuYi1sYXlvdXQgd2luZG93TW9kZT5cbiAgICAgIDxuYi1sYXlvdXQtaGVhZGVyIGZpeGVkPlxuICAgICAgICA8bmd4LWhlYWRlcj48L25neC1oZWFkZXI+XG4gICAgICA8L25iLWxheW91dC1oZWFkZXI+XG5cbiAgICAgIDxuYi1zaWRlYmFyIGNsYXNzPVwibWVudS1zaWRlYmFyXCIgdGFnPVwibWVudS1zaWRlYmFyXCIgcmVzcG9uc2l2ZT5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4gY2xhc3M9XCJzbWFsbFwiPlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicm91dGVyLW91dGxldFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XG4gICAgICAgIDxuZ3gtZm9vdGVyPjwvbmd4LWZvb3Rlcj5cbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cblxuICAgIDwvbmItbGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50IHt9XG4iXX0=