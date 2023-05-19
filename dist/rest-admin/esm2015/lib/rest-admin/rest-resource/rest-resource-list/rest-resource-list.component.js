import { FILTER_OPERATORS } from './../service/rest-resource.service';
import { Component, Input, ViewChild } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { REST_FIELD_TYPES, PERMISSION, } from '../models/rest-resource.model';
import * as _ from 'lodash';
import { RestResourceEditorFieldsComponent } from '../components/rest-resource-editor-fields/rest-resource-editor-fields.component';
import { RestResourceListFieldComponent } from '../components/rest.resource-list-field/rest.resource-list-field.component';
import { RestResourceDeleteComponent } from '../rest-ressource-delete/rest-resource-delete.component';
import { filter, map } from 'rxjs/operators';
import { ALPHABET } from '../service/rest-export.service';
import { of } from 'rxjs';
import { SelectAllCheckboxRenderComponent } from '../components/fs-icon-ccomponent/select.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../service/rest-admin-config.service";
import * as i3 from "../service/rest-resource.service";
import * as i4 from "@angular/common/http";
import * as i5 from "@nebular/theme";
import * as i6 from "@angular/router";
import * as i7 from "../service/rest-export.service";
import * as i8 from "../service/rest-share.service";
import * as i9 from "ngx-permissions";
import * as i10 from "ng2-smart-table";
import * as i11 from "@angular/common";
import * as i12 from "@ngx-translate/core";
export class RestResourceListComponent {
    constructor(fb, serviceRestConfig, serviceRestResources, http, dialogService, activatedRoute, router, nbMenuService, exportService, restShare, permissionsService, serviceRest) {
        var _a, _b, _c, _d, _e;
        this.fb = fb;
        this.serviceRestConfig = serviceRestConfig;
        this.serviceRestResources = serviceRestResources;
        this.http = http;
        this.dialogService = dialogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.restShare = restShare;
        this.permissionsService = permissionsService;
        this.serviceRest = serviceRest;
        this.alphabelt = ALPHABET;
        this.isFetching = true;
        this.ressourceName = '';
        this.filterBy = '';
        this.filterOperator = FILTER_OPERATORS;
        this.exportAsConfig = {
            type: 'png',
            elementId: 'myTableElementId', // the id of html/table element
        };
        this.searchItems = [];
        this.searchItem = '';
        this.showCheckbox = false;
        this.showDetails = false;
        this.options = {};
        this.allFilterContains = {};
        this.belongToValue = {};
        this.belongToMany = {};
        this.isChecked = {};
        this.selectedRows = [];
        this.items = [
            { title: 'All formats' },
            { title: 'CSV' },
            { title: 'EXCEL' },
            { title: 'PDF' },
        ];
        this.perPagesOptions = [
            { title: '5', value: 5 },
            { title: '10', value: 10 },
            { title: '20', value: 20 },
            { title: '50', value: 50 },
            { title: '100', value: 100 },
        ];
        this.permissions = [PERMISSION.CREATE, PERMISSION.READ, PERMISSION.DELETE];
        this.custom = false;
        this.ressourceName =
            this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split('-')[0];
        this.resource = this.serviceRestConfig.getSpecificResource(this.ressourceName);
        // this.belongToMany['id'] = new Set();
        if ((_b = (_a = this.resource.listConfig) === null || _a === void 0 ? void 0 : _a.searchFilter) === null || _b === void 0 ? void 0 : _b.filterBy) {
            this.controls = (_e = (_d = (_c = this.resource.listConfig) === null || _c === void 0 ? void 0 : _c.searchFilter) === null || _d === void 0 ? void 0 : _d.filterBy) === null || _e === void 0 ? void 0 : _e.reduce((cumul, elt) => {
                switch (elt.type) {
                    case REST_FIELD_TYPES.BELONG_TO_MANY:
                        this.belongToMany[elt.value] = new Set();
                        return Object.assign(Object.assign({}, cumul), { [elt.name]: [] });
                    default:
                        return Object.assign(Object.assign({}, cumul), { [elt.name]: [''] });
                }
            }, {});
        }
        this.form = this.fb.group(this.controls);
        this.belongToMany['id'] = new Set();
    }
    get PERMISSION() {
        return PERMISSION;
    }
    ngOnInit() {
        if (this.resource.listConfig.searchFilter) {
            this.searchItems.push({
                field: '',
                operator: '',
                terms: '',
            });
        }
        this.currentPerPage = this.resource.listConfig.perPage;
        this.getList();
        this.source.onChanged().subscribe((e) => {
            setTimeout(() => {
                this.restShare.setLoader(false);
            });
        });
        this.isChecked = {
            title: 'check',
            type: 'custom',
            filter: false,
            addable: true,
            valuePrepareFunction: (cell, row) => ({
                handleCheckboxClick: (event, rowData) => this.onCheckboxClick(event, rowData),
                selected: this.selectedRows.find((elt) => (elt === null || elt === void 0 ? void 0 : elt.id) == (row === null || row === void 0 ? void 0 : row.id)) !== undefined,
                cell,
                row,
            }),
            editor: {
                type: 'checkbox',
            },
            renderComponent: SelectAllCheckboxRenderComponent,
            editable: true,
        };
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case 'EXCEL':
                    this.exportToExcel();
                    break;
                case 'PDF':
                    this.exportToPdf();
                    break;
                case 'CSV':
                    this.exportToCsv();
                    break;
                default:
                    this.exportAll();
                    break;
            }
        });
        if (this.resource.permissions.length > 0) {
            const custom = [];
            this.resource.permissions.forEach((permission) => {
                this.serviceRest
                    .getResources({
                    api: permission.fieldKey.api.substring(1),
                    queryParams: permission.fieldKey.queryParams
                        ? permission.fieldKey.queryParams
                        : {},
                })
                    .subscribe((resp) => {
                    const val = {};
                    permission.fieldKey.fieldForNextQuery.forEach((item) => {
                        val[item] = _.get(resp, item);
                        if (val[item]) {
                            this.permissionsService.addPermission(permission.type);
                            if (permission.type === PERMISSION.READ) {
                                custom.push({
                                    name: 'detail',
                                    title: "<i class='nb-compose'></i>",
                                });
                            }
                            if (permission.type === PERMISSION.DELETE) {
                                custom.push({
                                    name: 'delete',
                                    title: "<i class='nb-trash text-danger'></i>",
                                });
                            }
                        }
                        this.custom = true;
                        this.settings = {
                            hideSubHeader: this.resource.listConfig.hideAddSubHeader,
                            actions: {
                                position: 'right',
                                custom: custom,
                                edit: false,
                                delete: false,
                            },
                            pager: {
                                perPage: this.resource.listConfig.perPage,
                            },
                            columns: this.createMatTableColumns(),
                            add: {
                                addButtonContent: '<i class="nb-plus" ></i>',
                                createButtonContent: '<i class="nb-checkmark"></i>',
                                cancelButtonContent: '<i class="nb-close"></i>',
                                confirmCreate: true,
                            },
                        };
                    });
                });
            });
        }
        else {
            this.settings = {
                hideSubHeader: this.resource.listConfig.hideAddSubHeader,
                actions: {
                    position: 'right',
                    custom: [
                        {
                            name: 'detail',
                            title: "<i class='nb-compose'></i>",
                        },
                        {
                            name: 'delete',
                            title: "<i class='nb-trash text-danger'></i>",
                        },
                    ],
                    edit: false,
                    delete: false,
                },
                pager: {
                    perPage: this.resource.listConfig.perPage,
                },
                columns: this.createMatTableColumns(),
                add: {
                    addButtonContent: '<i class="nb-plus" ></i>',
                    createButtonContent: '<i class="nb-checkmark"></i>',
                    cancelButtonContent: '<i class="nb-close"></i>',
                    confirmCreate: true,
                },
            };
        }
    }
    toggleShowCheckbox() {
        this.showCheckbox = !this.showCheckbox;
        this.source.refresh();
    }
    onDeleteConfirm(event) {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: event.data,
                title: 'SUPPRESSION',
                multiSuppress: false,
                listConfig: this.resource.listConfig,
                resourceName: this.ressourceName,
            },
        });
        dialog.onClose.subscribe((resp) => {
            if (resp) {
                this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
            }
        });
    }
    onDeleteAllConfirm() {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: this.selectedRows,
                multiSuppress: true,
                title: 'TOUT SUPPRIMER',
                listConfig: this.resource.listConfig,
                resourceName: this.ressourceName,
            },
        });
        dialog.onClose.subscribe((resp) => {
            if (resp) {
                this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
            }
        });
    }
    addNewEntity() {
        this.router.navigateByUrl(`/admin/${this.ressourceName}-add`);
    }
    detailEntity(event) {
        if (this.resource.permissions.length > 0) {
            if (this.permissionsService.hasPermission(PERMISSION.READ)) {
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    event.data.id,
                ]);
            }
        }
        else {
            this.router.navigate([
                `/admin/${this.ressourceName}-detail`,
                event.data.id,
            ]);
        }
    }
    onCheckboxClick(event, row) {
        if (this.selectedRows.indexOf(row) === -1) {
            this.selectedRows.push(row);
        }
        else {
            this.selectedRows.splice(this.selectedRows.indexOf(row), 1);
        }
    }
    selectAllRows() {
        this.source.getAll().then((rows) => {
            var _a;
            if (((_a = this.selectedRows) === null || _a === void 0 ? void 0 : _a.length) !== (rows === null || rows === void 0 ? void 0 : rows.length)) {
                this.selectedRows = [];
                rows.forEach((row) => {
                    this.selectedRows.push(row);
                });
            }
            else {
                this.selectedRows = [];
            }
            this.source.refresh();
        });
    }
    createMatTableColumns() {
        const colunms = {};
        if (!this.showCheckbox) {
            colunms['isChecked'] = this.isChecked;
        }
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
                type: 'custom',
                filter: false,
                addable: true,
                valuePrepareFunction: (cell, row) => ({
                    restField: elt,
                    cell,
                    row,
                }),
                editor: {
                    type: 'custom',
                    component: RestResourceEditorFieldsComponent,
                },
                renderComponent: RestResourceListFieldComponent,
            };
        });
        return colunms;
    }
    getList(page = null, perPage = null) {
        this.restShare.setLoader(true);
        if (page) {
            this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { page });
        }
        if (perPage) {
            this.resource.queryParams = Object.assign(Object.assign({}, this.resource.queryParams), { per_page: perPage });
        }
        this.source = new ServerDataSource(this.http, {
            endPoint: this.serviceRestConfig.restBaseUrl +
                '/' +
                this.resource.listConfig.api +
                '?' +
                Object.keys(this.resource.listConfig.queryParams)
                    .reduce((cumul, item) => cumul +
                    item +
                    '=' +
                    this.resource.listConfig.queryParams[item] +
                    '&', '')
                    .slice(0, -1),
            dataKey: 'data',
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            filterFieldKey: `#_include#`,
        });
    }
    onCreateConfirm(event) {
        const datas = event.newData;
        const saveBelongTomany = [];
        this.resource.fields.forEach((elt) => {
            if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
                saveBelongTomany.push({
                    resources: datas[elt.name],
                    pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                });
                delete datas[elt.name];
            }
        });
        this.serviceRestResources
            .addResources(this.resource.addConfig, Object.assign(Object.assign({}, datas), { user_id: 1 }))
            .subscribe((response) => {
            if (saveBelongTomany.length > 0) {
                saveBelongTomany.forEach((element, index) => {
                    const restResource = this.serviceRestConfig.getSpecificResource(element.pivot);
                    const proms = [];
                    for (let index = 0; index < element.resources.length; index++) {
                        const item = element.resources[index];
                        const data = {
                            [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                            [item['saveResourceIdName']]: response.id,
                        };
                        proms.push(this.serviceRestResources
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
                    });
                });
            }
            else
                this.getList(this.source.getPaging().page, this.source.getPaging().perPage);
        });
    }
    onCustom(event) {
        switch (event.action) {
            case 'delete':
                this.onDeleteConfirm(event);
                break;
            case 'detail':
                this.detailEntity(event);
                break;
        }
    }
    getFullData() {
        return this.serviceRestResources.getResources({
            api: this.resource.listConfig.api,
            queryParams: {
                should_paginate: false,
            },
        });
    }
    exportToExcel() {
        const colunms = {};
        const sheetHeader = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            colunms[elt.name] = {
                title: elt.label,
            };
        });
        Object.entries(colunms).forEach(([key, value], index) => {
            sheetHeader[this.alphabelt[index]] = key;
        });
        const keys = Object.keys(sheetHeader);
        const edata = [];
        const udt = {
            data: [
                { A: 'Rest Excel export' },
                sheetHeader, // table header
            ],
            skipHeader: true,
        };
        let elt = {};
        this.getFullData().subscribe((response) => {
            response.forEach((element, indice) => {
                elt = {};
                Object.entries(colunms).forEach(([key, value], index) => {
                    elt[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
                });
                udt.data.push(elt);
            });
            edata.push(udt);
            this.exportService.exportToExcel(edata, 'rest_file_excel');
        });
    }
    exportToPdf() {
        const colunms = {};
        const customData = [];
        const header = [];
        let elt = [];
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            header.push(elt.label);
        });
        this.getFullData().subscribe((response) => {
            response.forEach((element) => {
                elt = [];
                header.forEach((row) => {
                    elt.push(element[row]);
                });
                customData.push(elt);
            });
            const fileTitle = this.resource.name;
            this.exportService.exportToPdf(header, customData, 'rest_file_pdf', fileTitle);
        });
    }
    exportToCsv() {
        const colunms = {};
        const customData = [];
        const header = [];
        let elt = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            header.push(elt.label);
        });
        this.getFullData().subscribe((response) => {
            response.forEach((element) => {
                elt = {};
                header.forEach((row) => {
                    elt[row] = element[row];
                });
                customData.push(elt);
            });
            this.exportService.exportToCsv(header, customData, 'rest_file_csv');
        });
    }
    exportAll() {
        const colunms = {};
        const pdfAndCsvHeader = [];
        const sheetHeader = {};
        const csvData = [];
        const pdfData = [];
        let eltPDF = [];
        let eltCSV = {};
        let eltEXCEL = {};
        this.resource.fields
            .filter((item) => this.resource.listConfig.columns.includes(item.name))
            .forEach((elt) => {
            pdfAndCsvHeader.push(elt.label);
            colunms[elt.name] = {
                title: elt.label,
            };
        });
        Object.entries(colunms).forEach(([key, value], index) => {
            sheetHeader[this.alphabelt[index]] = key;
        });
        const excelData = {
            data: [{ A: 'Rest Excel export' }, sheetHeader],
            skipHeader: true,
        };
        const keys = Object.keys(sheetHeader);
        const edata = [];
        this.getFullData().subscribe((response) => {
            response.forEach((element) => {
                //CSV
                eltCSV = {};
                pdfAndCsvHeader.forEach((row) => {
                    eltCSV[row] = element[row];
                });
                csvData.push(eltCSV);
                //PDF
                eltPDF = [];
                pdfAndCsvHeader.forEach((row) => {
                    eltPDF.push(element[row]);
                });
                pdfData.push(eltPDF);
                //EXCEL
                eltEXCEL = {};
                Object.entries(colunms).forEach(([key, value], index) => {
                    eltEXCEL[this.alphabelt[index]] = element[sheetHeader[keys[index]]];
                });
                excelData.data.push(eltEXCEL);
                edata.push(excelData);
            });
            this.exportService.generateZip(pdfAndCsvHeader, pdfData, csvData, edata);
        });
    }
    //Filter
    setPager(setPager) {
        this.source.setPaging(1, setPager, true);
        this.settings = Object.assign({}, this.settings);
    }
    selectFilterBy(data, index) {
        var _a;
        this.searchItems[index].field = data['value'];
        this.searchItems[index].fieldName = data['resourceFieldName'];
        this.searchItems[index].resource = data['resource'];
        this.searchItems[index].ressourceFilterName = data['ressourceFilterName'];
        if (data['value'] === 'id') {
            const resource = (_a = data === null || data === void 0 ? void 0 : data.resource) === null || _a === void 0 ? void 0 : _a.addConfig;
            this.serviceRestResources
                .getResources({
                api: resource.api,
                queryParams: {
                    should_paginate: false,
                },
            })
                .subscribe((response) => {
                this.options[data['value']] = [...response].sort((x, y) => {
                    var _a;
                    return (_a = x['id']
                        .toString()
                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y['id'].toString().toLowerCase());
                });
                this.allFilterContains[data['value']] = of(this.options[data['value']]);
            });
        }
    }
    selectOperator(value, index) {
        this.searchItems[index].operator = value;
    }
    onFilter(val, index) {
        if (index != undefined && index != null) {
            this.searchItems[index].terms = val === null || val === void 0 ? void 0 : val.value;
        }
        else {
            this.searchItem = val === null || val === void 0 ? void 0 : val.value;
        }
    }
    addFieldSearch() {
        this.searchItems.push({ field: '', operator: '', terms: '' });
    }
    removeFieldSearch(index) {
        this.searchItems.splice(index, 1);
    }
    filterMany(value, index, options = 'belongToManyOptions') {
        var _a;
        if (typeof value == 'string' && ((_a = this.options['id']) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return this.options['id'].filter((optionValue) => {
                return [
                    this.searchItems[index].fieldName
                        ? this.searchItems[index].fieldName
                        : 'id',
                ].some((elt) => {
                    var _a;
                    return `${(_a = optionValue[elt]) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`.includes(`${value.toLowerCase()}`);
                });
            });
        }
    }
    getFilteredOptions(value, index) {
        return of(value).pipe(map((filterString) => this.filterMany(filterString, index)));
    }
    filterInput(event, index) {
        this.allFilterContains['id'] = this.getFilteredOptions(event.target.value, index);
    }
    onTagRemoveBelong(tagToRemove) {
        const cellData = Array.from(this.belongToMany['id']);
        const save = [];
        cellData.forEach((elt) => {
            if (elt['name'] != tagToRemove.text)
                save.push(elt);
        });
        this.belongToMany['id'] = new Set(save);
        this.form.patchValue({
            ['id']: save,
        });
    }
    //belongToManyOptions
    onChoose(event, index) {
        const cellData = Array.from(this.belongToMany['id']);
        if (event.id) {
            const search = cellData.find((elt) => elt.id == event.id);
            if (search == undefined) {
                const newElt = {
                    id: event.id,
                    saveRelatedIdName: event.id,
                    saveResourceIdName: event.id,
                    name: event[this.searchItems[index].fieldName
                        ? this.searchItems[index].fieldName
                        : 'id'],
                };
                this.belongToMany['id'].add(newElt);
                this.form.patchValue({
                    ['id']: Array.from(this.belongToMany['id'].values()),
                });
            }
        }
        this.inputBelongToMany.nativeElement.value = '';
    }
    startSearch() {
        const params = {};
        let search = '';
        this.searchItems.forEach((element, ind) => {
            if ((element === null || element === void 0 ? void 0 : element.field) === 'id') {
                let tab = [];
                for (const item of this.belongToMany['id']) {
                    if (item) {
                        tab.push(item);
                    }
                }
                if (tab.length > 0) {
                    let listId = tab.map((elt) => elt === null || elt === void 0 ? void 0 : elt.id).join(',');
                    params[`${element === null || element === void 0 ? void 0 : element.ressourceFilterName}-in`] = `${listId}`;
                }
            }
            else {
                if ((element === null || element === void 0 ? void 0 : element.field) != '' && (element === null || element === void 0 ? void 0 : element.terms) != '') {
                    if ((element === null || element === void 0 ? void 0 : element.operator) != '=') {
                        params[(element === null || element === void 0 ? void 0 : element.field) + '-' + (element === null || element === void 0 ? void 0 : element.operator)] = `${element === null || element === void 0 ? void 0 : element.terms}`;
                    }
                    else {
                        params[element === null || element === void 0 ? void 0 : element.field] = `${element === null || element === void 0 ? void 0 : element.terms}`;
                    }
                }
            }
        });
        search = Object.keys(this.resource.listConfig.queryParams)
            .reduce((cumul, item) => cumul + item + '=' + this.resource.listConfig.queryParams[item] + '&', '')
            .slice(0, -1);
        if (search != '') {
            search += '&';
        }
        search += Object.keys(params)
            .reduce((cumul, item) => cumul + item + '=' + params[item] + '&', '')
            .slice(0, -1);
        this.source = new ServerDataSource(this.http, {
            endPoint: this.serviceRestConfig.restBaseUrl +
                '/' +
                this.resource.listConfig.api +
                '?' +
                search,
            dataKey: 'data',
            pagerPageKey: 'page',
            pagerLimitKey: 'per_page',
            totalKey: 'total',
            filterFieldKey: `#_include#`,
        });
    }
}
RestResourceListComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceListComponent, deps: [{ token: i1.FormBuilder }, { token: i2.RestAdminConfigService }, { token: i3.RestResourceService }, { token: i4.HttpClient }, { token: i5.NbDialogService }, { token: i6.ActivatedRoute }, { token: i6.Router }, { token: i5.NbMenuService }, { token: i7.RestExportService }, { token: i8.RestShareService }, { token: i9.NgxPermissionsService }, { token: i3.RestResourceService }], target: i0.ɵɵFactoryTarget.Component });
RestResourceListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListComponent, selector: "ngx-rest-resource-list", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "search", first: true, predicate: ["search"], descendants: true }, { propertyName: "inputBelongToMany", first: true, predicate: ["autoBelongToMany"], descendants: true }], ngImport: i0, template: "<nb-card status=\"primary\">\n  <nb-card-header>\n    <div class=\"row d-flex justify-content-between\">\n      <div class=\"d-flex align-items-center\">\n        <h6 class=\"text-white\">\n          {{ this.resource.listConfig.title }}\n        </h6>\n      </div>\n\n      <div class=\"\" *ngIf=\"showCheckbox\">\n        <button nbButton ghost status=\"control\" (click)=\"selectAllRows()\">\n          <input\n            class=\"mr-2\"\n            type=\"checkbox\"\n            [checked]=\"this.selectedRows?.length == this.source.count()\"\n          />{{ 'rest-detail.select' | translate }}\n        </button>\n      </div>\n\n      <div class=\"\" style=\"height: 40px\">\n        <button\n          nbButton\n          ghost\n          nbTooltip=\"{{ 'rest-detail.select' | translate }}\"\n          nbTooltipPlacement=\"top\"\n          (click)=\"toggleShowCheckbox()\"\n        >\n          <input type=\"checkbox\" [(ngModel)]=\"showCheckbox\" />\n        </button>\n\n        <button\n          nbButton\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n          ghost\n          nbTooltip=\"{{ 'rest-list.exportData' | translate }}\"\n          nbTooltipPlacement=\"top\"\n          status=\"control\"\n        >\n          <nb-icon icon=\"download-outline\"></nb-icon>\n        </button>\n\n        <ng-container *ngIf=\"resource.permissions.length === 0\">\n          <button\n            nbButton\n            ghost\n            status=\"control\"\n            nbTooltip=\"{{ 'rest-list.add' | translate }}\"\n            nbTooltipPlacement=\"top\"\n            (click)=\"addNewEntity()\"\n          >\n            <span>{{ \"add\" | translate }}</span>\n            <nb-icon icon=\"plus-circle\"></nb-icon>\n          </button>\n\n          <button\n            nbButton\n            *ngIf=\"this.selectedRows?.length > 0\"\n            ghost\n            nbTooltip=\"{{ 'rest-list.deleteAllSelect' | translate }}\"\n            nbTooltipPlacement=\"top\"\n            status=\"control\"\n            (click)=\"onDeleteAllConfirm()\"\n          >\n            <nb-icon\n              icon=\"trash\"\n              color=\"danger\"\n              style=\"color: rgb(238, 130, 157)\"\n            ></nb-icon>\n          </button>\n        </ng-container>\n\n        <ng-container *ngIf=\"resource.permissions.length > 0\">\n          <ng-container *ngxPermissionsOnly=\"permissions\">\n            <ng-container *ngxPermissionsOnly=\"PERMISSION.CREATE\">\n              <button nbButton ghost status=\"control\" (click)=\"addNewEntity()\">\n                <span>{{ \"add\" | translate }}</span>\n                <nb-icon icon=\"plus-circle\"></nb-icon>\n              </button>\n            </ng-container>\n\n            <ng-container *ngxPermissionsOnly=\"PERMISSION.DELETE\">\n              <button\n                nbButton\n                *ngIf=\"this.selectedRows?.length > 0\"\n                ghost\n                status=\"control\"\n                (click)=\"onDeleteAllConfirm()\"\n              >\n                <nb-icon\n                  icon=\"trash\"\n                  color=\"danger\"\n                  style=\"color: rgb(238, 130, 157)\"\n                ></nb-icon>\n              </button>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n\n        <!-- <button\n          nbButton\n          status=\"primary\"\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n        >\n          {{ \"rest-list.export\" | translate }}\n        </button> -->\n      </div>\n    </div>\n  </nb-card-header>\n\n  <nb-card-body\n    [nbSpinner]=\"this.restShare.listLoader\"\n    nbSpinnerSize=\"large\"\n    nbSpinnerStatus=\"primary\"\n  >\n    <!-- Rest-search implement -->\n    <div class=\"row mb-5\" *ngIf=\"this.resource.listConfig.searchFilter\">\n      <ng-container\n        *ngIf=\"this.resource.listConfig.searchFilter.filterBy.length > 0\"\n      >\n        <ng-container *ngFor=\"let search of searchItems; let index = index\">\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <!-- Select with filter by -->\n            <nb-select\n              [placeholder]=\"'rest-list.filterPlaceholder' | translate\"\n              fullWidth\n              (selectedChange)=\"selectFilterBy($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"\n                  let filter of this.resource.listConfig.searchFilter.filterBy\n                \"\n                [value]=\"filter\"\n                >{{ filter[\"name\"] | titlecase }}</nb-option\n              >\n            </nb-select>\n          </div>\n          <ng-container *ngIf=\"this.searchItems[index].field !== 'id'\">\n            <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n              <nb-select\n                [placeholder]=\"'rest-list.operator' | translate\"\n                fullWidth\n                (selectedChange)=\"selectOperator($event, index)\"\n              >\n                <nb-option\n                  *ngFor=\"let operator of filterOperator\"\n                  [value]=\"operator.value\"\n                >\n                  {{ operator.name | translate }}\n                </nb-option>\n              </nb-select>\n            </div>\n          </ng-container>\n\n          <div\n            *ngIf=\"this.searchItems[index].field !== 'id'\"\n            class=\"col-lg-4 col-md-12 col-xs-12 input-space\"\n            [ngClass]=\"{\n              'col-12': this.resource.listConfig.searchFilter == null\n            }\"\n          >\n            <input\n              nbInput\n              (input)=\"onFilter($event.target, index)\"\n              fullWidth\n              [placeholder]=\"'rest-list.searchPlaceholder' | translate\"\n              type=\"text\"\n            />\n          </div>\n          <div [formGroup]=\"form\">\n            <ng-container *ngIf=\"this.searchItems[index].field === 'id'\">\n              <div class=\"input-space\">\n                <!-- <label class=\"label\">{{ field.label | titlecase }}</label> -->\n                <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event)\">\n                  <nb-tag\n                    *ngFor=\"let tree of belongToMany['id']\"\n                    [text]=\"tree['name']\"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    nbTagInput\n                    #autoBelongToMany\n                    [nbAutocomplete]=\"belongToField\"\n                    (keyup)=\"filterInput($event, index)\"\n                    [placeholder]=\"\n                      this.searchItems[index].fieldName\n                        ? this.searchItems[index].fieldName\n                        : 'id'\n                    \"\n                    [formControlName]=\"'id'\"\n                    fullWidth\n                  />\n                </nb-tag-list>\n\n                <nb-autocomplete\n                  #belongToField\n                  (selectedChange)=\"onChoose($event, index)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains['id'] | async\"\n                    [value]=\"option\"\n                  >\n                    {{\n                      option[\n                        this.searchItems[index].fieldName\n                          ? this.searchItems[index].fieldName\n                          : \"id\"\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n            </ng-container>\n          </div>\n\n          <div\n            class=\"col-lg-1 col-md-2 col-xs-4 input-space row\"\n            *ngIf=\"index == 0\"\n          >\n            <button\n              nbButton\n              fullWidth\n              nbTooltip=\"{{ 'rest-list.search' | translate }}\"\n              nbTooltipPlacement=\"top\"\n              status=\"primary\"\n              (click)=\"startSearch()\"\n            >\n              <nb-icon icon=\"search-outline\"></nb-icon>\n            </button>\n          </div>\n          <div\n            class=\"col-lg-1 col-md-2 col-xs-4 input-space\"\n            *ngIf=\"index == 0; else elseBlock\"\n          >\n            <button\n              nbButton\n              fullWidth\n              nbTooltip=\"{{ 'rest-list.addSearch' | translate }}\"\n              nbTooltipPlacement=\"top\"\n              status=\"primary\"\n              (click)=\"addFieldSearch()\"\n            >\n              <nb-icon icon=\"plus-outline\"></nb-icon>\n            </button>\n          </div>\n          <ng-template #elseBlock>\n            <div class=\"col-lg-1 input-space\">\n              <button\n                nbButton\n                fullWidth\n                nbTooltip=\"{{ 'rest-list.removeSearch' | translate }}\"\n                nbTooltipPlacement=\"top\"\n                status=\"danger\"\n                (click)=\"removeFieldSearch(index)\"\n              >\n                <nb-icon icon=\"minus-outline\"></nb-icon>\n              </button>\n            </div>\n          </ng-template>\n        </ng-container>\n      </ng-container>\n    </div>\n\n    <!-- <ng2-smart-table\n    *ngIf=\"showCheckbox\"\n      [settings]=\"{...settings, columns: { ...settings.columns, isChecked } }\"\n      [source]=\"source\"\n      (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (createConfirm)=\"onCreateConfirm($event)\"\n      (custom)=\"onCustom($event)\"\n      (userRowSelect)=\"detailEntity($event)\"\n    >\n    </ng2-smart-table> -->\n\n    <!-- *ngIf=\"!showCheckbox\" -->\n\n    <ng-container *ngIf=\"resource.permissions.length > 0\">\n      <ng2-smart-table\n        [settings]=\"settings\"\n        [source]=\"source\"\n        (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (createConfirm)=\"onCreateConfirm($event)\"\n        (custom)=\"onCustom($event)\"\n        (userRowSelect)=\"detailEntity($event)\"\n        *ngIf=\"custom\"\n      >\n      </ng2-smart-table>\n    </ng-container>\n\n    <ng-container *ngIf=\"resource.permissions.length === 0\">\n      <ng2-smart-table\n        [settings]=\"settings\"\n        [source]=\"source\"\n        (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (createConfirm)=\"onCreateConfirm($event)\"\n        (custom)=\"onCustom($event)\"\n        (userRowSelect)=\"detailEntity($event)\"\n      >\n      </ng2-smart-table>\n    </ng-container>\n    <div\n      class=\"row align-items-center justify-content-end\"\n      style=\"margin-top: 1rem\"\n    >\n      <label class=\"label mx-2\">{{ \"options.per_page\" | translate }}</label>\n      <nb-select\n        [placeholder]=\"resource.listConfig.perPage.toString()\"\n        [(selected)]=\"currentPerPage\"\n      >\n        <nb-option\n          *ngFor=\"let perPage of perPagesOptions\"\n          (click)=\"setPager(perPage.value)\"\n          value=\"perPage.value\"\n          >{{ perPage.title }}</nb-option\n        >\n      </nb-select>\n    </div>\n  </nb-card-body>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card-body{display:block}.nb-theme-default :host nb-card-body button{display:block}.nb-theme-default :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-default :host .result-from-dialog{flex-direction:column}.nb-theme-default :host .form-input-card nb-card-body{display:block}.nb-theme-dark :host nb-card-body{display:block}.nb-theme-dark :host nb-card-body button{display:block}.nb-theme-dark :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-dark :host .result-from-dialog{flex-direction:column}.nb-theme-dark :host .form-input-card nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body button{display:block}.nb-theme-cosmic :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-cosmic :host .result-from-dialog{flex-direction:column}.nb-theme-cosmic :host .form-input-card nb-card-body{display:block}.nb-theme-corporate :host nb-card-body{display:block}.nb-theme-corporate :host nb-card-body button{display:block}.nb-theme-corporate :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-corporate :host .result-from-dialog{flex-direction:column}.nb-theme-corporate :host .form-input-card nb-card-body{display:block}::ng-deep ng2-st-tbody-edit-delete{display:none;height:0!important}::ng-deep ng2-st-tbody-custom{display:flex;text-align:center}.input-space{margin-top:1rem}.nb-theme-default ng2-smart-table th.ng2-smart-actions-title-add a{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}\n"], components: [{ type: i5.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i5.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i5.NbCardBodyComponent, selector: "nb-card-body" }, { type: i5.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i5.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i5.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i5.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i5.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i10.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }], directives: [{ type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NbTooltipDirective, selector: "[nbTooltip]", inputs: ["nbTooltipPlacement", "nbTooltipTrigger", "nbTooltipOffset", "nbTooltipAdjustment", "nbTooltipClass", "nbTooltipIcon", "nbTooltipStatus", "nbTooltip"], outputs: ["nbTooltipShowStateChange"], exportAs: ["nbTooltip"] }, { type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }, { type: i9.NgxPermissionsDirective, selector: "[ngxPermissionsOnly],[ngxPermissionsExcept]", inputs: ["ngxPermissionsOnly", "ngxPermissionsOnlyThen", "ngxPermissionsOnlyElse", "ngxPermissionsExcept", "ngxPermissionsExceptElse", "ngxPermissionsExceptThen", "ngxPermissionsThen", "ngxPermissionsElse", "ngxPermissionsOnlyAuthorisedStrategy", "ngxPermissionsOnlyUnauthorisedStrategy", "ngxPermissionsExceptUnauthorisedStrategy", "ngxPermissionsExceptAuthorisedStrategy", "ngxPermissionsUnauthorisedStrategy", "ngxPermissionsAuthorisedStrategy"], outputs: ["permissionsAuthorized", "permissionsUnauthorized"] }, { type: i5.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }, { type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i5.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i12.TranslatePipe, "titlecase": i11.TitleCasePipe, "async": i11.AsyncPipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestResourceListComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-rest-resource-list',
                    templateUrl: './rest-resource-list.component.html',
                    styleUrls: ['./rest-resource-list.component.scss'],
                }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }, { type: i2.RestAdminConfigService }, { type: i3.RestResourceService }, { type: i4.HttpClient }, { type: i5.NbDialogService }, { type: i6.ActivatedRoute }, { type: i6.Router }, { type: i5.NbMenuService }, { type: i7.RestExportService }, { type: i8.RestShareService }, { type: i9.NgxPermissionsService }, { type: i3.RestResourceService }]; }, propDecorators: { resource: [{
                type: Input
            }], search: [{
                type: ViewChild,
                args: ['search']
            }], inputBelongToMany: [{
                type: ViewChild,
                args: ['autoBelongToMany']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdDQUFnQyxF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R0FBekIseUJBQXlCLDBTQy9CdEMsazZWQWlVQTsyRkRsU2EseUJBQXlCO2tCQUxyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNuRDttYkFFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNlLE1BQU07c0JBQTFCLFNBQVM7dUJBQUMsUUFBUTtnQkFDWSxpQkFBaUI7c0JBQS9DLFNBQVM7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2ZXJEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7XG4gIFJlc3RGaWVsZCxcbiAgUkVTVF9GSUVMRF9UWVBFUyxcbiAgUEVSTUlTU0lPTixcbn0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlLCBOYlRhZ0NvbXBvbmVudCB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTFBIQUJFVCwgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFNoYXJlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2g7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9CZWxvbmdUb01hbnknKSBpbnB1dEJlbG9uZ1RvTWFueTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGFscGhhYmVsdDogc3RyaW5nW10gPSBBTFBIQUJFVDtcbiAgZGF0YTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XG4gIGN1cnJlbnRQZXJQYWdlOiBudW1iZXI7XG4gIGlzRmV0Y2hpbmcgPSB0cnVlO1xuICByZXNzb3VyY2VOYW1lID0gJyc7XG4gIGZpbHRlckJ5ID0gJyc7XG4gIGZpbHRlck9wZXJhdG9yID0gRklMVEVSX09QRVJBVE9SUztcbiAgZXhwb3J0QXNDb25maWcgPSB7XG4gICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXG4gICAgZWxlbWVudElkOiAnbXlUYWJsZUVsZW1lbnRJZCcsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcbiAgfTtcbiAgc2VhcmNoSXRlbXMgPSBbXTtcbiAgc2VhcmNoSXRlbSA9ICcnO1xuXG4gIHNob3dDaGVja2JveCA9IGZhbHNlO1xuICBzaG93RGV0YWlscyA9IGZhbHNlO1xuICBvcHRpb25zOiBhbnkgPSB7fTtcbiAgYWxsRmlsdGVyQ29udGFpbnM6IGFueSA9IHt9O1xuICBiZWxvbmdUb1ZhbHVlOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9NYW55OiBhbnkgPSB7fTtcbiAgY29udHJvbHM6IGFueTtcbiAgaXNDaGVja2VkOiBhbnkgPSB7fTtcblxuICBzZWxlY3RlZFJvd3M6IGFueVtdID0gW107XG5cbiAgaXRlbXMgPSBbXG4gICAgeyB0aXRsZTogJ0FsbCBmb3JtYXRzJyB9LFxuICAgIHsgdGl0bGU6ICdDU1YnIH0sXG4gICAgeyB0aXRsZTogJ0VYQ0VMJyB9LFxuICAgIHsgdGl0bGU6ICdQREYnIH0sXG4gIF07XG4gIHBlclBhZ2VzT3B0aW9ucyA9IFtcbiAgICB7IHRpdGxlOiAnNScsIHZhbHVlOiA1IH0sXG4gICAgeyB0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgeyB0aXRsZTogJzIwJywgdmFsdWU6IDIwIH0sXG4gICAgeyB0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXG4gICAgeyB0aXRsZTogJzEwMCcsIHZhbHVlOiAxMDAgfSxcbiAgXTtcblxuICBwZXJtaXNzaW9ucyA9IFtQRVJNSVNTSU9OLkNSRUFURSwgUEVSTUlTU0lPTi5SRUFELCBQRVJNSVNTSU9OLkRFTEVURV07XG5cbiAgZ2V0IFBFUk1JU1NJT04oKSB7XG4gICAgcmV0dXJuIFBFUk1JU1NJT047XG4gIH1cbiAgY3VzdG9tID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlczogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5iTWVudVNlcnZpY2U6IE5iTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBleHBvcnRTZXJ2aWNlOiBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBwdWJsaWMgcmVzdFNoYXJlOiBSZXN0U2hhcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5KSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5Py5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQudmFsdWVdID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zLnB1c2goe1xuICAgICAgICBmaWVsZDogJycsXG4gICAgICAgIG9wZXJhdG9yOiAnJyxcbiAgICAgICAgdGVybXM6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGVyUGFnZSA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlO1xuXG4gICAgdGhpcy5nZXRMaXN0KCk7XG5cbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHtcbiAgICAgIHRpdGxlOiAnY2hlY2snLFxuICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiAoY2VsbCwgcm93KSA9PiAoe1xuICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrOiAoZXZlbnQsIHJvd0RhdGEpID0+XG4gICAgICAgICAgdGhpcy5vbkNoZWNrYm94Q2xpY2soZXZlbnQsIHJvd0RhdGEpLFxuICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5maW5kKChlbHQpID0+IGVsdD8uaWQgPT0gcm93Py5pZCkgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgY2VsbCxcbiAgICAgICAgcm93LFxuICAgICAgfSksXG4gICAgICBlZGl0b3I6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICByZW5kZXJDb21wb25lbnQ6IFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQnKSxcbiAgICAgICAgbWFwKCh7IGl0ZW06IHsgdGl0bGUgfSB9KSA9PiB0aXRsZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgICBjYXNlICdFWENFTCc6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1BERic6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDU1YnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0NzdigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QWxsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXN0b20gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICBhcGk6IHBlcm1pc3Npb24uZmllbGRLZXkuYXBpLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG5cbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbi50eXBlID09PSBQRVJNSVNTSU9OLlJFQUQpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24udHlwZSA9PT0gUEVSTUlTU0lPTi5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPlwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5jdXN0b20gPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIGhpZGVTdWJIZWFkZXI6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5oaWRlQWRkU3ViSGVhZGVyLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgY3VzdG9tOiBjdXN0b20sXG4gICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdlcjoge1xuICAgICAgICAgICAgICAgICAgcGVyUGFnZTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgICAgICAgICAgICBhZGQ6IHtcbiAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIiA+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjb25maXJtQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGN1c3RvbTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGV0YWlsJyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLWNvbXBvc2UnPjwvaT5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICB0aXRsZTogXCI8aSBjbGFzcz0nbmItdHJhc2ggdGV4dC1kYW5nZXInPjwvaT5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdlcjoge1xuICAgICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgICAgYWRkOiB7XG4gICAgICAgICAgYWRkQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItcGx1c1wiID48L2k+JyxcbiAgICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nLFxuICAgICAgICAgIGNvbmZpcm1DcmVhdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNob3dDaGVja2JveCgpIHtcbiAgICB0aGlzLnNob3dDaGVja2JveCA9ICF0aGlzLnNob3dDaGVja2JveDtcbiAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gIH1cblxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IGV2ZW50LmRhdGEsXG4gICAgICAgIHRpdGxlOiAnU1VQUFJFU1NJT04nLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiBmYWxzZSxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlQWxsQ29uZmlybSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHRoaXMuc2VsZWN0ZWRSb3dzLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1RPVVQgU1VQUFJJTUVSJyxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0VudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWFkZGApO1xuICB9XG5cbiAgZGV0YWlsRW50aXR5KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmhhc1Blcm1pc3Npb24oUEVSTUlTU0lPTi5SRUFEKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICBldmVudC5kYXRhLmlkLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICBldmVudC5kYXRhLmlkLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2JveENsaWNrKGV2ZW50OiBhbnksIHJvdzogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSwgMSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdEFsbFJvd3MoKSB7XG4gICAgdGhpcy5zb3VyY2UuZ2V0QWxsKCkudGhlbigocm93cykgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggIT09IHJvd3M/Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNYXRUYWJsZUNvbHVtbnMoKSB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgaWYgKCF0aGlzLnNob3dDaGVja2JveCkge1xuICAgICAgY29sdW5tc1snaXNDaGVja2VkJ10gPSB0aGlzLmlzQ2hlY2tlZDtcbiAgICB9XG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICBhZGRhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiAoY2VsbCwgcm93KSA9PiAoe1xuICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbmRlckNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGNvbHVubXM7XG4gIH1cblxuICBnZXRMaXN0KHBhZ2UgPSBudWxsLCBwZXJQYWdlID0gbnVsbCkge1xuICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcih0cnVlKTtcbiAgICBpZiAocGFnZSkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcyA9IHsgLi4udGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcywgcGFnZSB9O1xuICAgIH1cbiAgICBpZiAocGVyUGFnZSkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcyA9IHtcbiAgICAgICAgLi4udGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgcGVyX3BhZ2U6IHBlclBhZ2UsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKHRoaXMuaHR0cCwge1xuICAgICAgZW5kUG9pbnQ6XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmwgK1xuICAgICAgICAnLycgK1xuICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpICtcbiAgICAgICAgJz8nICtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zKVxuICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgICAgIGN1bXVsICtcbiAgICAgICAgICAgICAgaXRlbSArXG4gICAgICAgICAgICAgICc9JyArXG4gICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtc1tpdGVtXSArXG4gICAgICAgICAgICAgICcmJyxcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zbGljZSgwLCAtMSksXG4gICAgICBkYXRhS2V5OiAnZGF0YScsXG4gICAgICBwYWdlclBhZ2VLZXk6ICdwYWdlJyxcbiAgICAgIHBhZ2VyTGltaXRLZXk6ICdwZXJfcGFnZScsXG4gICAgICB0b3RhbEtleTogJ3RvdGFsJyxcbiAgICAgIGZpbHRlckZpZWxkS2V5OiBgI19pbmNsdWRlI2AsXG4gICAgfSk7XG4gIH1cblxuICBvbkNyZWF0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkYXRhcyA9IGV2ZW50Lm5ld0RhdGE7XG4gICAgY29uc3Qgc2F2ZUJlbG9uZ1RvbWFueSA9IFtdO1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoZWx0LnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWSkge1xuICAgICAgICBzYXZlQmVsb25nVG9tYW55LnB1c2goe1xuICAgICAgICAgIHJlc291cmNlczogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgIHBpdm90OiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucGl2b3ROYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIGRhdGFzW2VsdC5uYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgIC5hZGRSZXNvdXJjZXModGhpcy5yZXNvdXJjZS5hZGRDb25maWcsIHsgLi4uZGF0YXMsIHVzZXJfaWQ6IDEgfSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNhdmVCZWxvbmdUb21hbnkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgZWxlbWVudC5waXZvdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHByb21zID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50LnJlc291cmNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucmVzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV06IGl0ZW1baXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV0sXG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZXNvdXJjZUlkTmFtZSddXTogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcHJvbXMucHVzaChcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAuYWRkUmVzb3VyY2VzKHJlc3RSZXNvdXJjZS5hZGRDb25maWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkN1c3RvbShldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuYWN0aW9uKSB7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICB0aGlzLm9uRGVsZXRlQ29uZmlybShldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGV0YWlsJzpcbiAgICAgICAgdGhpcy5kZXRhaWxFbnRpdHkoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXRGdWxsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlcy5nZXRSZXNvdXJjZXMoe1xuICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpLFxuICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgc2hvdWxkX3BhZ2luYXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb0V4Y2VsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0SGVhZGVyID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgc2hlZXRIZWFkZXJbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGtleTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCB1ZHQ6IGFueSA9IHtcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIC8vIHRpdGxlXG4gICAgICAgIHNoZWV0SGVhZGVyLCAvLyB0YWJsZSBoZWFkZXJcbiAgICAgIF0sXG4gICAgICBza2lwSGVhZGVyOiB0cnVlLFxuICAgIH07XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCwgaW5kaWNlKSA9PiB7XG4gICAgICAgIGVsdCA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWx0W3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBlbGVtZW50W3NoZWV0SGVhZGVyW2tleXNbaW5kZXhdXV07XG4gICAgICAgIH0pO1xuICAgICAgICB1ZHQuZGF0YS5wdXNoKGVsdCk7XG4gICAgICB9KTtcblxuICAgICAgZWRhdGEucHVzaCh1ZHQpO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydFRvRXhjZWwoZWRhdGEsICdyZXN0X2ZpbGVfZXhjZWwnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvUGRmKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgY29uc3QgaGVhZGVyID0gW107XG4gICAgbGV0IGVsdCA9IFtdO1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGhlYWRlci5wdXNoKGVsdC5sYWJlbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0gW107XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHQucHVzaChlbGVtZW50W3Jvd10pO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tRGF0YS5wdXNoKGVsdCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGZpbGVUaXRsZTogc3RyaW5nID0gdGhpcy5yZXNvdXJjZS5uYW1lO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydFRvUGRmKFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGN1c3RvbURhdGEsXG4gICAgICAgICdyZXN0X2ZpbGVfcGRmJyxcbiAgICAgICAgZmlsZVRpdGxlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9Dc3YoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tcyA9IHt9O1xuICAgIGNvbnN0IGN1c3RvbURhdGEgPSBbXTtcbiAgICBjb25zdCBoZWFkZXIgPSBbXTtcbiAgICBsZXQgZWx0ID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgaGVhZGVyLnB1c2goZWx0LmxhYmVsKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgaGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdFtyb3ddID0gZWxlbWVudFtyb3ddO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tRGF0YS5wdXNoKGVsdCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0NzdihoZWFkZXIsIGN1c3RvbURhdGEsICdyZXN0X2ZpbGVfY3N2Jyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRBbGwoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tcyA9IHt9O1xuICAgIGNvbnN0IHBkZkFuZENzdkhlYWRlciA9IFtdO1xuICAgIGNvbnN0IHNoZWV0SGVhZGVyID0ge307XG4gICAgY29uc3QgY3N2RGF0YSA9IFtdO1xuICAgIGNvbnN0IHBkZkRhdGEgPSBbXTtcbiAgICBsZXQgZWx0UERGID0gW107XG4gICAgbGV0IGVsdENTViA9IHt9O1xuICAgIGxldCBlbHRFWENFTCA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5wdXNoKGVsdC5sYWJlbCk7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBleGNlbERhdGE6IGFueSA9IHtcbiAgICAgIGRhdGE6IFt7IEE6ICdSZXN0IEV4Y2VsIGV4cG9ydCcgfSwgc2hlZXRIZWFkZXJdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNoZWV0SGVhZGVyKTtcbiAgICBjb25zdCBlZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAvL0NTVlxuICAgICAgICBlbHRDU1YgPSB7fTtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdENTVltyb3ddID0gZWxlbWVudFtyb3ddO1xuICAgICAgICB9KTtcbiAgICAgICAgY3N2RGF0YS5wdXNoKGVsdENTVik7XG4gICAgICAgIC8vUERGXG4gICAgICAgIGVsdFBERiA9IFtdO1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0UERGLnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBkZkRhdGEucHVzaChlbHRQREYpO1xuICAgICAgICAvL0VYQ0VMXG4gICAgICAgIGVsdEVYQ0VMID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbHRFWENFTFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhjZWxEYXRhLmRhdGEucHVzaChlbHRFWENFTCk7XG4gICAgICAgIGVkYXRhLnB1c2goZXhjZWxEYXRhKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmdlbmVyYXRlWmlwKHBkZkFuZENzdkhlYWRlciwgcGRmRGF0YSwgY3N2RGF0YSwgZWRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9GaWx0ZXJcblxuICBzZXRQYWdlcihzZXRQYWdlcikge1xuICAgIHRoaXMuc291cmNlLnNldFBhZ2luZygxLCBzZXRQYWdlciwgdHJ1ZSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgc2VsZWN0RmlsdGVyQnkoZGF0YSwgaW5kZXgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZCA9IGRhdGFbJ3ZhbHVlJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lID0gZGF0YVsncmVzb3VyY2VGaWVsZE5hbWUnXTtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5yZXNvdXJjZSA9IGRhdGFbJ3Jlc291cmNlJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ucmVzc291cmNlRmlsdGVyTmFtZSA9IGRhdGFbJ3Jlc3NvdXJjZUZpbHRlck5hbWUnXTtcbiAgICBpZiAoZGF0YVsndmFsdWUnXSA9PT0gJ2lkJykge1xuICAgICAgY29uc3QgcmVzb3VyY2UgPSBkYXRhPy5yZXNvdXJjZT8uYWRkQ29uZmlnO1xuICAgICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICBhcGk6IHJlc291cmNlLmFwaSxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgc2hvdWxkX3BhZ2luYXRlOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2RhdGFbJ3ZhbHVlJ11dID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgeFsnaWQnXVxuICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICA/LmxvY2FsZUNvbXBhcmUoeVsnaWQnXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2RhdGFbJ3ZhbHVlJ11dID0gb2YoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbZGF0YVsndmFsdWUnXV1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cbiAgc2VsZWN0T3BlcmF0b3IodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ub3BlcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIG9uRmlsdGVyKHZhbCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT0gdW5kZWZpbmVkICYmIGluZGV4ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnRlcm1zID0gdmFsPy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hJdGVtID0gdmFsPy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBhZGRGaWVsZFNlYXJjaCgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLnB1c2goeyBmaWVsZDogJycsIG9wZXJhdG9yOiAnJywgdGVybXM6ICcnIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmllbGRTZWFyY2goaW5kZXgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlck1hbnkoXG4gICAgdmFsdWU6IGFueSxcbiAgICBpbmRleDogbnVtYmVyLFxuICAgIG9wdGlvbnMgPSAnYmVsb25nVG9NYW55T3B0aW9ucydcbiAgKTogc3RyaW5nW10ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgJiYgdGhpcy5vcHRpb25zWydpZCddPy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zWydpZCddLmZpbHRlcigob3B0aW9uVmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgID8gdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICA6ICdpZCcsXG4gICAgICAgIF0uc29tZSgoZWx0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAke29wdGlvblZhbHVlW2VsdF0/LnRvTG93ZXJDYXNlKCl9YC5pbmNsdWRlcyhcbiAgICAgICAgICAgIGAke3ZhbHVlLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKHZhbHVlOiBhbnksIGluZGV4OiBudW1iZXIpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG9mKHZhbHVlKS5waXBlKFxuICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdGhpcy5maWx0ZXJNYW55KGZpbHRlclN0cmluZywgaW5kZXgpKVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJJbnB1dChldmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbJ2lkJ10gPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucyhcbiAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIGluZGV4XG4gICAgKTtcbiAgfVxuXG4gIG9uVGFnUmVtb3ZlQmVsb25nKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNlbGxEYXRhID0gQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSk7XG4gICAgY29uc3Qgc2F2ZSA9IFtdO1xuICAgIGNlbGxEYXRhLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdFsnbmFtZSddICE9IHRhZ1RvUmVtb3ZlLnRleHQpIHNhdmUucHVzaChlbHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10gPSBuZXcgU2V0KHNhdmUpO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgWydpZCddOiBzYXZlLFxuICAgIH0pO1xuICB9XG4gIC8vYmVsb25nVG9NYW55T3B0aW9uc1xuICBvbkNob29zZShldmVudCwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNlbGxEYXRhOiBhbnlbXSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pO1xuICAgIGlmIChldmVudC5pZCkge1xuICAgICAgY29uc3Qgc2VhcmNoID0gY2VsbERhdGEuZmluZCgoZWx0OiBhbnkpID0+IGVsdC5pZCA9PSBldmVudC5pZCk7XG4gICAgICBpZiAoc2VhcmNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBuZXdFbHQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIHNhdmVSZWxhdGVkSWROYW1lOiBldmVudC5pZCxcbiAgICAgICAgICBzYXZlUmVzb3VyY2VJZE5hbWU6IGV2ZW50LmlkLFxuICAgICAgICAgIG5hbWU6IGV2ZW50W1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgID8gdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgIF0sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddLmFkZChuZXdFbHQpO1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgWydpZCddOiBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddLnZhbHVlcygpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXRCZWxvbmdUb01hbnkubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgc3RhcnRTZWFyY2goKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgbGV0IHNlYXJjaCA9ICcnO1xuICAgIHRoaXMuc2VhcmNoSXRlbXMuZm9yRWFjaCgoZWxlbWVudCwgaW5kKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudD8uZmllbGQgPT09ICdpZCcpIHtcbiAgICAgICAgbGV0IHRhYiA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGFiLnB1c2goaXRlbSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0YWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBsaXN0SWQgPSB0YWIubWFwKChlbHQ6IGFueSkgPT4gZWx0Py5pZCkuam9pbignLCcpO1xuICAgICAgICAgIHBhcmFtc1tgJHtlbGVtZW50Py5yZXNzb3VyY2VGaWx0ZXJOYW1lfS1pbmBdID0gYCR7bGlzdElkfWA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChlbGVtZW50Py5maWVsZCAhPSAnJyAmJiBlbGVtZW50Py50ZXJtcyAhPSAnJykge1xuICAgICAgICAgIGlmIChlbGVtZW50Py5vcGVyYXRvciAhPSAnPScpIHtcbiAgICAgICAgICAgIHBhcmFtc1tcbiAgICAgICAgICAgICAgZWxlbWVudD8uZmllbGQgKyAnLScgKyBlbGVtZW50Py5vcGVyYXRvclxuICAgICAgICAgICAgXSA9IGAke2VsZW1lbnQ/LnRlcm1zfWA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtc1tlbGVtZW50Py5maWVsZF0gPSBgJHtlbGVtZW50Py50ZXJtc31gO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHNlYXJjaCA9IE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtcylcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgaXRlbSkgPT5cbiAgICAgICAgICBjdW11bCArIGl0ZW0gKyAnPScgKyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNbaXRlbV0gKyAnJicsXG4gICAgICAgICcnXG4gICAgICApXG4gICAgICAuc2xpY2UoMCwgLTEpO1xuXG4gICAgaWYgKHNlYXJjaCAhPSAnJykge1xuICAgICAgc2VhcmNoICs9ICcmJztcbiAgICB9XG4gICAgc2VhcmNoICs9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5yZWR1Y2UoKGN1bXVsLCBpdGVtKSA9PiBjdW11bCArIGl0ZW0gKyAnPScgKyBwYXJhbXNbaXRlbV0gKyAnJicsICcnKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UodGhpcy5odHRwLCB7XG4gICAgICBlbmRQb2ludDpcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybCArXG4gICAgICAgICcvJyArXG4gICAgICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGkgK1xuICAgICAgICAnPycgK1xuICAgICAgICBzZWFyY2gsXG4gICAgICBkYXRhS2V5OiAnZGF0YScsXG4gICAgICBwYWdlclBhZ2VLZXk6ICdwYWdlJyxcbiAgICAgIHBhZ2VyTGltaXRLZXk6ICdwZXJfcGFnZScsXG4gICAgICB0b3RhbEtleTogJ3RvdGFsJyxcbiAgICAgIGZpbHRlckZpZWxkS2V5OiBgI19pbmNsdWRlI2AsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuYi1jYXJkIHN0YXR1cz1cInByaW1hcnlcIj5cbiAgPG5iLWNhcmQtaGVhZGVyPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDYgY2xhc3M9XCJ0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAge3sgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnRpdGxlIH19XG4gICAgICAgIDwvaDY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cIlwiICpuZ0lmPVwic2hvd0NoZWNrYm94XCI+XG4gICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiY29udHJvbFwiIChjbGljayk9XCJzZWxlY3RBbGxSb3dzKClcIj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzPVwibXItMlwiXG4gICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgW2NoZWNrZWRdPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA9PSB0aGlzLnNvdXJjZS5jb3VudCgpXCJcbiAgICAgICAgICAvPnt7ICdyZXN0LWRldGFpbC5zZWxlY3QnIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNDBweFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBnaG9zdFxuICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWRldGFpbC5zZWxlY3QnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVTaG93Q2hlY2tib3goKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzaG93Q2hlY2tib3hcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICAgIGdob3N0XG4gICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5leHBvcnREYXRhJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJkb3dubG9hZC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QuYWRkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFkZE5ld0VudGl0eSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QuZGVsZXRlQWxsU2VsZWN0JyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGVBbGxDb25maXJtKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogcmdiKDIzOCwgMTMwLCAxNTcpXCJcbiAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmd4UGVybWlzc2lvbnNPbmx5PVwicGVybWlzc2lvbnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uQ1JFQVRFXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiY29udHJvbFwiIChjbGljayk9XCJhZGROZXdFbnRpdHkoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IFwiYWRkXCIgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkRFTEVURVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZUFsbENvbmZpcm0oKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IHJnYigyMzgsIDEzMCwgMTU3KVwiXG4gICAgICAgICAgICAgICAgPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgXCJyZXN0LWxpc3QuZXhwb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1oZWFkZXI+XG5cbiAgPG5iLWNhcmQtYm9keVxuICAgIFtuYlNwaW5uZXJdPVwidGhpcy5yZXN0U2hhcmUubGlzdExvYWRlclwiXG4gICAgbmJTcGlubmVyU2l6ZT1cImxhcmdlXCJcbiAgICBuYlNwaW5uZXJTdGF0dXM9XCJwcmltYXJ5XCJcbiAgPlxuICAgIDwhLS0gUmVzdC1zZWFyY2ggaW1wbGVtZW50IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiICpuZ0lmPVwidGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnkubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlYXJjaCBvZiBzZWFyY2hJdGVtczsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICA8IS0tIFNlbGVjdCB3aXRoIGZpbHRlciBieSAtLT5cbiAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3QuZmlsdGVyUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RGaWx0ZXJCeSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgb2YgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlci5maWx0ZXJCeVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgPnt7IGZpbHRlcltcIm5hbWVcIl0gfCB0aXRsZWNhc2UgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L25iLXNlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgIT09ICdpZCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wteHMtMTIgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0Lm9wZXJhdG9yJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cInNlbGVjdE9wZXJhdG9yKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcGVyYXRvciBvZiBmaWx0ZXJPcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3BlcmF0b3IudmFsdWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IG9wZXJhdG9yLm5hbWUgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgIT09ICdpZCdcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXhzLTEyIGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2NvbC0xMic6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIgPT0gbnVsbFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudC50YXJnZXQsIGluZGV4KVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5zZWFyY2hQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgPT09ICdpZCdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0ICh0YWdSZW1vdmUpPVwib25UYWdSZW1vdmVCZWxvbmcoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBiZWxvbmdUb01hbnlbJ2lkJ11cIlxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJ0cmVlWyduYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgI2F1dG9CZWxvbmdUb01hbnlcbiAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImJlbG9uZ1RvRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuXG4gICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgI2JlbG9uZ1RvRmllbGRcbiAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvbkNob29zZSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zWydpZCddIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTIgY29sLXhzLTQgaW5wdXQtc3BhY2Ugcm93XCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT0gMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5zZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJzdGFydFNlYXJjaCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInNlYXJjaC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMSBjb2wtbWQtMiBjb2wteHMtNCBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDA7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1saXN0LmFkZFNlYXJjaCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEZpZWxkU2VhcmNoKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1cy1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5yZW1vdmVTZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWludXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmcyLXNtYXJ0LXRhYmxlXG4gICAgKm5nSWY9XCJzaG93Q2hlY2tib3hcIlxuICAgICAgW3NldHRpbmdzXT1cInsuLi5zZXR0aW5ncywgY29sdW1uczogeyAuLi5zZXR0aW5ncy5jb2x1bW5zLCBpc0NoZWNrZWQgfSB9XCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjdXN0b20pPVwib25DdXN0b20oJGV2ZW50KVwiXG4gICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlPiAtLT5cblxuICAgIDwhLS0gKm5nSWY9XCIhc2hvd0NoZWNrYm94XCIgLS0+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgICAgICpuZ0lmPVwiY3VzdG9tXCJcbiAgICAgID5cbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiXG4gICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW1cIlxuICAgID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIG14LTJcIj57eyBcIm9wdGlvbnMucGVyX3BhZ2VcIiB8IHRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8bmItc2VsZWN0XG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJyZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UudG9TdHJpbmcoKVwiXG4gICAgICAgIFsoc2VsZWN0ZWQpXT1cImN1cnJlbnRQZXJQYWdlXCJcbiAgICAgID5cbiAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBwZXJQYWdlIG9mIHBlclBhZ2VzT3B0aW9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cInNldFBhZ2VyKHBlclBhZ2UudmFsdWUpXCJcbiAgICAgICAgICB2YWx1ZT1cInBlclBhZ2UudmFsdWVcIlxuICAgICAgICAgID57eyBwZXJQYWdlLnRpdGxlIH19PC9uYi1vcHRpb25cbiAgICAgICAgPlxuICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1ib2R5PlxuPC9uYi1jYXJkPlxuIl19