import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { GLOBALS } from "../../../utils/globals";
import { RestAdminConfigService } from "./rest-admin-config.service";

@Injectable({
  providedIn: "root",
})
export class RestLangService {
  public selected = "";
  constructor(
    private translate: TranslateService,
    private restConfigService: RestAdminConfigService
  ) {}

  setInitialAppLanguage() {
    let lang = this.translate.getBrowserLang();
    this.translate.setDefaultLang(lang);

    if (localStorage.getItem(GLOBALS.LNG_KEY) !== null) {
      let lng = JSON.parse(localStorage.getItem(GLOBALS.LNG_KEY));
      this.setLanguage(lng);
      this.selected = lng;
    } else {
      this.setLanguage(GLOBALS.DEFAULT_LANG);
    }
  }

  setLanguage(lang) {
    this.translate.use(lang);
    this.selected = lang;
    localStorage.setItem(GLOBALS.LNG_KEY, JSON.stringify(lang));
  }

  translateInstant = (word) => this.translate.instant(word);

  getLanguages() {
    return this.restConfigService.restLanguage;
  }
}
