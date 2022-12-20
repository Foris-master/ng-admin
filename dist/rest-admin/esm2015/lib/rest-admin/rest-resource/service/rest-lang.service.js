import { Injectable } from "@angular/core";
import { GLOBALS } from "../../../utils/globals";
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
import * as i2 from "./rest-admin-config.service";
export class RestLangService {
    constructor(translate, restConfigService) {
        this.translate = translate;
        this.restConfigService = restConfigService;
        this.selected = "";
        this.translateInstant = (word) => this.translate.instant(word);
    }
    setInitialAppLanguage() {
        let lang = this.translate.getBrowserLang();
        this.translate.setDefaultLang(lang);
        if (localStorage.getItem(GLOBALS.LNG_KEY) !== null) {
            let lng = JSON.parse(localStorage.getItem(GLOBALS.LNG_KEY));
            this.setLanguage(lng);
            this.selected = lng;
        }
        else {
            this.setLanguage(GLOBALS.DEFAULT_LANG);
        }
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.selected = lang;
        localStorage.setItem(GLOBALS.LNG_KEY, JSON.stringify(lang));
    }
    getLanguages() {
        return this.restConfigService.restLanguage;
    }
}
RestLangService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestLangService, deps: [{ token: i1.TranslateService }, { token: i2.RestAdminConfigService }], target: i0.ɵɵFactoryTarget.Injectable });
RestLangService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestLangService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestLangService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.TranslateService }, { type: i2.RestAdminConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNakQsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFDVSxTQUEyQixFQUMzQixpQkFBeUM7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUg1QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBeUJyQixxQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFyQnZELENBQUM7SUFFSixxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFJRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7OzRHQTlCVSxlQUFlO2dIQUFmLGVBQWUsY0FGZCxNQUFNOzJGQUVQLGVBQWU7a0JBSDNCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZ2xvYmFsc1wiO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gXCIuL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVzdExhbmdTZXJ2aWNlIHtcbiAgcHVibGljIHNlbGVjdGVkID0gXCJcIjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZXN0Q29uZmlnU2VydmljZTogUmVzdEFkbWluQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgc2V0SW5pdGlhbEFwcExhbmd1YWdlKCkge1xuICAgIGxldCBsYW5nID0gdGhpcy50cmFuc2xhdGUuZ2V0QnJvd3NlckxhbmcoKTtcbiAgICB0aGlzLnRyYW5zbGF0ZS5zZXREZWZhdWx0TGFuZyhsYW5nKTtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShHTE9CQUxTLkxOR19LRVkpICE9PSBudWxsKSB7XG4gICAgICBsZXQgbG5nID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShHTE9CQUxTLkxOR19LRVkpKTtcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UobG5nKTtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSBsbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TGFuZ3VhZ2UoR0xPQkFMUy5ERUZBVUxUX0xBTkcpO1xuICAgIH1cbiAgfVxuXG4gIHNldExhbmd1YWdlKGxhbmcpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZS51c2UobGFuZyk7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGxhbmc7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oR0xPQkFMUy5MTkdfS0VZLCBKU09OLnN0cmluZ2lmeShsYW5nKSk7XG4gIH1cblxuICB0cmFuc2xhdGVJbnN0YW50ID0gKHdvcmQpID0+IHRoaXMudHJhbnNsYXRlLmluc3RhbnQod29yZCk7XG5cbiAgZ2V0TGFuZ3VhZ2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWdTZXJ2aWNlLnJlc3RMYW5ndWFnZTtcbiAgfVxufVxuIl19