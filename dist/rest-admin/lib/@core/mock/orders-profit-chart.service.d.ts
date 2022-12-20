import { Observable } from 'rxjs';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';
import { OrderProfitChartSummary, OrdersProfitChartData } from '../data/orders-profit-chart';
import { ProfitChart, ProfitChartData } from '../data/profit-chart';
import * as i0 from "@angular/core";
export declare class OrdersProfitChartService extends OrdersProfitChartData {
    private ordersChartService;
    private profitChartService;
    private summary;
    constructor(ordersChartService: OrdersChartData, profitChartService: ProfitChartData);
    getOrderProfitChartSummary(): Observable<OrderProfitChartSummary[]>;
    getOrdersChartData(period: string): Observable<OrdersChart>;
    getProfitChartData(period: string): Observable<ProfitChart>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrdersProfitChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrdersProfitChartService>;
}
