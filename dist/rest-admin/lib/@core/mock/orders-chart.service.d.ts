import { PeriodsService } from './periods.service';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';
import * as i0 from "@angular/core";
export declare class OrdersChartService extends OrdersChartData {
    private period;
    private year;
    private data;
    constructor(period: PeriodsService);
    private getDataForWeekPeriod;
    private getDataForMonthPeriod;
    private getDataForYearPeriod;
    getDataLabels(nPoints: number, labelsArray: string[]): string[];
    getOrdersChartData(period: string): OrdersChart;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrdersChartService>;
}
