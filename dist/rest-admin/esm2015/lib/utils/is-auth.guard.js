import { Injectable } from '@angular/core';
import { GLOBALS } from './globals';
import * as i0 from "@angular/core";
import * as i1 from "./../rest-admin/rest-resource/service/rest-admin-config.service";
import * as i2 from "@angular/router";
export class isAuthGuard {
    constructor(restAdminConfig, router) {
        this.restAdminConfig = restAdminConfig;
        this.router = router;
    }
    canActivate() {
        const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
        if (!authJson)
            return true;
        else {
            this.router.navigateByUrl(this.restAdminConfig.restAuthParams.redirectRouteAfterLogin);
            return false;
        }
    }
}
isAuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: isAuthGuard, deps: [{ token: i1.RestAdminConfigService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
isAuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: isAuthGuard });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: isAuthGuard, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.RestAdminConfigService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXMtYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi91dGlscy9pcy1hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUdwQyxNQUFNLE9BQU8sV0FBVztJQUN0QixZQUNVLGVBQXVDLEVBQ3ZDLE1BQWM7UUFEZCxvQkFBZSxHQUFmLGVBQWUsQ0FBd0I7UUFDdkMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUNyQixDQUFDO0lBRUosV0FBVztRQUNULE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTyxJQUFJLENBQUM7YUFDdEI7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQzVELENBQUM7WUFDRixPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7d0dBaEJVLFdBQVc7NEdBQVgsV0FBVzsyRkFBWCxXQUFXO2tCQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4vLi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tICcuL2dsb2JhbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgaXNBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVzdEFkbWluQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGNvbnN0IGF1dGhKc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oR0xPQkFMUy5BVVRIX0FQUF9UT0tFTik7XG5cbiAgICBpZiAoIWF1dGhKc29uKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXG4gICAgICAgIHRoaXMucmVzdEFkbWluQ29uZmlnLnJlc3RBdXRoUGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19