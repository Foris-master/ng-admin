import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService, LayoutService, PlayerService, SeoService, StateService, } from './utils';
import { UserData } from './data/users';
import { ElectricityData } from './data/electricity';
import { SmartTableData } from './data/smart-table';
import { UserActivityData } from './data/user-activity';
import { OrdersChartData } from './data/orders-chart';
import { ProfitChartData } from './data/profit-chart';
import { TrafficListData } from './data/traffic-list';
import { EarningData } from './data/earning';
import { OrdersProfitChartData } from './data/orders-profit-chart';
import { TrafficBarData } from './data/traffic-bar';
import { ProfitBarAnimationChartData } from './data/profit-bar-animation-chart';
import { TemperatureHumidityData } from './data/temperature-humidity';
import { SolarData } from './data/solar';
import { TrafficChartData } from './data/traffic-chart';
import { StatsBarData } from './data/stats-bar';
import { CountryOrderData } from './data/country-order';
import { StatsProgressBarData } from './data/stats-progress-bar';
import { VisitorsAnalyticsData } from './data/visitors-analytics';
import { SecurityCamerasData } from './data/security-cameras';
import { UserService } from './mock/users.service';
import { ElectricityService } from './mock/electricity.service';
import { SmartTableService } from './mock/smart-table.service';
import { UserActivityService } from './mock/user-activity.service';
import { OrdersChartService } from './mock/orders-chart.service';
import { ProfitChartService } from './mock/profit-chart.service';
import { TrafficListService } from './mock/traffic-list.service';
import { EarningService } from './mock/earning.service';
import { OrdersProfitChartService } from './mock/orders-profit-chart.service';
import { TrafficBarService } from './mock/traffic-bar.service';
import { ProfitBarAnimationChartService } from './mock/profit-bar-animation-chart.service';
import { TemperatureHumidityService } from './mock/temperature-humidity.service';
import { SolarService } from './mock/solar.service';
import { TrafficChartService } from './mock/traffic-chart.service';
import { StatsBarService } from './mock/stats-bar.service';
import { CountryOrderService } from './mock/country-order.service';
import { StatsProgressBarService } from './mock/stats-progress-bar.service';
import { VisitorsAnalyticsService } from './mock/visitors-analytics.service';
import { SecurityCamerasService } from './mock/security-cameras.service';
import { MockDataModule } from './mock/mock-data.module';
import * as i0 from "@angular/core";
const socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
const DATA_SERVICES = [
    { provide: UserData, useClass: UserService },
    { provide: ElectricityData, useClass: ElectricityService },
    { provide: SmartTableData, useClass: SmartTableService },
    { provide: UserActivityData, useClass: UserActivityService },
    { provide: OrdersChartData, useClass: OrdersChartService },
    { provide: ProfitChartData, useClass: ProfitChartService },
    { provide: TrafficListData, useClass: TrafficListService },
    { provide: EarningData, useClass: EarningService },
    { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
    { provide: TrafficBarData, useClass: TrafficBarService },
    {
        provide: ProfitBarAnimationChartData,
        useClass: ProfitBarAnimationChartService,
    },
    { provide: TemperatureHumidityData, useClass: TemperatureHumidityService },
    { provide: SolarData, useClass: SolarService },
    { provide: TrafficChartData, useClass: TrafficChartService },
    { provide: StatsBarData, useClass: StatsBarService },
    { provide: CountryOrderData, useClass: CountryOrderService },
    { provide: StatsProgressBarData, useClass: StatsProgressBarService },
    { provide: VisitorsAnalyticsData, useClass: VisitorsAnalyticsService },
    { provide: SecurityCamerasData, useClass: SecurityCamerasService },
];
export class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    }
}
export const NB_CORE_PROVIDERS = [
    ...MockDataModule.forRoot().providers,
    ...DATA_SERVICES,
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: 'email',
                delay: 3000,
            }),
        ],
        forms: {
            login: {
                socialLinks: socialLinks,
            },
            register: {
                socialLinks: socialLinks,
            },
        },
    }).providers,
    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: NbRoleProvider,
        useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    SeoService,
    StateService,
];
export class CoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [...NB_CORE_PROVIDERS],
        };
    }
}
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, imports: [CommonModule], exports: [NbAuthModule] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, imports: [[CommonModule], NbAuthModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [NbAuthModule],
                    declarations: [],
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLFNBQVMsQ0FBQztBQUNqQixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8s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QUNwQixTQUFTLEVBQUUsQ0FBQyxHQUFHLGlCQUFpQixDQUFDO1NBQ2xDLENBQUM7SUFDSixDQUFDOzt1R0FWVSxVQUFVLGtCQUM2QixVQUFVO3dHQURqRCxVQUFVLFlBSlgsWUFBWSxhQUNaLFlBQVk7d0dBR1gsVUFBVSxZQUpaLENBQUMsWUFBWSxDQUFDLEVBQ2IsWUFBWTsyRkFHWCxVQUFVO2tCQUx0QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsRUFBRTtpQkFDakI7MERBRW1ELFVBQVU7MEJBQS9DLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYkF1dGhNb2R1bGUsIE5iRHVtbXlBdXRoU3RyYXRlZ3kgfSBmcm9tICdAbmVidWxhci9hdXRoJztcbmltcG9ydCB7IE5iU2VjdXJpdHlNb2R1bGUsIE5iUm9sZVByb3ZpZGVyIH0gZnJvbSAnQG5lYnVsYXIvc2VjdXJpdHknO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcbmltcG9ydCB7XG4gIEFuYWx5dGljc1NlcnZpY2UsXG4gIExheW91dFNlcnZpY2UsXG4gIFBsYXllclNlcnZpY2UsXG4gIFNlb1NlcnZpY2UsXG4gIFN0YXRlU2VydmljZSxcbn0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4vZGF0YS91c2Vycyc7XG5pbXBvcnQgeyBFbGVjdHJpY2l0eURhdGEgfSBmcm9tICcuL2RhdGEvZWxlY3RyaWNpdHknO1xuaW1wb3J0IHsgU21hcnRUYWJsZURhdGEgfSBmcm9tICcuL2RhdGEvc21hcnQtdGFibGUnO1xuaW1wb3J0IHsgVXNlckFjdGl2aXR5RGF0YSB9IGZyb20gJy4vZGF0YS91c2VyLWFjdGl2aXR5JztcbmltcG9ydCB7IE9yZGVyc0NoYXJ0RGF0YSB9IGZyb20gJy4vZGF0YS9vcmRlcnMtY2hhcnQnO1xuaW1wb3J0IHsgUHJvZml0Q2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL3Byb2ZpdC1jaGFydCc7XG5pbXBvcnQgeyBUcmFmZmljTGlzdERhdGEgfSBmcm9tICcuL2RhdGEvdHJhZmZpYy1saXN0JztcbmltcG9ydCB7IEVhcm5pbmdEYXRhIH0gZnJvbSAnLi9kYXRhL2Vhcm5pbmcnO1xuaW1wb3J0IHsgT3JkZXJzUHJvZml0Q2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL29yZGVycy1wcm9maXQtY2hhcnQnO1xuaW1wb3J0IHsgVHJhZmZpY0JhckRhdGEgfSBmcm9tICcuL2RhdGEvdHJhZmZpYy1iYXInO1xuaW1wb3J0IHsgUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL3Byb2ZpdC1iYXItYW5pbWF0aW9uLWNoYXJ0JztcbmltcG9ydCB7IFRlbXBlcmF0dXJlSHVtaWRpdHlEYXRhIH0gZnJvbSAnLi9kYXRhL3RlbXBlcmF0dXJlLWh1bWlkaXR5JztcbmltcG9ydCB7IFNvbGFyRGF0YSB9IGZyb20gJy4vZGF0YS9zb2xhcic7XG5pbXBvcnQgeyBUcmFmZmljQ2hhcnREYXRhIH0gZnJvbSAnLi9kYXRhL3RyYWZmaWMtY2hhcnQnO1xuaW1wb3J0IHsgU3RhdHNCYXJEYXRhIH0gZnJvbSAnLi9kYXRhL3N0YXRzLWJhcic7XG5pbXBvcnQgeyBDb3VudHJ5T3JkZXJEYXRhIH0gZnJvbSAnLi9kYXRhL2NvdW50cnktb3JkZXInO1xuaW1wb3J0IHsgU3RhdHNQcm9ncmVzc0JhckRhdGEgfSBmcm9tICcuL2RhdGEvc3RhdHMtcHJvZ3Jlc3MtYmFyJztcbmltcG9ydCB7IFZpc2l0b3JzQW5hbHl0aWNzRGF0YSB9IGZyb20gJy4vZGF0YS92aXNpdG9ycy1hbmFseXRpY3MnO1xuaW1wb3J0IHsgU2VjdXJpdHlDYW1lcmFzRGF0YSB9IGZyb20gJy4vZGF0YS9zZWN1cml0eS1jYW1lcmFzJztcblxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL21vY2svdXNlcnMuc2VydmljZSc7XG5pbXBvcnQgeyBFbGVjdHJpY2l0eVNlcnZpY2UgfSBmcm9tICcuL21vY2svZWxlY3RyaWNpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBTbWFydFRhYmxlU2VydmljZSB9IGZyb20gJy4vbW9jay9zbWFydC10YWJsZS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpdml0eVNlcnZpY2UgfSBmcm9tICcuL21vY2svdXNlci1hY3Rpdml0eS5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyc0NoYXJ0U2VydmljZSB9IGZyb20gJy4vbW9jay9vcmRlcnMtY2hhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9maXRDaGFydFNlcnZpY2UgfSBmcm9tICcuL21vY2svcHJvZml0LWNoYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhZmZpY0xpc3RTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RyYWZmaWMtbGlzdC5zZXJ2aWNlJztcbmltcG9ydCB7IEVhcm5pbmdTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL2Vhcm5pbmcuc2VydmljZSc7XG5pbXBvcnQgeyBPcmRlcnNQcm9maXRDaGFydFNlcnZpY2UgfSBmcm9tICcuL21vY2svb3JkZXJzLXByb2ZpdC1jaGFydC5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYWZmaWNCYXJTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RyYWZmaWMtYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3Byb2ZpdC1iYXItYW5pbWF0aW9uLWNoYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVtcGVyYXR1cmVIdW1pZGl0eVNlcnZpY2UgfSBmcm9tICcuL21vY2svdGVtcGVyYXR1cmUtaHVtaWRpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBTb2xhclNlcnZpY2UgfSBmcm9tICcuL21vY2svc29sYXIuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFmZmljQ2hhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3RyYWZmaWMtY2hhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0c0JhclNlcnZpY2UgfSBmcm9tICcuL21vY2svc3RhdHMtYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ291bnRyeU9yZGVyU2VydmljZSB9IGZyb20gJy4vbW9jay9jb3VudHJ5LW9yZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdHNQcm9ncmVzc0JhclNlcnZpY2UgfSBmcm9tICcuL21vY2svc3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVmlzaXRvcnNBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9tb2NrL3Zpc2l0b3JzLWFuYWx5dGljcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNlY3VyaXR5Q2FtZXJhc1NlcnZpY2UgfSBmcm9tICcuL21vY2svc2VjdXJpdHktY2FtZXJhcy5zZXJ2aWNlJztcbmltcG9ydCB7IE1vY2tEYXRhTW9kdWxlIH0gZnJvbSAnLi9tb2NrL21vY2stZGF0YS5tb2R1bGUnO1xuXG5jb25zdCBzb2NpYWxMaW5rcyA9IFtcbiAge1xuICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ha3Zlby9uZWJ1bGFyJyxcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgIGljb246ICdnaXRodWInLFxuICB9LFxuICB7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FrdmVvLycsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICBpY29uOiAnZmFjZWJvb2snLFxuICB9LFxuICB7XG4gICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ha3Zlb19pbmMnLFxuICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgaWNvbjogJ3R3aXR0ZXInLFxuICB9LFxuXTtcblxuY29uc3QgREFUQV9TRVJWSUNFUyA9IFtcbiAgeyBwcm92aWRlOiBVc2VyRGF0YSwgdXNlQ2xhc3M6IFVzZXJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogRWxlY3RyaWNpdHlEYXRhLCB1c2VDbGFzczogRWxlY3RyaWNpdHlTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogU21hcnRUYWJsZURhdGEsIHVzZUNsYXNzOiBTbWFydFRhYmxlU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFVzZXJBY3Rpdml0eURhdGEsIHVzZUNsYXNzOiBVc2VyQWN0aXZpdHlTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogT3JkZXJzQ2hhcnREYXRhLCB1c2VDbGFzczogT3JkZXJzQ2hhcnRTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogUHJvZml0Q2hhcnREYXRhLCB1c2VDbGFzczogUHJvZml0Q2hhcnRTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogVHJhZmZpY0xpc3REYXRhLCB1c2VDbGFzczogVHJhZmZpY0xpc3RTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogRWFybmluZ0RhdGEsIHVzZUNsYXNzOiBFYXJuaW5nU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IE9yZGVyc1Byb2ZpdENoYXJ0RGF0YSwgdXNlQ2xhc3M6IE9yZGVyc1Byb2ZpdENoYXJ0U2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFRyYWZmaWNCYXJEYXRhLCB1c2VDbGFzczogVHJhZmZpY0JhclNlcnZpY2UgfSxcbiAge1xuICAgIHByb3ZpZGU6IFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0RGF0YSxcbiAgICB1c2VDbGFzczogUHJvZml0QmFyQW5pbWF0aW9uQ2hhcnRTZXJ2aWNlLFxuICB9LFxuICB7IHByb3ZpZGU6IFRlbXBlcmF0dXJlSHVtaWRpdHlEYXRhLCB1c2VDbGFzczogVGVtcGVyYXR1cmVIdW1pZGl0eVNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBTb2xhckRhdGEsIHVzZUNsYXNzOiBTb2xhclNlcnZpY2UgfSxcbiAgeyBwcm92aWRlOiBUcmFmZmljQ2hhcnREYXRhLCB1c2VDbGFzczogVHJhZmZpY0NoYXJ0U2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFN0YXRzQmFyRGF0YSwgdXNlQ2xhc3M6IFN0YXRzQmFyU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IENvdW50cnlPcmRlckRhdGEsIHVzZUNsYXNzOiBDb3VudHJ5T3JkZXJTZXJ2aWNlIH0sXG4gIHsgcHJvdmlkZTogU3RhdHNQcm9ncmVzc0JhckRhdGEsIHVzZUNsYXNzOiBTdGF0c1Byb2dyZXNzQmFyU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFZpc2l0b3JzQW5hbHl0aWNzRGF0YSwgdXNlQ2xhc3M6IFZpc2l0b3JzQW5hbHl0aWNzU2VydmljZSB9LFxuICB7IHByb3ZpZGU6IFNlY3VyaXR5Q2FtZXJhc0RhdGEsIHVzZUNsYXNzOiBTZWN1cml0eUNhbWVyYXNTZXJ2aWNlIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgTmJTaW1wbGVSb2xlUHJvdmlkZXIgZXh0ZW5kcyBOYlJvbGVQcm92aWRlciB7XG4gIGdldFJvbGUoKSB7XG4gICAgLy8gaGVyZSB5b3UgY291bGQgcHJvdmlkZSBhbnkgcm9sZSBiYXNlZCBvbiBhbnkgYXV0aCBmbG93XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZignZ3Vlc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTkJfQ09SRV9QUk9WSURFUlMgPSBbXG4gIC4uLihNb2NrRGF0YU1vZHVsZS5mb3JSb290KCkucHJvdmlkZXJzIGFzIGFueVtdKSxcbiAgLi4uREFUQV9TRVJWSUNFUyxcbiAgLi4uKE5iQXV0aE1vZHVsZS5mb3JSb290KHtcbiAgICBzdHJhdGVnaWVzOiBbXG4gICAgICBOYkR1bW15QXV0aFN0cmF0ZWd5LnNldHVwKHtcbiAgICAgICAgbmFtZTogJ2VtYWlsJyxcbiAgICAgICAgZGVsYXk6IDMwMDAsXG4gICAgICB9KSxcbiAgICBdLFxuICAgIGZvcm1zOiB7XG4gICAgICBsb2dpbjoge1xuICAgICAgICBzb2NpYWxMaW5rczogc29jaWFsTGlua3MsXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXI6IHtcbiAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLFxuICAgICAgfSxcbiAgICB9LFxuICB9KS5wcm92aWRlcnMgYXMgYW55W10pLFxuXG4gIE5iU2VjdXJpdHlNb2R1bGUuZm9yUm9vdCh7XG4gICAgYWNjZXNzQ29udHJvbDoge1xuICAgICAgZ3Vlc3Q6IHtcbiAgICAgICAgdmlldzogJyonLFxuICAgICAgfSxcbiAgICAgIHVzZXI6IHtcbiAgICAgICAgcGFyZW50OiAnZ3Vlc3QnLFxuICAgICAgICBjcmVhdGU6ICcqJyxcbiAgICAgICAgZWRpdDogJyonLFxuICAgICAgICByZW1vdmU6ICcqJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkucHJvdmlkZXJzLFxuXG4gIHtcbiAgICBwcm92aWRlOiBOYlJvbGVQcm92aWRlcixcbiAgICB1c2VDbGFzczogTmJTaW1wbGVSb2xlUHJvdmlkZXIsXG4gIH0sXG4gIEFuYWx5dGljc1NlcnZpY2UsXG4gIExheW91dFNlcnZpY2UsXG4gIFBsYXllclNlcnZpY2UsXG4gIFNlb1NlcnZpY2UsXG4gIFN0YXRlU2VydmljZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTmJBdXRoTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogQ29yZU1vZHVsZSkge1xuICAgIHRocm93SWZBbHJlYWR5TG9hZGVkKHBhcmVudE1vZHVsZSwgJ0NvcmVNb2R1bGUnKTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29yZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLk5CX0NPUkVfUFJPVklERVJTXSxcbiAgICB9O1xuICB9XG59XG4iXX0=