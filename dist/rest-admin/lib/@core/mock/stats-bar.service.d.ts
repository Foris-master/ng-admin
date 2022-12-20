import { Observable } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';
import * as i0 from "@angular/core";
export declare class StatsBarService extends StatsBarData {
    private statsBarData;
    getStatsBarData(): Observable<number[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatsBarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatsBarService>;
}
