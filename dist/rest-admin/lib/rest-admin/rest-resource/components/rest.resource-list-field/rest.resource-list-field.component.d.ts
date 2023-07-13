import { OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { RestField, REST_FIELD_TYPES } from '../../models/rest-resource.model';
import { RestLangService } from '../../service/rest-lang.service';
import { NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class RestResourceListFieldComponent implements OnInit, ViewCell {
    private dataSourceBuilder;
    private langService;
    value: any;
    rowData: any;
    val: any;
    restField: RestField;
    class: string;
    style: string;
    customColumn: string;
    allColumns: string[];
    dataSource: NbTreeGridDataSource<any>;
    image: any;
    _jsonValue: any;
    constructor(dataSourceBuilder: NbTreeGridDataSourceBuilder<any>, langService: RestLangService);
    ngOnInit(): void;
    get REST_FIELD_TYPES(): typeof REST_FIELD_TYPES;
    get jsonValue(): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestResourceListFieldComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestResourceListFieldComponent, "ngx-rest-resource-list-field", never, { "value": "value"; "rowData": "rowData"; }, {}, never, never>;
}
//# sourceMappingURL=rest.resource-list-field.component.d.ts.map