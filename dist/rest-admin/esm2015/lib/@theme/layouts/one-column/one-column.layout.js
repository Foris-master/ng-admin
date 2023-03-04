import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../components/header/header.component";
import * as i3 from "../../components/footer/footer.component";
export class OneColumnLayoutComponent {
}
OneColumnLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OneColumnLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
OneColumnLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: OneColumnLayoutComponent, selector: "ngx-one-column-layout", ngImport: i0, template: `
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
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: i2.HeaderComponent, selector: "ngx-header" }, { type: i1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: i3.FooterComponent, selector: "ngx-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OneColumnLayoutComponent, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWNvbHVtbi5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL2xheW91dHMvb25lLWNvbHVtbi9vbmUtY29sdW1uLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQTBCMUMsTUFBTSxPQUFPLHdCQUF3Qjs7cUhBQXhCLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDZEQXJCekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7MkZBRVUsd0JBQXdCO2tCQXhCcEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDdkMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1vbmUtY29sdW1uLWxheW91dCcsXG4gIHN0eWxlVXJsczogWycuL29uZS1jb2x1bW4ubGF5b3V0LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmItbGF5b3V0IHdpbmRvd01vZGU+XG4gICAgICA8bmItbGF5b3V0LWhlYWRlciA+XG4gICAgICAgIDxuZ3gtaGVhZGVyPjwvbmd4LWhlYWRlcj5cbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cblxuICAgICAgPG5iLXNpZGViYXIgY2xhc3M9XCJtZW51LXNpZGViYXJcIiB0YWc9XCJtZW51LXNpZGViYXJcIiByZXNwb25zaXZlPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJpbnB1dFwiPjwvbmctY29udGVudD5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwibmItbWVudVwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItc2lkZWJhcj5cblxuICAgICAgPG5iLWxheW91dC1jb2x1bW4+XG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cInJvdXRlci1vdXRsZXRcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG5cbiAgICAgIDxuYi1sYXlvdXQtZm9vdGVyIGZpeGVkPlxuICAgICAgICA8bmd4LWZvb3Rlcj48L25neC1mb290ZXI+XG4gICAgICA8L25iLWxheW91dC1mb290ZXI+XG4gICAgPC9uYi1sYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIE9uZUNvbHVtbkxheW91dENvbXBvbmVudCB7fVxuIl19