import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { UserActivityData } from '../data/user-activity';
import * as i0 from "@angular/core";
import * as i1 from "./periods.service";
export class UserActivityService extends UserActivityData {
    constructor(periods) {
        super();
        this.periods = periods;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    generateUserActivityRandomData(date) {
        return {
            date,
            pagesVisitCount: this.getRandom(1000),
            deltaUp: this.getRandom(1) % 2 === 0,
            newVisits: this.getRandom(100),
        };
    }
    getDataWeek() {
        return this.periods.getWeeks().map((week) => {
            return this.generateUserActivityRandomData(week);
        });
    }
    getDataMonth() {
        const currentDate = new Date();
        const days = currentDate.getDate();
        const month = this.periods.getMonths()[currentDate.getMonth()];
        return Array.from(Array(days)).map((_, index) => {
            const date = `${index + 1} ${month}`;
            return this.generateUserActivityRandomData(date);
        });
    }
    getDataYear() {
        return this.periods.getYears().map((year) => {
            return this.generateUserActivityRandomData(year);
        });
    }
    getUserActivityData(period) {
        return observableOf(this.data[period] || []);
    }
}
UserActivityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserActivityService, deps: [{ token: i1.PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
UserActivityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserActivityService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: UserActivityService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PeriodsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hY3Rpdml0eS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0Bjb3JlL21vY2svdXNlci1hY3Rpdml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFFdkQsT0FBTyxFQUFjLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUdyRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCO0lBY3ZELFlBQW9CLE9BQXVCO1FBQ3pDLEtBQUssRUFBRSxDQUFDO1FBRFUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFabkMsY0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQVU3RSxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBSWIsSUFBSSxDQUFDLElBQUksR0FBRztZQUNWLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3hCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1NBQ3pCLENBQUM7SUFDSixDQUFDO0lBbEJPLDhCQUE4QixDQUFDLElBQVM7UUFDOUMsT0FBTztZQUNMLElBQUk7WUFDSixlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7WUFDckMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDcEMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDO1NBQy9CLENBQUM7SUFDSixDQUFDO0lBYU8sV0FBVztRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDMUMsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWTtRQUNsQixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQy9CLE1BQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNuQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBRS9ELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBRXJDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQzFDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG1CQUFtQixDQUFDLE1BQWM7UUFDaEMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnSEFqRFUsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBlcmlvZHNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJpb2RzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGl2ZSwgVXNlckFjdGl2aXR5RGF0YSB9IGZyb20gJy4uL2RhdGEvdXNlci1hY3Rpdml0eSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWN0aXZpdHlTZXJ2aWNlIGV4dGVuZHMgVXNlckFjdGl2aXR5RGF0YSB7XG5cbiAgcHJpdmF0ZSBnZXRSYW5kb20gPSAocm91bmRUbzogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiByb3VuZFRvKTtcbiAgcHJpdmF0ZSBnZW5lcmF0ZVVzZXJBY3Rpdml0eVJhbmRvbURhdGEoZGF0ZTogYW55KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGUsXG4gICAgICBwYWdlc1Zpc2l0Q291bnQ6IHRoaXMuZ2V0UmFuZG9tKDEwMDApLFxuICAgICAgZGVsdGFVcDogdGhpcy5nZXRSYW5kb20oMSkgJSAyID09PSAwLFxuICAgICAgbmV3VmlzaXRzOiB0aGlzLmdldFJhbmRvbSgxMDApLFxuICAgIH07XG4gIH1cblxuICBkYXRhOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBlcmlvZHM6IFBlcmlvZHNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICB3ZWVrOiB0aGlzLmdldERhdGFXZWVrKCksXG4gICAgICBtb250aDogdGhpcy5nZXREYXRhTW9udGgoKSxcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YVllYXIoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRhV2VlaygpOiBVc2VyQWN0aXZlW10ge1xuICAgIHJldHVybiB0aGlzLnBlcmlvZHMuZ2V0V2Vla3MoKS5tYXAoKHdlZWspID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVXNlckFjdGl2aXR5UmFuZG9tRGF0YSh3ZWVrKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0YU1vbnRoKCk6IFVzZXJBY3RpdmVbXSB7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheXMgPSBjdXJyZW50RGF0ZS5nZXREYXRlKCk7XG4gICAgY29uc3QgbW9udGggPSB0aGlzLnBlcmlvZHMuZ2V0TW9udGhzKClbY3VycmVudERhdGUuZ2V0TW9udGgoKV07XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShBcnJheShkYXlzKSkubWFwKChfLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGF0ZSA9IGAke2luZGV4ICsgMX0gJHttb250aH1gO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVVzZXJBY3Rpdml0eVJhbmRvbURhdGEoZGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGFZZWFyKCk6IFVzZXJBY3RpdmVbXSB7XG4gICAgcmV0dXJuIHRoaXMucGVyaW9kcy5nZXRZZWFycygpLm1hcCgoeWVhcikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVVc2VyQWN0aXZpdHlSYW5kb21EYXRhKHllYXIpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VXNlckFjdGl2aXR5RGF0YShwZXJpb2Q6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlckFjdGl2ZVtdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmRhdGFbcGVyaW9kXSB8fCBbXSk7XG4gIH1cbn1cbiJdfQ==