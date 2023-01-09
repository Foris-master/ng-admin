import { CanActivate, Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private router;
    constructor(router: Router);
    canActivate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
