import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { TemperatureHumidityData } from '../data/temperature-humidity';
import * as i0 from "@angular/core";
export class TemperatureHumidityService extends TemperatureHumidityData {
    constructor() {
        super(...arguments);
        this.temperatureDate = {
            value: 24,
            min: 12,
            max: 30,
        };
        this.humidityDate = {
            value: 87,
            min: 0,
            max: 100,
        };
    }
    getTemperatureData() {
        return observableOf(this.temperatureDate);
    }
    getHumidityData() {
        return observableOf(this.humidityDate);
    }
}
TemperatureHumidityService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TemperatureHumidityService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
TemperatureHumidityService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TemperatureHumidityService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: TemperatureHumidityService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGVyYXR1cmUtaHVtaWRpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AY29yZS9tb2NrL3RlbXBlcmF0dXJlLWh1bWlkaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsdUJBQXVCLEVBQWUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFHcEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHVCQUF1QjtJQUR2RTs7UUFHVSxvQkFBZSxHQUFnQjtZQUNyQyxLQUFLLEVBQUUsRUFBRTtZQUNULEdBQUcsRUFBRSxFQUFFO1lBQ1AsR0FBRyxFQUFFLEVBQUU7U0FDUixDQUFDO1FBRU0saUJBQVksR0FBZ0I7WUFDbEMsS0FBSyxFQUFFLEVBQUU7WUFDVCxHQUFHLEVBQUUsQ0FBQztZQUNOLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQztLQVNIO0lBUEMsa0JBQWtCO1FBQ2hCLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6QyxDQUFDOzt1SEFwQlUsMEJBQTBCOzJIQUExQiwwQkFBMEI7MkZBQTFCLDBCQUEwQjtrQkFEdEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRlbXBlcmF0dXJlSHVtaWRpdHlEYXRhLCBUZW1wZXJhdHVyZSB9IGZyb20gJy4uL2RhdGEvdGVtcGVyYXR1cmUtaHVtaWRpdHknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGVtcGVyYXR1cmVIdW1pZGl0eVNlcnZpY2UgZXh0ZW5kcyBUZW1wZXJhdHVyZUh1bWlkaXR5RGF0YSB7XG5cbiAgcHJpdmF0ZSB0ZW1wZXJhdHVyZURhdGU6IFRlbXBlcmF0dXJlID0ge1xuICAgIHZhbHVlOiAyNCxcbiAgICBtaW46IDEyLFxuICAgIG1heDogMzAsXG4gIH07XG5cbiAgcHJpdmF0ZSBodW1pZGl0eURhdGU6IFRlbXBlcmF0dXJlID0ge1xuICAgIHZhbHVlOiA4NyxcbiAgICBtaW46IDAsXG4gICAgbWF4OiAxMDAsXG4gIH07XG5cbiAgZ2V0VGVtcGVyYXR1cmVEYXRhKCk6IE9ic2VydmFibGU8VGVtcGVyYXR1cmU+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMudGVtcGVyYXR1cmVEYXRlKTtcbiAgfVxuXG4gIGdldEh1bWlkaXR5RGF0YSgpOiBPYnNlcnZhYmxlPFRlbXBlcmF0dXJlPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmh1bWlkaXR5RGF0ZSk7XG4gIH1cbn1cbiJdfQ==