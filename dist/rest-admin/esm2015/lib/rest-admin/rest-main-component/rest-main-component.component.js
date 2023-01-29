import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../rest-resource/service/rest-admin-config.service";
import * as i2 from "./../rest-resource/service/rest-lang.service";
import * as i3 from "@angular/router";
import * as i4 from "../../@theme/layouts/one-column/one-column.layout";
import * as i5 from "@nebular/theme";
export class RestMainComponentComponent {
    constructor(serviceConfig, restLangService, router // private permissionsService: NgxPermissionsService
    ) {
        this.serviceConfig = serviceConfig;
        this.restLangService = restLangService;
        this.router = router;
        this.menu = [...this.serviceConfig.generateMenus()];
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        // this.permissionsService.loadPermissions([]);
    }
}
RestMainComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, deps: [{ token: i1.RestAdminConfigService }, { token: i2.RestLangService }, { token: i3.Router }], target: i0.ɵɵFactoryTarget.Component });
RestMainComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestMainComponentComponent, selector: "ngx-rest-main-component", ngImport: i0, template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}\n"], components: [{ type: i4.OneColumnLayoutComponent, selector: "ngx-one-column-layout" }, { type: i5.NbMenuComponent, selector: "nb-menu", inputs: ["autoCollapse", "tag", "items"] }], directives: [{ type: i3.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-rest-main-component',
                    styleUrls: ['./rest-main-component.component.scss'],
                    template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.RestAdminConfigService }, { type: i2.RestLangService }, { type: i3.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFhbEQsTUFBTSxPQUFPLDBCQUEwQjtJQUdyQyxZQUNVLGFBQXFDLEVBQ3JDLGVBQWdDLEVBQ2hDLE1BQWMsQ0FBQyxvREFBb0Q7O1FBRm5FLGtCQUFhLEdBQWIsYUFBYSxDQUF3QjtRQUNyQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUx4QixTQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQU01QyxDQUFDO0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QywrQ0FBK0M7SUFDakQsQ0FBQzs7dUhBWlUsMEJBQTBCOzJHQUExQiwwQkFBMEIsK0RBUDNCOzs7OztHQUtUOzJGQUVVLDBCQUEwQjtrQkFWdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztvQkFDbkQsUUFBUSxFQUFFOzs7OztHQUtUO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi8uLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LW1haW4tY29tcG9uZW50JyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZ3gtb25lLWNvbHVtbi1sYXlvdXQ+XG4gICAgICA8bmItbWVudSBbaXRlbXNdPVwibWVudVwiPjwvbmItbWVudT5cbiAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICA8L25neC1vbmUtY29sdW1uLWxheW91dD5cbiAgYCxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtZW51ID0gWy4uLnRoaXMuc2VydmljZUNvbmZpZy5nZW5lcmF0ZU1lbnVzKCldO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZUNvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJlc3RMYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIgLy8gcHJpdmF0ZSBwZXJtaXNzaW9uc1NlcnZpY2U6IE5neFBlcm1pc3Npb25zU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZXN0TGFuZ1NlcnZpY2Uuc2V0SW5pdGlhbEFwcExhbmd1YWdlKCk7XG4gICAgLy8gdGhpcy5wZXJtaXNzaW9uc1NlcnZpY2UubG9hZFBlcm1pc3Npb25zKFtdKTtcbiAgfVxufVxuIl19