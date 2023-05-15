import { Injectable } from '@angular/core';
import { HttpErrorResponse, } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NbGlobalPhysicalPosition, } from '@nebular/theme';
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
                            this.router.navigate(['/login']);
                            this.restShare.setLoader(false);
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
HttpErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor, deps: [{ token: i1.NotificationService }, { token: i2.Router }, { token: i3.RestShareService }], target: i0.ɵɵFactoryTarget.Injectable });
HttpErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NotificationService }, { type: i2.Router }, { type: i3.RestShareService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUtMLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBRUwsd0JBQXdCLEdBRXpCLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBSXhCLGlFQUFpRTtBQUVqRSxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLFlBQ1UsbUJBQXdDLEVBQ3hDLE1BQWMsRUFDZCxTQUEyQjtRQUYzQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUpyQyxjQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFLbEMsQ0FBQztJQUVKLFNBQVMsQ0FDUCxPQUF5QixFQUN6QixJQUFpQjtRQUVqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUM7WUFDRixLQUFLLEVBQUUsQ0FBQyxHQUFRLEVBQUUsRUFBRTtnQkFDbEIsSUFBSSxHQUFHLFlBQVksaUJBQWlCLEVBQUU7b0JBQ3BDLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsS0FBSyxHQUFHOzRCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs0QkFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsS0FBSyxHQUFHOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQzs0QkFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ2hDLE1BQU07d0JBQ1IsS0FBSyxHQUFHOzRCQUNOLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxNQUFNO3dCQUNSLEtBQUssR0FBRzs0QkFDTixJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7NEJBQzNELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxNQUFNO3dCQUVSOzRCQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDOzRCQUNoQyxNQUFNO3FCQUNUO2lCQUNGO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7aUhBMUNVLG9CQUFvQjtxSEFBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBRGhDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwUmVxdWVzdCxcbiAgSHR0cEVycm9yUmVzcG9uc2UsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBOYkNvbXBvbmVudFN0YXR1cyxcbiAgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLFxuICBOYlRvYXN0clNlcnZpY2UsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0U2hhcmVTZXJ2aWNlIH0gZnJvbSAnLi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcblxuLyoqIFBhc3NlcyBIdHRwRXJyb3JSZXNwb25zZSB0byBhcHBsaWNhdGlvbi13aWRlIGVycm9yIGhhbmRsZXIgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwRXJyb3JJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIHBvc2l0aW9ucyA9IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZXN0U2hhcmU6IFJlc3RTaGFyZVNlcnZpY2VcbiAgKSB7fVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIHRhcCh7XG4gICAgICAgIGVycm9yOiAoZXJyOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyLnN0YXR1cykge1xuICAgICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlIDQwMzpcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VOb3RpZmljYXRpb24uZGFuZ2VyVG9hc3QoYG1zZy1ub3QtYXV0aG9yaXplZGApO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNDA0OlxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZU5vdGlmaWNhdGlvbi5kYW5nZXJUb2FzdChgbXNnLW5vdC1mb3VuZGApO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgNTAwOlxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZU5vdGlmaWNhdGlvbi5kYW5nZXJUb2FzdChgbXNnLWludGVybmFsLWVycm9yYCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcihmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=