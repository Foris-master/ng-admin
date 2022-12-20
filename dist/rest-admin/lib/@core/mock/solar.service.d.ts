import { Observable } from 'rxjs';
import { SolarData } from '../data/solar';
import * as i0 from "@angular/core";
export declare class SolarService extends SolarData {
    private value;
    getSolarData(): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolarService>;
}
