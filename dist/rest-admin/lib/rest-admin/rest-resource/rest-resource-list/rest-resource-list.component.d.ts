import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { NbDialogService, NbMenuService } from '@nebular/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { RestAdminConfigService } from '../service/rest-admin-config.service';
import { RestResource } from '../models/rest-resource';
import { RestResourceService } from '../service/rest-resource.service';
import { RestExportService } from '../service/rest-export.service';
import { RestShareService } from '../service/rest-share.service';
import * as i0 from "@angular/core";
export declare class RestResourceListComponent implements OnInit {
    private serviceRestConfig;
    private serviceRestResources;
    private http;
    private dialogService;
    private activatedRoute;
    private router;
    private nbMenuService;
    private exportService;
    restShare: RestShareService;
    resource: RestResource;
    search: any;
    alphabelt: string[];
    data: any;
    settings: any;
    source: ServerDataSource;
    currentPerPage: number;
    isFetching: boolean;
    ressourceName: string;
    filterBy: string;
    filterOperator: {
        name: string;
        value: string;
    }[];
    exportAsConfig: {
        type: string;
        elementId: string;
    };
    searchItems: any[];
    searchItem: string;
    items: {
        title: string;
    }[];
    perPagesOptions: {
        title: string;
        value: number;
    }[];
    constructor(serviceRestConfig: RestAdminConfigService, serviceRestResources: RestResourceService, http: HttpClient, dialogService: NbDialogService, activatedRoute: ActivatedRoute, router: Router, nbMenuService: NbMenuService, exportService: RestExportService, restShare: RestShareService);
    ngOnInit(): void;
    onDeleteConfirm(event: any): void;
    addNewEntity(): void;
    detailEntity(event: any): void;
    private createMatTableColumns;
    getList(page?: any, perPage?: any): void;
    onCreateConfirm(event: any): void;
    onCustom(event: any): void;
    getFullData(): import("rxjs").Observable<Object>;
    exportToExcel(): void;
    exportToPdf(): void;
    exportToCsv(): void;
    exportAll(): void;
    setPager(setPager: any): void;
    selectFilterBy(value: any, index: any): void;
    selectOperator(value: any, index: any): void;
    onFilter(val: any, index: any): void;
    addFieldSearch(): void;
    removeFieldSearch(index: any): void;
    startSearch(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceListComponent, "ngx-rest-resource-list", never, { "resource": "resource"; }, {}, never, never>;
}
