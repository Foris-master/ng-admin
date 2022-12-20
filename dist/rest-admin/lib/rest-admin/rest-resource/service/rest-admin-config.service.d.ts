import { RestResource } from "../models/rest-resource";
import { REST_CONFIG } from "../models/rest-resource.model";
import * as i0 from "@angular/core";
export declare class RestAdminConfigService {
    private restConfig;
    _restResources: RestResource[];
    components: any[];
    defaultLanguage: {
        text: string;
        value: string;
    }[];
    constructor(restConfig: REST_CONFIG);
    get restResources(): RestResource[];
    set restResources(v: RestResource[]);
    get siteName(): string;
    get restBaseUrl(): string;
    get restPathFileTranslate(): string;
    get restLanguage(): any[];
    getSpecificResource(nameResource: string): RestResource;
    generateMenus(): any[];
    generateRoutes(): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RestAdminConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestAdminConfigService>;
}
