import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';
import { NotificationService } from '../rest-admin/rest-resource/service/notification.service';
import { RestShareService } from '../rest-admin/rest-resource/service/rest-share.service';
import { GLOBALS } from './globals';

/** Passes HttpErrorResponse to application-wide error handler */
@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  positions = NbGlobalPhysicalPosition;
  constructor(
    private serviceNotification: NotificationService,
    private router: Router,
    private restShare: RestShareService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: any) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
                localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
                setTimeout(() => {
                  this.router.navigate(['/login']);
                  this.restShare.setLoader(false);
                }, 500);
                break;
              case 403:
                this.serviceNotification.dangerToast(`msg-not-authorized`);
                this.restShare.setLoader(false);
                break;
              case 404:
                this.serviceNotification.dangerToast(`msg-not-found`);
                this.restShare.setLoader(false);
                break;
              case 500:
                this.serviceNotification.dangerToast(`msg-internal-error`);
                this.restShare.setLoader(false);
                break;

              default:
                this.restShare.setLoader(false);
                break;
            }
          }
        },
      })
    );
  }
}
