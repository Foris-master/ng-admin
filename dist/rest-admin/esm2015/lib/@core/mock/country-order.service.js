import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import * as i0 from "@angular/core";
export class CountryOrderService extends CountryOrderData {
    constructor() {
        super(...arguments);
        this.countriesCategories = [
            'Sofas',
            'Furniture',
            'Lighting',
            'Tables',
            'Textiles',
        ];
        this.countriesCategoriesLength = this.countriesCategories.length;
    }
    generateRandomData(nPoints) {
        return Array.from(Array(nPoints)).map(() => {
            return Math.round(Math.random() * 20);
        });
    }
    getCountriesCategories() {
        return observableOf(this.countriesCategories);
    }
    getCountriesCategoriesData(country) {
        return observableOf(this.generateRandomData(this.countriesCategoriesLength));
    }
}
CountryOrderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CountryOrderService, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
CountryOrderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CountryOrderService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CountryOrderService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRyeS1vcmRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0Bjb3JlL21vY2svY291bnRyeS1vcmRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBR3pELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFEekQ7O1FBR1Usd0JBQW1CLEdBQUc7WUFDNUIsT0FBTztZQUNQLFdBQVc7WUFDWCxVQUFVO1lBQ1YsUUFBUTtZQUNSLFVBQVU7U0FDWCxDQUFDO1FBQ00sOEJBQXlCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztLQWNyRTtJQWJTLGtCQUFrQixDQUFDLE9BQWU7UUFDeEMsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELDBCQUEwQixDQUFDLE9BQWU7UUFDeEMsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDL0UsQ0FBQzs7Z0hBdEJVLG1CQUFtQjtvSEFBbkIsbUJBQW1COzJGQUFuQixtQkFBbUI7a0JBRC9CLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiBhcyBvYnNlcnZhYmxlT2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvdW50cnlPcmRlckRhdGEgfSBmcm9tICcuLi9kYXRhL2NvdW50cnktb3JkZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ291bnRyeU9yZGVyU2VydmljZSBleHRlbmRzIENvdW50cnlPcmRlckRhdGEge1xuXG4gIHByaXZhdGUgY291bnRyaWVzQ2F0ZWdvcmllcyA9IFtcbiAgICAnU29mYXMnLFxuICAgICdGdXJuaXR1cmUnLFxuICAgICdMaWdodGluZycsXG4gICAgJ1RhYmxlcycsXG4gICAgJ1RleHRpbGVzJyxcbiAgXTtcbiAgcHJpdmF0ZSBjb3VudHJpZXNDYXRlZ29yaWVzTGVuZ3RoID0gdGhpcy5jb3VudHJpZXNDYXRlZ29yaWVzLmxlbmd0aDtcbiAgcHJpdmF0ZSBnZW5lcmF0ZVJhbmRvbURhdGEoblBvaW50czogbnVtYmVyKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBBcnJheS5mcm9tKEFycmF5KG5Qb2ludHMpKS5tYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldENvdW50cmllc0NhdGVnb3JpZXMoKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5jb3VudHJpZXNDYXRlZ29yaWVzKTtcbiAgfVxuXG4gIGdldENvdW50cmllc0NhdGVnb3JpZXNEYXRhKGNvdW50cnk6IHN0cmluZyk6IE9ic2VydmFibGU8bnVtYmVyW10+IHtcbiAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKHRoaXMuZ2VuZXJhdGVSYW5kb21EYXRhKHRoaXMuY291bnRyaWVzQ2F0ZWdvcmllc0xlbmd0aCkpO1xuICB9XG59XG4iXX0=