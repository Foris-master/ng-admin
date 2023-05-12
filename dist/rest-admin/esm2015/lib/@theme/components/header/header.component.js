import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { GLOBALS } from '../../../utils/globals';
import { filter, map, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../../@core/utils";
import * as i3 from "../../../../lib/rest-admin/rest-resource/service/rest-admin-config.service";
import * as i4 from "@nebular/auth";
import * as i5 from "@angular/router";
import * as i6 from "../../../../lib/rest-admin/rest-resource/service/rest-lang.service";
import * as i7 from "@angular/common/http";
import * as i8 from "@angular/common";
import * as i9 from "@nebular/security";
function HeaderComponent_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const theme_r3 = ctx.$implicit;
    i0.ɵɵproperty("value", theme_r3.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", theme_r3.name, "");
} }
function HeaderComponent_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 9);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "uppercase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const lang_r4 = ctx.$implicit;
    i0.ɵɵproperty("value", lang_r4.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, lang_r4.value), "");
} }
function HeaderComponent_nb_action_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-action", 10);
    i0.ɵɵelement(1, "nb-user", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbContextMenu", ctx_r2.userMenu)("name", ctx_r2.user == null ? null : ctx_r2.user.name)("picture", (ctx_r2.user == null ? null : ctx_r2.user.picture) ? ctx_r2.user == null ? null : ctx_r2.user.picture : ctx_r2.user == null ? null : ctx_r2.user.defaultPicture);
} }
const _c0 = function () { return ["view", "user"]; };
export class HeaderComponent {
    constructor(sidebarService, menuService, themeService, layoutService, breakpointService, serviceRestAdmin, authService, router, langService, httpClient) {
        this.sidebarService = sidebarService;
        this.menuService = menuService;
        this.themeService = themeService;
        this.layoutService = layoutService;
        this.breakpointService = breakpointService;
        this.serviceRestAdmin = serviceRestAdmin;
        this.authService = authService;
        this.router = router;
        this.langService = langService;
        this.httpClient = httpClient;
        this.destroy$ = new Subject();
        this.userPictureOnly = false;
        this.isAuth = false;
        this.themes = [
            {
                value: 'default',
                name: 'Light',
            },
            {
                value: 'dark',
                name: 'Dark',
            },
            {
                value: 'cosmic',
                name: 'Cosmic',
            },
            {
                value: 'corporate',
                name: 'Corporate',
            },
        ];
        this.currentTheme = 'default';
        this.appLanguage = [];
        this.currentLang = '';
        this.userMenu = [{ title: 'Déconnexion' }];
    }
    ngOnInit() {
        this.currentTheme = this.themeService.currentTheme;
        this.appLanguage = this.langService.getLanguages();
        this.currentLang = this.langService.selected;
        const authApp = JSON.parse(localStorage.getItem(GLOBALS.AUTH_APP_TOKEN));
        if (authApp && authApp.value) {
            this.httpClient
                .get(`${this.serviceRestAdmin.restBaseUrl}${this.serviceRestAdmin.restAuthParams.userInfoEndPoint}`)
                .subscribe((resp) => {
                var data = resp;
                var user = {
                    name: resp[this.serviceRestAdmin.restAuthParams.profileNameEndPoint],
                    picture: resp[this.serviceRestAdmin.restAuthParams.profilePictureEndPoint],
                    defaultPicture: 'M',
                };
                var namePath = this.serviceRestAdmin.restAuthParams.profileNameEndPoint.split('.');
                namePath.map((val) => {
                    user['name'] = data[val];
                    data = data[val];
                });
                data = resp;
                var picturePath = this.serviceRestAdmin.restAuthParams.profilePictureEndPoint.split('.');
                picturePath.map((val) => {
                    user['picture'] = data[val];
                    data = data[val];
                });
                if (user['name'])
                    user['defaultPicture'] = `https://ui-avatars.com/api/?name=${user['name'].toString()}&rounded=true`;
                this.user = user;
                this.isAuth = true;
            });
        }
        const { xl } = this.breakpointService.getBreakpointsMap();
        this.themeService
            .onMediaQueryChange()
            .pipe(map(([, currentBreakpoint]) => currentBreakpoint.width < xl), takeUntil(this.destroy$))
            .subscribe((isLessThanXl) => (this.userPictureOnly = isLessThanXl));
        this.themeService
            .onThemeChange()
            .pipe(map(({ name }) => name), takeUntil(this.destroy$))
            .subscribe((themeName) => (this.currentTheme = themeName));
        this.menuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context-menu'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case 'Déconnexion':
                    this.httpClient
                        .post(`${this.serviceRestAdmin.restBaseUrl}${this.serviceRestAdmin.restAuthParams.logoutEndPoint}`, {})
                        .subscribe((resp) => {
                        localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                        this.router.navigateByUrl('/login');
                        this.isAuth = false;
                    }, (err) => {
                        localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                        this.router.navigateByUrl('/login');
                        this.isAuth = false;
                    });
                    break;
                default:
                    console.log('Non pris en charge');
                    break;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    changeTheme(themeName) {
        this.themeService.changeTheme(themeName);
    }
    toggleSidebar() {
        this.sidebarService.toggle(true, 'menu-sidebar');
        this.layoutService.changeLayoutSize();
        return false;
    }
    navigateHome() {
        this.menuService.navigateHome();
        return false;
    }
    signin() {
        this.router.navigateByUrl('/auth/login');
    }
    sigout() {
        this.authService.logout('email');
    }
    changeLang(event) {
        this.langService.setLanguage(event);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(i0.ɵɵdirectiveInject(i1.NbSidebarService), i0.ɵɵdirectiveInject(i1.NbMenuService), i0.ɵɵdirectiveInject(i1.NbThemeService), i0.ɵɵdirectiveInject(i2.LayoutService), i0.ɵɵdirectiveInject(i1.NbMediaBreakpointsService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i4.NbAuthService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.RestLangService), i0.ɵɵdirectiveInject(i7.HttpClient)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HeaderComponent, selectors: [["ngx-header"]], decls: 14, vars: 7, consts: [[1, "header-container"], [1, "logo-container"], ["href", "#", 1, "sidebar-toggle", 3, "click"], ["icon", "menu-2-outline"], ["href", "#", 1, "logo", 3, "click"], ["status", "primary", 3, "selected", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["size", "small"], ["class", "user-action", 4, "nbIsGranted"], [3, "value"], [1, "user-action"], ["nbContextMenuTag", "my-context-menu", 3, "nbContextMenu", "name", "picture"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵlistener("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.toggleSidebar(); });
        i0.ɵɵelement(3, "nb-icon", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "a", 4);
        i0.ɵɵlistener("click", function HeaderComponent_Template_a_click_4_listener() { return ctx.navigateHome(); });
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nb-select", 5);
        i0.ɵɵlistener("selectedChange", function HeaderComponent_Template_nb_select_selectedChange_7_listener($event) { return ctx.changeTheme($event); });
        i0.ɵɵtemplate(8, HeaderComponent_nb_option_8_Template, 2, 2, "nb-option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 0);
        i0.ɵɵelementStart(10, "nb-select", 5);
        i0.ɵɵlistener("selectedChange", function HeaderComponent_Template_nb_select_selectedChange_10_listener($event) { return ctx.changeLang($event); });
        i0.ɵɵtemplate(11, HeaderComponent_nb_option_11_Template, 3, 4, "nb-option", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "nb-actions", 7);
        i0.ɵɵtemplate(13, HeaderComponent_nb_action_13_Template, 2, 3, "nb-action", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(6);
        i0.ɵɵtextInterpolate(ctx.serviceRestAdmin.siteName);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("selected", ctx.currentTheme);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.themes);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("selected", ctx.currentLang);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.appLanguage);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nbIsGranted", i0.ɵɵpureFunction0(6, _c0));
    } }, directives: [i1.NbIconComponent, i1.NbSelectComponent, i8.NgForOf, i1.NbActionsComponent, i9.NbIsGrantedDirective, i1.NbOptionComponent, i1.NbActionComponent, i1.NbUserComponent, i1.NbContextMenuDirective], pipes: [i8.UpperCasePipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-default   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-default   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-default   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-default   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-default   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-default   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-default   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-dark   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-dark   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-dark   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-dark   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-dark   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #151a30}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #151a30}@media (max-width: 767.98px){.nb-theme-dark   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-dark   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-dark   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-cosmic   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-cosmic   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-cosmic   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-cosmic   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#b4b4db}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #1b1b38}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #1b1b38}@media (max-width: 767.98px){.nb-theme-cosmic   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-cosmic   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}.nb-theme-corporate   [_nghost-%COMP%]{display:flex;justify-content:space-between;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:calc(16rem - 1.25rem)}.nb-theme-corporate   [_nghost-%COMP%]   nb-action[_ngcontent-%COMP%]{height:auto;display:flex;align-content:center}.nb-theme-corporate   [_nghost-%COMP%]   nb-user[_ngcontent-%COMP%]{cursor:pointer}.nb-theme-corporate   [_nghost-%COMP%]     nb-search button{padding:0!important}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:auto}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{text-decoration:none;color:#8f9bb3}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-right:1.25rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]{padding-left:1.25rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .sidebar-toggle[_ngcontent-%COMP%]   nb-icon[_ngcontent-%COMP%]{font-size:1.75rem}.nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{padding:0 1.25rem;font-size:1.75rem;white-space:nowrap;text-decoration:none}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-left:1px solid #edf1f7}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .header-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{border-right:1px solid #edf1f7}@media (max-width: 767.98px){.nb-theme-corporate   [_nghost-%COMP%]   .control-item[_ngcontent-%COMP%]{display:none}.nb-theme-corporate   [_nghost-%COMP%]   .user-action[_ngcontent-%COMP%]{border:none;padding:0}}@media (max-width: 575.98px){.nb-theme-corporate   [_nghost-%COMP%]   nb-select[_ngcontent-%COMP%]{display:none}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HeaderComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-header',
                styleUrls: ['./header.component.scss'],
                templateUrl: './header.component.html',
            }]
    }], function () { return [{ type: i1.NbSidebarService }, { type: i1.NbMenuService }, { type: i1.NbThemeService }, { type: i2.LayoutService }, { type: i1.NbMediaBreakpointsService }, { type: i3.RestAdminConfigService }, { type: i4.NbAuthService }, { type: i5.Router }, { type: i6.RestLangService }, { type: i7.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AdGhlbWUvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBUzdELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0IsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUNGcEQsb0NBQThEO0lBQzVELFlBQWdCO0lBQUEsaUJBQ2pCOzs7SUFGdUMsc0NBQXFCO0lBQzNELGVBQWdCO0lBQWhCLDZDQUFnQjs7O0lBV2xCLG9DQUFpRTtJQUMvRCxZQUE0Qjs7SUFBQSxpQkFDN0I7OztJQUYyQyxxQ0FBb0I7SUFDOUQsZUFBNEI7SUFBNUIsbUVBQTRCOzs7SUFTOUIscUNBQStEO0lBQzdELDhCQU1VO0lBQ1osaUJBQVk7OztJQU5SLGVBQTBCO0lBQTFCLCtDQUEwQix1REFBQSw0S0FBQTs7O0FEaEJsQyxNQUFNLE9BQU8sZUFBZTtJQThCMUIsWUFDVSxjQUFnQyxFQUNoQyxXQUEwQixFQUMxQixZQUE0QixFQUM1QixhQUE0QixFQUM1QixpQkFBNEMsRUFDN0MsZ0JBQXdDLEVBQ3ZDLFdBQTBCLEVBQzFCLE1BQWMsRUFDZCxXQUE0QixFQUM1QixVQUFzQjtRQVR0QixtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7UUFD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QWtCLHVCQUFtQixJQUFDO1FBR3RDLDRFQUVDO1FBQ0gsaUJBQVk7UUFDZCxpQkFBTTtRQUVOLDhCQUE4QjtRQUM1QixxQ0FJQztRQUZDLHdIQUFrQixzQkFBa0IsSUFBQztRQUdyQyw4RUFFQztRQUNILGlCQUFZO1FBRVosc0NBQXlCO1FBS3ZCLDhFQVFZO1FBT2QsaUJBQWE7UUFDZixpQkFBTTs7UUE5Q08sZUFBK0I7UUFBL0IsbURBQStCO1FBSXhDLGVBQXlCO1FBQXpCLDJDQUF5QjtRQUlJLGVBQVM7UUFBVCxvQ0FBUztRQVF0QyxlQUF3QjtRQUF4QiwwQ0FBd0I7UUFJSSxlQUFjO1FBQWQseUNBQWM7UUFVVixlQUE2QjtRQUE3Qix3REFBNkI7O3VGRGRwRCxlQUFlO2NBTDNCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RDLFdBQVcsRUFBRSx5QkFBeUI7YUFDdkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsXG4gIE5iTWVudVNlcnZpY2UsXG4gIE5iU2lkZWJhclNlcnZpY2UsXG4gIE5iVGhlbWVTZXJ2aWNlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbmltcG9ydCB7IExheW91dFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9AY29yZS91dGlscyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOYkF1dGhTZXJ2aWNlLCBOYkF1dGhTaW1wbGVUb2tlbiB9IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBHTE9CQUxTIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZ2xvYmFscyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LWhlYWRlcicsXG4gIHN0eWxlVXJsczogWycuL2hlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgdXNlclBpY3R1cmVPbmx5OiBib29sZWFuID0gZmFsc2U7XG4gIHVzZXI6IGFueTtcbiAgaXNBdXRoID0gZmFsc2U7XG4gIHRoZW1lcyA9IFtcbiAgICB7XG4gICAgICB2YWx1ZTogJ2RlZmF1bHQnLFxuICAgICAgbmFtZTogJ0xpZ2h0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnZGFyaycsXG4gICAgICBuYW1lOiAnRGFyaycsXG4gICAgfSxcbiAgICB7XG4gICAgICB2YWx1ZTogJ2Nvc21pYycsXG4gICAgICBuYW1lOiAnQ29zbWljJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHZhbHVlOiAnY29ycG9yYXRlJyxcbiAgICAgIG5hbWU6ICdDb3Jwb3JhdGUnLFxuICAgIH0sXG4gIF07XG5cbiAgY3VycmVudFRoZW1lID0gJ2RlZmF1bHQnO1xuICBhcHBMYW5ndWFnZSA9IFtdO1xuICBjdXJyZW50TGFuZyA9ICcnO1xuXG4gIHVzZXJNZW51ID0gW3sgdGl0bGU6ICdEw6ljb25uZXhpb24nIH1dO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2lkZWJhclNlcnZpY2U6IE5iU2lkZWJhclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZW51U2VydmljZTogTmJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIHRoZW1lU2VydmljZTogTmJUaGVtZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsYXlvdXRTZXJ2aWNlOiBMYXlvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYnJlYWtwb2ludFNlcnZpY2U6IE5iTWVkaWFCcmVha3BvaW50c1NlcnZpY2UsXG4gICAgcHVibGljIHNlcnZpY2VSZXN0QWRtaW46IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogTmJBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHBDbGllbnQ6IEh0dHBDbGllbnRcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudFRoZW1lID0gdGhpcy50aGVtZVNlcnZpY2UuY3VycmVudFRoZW1lO1xuICAgIHRoaXMuYXBwTGFuZ3VhZ2UgPSB0aGlzLmxhbmdTZXJ2aWNlLmdldExhbmd1YWdlcygpO1xuICAgIHRoaXMuY3VycmVudExhbmcgPSB0aGlzLmxhbmdTZXJ2aWNlLnNlbGVjdGVkO1xuXG4gICAgY29uc3QgYXV0aEFwcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oR0xPQkFMUy5BVVRIX0FQUF9UT0tFTikpO1xuICAgIGlmIChhdXRoQXBwICYmIGF1dGhBcHAudmFsdWUpIHtcbiAgICAgIHRoaXMuaHR0cENsaWVudFxuICAgICAgICAuZ2V0KFxuICAgICAgICAgIGAke3RoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QmFzZVVybH0ke3RoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy51c2VySW5mb0VuZFBvaW50fWBcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICB2YXIgZGF0YSA9IHJlc3A7XG4gICAgICAgICAgdmFyIHVzZXIgPSB7XG4gICAgICAgICAgICBuYW1lOiByZXNwW1xuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMucHJvZmlsZU5hbWVFbmRQb2ludFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHBpY3R1cmU6XG4gICAgICAgICAgICAgIHJlc3BbdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLnByb2ZpbGVQaWN0dXJlRW5kUG9pbnRdLFxuICAgICAgICAgICAgZGVmYXVsdFBpY3R1cmU6ICdNJyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIG5hbWVQYXRoID1cbiAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy5wcm9maWxlTmFtZUVuZFBvaW50LnNwbGl0KCcuJyk7XG4gICAgICAgICAgbmFtZVBhdGgubWFwKCh2YWwpID0+IHtcbiAgICAgICAgICAgIHVzZXJbJ25hbWUnXSA9IGRhdGFbdmFsXTtcbiAgICAgICAgICAgIGRhdGEgPSBkYXRhW3ZhbF07XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBkYXRhID0gcmVzcDtcbiAgICAgICAgICB2YXIgcGljdHVyZVBhdGggPVxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLnByb2ZpbGVQaWN0dXJlRW5kUG9pbnQuc3BsaXQoXG4gICAgICAgICAgICAgICcuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICBwaWN0dXJlUGF0aC5tYXAoKHZhbCkgPT4ge1xuICAgICAgICAgICAgdXNlclsncGljdHVyZSddID0gZGF0YVt2YWxdO1xuICAgICAgICAgICAgZGF0YSA9IGRhdGFbdmFsXTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAodXNlclsnbmFtZSddKVxuICAgICAgICAgICAgdXNlclsnZGVmYXVsdFBpY3R1cmUnXSA9IGBodHRwczovL3VpLWF2YXRhcnMuY29tL2FwaS8/bmFtZT0ke3VzZXJbXG4gICAgICAgICAgICAgICduYW1lJ1xuICAgICAgICAgICAgXS50b1N0cmluZygpfSZyb3VuZGVkPXRydWVgO1xuXG4gICAgICAgICAgdGhpcy51c2VyID0gdXNlcjtcbiAgICAgICAgICB0aGlzLmlzQXV0aCA9IHRydWU7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCB7IHhsIH0gPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmdldEJyZWFrcG9pbnRzTWFwKCk7XG4gICAgdGhpcy50aGVtZVNlcnZpY2VcbiAgICAgIC5vbk1lZGlhUXVlcnlDaGFuZ2UoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoWywgY3VycmVudEJyZWFrcG9pbnRdKSA9PiBjdXJyZW50QnJlYWtwb2ludC53aWR0aCA8IHhsKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoaXNMZXNzVGhhblhsOiBib29sZWFuKSA9PiAodGhpcy51c2VyUGljdHVyZU9ubHkgPSBpc0xlc3NUaGFuWGwpXG4gICAgICApO1xuXG4gICAgdGhpcy50aGVtZVNlcnZpY2VcbiAgICAgIC5vblRoZW1lQ2hhbmdlKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHsgbmFtZSB9KSA9PiBuYW1lKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh0aGVtZU5hbWUpID0+ICh0aGlzLmN1cnJlbnRUaGVtZSA9IHRoZW1lTmFtZSkpO1xuXG4gICAgdGhpcy5tZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQtbWVudScpLFxuICAgICAgICBtYXAoKHsgaXRlbTogeyB0aXRsZSB9IH0pID0+IHRpdGxlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgodGl0bGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aXRsZSkge1xuICAgICAgICAgIGNhc2UgJ0TDqWNvbm5leGlvbic6XG4gICAgICAgICAgICB0aGlzLmh0dHBDbGllbnRcbiAgICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgICAgYCR7dGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RCYXNlVXJsfSR7dGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmxvZ291dEVuZFBvaW50fWAsXG4gICAgICAgICAgICAgICAge31cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIChyZXNwOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEdMT0JBTFMuQVVUSF9BUFBfVE9LRU4pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybCgnL2xvZ2luJyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmlzQXV0aCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oR0xPQkFMUy5BVVRIX0FQUF9UT0tFTik7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvbG9naW4nKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuaXNBdXRoID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ05vbiBwcmlzIGVuIGNoYXJnZScpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY2hhbmdlVGhlbWUodGhlbWVOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRoZW1lU2VydmljZS5jaGFuZ2VUaGVtZSh0aGVtZU5hbWUpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpOiBib29sZWFuIHtcbiAgICB0aGlzLnNpZGViYXJTZXJ2aWNlLnRvZ2dsZSh0cnVlLCAnbWVudS1zaWRlYmFyJyk7XG4gICAgdGhpcy5sYXlvdXRTZXJ2aWNlLmNoYW5nZUxheW91dFNpemUoKTtcblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIG5hdmlnYXRlSG9tZSgpIHtcbiAgICB0aGlzLm1lbnVTZXJ2aWNlLm5hdmlnYXRlSG9tZSgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNpZ25pbigpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCcvYXV0aC9sb2dpbicpO1xuICB9XG4gIHNpZ291dCgpIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgnZW1haWwnKTtcbiAgfVxuXG4gIGNoYW5nZUxhbmcoZXZlbnQpIHtcbiAgICB0aGlzLmxhbmdTZXJ2aWNlLnNldExhbmd1YWdlKGV2ZW50KTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImhlYWRlci1jb250YWluZXJcIj5cbiAgPGRpdiBjbGFzcz1cImxvZ28tY29udGFpbmVyXCI+XG4gICAgPGEgKGNsaWNrKT1cInRvZ2dsZVNpZGViYXIoKVwiIGhyZWY9XCIjXCIgY2xhc3M9XCJzaWRlYmFyLXRvZ2dsZVwiPlxuICAgICAgPG5iLWljb24gaWNvbj1cIm1lbnUtMi1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgIDwvYT5cbiAgICA8YSBjbGFzcz1cImxvZ29cIiBocmVmPVwiI1wiIChjbGljayk9XCJuYXZpZ2F0ZUhvbWUoKVwiXG4gICAgICA+PHNwYW4+e3sgc2VydmljZVJlc3RBZG1pbi5zaXRlTmFtZSB9fTwvc3Bhbj48L2FcbiAgICA+XG4gIDwvZGl2PlxuICA8bmItc2VsZWN0XG4gICAgW3NlbGVjdGVkXT1cImN1cnJlbnRUaGVtZVwiXG4gICAgKHNlbGVjdGVkQ2hhbmdlKT1cImNoYW5nZVRoZW1lKCRldmVudClcIlxuICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICA+XG4gICAgPG5iLW9wdGlvbiAqbmdGb3I9XCJsZXQgdGhlbWUgb2YgdGhlbWVzXCIgW3ZhbHVlXT1cInRoZW1lLnZhbHVlXCI+XG4gICAgICB7eyB0aGVtZS5uYW1lIH19PC9uYi1vcHRpb25cbiAgICA+XG4gIDwvbmItc2VsZWN0PlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJoZWFkZXItY29udGFpbmVyXCI+XG4gIDxuYi1zZWxlY3RcbiAgICBbc2VsZWN0ZWRdPVwiY3VycmVudExhbmdcIlxuICAgIChzZWxlY3RlZENoYW5nZSk9XCJjaGFuZ2VMYW5nKCRldmVudClcIlxuICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICA+XG4gICAgPG5iLW9wdGlvbiAqbmdGb3I9XCJsZXQgbGFuZyBvZiBhcHBMYW5ndWFnZVwiIFt2YWx1ZV09XCJsYW5nLnZhbHVlXCI+XG4gICAgICB7eyBsYW5nLnZhbHVlIHwgdXBwZXJjYXNlIH19PC9uYi1vcHRpb25cbiAgICA+XG4gIDwvbmItc2VsZWN0PlxuXG4gIDxuYi1hY3Rpb25zIHNpemU9XCJzbWFsbFwiPlxuICAgIDwhLS0gPG5iLWFjdGlvbiBjbGFzcz1cImNvbnRyb2wtaXRlbVwiPlxuICAgICAgPG5iLXNlYXJjaCB0eXBlPVwicm90YXRlLWxheW91dFwiPjwvbmItc2VhcmNoPlxuICAgIDwvbmItYWN0aW9uPiAtLT5cblxuICAgIDxuYi1hY3Rpb24gY2xhc3M9XCJ1c2VyLWFjdGlvblwiICpuYklzR3JhbnRlZD1cIlsndmlldycsICd1c2VyJ11cIj5cbiAgICAgIDxuYi11c2VyXG4gICAgICAgIFtuYkNvbnRleHRNZW51XT1cInVzZXJNZW51XCJcbiAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHQtbWVudVwiXG4gICAgICAgIFtuYW1lXT1cInVzZXI/Lm5hbWVcIlxuICAgICAgICBbcGljdHVyZV09XCJ1c2VyPy5waWN0dXJlID8gdXNlcj8ucGljdHVyZSA6IHVzZXI/LmRlZmF1bHRQaWN0dXJlXCJcbiAgICAgID5cbiAgICAgIDwvbmItdXNlcj5cbiAgICA8L25iLWFjdGlvbj5cblxuICAgIDwhLS0gPG5iLWFjdGlvbiAqbmdJZj1cIiFpc0F1dGhcIlxuICAgICAgPjxidXR0b24gbmJCdXR0b24gKGNsaWNrKT1cInNpZ25pbigpXCIgc3RhdHVzPVwicHJpbWFyeVwiPlxuICAgICAgICBDb25uZXhpb25cbiAgICAgIDwvYnV0dG9uPjwvbmItYWN0aW9uXG4gICAgPiAtLT5cbiAgPC9uYi1hY3Rpb25zPlxuPC9kaXY+XG4iXX0=