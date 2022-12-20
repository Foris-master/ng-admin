import { Observable } from 'rxjs';
import { TemperatureHumidityData, Temperature } from '../data/temperature-humidity';
import * as i0 from "@angular/core";
export declare class TemperatureHumidityService extends TemperatureHumidityData {
    private temperatureDate;
    private humidityDate;
    getTemperatureData(): Observable<Temperature>;
    getHumidityData(): Observable<Temperature>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemperatureHumidityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TemperatureHumidityService>;
}
