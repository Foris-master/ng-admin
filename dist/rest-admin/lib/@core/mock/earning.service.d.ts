import { Observable } from 'rxjs';
import { LiveUpdateChart, PieChart, EarningData } from '../data/earning';
import * as i0 from "@angular/core";
export declare class EarningService extends EarningData {
    private currentDate;
    private currentValue;
    private ONE_DAY;
    private pieChartData;
    private liveUpdateChartData;
    getDefaultLiveChartData(elementsNumber: number): {
        value: (string | number)[];
    }[];
    generateRandomLiveChartData(): {
        value: (string | number)[];
    };
    getEarningLiveUpdateCardData(currency: string): Observable<any[]>;
    getEarningCardData(currency: string): Observable<LiveUpdateChart>;
    getEarningPieChartData(): Observable<PieChart[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EarningService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EarningService>;
}
