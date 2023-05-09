import { ModuleWithProviders } from '@angular/core';
import { NbRoleProvider } from '@nebular/security';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@nebular/auth";
export declare class NbSimpleRoleProvider extends NbRoleProvider {
    getRole(): import("rxjs").Observable<string>;
}
export declare const NB_CORE_PROVIDERS: any[];
export declare class CoreModule {
    constructor(parentModule: CoreModule);
    static forRoot(): ModuleWithProviders<CoreModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CoreModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<CoreModule, never, [typeof i1.CommonModule], [typeof i2.NbAuthModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<CoreModule>;
}
//# sourceMappingURL=core.module.d.ts.map