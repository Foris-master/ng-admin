import { RestAdminConfigService } from './../rest-admin/rest-resource/service/rest-admin-config.service';
import { CanActivate, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class isAuthGuard implements CanActivate {
    private restAdminConfig;
    private router;
    constructor(restAdminConfig: RestAdminConfigService, router: Router);
    canActivate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<isAuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<isAuthGuard>;
}
