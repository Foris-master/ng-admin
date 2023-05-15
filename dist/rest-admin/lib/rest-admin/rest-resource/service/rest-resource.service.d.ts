import { RestAdminConfigService } from "./rest-admin-config.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AddConfig, EditConfig, ListConfig } from "../models/rest-resource.model";
import * as i0 from "@angular/core";
export declare const FILTER_OPERATORS: {
    name: string;
    value: string;
}[];
export declare class RestResourceService {
    private http;
    private serviceRestConfig;
    constructor(http: HttpClient, serviceRestConfig: RestAdminConfigService);
    getResources: (config: {
        api: string;
        queryParams: any;
    }) => import("rxjs").Observable<Object>;
    getOneResource: (config: {
        api: string;
        queryParams: any;
    }, id: string) => import("rxjs").Observable<Object>;
    addResources: (addConfig: AddConfig, datas: any) => import("rxjs").Observable<Object>;
    editResources: (editConfig: EditConfig, hasFile: Boolean, datas: any, id: any) => import("rxjs").Observable<Object>;
    deleteResources: (listConfig: ListConfig, id: number | string) => import("rxjs").Observable<Object>;
    getCustomHeaders(headerElement: any): HttpHeaders;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestResourceService>;
}
