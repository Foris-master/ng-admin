import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
import * as i0 from "@angular/core";
export class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    constructor() {
        super();
        this.data = {
            firstLine: this.getDataForFirstLine(),
            secondLine: this.getDataForSecondLine(),
        };
    }
    getDataForFirstLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.sin(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    getDataForSecondLine() {
        return this.createEmptyArray(100)
            .map((_, index) => {
            const oneFifth = index / 5;
            return (Math.cos(oneFifth) * (oneFifth - 10) + index / 6) * 5;
        });
    }
    createEmptyArray(nPoints) {
        return Array.from(Array(nPoints));
    }
    getChartData() {
        return observableOf(this.data);
    }
}
ProfitBarAnimationChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitBarAnimationChartService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
ProfitBarAnimationChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitBarAnimationChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitBarAnimationChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZml0LWJhci1hbmltYXRpb24tY2hhcnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AY29yZS9tb2NrL3Byb2ZpdC1iYXItYW5pbWF0aW9uLWNoYXJ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7QUFHakYsTUFBTSxPQUFPLDhCQUErQixTQUFRLDJCQUEyQjtJQUk3RTtRQUNFLEtBQUssRUFBRSxDQUFDO1FBQ1IsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDckMsVUFBVSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7YUFDOUIsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2hCLE1BQU0sUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDO2FBQzlCLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUNoQixNQUFNLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRTNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBZTtRQUM5QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7MkhBcENVLDhCQUE4QjsrSEFBOUIsOEJBQThCOzJGQUE5Qiw4QkFBOEI7a0JBRDFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9maXRCYXJBbmltYXRpb25DaGFydERhdGEgfSBmcm9tICcuLi9kYXRhL3Byb2ZpdC1iYXItYW5pbWF0aW9uLWNoYXJ0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0U2VydmljZSBleHRlbmRzIFByb2ZpdEJhckFuaW1hdGlvbkNoYXJ0RGF0YSB7XG5cbiAgcHJpdmF0ZSBkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICBmaXJzdExpbmU6IHRoaXMuZ2V0RGF0YUZvckZpcnN0TGluZSgpLFxuICAgICAgc2Vjb25kTGluZTogdGhpcy5nZXREYXRhRm9yU2Vjb25kTGluZSgpLFxuICAgIH07XG4gIH1cblxuICBnZXREYXRhRm9yRmlyc3RMaW5lKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbXB0eUFycmF5KDEwMClcbiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZUZpZnRoID0gaW5kZXggLyA1O1xuXG4gICAgICAgIHJldHVybiAoTWF0aC5zaW4ob25lRmlmdGgpICogKG9uZUZpZnRoIC0gMTApICsgaW5kZXggLyA2KSAqIDU7XG4gICAgICB9KTtcbiAgfVxuXG4gIGdldERhdGFGb3JTZWNvbmRMaW5lKCk6IG51bWJlcltdIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVFbXB0eUFycmF5KDEwMClcbiAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9uZUZpZnRoID0gaW5kZXggLyA1O1xuXG4gICAgICAgIHJldHVybiAoTWF0aC5jb3Mob25lRmlmdGgpICogKG9uZUZpZnRoIC0gMTApICsgaW5kZXggLyA2KSAqIDU7XG4gICAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUVtcHR5QXJyYXkoblBvaW50czogbnVtYmVyKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoblBvaW50cykpO1xuICB9XG5cbiAgZ2V0Q2hhcnREYXRhKCk6IE9ic2VydmFibGU8eyBmaXJzdExpbmU6IG51bWJlcltdOyBzZWNvbmRMaW5lOiBudW1iZXJbXTsgfT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5kYXRhKTtcbiAgfVxufVxuIl19