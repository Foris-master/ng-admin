import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestResource } from '../models/rest-resource';
import { REST_FIELD_TYPES } from '../models/rest-resource.model';
import { RestAdminConfigService } from '../service/rest-admin-config.service';
import { RestResourceService } from '../service/rest-resource.service';
import { NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { RestLangService } from '../service/rest-lang.service';
import * as i0 from "@angular/core";
export declare class RestResourceDetailComponent implements OnInit {
    private activatedRoute;
    private serviceRest;
    private serviceRestAdminConfig;
    private router;
    private dataSourceBuilder;
    private langService;
    resource: RestResource;
    ID: string;
    ressourceName: string;
    container: Boolean;
    style: any;
    datas: any[];
    datas1: any[][];
    entityId: number;
    objectKeys: {
        (o: object): string[];
        (o: {}): string[];
    };
    customColumn: string;
    allColumns: string[];
    listDataSource: any;
    isTabsMenu: boolean;
    tabsName: any[];
    filesUpload: {};
    constructor(activatedRoute: ActivatedRoute, serviceRest: RestResourceService, serviceRestAdminConfig: RestAdminConfigService, router: Router, dataSourceBuilder: NbTreeGridDataSourceBuilder<any>, langService: RestLangService);
    ngOnInit(): void;
    editEntity(): void;
    listEntity(): void;
    get REST_FIELD_TYPES(): typeof REST_FIELD_TYPES;
    onSelect(event: any): void;
    onRemove(field: any): void;
    loadBelongToDetail(data: any): void;
    isObject: (a: any) => boolean;
    isArray: (a: any) => boolean;
    getBelongToSecondField: (elt: any, response: any) => any;
    jsonValue: (val: any) => any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceDetailComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceDetailComponent, "ngx-rest-resource-detail", never, { "resource": "resource"; "ID": "ID"; "ressourceName": "ressourceName"; "container": "container"; "style": "style"; }, {}, never, never>;
}
