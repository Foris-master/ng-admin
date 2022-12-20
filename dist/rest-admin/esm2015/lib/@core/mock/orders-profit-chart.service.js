import { of as observableOf } from 'rxjs';
import { Injectable } from '@angular/core';
import { OrdersProfitChartData } from '../data/orders-profit-chart';
import * as i0 from "@angular/core";
import * as i1 from "../data/orders-chart";
import * as i2 from "../data/profit-chart";
export class OrdersProfitChartService extends OrdersProfitChartData {
    constructor(ordersChartService, profitChartService) {
        super();
        this.ordersChartService = ordersChartService;
        this.profitChartService = profitChartService;
        this.summary = [
            {
                title: 'Marketplace',
                value: 3654,
            },
            {
                title: 'Last Month',
                value: 946,
            },
            {
                title: 'Last Week',
                value: 654,
            },
            {
                title: 'Today',
                value: 230,
            },
        ];
    }
    getOrderProfitChartSummary() {
        return observableOf(this.summary);
    }
    getOrdersChartData(period) {
        return observableOf(this.ordersChartService.getOrdersChartData(period));
    }
    getProfitChartData(period) {
        return observableOf(this.profitChartService.getProfitChartData(period));
    }
}
OrdersProfitChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersProfitChartService, deps: [{ token: i1.OrdersChartData }, { token: i2.ProfitChartData }], target: i0.ɵɵFactoryTarget.Injectable });
OrdersProfitChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersProfitChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: OrdersProfitChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.OrdersChartData }, { type: i2.ProfitChartData }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJzLXByb2ZpdC1jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0Bjb3JlL21vY2svb3JkZXJzLXByb2ZpdC1jaGFydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFlLE1BQU0sTUFBTSxDQUFDO0FBQ3ZELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUEyQixxQkFBcUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7O0FBSTdGLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxxQkFBcUI7SUFxQmpFLFlBQW9CLGtCQUFtQyxFQUNuQyxrQkFBbUM7UUFDckQsS0FBSyxFQUFFLENBQUM7UUFGVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlCO1FBQ25DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBaUI7UUFwQi9DLFlBQU8sR0FBRztZQUNoQjtnQkFDRSxLQUFLLEVBQUUsYUFBYTtnQkFDcEIsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLEtBQUssRUFBRSxZQUFZO2dCQUNuQixLQUFLLEVBQUUsR0FBRzthQUNYO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLFdBQVc7Z0JBQ2xCLEtBQUssRUFBRSxHQUFHO2FBQ1g7WUFDRDtnQkFDRSxLQUFLLEVBQUUsT0FBTztnQkFDZCxLQUFLLEVBQUUsR0FBRzthQUNYO1NBQ0YsQ0FBQztJQUtGLENBQUM7SUFFRCwwQkFBMEI7UUFDeEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjO1FBQy9CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjO1FBQy9CLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O3FIQXBDVSx3QkFBd0I7eUhBQXhCLHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQURwQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJzQ2hhcnQsIE9yZGVyc0NoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvb3JkZXJzLWNoYXJ0JztcbmltcG9ydCB7IE9yZGVyUHJvZml0Q2hhcnRTdW1tYXJ5LCBPcmRlcnNQcm9maXRDaGFydERhdGEgfSBmcm9tICcuLi9kYXRhL29yZGVycy1wcm9maXQtY2hhcnQnO1xuaW1wb3J0IHsgUHJvZml0Q2hhcnQsIFByb2ZpdENoYXJ0RGF0YSB9IGZyb20gJy4uL2RhdGEvcHJvZml0LWNoYXJ0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyc1Byb2ZpdENoYXJ0U2VydmljZSBleHRlbmRzIE9yZGVyc1Byb2ZpdENoYXJ0RGF0YSB7XG5cbiAgcHJpdmF0ZSBzdW1tYXJ5ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnTWFya2V0cGxhY2UnLFxuICAgICAgdmFsdWU6IDM2NTQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ0xhc3QgTW9udGgnLFxuICAgICAgdmFsdWU6IDk0NixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTGFzdCBXZWVrJyxcbiAgICAgIHZhbHVlOiA2NTQsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogJ1RvZGF5JyxcbiAgICAgIHZhbHVlOiAyMzAsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9yZGVyc0NoYXJ0U2VydmljZTogT3JkZXJzQ2hhcnREYXRhLFxuICAgICAgICAgICAgICBwcml2YXRlIHByb2ZpdENoYXJ0U2VydmljZTogUHJvZml0Q2hhcnREYXRhKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldE9yZGVyUHJvZml0Q2hhcnRTdW1tYXJ5KCk6IE9ic2VydmFibGU8T3JkZXJQcm9maXRDaGFydFN1bW1hcnlbXT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5zdW1tYXJ5KTtcbiAgfVxuXG4gIGdldE9yZGVyc0NoYXJ0RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJzQ2hhcnQ+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMub3JkZXJzQ2hhcnRTZXJ2aWNlLmdldE9yZGVyc0NoYXJ0RGF0YShwZXJpb2QpKTtcbiAgfVxuXG4gIGdldFByb2ZpdENoYXJ0RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZml0Q2hhcnQ+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMucHJvZml0Q2hhcnRTZXJ2aWNlLmdldFByb2ZpdENoYXJ0RGF0YShwZXJpb2QpKTtcbiAgfVxufVxuIl19