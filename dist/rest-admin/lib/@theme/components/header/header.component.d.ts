import { HttpClient } from '@angular/common/http';
import { RestLangService } from '../../../../lib/rest-admin/rest-resource/service/rest-lang.service';
import { OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { LayoutService } from '../../../@core/utils';
import { NbAuthService } from '@nebular/auth';
import { Router } from '@angular/router';
import { RestAdminConfigService } from '../../../../lib/rest-admin/rest-resource/service/rest-admin-config.service';
import * as i0 from "@angular/core";
export declare class HeaderComponent implements OnInit, OnDestroy {
    private sidebarService;
    private menuService;
    private themeService;
    private layoutService;
    private breakpointService;
    serviceRestAdmin: RestAdminConfigService;
    private authService;
    private router;
    private langService;
    private httpClient;
    private destroy$;
    userPictureOnly: boolean;
    user: any;
    isAuth: boolean;
    themes: {
        value: string;
        name: string;
    }[];
    currentTheme: string;
    appLanguage: any[];
    currentLang: string;
    userMenu: {
        title: string;
    }[];
    constructor(sidebarService: NbSidebarService, menuService: NbMenuService, themeService: NbThemeService, layoutService: LayoutService, breakpointService: NbMediaBreakpointsService, serviceRestAdmin: RestAdminConfigService, authService: NbAuthService, router: Router, langService: RestLangService, httpClient: HttpClient);
    ngOnInit(): void;
    ngOnDestroy(): void;
    changeTheme(themeName: string): void;
    toggleSidebar(): boolean;
    navigateHome(): boolean;
    signin(): void;
    sigout(): void;
    changeLang(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeaderComponent, "ngx-header", never, {}, {}, never, never>;
}
