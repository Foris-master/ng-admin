import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../../rest-admin/rest-resource/service/rest-admin-config.service";
export class FooterComponent {
    constructor(serviceRestAdmin) {
        this.serviceRestAdmin = serviceRestAdmin;
    }
}
FooterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterComponent, deps: [{ token: i1.RestAdminConfigService }], target: i0.ɵɵFactoryTarget.Component });
FooterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: FooterComponent, selector: "ngx-footer", ngImport: i0, template: `
    <span class="created-by"> <b>{{ serviceRestAdmin.siteName }}</b> copyright </span>
    <div class="socials">
      <a
        href="https://github.com/Foris-master/ngx-admin"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `, isInline: true, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-default :host .socials{font-size:2rem}.nb-theme-default :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default :host .socials a:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-default :host .socials{font-size:1.5rem}}.nb-theme-dark :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-dark :host .socials{font-size:2rem}.nb-theme-dark :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark :host .socials a:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-dark :host .socials{font-size:1.5rem}}.nb-theme-cosmic :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic :host .socials{font-size:2rem}.nb-theme-cosmic :host .socials a{padding:.4rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic :host .socials a:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-cosmic :host .socials{font-size:1.5rem}}.nb-theme-corporate :host{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate :host .socials{font-size:2rem}.nb-theme-corporate :host .socials a{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate :host .socials a:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-corporate :host .socials{font-size:1.5rem}}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: FooterComponent, decorators: [{
            type: Component,
            args: [{
                    selector: "ngx-footer",
                    styleUrls: ["./footer.component.scss"],
                    template: `
    <span class="created-by"> <b>{{ serviceRestAdmin.siteName }}</b> copyright </span>
    <div class="socials">
      <a
        href="https://github.com/Foris-master/ngx-admin"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `,
                }]
        }], ctorParameters: function () { return [{ type: i1.RestAdminConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpQjFDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQ1MsZ0JBQXdDO1FBQXhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7SUFFakQsQ0FBQzs7NEdBSlUsZUFBZTtnR0FBZixlQUFlLGtEQVhoQjs7Ozs7Ozs7O0dBU1Q7MkZBRVUsZUFBZTtrQkFkM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQ3RDLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJuZ3gtZm9vdGVyXCIsXG4gIHN0eWxlVXJsczogW1wiLi9mb290ZXIuY29tcG9uZW50LnNjc3NcIl0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNwYW4gY2xhc3M9XCJjcmVhdGVkLWJ5XCI+IDxiPnt7IHNlcnZpY2VSZXN0QWRtaW4uc2l0ZU5hbWUgfX08L2I+IGNvcHlyaWdodCA8L3NwYW4+XG4gICAgPGRpdiBjbGFzcz1cInNvY2lhbHNcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vRm9yaXMtbWFzdGVyL25neC1hZG1pblwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgIGNsYXNzPVwiaW9uIGlvbi1zb2NpYWwtZ2l0aHViXCJcbiAgICAgID48L2E+XG4gICAgPC9kaXY+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3RlckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzZXJ2aWNlUmVzdEFkbWluOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICApIHtcbiAgfVxufVxuIl19