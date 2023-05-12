import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition } from '@nebular/theme';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "@ngx-translate/core";
export class NotificationService {
    constructor(toastrService, translate) {
        this.toastrService = toastrService;
        this.translate = translate;
        this.positions = NbGlobalPhysicalPosition;
    }
    showToast(position, status, msg) {
        this.toastrService.show(status || 'Success', msg, {
            position,
            status,
        });
    }
    //Toastr
    successToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'success', msgInfo);
    }
    warningToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'warning', msgInfo);
    }
    dangerToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'danger', msgInfo);
    }
    infoToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'info', msgInfo);
    }
    primaryToast(msg) {
        let msgInfo;
        if (typeof msg === 'string') {
            msgInfo = this.translate.instant(msg);
        }
        else {
            msgInfo = this.translate.instant(`${msg.label}`, {
                resourceName: msg.resourceName,
            });
        }
        this.showToast(this.positions.TOP_RIGHT, 'primary', msgInfo);
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(i0.ɵɵinject(i1.NbToastrService), i0.ɵɵinject(i2.TranslateService)); };
NotificationService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotificationService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: i1.NbToastrService }, { type: i2.TranslateService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2Uvbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNM0UsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixZQUNVLGFBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUhyQyxjQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFJbEMsQ0FBQztJQUVKLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDaEQsUUFBUTtZQUNSLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNSLFlBQVksQ0FBQyxHQUFHO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7c0ZBOUVVLG1CQUFtQjt5RUFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQixtQkFGbEIsTUFBTTt1RkFFUCxtQkFBbUI7Y0FIL0IsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uLCBOYlRvYXN0clNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgcG9zaXRpb25zID0gTmJHbG9iYWxQaHlzaWNhbFBvc2l0aW9uO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRvYXN0clNlcnZpY2U6IE5iVG9hc3RyU2VydmljZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZVxuICApIHt9XG5cbiAgc2hvd1RvYXN0KHBvc2l0aW9uLCBzdGF0dXMsIG1zZykge1xuICAgIHRoaXMudG9hc3RyU2VydmljZS5zaG93KHN0YXR1cyB8fCAnU3VjY2VzcycsIG1zZywge1xuICAgICAgcG9zaXRpb24sXG4gICAgICBzdGF0dXMsXG4gICAgfSk7XG4gIH1cblxuICAvL1RvYXN0clxuICBzdWNjZXNzVG9hc3QobXNnKSB7XG4gICAgbGV0IG1zZ0luZm87XG5cbiAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1zZ0luZm8gPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZ0luZm8gPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGAke21zZy5sYWJlbH1gLCB7XG4gICAgICAgIHJlc291cmNlTmFtZTogbXNnLnJlc291cmNlTmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dUb2FzdCh0aGlzLnBvc2l0aW9ucy5UT1BfUklHSFQsICdzdWNjZXNzJywgbXNnSW5mbyk7XG4gIH1cblxuICB3YXJuaW5nVG9hc3QobXNnKSB7XG4gICAgbGV0IG1zZ0luZm87XG5cbiAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1zZ0luZm8gPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZ0luZm8gPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGAke21zZy5sYWJlbH1gLCB7XG4gICAgICAgIHJlc291cmNlTmFtZTogbXNnLnJlc291cmNlTmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dUb2FzdCh0aGlzLnBvc2l0aW9ucy5UT1BfUklHSFQsICd3YXJuaW5nJywgbXNnSW5mbyk7XG4gIH1cblxuICBkYW5nZXJUb2FzdChtc2cpIHtcbiAgICBsZXQgbXNnSW5mbztcblxuICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgbXNnSW5mbyA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQobXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnSW5mbyA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoYCR7bXNnLmxhYmVsfWAsIHtcbiAgICAgICAgcmVzb3VyY2VOYW1lOiBtc2cucmVzb3VyY2VOYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd1RvYXN0KHRoaXMucG9zaXRpb25zLlRPUF9SSUdIVCwgJ2RhbmdlcicsIG1zZ0luZm8pO1xuICB9XG5cbiAgaW5mb1RvYXN0KG1zZykge1xuICAgIGxldCBtc2dJbmZvO1xuXG4gICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChgJHttc2cubGFiZWx9YCwge1xuICAgICAgICByZXNvdXJjZU5hbWU6IG1zZy5yZXNvdXJjZU5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zaG93VG9hc3QodGhpcy5wb3NpdGlvbnMuVE9QX1JJR0hULCAnaW5mbycsIG1zZ0luZm8pO1xuICB9XG5cbiAgcHJpbWFyeVRvYXN0KG1zZykge1xuICAgIGxldCBtc2dJbmZvO1xuXG4gICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChgJHttc2cubGFiZWx9YCwge1xuICAgICAgICByZXNvdXJjZU5hbWU6IG1zZy5yZXNvdXJjZU5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zaG93VG9hc3QodGhpcy5wb3NpdGlvbnMuVE9QX1JJR0hULCAncHJpbWFyeScsIG1zZ0luZm8pO1xuICB9XG59XG4iXX0=