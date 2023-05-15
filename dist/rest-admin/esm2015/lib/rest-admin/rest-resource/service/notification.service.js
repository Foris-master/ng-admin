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
NotificationService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NotificationService, deps: [{ token: i1.NbToastrService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Injectable });
NotificationService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NotificationService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: NotificationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.NbToastrService }, { type: i2.TranslateService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2Uvbm90aWZpY2F0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsd0JBQXdCLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNM0UsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QixZQUNVLGFBQThCLEVBQzlCLFNBQTJCO1FBRDNCLGtCQUFhLEdBQWIsYUFBYSxDQUFpQjtRQUM5QixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUhyQyxjQUFTLEdBQUcsd0JBQXdCLENBQUM7SUFJbEMsQ0FBQztJQUVKLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLEdBQUc7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUU7WUFDaEQsUUFBUTtZQUNSLE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsUUFBUTtJQUNSLFlBQVksQ0FBQyxHQUFHO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFHO1FBQ2IsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFHO1FBQ1gsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFHO1FBQ2QsSUFBSSxPQUFPLENBQUM7UUFFWixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkM7YUFBTTtZQUNMLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDL0MsWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0hBOUVVLG1CQUFtQjtvSEFBbkIsbUJBQW1CLGNBRmxCLE1BQU07MkZBRVAsbUJBQW1CO2tCQUgvQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbiwgTmJUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTm90aWZpY2F0aW9uU2VydmljZSB7XG4gIHBvc2l0aW9ucyA9IE5iR2xvYmFsUGh5c2ljYWxQb3NpdGlvbjtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0b2FzdHJTZXJ2aWNlOiBOYlRvYXN0clNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGU6IFRyYW5zbGF0ZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHNob3dUb2FzdChwb3NpdGlvbiwgc3RhdHVzLCBtc2cpIHtcbiAgICB0aGlzLnRvYXN0clNlcnZpY2Uuc2hvdyhzdGF0dXMgfHwgJ1N1Y2Nlc3MnLCBtc2csIHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgc3RhdHVzLFxuICAgIH0pO1xuICB9XG5cbiAgLy9Ub2FzdHJcbiAgc3VjY2Vzc1RvYXN0KG1zZykge1xuICAgIGxldCBtc2dJbmZvO1xuXG4gICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChgJHttc2cubGFiZWx9YCwge1xuICAgICAgICByZXNvdXJjZU5hbWU6IG1zZy5yZXNvdXJjZU5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zaG93VG9hc3QodGhpcy5wb3NpdGlvbnMuVE9QX1JJR0hULCAnc3VjY2VzcycsIG1zZ0luZm8pO1xuICB9XG5cbiAgd2FybmluZ1RvYXN0KG1zZykge1xuICAgIGxldCBtc2dJbmZvO1xuXG4gICAgaWYgKHR5cGVvZiBtc2cgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtc2dJbmZvID0gdGhpcy50cmFuc2xhdGUuaW5zdGFudChgJHttc2cubGFiZWx9YCwge1xuICAgICAgICByZXNvdXJjZU5hbWU6IG1zZy5yZXNvdXJjZU5hbWUsXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zaG93VG9hc3QodGhpcy5wb3NpdGlvbnMuVE9QX1JJR0hULCAnd2FybmluZycsIG1zZ0luZm8pO1xuICB9XG5cbiAgZGFuZ2VyVG9hc3QobXNnKSB7XG4gICAgbGV0IG1zZ0luZm87XG5cbiAgICBpZiAodHlwZW9mIG1zZyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1zZ0luZm8gPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZ0luZm8gPSB0aGlzLnRyYW5zbGF0ZS5pbnN0YW50KGAke21zZy5sYWJlbH1gLCB7XG4gICAgICAgIHJlc291cmNlTmFtZTogbXNnLnJlc291cmNlTmFtZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnNob3dUb2FzdCh0aGlzLnBvc2l0aW9ucy5UT1BfUklHSFQsICdkYW5nZXInLCBtc2dJbmZvKTtcbiAgfVxuXG4gIGluZm9Ub2FzdChtc2cpIHtcbiAgICBsZXQgbXNnSW5mbztcblxuICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgbXNnSW5mbyA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQobXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnSW5mbyA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoYCR7bXNnLmxhYmVsfWAsIHtcbiAgICAgICAgcmVzb3VyY2VOYW1lOiBtc2cucmVzb3VyY2VOYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd1RvYXN0KHRoaXMucG9zaXRpb25zLlRPUF9SSUdIVCwgJ2luZm8nLCBtc2dJbmZvKTtcbiAgfVxuXG4gIHByaW1hcnlUb2FzdChtc2cpIHtcbiAgICBsZXQgbXNnSW5mbztcblxuICAgIGlmICh0eXBlb2YgbXNnID09PSAnc3RyaW5nJykge1xuICAgICAgbXNnSW5mbyA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQobXNnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbXNnSW5mbyA9IHRoaXMudHJhbnNsYXRlLmluc3RhbnQoYCR7bXNnLmxhYmVsfWAsIHtcbiAgICAgICAgcmVzb3VyY2VOYW1lOiBtc2cucmVzb3VyY2VOYW1lLFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc2hvd1RvYXN0KHRoaXMucG9zaXRpb25zLlRPUF9SSUdIVCwgJ3ByaW1hcnknLCBtc2dJbmZvKTtcbiAgfVxufVxuIl19