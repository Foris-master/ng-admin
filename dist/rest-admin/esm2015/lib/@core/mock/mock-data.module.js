import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { SmartTableService } from './smart-table.service';
import { UserActivityService } from './user-activity.service';
import { OrdersChartService } from './orders-chart.service';
import { ProfitChartService } from './profit-chart.service';
import { TrafficListService } from './traffic-list.service';
import { PeriodsService } from './periods.service';
import { EarningService } from './earning.service';
import { OrdersProfitChartService } from './orders-profit-chart.service';
import { TrafficBarService } from './traffic-bar.service';
import { ProfitBarAnimationChartService } from './profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './temperature-humidity.service';
import { SolarService } from './solar.service';
import { TrafficChartService } from './traffic-chart.service';
import { StatsBarService } from './stats-bar.service';
import { CountryOrderService } from './country-order.service';
import { StatsProgressBarService } from './stats-progress-bar.service';
import { VisitorsAnalyticsService } from './visitors-analytics.service';
import { SecurityCamerasService } from './security-cameras.service';
import * as i0 from "@angular/core";
const SERVICES = [
    UserService,
    ElectricityService,
    SmartTableService,
    UserActivityService,
    OrdersChartService,
    ProfitChartService,
    TrafficListService,
    PeriodsService,
    EarningService,
    OrdersProfitChartService,
    TrafficBarService,
    ProfitBarAnimationChartService,
    TemperatureHumidityService,
    SolarService,
    TrafficChartService,
    StatsBarService,
    CountryOrderService,
    StatsProgressBarService,
    VisitorsAnalyticsService,
    SecurityCamerasService,
];
export class MockDataModule {
    static forRoot() {
        return {
            ngModule: MockDataModule,
            providers: [
                ...SERVICES,
            ],
        };
    }
}
MockDataModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MockDataModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, imports: [CommonModule] });
MockDataModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, providers: [
        ...SERVICES,
    ], imports: [[
            CommonModule,
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: MockDataModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                    ],
                    providers: [
                        ...SERVICES,
                    ],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1kYXRhLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AY29yZS9tb2NrL21vY2stZGF0YS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBRXBFLE1BQU0sUUFBUSxHQUFHO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtDQUN2QixDQUFDO0FBVUYsTUFBTSxPQUFPLGNBQWM7SUFDekIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULEdBQUcsUUFBUTthQUNaO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzJHQVJVLGNBQWM7NEdBQWQsY0FBYyxZQU52QixZQUFZOzRHQU1ILGNBQWMsYUFKZDtRQUNULEdBQUcsUUFBUTtLQUNaLFlBTFE7WUFDUCxZQUFZO1NBQ2I7MkZBS1UsY0FBYztrQkFSMUIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsR0FBRyxRQUFRO3FCQUNaO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2Vycy5zZXJ2aWNlJztcbmltcG9ydCB7IEVsZWN0cmljaXR5U2VydmljZSB9IGZyb20gJy4vZWxlY3RyaWNpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gJy4vc21hcnQtdGFibGUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aXZpdHlTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLWFjdGl2aXR5LnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJzQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9vcmRlcnMtY2hhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maXRDaGFydFNlcnZpY2UgfSBmcm9tICcuL3Byb2ZpdC1jaGFydC5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYWZmaWNMaXN0U2VydmljZSB9IGZyb20gJy4vdHJhZmZpYy1saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUGVyaW9kc1NlcnZpY2UgfSBmcm9tICcuL3BlcmlvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBFYXJuaW5nU2VydmljZSB9IGZyb20gJy4vZWFybmluZy5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc1Byb2ZpdENoYXJ0U2VydmljZSB9IGZyb20gJy4vb3JkZXJzLXByb2ZpdC1jaGFydC5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYWZmaWNCYXJTZXJ2aWNlIH0gZnJvbSAnLi90cmFmZmljLWJhci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0U2VydmljZSB9IGZyb20gJy4vcHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBUZW1wZXJhdHVyZUh1bWlkaXR5U2VydmljZSB9IGZyb20gJy4vdGVtcGVyYXR1cmUtaHVtaWRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBTb2xhclNlcnZpY2UgfSBmcm9tICcuL3NvbGFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhZmZpY0NoYXJ0U2VydmljZSB9IGZyb20gJy4vdHJhZmZpYy1jaGFydC5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRzQmFyU2VydmljZSB9IGZyb20gJy4vc3RhdHMtYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291bnRyeU9yZGVyU2VydmljZSB9IGZyb20gJy4vY291bnRyeS1vcmRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRzUHJvZ3Jlc3NCYXJTZXJ2aWNlIH0gZnJvbSAnLi9zdGF0cy1wcm9ncmVzcy1iYXIuc2VydmljZSc7XG5pbXBvcnQgeyBWaXNpdG9yc0FuYWx5dGljc1NlcnZpY2UgfSBmcm9tICcuL3Zpc2l0b3JzLWFuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlY3VyaXR5Q2FtZXJhc1NlcnZpY2UgfSBmcm9tICcuL3NlY3VyaXR5LWNhbWVyYXMuc2VydmljZSc7XG5cbmNvbnN0IFNFUlZJQ0VTID0gW1xuICBVc2VyU2VydmljZSxcbiAgRWxlY3RyaWNpdHlTZXJ2aWNlLFxuICBTbWFydFRhYmxlU2VydmljZSxcbiAgVXNlckFjdGl2aXR5U2VydmljZSxcbiAgT3JkZXJzQ2hhcnRTZXJ2aWNlLFxuICBQcm9maXRDaGFydFNlcnZpY2UsXG4gIFRyYWZmaWNMaXN0U2VydmljZSxcbiAgUGVyaW9kc1NlcnZpY2UsXG4gIEVhcm5pbmdTZXJ2aWNlLFxuICBPcmRlcnNQcm9maXRDaGFydFNlcnZpY2UsXG4gIFRyYWZmaWNCYXJTZXJ2aWNlLFxuICBQcm9maXRCYXJBbmltYXRpb25DaGFydFNlcnZpY2UsXG4gIFRlbXBlcmF0dXJlSHVtaWRpdHlTZXJ2aWNlLFxuICBTb2xhclNlcnZpY2UsXG4gIFRyYWZmaWNDaGFydFNlcnZpY2UsXG4gIFN0YXRzQmFyU2VydmljZSxcbiAgQ291bnRyeU9yZGVyU2VydmljZSxcbiAgU3RhdHNQcm9ncmVzc0JhclNlcnZpY2UsXG4gIFZpc2l0b3JzQW5hbHl0aWNzU2VydmljZSxcbiAgU2VjdXJpdHlDYW1lcmFzU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIC4uLlNFUlZJQ0VTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNb2NrRGF0YU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TW9ja0RhdGFNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1vY2tEYXRhTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLlNFUlZJQ0VTLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=