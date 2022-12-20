import { Observable } from 'rxjs';
import { ProfitBarAnimationChartData } from '../data/profit-bar-animation-chart';
import * as i0 from "@angular/core";
export declare class ProfitBarAnimationChartService extends ProfitBarAnimationChartData {
    private data;
    constructor();
    getDataForFirstLine(): number[];
    getDataForSecondLine(): number[];
    createEmptyArray(nPoints: number): any[];
    getChartData(): Observable<{
        firstLine: number[];
        secondLine: number[];
    }>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProfitBarAnimationChartService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ProfitBarAnimationChartService>;
}
