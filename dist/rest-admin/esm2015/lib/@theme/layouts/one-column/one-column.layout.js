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
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
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
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" tag="menu-sidebar" responsive>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLWNvbHVtbi5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL2xheW91dHMvb25lLWNvbHVtbi9vbmUtY29sdW1uLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQXlCMUMsTUFBTSxPQUFPLHdCQUF3Qjs7cUhBQXhCLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLDZEQXBCekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDsyRkFFVSx3QkFBd0I7a0JBdkJwQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7b0JBQ2pDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO29CQUN2QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtb25lLWNvbHVtbi1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi9vbmUtY29sdW1uLmxheW91dC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxuICAgICAgPG5iLWxheW91dC1oZWFkZXIgZml4ZWQ+XG4gICAgICAgIDxuZ3gtaGVhZGVyPjwvbmd4LWhlYWRlcj5cbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cblxuICAgICAgPG5iLXNpZGViYXIgY2xhc3M9XCJtZW51LXNpZGViYXJcIiB0YWc9XCJtZW51LXNpZGViYXJcIiByZXNwb25zaXZlPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1tZW51XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uYi1zaWRlYmFyPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbj5cbiAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwicm91dGVyLW91dGxldFwiPjwvbmctY29udGVudD5cbiAgICAgIDwvbmItbGF5b3V0LWNvbHVtbj5cblxuICAgICAgPG5iLWxheW91dC1mb290ZXIgZml4ZWQ+XG4gICAgICAgIDxuZ3gtZm9vdGVyPjwvbmd4LWZvb3Rlcj5cbiAgICAgIDwvbmItbGF5b3V0LWZvb3Rlcj5cbiAgICA8L25iLWxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50IHt9XG4iXX0=