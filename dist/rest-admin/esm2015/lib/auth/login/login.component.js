import { Component } from "@angular/core";
import { NbLoginComponent } from "@nebular/auth";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/router";
import * as i5 from "@ngx-translate/core";
function LoginComponent_nb_alert_6_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const error_r9 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(error_r9);
} }
function LoginComponent_nb_alert_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-alert", 19);
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Oh snap!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 21);
    i0.ɵɵtemplate(5, LoginComponent_nb_alert_6_li_5_Template, 2, 1, "li", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.errors);
} }
function LoginComponent_nb_alert_7_li_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r11 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", message_r11, " ");
} }
function LoginComponent_nb_alert_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-alert", 24);
    i0.ɵɵelementStart(1, "p", 20);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3, "Hooray!");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ul", 21);
    i0.ɵɵtemplate(5, LoginComponent_nb_alert_7_li_5_Template, 2, 1, "li", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function LoginComponent_ng_container_16_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Email is required! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_16_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Email should be the real one! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LoginComponent_ng_container_16_p_1_Template, 2, 0, "p", 25);
    i0.ɵɵtemplate(2, LoginComponent_ng_container_16_p_2_Template, 2, 0, "p", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(15);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.pattern);
} }
function LoginComponent_ng_container_27_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1, " Password is required! ");
    i0.ɵɵelementEnd();
} }
function LoginComponent_ng_container_27_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" Password should contain from ", ctx_r15.getConfigValue("forms.validation.password.minLength"), " to ", ctx_r15.getConfigValue("forms.validation.password.maxLength"), " characters ");
} }
function LoginComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, LoginComponent_ng_container_27_p_1_Template, 2, 0, "p", 25);
    i0.ɵɵtemplate(2, LoginComponent_ng_container_27_p_2_Template, 2, 2, "p", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(26);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", _r5.errors == null ? null : _r5.errors.required);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (_r5.errors == null ? null : _r5.errors.minlength) || (_r5.errors == null ? null : _r5.errors.maxlength));
} }
function LoginComponent_nb_checkbox_29_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-checkbox", 27);
    i0.ɵɵlistener("ngModelChange", function LoginComponent_nb_checkbox_29_Template_nb_checkbox_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.user.rememberMe = $event; });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngModel", ctx_r7.user.rememberMe);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, "login.rememberMe"));
} }
export class LoginComponent extends NbLoginComponent {
}
LoginComponent.ɵfac = /*@__PURE__*/ function () { let ɵLoginComponent_BaseFactory; return function LoginComponent_Factory(t) { return (ɵLoginComponent_BaseFactory || (ɵLoginComponent_BaseFactory = i0.ɵɵgetInheritedFactory(LoginComponent)))(t || LoginComponent); }; }();
LoginComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LoginComponent, selectors: [["ngx-login"]], features: [i0.ɵɵInheritDefinitionFeature], decls: 33, vars: 36, consts: [["id", "title", 1, "title"], [1, "sub-title"], ["outline", "danger", "role", "alert", 4, "ngIf"], ["outline", "success", "role", "alert", 4, "ngIf"], ["aria-labelledby", "title", 3, "ngSubmit"], ["form", "ngForm"], [1, "form-control-group"], ["for", "input-email", 1, "label"], ["nbInput", "", "fullWidth", "", "name", "login", "id", "input-email", "pattern", ".+@.+\\..+", "placeholder", "Email address", "fieldSize", "large", "autofocus", "", 3, "ngModel", "status", "required", "ngModelChange"], ["email", "ngModel"], [4, "ngIf"], [1, "label-with-link"], ["for", "input-password", 1, "label"], ["routerLink", "../request-password", 1, "forgot-password", "caption-2"], ["nbInput", "", "fullWidth", "", "name", "password", "type", "password", "id", "input-password", "placeholder", "Password", "fieldSize", "large", 3, "ngModel", "status", "required", "minlength", "maxlength", "ngModelChange"], ["password", "ngModel"], [1, "form-control-group", "accept-group"], ["name", "rememberMe", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["nbButton", "", "fullWidth", "", "status", "primary", "size", "large", 3, "disabled"], ["outline", "danger", "role", "alert"], [1, "alert-title"], [1, "alert-message-list"], ["class", "alert-message", 4, "ngFor", "ngForOf"], [1, "alert-message"], ["outline", "success", "role", "alert"], ["class", "caption status-danger", 4, "ngIf"], [1, "caption", "status-danger"], ["name", "rememberMe", 3, "ngModel", "ngModelChange"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "h1", 0);
        i0.ɵɵtext(1);
        i0.ɵɵpipe(2, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "p", 1);
        i0.ɵɵtext(4);
        i0.ɵɵpipe(5, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, LoginComponent_nb_alert_6_Template, 6, 1, "nb-alert", 2);
        i0.ɵɵtemplate(7, LoginComponent_nb_alert_7_Template, 6, 1, "nb-alert", 3);
        i0.ɵɵelementStart(8, "form", 4, 5);
        i0.ɵɵlistener("ngSubmit", function LoginComponent_Template_form_ngSubmit_8_listener() { return ctx.login(); });
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "label", 7);
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "input", 8, 9);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_14_listener($event) { return ctx.user.login = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(16, LoginComponent_ng_container_16_Template, 3, 2, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "div", 6);
        i0.ɵɵelementStart(18, "span", 11);
        i0.ɵɵelementStart(19, "label", 12);
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "a", 13);
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "input", 14, 15);
        i0.ɵɵlistener("ngModelChange", function LoginComponent_Template_input_ngModelChange_25_listener($event) { return ctx.user.password = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(27, LoginComponent_ng_container_27_Template, 3, 2, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(28, "div", 16);
        i0.ɵɵtemplate(29, LoginComponent_nb_checkbox_29_Template, 3, 4, "nb-checkbox", 17);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(30, "button", 18);
        i0.ɵɵtext(31);
        i0.ɵɵpipe(32, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(9);
        const _r3 = i0.ɵɵreference(15);
        const _r5 = i0.ɵɵreference(26);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 24, "login.main"));
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(5, 26, "login.labelMessage"), ".");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMessages.error && (ctx.errors == null ? null : ctx.errors.length) && !ctx.submitted);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMessages.success && (ctx.messages == null ? null : ctx.messages.length) && !ctx.submitted);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(13, 28, "login.email"), ":");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.user.login)("status", _r3.dirty ? _r3.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.email.required"));
        i0.ɵɵattribute("aria-invalid", _r3.invalid && _r3.touched ? true : null);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r3.invalid && _r3.touched);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(21, 30, "login.password"), ":");
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(24, 32, "login.forgetPassword"), "?");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.user.password)("status", _r5.dirty ? _r5.invalid ? "danger" : "success" : "basic")("required", ctx.getConfigValue("forms.validation.password.required"))("minlength", ctx.getConfigValue("forms.validation.password.minLength"))("maxlength", ctx.getConfigValue("forms.validation.password.maxLength"));
        i0.ɵɵattribute("aria-invalid", _r5.invalid && _r5.touched ? true : null);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", _r5.invalid && _r5.touched);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.rememberMe);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("btn-pulse", ctx.submitted);
        i0.ɵɵproperty("disabled", ctx.submitted || !_r2.valid);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(32, 34, "login.logIn"), " ");
    } }, directives: [i1.NgIf, i2.ɵNgNoValidate, i2.NgControlStatusGroup, i2.NgForm, i3.NbInputDirective, i2.DefaultValueAccessor, i2.PatternValidator, i2.NgControlStatus, i2.NgModel, i2.RequiredValidator, i4.RouterLinkWithHref, i2.MinLengthValidator, i2.MaxLengthValidator, i3.NbButtonComponent, i3.NbAlertComponent, i1.NgForOf, i3.NbCheckboxComponent], pipes: [i5.TranslatePipe], styles: [".navigation .link nb-icon{display:none!important}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoginComponent, [{
        type: Component,
        args: [{
                selector: "ngx-login",
                templateUrl: "./login.component.html",
                styleUrls: ["./login.component.scss"],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDUzdDLDhCQUF1RDtJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCw4QkFBVzs7O0lBUHRFLG9DQUlDO0lBQ0MsNkJBQXVCO0lBQUEseUJBQUc7SUFBQSx3QkFBUTtJQUFBLGlCQUFJO0lBQUEsaUJBQUk7SUFDMUMsOEJBQStCO0lBQzdCLHlFQUF1RTtJQUN6RSxpQkFBSztJQUNQLGlCQUFXOzs7SUFGZSxlQUFTO0lBQVQsdUNBQVM7OztJQVcvQiw4QkFBMkQ7SUFDekQsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxlQUNGO0lBREUsNENBQ0Y7OztJQVRKLG9DQUlDO0lBQ0MsNkJBQXVCO0lBQUEseUJBQUc7SUFBQSx1QkFBTztJQUFBLGlCQUFJO0lBQUEsaUJBQUk7SUFDekMsOEJBQStCO0lBQzdCLHlFQUVLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBVzs7O0lBSmlCLGVBQVc7SUFBWCx5Q0FBVzs7O0lBMkJqQyw2QkFBZ0U7SUFDOUQsb0NBQ0Y7SUFBQSxpQkFBSTs7O0lBQ0osNkJBQStEO0lBQzdELCtDQUNGO0lBQUEsaUJBQUk7OztJQU5OLDZCQUFxRDtJQUNuRCw0RUFFSTtJQUNKLDRFQUVJO0lBQ04sMEJBQWU7Ozs7SUFOcUIsZUFBNEI7SUFBNUIsc0VBQTRCO0lBRzVCLGVBQTJCO0lBQTNCLHFFQUEyQjs7O0lBa0M3RCw2QkFBbUU7SUFDakUsdUNBQ0Y7SUFBQSxpQkFBSTs7O0lBQ0osNkJBR0M7SUFDQyxZQUlGO0lBQUEsaUJBQUk7OztJQUpGLGVBSUY7SUFKRSw2TUFJRjs7O0lBWkYsNkJBQTJEO0lBQ3pELDRFQUVJO0lBQ0osNEVBUUk7SUFDTiwwQkFBZTs7OztJQVpxQixlQUErQjtJQUEvQixzRUFBK0I7SUFLOUQsZUFBOEQ7SUFBOUQsK0hBQThEOzs7O0lBV25FLHVDQUlHO0lBRkQscU9BQTZCO0lBRTVCLFlBQW9DOztJQUFBLGlCQUN0Qzs7O0lBSEMsZ0RBQTZCO0lBRTVCLGVBQW9DO0lBQXBDLDhEQUFvQzs7QURqRzNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCOzs4TkFBdkMsY0FBYyxTQUFkLGNBQWM7aUVBQWQsY0FBYztRQ1IzQiw2QkFBNkI7UUFBQSxZQUE4Qjs7UUFBQSxpQkFBSztRQUNoRSw0QkFBcUI7UUFBQSxZQUF1Qzs7UUFBQSxpQkFBSTtRQUVoRSx5RUFTVztRQUVYLHlFQVdXO1FBRVgsa0NBQWtFO1FBQTVELCtGQUFZLFdBQU8sSUFBQztRQUN4QiwrQkFBZ0M7UUFDOUIsaUNBQ0c7UUFBQSxhQUFnQzs7UUFBQSxpQkFDbEM7UUFDRCxvQ0FjRTtRQVhBLDRJQUF3QjtRQUgxQixpQkFjRTtRQUNGLG9GQU9lO1FBQ2pCLGlCQUFNO1FBRU4sK0JBQWdDO1FBQzlCLGlDQUE4QjtRQUM1QixrQ0FDRztRQUFBLGFBQW1DOztRQUFBLGlCQUNyQztRQUNELDhCQUNHO1FBQUEsYUFBeUM7O1FBQUEsaUJBQzNDO1FBQ0gsaUJBQU87UUFDUCxzQ0FpQkU7UUFkQSwrSUFBMkI7UUFIN0IsaUJBaUJFO1FBQ0Ysb0ZBYWU7UUFDakIsaUJBQU07UUFFTixnQ0FBNkM7UUFDM0Msa0ZBS0M7UUFDSCxpQkFBTTtRQUVOLG1DQU9DO1FBQ0MsYUFDRjs7UUFBQSxpQkFBUztRQUNYLGlCQUFPOzs7OztRQXZIc0IsZUFBOEI7UUFBOUIseURBQThCO1FBQ3RDLGVBQXVDO1FBQXZDLDJFQUF1QztRQUd6RCxlQUF3RDtRQUF4RCxrSEFBd0Q7UUFXeEQsZUFBNEQ7UUFBNUQsd0hBQTREO1FBZXhELGVBQWdDO1FBQWhDLHFFQUFnQztRQUtqQyxlQUF3QjtRQUF4Qix3Q0FBd0Isb0VBQUEsbUVBQUE7UUFVeEIsd0VBQWtFO1FBRXJELGVBQW9DO1FBQXBDLGlEQUFvQztRQWE5QyxlQUFtQztRQUFuQyx3RUFBbUM7UUFHbkMsZUFBeUM7UUFBekMsOEVBQXlDO1FBTTVDLGVBQTJCO1FBQTNCLDJDQUEyQixvRUFBQSxzRUFBQSx3RUFBQSx3RUFBQTtRQWEzQix3RUFBd0U7UUFFM0QsZUFBMEM7UUFBMUMsaURBQTBDO1FBb0J0RCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFXbkIsZUFBNkI7UUFBN0IsMENBQTZCO1FBRDdCLHNEQUFxQztRQUdyQyxlQUNGO1FBREUsc0VBQ0Y7O3VGRDlHVyxjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYkxvZ2luQ29tcG9uZW50IH0gZnJvbSBcIkBuZWJ1bGFyL2F1dGhcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5neC1sb2dpblwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuc2Nzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgZXh0ZW5kcyBOYkxvZ2luQ29tcG9uZW50IHt9XG4iLCI8aDEgaWQ9XCJ0aXRsZVwiIGNsYXNzPVwidGl0bGVcIj57eyBcImxvZ2luLm1haW5cIiB8IHRyYW5zbGF0ZSB9fTwvaDE+XG48cCBjbGFzcz1cInN1Yi10aXRsZVwiPnt7IFwibG9naW4ubGFiZWxNZXNzYWdlXCIgfCB0cmFuc2xhdGUgfX0uPC9wPlxuXG48bmItYWxlcnRcbiAgKm5nSWY9XCJzaG93TWVzc2FnZXMuZXJyb3IgJiYgZXJyb3JzPy5sZW5ndGggJiYgIXN1Ym1pdHRlZFwiXG4gIG91dGxpbmU9XCJkYW5nZXJcIlxuICByb2xlPVwiYWxlcnRcIlxuPlxuICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+PGI+T2ggc25hcCE8L2I+PC9wPlxuICA8dWwgY2xhc3M9XCJhbGVydC1tZXNzYWdlLWxpc3RcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IGVycm9yIG9mIGVycm9yc1wiIGNsYXNzPVwiYWxlcnQtbWVzc2FnZVwiPnt7IGVycm9yIH19PC9saT5cbiAgPC91bD5cbjwvbmItYWxlcnQ+XG5cbjxuYi1hbGVydFxuICAqbmdJZj1cInNob3dNZXNzYWdlcy5zdWNjZXNzICYmIG1lc3NhZ2VzPy5sZW5ndGggJiYgIXN1Ym1pdHRlZFwiXG4gIG91dGxpbmU9XCJzdWNjZXNzXCJcbiAgcm9sZT1cImFsZXJ0XCJcbj5cbiAgPHAgY2xhc3M9XCJhbGVydC10aXRsZVwiPjxiPkhvb3JheSE8L2I+PC9wPlxuICA8dWwgY2xhc3M9XCJhbGVydC1tZXNzYWdlLWxpc3RcIj5cbiAgICA8bGkgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIiBjbGFzcz1cImFsZXJ0LW1lc3NhZ2VcIj5cbiAgICAgIHt7IG1lc3NhZ2UgfX1cbiAgICA8L2xpPlxuICA8L3VsPlxuPC9uYi1hbGVydD5cblxuPGZvcm0gKG5nU3VibWl0KT1cImxvZ2luKClcIiAjZm9ybT1cIm5nRm9ybVwiIGFyaWEtbGFiZWxsZWRieT1cInRpdGxlXCI+XG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImlucHV0LWVtYWlsXCJcbiAgICAgID57eyBcImxvZ2luLmVtYWlsXCIgfCB0cmFuc2xhdGUgfX06PC9sYWJlbFxuICAgID5cbiAgICA8aW5wdXRcbiAgICAgIG5iSW5wdXRcbiAgICAgIGZ1bGxXaWR0aFxuICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLmxvZ2luXCJcbiAgICAgICNlbWFpbD1cIm5nTW9kZWxcIlxuICAgICAgbmFtZT1cImxvZ2luXCJcbiAgICAgIGlkPVwiaW5wdXQtZW1haWxcIlxuICAgICAgcGF0dGVybj1cIi4rQC4rXFwuLitcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCJcbiAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgIGF1dG9mb2N1c1xuICAgICAgW3N0YXR1c109XCJlbWFpbC5kaXJ0eSA/IChlbWFpbC5pbnZhbGlkID8gJ2RhbmdlcicgOiAnc3VjY2VzcycpIDogJ2Jhc2ljJ1wiXG4gICAgICBbcmVxdWlyZWRdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24uZW1haWwucmVxdWlyZWQnKVwiXG4gICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVwiZW1haWwuaW52YWxpZCAmJiBlbWFpbC50b3VjaGVkID8gdHJ1ZSA6IG51bGxcIlxuICAgIC8+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImVtYWlsLmludmFsaWQgJiYgZW1haWwudG91Y2hlZFwiPlxuICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIiAqbmdJZj1cImVtYWlsLmVycm9ycz8ucmVxdWlyZWRcIj5cbiAgICAgICAgRW1haWwgaXMgcmVxdWlyZWQhXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiICpuZ0lmPVwiZW1haWwuZXJyb3JzPy5wYXR0ZXJuXCI+XG4gICAgICAgIEVtYWlsIHNob3VsZCBiZSB0aGUgcmVhbCBvbmUhXG4gICAgICA8L3A+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXBcIj5cbiAgICA8c3BhbiBjbGFzcz1cImxhYmVsLXdpdGgtbGlua1wiPlxuICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1wYXNzd29yZFwiXG4gICAgICAgID57eyBcImxvZ2luLnBhc3N3b3JkXCIgfCB0cmFuc2xhdGUgfX06PC9sYWJlbFxuICAgICAgPlxuICAgICAgPGEgY2xhc3M9XCJmb3Jnb3QtcGFzc3dvcmQgY2FwdGlvbi0yXCIgcm91dGVyTGluaz1cIi4uL3JlcXVlc3QtcGFzc3dvcmRcIlxuICAgICAgICA+e3sgXCJsb2dpbi5mb3JnZXRQYXNzd29yZFwiIHwgdHJhbnNsYXRlIH19PzwvYVxuICAgICAgPlxuICAgIDwvc3Bhbj5cbiAgICA8aW5wdXRcbiAgICAgIG5iSW5wdXRcbiAgICAgIGZ1bGxXaWR0aFxuICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnBhc3N3b3JkXCJcbiAgICAgICNwYXNzd29yZD1cIm5nTW9kZWxcIlxuICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICBpZD1cImlucHV0LXBhc3N3b3JkXCJcbiAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgW3N0YXR1c109XCJcbiAgICAgICAgcGFzc3dvcmQuZGlydHkgPyAocGFzc3dvcmQuaW52YWxpZCA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKSA6ICdiYXNpYydcbiAgICAgIFwiXG4gICAgICBbcmVxdWlyZWRdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQucmVxdWlyZWQnKVwiXG4gICAgICBbbWlubGVuZ3RoXT1cImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1pbkxlbmd0aCcpXCJcbiAgICAgIFttYXhsZW5ndGhdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWF4TGVuZ3RoJylcIlxuICAgICAgW2F0dHIuYXJpYS1pbnZhbGlkXT1cInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZCA/IHRydWUgOiBudWxsXCJcbiAgICAvPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIj5cbiAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCIgKm5nSWY9XCJwYXNzd29yZC5lcnJvcnM/LnJlcXVpcmVkXCI+XG4gICAgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkIVxuICAgICAgPC9wPlxuICAgICAgPHBcbiAgICAgICAgY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIlxuICAgICAgICAqbmdJZj1cInBhc3N3b3JkLmVycm9ycz8ubWlubGVuZ3RoIHx8IHBhc3N3b3JkLmVycm9ycz8ubWF4bGVuZ3RoXCJcbiAgICAgID5cbiAgICAgICAgUGFzc3dvcmQgc2hvdWxkIGNvbnRhaW4gZnJvbVxuICAgICAgICB7eyBnZXRDb25maWdWYWx1ZShcImZvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWluTGVuZ3RoXCIpIH19IHRvXG4gICAgICAgIHt7IGdldENvbmZpZ1ZhbHVlKFwiZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5tYXhMZW5ndGhcIikgfX1cbiAgICAgICAgY2hhcmFjdGVyc1xuICAgICAgPC9wPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwIGFjY2VwdC1ncm91cFwiPlxuICAgIDxuYi1jaGVja2JveFxuICAgICAgbmFtZT1cInJlbWVtYmVyTWVcIlxuICAgICAgWyhuZ01vZGVsKV09XCJ1c2VyLnJlbWVtYmVyTWVcIlxuICAgICAgKm5nSWY9XCJyZW1lbWJlck1lXCJcbiAgICAgID57eyBcImxvZ2luLnJlbWVtYmVyTWVcIiB8IHRyYW5zbGF0ZSB9fTwvbmItY2hlY2tib3hcbiAgICA+XG4gIDwvZGl2PlxuXG4gIDxidXR0b25cbiAgICBuYkJ1dHRvblxuICAgIGZ1bGxXaWR0aFxuICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgIHNpemU9XCJsYXJnZVwiXG4gICAgW2Rpc2FibGVkXT1cInN1Ym1pdHRlZCB8fCAhZm9ybS52YWxpZFwiXG4gICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJzdWJtaXR0ZWRcIlxuICA+XG4gICAge3sgXCJsb2dpbi5sb2dJblwiIHwgdHJhbnNsYXRlIH19XG4gIDwvYnV0dG9uPlxuPC9mb3JtPlxuXG48IS0tIDxzZWN0aW9uXG4gICpuZ0lmPVwic29jaWFsTGlua3MgJiYgc29jaWFsTGlua3MubGVuZ3RoID4gMFwiXG4gIGNsYXNzPVwibGlua3NcIlxuICBhcmlhLWxhYmVsPVwiU29jaWFsIHNpZ24gaW5cIlxuPlxuICBvciBlbnRlciB3aXRoOlxuICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNvY2lhbExpbmsgb2Ygc29jaWFsTGlua3NcIj5cbiAgICAgIDxhXG4gICAgICAgICpuZ0lmPVwic29jaWFsTGluay5saW5rXCJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwic29jaWFsTGluay5saW5rXCJcbiAgICAgICAgW2F0dHIudGFyZ2V0XT1cInNvY2lhbExpbmsudGFyZ2V0XCJcbiAgICAgICAgW2F0dHIuY2xhc3NdPVwic29jaWFsTGluay5pY29uXCJcbiAgICAgICAgW2NsYXNzLndpdGgtaWNvbl09XCJzb2NpYWxMaW5rLmljb25cIlxuICAgICAgPlxuICAgICAgICA8bmItaWNvblxuICAgICAgICAgICpuZ0lmPVwic29jaWFsTGluay5pY29uOyBlbHNlIHRpdGxlXCJcbiAgICAgICAgICBbaWNvbl09XCJzb2NpYWxMaW5rLmljb25cIlxuICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlPnt7IHNvY2lhbExpbmsudGl0bGUgfX08L25nLXRlbXBsYXRlPlxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgKm5nSWY9XCJzb2NpYWxMaW5rLnVybFwiXG4gICAgICAgIFthdHRyLmhyZWZdPVwic29jaWFsTGluay51cmxcIlxuICAgICAgICBbYXR0ci50YXJnZXRdPVwic29jaWFsTGluay50YXJnZXRcIlxuICAgICAgICBbYXR0ci5jbGFzc109XCJzb2NpYWxMaW5rLmljb25cIlxuICAgICAgICBbY2xhc3Mud2l0aC1pY29uXT1cInNvY2lhbExpbmsuaWNvblwiXG4gICAgICA+XG4gICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgKm5nSWY9XCJzb2NpYWxMaW5rLmljb247IGVsc2UgdGl0bGVcIlxuICAgICAgICAgIFtpY29uXT1cInNvY2lhbExpbmsuaWNvblwiXG4gICAgICAgID48L25iLWljb24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+e3sgc29jaWFsTGluay50aXRsZSB9fTwvbmctdGVtcGxhdGU+XG4gICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPiAtLT5cblxuPCEtLSA8c2VjdGlvbiBjbGFzcz1cImFub3RoZXItYWN0aW9uXCIgYXJpYS1sYWJlbD1cIlJlZ2lzdGVyXCI+XG4gIERvbid0IGhhdmUgYW4gYWNjb3VudD9cbiAgPGEgY2xhc3M9XCJ0ZXh0LWxpbmtcIiByb3V0ZXJMaW5rPVwiLi4vcmVnaXN0ZXJcIj5SZWdpc3RlcjwvYT5cbjwvc2VjdGlvbj4gLS0+XG4iXX0=