import { SmartTableData } from '../data/smart-table';
import * as i0 from "@angular/core";
export declare class SmartTableService extends SmartTableData {
    data: ({
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        age: string;
    } | {
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        age: number;
    })[];
    getData(): ({
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        age: string;
    } | {
        id: number;
        firstName: string;
        lastName: string;
        username: string;
        email: string;
        age: number;
    })[];
    static ɵfac: i0.ɵɵFactoryDeclaration<SmartTableService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SmartTableService>;
}
