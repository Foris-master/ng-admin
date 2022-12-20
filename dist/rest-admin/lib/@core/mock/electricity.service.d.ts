import { Observable } from 'rxjs';
import { Electricity, ElectricityChart, ElectricityData } from '../data/electricity';
import * as i0 from "@angular/core";
export declare class ElectricityService extends ElectricityData {
    private listData;
    private chartPoints;
    chartData: ElectricityChart[];
    constructor();
    getListData(): Observable<Electricity[]>;
    getChartData(): Observable<ElectricityChart[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ElectricityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ElectricityService>;
}
