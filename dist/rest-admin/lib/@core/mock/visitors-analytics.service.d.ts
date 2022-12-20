import { Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { OutlineData, VisitorsAnalyticsData } from '../data/visitors-analytics';
import * as i0 from "@angular/core";
export declare class VisitorsAnalyticsService extends VisitorsAnalyticsData {
    private periodService;
    constructor(periodService: PeriodsService);
    private pieChartValue;
    private innerLinePoints;
    private outerLinePoints;
    private generateOutlineLineData;
    getInnerLineChartData(): Observable<number[]>;
    getOutlineLineChartData(): Observable<OutlineData[]>;
    getPieChartData(): Observable<number>;
    static ɵfac: i0.ɵɵFactoryDeclaration<VisitorsAnalyticsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<VisitorsAnalyticsService>;
}
