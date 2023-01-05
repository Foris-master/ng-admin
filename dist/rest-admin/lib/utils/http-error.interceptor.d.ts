import { Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
/** Passes HttpErrorResponse to application-wide error handler */
export declare class HttpErrorInterceptor implements HttpInterceptor {
    private injector;
    private router;
    constructor(injector: Injector, router: Router);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpErrorInterceptor>;
}
