import { Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { TrafficList, TrafficListData } from '../data/traffic-list';
import * as i0 from "@angular/core";
export declare class TrafficListService extends TrafficListData {
    private period;
    private getRandom;
    private data;
    constructor(period: PeriodsService);
    private getDataWeek;
    private getDataMonth;
    private getDataYear;
    private reduceData;
    getTrafficListData(period: string): Observable<TrafficList>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrafficListService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TrafficListService>;
}
