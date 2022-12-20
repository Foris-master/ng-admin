import { Injectable } from "@angular/core";
import { GLOBALS } from "./globals";
import * as i0 from "@angular/core";
import * as i1 from "@nebular/auth";
import * as i2 from "@angular/router";
export class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
        const authApp = authJson ? JSON.parse(authJson) : {};
        if (authApp && (authApp === null || authApp === void 0 ? void 0 : authApp.value))
            return true;
        else {
            this.router.navigateByUrl("/auth/login");
            return false;
        }
    }
}
AuthGuard.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthGuard, deps: [{ token: i1.NbAuthService }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
AuthGuard.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthGuard });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthGuard, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbAuthService }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi91dGlscy9hdXRoLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQUdwQyxNQUFNLE9BQU8sU0FBUztJQUNwQixZQUFvQixXQUEwQixFQUFVLE1BQWM7UUFBbEQsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUUxRSxXQUFXO1FBQ1QsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDOUQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFckQsSUFBSSxPQUFPLEtBQUksT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssQ0FBQTtZQUFFLE9BQU8sSUFBSSxDQUFDO2FBQ3RDO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7O3NHQVpVLFNBQVM7MEdBQVQsU0FBUzsyRkFBVCxTQUFTO2tCQURyQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmJBdXRoU2VydmljZSB9IGZyb20gXCJAbmVidWxhci9hdXRoXCI7XG5pbXBvcnQgeyB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tIFwiLi9nbG9iYWxzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aFNlcnZpY2U6IE5iQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKSB7XG4gICAgY29uc3QgYXV0aEpzb24gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShHTE9CQUxTLkFVVEhfQVBQX1RPS0VOKTtcbiAgICBjb25zdCBhdXRoQXBwID0gYXV0aEpzb24gPyBKU09OLnBhcnNlKGF1dGhKc29uKSA6IHt9O1xuICAgIFxuICAgIGlmIChhdXRoQXBwICYmIGF1dGhBcHA/LnZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoXCIvYXV0aC9sb2dpblwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==