import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NbGlobalPhysicalPosition } from '@nebular/theme';
import { NotificationService } from '../rest-admin/rest-resource/service/notification.service';
import { RestShareService } from '../rest-admin/rest-resource/service/rest-share.service';
import * as i0 from "@angular/core";
/** Passes HttpErrorResponse to application-wide error handler */
export declare class HttpErrorInterceptor implements HttpInterceptor {
    private serviceNotification;
    private router;
    private restShare;
    positions: typeof NbGlobalPhysicalPosition;
    constructor(serviceNotification: NotificationService, router: Router, restShare: RestShareService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<HttpErrorInterceptor, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<HttpErrorInterceptor>;
}
//# sourceMappingURL=http-error.interceptor.d.ts.map