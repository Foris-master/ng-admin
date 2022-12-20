import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TrafficBarData } from '../data/traffic-bar';
import * as i0 from "@angular/core";
import * as i1 from "./periods.service";
export class TrafficBarService extends TrafficBarData {
    constructor(period) {
        super();
        this.period = period;
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15],
            labels: this.period.getWeeks(),
            formatter: '{c0} MB',
        };
    }
    getDataForMonthPeriod() {
        return {
            data: [0.5, 0.3, 0.8, 0.2, 0.3, 0.7, 0.8, 1, 0.7, 0.8, 0.6, 0.7],
            labels: this.period.getMonths(),
            formatter: '{c0} GB',
        };
    }
    getDataForYearPeriod() {
        return {
            data: [10, 15, 19, 7, 20, 13, 15, 19, 11],
            labels: this.period.getYears(),
            formatter: '{c0} GB',
        };
    }
    getTrafficBarData(period) {
        return observableOf(this.data[period]);
    }
}
TrafficBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficBarService, deps: [{ token: i1.PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
TrafficBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficBarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficBarService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PeriodsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1iYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AY29yZS9tb2NrL3RyYWZmaWMtYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFjLE1BQU0scUJBQXFCLENBQUM7OztBQUdqRSxNQUFNLE9BQU8saUJBQWtCLFNBQVEsY0FBYztJQUluRCxZQUFvQixNQUFzQjtRQUN4QyxLQUFLLEVBQUUsQ0FBQztRQURVLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBRmxDLFNBQUksR0FBUSxFQUFHLENBQUM7UUFJdEIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUNuQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1NBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzlCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUM7SUFDSixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU87WUFDTCxJQUFJLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNoRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDL0IsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQztJQUNKLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTztZQUNMLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1lBQ3pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM5QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQWM7UUFDOUIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzhHQXZDVSxpQkFBaUI7a0hBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGVyaW9kc1NlcnZpY2UgfSBmcm9tICcuL3BlcmlvZHMuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFmZmljQmFyRGF0YSwgVHJhZmZpY0JhciB9IGZyb20gJy4uL2RhdGEvdHJhZmZpYy1iYXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhZmZpY0JhclNlcnZpY2UgZXh0ZW5kcyBUcmFmZmljQmFyRGF0YSB7XG5cbiAgcHJpdmF0ZSBkYXRhOiBhbnkgPSB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJpb2Q6IFBlcmlvZHNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICB3ZWVrOiB0aGlzLmdldERhdGFGb3JXZWVrUGVyaW9kKCksXG4gICAgICBtb250aDogdGhpcy5nZXREYXRhRm9yTW9udGhQZXJpb2QoKSxcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YUZvclllYXJQZXJpb2QoKSxcbiAgICB9O1xuICB9XG5cbiAgZ2V0RGF0YUZvcldlZWtQZXJpb2QoKTogVHJhZmZpY0JhciB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFsxMCwgMTUsIDE5LCA3LCAyMCwgMTMsIDE1XSxcbiAgICAgIGxhYmVsczogdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKSxcbiAgICAgIGZvcm1hdHRlcjogJ3tjMH0gTUInLFxuICAgIH07XG4gIH1cblxuICBnZXREYXRhRm9yTW9udGhQZXJpb2QoKTogVHJhZmZpY0JhciB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IFswLjUsIDAuMywgMC44LCAwLjIsIDAuMywgMC43LCAwLjgsIDEsIDAuNywgMC44LCAwLjYsIDAuN10sXG4gICAgICBsYWJlbHM6IHRoaXMucGVyaW9kLmdldE1vbnRocygpLFxuICAgICAgZm9ybWF0dGVyOiAne2MwfSBHQicsXG4gICAgfTtcbiAgfVxuXG4gIGdldERhdGFGb3JZZWFyUGVyaW9kKCk6IFRyYWZmaWNCYXIge1xuICAgIHJldHVybiB7XG4gICAgICBkYXRhOiBbMTAsIDE1LCAxOSwgNywgMjAsIDEzLCAxNSwgMTksIDExXSxcbiAgICAgIGxhYmVsczogdGhpcy5wZXJpb2QuZ2V0WWVhcnMoKSxcbiAgICAgIGZvcm1hdHRlcjogJ3tjMH0gR0InLFxuICAgIH07XG4gIH1cblxuICBnZXRUcmFmZmljQmFyRGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8VHJhZmZpY0Jhcj4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5kYXRhW3BlcmlvZF0pO1xuICB9XG59XG4iXX0=