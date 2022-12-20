import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TrafficChartData } from '../data/traffic-chart';
import * as i0 from "@angular/core";
export class TrafficChartService extends TrafficChartData {
    constructor() {
        super(...arguments);
        this.data = [
            300, 520, 435, 530,
            730, 620, 660, 860,
        ];
    }
    getTrafficChartData() {
        return observableOf(this.data);
    }
}
TrafficChartService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficChartService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
TrafficChartService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficChartService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TrafficChartService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhZmZpYy1jaGFydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0Bjb3JlL21vY2svdHJhZmZpYy1jaGFydC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWUsTUFBTSxNQUFNLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR3pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFEekQ7O1FBR1UsU0FBSSxHQUFhO1lBQ3ZCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztTQUNuQixDQUFDO0tBS0g7SUFIQyxtQkFBbUI7UUFDakIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dIQVRVLG1CQUFtQjtvSEFBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFmZmljQ2hhcnREYXRhIH0gZnJvbSAnLi4vZGF0YS90cmFmZmljLWNoYXJ0JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYWZmaWNDaGFydFNlcnZpY2UgZXh0ZW5kcyBUcmFmZmljQ2hhcnREYXRhIHtcblxuICBwcml2YXRlIGRhdGE6IG51bWJlcltdID0gW1xuICAgIDMwMCwgNTIwLCA0MzUsIDUzMCxcbiAgICA3MzAsIDYyMCwgNjYwLCA4NjAsXG4gIF07XG5cbiAgZ2V0VHJhZmZpY0NoYXJ0RGF0YSgpOiBPYnNlcnZhYmxlPG51bWJlcltdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmRhdGEpO1xuICB9XG59XG4iXX0=