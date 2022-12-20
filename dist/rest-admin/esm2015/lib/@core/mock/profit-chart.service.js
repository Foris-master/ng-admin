import { Injectable } from '@angular/core';
import { ProfitChartData } from '../data/profit-chart';
import * as i0 from "@angular/core";
import * as i1 from "./periods.service";
export class ProfitChartService extends ProfitChartData {
    constructor(period) {
        super();
        this.period = period;
        this.year = [
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
        ];
        this.data = {};
        this.data = {
            week: this.getDataForWeekPeriod(),
            month: this.getDataForMonthPeriod(),
            year: this.getDataForYearPeriod(),
        };
    }
    getDataForWeekPeriod() {
        const nPoint = this.period.getWeeks().length;
        return {
            chartLabel: this.period.getWeeks(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForMonthPeriod() {
        const nPoint = this.period.getMonths().length;
        return {
            chartLabel: this.period.getMonths(),
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getDataForYearPeriod() {
        const nPoint = this.year.length;
        return {
            chartLabel: this.year,
            data: [
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
                this.getRandomData(nPoint),
            ],
        };
    }
    getRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 500);
        });
    }
    getProfitChartData(period) {
        return this.data[period];
    }
}
ProfitChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitChartService, deps: [{ token: i1.PeriodsService }], target: i0.ɵɵFactoryTarget.Injectable });
ProfitChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ProfitChartService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.PeriodsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZml0LWNoYXJ0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvbW9jay9wcm9maXQtY2hhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBR3BFLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxlQUFlO0lBY3JELFlBQW9CLE1BQXNCO1FBQ3hDLEtBQUssRUFBRSxDQUFDO1FBRFUsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFabEMsU0FBSSxHQUFHO1lBQ2IsTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtZQUNOLE1BQU07WUFDTixNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUM7UUFFTSxTQUFJLEdBQVEsRUFBRyxDQUFDO1FBSXRCLElBQUksQ0FBQyxJQUFJLEdBQUc7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ2pDLEtBQUssRUFBRSxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDbkMsSUFBSSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtTQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVPLG9CQUFvQjtRQUMxQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQztRQUU3QyxPQUFPO1lBQ0wsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2xDLElBQUksRUFBRTtnQkFDSixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2FBQzNCO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMsT0FBTztZQUNMLFVBQVUsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUNuQyxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQzthQUMzQjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sb0JBQW9CO1FBQzFCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBRWhDLE9BQU87WUFDTCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDckIsSUFBSSxFQUFFO2dCQUNKLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUM7YUFDM0I7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLGFBQWEsQ0FBQyxPQUFlO1FBQ25DLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBYztRQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7K0dBdEVVLGtCQUFrQjttSEFBbEIsa0JBQWtCOzJGQUFsQixrQkFBa0I7a0JBRDlCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQZXJpb2RzU2VydmljZSB9IGZyb20gJy4vcGVyaW9kcy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2ZpdENoYXJ0LCBQcm9maXRDaGFydERhdGEgfSBmcm9tICcuLi9kYXRhL3Byb2ZpdC1jaGFydCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9maXRDaGFydFNlcnZpY2UgZXh0ZW5kcyBQcm9maXRDaGFydERhdGEge1xuXG4gIHByaXZhdGUgeWVhciA9IFtcbiAgICAnMjAxMicsXG4gICAgJzIwMTMnLFxuICAgICcyMDE0JyxcbiAgICAnMjAxNScsXG4gICAgJzIwMTYnLFxuICAgICcyMDE3JyxcbiAgICAnMjAxOCcsXG4gIF07XG5cbiAgcHJpdmF0ZSBkYXRhOiBhbnkgPSB7IH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwZXJpb2Q6IFBlcmlvZHNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmRhdGEgPSB7XG4gICAgICB3ZWVrOiB0aGlzLmdldERhdGFGb3JXZWVrUGVyaW9kKCksXG4gICAgICBtb250aDogdGhpcy5nZXREYXRhRm9yTW9udGhQZXJpb2QoKSxcbiAgICAgIHllYXI6IHRoaXMuZ2V0RGF0YUZvclllYXJQZXJpb2QoKSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREYXRhRm9yV2Vla1BlcmlvZCgpOiBQcm9maXRDaGFydCB7XG4gICAgY29uc3QgblBvaW50ID0gdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKS5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnRMYWJlbDogdGhpcy5wZXJpb2QuZ2V0V2Vla3MoKSxcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgdGhpcy5nZXRSYW5kb21EYXRhKG5Qb2ludCksXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0YUZvck1vbnRoUGVyaW9kKCk6IFByb2ZpdENoYXJ0IHtcbiAgICBjb25zdCBuUG9pbnQgPSB0aGlzLnBlcmlvZC5nZXRNb250aHMoKS5sZW5ndGg7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2hhcnRMYWJlbDogdGhpcy5wZXJpb2QuZ2V0TW9udGhzKCksXG4gICAgICBkYXRhOiBbXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcbiAgICAgICAgdGhpcy5nZXRSYW5kb21EYXRhKG5Qb2ludCksXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldERhdGFGb3JZZWFyUGVyaW9kKCk6IFByb2ZpdENoYXJ0IHtcbiAgICBjb25zdCBuUG9pbnQgPSB0aGlzLnllYXIubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXJ0TGFiZWw6IHRoaXMueWVhcixcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgdGhpcy5nZXRSYW5kb21EYXRhKG5Qb2ludCksXG4gICAgICAgIHRoaXMuZ2V0UmFuZG9tRGF0YShuUG9pbnQpLFxuICAgICAgICB0aGlzLmdldFJhbmRvbURhdGEoblBvaW50KSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmFuZG9tRGF0YShuUG9pbnRzOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oQXJyYXkoblBvaW50cykpLm1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2ZpdENoYXJ0RGF0YShwZXJpb2Q6IHN0cmluZyk6IFByb2ZpdENoYXJ0IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhW3BlcmlvZF07XG4gIH1cbn1cbiJdfQ==