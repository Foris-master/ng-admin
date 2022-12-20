import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { StatsBarData } from '../data/stats-bar';
import * as i0 from "@angular/core";
export class StatsBarService extends StatsBarData {
    constructor() {
        super(...arguments);
        this.statsBarData = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getStatsBarData() {
        return observableOf(this.statsBarData);
    }
}
StatsBarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsBarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
StatsBarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsBarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: StatsBarService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMtYmFyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvbW9jay9zdGF0cy1iYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxFQUFFLElBQUksWUFBWSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFHakQsTUFBTSxPQUFPLGVBQWdCLFNBQVEsWUFBWTtJQURqRDs7UUFHVSxpQkFBWSxHQUFhO1lBQy9CLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztTQUNuQixDQUFDO0tBS0g7SUFIQyxlQUFlO1FBQ2IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7OzRHQVRVLGVBQWU7Z0hBQWYsZUFBZTsyRkFBZixlQUFlO2tCQUQzQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdGF0c0JhckRhdGEgfSBmcm9tICcuLi9kYXRhL3N0YXRzLWJhcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0c0JhclNlcnZpY2UgZXh0ZW5kcyBTdGF0c0JhckRhdGEge1xuXG4gIHByaXZhdGUgc3RhdHNCYXJEYXRhOiBudW1iZXJbXSA9IFtcbiAgICAzMDAsIDUyMCwgNDM1LCA1MzAsXG4gICAgNzMwLCA2MjAsIDY2MCwgODYwLFxuICBdO1xuXG4gIGdldFN0YXRzQmFyRGF0YSgpOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnN0YXRzQmFyRGF0YSk7XG4gIH1cbn1cbiJdfQ==