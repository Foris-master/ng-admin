import { Observable } from 'rxjs';
import { CountryOrderData } from '../data/country-order';
import * as i0 from "@angular/core";
export declare class CountryOrderService extends CountryOrderData {
    private countriesCategories;
    private countriesCategoriesLength;
    private generateRandomData;
    getCountriesCategories(): Observable<string[]>;
    getCountriesCategoriesData(country: string): Observable<number[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CountryOrderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CountryOrderService>;
}
