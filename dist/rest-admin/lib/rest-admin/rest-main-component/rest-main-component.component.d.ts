import { Observable } from 'rxjs';
import { RestLangService } from './../rest-resource/service/rest-lang.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminConfigService } from '../rest-resource/service/rest-admin-config.service';
import { RestResourceService } from '../rest-resource/service/rest-resource.service';
import * as i0 from "@angular/core";
export declare class RestMainComponentComponent implements OnInit {
    private activatedRoute;
    private serviceConfig;
    private restLangService;
    private router;
    private serviceRest;
    searchText: string;
    menuItems: any[];
    title$: Observable<string>;
    pageLoad: boolean;
    isPending: boolean;
    constructor(activatedRoute: ActivatedRoute, serviceConfig: RestAdminConfigService, restLangService: RestLangService, router: Router, serviceRest: RestResourceService);
    ngOnInit(): void;
    transformTitle(title: string): string;
    onChange(event: any): void;
    login(): void;
    tcheckPermissions(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestMainComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestMainComponentComponent, "ngx-rest-main-component", never, {}, {}, never, never>;
}
