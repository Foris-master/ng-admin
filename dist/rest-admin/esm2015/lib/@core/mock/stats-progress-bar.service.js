import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsProgressBarData } from '../data/stats-progress-bar';
import * as i0 from "@angular/core";
export class StatsProgressBarService extends StatsProgressBarData {
    constructor() {
        super(...arguments);
        this.progressInfoData = [
            {
                title: 'Today’s Profit',
                value: 572900,
                activeProgress: 70,
                description: 'Better than last week (70%)',
            },
            {
                title: 'New Orders',
                value: 6378,
                activeProgress: 30,
                description: 'Better than last week (30%)',
            },
            {
                title: 'New Comments',
                value: 200,
                activeProgress: 55,
                description: 'Better than last week (55%)',
            },
        ];
    }
    getProgressInfoData() {
        return observableOf(this.progressInfoData);
    }
}
StatsProgressBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsProgressBarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StatsProgressBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsProgressBarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsProgressBarService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtcHJvZ3Jlc3MtYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvbW9jay9zdGF0cy1wcm9ncmVzcy1iYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBZ0Isb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7QUFHaEYsTUFBTSxPQUFPLHVCQUF3QixTQUFRLG9CQUFvQjtJQURqRTs7UUFFVSxxQkFBZ0IsR0FBbUI7WUFDekM7Z0JBQ0UsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsY0FBYyxFQUFFLEVBQUU7Z0JBQ2xCLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0M7WUFDRDtnQkFDRSxLQUFLLEVBQUUsWUFBWTtnQkFDbkIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsY0FBYyxFQUFFLEVBQUU7Z0JBQ2xCLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0M7WUFDRDtnQkFDRSxLQUFLLEVBQUUsY0FBYztnQkFDckIsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsY0FBYyxFQUFFLEVBQUU7Z0JBQ2xCLFdBQVcsRUFBRSw2QkFBNkI7YUFDM0M7U0FDRixDQUFDO0tBS0g7SUFIQyxtQkFBbUI7UUFDakIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDN0MsQ0FBQzs7b0hBeEJVLHVCQUF1Qjt3SEFBdkIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBRG5DLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2dyZXNzSW5mbywgU3RhdHNQcm9ncmVzc0JhckRhdGEgfSBmcm9tICcuLi9kYXRhL3N0YXRzLXByb2dyZXNzLWJhcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0c1Byb2dyZXNzQmFyU2VydmljZSBleHRlbmRzIFN0YXRzUHJvZ3Jlc3NCYXJEYXRhIHtcbiAgcHJpdmF0ZSBwcm9ncmVzc0luZm9EYXRhOiBQcm9ncmVzc0luZm9bXSA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogJ1RvZGF54oCZcyBQcm9maXQnLFxuICAgICAgdmFsdWU6IDU3MjkwMCxcbiAgICAgIGFjdGl2ZVByb2dyZXNzOiA3MCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQmV0dGVyIHRoYW4gbGFzdCB3ZWVrICg3MCUpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTmV3IE9yZGVycycsXG4gICAgICB2YWx1ZTogNjM3OCxcbiAgICAgIGFjdGl2ZVByb2dyZXNzOiAzMCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQmV0dGVyIHRoYW4gbGFzdCB3ZWVrICgzMCUpJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnTmV3IENvbW1lbnRzJyxcbiAgICAgIHZhbHVlOiAyMDAsXG4gICAgICBhY3RpdmVQcm9ncmVzczogNTUsXG4gICAgICBkZXNjcmlwdGlvbjogJ0JldHRlciB0aGFuIGxhc3Qgd2VlayAoNTUlKScsXG4gICAgfSxcbiAgXTtcblxuICBnZXRQcm9ncmVzc0luZm9EYXRhKCk6IE9ic2VydmFibGU8UHJvZ3Jlc3NJbmZvW10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMucHJvZ3Jlc3NJbmZvRGF0YSk7XG4gIH1cbn1cbiJdfQ==