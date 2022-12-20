import { Component, } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../rest-resource/service/rest-admin-config.service";
import * as i2 from "@angular/router";
import * as i3 from "./../rest-resource/service/rest-lang.service";
import * as i4 from "../../@theme/layouts/one-column/one-column.layout";
import * as i5 from "@nebular/theme";
export class RestMainComponentComponent {
    constructor(serviceConfig, activatedRoute, restLangService, router) {
        this.serviceConfig = serviceConfig;
        this.activatedRoute = activatedRoute;
        this.restLangService = restLangService;
        this.router = router;
        this.menu = [...this.serviceConfig.generateMenus()];
    }
    ngOnInit() {
        this.restLangService.setInitialAppLanguage();
        // this.permissionsService.loadPermissions([]);
    }
}
RestMainComponentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, deps: [{ token: i1.RestAdminConfigService }, { token: i2.ActivatedRoute }, { token: i3.RestLangService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
RestMainComponentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestMainComponentComponent, selector: "ngx-rest-main-component", ngImport: i0, template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-dark :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-cosmic :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}.nb-theme-corporate :host ::ng-deep router-outlet+*{display:block;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}\n"], components: [{ type: i4.OneColumnLayoutComponent, selector: "ngx-one-column-layout" }, { type: i5.NbMenuComponent, selector: "nb-menu", inputs: ["autoCollapse", "tag", "items"] }], directives: [{ type: i2.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestMainComponentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-rest-main-component",
                    styleUrls: ["./rest-main-component.component.scss"],
                    template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.RestAdminConfigService }, { type: i2.ActivatedRoute }, { type: i3.RestLangService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFFTCxTQUFTLEdBUVYsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFldkIsTUFBTSxPQUFPLDBCQUEwQjtJQUdyQyxZQUNVLGFBQXFDLEVBQ3JDLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLE1BQWM7UUFIZCxrQkFBYSxHQUFiLGFBQWEsQ0FBd0I7UUFDckMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTnhCLFNBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBUTlDLENBQUM7SUFFRixRQUFRO1FBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdDLCtDQUErQztJQUNqRCxDQUFDOzt1SEFkVSwwQkFBMEI7MkdBQTFCLDBCQUEwQiwrREFQM0I7Ozs7O0dBS1Q7MkZBRVUsMEJBQTBCO2tCQVZ0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLFNBQVMsRUFBRSxDQUFDLHNDQUFzQyxDQUFDO29CQUNuRCxRQUFRLEVBQUU7Ozs7O0dBS1Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tIFwiLi8uLi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2VcIjtcbmltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBDb21wb25lbnQsXG4gIENvbXBvbmVudEZhY3RvcnksXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBOZ01vZHVsZSxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDb250YWluZXJSZWYsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSBcIi4uL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHTE9CQUxTIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2dsb2JhbHNcIjtcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gXCJuZ3gtcGVybWlzc2lvbnNcIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtcmVzdC1tYWluLWNvbXBvbmVudFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmd4LW9uZS1jb2x1bW4tbGF5b3V0PlxuICAgICAgPG5iLW1lbnUgW2l0ZW1zXT1cIm1lbnVcIj48L25iLW1lbnU+XG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9uZ3gtb25lLWNvbHVtbi1sYXlvdXQ+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbWVudSA9IFsuLi50aGlzLnNlcnZpY2VDb25maWcuZ2VuZXJhdGVNZW51cygpXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2VDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByZXN0TGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkgLy8gcHJpdmF0ZSBwZXJtaXNzaW9uc1NlcnZpY2U6IE5neFBlcm1pc3Npb25zU2VydmljZVxuICB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVzdExhbmdTZXJ2aWNlLnNldEluaXRpYWxBcHBMYW5ndWFnZSgpO1xuICAgIC8vIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmxvYWRQZXJtaXNzaW9ucyhbXSk7XG4gIH1cbn1cbiJdfQ==