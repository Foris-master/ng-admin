import { RestLangService } from "./../../../rest-admin/rest-resource/service/rest-lang.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { map, takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";
import { NbAuthService, NbAuthSimpleToken } from "@nebular/auth";
import { Router } from "@angular/router";
import { RestAdminConfigService } from "../../../rest-admin/rest-resource/service/rest-admin-config.service";

@Component({
  selector: "ngx-header",
  styleUrls: ["./header.component.scss"],
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;
  user: any;
  isAuth = false;
  themes = [
    {
      value: "default",
      name: "Light",
    },
    {
      value: "dark",
      name: "Dark",
    },
    {
      value: "cosmic",
      name: "Cosmic",
    },
    {
      value: "corporate",
      name: "Corporate",
    },
  ];

  currentTheme = "default";
  appLanguage = [];
  currentLang = "";

  userMenu = [{ title: "Profil" }, { title: "Déconnexion" }];

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private themeService: NbThemeService,
    private layoutService: LayoutService,
    private breakpointService: NbMediaBreakpointsService,
    public serviceRestAdmin: RestAdminConfigService,
    private authService: NbAuthService,
    private router: Router,
    private langService: RestLangService
  ) {}

  ngOnInit() {
    this.currentTheme = this.themeService.currentTheme;
    this.appLanguage = this.langService.getLanguages();
    this.currentLang = this.langService.selected;
    this.authService.onTokenChange().subscribe((token: NbAuthSimpleToken) => {
      if (token.isValid()) {
        this.user = token.getPayload();
        this.isAuth = true;
      }
    });

    const { xl } = this.breakpointService.getBreakpointsMap();
    this.themeService
      .onMediaQueryChange()
      .pipe(
        map(([, currentBreakpoint]) => currentBreakpoint.width < xl),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (isLessThanXl: boolean) => (this.userPictureOnly = isLessThanXl)
      );

    this.themeService
      .onThemeChange()
      .pipe(
        map(({ name }) => name),
        takeUntil(this.destroy$)
      )
      .subscribe((themeName) => (this.currentTheme = themeName));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, "menu-sidebar");
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }

  signin() {
    this.router.navigateByUrl("/auth/login");
  }
  sigout() {
    this.authService.logout("email");
  }

  changeLang(event) {
    this.langService.setLanguage(event);
  }
}
