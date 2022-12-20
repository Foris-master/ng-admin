import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../components/header/header.component";
import * as i3 from "../../components/footer/footer.component";
export class ThreeColumnsLayoutComponent {
}
ThreeColumnsLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThreeColumnsLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ThreeColumnsLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: ThreeColumnsLayoutComponent, selector: "ngx-three-columns-layout", ngImport: i0, template: `
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
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-dark :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-cosmic :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}.nb-theme-corporate :host .menu-sidebar ::ng-deep .scrollable{padding-top:2.25rem}\n"], components: [{ type: i1.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i1.NbLayoutHeaderComponent, selector: "nb-layout-header", inputs: ["fixed", "subheader"] }, { type: i2.HeaderComponent, selector: "ngx-header" }, { type: i1.NbSidebarComponent, selector: "nb-sidebar", inputs: ["compactedBreakpoints", "collapsedBreakpoints", "right", "left", "start", "end", "fixed", "containerFixed", "state", "responsive", "tag"], outputs: ["stateChange", "responsiveStateChange"] }, { type: i1.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i1.NbLayoutFooterComponent, selector: "nb-layout-footer", inputs: ["fixed"] }, { type: i3.FooterComponent, selector: "ngx-footer" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThreeColumnsLayoutComponent, decorators: [{
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
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyZWUtY29sdW1ucy5sYXlvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQHRoZW1lL2xheW91dHMvdGhyZWUtY29sdW1ucy90aHJlZS1jb2x1bW5zLmxheW91dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQStCMUMsTUFBTSxPQUFPLDJCQUEyQjs7d0hBQTNCLDJCQUEyQjs0R0FBM0IsMkJBQTJCLGdFQTFCNUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDsyRkFFVSwyQkFBMkI7a0JBN0J2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUMxQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtdGhyZWUtY29sdW1ucy1sYXlvdXQnLFxuICBzdHlsZVVybHM6IFsnLi90aHJlZS1jb2x1bW5zLmxheW91dC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWxheW91dCB3aW5kb3dNb2RlPlxuICAgICAgPG5iLWxheW91dC1oZWFkZXIgZml4ZWQ+XG4gICAgICAgIDxuZ3gtaGVhZGVyPjwvbmd4LWhlYWRlcj5cbiAgICAgIDwvbmItbGF5b3V0LWhlYWRlcj5cblxuICAgICAgPG5iLXNpZGViYXIgY2xhc3M9XCJtZW51LXNpZGViYXJcIiB0YWc9XCJtZW51LXNpZGViYXJcIiByZXNwb25zaXZlPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJuYi1tZW51XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uYi1zaWRlYmFyPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbiBjbGFzcz1cInNtYWxsXCI+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG5cbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uPlxuICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJyb3V0ZXItb3V0bGV0XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuXG4gICAgICA8bmItbGF5b3V0LWNvbHVtbiBjbGFzcz1cInNtYWxsXCI+XG4gICAgICA8L25iLWxheW91dC1jb2x1bW4+XG5cbiAgICAgIDxuYi1sYXlvdXQtZm9vdGVyIGZpeGVkPlxuICAgICAgICA8bmd4LWZvb3Rlcj48L25neC1mb290ZXI+XG4gICAgICA8L25iLWxheW91dC1mb290ZXI+XG4gICAgPC9uYi1sYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFRocmVlQ29sdW1uc0xheW91dENvbXBvbmVudCB7fVxuIl19