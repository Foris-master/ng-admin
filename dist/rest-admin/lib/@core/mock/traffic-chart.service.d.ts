import { Observable } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';
import * as i0 from "@angular/core";
export declare class TrafficChartService extends TrafficChartData {
    private data;
    getTrafficChartData(): Observable<number[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrafficChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TrafficChartService>;
}
