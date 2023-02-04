import { RestLangService } from './../rest-resource/service/rest-lang.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestAdminConfigService } from '../rest-resource/service/rest-admin-config.service';
import * as i0 from "@angular/core";
export declare class RestMainComponentComponent implements OnInit {
    private serviceConfig;
    private restLangService;
    private router;
    menu: any[];
    constructor(serviceConfig: RestAdminConfigService, restLangService: RestLangService, router: Router);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestMainComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestMainComponentComponent, "ngx-rest-main-component", never, {}, {}, never, never>;
}
