import { PeriodsService } from './periods.service';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';
import * as i0 from "@angular/core";
export declare class ProfitChartService extends ProfitChartData {
    private period;
    private year;
    private data;
    constructor(period: PeriodsService);
    private getDataForWeekPeriod;
    private getDataForMonthPeriod;
    private getDataForYearPeriod;
    private getRandomData;
    getProfitChartData(period: string): ProfitChart;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfitChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfitChartService>;
}
