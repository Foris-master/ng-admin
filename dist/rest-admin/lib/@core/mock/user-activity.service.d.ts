import { Observable } from 'rxjs';
import { PeriodsService } from './periods.service';
import { UserActive, UserActivityData } from '../data/user-activity';
import * as i0 from "@angular/core";
export declare class UserActivityService extends UserActivityData {
    private periods;
    private getRandom;
    private generateUserActivityRandomData;
    data: any;
    constructor(periods: PeriodsService);
    private getDataWeek;
    private getDataMonth;
    private getDataYear;
    getUserActivityData(period: string): Observable<UserActive[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserActivityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UserActivityService>;
}
