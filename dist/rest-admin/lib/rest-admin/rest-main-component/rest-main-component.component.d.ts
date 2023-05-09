import { Observable } from 'rxjs';
import { RestLangService } from './../rest-resource/service/rest-lang.service';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminConfigService } from '../rest-resource/service/rest-admin-config.service';
import * as i0 from "@angular/core";
export declare class RestMainComponentComponent implements OnInit {
    private activatedRoute;
    private serviceConfig;
    private restLangService;
    private router;
    searchText: string;
    menuItems: any[];
    title$: Observable<string>;
    constructor(activatedRoute: ActivatedRoute, serviceConfig: RestAdminConfigService, restLangService: RestLangService, router: Router);
    ngOnInit(): void;
    transformTitle(title: string): string;
    onChange(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestMainComponentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestMainComponentComponent, "ngx-rest-main-component", never, {}, {}, never, never>;
}
//# sourceMappingURL=rest-main-component.component.d.ts.map