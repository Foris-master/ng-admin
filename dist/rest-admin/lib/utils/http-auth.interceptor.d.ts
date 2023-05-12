import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import { NbAuthService, NbTokenStorage } from "@nebular/auth";
import * as i0 from "@angular/core";
export declare class HttpAuthInterceptor implements HttpInterceptor {
    private authService;
    private serviceToken;
    constructor(authService: NbAuthService, serviceToken: NbTokenStorage);
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpAuthInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpAuthInterceptor>;
}
//# sourceMappingURL=http-auth.interceptor.d.ts.map