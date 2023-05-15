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
                        console.log('custom', custom);
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
                    ',', '')
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
            .reduce((cumul, item) => cumul + item + '=' + this.resource.listConfig.queryParams[item] + ',', '')
            .slice(0, -1);
        if (search != '') {
            search += '&';
        }
        search += Object.keys(params)
            .reduce((cumul, item) => cumul + item + '=' + params[item] + '&', '')
            .slice(0, -1);
        console.log(search);
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
RestResourceListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListComponent, selector: "ngx-rest-resource-list", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "search", first: true, predicate: ["search"], descendants: true }, { propertyName: "inputBelongToMany", first: true, predicate: ["autoBelongToMany"], descendants: true }], ngImport: i0, template: "<nb-card status=\"primary\">\n  <nb-card-header>\n    <div class=\"row d-flex justify-content-between\">\n      <div class=\"d-flex align-items-center\">\n        <h6 class=\"text-white\">\n          {{ this.resource.listConfig.title }}\n        </h6>\n      </div>\n\n      <div class=\"\" *ngIf=\"showCheckbox\">\n        <button nbButton ghost status=\"control\" (click)=\"selectAllRows()\">\n          <input\n            class=\"mr-2\"\n            type=\"checkbox\"\n            [checked]=\"this.selectedRows?.length == this.source.count()\"\n          />Selectionner\n        </button>\n      </div>\n\n      <div class=\"\" style=\"height: 40px\">\n        <button nbButton ghost (click)=\"toggleShowCheckbox()\">\n          <input type=\"checkbox\" [(ngModel)]=\"showCheckbox\" />\n        </button>\n\n        <button\n          nbButton\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n          ghost\n          status=\"control\"\n        >\n          <nb-icon icon=\"download-outline\"></nb-icon>\n        </button>\n\n        <ng-container *ngIf=\"resource.permissions.length === 0\">\n          <button nbButton ghost status=\"control\" (click)=\"addNewEntity()\">\n            <span>{{ \"add\" | translate }}</span>\n            <nb-icon icon=\"plus-circle\"></nb-icon>\n          </button>\n\n          <button\n            nbButton\n            *ngIf=\"this.selectedRows?.length > 0\"\n            ghost\n            status=\"control\"\n            (click)=\"onDeleteAllConfirm()\"\n          >\n            <nb-icon\n              icon=\"trash\"\n              color=\"danger\"\n              style=\"color: rgb(238, 130, 157)\"\n            ></nb-icon>\n          </button>\n        </ng-container>\n\n        <ng-container *ngIf=\"resource.permissions.length > 0\">\n          <ng-container *ngxPermissionsOnly=\"permissions\">\n            <ng-container *ngxPermissionsOnly=\"PERMISSION.CREATE\">\n              <button nbButton ghost status=\"control\" (click)=\"addNewEntity()\">\n                <span>{{ \"add\" | translate }}</span>\n                <nb-icon icon=\"plus-circle\"></nb-icon>\n              </button>\n            </ng-container>\n\n            <ng-container *ngxPermissionsOnly=\"PERMISSION.DELETE\">\n              <button\n                nbButton\n                *ngIf=\"this.selectedRows?.length > 0\"\n                ghost\n                status=\"control\"\n                (click)=\"onDeleteAllConfirm()\"\n              >\n                <nb-icon\n                  icon=\"trash\"\n                  color=\"danger\"\n                  style=\"color: rgb(238, 130, 157)\"\n                ></nb-icon>\n              </button>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n\n        <!-- <button\n          nbButton\n          status=\"primary\"\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n        >\n          {{ \"rest-list.export\" | translate }}\n        </button> -->\n      </div>\n    </div>\n  </nb-card-header>\n\n  <nb-card-body\n    [nbSpinner]=\"this.restShare.listLoader\"\n    nbSpinnerSize=\"large\"\n    nbSpinnerStatus=\"primary\"\n  >\n    <!-- Rest-search implement -->\n    <div class=\"row mb-5\" *ngIf=\"this.resource.listConfig.searchFilter\">\n      <ng-container\n        *ngIf=\"this.resource.listConfig.searchFilter.filterBy.length > 0\"\n      >\n        <ng-container *ngFor=\"let search of searchItems; let index = index\">\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <!-- Select with filter by -->\n            <nb-select\n              [placeholder]=\"'rest-list.filterPlaceholder' | translate\"\n              fullWidth\n              (selectedChange)=\"selectFilterBy($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"\n                  let filter of this.resource.listConfig.searchFilter.filterBy\n                \"\n                [value]=\"filter\"\n                >{{ filter[\"name\"] | titlecase }}</nb-option\n              >\n            </nb-select>\n          </div>\n          <ng-container *ngIf=\"this.searchItems[index].field !== 'id'\">\n            <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n              <nb-select\n                [placeholder]=\"'rest-list.operator' | translate\"\n                fullWidth\n                (selectedChange)=\"selectOperator($event, index)\"\n              >\n                <nb-option\n                  *ngFor=\"let operator of filterOperator\"\n                  [value]=\"operator.value\"\n                >\n                  {{ operator.name | translate }}\n                </nb-option>\n              </nb-select>\n            </div>\n          </ng-container>\n\n          <div\n            *ngIf=\"this.searchItems[index].field !== 'id'\"\n            class=\"col-lg-4 col-md-12 col-xs-12 input-space\"\n            [ngClass]=\"{\n              'col-12': this.resource.listConfig.searchFilter == null\n            }\"\n          >\n            <input\n              nbInput\n              (input)=\"onFilter($event.target, index)\"\n              fullWidth\n              [placeholder]=\"'rest-list.searchPlaceholder' | translate\"\n              type=\"text\"\n            />\n          </div>\n          <div [formGroup]=\"form\">\n            <ng-container *ngIf=\"this.searchItems[index].field === 'id'\">\n              <div class=\"input-space\">\n                <!-- <label class=\"label\">{{ field.label | titlecase }}</label> -->\n                <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event)\">\n                  <nb-tag\n                    *ngFor=\"let tree of belongToMany['id']\"\n                    [text]=\"tree['name']\"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    nbTagInput\n                    #autoBelongToMany\n                    [nbAutocomplete]=\"belongToField\"\n                    (keyup)=\"filterInput($event, index)\"\n                    [placeholder]=\"\n                      this.searchItems[index].fieldName\n                        ? this.searchItems[index].fieldName\n                        : 'id'\n                    \"\n                    [formControlName]=\"'id'\"\n                    fullWidth\n                  />\n                </nb-tag-list>\n\n                <nb-autocomplete\n                  #belongToField\n                  (selectedChange)=\"onChoose($event, index)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains['id'] | async\"\n                    [value]=\"option\"\n                  >\n                    {{\n                      option[\n                        this.searchItems[index].fieldName\n                          ? this.searchItems[index].fieldName\n                          : \"id\"\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n            </ng-container>\n          </div>\n\n          <div\n            class=\"col-lg-1 col-md-2 col-xs-4 input-space row\"\n            *ngIf=\"index == 0\"\n          >\n            <button nbButton fullWidth status=\"primary\" (click)=\"startSearch()\">\n              <nb-icon icon=\"search-outline\"></nb-icon>\n            </button>\n          </div>\n          <div\n            class=\"col-lg-1 col-md-2 col-xs-4 input-space\"\n            *ngIf=\"index == 0; else elseBlock\"\n          >\n            <button\n              nbButton\n              fullWidth\n              status=\"primary\"\n              (click)=\"addFieldSearch()\"\n            >\n              <nb-icon icon=\"plus-outline\"></nb-icon>\n            </button>\n          </div>\n          <ng-template #elseBlock>\n            <div class=\"col-lg-1 input-space\">\n              <button\n                nbButton\n                fullWidth\n                status=\"danger\"\n                (click)=\"removeFieldSearch(index)\"\n              >\n                <nb-icon icon=\"minus-outline\"></nb-icon>\n              </button>\n            </div>\n          </ng-template>\n        </ng-container>\n      </ng-container>\n    </div>\n\n    <!-- <ng2-smart-table\n    *ngIf=\"showCheckbox\"\n      [settings]=\"{...settings, columns: { ...settings.columns, isChecked } }\"\n      [source]=\"source\"\n      (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (createConfirm)=\"onCreateConfirm($event)\"\n      (custom)=\"onCustom($event)\"\n      (userRowSelect)=\"detailEntity($event)\"\n    >\n    </ng2-smart-table> -->\n\n    <!-- *ngIf=\"!showCheckbox\" -->\n\n    <ng-container *ngIf=\"resource.permissions.length > 0\">\n      <ng2-smart-table\n        [settings]=\"settings\"\n        [source]=\"source\"\n        (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (createConfirm)=\"onCreateConfirm($event)\"\n        (custom)=\"onCustom($event)\"\n        (userRowSelect)=\"detailEntity($event)\"\n        *ngIf=\"custom\"\n      >\n      </ng2-smart-table>\n    </ng-container>\n\n    <ng-container *ngIf=\"resource.permissions.length === 0\">\n      <ng2-smart-table\n        [settings]=\"settings\"\n        [source]=\"source\"\n        (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (createConfirm)=\"onCreateConfirm($event)\"\n        (custom)=\"onCustom($event)\"\n        (userRowSelect)=\"detailEntity($event)\"\n      >\n      </ng2-smart-table>\n    </ng-container>\n    <div\n      class=\"row align-items-center justify-content-end\"\n      style=\"margin-top: 1rem\"\n    >\n      <label class=\"label mx-2\">{{ \"options.per_page\" | translate }}</label>\n      <nb-select\n        [placeholder]=\"resource.listConfig.perPage.toString()\"\n        [(selected)]=\"currentPerPage\"\n      >\n        <nb-option\n          *ngFor=\"let perPage of perPagesOptions\"\n          (click)=\"setPager(perPage.value)\"\n          value=\"perPage.value\"\n          >{{ perPage.title }}</nb-option\n        >\n      </nb-select>\n    </div>\n  </nb-card-body>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card-body{display:block}.nb-theme-default :host nb-card-body button{display:block}.nb-theme-default :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-default :host .result-from-dialog{flex-direction:column}.nb-theme-default :host .form-input-card nb-card-body{display:block}.nb-theme-dark :host nb-card-body{display:block}.nb-theme-dark :host nb-card-body button{display:block}.nb-theme-dark :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-dark :host .result-from-dialog{flex-direction:column}.nb-theme-dark :host .form-input-card nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body button{display:block}.nb-theme-cosmic :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-cosmic :host .result-from-dialog{flex-direction:column}.nb-theme-cosmic :host .form-input-card nb-card-body{display:block}.nb-theme-corporate :host nb-card-body{display:block}.nb-theme-corporate :host nb-card-body button{display:block}.nb-theme-corporate :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-corporate :host .result-from-dialog{flex-direction:column}.nb-theme-corporate :host .form-input-card nb-card-body{display:block}::ng-deep ng2-st-tbody-edit-delete{display:none;height:0!important}::ng-deep ng2-st-tbody-custom{display:flex;text-align:center}.input-space{margin-top:1rem}.nb-theme-default ng2-smart-table th.ng2-smart-actions-title-add a{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}\n"], components: [{ type: i5.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i5.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i5.NbCardBodyComponent, selector: "nb-card-body" }, { type: i5.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i5.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i5.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i5.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i5.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i10.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }], directives: [{ type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }, { type: i9.NgxPermissionsDirective, selector: "[ngxPermissionsOnly],[ngxPermissionsExcept]", inputs: ["ngxPermissionsOnly", "ngxPermissionsOnlyThen", "ngxPermissionsOnlyElse", "ngxPermissionsExcept", "ngxPermissionsExceptElse", "ngxPermissionsExceptThen", "ngxPermissionsThen", "ngxPermissionsElse", "ngxPermissionsOnlyAuthorisedStrategy", "ngxPermissionsOnlyUnauthorisedStrategy", "ngxPermissionsExceptUnauthorisedStrategy", "ngxPermissionsExceptAuthorisedStrategy", "ngxPermissionsUnauthorisedStrategy", "ngxPermissionsAuthorisedStrategy"], outputs: ["permissionsAuthorized", "permissionsUnauthorized"] }, { type: i5.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }, { type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i5.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i12.TranslatePipe, "titlecase": i11.TitleCasePipe, "async": i11.AsyncPipe } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdDQUFnQyxF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QUUsVUFBVTtZQUN6QixRQUFRLEVBQUUsT0FBTztZQUNqQixjQUFjLEVBQUUsWUFBWTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDOztzSEE5eUJVLHlCQUF5QjswR0FBekIseUJBQXlCLDBTQy9CdEMsODlUQXFTQTsyRkR0UWEseUJBQXlCO2tCQUxyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNuRDttYkFFVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNlLE1BQU07c0JBQTFCLFNBQVM7dUJBQUMsUUFBUTtnQkFDWSxpQkFBaUI7c0JBQS9DLFNBQVM7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2ZXJEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7XG4gIFJlc3RGaWVsZCxcbiAgUkVTVF9GSUVMRF9UWVBFUyxcbiAgUEVSTUlTU0lPTixcbn0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlLCBOYlRhZ0NvbXBvbmVudCB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTFBIQUJFVCwgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFNoYXJlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2g7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9CZWxvbmdUb01hbnknKSBpbnB1dEJlbG9uZ1RvTWFueTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGFscGhhYmVsdDogc3RyaW5nW10gPSBBTFBIQUJFVDtcbiAgZGF0YTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XG4gIGN1cnJlbnRQZXJQYWdlOiBudW1iZXI7XG4gIGlzRmV0Y2hpbmcgPSB0cnVlO1xuICByZXNzb3VyY2VOYW1lID0gJyc7XG4gIGZpbHRlckJ5ID0gJyc7XG4gIGZpbHRlck9wZXJhdG9yID0gRklMVEVSX09QRVJBVE9SUztcbiAgZXhwb3J0QXNDb25maWcgPSB7XG4gICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXG4gICAgZWxlbWVudElkOiAnbXlUYWJsZUVsZW1lbnRJZCcsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcbiAgfTtcbiAgc2VhcmNoSXRlbXMgPSBbXTtcbiAgc2VhcmNoSXRlbSA9ICcnO1xuXG4gIHNob3dDaGVja2JveCA9IGZhbHNlO1xuICBzaG93RGV0YWlscyA9IGZhbHNlO1xuICBvcHRpb25zOiBhbnkgPSB7fTtcbiAgYWxsRmlsdGVyQ29udGFpbnM6IGFueSA9IHt9O1xuICBiZWxvbmdUb1ZhbHVlOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9NYW55OiBhbnkgPSB7fTtcbiAgY29udHJvbHM6IGFueTtcbiAgaXNDaGVja2VkOiBhbnkgPSB7fTtcblxuICBzZWxlY3RlZFJvd3M6IGFueVtdID0gW107XG5cbiAgaXRlbXMgPSBbXG4gICAgeyB0aXRsZTogJ0FsbCBmb3JtYXRzJyB9LFxuICAgIHsgdGl0bGU6ICdDU1YnIH0sXG4gICAgeyB0aXRsZTogJ0VYQ0VMJyB9LFxuICAgIHsgdGl0bGU6ICdQREYnIH0sXG4gIF07XG4gIHBlclBhZ2VzT3B0aW9ucyA9IFtcbiAgICB7IHRpdGxlOiAnNScsIHZhbHVlOiA1IH0sXG4gICAgeyB0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgeyB0aXRsZTogJzIwJywgdmFsdWU6IDIwIH0sXG4gICAgeyB0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXG4gICAgeyB0aXRsZTogJzEwMCcsIHZhbHVlOiAxMDAgfSxcbiAgXTtcblxuICBwZXJtaXNzaW9ucyA9IFtQRVJNSVNTSU9OLkNSRUFURSwgUEVSTUlTU0lPTi5SRUFELCBQRVJNSVNTSU9OLkRFTEVURV07XG5cbiAgZ2V0IFBFUk1JU1NJT04oKSB7XG4gICAgcmV0dXJuIFBFUk1JU1NJT047XG4gIH1cbiAgY3VzdG9tID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlczogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5iTWVudVNlcnZpY2U6IE5iTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBleHBvcnRTZXJ2aWNlOiBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBwdWJsaWMgcmVzdFNoYXJlOiBSZXN0U2hhcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5KSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5Py5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQudmFsdWVdID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zLnB1c2goe1xuICAgICAgICBmaWVsZDogJycsXG4gICAgICAgIG9wZXJhdG9yOiAnJyxcbiAgICAgICAgdGVybXM6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGVyUGFnZSA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlO1xuXG4gICAgdGhpcy5nZXRMaXN0KCk7XG5cbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHtcbiAgICAgIHRpdGxlOiAnY2hlY2snLFxuICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiAoY2VsbCwgcm93KSA9PiAoe1xuICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrOiAoZXZlbnQsIHJvd0RhdGEpID0+XG4gICAgICAgICAgdGhpcy5vbkNoZWNrYm94Q2xpY2soZXZlbnQsIHJvd0RhdGEpLFxuICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5maW5kKChlbHQpID0+IGVsdD8uaWQgPT0gcm93Py5pZCkgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgY2VsbCxcbiAgICAgICAgcm93LFxuICAgICAgfSksXG4gICAgICBlZGl0b3I6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICByZW5kZXJDb21wb25lbnQ6IFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQnKSxcbiAgICAgICAgbWFwKCh7IGl0ZW06IHsgdGl0bGUgfSB9KSA9PiB0aXRsZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgICBjYXNlICdFWENFTCc6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1BERic6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDU1YnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0NzdigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QWxsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXN0b20gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICBhcGk6IHBlcm1pc3Npb24uZmllbGRLZXkuYXBpLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG5cbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbi50eXBlID09PSBQRVJNSVNTSU9OLlJFQUQpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24udHlwZSA9PT0gUEVSTUlTU0lPTi5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPlwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b20nLCBjdXN0b20pO1xuXG4gICAgICAgICAgICAgIHRoaXMuY3VzdG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tLFxuICAgICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZXI6IHtcbiAgICAgICAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICAgICAgICAgICAgYWRkOiB7XG4gICAgICAgICAgICAgICAgICBhZGRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1wbHVzXCIgPjwvaT4nLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nLFxuICAgICAgICAgICAgICAgICAgY29uZmlybUNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgaGlkZVN1YkhlYWRlcjogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmhpZGVBZGRTdWJIZWFkZXIsXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBjdXN0b206IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZXI6IHtcbiAgICAgICAgICBwZXJQYWdlOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIiA+PC9pPicsXG4gICAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+JyxcbiAgICAgICAgICBjb25maXJtQ3JlYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTaG93Q2hlY2tib3goKSB7XG4gICAgdGhpcy5zaG93Q2hlY2tib3ggPSAhdGhpcy5zaG93Q2hlY2tib3g7XG4gICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICB9XG5cbiAgb25EZWxldGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiBldmVudC5kYXRhLFxuICAgICAgICB0aXRsZTogJ1NVUFBSRVNTSU9OJyxcbiAgICAgICAgbXVsdGlTdXBwcmVzczogZmFsc2UsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkRlbGV0ZUFsbENvbmZpcm0oKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiB0aGlzLnNlbGVjdGVkUm93cyxcbiAgICAgICAgbXVsdGlTdXBwcmVzczogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdUT1VUIFNVUFBSSU1FUicsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGROZXdFbnRpdHkoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1hZGRgKTtcbiAgfVxuXG4gIGRldGFpbEVudGl0eShldmVudCkge1xuICAgIGlmICh0aGlzLnJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnBlcm1pc3Npb25zU2VydmljZS5oYXNQZXJtaXNzaW9uKFBFUk1JU1NJT04uUkVBRCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tib3hDbGljayhldmVudDogYW55LCByb3c6IGFueSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdykgPT09IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZSh0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyksIDEpO1xuICAgIH1cbiAgfVxuICBzZWxlY3RBbGxSb3dzKCkge1xuICAgIHRoaXMuc291cmNlLmdldEFsbCgpLnRoZW4oKHJvd3MpID0+IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoICE9PSByb3dzPy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc291cmNlLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTWF0VGFibGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGlmICghdGhpcy5zaG93Q2hlY2tib3gpIHtcbiAgICAgIGNvbHVubXNbJ2lzQ2hlY2tlZCddID0gdGhpcy5pc0NoZWNrZWQ7XG4gICAgfVxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlZGl0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjb2x1bm1zO1xuICB9XG5cbiAgZ2V0TGlzdChwYWdlID0gbnVsbCwgcGVyUGFnZSA9IG51bGwpIHtcbiAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIodHJ1ZSk7XG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7IC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsIHBhZ2UgfTtcbiAgICB9XG4gICAgaWYgKHBlclBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7XG4gICAgICAgIC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgIHBlcl9wYWdlOiBwZXJQYWdlLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtcylcbiAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgKGN1bXVsLCBpdGVtKSA9PlxuICAgICAgICAgICAgICBjdW11bCArXG4gICAgICAgICAgICAgIGl0ZW0gK1xuICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNbaXRlbV0gK1xuICAgICAgICAgICAgICAnLCcsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcbiAgICAgICAgICAuc2xpY2UoMCwgLTEpLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0YXMgPSBldmVudC5uZXdEYXRhO1xuICAgIGNvbnN0IHNhdmVCZWxvbmdUb21hbnkgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlkpIHtcbiAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5wdXNoKHtcbiAgICAgICAgICByZXNvdXJjZXM6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICBwaXZvdDogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnBpdm90TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBkYXRhc1tlbHQubmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAuYWRkUmVzb3VyY2VzKHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLCB7IC4uLmRhdGFzLCB1c2VyX2lkOiAxIH0pXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgIGVsZW1lbnQucGl2b3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25DdXN0b20oZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNvbmZpcm0oZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RldGFpbCc6XG4gICAgICAgIHRoaXMuZGV0YWlsRW50aXR5KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0RnVsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXMuZ2V0UmVzb3VyY2VzKHtcbiAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9FeGNlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCAvLyB0aXRsZVxuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQsIGluZGljZSkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgdWR0LmRhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX2V4Y2VsJyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb1BkZigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlciA9IFtdO1xuICAgIGxldCBlbHQgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBoZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IFtdO1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0LnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWxlVGl0bGU6IHN0cmluZyA9IHRoaXMucmVzb3VyY2UubmFtZTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb1BkZihcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjdXN0b21EYXRhLFxuICAgICAgICAncmVzdF9maWxlX3BkZicsXG4gICAgICAgIGZpbGVUaXRsZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvQ3N2KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgY29uc3QgaGVhZGVyID0gW107XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGhlYWRlci5wdXNoKGVsdC5sYWJlbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9Dc3YoaGVhZGVyLCBjdXN0b21EYXRhLCAncmVzdF9maWxlX2NzdicpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0QWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBwZGZBbmRDc3ZIZWFkZXIgPSBbXTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuICAgIGNvbnN0IGNzdkRhdGEgPSBbXTtcbiAgICBjb25zdCBwZGZEYXRhID0gW107XG4gICAgbGV0IGVsdFBERiA9IFtdO1xuICAgIGxldCBlbHRDU1YgPSB7fTtcbiAgICBsZXQgZWx0RVhDRUwgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXhjZWxEYXRhOiBhbnkgPSB7XG4gICAgICBkYXRhOiBbeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIHNoZWV0SGVhZGVyXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgLy9DU1ZcbiAgICAgICAgZWx0Q1NWID0ge307XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRDU1Zbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNzdkRhdGEucHVzaChlbHRDU1YpO1xuICAgICAgICAvL1BERlxuICAgICAgICBlbHRQREYgPSBbXTtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdFBERi5wdXNoKGVsZW1lbnRbcm93XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwZGZEYXRhLnB1c2goZWx0UERGKTtcbiAgICAgICAgLy9FWENFTFxuICAgICAgICBlbHRFWENFTCA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWx0RVhDRUxbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGVsZW1lbnRbc2hlZXRIZWFkZXJba2V5c1tpbmRleF1dXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4Y2VsRGF0YS5kYXRhLnB1c2goZWx0RVhDRUwpO1xuICAgICAgICBlZGF0YS5wdXNoKGV4Y2VsRGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5nZW5lcmF0ZVppcChwZGZBbmRDc3ZIZWFkZXIsIHBkZkRhdGEsIGNzdkRhdGEsIGVkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vRmlsdGVyXG5cbiAgc2V0UGFnZXIoc2V0UGFnZXIpIHtcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdpbmcoMSwgc2V0UGFnZXIsIHRydWUpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHNlbGVjdEZpbHRlckJ5KGRhdGEsIGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgPSBkYXRhWyd2YWx1ZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZSA9IGRhdGFbJ3Jlc291cmNlRmllbGROYW1lJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ucmVzb3VyY2UgPSBkYXRhWydyZXNvdXJjZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnJlc3NvdXJjZUZpbHRlck5hbWUgPSBkYXRhWydyZXNzb3VyY2VGaWx0ZXJOYW1lJ107XG4gICAgaWYgKGRhdGFbJ3ZhbHVlJ10gPT09ICdpZCcpIHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gZGF0YT8ucmVzb3VyY2U/LmFkZENvbmZpZztcbiAgICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgYXBpOiByZXNvdXJjZS5hcGksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMub3B0aW9uc1tkYXRhWyd2YWx1ZSddXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgIHhbJ2lkJ11cbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbJ2lkJ10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tkYXRhWyd2YWx1ZSddXSA9IG9mKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2RhdGFbJ3ZhbHVlJ11dXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdE9wZXJhdG9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLm9wZXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBvbkZpbHRlcih2YWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS50ZXJtcyA9IHZhbD8udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbSA9IHZhbD8udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHsgZmllbGQ6ICcnLCBvcGVyYXRvcjogJycsIHRlcm1zOiAnJyB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJNYW55KFxuICAgIHZhbHVlOiBhbnksXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBvcHRpb25zID0gJ2JlbG9uZ1RvTWFueU9wdGlvbnMnXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICYmIHRoaXMub3B0aW9uc1snaWQnXT8ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1snaWQnXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgOiAnaWQnLFxuICAgICAgICBdLnNvbWUoKGVsdCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtvcHRpb25WYWx1ZVtlbHRdPy50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICBgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucyh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyTWFueShmaWx0ZXJTdHJpbmcsIGluZGV4KSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zWydpZCddID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cblxuICBvblRhZ1JlbW92ZUJlbG9uZyh0YWdUb1JlbW92ZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcbiAgICBjZWxsRGF0YS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHRbJ25hbWUnXSAhPSB0YWdUb1JlbW92ZS50ZXh0KSBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFsnaWQnXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuICAvL2JlbG9uZ1RvTWFueU9wdGlvbnNcbiAgb25DaG9vc2UoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuICAgICAgaWYgKHNlYXJjaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbmV3RWx0ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBzYXZlUmVsYXRlZElkTmFtZTogZXZlbnQuaWQsXG4gICAgICAgICAgc2F2ZVJlc291cmNlSWROYW1lOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudFtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFsnaWQnXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSAnJztcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQ/LmZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgIGxldCB0YWIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuYmVsb25nVG9NYW55WydpZCddKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRhYi5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgbGlzdElkID0gdGFiLm1hcCgoZWx0OiBhbnkpID0+IGVsdD8uaWQpLmpvaW4oJywnKTtcbiAgICAgICAgICBwYXJhbXNbYCR7ZWxlbWVudD8ucmVzc291cmNlRmlsdGVyTmFtZX0taW5gXSA9IGAke2xpc3RJZH1gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudD8uZmllbGQgIT0gJycgJiYgZWxlbWVudD8udGVybXMgIT0gJycpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudD8ub3BlcmF0b3IgIT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJhbXNbXG4gICAgICAgICAgICAgIGVsZW1lbnQ/LmZpZWxkICsgJy0nICsgZWxlbWVudD8ub3BlcmF0b3JcbiAgICAgICAgICAgIF0gPSBgJHtlbGVtZW50Py50ZXJtc31gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNbZWxlbWVudD8uZmllbGRdID0gYCR7ZWxlbWVudD8udGVybXN9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2ggPSBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgY3VtdWwgKyBpdGVtICsgJz0nICsgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICsgJywnLFxuICAgICAgICAnJ1xuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgIHNlYXJjaCArPSAnJic7XG4gICAgfVxuICAgIHNlYXJjaCArPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAucmVkdWNlKChjdW11bCwgaXRlbSkgPT4gY3VtdWwgKyBpdGVtICsgJz0nICsgcGFyYW1zW2l0ZW1dICsgJyYnLCAnJylcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIHNlYXJjaCxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5iLWNhcmQgc3RhdHVzPVwicHJpbWFyeVwiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7eyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcudGl0bGUgfX1cbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nSWY9XCJzaG93Q2hlY2tib3hcIj5cbiAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MoKVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID09IHRoaXMuc291cmNlLmNvdW50KClcIlxuICAgICAgICAgIC8+U2VsZWN0aW9ubmVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNDBweFwiPlxuICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IChjbGljayk9XCJ0b2dnbGVTaG93Q2hlY2tib3goKVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInNob3dDaGVja2JveFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dFwiXG4gICAgICAgICAgZ2hvc3RcbiAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJkb3dubG9hZC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cImFkZE5ld0VudGl0eSgpXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlQWxsQ29uZmlybSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxuICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IHJnYigyMzgsIDEzMCwgMTU3KVwiXG4gICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5neFBlcm1pc3Npb25zT25seT1cInBlcm1pc3Npb25zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkNSRUFURVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImNvbnRyb2xcIiAoY2xpY2spPVwiYWRkTmV3RW50aXR5KClcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLWNpcmNsZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmd4UGVybWlzc2lvbnNPbmx5PVwiUEVSTUlTU0lPTi5ERUxFVEVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGVBbGxDb25maXJtKClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImNvbG9yOiByZ2IoMjM4LCAxMzAsIDE1NylcIlxuICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgIG5iQ29udGV4dE1lbnVUYWc9XCJteS1jb250ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IFwicmVzdC1saXN0LmV4cG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPiAtLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWJvZHlcbiAgICBbbmJTcGlubmVyXT1cInRoaXMucmVzdFNoYXJlLmxpc3RMb2FkZXJcIlxuICAgIG5iU3Bpbm5lclNpemU9XCJsYXJnZVwiXG4gICAgbmJTcGlubmVyU3RhdHVzPVwicHJpbWFyeVwiXG4gID5cbiAgICA8IS0tIFJlc3Qtc2VhcmNoIGltcGxlbWVudCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTVcIiAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJ0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyLmZpbHRlckJ5Lmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWFyY2ggb2Ygc2VhcmNoSXRlbXM7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgPCEtLSBTZWxlY3Qgd2l0aCBmaWx0ZXIgYnkgLS0+XG4gICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0LmZpbHRlclBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwic2VsZWN0RmlsdGVyQnkoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyIG9mIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnlcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgID57eyBmaWx0ZXJbXCJuYW1lXCJdIHwgdGl0bGVjYXNlIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5vcGVyYXRvcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RPcGVyYXRvcigkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3BlcmF0b3Igb2YgZmlsdGVyT3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wZXJhdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBvcGVyYXRvci5uYW1lIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTEyIGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICdjb2wtMTInOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyID09IG51bGxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbHRlcigkZXZlbnQudGFyZ2V0LCBpbmRleClcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID09PSAnaWQnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55WydpZCddXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVsnbmFtZSddXCJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZhYmxlXG4gICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICNhdXRvQmVsb25nVG9NYW55XG4gICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJiZWxvbmdUb0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIidpZCdcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cblxuICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25DaG9vc2UoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1snaWQnXSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0yIGNvbC14cy00IGlucHV0LXNwYWNlIHJvd1wiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZnVsbFdpZHRoIHN0YXR1cz1cInByaW1hcnlcIiAoY2xpY2spPVwic3RhcnRTZWFyY2goKVwiPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwic2VhcmNoLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0yIGNvbC14cy00IGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT0gMDsgZWxzZSBlbHNlQmxvY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkRmllbGRTZWFyY2goKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMSBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVGaWVsZFNlYXJjaChpbmRleClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cIm1pbnVzLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gPG5nMi1zbWFydC10YWJsZVxuICAgICpuZ0lmPVwic2hvd0NoZWNrYm94XCJcbiAgICAgIFtzZXR0aW5nc109XCJ7Li4uc2V0dGluZ3MsIGNvbHVtbnM6IHsgLi4uc2V0dGluZ3MuY29sdW1ucywgaXNDaGVja2VkIH0gfVwiXG4gICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAoY3JlYXRlQ29uZmlybSk9XCJvbkNyZWF0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgID5cbiAgICA8L25nMi1zbWFydC10YWJsZT4gLS0+XG5cbiAgICA8IS0tICpuZ0lmPVwiIXNob3dDaGVja2JveFwiIC0tPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGVcbiAgICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgICAgICAqbmdJZj1cImN1c3RvbVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPT09IDBcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGVcbiAgICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uZzItc21hcnQtdGFibGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtXCJcbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBteC0yXCI+e3sgXCJvcHRpb25zLnBlcl9wYWdlXCIgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPG5iLXNlbGVjdFxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLnRvU3RyaW5nKClcIlxuICAgICAgICBbKHNlbGVjdGVkKV09XCJjdXJyZW50UGVyUGFnZVwiXG4gICAgICA+XG4gICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgcGVyUGFnZSBvZiBwZXJQYWdlc09wdGlvbnNcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRQYWdlcihwZXJQYWdlLnZhbHVlKVwiXG4gICAgICAgICAgdmFsdWU9XCJwZXJQYWdlLnZhbHVlXCJcbiAgICAgICAgICA+e3sgcGVyUGFnZS50aXRsZSB9fTwvbmItb3B0aW9uXG4gICAgICAgID5cbiAgICAgIDwvbmItc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtYm9keT5cbjwvbmItY2FyZD5cbiJdfQ==