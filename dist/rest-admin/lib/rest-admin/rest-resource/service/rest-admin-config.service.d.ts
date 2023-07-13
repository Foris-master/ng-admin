import { EXTERN_PAGES, PermissionConfig, REST_AUTH } from './../models/rest-resource.model';
import { RestResource } from '../models/rest-resource';
import { REST_CONFIG } from '../models/rest-resource.model';
import * as i0 from "@angular/core";
export declare class RestAdminConfigService {
    private restConfig;
    _restResources: RestResource[];
    _permissions: PermissionConfig[];
    _externPages: EXTERN_PAGES[];
    components: any[];
    _restAuthParams: REST_AUTH;
    defaultLanguage: {
        text: string;
        value: string;
    }[];
    constructor(restConfig: REST_CONFIG);
    get restResources(): RestResource[];
    set restResources(v: RestResource[]);
    get siteName(): string;
    get restBaseUrl(): string;
    get googleMapApiKey(): string;
    get restPathFileTranslate(): string;
    get restLanguage(): any[];
    getSpecificResource(nameResource: string): RestResource;
    generateMenus(): any[];
    generateRoutes(): any[];
    get restAuthParams(): REST_AUTH;
    checkValueRestAuth(params: REST_AUTH): REST_AUTH;
    checkIfRouteExist(route: string): boolean;
    get permission(): PermissionConfig[];
    get externPages(): EXTERN_PAGES[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RestAdminConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestAdminConfigService>;
}
//# sourceMappingURL=rest-admin-config.service.d.ts.map