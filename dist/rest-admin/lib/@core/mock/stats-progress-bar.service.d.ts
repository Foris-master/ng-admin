import { Observable } from 'rxjs';
import { ProgressInfo, StatsProgressBarData } from '../data/stats-progress-bar';
import * as i0 from "@angular/core";
export declare class StatsProgressBarService extends StatsProgressBarData {
    private progressInfoData;
    getProgressInfoData(): Observable<ProgressInfo[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StatsProgressBarService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StatsProgressBarService>;
}
