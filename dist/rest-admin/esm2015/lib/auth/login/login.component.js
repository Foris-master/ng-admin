import { Component } from '@angular/core';
import { NbLoginComponent } from '@nebular/auth';
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
                selector: 'ngx-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lDUzdDLDhCQUF1RDtJQUFBLFlBQVc7SUFBQSxpQkFBSzs7O0lBQWhCLGVBQVc7SUFBWCw4QkFBVzs7O0lBUHRFLG9DQUlDO0lBQ0MsNkJBQXVCO0lBQUEseUJBQUc7SUFBQSx3QkFBUTtJQUFBLGlCQUFJO0lBQUEsaUJBQUk7SUFDMUMsOEJBQStCO0lBQzdCLHlFQUF1RTtJQUN6RSxpQkFBSztJQUNQLGlCQUFXOzs7SUFGZSxlQUFTO0lBQVQsdUNBQVM7OztJQVcvQiw4QkFBMkQ7SUFDekQsWUFDRjtJQUFBLGlCQUFLOzs7SUFESCxlQUNGO0lBREUsNENBQ0Y7OztJQVRKLG9DQUlDO0lBQ0MsNkJBQXVCO0lBQUEseUJBQUc7SUFBQSx1QkFBTztJQUFBLGlCQUFJO0lBQUEsaUJBQUk7SUFDekMsOEJBQStCO0lBQzdCLHlFQUVLO0lBQ1AsaUJBQUs7SUFDUCxpQkFBVzs7O0lBSmlCLGVBQVc7SUFBWCx5Q0FBVzs7O0lBMkJqQyw2QkFBZ0U7SUFDOUQsb0NBQ0Y7SUFBQSxpQkFBSTs7O0lBQ0osNkJBQStEO0lBQzdELCtDQUNGO0lBQUEsaUJBQUk7OztJQU5OLDZCQUFxRDtJQUNuRCw0RUFFSTtJQUNKLDRFQUVJO0lBQ04sMEJBQWU7Ozs7SUFOcUIsZUFBNEI7SUFBNUIsc0VBQTRCO0lBRzVCLGVBQTJCO0lBQTNCLHFFQUEyQjs7O0lBa0M3RCw2QkFBbUU7SUFDakUsdUNBQ0Y7SUFBQSxpQkFBSTs7O0lBQ0osNkJBR0M7SUFDQyxZQUlGO0lBQUEsaUJBQUk7OztJQUpGLGVBSUY7SUFKRSw2TUFJRjs7O0lBWkYsNkJBQTJEO0lBQ3pELDRFQUVJO0lBQ0osNEVBUUk7SUFDTiwwQkFBZTs7OztJQVpxQixlQUErQjtJQUEvQixzRUFBK0I7SUFLOUQsZUFBOEQ7SUFBOUQsK0hBQThEOzs7O0lBV25FLHVDQUlHO0lBRkQscU9BQTZCO0lBRTVCLFlBQW9DOztJQUFBLGlCQUN0Qzs7O0lBSEMsZ0RBQTZCO0lBRTVCLGVBQW9DO0lBQXBDLDhEQUFvQzs7QURqRzNDLE1BQU0sT0FBTyxjQUFlLFNBQVEsZ0JBQWdCOzs4TkFBdkMsY0FBYyxTQUFkLGNBQWM7aUVBQWQsY0FBYztRQ1IzQiw2QkFBNkI7UUFBQSxZQUE4Qjs7UUFBQSxpQkFBSztRQUNoRSw0QkFBcUI7UUFBQSxZQUF1Qzs7UUFBQSxpQkFBSTtRQUVoRSx5RUFTVztRQUVYLHlFQVdXO1FBRVgsa0NBQWtFO1FBQTVELCtGQUFZLFdBQU8sSUFBQztRQUN4QiwrQkFBZ0M7UUFDOUIsaUNBQ0c7UUFBQSxhQUFnQzs7UUFBQSxpQkFDbEM7UUFDRCxvQ0FjRTtRQVhBLDRJQUF3QjtRQUgxQixpQkFjRTtRQUNGLG9GQU9lO1FBQ2pCLGlCQUFNO1FBRU4sK0JBQWdDO1FBQzlCLGlDQUE4QjtRQUM1QixrQ0FDRztRQUFBLGFBQW1DOztRQUFBLGlCQUNyQztRQUNELDhCQUNHO1FBQUEsYUFBeUM7O1FBQUEsaUJBQzNDO1FBQ0gsaUJBQU87UUFDUCxzQ0FpQkU7UUFkQSwrSUFBMkI7UUFIN0IsaUJBaUJFO1FBQ0Ysb0ZBYWU7UUFDakIsaUJBQU07UUFFTixnQ0FBNkM7UUFDM0Msa0ZBS0M7UUFDSCxpQkFBTTtRQUVOLG1DQU9DO1FBQ0MsYUFDRjs7UUFBQSxpQkFBUztRQUNYLGlCQUFPOzs7OztRQXZIc0IsZUFBOEI7UUFBOUIseURBQThCO1FBQ3RDLGVBQXVDO1FBQXZDLDJFQUF1QztRQUd6RCxlQUF3RDtRQUF4RCxrSEFBd0Q7UUFXeEQsZUFBNEQ7UUFBNUQsd0hBQTREO1FBZXhELGVBQWdDO1FBQWhDLHFFQUFnQztRQUtqQyxlQUF3QjtRQUF4Qix3Q0FBd0Isb0VBQUEsbUVBQUE7UUFVeEIsd0VBQWtFO1FBRXJELGVBQW9DO1FBQXBDLGlEQUFvQztRQWE5QyxlQUFtQztRQUFuQyx3RUFBbUM7UUFHbkMsZUFBeUM7UUFBekMsOEVBQXlDO1FBTTVDLGVBQTJCO1FBQTNCLDJDQUEyQixvRUFBQSxzRUFBQSx3RUFBQSx3RUFBQTtRQWEzQix3RUFBd0U7UUFFM0QsZUFBMEM7UUFBMUMsaURBQTBDO1FBb0J0RCxlQUFnQjtRQUFoQixxQ0FBZ0I7UUFXbkIsZUFBNkI7UUFBN0IsMENBQTZCO1FBRDdCLHNEQUFxQztRQUdyQyxlQUNGO1FBREUsc0VBQ0Y7O3VGRDlHVyxjQUFjO2NBTDFCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJMb2dpbkNvbXBvbmVudCB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBleHRlbmRzIE5iTG9naW5Db21wb25lbnQge31cbiIsIjxoMSBpZD1cInRpdGxlXCIgY2xhc3M9XCJ0aXRsZVwiPnt7IFwibG9naW4ubWFpblwiIHwgdHJhbnNsYXRlIH19PC9oMT5cbjxwIGNsYXNzPVwic3ViLXRpdGxlXCI+e3sgXCJsb2dpbi5sYWJlbE1lc3NhZ2VcIiB8IHRyYW5zbGF0ZSB9fS48L3A+XG5cbjxuYi1hbGVydFxuICAqbmdJZj1cInNob3dNZXNzYWdlcy5lcnJvciAmJiBlcnJvcnM/Lmxlbmd0aCAmJiAhc3VibWl0dGVkXCJcbiAgb3V0bGluZT1cImRhbmdlclwiXG4gIHJvbGU9XCJhbGVydFwiXG4+XG4gIDxwIGNsYXNzPVwiYWxlcnQtdGl0bGVcIj48Yj5PaCBzbmFwITwvYj48L3A+XG4gIDx1bCBjbGFzcz1cImFsZXJ0LW1lc3NhZ2UtbGlzdFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgZXJyb3Igb2YgZXJyb3JzXCIgY2xhc3M9XCJhbGVydC1tZXNzYWdlXCI+e3sgZXJyb3IgfX08L2xpPlxuICA8L3VsPlxuPC9uYi1hbGVydD5cblxuPG5iLWFsZXJ0XG4gICpuZ0lmPVwic2hvd01lc3NhZ2VzLnN1Y2Nlc3MgJiYgbWVzc2FnZXM/Lmxlbmd0aCAmJiAhc3VibWl0dGVkXCJcbiAgb3V0bGluZT1cInN1Y2Nlc3NcIlxuICByb2xlPVwiYWxlcnRcIlxuPlxuICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+PGI+SG9vcmF5ITwvYj48L3A+XG4gIDx1bCBjbGFzcz1cImFsZXJ0LW1lc3NhZ2UtbGlzdFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwiYWxlcnQtbWVzc2FnZVwiPlxuICAgICAge3sgbWVzc2FnZSB9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG48L25iLWFsZXJ0PlxuXG48Zm9ybSAobmdTdWJtaXQpPVwibG9naW4oKVwiICNmb3JtPVwibmdGb3JtXCIgYXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVcIj5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtZW1haWxcIlxuICAgICAgPnt7IFwibG9naW4uZW1haWxcIiB8IHRyYW5zbGF0ZSB9fTo8L2xhYmVsXG4gICAgPlxuICAgIDxpbnB1dFxuICAgICAgbmJJbnB1dFxuICAgICAgZnVsbFdpZHRoXG4gICAgICBbKG5nTW9kZWwpXT1cInVzZXIubG9naW5cIlxuICAgICAgI2VtYWlsPVwibmdNb2RlbFwiXG4gICAgICBuYW1lPVwibG9naW5cIlxuICAgICAgaWQ9XCJpbnB1dC1lbWFpbFwiXG4gICAgICBwYXR0ZXJuPVwiLitALitcXC4uK1wiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkZHJlc3NcIlxuICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgYXV0b2ZvY3VzXG4gICAgICBbc3RhdHVzXT1cImVtYWlsLmRpcnR5ID8gKGVtYWlsLmludmFsaWQgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJykgOiAnYmFzaWMnXCJcbiAgICAgIFtyZXF1aXJlZF09XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5lbWFpbC5yZXF1aXJlZCcpXCJcbiAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XCJlbWFpbC5pbnZhbGlkICYmIGVtYWlsLnRvdWNoZWQgPyB0cnVlIDogbnVsbFwiXG4gICAgLz5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW1haWwuaW52YWxpZCAmJiBlbWFpbC50b3VjaGVkXCI+XG4gICAgICA8cCBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiICpuZ0lmPVwiZW1haWwuZXJyb3JzPy5yZXF1aXJlZFwiPlxuICAgICAgICBFbWFpbCBpcyByZXF1aXJlZCFcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCIgKm5nSWY9XCJlbWFpbC5lcnJvcnM/LnBhdHRlcm5cIj5cbiAgICAgICAgRW1haWwgc2hvdWxkIGJlIHRoZSByZWFsIG9uZSFcbiAgICAgIDwvcD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxzcGFuIGNsYXNzPVwibGFiZWwtd2l0aC1saW5rXCI+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiIGZvcj1cImlucHV0LXBhc3N3b3JkXCJcbiAgICAgICAgPnt7IFwibG9naW4ucGFzc3dvcmRcIiB8IHRyYW5zbGF0ZSB9fTo8L2xhYmVsXG4gICAgICA+XG4gICAgICA8YSBjbGFzcz1cImZvcmdvdC1wYXNzd29yZCBjYXB0aW9uLTJcIiByb3V0ZXJMaW5rPVwiLi4vcmVxdWVzdC1wYXNzd29yZFwiXG4gICAgICAgID57eyBcImxvZ2luLmZvcmdldFBhc3N3b3JkXCIgfCB0cmFuc2xhdGUgfX0/PC9hXG4gICAgICA+XG4gICAgPC9zcGFuPlxuICAgIDxpbnB1dFxuICAgICAgbmJJbnB1dFxuICAgICAgZnVsbFdpZHRoXG4gICAgICBbKG5nTW9kZWwpXT1cInVzZXIucGFzc3dvcmRcIlxuICAgICAgI3Bhc3N3b3JkPVwibmdNb2RlbFwiXG4gICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgIGlkPVwiaW5wdXQtcGFzc3dvcmRcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICBmaWVsZFNpemU9XCJsYXJnZVwiXG4gICAgICBbc3RhdHVzXT1cIlxuICAgICAgICBwYXNzd29yZC5kaXJ0eSA/IChwYXNzd29yZC5pbnZhbGlkID8gJ2RhbmdlcicgOiAnc3VjY2VzcycpIDogJ2Jhc2ljJ1xuICAgICAgXCJcbiAgICAgIFtyZXF1aXJlZF09XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5yZXF1aXJlZCcpXCJcbiAgICAgIFttaW5sZW5ndGhdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWluTGVuZ3RoJylcIlxuICAgICAgW21heGxlbmd0aF09XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5tYXhMZW5ndGgnKVwiXG4gICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVwicGFzc3dvcmQuaW52YWxpZCAmJiBwYXNzd29yZC50b3VjaGVkID8gdHJ1ZSA6IG51bGxcIlxuICAgIC8+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhc3N3b3JkLmludmFsaWQgJiYgcGFzc3dvcmQudG91Y2hlZFwiPlxuICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIiAqbmdJZj1cInBhc3N3b3JkLmVycm9ycz8ucmVxdWlyZWRcIj5cbiAgICAgICAgUGFzc3dvcmQgaXMgcmVxdWlyZWQhXG4gICAgICA8L3A+XG4gICAgICA8cFxuICAgICAgICBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiXG4gICAgICAgICpuZ0lmPVwicGFzc3dvcmQuZXJyb3JzPy5taW5sZW5ndGggfHwgcGFzc3dvcmQuZXJyb3JzPy5tYXhsZW5ndGhcIlxuICAgICAgPlxuICAgICAgICBQYXNzd29yZCBzaG91bGQgY29udGFpbiBmcm9tXG4gICAgICAgIHt7IGdldENvbmZpZ1ZhbHVlKFwiZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5taW5MZW5ndGhcIikgfX0gdG9cbiAgICAgICAge3sgZ2V0Q29uZmlnVmFsdWUoXCJmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1heExlbmd0aFwiKSB9fVxuICAgICAgICBjaGFyYWN0ZXJzXG4gICAgICA8L3A+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXAgYWNjZXB0LWdyb3VwXCI+XG4gICAgPG5iLWNoZWNrYm94XG4gICAgICBuYW1lPVwicmVtZW1iZXJNZVwiXG4gICAgICBbKG5nTW9kZWwpXT1cInVzZXIucmVtZW1iZXJNZVwiXG4gICAgICAqbmdJZj1cInJlbWVtYmVyTWVcIlxuICAgICAgPnt7IFwibG9naW4ucmVtZW1iZXJNZVwiIHwgdHJhbnNsYXRlIH19PC9uYi1jaGVja2JveFxuICAgID5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvblxuICAgIG5iQnV0dG9uXG4gICAgZnVsbFdpZHRoXG4gICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgc2l6ZT1cImxhcmdlXCJcbiAgICBbZGlzYWJsZWRdPVwic3VibWl0dGVkIHx8ICFmb3JtLnZhbGlkXCJcbiAgICBbY2xhc3MuYnRuLXB1bHNlXT1cInN1Ym1pdHRlZFwiXG4gID5cbiAgICB7eyBcImxvZ2luLmxvZ0luXCIgfCB0cmFuc2xhdGUgfX1cbiAgPC9idXR0b24+XG48L2Zvcm0+XG4iXX0=