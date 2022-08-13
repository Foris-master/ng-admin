import { RestLangService } from "./../../../rest-admin/rest-resource/service/rest-lang.service";
import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  NbMediaBreakpointsService,
  NbMenuService,
  NbSidebarService,
  NbThemeService,
} from "@nebular/theme";

import { LayoutService } from "../../../@core/utils";
import { Subject } from "rxjs";
import { NbAuthService, NbAuthSimpleToken } from "@nebular/auth";
import { Router } from "@angular/router";
import { RestAdminConfigService } from "../../../rest-admin/rest-resource/service/rest-admin-config.service";
import { GLOBALS } from "../../../utils/globals";
import { filter, map, takeUntil } from "rxjs/operators";
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

  userMenu = [{ title: "Déconnexion" }];

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
    const user = { name: "Admin", picture: "assets/images/admin.jpeg" };
    this.currentTheme = this.themeService.currentTheme;
    this.appLanguage = this.langService.getLanguages();
    this.currentLang = this.langService.selected;

    const authApp = JSON.parse(localStorage.getItem(GLOBALS.AUTH_APP_TOKEN));
    if (authApp && authApp.value) {
      this.user = user;
      this.isAuth = true;
    }
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

    this.menuService
      .onItemClick()
      .pipe(
        filter(({ tag }) => tag === "my-context-menu"),
        map(({ item: { title } }) => title)
      )
      .subscribe((title) => {
        switch (title) {
          case "Déconnexion":
            localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
            this.router.navigateByUrl("/auth/login");

            break;
          default:
            console.log("Non pris en charge");
            break;
        }
      });
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
