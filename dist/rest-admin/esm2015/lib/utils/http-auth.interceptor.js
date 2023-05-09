import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@nebular/auth";
// import { LocalStorageService } from '../local-storage/local-storage.service';
// import { AUTH_TOKEN } from '../auth/auth.models';
export class HttpAuthInterceptor {
    constructor(authService, serviceToken) {
        this.authService = authService;
        this.serviceToken = serviceToken;
    }
    intercept(request, next) {
        const token = this.serviceToken.get();
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });
        return next.handle(request);
    }
}
HttpAuthInterceptor.ɵfac = function HttpAuthInterceptor_Factory(t) { return new (t || HttpAuthInterceptor)(i0.ɵɵinject(i1.NbAuthService), i0.ɵɵinject(i1.NbTokenStorage)); };
HttpAuthInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpAuthInterceptor, factory: HttpAuthInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpAuthInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.NbAuthService }, { type: i1.NbTokenStorage }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1hdXRoLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3V0aWxzL2h0dHAtYXV0aC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTM0MsZ0ZBQWdGO0FBQ2hGLG9EQUFvRDtBQUdwRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQ1UsV0FBMEIsRUFDMUIsWUFBNEI7UUFENUIsZ0JBQVcsR0FBWCxXQUFXLENBQWU7UUFDMUIsaUJBQVksR0FBWixZQUFZLENBQWdCO0lBQ25DLENBQUM7SUFFSixTQUFTLENBQ1AsT0FBNkIsRUFDN0IsSUFBaUI7UUFFakIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QyxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLFVBQVUsS0FBSyxFQUFFO2FBQ2pDO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7O3NGQWpCVSxtQkFBbUI7eUVBQW5CLG1CQUFtQixXQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEhhbmRsZXIsXG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgTmJBdXRoU2VydmljZSwgTmJUb2tlblN0b3JhZ2UgfSBmcm9tIFwiQG5lYnVsYXIvYXV0aFwiO1xuLy8gaW1wb3J0IHsgTG9jYWxTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uL2xvY2FsLXN0b3JhZ2UvbG9jYWwtc3RvcmFnZS5zZXJ2aWNlJztcbi8vIGltcG9ydCB7IEFVVEhfVE9LRU4gfSBmcm9tICcuLi9hdXRoL2F1dGgubW9kZWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBBdXRoSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBOYkF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VydmljZVRva2VuOiBOYlRva2VuU3RvcmFnZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PHVua25vd24+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PHVua25vd24+PiB7XG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLnNlcnZpY2VUb2tlbi5nZXQoKTtcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gIH1cbn1cbiJdfQ==