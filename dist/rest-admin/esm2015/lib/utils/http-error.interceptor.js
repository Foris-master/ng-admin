import { Injectable } from '@angular/core';
import { HttpErrorResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NbGlobalPhysicalPosition, } from '@nebular/theme';
import { GLOBALS } from './globals';
import * as i0 from "@angular/core";
import * as i1 from "../rest-admin/rest-resource/service/notification.service";
import * as i2 from "@angular/router";
import * as i3 from "../rest-admin/rest-resource/service/rest-share.service";
/** Passes HttpErrorResponse to application-wide error handler */
export class HttpErrorInterceptor {
    constructor(serviceNotification, router, restShare) {
        this.serviceNotification = serviceNotification;
        this.router = router;
        this.restShare = restShare;
        this.positions = NbGlobalPhysicalPosition;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap({
            error: (err) => {
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
        }));
    }
}
HttpErrorInterceptor.ɵfac = function HttpErrorInterceptor_Factory(t) { return new (t || HttpErrorInterceptor)(i0.ɵɵinject(i1.NotificationService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.RestShareService)); };
HttpErrorInterceptor.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HttpErrorInterceptor, factory: HttpErrorInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HttpErrorInterceptor, [{
        type: Injectable
    }], function () { return [{ type: i1.NotificationService }, { type: i2.Router }, { type: i3.RestShareService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUtMLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sZ0JBQWdCLENBQUM7QUFHeEIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQzs7Ozs7QUFFcEMsaUVBQWlFO0FBRWpFLE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsWUFDVSxtQkFBd0MsRUFDeEMsTUFBYyxFQUNkLFNBQTJCO1FBRjNCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBSnJDLGNBQVMsR0FBRyx3QkFBd0IsQ0FBQztJQUtsQyxDQUFDO0lBRUosU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNsQixJQUFJLEdBQUcsWUFBWSxpQkFBaUIsRUFBRTtvQkFDcEMsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO3dCQUNsQixLQUFLLEdBQUc7NEJBQ04sWUFBWSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7NEJBQ2hELFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0NBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dDQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDbEMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzRCQUNSLE1BQU07d0JBQ1IsS0FBSyxHQUFHOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs0QkFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsS0FBSyxHQUFHOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxNQUFNO3dCQUNSLEtBQUssR0FBRzs0QkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7NEJBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxNQUFNO3dCQUVSOzRCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxNQUFNO3FCQUNUO2lCQUNGO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7d0ZBN0NVLG9CQUFvQjswRUFBcEIsb0JBQW9CLFdBQXBCLG9CQUFvQjt1RkFBcEIsb0JBQW9CO2NBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBOYkNvbXBvbmVudFN0YXR1cyxcbiAgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLFxuICBOYlRvYXN0clNlcnZpY2UsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0U2hhcmVTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tICcuL2dsb2JhbHMnO1xuXG4vKiogUGFzc2VzIEh0dHBFcnJvclJlc3BvbnNlIHRvIGFwcGxpY2F0aW9uLXdpZGUgZXJyb3IgaGFuZGxlciAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEh0dHBFcnJvckludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgcG9zaXRpb25zID0gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2VOb3RpZmljYXRpb246IE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlc3RTaGFyZTogUmVzdFNoYXJlU2VydmljZVxuICApIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KS5waXBlKFxuICAgICAgdGFwKHtcbiAgICAgICAgZXJyb3I6IChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkge1xuICAgICAgICAgICAgc3dpdGNoIChlcnIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgIGNhc2UgNDAxOlxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEdMT0JBTFMuQVVUSF9BUFBfVE9LRU4pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZU5vdGlmaWNhdGlvbi5kYW5nZXJUb2FzdChgbXNnLW5vdC1hdXRob3JpemVkYCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlTm90aWZpY2F0aW9uLmRhbmdlclRvYXN0KGBtc2ctbm90LWZvdW5kYCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSA1MDA6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlTm90aWZpY2F0aW9uLmRhbmdlclRvYXN0KGBtc2ctaW50ZXJuYWwtZXJyb3JgKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==