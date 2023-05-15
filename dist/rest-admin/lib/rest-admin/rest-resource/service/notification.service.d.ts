import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class NotificationService {
    private toastrService;
    private translate;
    positions: typeof NbGlobalPhysicalPosition;
    constructor(toastrService: NbToastrService, translate: TranslateService);
    showToast(position: any, status: any, msg: any): void;
    successToast(msg: any): void;
    warningToast(msg: any): void;
    dangerToast(msg: any): void;
    infoToast(msg: any): void;
    primaryToast(msg: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NotificationService>;
}
