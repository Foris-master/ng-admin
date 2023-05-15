import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from "@angular/common/http";
import { Observable } from "rxjs";
import * as i0 from "@angular/core";
export declare class PaginationInterceptor implements HttpInterceptor {
    constructor();
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PaginationInterceptor>;
}
