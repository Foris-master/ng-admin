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
RestLangService.ɵfac = function RestLangService_Factory(t) { return new (t || RestLangService)(i0.ɵɵinject(i1.TranslateService), i0.ɵɵinject(i2.RestAdminConfigService)); };
RestLangService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestLangService, factory: RestLangService.ɵfac, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestLangService, [{
        type: Injectable,
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: i1.TranslateService }, { type: i2.RestAdminConfigService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1sYW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNakQsTUFBTSxPQUFPLGVBQWU7SUFFMUIsWUFDVSxTQUEyQixFQUMzQixpQkFBeUM7UUFEekMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0Isc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF3QjtRQUg1QyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBeUJyQixxQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFyQnZELENBQUM7SUFFSixxQkFBcUI7UUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDeEM7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQUk7UUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFJRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0lBQzdDLENBQUM7OzhFQTlCVSxlQUFlO3FFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZVNlcnZpY2UgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvY29yZVwiO1xuaW1wb3J0IHsgR0xPQkFMUyB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9nbG9iYWxzXCI7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vcmVzdC1hZG1pbi1jb25maWcuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0TGFuZ1NlcnZpY2Uge1xuICBwdWJsaWMgc2VsZWN0ZWQgPSBcIlwiO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSxcbiAgICBwcml2YXRlIHJlc3RDb25maWdTZXJ2aWNlOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlXG4gICkge31cblxuICBzZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKSB7XG4gICAgbGV0IGxhbmcgPSB0aGlzLnRyYW5zbGF0ZS5nZXRCcm93c2VyTGFuZygpO1xuICAgIHRoaXMudHJhbnNsYXRlLnNldERlZmF1bHRMYW5nKGxhbmcpO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEdMT0JBTFMuTE5HX0tFWSkgIT09IG51bGwpIHtcbiAgICAgIGxldCBsbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEdMT0JBTFMuTE5HX0tFWSkpO1xuICAgICAgdGhpcy5zZXRMYW5ndWFnZShsbmcpO1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGxuZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRMYW5ndWFnZShHTE9CQUxTLkRFRkFVTFRfTEFORyk7XG4gICAgfVxuICB9XG5cbiAgc2V0TGFuZ3VhZ2UobGFuZykge1xuICAgIHRoaXMudHJhbnNsYXRlLnVzZShsYW5nKTtcbiAgICB0aGlzLnNlbGVjdGVkID0gbGFuZztcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShHTE9CQUxTLkxOR19LRVksIEpTT04uc3RyaW5naWZ5KGxhbmcpKTtcbiAgfVxuXG4gIHRyYW5zbGF0ZUluc3RhbnQgPSAod29yZCkgPT4gdGhpcy50cmFuc2xhdGUuaW5zdGFudCh3b3JkKTtcblxuICBnZXRMYW5ndWFnZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZ1NlcnZpY2UucmVzdExhbmd1YWdlO1xuICB9XG59XG4iXX0=