import { TranslateService } from "@ngx-translate/core";
import { RestAdminConfigService } from "./rest-admin-config.service";
import * as i0 from "@angular/core";
export declare class RestLangService {
    private translate;
    private restConfigService;
    selected: string;
    constructor(translate: TranslateService, restConfigService: RestAdminConfigService);
    setInitialAppLanguage(): void;
    setLanguage(lang: any): void;
    translateInstant: (word: any) => any;
    getLanguages(): any[];
    static ɵfac: i0.ɵɵFactoryDeclaration<RestLangService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RestLangService>;
}
