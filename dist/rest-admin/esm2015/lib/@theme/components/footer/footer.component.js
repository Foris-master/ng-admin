import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../../rest-admin/rest-resource/service/rest-admin-config.service";
export class FooterComponent {
    constructor(serviceRestAdmin) {
        this.serviceRestAdmin = serviceRestAdmin;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(i0.ɵɵdirectiveInject(i1.RestAdminConfigService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FooterComponent, selectors: [["ngx-footer"]], decls: 6, vars: 1, consts: [[1, "created-by"], [1, "socials"], ["href", "https://github.com/Foris-master/ngx-admin", "target", "_blank", 1, "ion", "ion-social-github"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵelementStart(1, "b");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵtext(3, " copyright ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "div", 1);
        i0.ɵɵelement(5, "a", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.serviceRestAdmin.siteName);
    } }, styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-default   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-dark   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-dark   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-cosmic   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#b4b4db;transition:color ease-out .1s}.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#fff}@media (max-width: 575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}.nb-theme-corporate   [_nghost-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:2rem}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:.4rem;color:#8f9bb3;transition:color ease-out .1s}.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#222b45}@media (max-width: 575.98px){.nb-theme-corporate   [_nghost-%COMP%]   .socials[_ngcontent-%COMP%]{font-size:1.5rem}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FooterComponent, [{
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
    }], function () { return [{ type: i1.RestAdminConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AdGhlbWUvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFpQjFDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLFlBQ1MsZ0JBQXdDO1FBQXhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBd0I7SUFFakQsQ0FBQzs7OEVBSlUsZUFBZTtrRUFBZixlQUFlO1FBVnhCLCtCQUF5QjtRQUFDLHlCQUFHO1FBQUEsWUFBK0I7UUFBQSxpQkFBSTtRQUFDLDJCQUFVO1FBQUEsaUJBQU87UUFDbEYsOEJBQXFCO1FBQ25CLHVCQUlLO1FBQ1AsaUJBQU07O1FBUHVCLGVBQStCO1FBQS9CLG1EQUErQjs7dUZBVW5ELGVBQWU7Y0FkM0IsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztnQkFDdEMsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibmd4LWZvb3RlclwiLFxuICBzdHlsZVVybHM6IFtcIi4vZm9vdGVyLmNvbXBvbmVudC5zY3NzXCJdLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiY3JlYXRlZC1ieVwiPiA8Yj57eyBzZXJ2aWNlUmVzdEFkbWluLnNpdGVOYW1lIH19PC9iPiBjb3B5cmlnaHQgPC9zcGFuPlxuICAgIDxkaXYgY2xhc3M9XCJzb2NpYWxzXCI+XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0ZvcmlzLW1hc3Rlci9uZ3gtYWRtaW5cIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBjbGFzcz1cImlvbiBpb24tc29jaWFsLWdpdGh1YlwiXG4gICAgICA+PC9hPlxuICAgIDwvZGl2PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc2VydmljZVJlc3RBZG1pbjogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gIH1cbn1cbiJdfQ==