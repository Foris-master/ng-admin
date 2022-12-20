import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { SolarData } from '../data/solar';
import * as i0 from "@angular/core";
export class SolarService extends SolarData {
    constructor() {
        super(...arguments);
        this.value = 42;
    }
    getSolarData() {
        return observableOf(this.value);
    }
}
SolarService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SolarService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
SolarService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SolarService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: SolarService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29sYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AY29yZS9tb2NrL3NvbGFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBZSxNQUFNLE1BQU0sQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUcxQyxNQUFNLE9BQU8sWUFBYSxTQUFRLFNBQVM7SUFEM0M7O1FBRVUsVUFBSyxHQUFHLEVBQUUsQ0FBQztLQUtwQjtJQUhDLFlBQVk7UUFDVixPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7eUdBTFUsWUFBWTs2R0FBWixZQUFZOzJGQUFaLFlBQVk7a0JBRHhCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsICBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTb2xhckRhdGEgfSBmcm9tICcuLi9kYXRhL3NvbGFyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNvbGFyU2VydmljZSBleHRlbmRzIFNvbGFyRGF0YSB7XG4gIHByaXZhdGUgdmFsdWUgPSA0MjtcblxuICBnZXRTb2xhckRhdGEoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMudmFsdWUpO1xuICB9XG59XG4iXX0=