/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { AnalyticsService } from "./@core/utils/analytics.service";
import { SeoService } from "./@core/utils/seo.service";
import { NbIconLibraries } from "@nebular/theme";
import { RestLangService } from "./rest-admin/rest-resource/service/rest-lang.service";

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    private analytics: AnalyticsService,
    private seoService: SeoService,
    private iconLibraries: NbIconLibraries,
    private restLangService: RestLangService
  ) {
    this.iconLibraries.registerFontPack("fas", {
      packClass: "fas",
      iconClassPrefix: "fa",
    });
    this.iconLibraries.registerFontPack("far", {
      packClass: "far",
      iconClassPrefix: "fa",
    });
    this.iconLibraries.registerFontPack("fab", {
      packClass: "fab",
      iconClassPrefix: "fa",
    });
    this.iconLibraries.registerFontPack("fad", {
      packClass: "fa-duotone",
      iconClassPrefix: "fa",
    });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    this.restLangService.setInitialAppLanguage();
  }
}
