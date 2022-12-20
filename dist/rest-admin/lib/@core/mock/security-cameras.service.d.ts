import { Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';
import * as i0 from "@angular/core";
export declare class SecurityCamerasService extends SecurityCamerasData {
    private cameras;
    getCamerasData(): Observable<Camera[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityCamerasService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SecurityCamerasService>;
}
