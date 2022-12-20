import { CanActivate, Router } from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import * as i0 from "@angular/core";
export declare class AuthGuard implements CanActivate {
    private authService;
    private router;
    constructor(authService: NbAuthService, router: Router);
    canActivate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
