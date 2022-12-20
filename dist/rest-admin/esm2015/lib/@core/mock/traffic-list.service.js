import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TrafficListData } from '../data/traffic-list';
import * as i0 from "@angular/core";
import * as i1 from "./periods.service";
export class TrafficListService extends TrafficListData {
    constructor(period) {
        super();
        this.period = period;
        this.getRandom = (roundTo) => Math.round(Math.random() * roundTo);
        this.data = {};
        this.data = {
            week: this.getDataWeek(),
            month: this.getDataMonth(),
            year: this.getDataYear(),
        };
    }
    getDataWeek() {
        const getFirstDateInPeriod = () => {
            const weeks = this.period.getWeeks();
            return weeks[weeks.length - 1];
        };
        return this.reduceData(this.period.getWeeks(), getFirstDateInPeriod);
    }
    getDataMonth() {
        const getFirstDateInPeriod = () => {
            const months = this.period.getMonths();
            return months[months.length - 1];
        };
        return this.reduceData(this.period.getMonths(), getFirstDateInPeriod);
    }
    getDataYear() {
        const getFirstDateInPeriod = () => {
            const years = this.period.getYears();
            return `${parseInt(years[0], 10) - 1}`;
        };
        return this.reduceData(this.period.getYears(), getFirstDateInPeriod);
    }
    reduceData(timePeriods, getFirstDateInPeriod) {
        return timePeriods.reduce((result, timePeriod, index) => {
            const hasResult = result[index - 1];
            const prevDate = hasResult
                ? result[index - 1].comparison.nextDate
                : getFirstDateInPeriod();
            const prevValue = hasResult
                ? result[index - 1].comparison.nextValue
                : this.getRandom(100);
            const nextValue = this.getRandom(100);
            const deltaValue = prevValue - nextValue;
            const item = {
                date: timePeriod,
                value: this.getRandom(1000),
                delta: {
                    up: deltaValue <= 0,
                    value: Math.abs(deltaValue),
                },
                comparison: {
                    prevDate,
                    prevValue,
                    nextDate: timePeriod,
                    nextValue,
                },
            };
            return [...result, item];
        }, []);
    }
    // private reduceData(timePeriods: string[], getFirstDateInPeriod: () => string): TrafficList[] {
    //   return timePeriods.reduce((result, timePeriod, index) => {
    //     const hasResult = result[index - 1];
    //     const prevDate = hasResult ?
    //       result[index - 1].comparison.nextDate :
    //       getFirstDateInPeriod();
    //     const prevValue = hasResult ?
    //       result[index - 1].comparison.nextValue :
    //       this.getRandom(100);
    //     const nextValue = this.getRandom(100);
    //     const deltaValue = prevValue - nextValue;
    //     const item = {
    //       date: timePeriod,
    //       value: this.getRandom(1000),
    //       delta: {
    //         up: deltaValue <= 0,
    //         value: Math.abs(deltaValue),
    //       },
    //       comparison: {
    //         prevDate,
    //         prevValue,
    //         nextDate: timePeriod,
    //         nextValue,
    //       },
    //     };
    //     return [...result, item];
    //   }, []);
    // }
    getTrafficListData(period) {
        return observableOf(this.data[period]);
    }
}
TrafficListService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficListService, deps: [{ token: i1.PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
TrafficListService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficListService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficListService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PeriodsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvbW9jay90cmFmZmljLWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBRXRELE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBR3BFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBSXJELFlBQW9CLE1BQXNCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFIbEMsY0FBUyxHQUFHLENBQUMsT0FBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNyRSxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBSXJCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUN4QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRTtTQUN6QixDQUFDO0lBQ0osQ0FBQztJQUVPLFdBQVc7UUFDakIsTUFBTSxvQkFBb0IsR0FBRyxHQUFHLEVBQUU7WUFDaEMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUVyQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJ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QjtJQUNyQixXQUFXO0lBQ1gsU0FBUztJQUVULGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osSUFBSTtJQUVKLGtCQUFrQixDQUFDLE1BQWM7UUFDL0IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OytHQS9HVSxrQkFBa0I7bUhBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQZXJpb2RzU2VydmljZSB9IGZyb20gJy4vcGVyaW9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYWZmaWNMaXN0LCBUcmFmZmljTGlzdERhdGEgfSBmcm9tICcuLi9kYXRhL3RyYWZmaWMtbGlzdCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUcmFmZmljTGlzdFNlcnZpY2UgZXh0ZW5kcyBUcmFmZmljTGlzdERhdGEge1xuICBwcml2YXRlIGdldFJhbmRvbSA9IChyb3VuZFRvOiBudW1iZXIpID0+IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIHJvdW5kVG8pO1xuICBwcml2YXRlIGRhdGE6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGVyaW9kOiBQZXJpb2RzU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5kYXRhID0ge1xuICAgICAgd2VlazogdGhpcy5nZXREYXRhV2VlaygpLFxuICAgICAgbW9udGg6IHRoaXMuZ2V0RGF0YU1vbnRoKCksXG4gICAgICB5ZWFyOiB0aGlzLmdldERhdGFZZWFyKCksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0YVdlZWsoKTogVHJhZmZpY0xpc3RbXSB7XG4gICAgY29uc3QgZ2V0Rmlyc3REYXRlSW5QZXJpb2QgPSAoKSA9PiB7XG4gICAgICBjb25zdCB3ZWVrcyA9IHRoaXMucGVyaW9kLmdldFdlZWtzKCk7XG5cbiAgICAgIHJldHVybiB3ZWVrc1t3ZWVrcy5sZW5ndGggLSAxXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVkdWNlRGF0YSh0aGlzLnBlcmlvZC5nZXRXZWVrcygpLCBnZXRGaXJzdERhdGVJblBlcmlvZCk7XG4gIH1cblxuICBwcml2YXRlIGdldERhdGFNb250aCgpOiBUcmFmZmljTGlzdFtdIHtcbiAgICBjb25zdCBnZXRGaXJzdERhdGVJblBlcmlvZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG1vbnRocyA9IHRoaXMucGVyaW9kLmdldE1vbnRocygpO1xuXG4gICAgICByZXR1cm4gbW9udGhzW21vbnRocy5sZW5ndGggLSAxXTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVkdWNlRGF0YSh0aGlzLnBlcmlvZC5nZXRNb250aHMoKSwgZ2V0Rmlyc3REYXRlSW5QZXJpb2QpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRhWWVhcigpOiBUcmFmZmljTGlzdFtdIHtcbiAgICBjb25zdCBnZXRGaXJzdERhdGVJblBlcmlvZCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHllYXJzID0gdGhpcy5wZXJpb2QuZ2V0WWVhcnMoKTtcblxuICAgICAgcmV0dXJuIGAke3BhcnNlSW50KHllYXJzWzBdLCAxMCkgLSAxfWA7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLnJlZHVjZURhdGEodGhpcy5wZXJpb2QuZ2V0WWVhcnMoKSwgZ2V0Rmlyc3REYXRlSW5QZXJpb2QpO1xuICB9XG5cbiAgcHJpdmF0ZSByZWR1Y2VEYXRhKFxuICAgIHRpbWVQZXJpb2RzOiBzdHJpbmdbXSxcbiAgICBnZXRGaXJzdERhdGVJblBlcmlvZDogKCkgPT4gc3RyaW5nXG4gICk6IGFueSB7XG4gICAgcmV0dXJuIHRpbWVQZXJpb2RzLnJlZHVjZSgocmVzdWx0OiBhbnksIHRpbWVQZXJpb2QsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBoYXNSZXN1bHQgPSByZXN1bHRbaW5kZXggLSAxXTtcblxuICAgICAgY29uc3QgcHJldkRhdGUgPSBoYXNSZXN1bHRcbiAgICAgICAgPyByZXN1bHRbaW5kZXggLSAxXS5jb21wYXJpc29uLm5leHREYXRlXG4gICAgICAgIDogZ2V0Rmlyc3REYXRlSW5QZXJpb2QoKTtcbiAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IGhhc1Jlc3VsdFxuICAgICAgICA/IHJlc3VsdFtpbmRleCAtIDFdLmNvbXBhcmlzb24ubmV4dFZhbHVlXG4gICAgICAgIDogdGhpcy5nZXRSYW5kb20oMTAwKTtcbiAgICAgIGNvbnN0IG5leHRWYWx1ZSA9IHRoaXMuZ2V0UmFuZG9tKDEwMCk7XG4gICAgICBjb25zdCBkZWx0YVZhbHVlID0gcHJldlZhbHVlIC0gbmV4dFZhbHVlO1xuXG4gICAgICBjb25zdCBpdGVtID0ge1xuICAgICAgICBkYXRlOiB0aW1lUGVyaW9kLFxuICAgICAgICB2YWx1ZTogdGhpcy5nZXRSYW5kb20oMTAwMCksXG4gICAgICAgIGRlbHRhOiB7XG4gICAgICAgICAgdXA6IGRlbHRhVmFsdWUgPD0gMCxcbiAgICAgICAgICB2YWx1ZTogTWF0aC5hYnMoZGVsdGFWYWx1ZSksXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBhcmlzb246IHtcbiAgICAgICAgICBwcmV2RGF0ZSxcbiAgICAgICAgICBwcmV2VmFsdWUsXG4gICAgICAgICAgbmV4dERhdGU6IHRpbWVQZXJpb2QsXG4gICAgICAgICAgbmV4dFZhbHVlLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFsuLi5yZXN1bHQsIGl0ZW1dO1xuICAgIH0sIFtdKTtcbiAgfVxuICAvLyBwcml2YXRlIHJlZHVjZURhdGEodGltZVBlcmlvZHM6IHN0cmluZ1tdLCBnZXRGaXJzdERhdGVJblBlcmlvZDogKCkgPT4gc3RyaW5nKTogVHJhZmZpY0xpc3RbXSB7XG4gIC8vICAgcmV0dXJuIHRpbWVQZXJpb2RzLnJlZHVjZSgocmVzdWx0LCB0aW1lUGVyaW9kLCBpbmRleCkgPT4ge1xuICAvLyAgICAgY29uc3QgaGFzUmVzdWx0ID0gcmVzdWx0W2luZGV4IC0gMV07XG5cbiAgLy8gICAgIGNvbnN0IHByZXZEYXRlID0gaGFzUmVzdWx0ID9cbiAgLy8gICAgICAgcmVzdWx0W2luZGV4IC0gMV0uY29tcGFyaXNvbi5uZXh0RGF0ZSA6XG4gIC8vICAgICAgIGdldEZpcnN0RGF0ZUluUGVyaW9kKCk7XG4gIC8vICAgICBjb25zdCBwcmV2VmFsdWUgPSBoYXNSZXN1bHQgP1xuICAvLyAgICAgICByZXN1bHRbaW5kZXggLSAxXS5jb21wYXJpc29uLm5leHRWYWx1ZSA6XG4gIC8vICAgICAgIHRoaXMuZ2V0UmFuZG9tKDEwMCk7XG4gIC8vICAgICBjb25zdCBuZXh0VmFsdWUgPSB0aGlzLmdldFJhbmRvbSgxMDApO1xuICAvLyAgICAgY29uc3QgZGVsdGFWYWx1ZSA9IHByZXZWYWx1ZSAtIG5leHRWYWx1ZTtcblxuICAvLyAgICAgY29uc3QgaXRlbSA9IHtcbiAgLy8gICAgICAgZGF0ZTogdGltZVBlcmlvZCxcbiAgLy8gICAgICAgdmFsdWU6IHRoaXMuZ2V0UmFuZG9tKDEwMDApLFxuICAvLyAgICAgICBkZWx0YToge1xuICAvLyAgICAgICAgIHVwOiBkZWx0YVZhbHVlIDw9IDAsXG4gIC8vICAgICAgICAgdmFsdWU6IE1hdGguYWJzKGRlbHRhVmFsdWUpLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgICBjb21wYXJpc29uOiB7XG4gIC8vICAgICAgICAgcHJldkRhdGUsXG4gIC8vICAgICAgICAgcHJldlZhbHVlLFxuICAvLyAgICAgICAgIG5leHREYXRlOiB0aW1lUGVyaW9kLFxuICAvLyAgICAgICAgIG5leHRWYWx1ZSxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH07XG5cbiAgLy8gICAgIHJldHVybiBbLi4ucmVzdWx0LCBpdGVtXTtcbiAgLy8gICB9LCBbXSk7XG4gIC8vIH1cblxuICBnZXRUcmFmZmljTGlzdERhdGEocGVyaW9kOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFRyYWZmaWNMaXN0PiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmRhdGFbcGVyaW9kXSk7XG4gIH1cbn1cbiJdfQ==