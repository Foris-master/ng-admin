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
        this.items = [];
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
    initExportItems() {
        if (this.resource.listConfig.exportResource) {
            this.items = this.resource.listConfig.exportConfig.formats.map((item) => ({
                title: item,
            }));
        }
    }
    ngOnInit() {
        this.initExportItems();
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'export-context'), map(({ item: { title } }) => title))
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
    remplacerKey(tableau, correspondances) {
        tableau.forEach(objet => {
            correspondances.forEach(({ key, label }) => {
                const valeur = _.get(objet, key);
                if (valeur !== undefined) {
                    _.set(objet, label, valeur);
                    _.unset(objet, key);
                }
            });
        });
        return tableau;
    }
    getFullData() {
        return this.serviceRestResources.getResources({
            api: this.resource.listConfig.api,
            queryParams: Object.assign({ should_paginate: false }, this.resource.listConfig.queryParams),
        });
    }
    exportToExcel() {
        const colunms = {};
        const sheetHeader = {};
        this.resource.listConfig.exportConfig.columnFile
            .forEach((elt) => {
            colunms[elt.label] = {
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
        this.getFullData().subscribe((resp) => {
            const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);
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
        let elt = [];
        const header = this.resource.listConfig.exportConfig.columnFile.map((item) => item.label);
        this.getFullData().subscribe((resp) => {
            const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);
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
        let elt = {};
        const header = this.resource.listConfig.exportConfig.columnFile.map((item) => item.label);
        this.getFullData().subscribe((resp) => {
            const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);
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
        const sheetHeader = {};
        const csvData = [];
        const pdfData = [];
        let eltPDF = [];
        let eltCSV = {};
        let eltEXCEL = {};
        this.resource.listConfig.exportConfig.columnFile.forEach((elt) => {
            colunms[elt.label] = {
                title: elt.label,
            };
        });
        const pdfAndCsvHeader = this.resource.listConfig.exportConfig.columnFile.map((item) => item.label);
        Object.entries(colunms).forEach(([key, value], index) => {
            sheetHeader[this.alphabelt[index]] = key;
        });
        const excelData = {
            data: [{ A: 'Rest Excel export' }, sheetHeader],
            skipHeader: true,
        };
        const keys = Object.keys(sheetHeader);
        const edata = [];
        this.getFullData().subscribe((resp) => {
            const response = this.remplacerKey(resp, this.resource.listConfig.exportConfig.columnFile);
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
RestResourceListComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.1.5", type: RestResourceListComponent, selector: "ngx-rest-resource-list", inputs: { resource: "resource" }, viewQueries: [{ propertyName: "search", first: true, predicate: ["search"], descendants: true }, { propertyName: "inputBelongToMany", first: true, predicate: ["autoBelongToMany"], descendants: true }], ngImport: i0, template: "<nb-card status=\"primary\">\n  <nb-card-header>\n    <div class=\"row d-flex justify-content-between\">\n      <div class=\"d-flex align-items-center\">\n        <h6 class=\"text-white\">\n          {{ this.resource.listConfig.title }}\n        </h6>\n      </div>\n\n      <div class=\"\" *ngIf=\"showCheckbox\">\n        <button nbButton ghost status=\"control\" (click)=\"selectAllRows()\">\n          <input\n            class=\"mr-2\"\n            type=\"checkbox\"\n            [checked]=\"this.selectedRows?.length == this.source.count()\"\n          />{{ \"rest-detail.select\" | translate }}\n        </button>\n      </div>\n\n      <div class=\"\" style=\"height: 40px\">\n        <button\n          nbButton\n          ghost\n          nbTooltip=\"{{ 'rest-detail.select' | translate }}\"\n          nbTooltipPlacement=\"top\"\n          (click)=\"toggleShowCheckbox()\"\n        >\n          <input type=\"checkbox\" [(ngModel)]=\"showCheckbox\" />\n        </button>\n\n        <ng-container *ngIf=\"resource.listConfig.exportResource === true\">\n          <button\n            nbButton\n            ghost\n            [nbContextMenu]=\"items\"\n            nbContextMenuTag=\"export-context\"\n            status=\"control\"\n          >\n            <nb-icon icon=\"download-outline\"></nb-icon>\n          </button>\n        </ng-container>\n\n        <ng-container *ngIf=\"resource.permissions.length === 0\">\n          <button\n            nbButton\n            ghost\n            status=\"control\"\n            nbTooltip=\"{{ 'rest-list.add' | translate }}\"\n            nbTooltipPlacement=\"top\"\n            (click)=\"addNewEntity()\"\n          >\n            <span>{{ \"add\" | translate }}</span>\n            <nb-icon icon=\"plus-circle\"></nb-icon>\n          </button>\n\n          <button\n            nbButton\n            *ngIf=\"this.selectedRows?.length > 0\"\n            ghost\n            nbTooltip=\"{{ 'rest-list.deleteAllSelect' | translate }}\"\n            nbTooltipPlacement=\"top\"\n            status=\"control\"\n            (click)=\"onDeleteAllConfirm()\"\n          >\n            <nb-icon\n              icon=\"trash\"\n              color=\"danger\"\n              style=\"color: rgb(238, 130, 157)\"\n            ></nb-icon>\n          </button>\n        </ng-container>\n\n        <ng-container *ngIf=\"resource.permissions.length > 0\">\n          <ng-container *ngxPermissionsOnly=\"permissions\">\n            <ng-container *ngxPermissionsOnly=\"PERMISSION.CREATE\">\n              <button nbButton ghost status=\"control\" (click)=\"addNewEntity()\">\n                <span>{{ \"add\" | translate }}</span>\n                <nb-icon icon=\"plus-circle\"></nb-icon>\n              </button>\n            </ng-container>\n\n            <ng-container *ngxPermissionsOnly=\"PERMISSION.DELETE\">\n              <button\n                nbButton\n                *ngIf=\"this.selectedRows?.length > 0\"\n                ghost\n                status=\"control\"\n                (click)=\"onDeleteAllConfirm()\"\n              >\n                <nb-icon\n                  icon=\"trash\"\n                  color=\"danger\"\n                  style=\"color: rgb(238, 130, 157)\"\n                ></nb-icon>\n              </button>\n            </ng-container>\n          </ng-container>\n        </ng-container>\n\n        <!-- <button\n          nbButton\n          status=\"primary\"\n          [nbContextMenu]=\"items\"\n          nbContextMenuTag=\"my-context\"\n        >\n          {{ \"rest-list.export\" | translate }}\n        </button> -->\n      </div>\n    </div>\n  </nb-card-header>\n\n  <nb-card-body\n    [nbSpinner]=\"this.restShare.listLoader\"\n    nbSpinnerSize=\"large\"\n    nbSpinnerStatus=\"primary\"\n  >\n    <!-- Rest-search implement -->\n    <div class=\"row mb-5\" *ngIf=\"this.resource.listConfig.searchFilter\">\n      <ng-container\n        *ngIf=\"this.resource.listConfig.searchFilter.filterBy.length > 0\"\n      >\n        <ng-container *ngFor=\"let search of searchItems; let index = index\">\n          <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n            <!-- Select with filter by -->\n            <nb-select\n              [placeholder]=\"'rest-list.filterPlaceholder' | translate\"\n              fullWidth\n              (selectedChange)=\"selectFilterBy($event, index)\"\n            >\n              <nb-option\n                *ngFor=\"\n                  let filter of this.resource.listConfig.searchFilter.filterBy\n                \"\n                [value]=\"filter\"\n                >{{ filter[\"name\"] | titlecase }}</nb-option\n              >\n            </nb-select>\n          </div>\n          <ng-container *ngIf=\"this.searchItems[index].field !== 'id'\">\n            <div class=\"col-lg-3 col-md-6 col-xs-12 input-space\">\n              <nb-select\n                [placeholder]=\"'rest-list.operator' | translate\"\n                fullWidth\n                (selectedChange)=\"selectOperator($event, index)\"\n              >\n                <nb-option\n                  *ngFor=\"let operator of filterOperator\"\n                  [value]=\"operator.value\"\n                >\n                  {{ operator.name | translate }}\n                </nb-option>\n              </nb-select>\n            </div>\n          </ng-container>\n\n          <div\n            *ngIf=\"this.searchItems[index].field !== 'id'\"\n            class=\"col-lg-4 col-md-12 col-xs-12 input-space\"\n            [ngClass]=\"{\n              'col-12': this.resource.listConfig.searchFilter == null\n            }\"\n          >\n            <input\n              nbInput\n              (input)=\"onFilter($event.target, index)\"\n              fullWidth\n              [placeholder]=\"'rest-list.searchPlaceholder' | translate\"\n              type=\"text\"\n            />\n          </div>\n          <div [formGroup]=\"form\">\n            <ng-container *ngIf=\"this.searchItems[index].field === 'id'\">\n              <div class=\"input-space\">\n                <!-- <label class=\"label\">{{ field.label | titlecase }}</label> -->\n                <nb-tag-list (tagRemove)=\"onTagRemoveBelong($event)\">\n                  <nb-tag\n                    *ngFor=\"let tree of belongToMany['id']\"\n                    [text]=\"tree['name']\"\n                    removable\n                  ></nb-tag>\n                  <input\n                    type=\"text\"\n                    nbTagInput\n                    #autoBelongToMany\n                    [nbAutocomplete]=\"belongToField\"\n                    (keyup)=\"filterInput($event, index)\"\n                    [placeholder]=\"\n                      this.searchItems[index].fieldName\n                        ? this.searchItems[index].fieldName\n                        : 'id'\n                    \"\n                    [formControlName]=\"'id'\"\n                    fullWidth\n                  />\n                </nb-tag-list>\n\n                <nb-autocomplete\n                  #belongToField\n                  (selectedChange)=\"onChoose($event, index)\"\n                >\n                  <nb-option\n                    *ngFor=\"let option of allFilterContains['id'] | async\"\n                    [value]=\"option\"\n                  >\n                    {{\n                      option[\n                        this.searchItems[index].fieldName\n                          ? this.searchItems[index].fieldName\n                          : \"id\"\n                      ]\n                    }}\n                  </nb-option>\n                </nb-autocomplete>\n              </div>\n            </ng-container>\n          </div>\n\n          <div\n            class=\"col-lg-1 col-md-2 col-xs-4 input-space row\"\n            *ngIf=\"index == 0\"\n          >\n            <button\n              nbButton\n              fullWidth\n              nbTooltip=\"{{ 'rest-list.search' | translate }}\"\n              nbTooltipPlacement=\"top\"\n              status=\"primary\"\n              (click)=\"startSearch()\"\n            >\n              <nb-icon icon=\"search-outline\"></nb-icon>\n            </button>\n          </div>\n          <div\n            class=\"col-lg-1 col-md-2 col-xs-4 input-space\"\n            *ngIf=\"index == 0; else elseBlock\"\n          >\n            <button\n              nbButton\n              fullWidth\n              nbTooltip=\"{{ 'rest-list.addSearch' | translate }}\"\n              nbTooltipPlacement=\"top\"\n              status=\"primary\"\n              (click)=\"addFieldSearch()\"\n            >\n              <nb-icon icon=\"plus-outline\"></nb-icon>\n            </button>\n          </div>\n          <ng-template #elseBlock>\n            <div class=\"col-lg-1 input-space\">\n              <button\n                nbButton\n                fullWidth\n                nbTooltip=\"{{ 'rest-list.removeSearch' | translate }}\"\n                nbTooltipPlacement=\"top\"\n                status=\"danger\"\n                (click)=\"removeFieldSearch(index)\"\n              >\n                <nb-icon icon=\"minus-outline\"></nb-icon>\n              </button>\n            </div>\n          </ng-template>\n        </ng-container>\n      </ng-container>\n    </div>\n\n    <!-- <ng2-smart-table\n    *ngIf=\"showCheckbox\"\n      [settings]=\"{...settings, columns: { ...settings.columns, isChecked } }\"\n      [source]=\"source\"\n      (deleteConfirm)=\"onDeleteConfirm($event)\"\n      (createConfirm)=\"onCreateConfirm($event)\"\n      (custom)=\"onCustom($event)\"\n      (userRowSelect)=\"detailEntity($event)\"\n    >\n    </ng2-smart-table> -->\n\n    <!-- *ngIf=\"!showCheckbox\" -->\n\n    <ng-container *ngIf=\"resource.permissions.length > 0\">\n      <ng2-smart-table\n        [settings]=\"settings\"\n        [source]=\"source\"\n        (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (createConfirm)=\"onCreateConfirm($event)\"\n        (custom)=\"onCustom($event)\"\n        (userRowSelect)=\"detailEntity($event)\"\n        *ngIf=\"custom\"\n      >\n      </ng2-smart-table>\n    </ng-container>\n\n    <ng-container *ngIf=\"resource.permissions.length === 0\">\n      <ng2-smart-table\n        [settings]=\"settings\"\n        [source]=\"source\"\n        (deleteConfirm)=\"onDeleteConfirm($event)\"\n        (createConfirm)=\"onCreateConfirm($event)\"\n        (custom)=\"onCustom($event)\"\n        (userRowSelect)=\"detailEntity($event)\"\n      >\n      </ng2-smart-table>\n    </ng-container>\n    <div\n      class=\"row align-items-center justify-content-end\"\n      style=\"margin-top: 1rem\"\n    >\n      <label class=\"label mx-2\">{{ \"options.per_page\" | translate }}</label>\n      <nb-select\n        [placeholder]=\"resource.listConfig.perPage.toString()\"\n        [(selected)]=\"currentPerPage\"\n      >\n        <nb-option\n          *ngFor=\"let perPage of perPagesOptions\"\n          (click)=\"setPager(perPage.value)\"\n          value=\"perPage.value\"\n          >{{ perPage.title }}</nb-option\n        >\n      </nb-select>\n    </div>\n  </nb-card-body>\n</nb-card>\n", styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default :host nb-card-body{display:block}.nb-theme-default :host nb-card-body button{display:block}.nb-theme-default :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-default :host .result-from-dialog{flex-direction:column}.nb-theme-default :host .form-input-card nb-card-body{display:block}.nb-theme-dark :host nb-card-body{display:block}.nb-theme-dark :host nb-card-body button{display:block}.nb-theme-dark :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-dark :host .result-from-dialog{flex-direction:column}.nb-theme-dark :host .form-input-card nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body{display:block}.nb-theme-cosmic :host nb-card-body button{display:block}.nb-theme-cosmic :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-cosmic :host .result-from-dialog{flex-direction:column}.nb-theme-cosmic :host .form-input-card nb-card-body{display:block}.nb-theme-corporate :host nb-card-body{display:block}.nb-theme-corporate :host nb-card-body button{display:block}.nb-theme-corporate :host nb-card-body button:last-child{margin-bottom:0}.nb-theme-corporate :host .result-from-dialog{flex-direction:column}.nb-theme-corporate :host .form-input-card nb-card-body{display:block}::ng-deep ng2-st-tbody-edit-delete{display:none;height:0!important}::ng-deep ng2-st-tbody-custom{display:flex;text-align:center}.input-space{margin-top:1rem}.nb-theme-default ng2-smart-table th.ng2-smart-actions-title-add a{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}\n"], components: [{ type: i5.NbCardComponent, selector: "nb-card", inputs: ["status", "accent", "size"] }, { type: i5.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i5.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i5.NbIconComponent, selector: "nb-icon", inputs: ["config", "icon", "pack", "status", "options"] }, { type: i5.NbCardBodyComponent, selector: "nb-card-body" }, { type: i5.NbSelectComponent, selector: "nb-select", inputs: ["size", "status", "shape", "appearance", "placeholder", "optionsOverlayOffset", "scrollStrategy", "outline", "filled", "hero", "disabled", "fullWidth", "compareWith", "selected", "multiple", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i5.NbOptionComponent, selector: "nb-option", inputs: ["disabled", "value"], outputs: ["selectionChange"] }, { type: i5.NbTagListComponent, selector: "nb-tag-list", inputs: ["size", "tabIndex", "role", "multiple"], outputs: ["tagRemove"], exportAs: ["nbTagList"] }, { type: i5.NbTagComponent, selector: "nb-tag", inputs: ["appearance", "status", "size", "role", "selected", "removable", "text"], outputs: ["remove", "selectedChange"], exportAs: ["nbTag"] }, { type: i5.NbAutocompleteComponent, selector: "nb-autocomplete", inputs: ["size", "activeFirst", "handleDisplayFn", "optionsListClass", "optionsPanelClass"], outputs: ["selectedChange"] }, { type: i10.Ng2SmartTableComponent, selector: "ng2-smart-table", inputs: ["settings", "source"], outputs: ["rowSelect", "rowDeselect", "userRowSelect", "delete", "edit", "create", "custom", "deleteConfirm", "editConfirm", "createConfirm", "rowHover"] }], directives: [{ type: i11.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i5.NbTooltipDirective, selector: "[nbTooltip]", inputs: ["nbTooltipPlacement", "nbTooltipTrigger", "nbTooltipOffset", "nbTooltipAdjustment", "nbTooltipClass", "nbTooltipIcon", "nbTooltipStatus", "nbTooltip"], outputs: ["nbTooltipShowStateChange"], exportAs: ["nbTooltip"] }, { type: i1.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.NbContextMenuDirective, selector: "[nbContextMenu]", inputs: ["nbContextMenuAdjustment", "nbContextMenuTrigger", "nbContextMenuPlacement", "nbContextMenuTag", "nbContextMenu", "nbContextMenuClass"] }, { type: i9.NgxPermissionsDirective, selector: "[ngxPermissionsOnly],[ngxPermissionsExcept]", inputs: ["ngxPermissionsOnly", "ngxPermissionsOnlyThen", "ngxPermissionsOnlyElse", "ngxPermissionsExcept", "ngxPermissionsExceptElse", "ngxPermissionsExceptThen", "ngxPermissionsThen", "ngxPermissionsElse", "ngxPermissionsOnlyAuthorisedStrategy", "ngxPermissionsOnlyUnauthorisedStrategy", "ngxPermissionsExceptUnauthorisedStrategy", "ngxPermissionsExceptAuthorisedStrategy", "ngxPermissionsUnauthorisedStrategy", "ngxPermissionsAuthorisedStrategy"], outputs: ["permissionsAuthorized", "permissionsUnauthorized"] }, { type: i5.NbSpinnerDirective, selector: "[nbSpinner]", inputs: ["nbSpinnerStatus", "nbSpinnerSize", "nbSpinner", "nbSpinnerMessage"] }, { type: i11.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i11.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i5.NbTagInputDirective, selector: "input[nbTagInput]", inputs: ["separatorKeys"], outputs: ["tagAdd"], exportAs: ["nbTagInput"] }, { type: i5.NbAutocompleteDirective, selector: "input[nbAutocomplete]", inputs: ["overlayOffset", "scrollStrategy", "nbAutocomplete", "focusInputOnValueChange", "customOverlayHost"] }, { type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i1.FormControlName, selector: "[formControlName]", inputs: ["disabled", "formControlName", "ngModel"], outputs: ["ngModelChange"] }], pipes: { "translate": i12.TranslatePipe, "titlecase": i11.TitleCasePipe, "async": i11.AsyncPipe } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE9BQU8sRUFBNEIsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQ0FBZ0Ms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LEVBQUU7WUFDaEIsTUFBTSxJQUFJLEdBQUcsQ0FBQztTQUNmO1FBQ0QsTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzFCLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDO2FBQ3BFLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUM1QyxRQUFRLEVBQ04sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVc7Z0JBQ2xDLEdBQUc7Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsR0FBRztnQkFDNUIsR0FBRztnQkFDSCxNQUFNO1lBQ1IsT0FBTyxFQUFFLE1BQU07WUFDZixZQUFZLEVBQUUsTUFBTTtZQUNwQixhQUFhLEVBQUUsVUFBVTtZQUN6QixRQUFRLEVBQUUsT0FBTztZQUNqQixjQUFjLEVBQUUsWUFBWTtTQUM3QixDQUFDLENBQUM7SUFDTCxDQUFDOztzSEFuMEJVLHlCQUF5QjswR0FBekIseUJBQXlCLDBTQy9CdEMseTdWQWlVQTsyRkRsU2EseUJBQXlCO2tCQUxyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx3QkFBd0I7b0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNuRDttYkFHVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNlLE1BQU07c0JBQTFCLFNBQVM7dUJBQUMsUUFBUTtnQkFDWSxpQkFBaUI7c0JBQS9DLFNBQVM7dUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2ZXJEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7XG4gIFJlc3RGaWVsZCxcbiAgUkVTVF9GSUVMRF9UWVBFUyxcbiAgUEVSTUlTU0lPTixcbn0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlLCBOYlRhZ0NvbXBvbmVudCB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTFBIQUJFVCwgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFNoYXJlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmd4UGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnbmd4LXBlcm1pc3Npb25zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtcmVzb3VyY2UtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIHJlc291cmNlOiBSZXN0UmVzb3VyY2U7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaCcpIHNlYXJjaDtcbiAgQFZpZXdDaGlsZCgnYXV0b0JlbG9uZ1RvTWFueScpIGlucHV0QmVsb25nVG9NYW55O1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgYWxwaGFiZWx0OiBzdHJpbmdbXSA9IEFMUEhBQkVUO1xuICBkYXRhOiBhbnk7XG4gIHNldHRpbmdzOiBhbnk7XG4gIHNvdXJjZTogU2VydmVyRGF0YVNvdXJjZTtcbiAgY3VycmVudFBlclBhZ2U6IG51bWJlcjtcbiAgaXNGZXRjaGluZyA9IHRydWU7XG4gIHJlc3NvdXJjZU5hbWUgPSAnJztcbiAgZmlsdGVyQnkgPSAnJztcbiAgZmlsdGVyT3BlcmF0b3IgPSBGSUxURVJfT1BFUkFUT1JTO1xuICBleHBvcnRBc0NvbmZpZyA9IHtcbiAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcbiAgICBlbGVtZW50SWQ6ICdteVRhYmxlRWxlbWVudElkJywgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxuICB9O1xuICBzZWFyY2hJdGVtcyA9IFtdO1xuICBzZWFyY2hJdGVtID0gJyc7XG5cbiAgc2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIHNob3dEZXRhaWxzID0gZmFsc2U7XG4gIG9wdGlvbnM6IGFueSA9IHt9O1xuICBhbGxGaWx0ZXJDb250YWluczogYW55ID0ge307XG4gIGJlbG9uZ1RvVmFsdWU6IGFueSA9IHt9O1xuICBiZWxvbmdUb01hbnk6IGFueSA9IHt9O1xuICBjb250cm9sczogYW55O1xuICBpc0NoZWNrZWQ6IGFueSA9IHt9O1xuXG4gIHNlbGVjdGVkUm93czogYW55W10gPSBbXTtcblxuICBpdGVtcyA9IFtdXG4gIHBlclBhZ2VzT3B0aW9ucyA9IFtcbiAgICB7IHRpdGxlOiAnNScsIHZhbHVlOiA1IH0sXG4gICAgeyB0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgeyB0aXRsZTogJzIwJywgdmFsdWU6IDIwIH0sXG4gICAgeyB0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXG4gICAgeyB0aXRsZTogJzEwMCcsIHZhbHVlOiAxMDAgfSxcbiAgXTtcblxuICBwZXJtaXNzaW9ucyA9IFtQRVJNSVNTSU9OLkNSRUFURSwgUEVSTUlTU0lPTi5SRUFELCBQRVJNSVNTSU9OLkRFTEVURV07XG5cbiAgZ2V0IFBFUk1JU1NJT04oKSB7XG4gICAgcmV0dXJuIFBFUk1JU1NJT047XG4gIH1cbiAgY3VzdG9tID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlczogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5iTWVudVNlcnZpY2U6IE5iTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBleHBvcnRTZXJ2aWNlOiBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBwdWJsaWMgcmVzdFNoYXJlOiBSZXN0U2hhcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5KSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5Py5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQudmFsdWVdID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIGluaXRFeHBvcnRJdGVtcygpIHtcbiAgICBpZih0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0UmVzb3VyY2Upe1xuICAgICAgdGhpcy5pdGVtcyA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuZm9ybWF0cy5tYXAoKGl0ZW0pID0+ICh7XG4gICAgICAgIHRpdGxlOiBpdGVtLFxuICAgICAgfSkpO1xuICAgIH1cbiAgIFxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pbml0RXhwb3J0SXRlbXMoKVxuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ2V4cG9ydC1jb250ZXh0JyksXG4gICAgICAgIG1hcCgoeyBpdGVtOiB7IHRpdGxlIH0gfSkgPT4gdGl0bGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh0aXRsZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRpdGxlKSB7XG4gICAgICAgICAgY2FzZSAnRVhDRUwnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdQREYnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb1BkZigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQ1NWJzpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0VG9Dc3YoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydEFsbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIpIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbXMucHVzaCh7XG4gICAgICAgIGZpZWxkOiAnJyxcbiAgICAgICAgb3BlcmF0b3I6ICcnLFxuICAgICAgICB0ZXJtczogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQZXJQYWdlID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2U7XG5cbiAgICB0aGlzLmdldExpc3QoKTtcblxuICAgIHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcihmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuaXNDaGVja2VkID0ge1xuICAgICAgdGl0bGU6ICdjaGVjaycsXG4gICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICBhZGRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IChjZWxsLCByb3cpID0+ICh7XG4gICAgICAgIGhhbmRsZUNoZWNrYm94Q2xpY2s6IChldmVudCwgcm93RGF0YSkgPT5cbiAgICAgICAgICB0aGlzLm9uQ2hlY2tib3hDbGljayhldmVudCwgcm93RGF0YSksXG4gICAgICAgIHNlbGVjdGVkOlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLmZpbmQoKGVsdCkgPT4gZWx0Py5pZCA9PSByb3c/LmlkKSAhPT0gdW5kZWZpbmVkLFxuICAgICAgICBjZWxsLFxuICAgICAgICByb3csXG4gICAgICB9KSxcbiAgICAgIGVkaXRvcjoge1xuICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxuICAgICAgfSxcbiAgICAgIHJlbmRlckNvbXBvbmVudDogU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQsXG4gICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY3VzdG9tID0gW107XG4gICAgICB0aGlzLnJlc291cmNlLnBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgYXBpOiBwZXJtaXNzaW9uLmZpZWxkS2V5LmFwaS5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA/IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHt9O1xuXG4gICAgICAgICAgICBwZXJtaXNzaW9uLmZpZWxkS2V5LmZpZWxkRm9yTmV4dFF1ZXJ5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgdmFsW2l0ZW1dID0gXy5nZXQocmVzcCwgaXRlbSk7XG4gICAgICAgICAgICAgIGlmICh2YWxbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zU2VydmljZS5hZGRQZXJtaXNzaW9uKHBlcm1pc3Npb24udHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24udHlwZSA9PT0gUEVSTUlTU0lPTi5SRUFEKSB7XG4gICAgICAgICAgICAgICAgICBjdXN0b20ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZXRhaWwnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCI8aSBjbGFzcz0nbmItY29tcG9zZSc+PC9pPlwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwZXJtaXNzaW9uLnR5cGUgPT09IFBFUk1JU1NJT04uREVMRVRFKSB7XG4gICAgICAgICAgICAgICAgICBjdXN0b20ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCI8aSBjbGFzcz0nbmItdHJhc2ggdGV4dC1kYW5nZXInPjwvaT5cIixcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHRoaXMuY3VzdG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tLFxuICAgICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZXI6IHtcbiAgICAgICAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICAgICAgICAgICAgYWRkOiB7XG4gICAgICAgICAgICAgICAgICBhZGRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1wbHVzXCIgPjwvaT4nLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nLFxuICAgICAgICAgICAgICAgICAgY29uZmlybUNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgaGlkZVN1YkhlYWRlcjogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmhpZGVBZGRTdWJIZWFkZXIsXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBjdXN0b206IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZXI6IHtcbiAgICAgICAgICBwZXJQYWdlOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIiA+PC9pPicsXG4gICAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+JyxcbiAgICAgICAgICBjb25maXJtQ3JlYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTaG93Q2hlY2tib3goKSB7XG4gICAgdGhpcy5zaG93Q2hlY2tib3ggPSAhdGhpcy5zaG93Q2hlY2tib3g7XG4gICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICB9XG5cbiAgb25EZWxldGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiBldmVudC5kYXRhLFxuICAgICAgICB0aXRsZTogJ1NVUFBSRVNTSU9OJyxcbiAgICAgICAgbXVsdGlTdXBwcmVzczogZmFsc2UsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkRlbGV0ZUFsbENvbmZpcm0oKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiB0aGlzLnNlbGVjdGVkUm93cyxcbiAgICAgICAgbXVsdGlTdXBwcmVzczogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdUT1VUIFNVUFBSSU1FUicsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGROZXdFbnRpdHkoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1hZGRgKTtcbiAgfVxuXG4gIGRldGFpbEVudGl0eShldmVudCkge1xuICAgIGlmICh0aGlzLnJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnBlcm1pc3Npb25zU2VydmljZS5oYXNQZXJtaXNzaW9uKFBFUk1JU1NJT04uUkVBRCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tib3hDbGljayhldmVudDogYW55LCByb3c6IGFueSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdykgPT09IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZSh0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyksIDEpO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEFsbFJvd3MoKSB7XG4gICAgdGhpcy5zb3VyY2UuZ2V0QWxsKCkudGhlbigocm93cykgPT4ge1xuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggIT09IHJvd3M/Lmxlbmd0aCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuICAgICAgICByb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUm93cyA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVNYXRUYWJsZUNvbHVtbnMoKSB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgaWYgKCF0aGlzLnNob3dDaGVja2JveCkge1xuICAgICAgY29sdW5tc1snaXNDaGVja2VkJ10gPSB0aGlzLmlzQ2hlY2tlZDtcbiAgICB9XG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICBhZGRhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiAoY2VsbCwgcm93KSA9PiAoe1xuICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbmRlckNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGNvbHVubXM7XG4gIH1cblxuICBnZXRMaXN0KHBhZ2UgPSBudWxsLCBwZXJQYWdlID0gbnVsbCkge1xuICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcih0cnVlKTtcbiAgICBpZiAocGFnZSkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcyA9IHsgLi4udGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcywgcGFnZSB9O1xuICAgIH1cbiAgICBpZiAocGVyUGFnZSkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcyA9IHtcbiAgICAgICAgLi4udGhpcy5yZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgcGVyX3BhZ2U6IHBlclBhZ2UsXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKHRoaXMuaHR0cCwge1xuICAgICAgZW5kUG9pbnQ6XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmwgK1xuICAgICAgICAnLycgK1xuICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpICtcbiAgICAgICAgJz8nICtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zKVxuICAgICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgICAgIGN1bXVsICtcbiAgICAgICAgICAgICAgaXRlbSArXG4gICAgICAgICAgICAgICc9JyArXG4gICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtc1tpdGVtXSArXG4gICAgICAgICAgICAgICcmJyxcbiAgICAgICAgICAgICcnXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zbGljZSgwLCAtMSksXG4gICAgICBkYXRhS2V5OiAnZGF0YScsXG4gICAgICBwYWdlclBhZ2VLZXk6ICdwYWdlJyxcbiAgICAgIHBhZ2VyTGltaXRLZXk6ICdwZXJfcGFnZScsXG4gICAgICB0b3RhbEtleTogJ3RvdGFsJyxcbiAgICAgIGZpbHRlckZpZWxkS2V5OiBgI19pbmNsdWRlI2AsXG4gICAgfSk7XG4gIH1cblxuICBvbkNyZWF0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkYXRhcyA9IGV2ZW50Lm5ld0RhdGE7XG4gICAgY29uc3Qgc2F2ZUJlbG9uZ1RvbWFueSA9IFtdO1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoZWx0LnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWSkge1xuICAgICAgICBzYXZlQmVsb25nVG9tYW55LnB1c2goe1xuICAgICAgICAgIHJlc291cmNlczogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgIHBpdm90OiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucGl2b3ROYW1lLFxuICAgICAgICB9KTtcbiAgICAgICAgZGVsZXRlIGRhdGFzW2VsdC5uYW1lXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgIC5hZGRSZXNvdXJjZXModGhpcy5yZXNvdXJjZS5hZGRDb25maWcsIHsgLi4uZGF0YXMsIHVzZXJfaWQ6IDEgfSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNhdmVCZWxvbmdUb21hbnkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgZWxlbWVudC5waXZvdFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHByb21zID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50LnJlc291cmNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucmVzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV06IGl0ZW1baXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV0sXG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZXNvdXJjZUlkTmFtZSddXTogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcHJvbXMucHVzaChcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAuYWRkUmVzb3VyY2VzKHJlc3RSZXNvdXJjZS5hZGRDb25maWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgICApO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkN1c3RvbShldmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQuYWN0aW9uKSB7XG4gICAgICBjYXNlICdkZWxldGUnOlxuICAgICAgICB0aGlzLm9uRGVsZXRlQ29uZmlybShldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZGV0YWlsJzpcbiAgICAgICAgdGhpcy5kZXRhaWxFbnRpdHkoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuXG5cbiAgIHJlbXBsYWNlcktleSh0YWJsZWF1LCBjb3JyZXNwb25kYW5jZXMpIHtcbiAgICB0YWJsZWF1LmZvckVhY2gob2JqZXQgPT4ge1xuICAgICAgY29ycmVzcG9uZGFuY2VzLmZvckVhY2goKHsga2V5LCBsYWJlbCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGV1ciA9IF8uZ2V0KG9iamV0LCBrZXkpO1xuICAgICAgICBpZiAodmFsZXVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBfLnNldChvYmpldCwgbGFiZWwsIHZhbGV1cik7XG4gICAgICAgICAgXy51bnNldChvYmpldCwga2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRhYmxlYXU7XG4gIH1cblxuICBnZXRGdWxsRGF0YSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlcy5nZXRSZXNvdXJjZXMoe1xuICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpLFxuXG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBzaG91bGRfcGFnaW5hdGU6IGZhbHNlLFxuICAgICAgICAuLi50aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb0V4Y2VsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0SGVhZGVyID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGVcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubGFiZWxdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCAvLyB0aXRsZVxuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3A6IGFueSkgPT4ge1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmVtcGxhY2VyS2V5KHJlc3AsIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZSk7XG5cbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQsIGluZGljZSkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgdWR0LmRhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX2V4Y2VsJyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb1BkZigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGxldCBlbHQgPSBbXTtcblxuICAgXG4gICAgY29uc3QgaGVhZGVyID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmV4cG9ydENvbmZpZy5jb2x1bW5GaWxlLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwOiBhbnkpID0+IHtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnJlbXBsYWNlcktleShyZXNwLCB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGUpO1xuXG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IFtdO1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0LnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWxlVGl0bGU6IHN0cmluZyA9IHRoaXMucmVzb3VyY2UubmFtZTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb1BkZihcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjdXN0b21EYXRhLFxuICAgICAgICAncmVzdF9maWxlX3BkZicsXG4gICAgICAgIGZpbGVUaXRsZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvQ3N2KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICBjb25zdCBoZWFkZXIgPSB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGUubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKTtcbiAgIFxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3A6IGFueSkgPT4ge1xuICAgICBcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5yZW1wbGFjZXJLZXkocmVzcCwgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmV4cG9ydENvbmZpZy5jb2x1bW5GaWxlKTtcbiBcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9Dc3YoaGVhZGVyLCBjdXN0b21EYXRhLCAncmVzdF9maWxlX2NzdicpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0QWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuICAgIGNvbnN0IGNzdkRhdGEgPSBbXTtcbiAgICBjb25zdCBwZGZEYXRhID0gW107XG4gICAgbGV0IGVsdFBERiA9IFtdO1xuICAgIGxldCBlbHRDU1YgPSB7fTtcbiAgICBsZXQgZWx0RVhDRUwgPSB7fTtcblxuXG4gICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGUuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgY29sdW5tc1tlbHQubGFiZWxdID0ge1xuICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICB9O1xuICB9KTtcbiAgIGNvbnN0IHBkZkFuZENzdkhlYWRlciA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpO1xuXG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXhjZWxEYXRhOiBhbnkgPSB7XG4gICAgICBkYXRhOiBbeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIHNoZWV0SGVhZGVyXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3A6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnJlbXBsYWNlcktleShyZXNwLCB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGUpO1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAvL0NTVlxuICAgICAgICBlbHRDU1YgPSB7fTtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdENTVltyb3ddID0gZWxlbWVudFtyb3ddO1xuICAgICAgICB9KTtcbiAgICAgICAgY3N2RGF0YS5wdXNoKGVsdENTVik7XG4gICAgICAgIC8vUERGXG4gICAgICAgIGVsdFBERiA9IFtdO1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0UERGLnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBkZkRhdGEucHVzaChlbHRQREYpO1xuICAgICAgICAvL0VYQ0VMXG4gICAgICAgIGVsdEVYQ0VMID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbHRFWENFTFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgZXhjZWxEYXRhLmRhdGEucHVzaChlbHRFWENFTCk7XG4gICAgICAgIGVkYXRhLnB1c2goZXhjZWxEYXRhKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmdlbmVyYXRlWmlwKHBkZkFuZENzdkhlYWRlciwgcGRmRGF0YSwgY3N2RGF0YSwgZWRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgLy9GaWx0ZXJcblxuICBzZXRQYWdlcihzZXRQYWdlcikge1xuICAgIHRoaXMuc291cmNlLnNldFBhZ2luZygxLCBzZXRQYWdlciwgdHJ1ZSk7XG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgc2VsZWN0RmlsdGVyQnkoZGF0YSwgaW5kZXgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZCA9IGRhdGFbJ3ZhbHVlJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lID0gZGF0YVsncmVzb3VyY2VGaWVsZE5hbWUnXTtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5yZXNvdXJjZSA9IGRhdGFbJ3Jlc291cmNlJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ucmVzc291cmNlRmlsdGVyTmFtZSA9IGRhdGFbJ3Jlc3NvdXJjZUZpbHRlck5hbWUnXTtcbiAgICBpZiAoZGF0YVsndmFsdWUnXSA9PT0gJ2lkJykge1xuICAgICAgY29uc3QgcmVzb3VyY2UgPSBkYXRhPy5yZXNvdXJjZT8uYWRkQ29uZmlnO1xuICAgICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICBhcGk6IHJlc291cmNlLmFwaSxcbiAgICAgICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICAgICAgc2hvdWxkX3BhZ2luYXRlOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zW2RhdGFbJ3ZhbHVlJ11dID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgeFsnaWQnXVxuICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICA/LmxvY2FsZUNvbXBhcmUoeVsnaWQnXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2RhdGFbJ3ZhbHVlJ11dID0gb2YoXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnNbZGF0YVsndmFsdWUnXV1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RPcGVyYXRvcih2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5vcGVyYXRvciA9IHZhbHVlO1xuICB9XG5cbiAgb25GaWx0ZXIodmFsLCBpbmRleCkge1xuICAgIGlmIChpbmRleCAhPSB1bmRlZmluZWQgJiYgaW5kZXggIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0udGVybXMgPSB2YWw/LnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW0gPSB2YWw/LnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGFkZEZpZWxkU2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXMucHVzaCh7IGZpZWxkOiAnJywgb3BlcmF0b3I6ICcnLCB0ZXJtczogJycgfSk7XG4gIH1cblxuICByZW1vdmVGaWVsZFNlYXJjaChpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyTWFueShcbiAgICB2YWx1ZTogYW55LFxuICAgIGluZGV4OiBudW1iZXIsXG4gICAgb3B0aW9ucyA9ICdiZWxvbmdUb01hbnlPcHRpb25zJ1xuICApOiBzdHJpbmdbXSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyAmJiB0aGlzLm9wdGlvbnNbJ2lkJ10/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbJ2lkJ10uZmlsdGVyKChvcHRpb25WYWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgIDogJ2lkJyxcbiAgICAgICAgXS5zb21lKChlbHQpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCR7b3B0aW9uVmFsdWVbZWx0XT8udG9Mb3dlckNhc2UoKX1gLmluY2x1ZGVzKFxuICAgICAgICAgICAgYCR7dmFsdWUudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXJlZE9wdGlvbnModmFsdWU6IGFueSwgaW5kZXg6IG51bWJlcik6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICBtYXAoKGZpbHRlclN0cmluZzogc3RyaW5nKSA9PiB0aGlzLmZpbHRlck1hbnkoZmlsdGVyU3RyaW5nLCBpbmRleCkpXG4gICAgKTtcbiAgfVxuXG4gIGZpbHRlcklucHV0KGV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1snaWQnXSA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKFxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgaW5kZXhcbiAgICApO1xuICB9XG5cbiAgb25UYWdSZW1vdmVCZWxvbmcodGFnVG9SZW1vdmU6IE5iVGFnQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2VsbERhdGEgPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddKTtcbiAgICBjb25zdCBzYXZlID0gW107XG4gICAgY2VsbERhdGEuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoZWx0WyduYW1lJ10gIT0gdGFnVG9SZW1vdmUudGV4dCkgc2F2ZS5wdXNoKGVsdCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoc2F2ZSk7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbJ2lkJ106IHNhdmUsXG4gICAgfSk7XG4gIH1cbiAgLy9iZWxvbmdUb01hbnlPcHRpb25zXG4gIG9uQ2hvb3NlKGV2ZW50LCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY2VsbERhdGE6IGFueVtdID0gQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSk7XG4gICAgaWYgKGV2ZW50LmlkKSB7XG4gICAgICBjb25zdCBzZWFyY2ggPSBjZWxsRGF0YS5maW5kKChlbHQ6IGFueSkgPT4gZWx0LmlkID09IGV2ZW50LmlkKTtcbiAgICAgIGlmIChzZWFyY2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsdCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgc2F2ZVJlbGF0ZWRJZE5hbWU6IGV2ZW50LmlkLFxuICAgICAgICAgIHNhdmVSZXNvdXJjZUlkTmFtZTogZXZlbnQuaWQsXG4gICAgICAgICAgbmFtZTogZXZlbnRbXG4gICAgICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgXSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10uYWRkKG5ld0VsdCk7XG4gICAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgICBbJ2lkJ106IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10udmFsdWVzKCkpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnB1dEJlbG9uZ1RvTWFueS5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gIH1cblxuICBzdGFydFNlYXJjaCgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gJyc7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5mb3JFYWNoKChlbGVtZW50LCBpbmQpID0+IHtcbiAgICAgIGlmIChlbGVtZW50Py5maWVsZCA9PT0gJ2lkJykge1xuICAgICAgICBsZXQgdGFiID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0YWIucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbGV0IGxpc3RJZCA9IHRhYi5tYXAoKGVsdDogYW55KSA9PiBlbHQ/LmlkKS5qb2luKCcsJyk7XG4gICAgICAgICAgcGFyYW1zW2Ake2VsZW1lbnQ/LnJlc3NvdXJjZUZpbHRlck5hbWV9LWluYF0gPSBgJHtsaXN0SWR9YDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQ/LmZpZWxkICE9ICcnICYmIGVsZW1lbnQ/LnRlcm1zICE9ICcnKSB7XG4gICAgICAgICAgaWYgKGVsZW1lbnQ/Lm9wZXJhdG9yICE9ICc9Jykge1xuICAgICAgICAgICAgcGFyYW1zW1xuICAgICAgICAgICAgICBlbGVtZW50Py5maWVsZCArICctJyArIGVsZW1lbnQ/Lm9wZXJhdG9yXG4gICAgICAgICAgICBdID0gYCR7ZWxlbWVudD8udGVybXN9YDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyYW1zW2VsZW1lbnQ/LmZpZWxkXSA9IGAke2VsZW1lbnQ/LnRlcm1zfWA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VhcmNoID0gT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGN1bXVsLCBpdGVtKSA9PlxuICAgICAgICAgIGN1bXVsICsgaXRlbSArICc9JyArIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtc1tpdGVtXSArICcmJyxcbiAgICAgICAgJydcbiAgICAgIClcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICBpZiAoc2VhcmNoICE9ICcnKSB7XG4gICAgICBzZWFyY2ggKz0gJyYnO1xuICAgIH1cbiAgICBzZWFyY2ggKz0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgICAgLnJlZHVjZSgoY3VtdWwsIGl0ZW0pID0+IGN1bXVsICsgaXRlbSArICc9JyArIHBhcmFtc1tpdGVtXSArICcmJywgJycpXG4gICAgICAuc2xpY2UoMCwgLTEpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIHNlYXJjaCxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5iLWNhcmQgc3RhdHVzPVwicHJpbWFyeVwiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7eyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcudGl0bGUgfX1cbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nSWY9XCJzaG93Q2hlY2tib3hcIj5cbiAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MoKVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID09IHRoaXMuc291cmNlLmNvdW50KClcIlxuICAgICAgICAgIC8+e3sgXCJyZXN0LWRldGFpbC5zZWxlY3RcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJoZWlnaHQ6IDQwcHhcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgZ2hvc3RcbiAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1kZXRhaWwuc2VsZWN0JyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2hvd0NoZWNrYm94KClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwic2hvd0NoZWNrYm94XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0UmVzb3VyY2UgPT09IHRydWVcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICAgIG5iQ29udGV4dE1lbnVUYWc9XCJleHBvcnQtY29udGV4dFwiXG4gICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmItaWNvbiBpY29uPVwiZG93bmxvYWQtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1saXN0LmFkZCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgIChjbGljayk9XCJhZGROZXdFbnRpdHkoKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4+e3sgXCJhZGRcIiB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLWNpcmNsZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1saXN0LmRlbGV0ZUFsbFNlbGVjdCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlQWxsQ29uZmlybSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxuICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IHJnYigyMzgsIDEzMCwgMTU3KVwiXG4gICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5neFBlcm1pc3Npb25zT25seT1cInBlcm1pc3Npb25zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkNSRUFURVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImNvbnRyb2xcIiAoY2xpY2spPVwiYWRkTmV3RW50aXR5KClcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLWNpcmNsZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmd4UGVybWlzc2lvbnNPbmx5PVwiUEVSTUlTU0lPTi5ERUxFVEVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGVBbGxDb25maXJtKClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImNvbG9yOiByZ2IoMjM4LCAxMzAsIDE1NylcIlxuICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgIG5iQ29udGV4dE1lbnVUYWc9XCJteS1jb250ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IFwicmVzdC1saXN0LmV4cG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPiAtLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWJvZHlcbiAgICBbbmJTcGlubmVyXT1cInRoaXMucmVzdFNoYXJlLmxpc3RMb2FkZXJcIlxuICAgIG5iU3Bpbm5lclNpemU9XCJsYXJnZVwiXG4gICAgbmJTcGlubmVyU3RhdHVzPVwicHJpbWFyeVwiXG4gID5cbiAgICA8IS0tIFJlc3Qtc2VhcmNoIGltcGxlbWVudCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTVcIiAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJ0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyLmZpbHRlckJ5Lmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWFyY2ggb2Ygc2VhcmNoSXRlbXM7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgPCEtLSBTZWxlY3Qgd2l0aCBmaWx0ZXIgYnkgLS0+XG4gICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0LmZpbHRlclBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwic2VsZWN0RmlsdGVyQnkoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyIG9mIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnlcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgID57eyBmaWx0ZXJbXCJuYW1lXCJdIHwgdGl0bGVjYXNlIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5vcGVyYXRvcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RPcGVyYXRvcigkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3BlcmF0b3Igb2YgZmlsdGVyT3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wZXJhdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBvcGVyYXRvci5uYW1lIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTEyIGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICdjb2wtMTInOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyID09IG51bGxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbHRlcigkZXZlbnQudGFyZ2V0LCBpbmRleClcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID09PSAnaWQnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55WydpZCddXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVsnbmFtZSddXCJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZhYmxlXG4gICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICNhdXRvQmVsb25nVG9NYW55XG4gICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJiZWxvbmdUb0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIidpZCdcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cblxuICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25DaG9vc2UoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1snaWQnXSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0yIGNvbC14cy00IGlucHV0LXNwYWNlIHJvd1wiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3Quc2VhcmNoJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICAgIG5iVG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwic3RhcnRTZWFyY2goKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJzZWFyY2gtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTIgY29sLXhzLTQgaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgKm5nSWY9XCJpbmRleCA9PSAwOyBlbHNlIGVsc2VCbG9ja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5hZGRTZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJhZGRGaWVsZFNlYXJjaCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QucmVtb3ZlU2VhcmNoJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVGaWVsZFNlYXJjaChpbmRleClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cIm1pbnVzLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gPG5nMi1zbWFydC10YWJsZVxuICAgICpuZ0lmPVwic2hvd0NoZWNrYm94XCJcbiAgICAgIFtzZXR0aW5nc109XCJ7Li4uc2V0dGluZ3MsIGNvbHVtbnM6IHsgLi4uc2V0dGluZ3MuY29sdW1ucywgaXNDaGVja2VkIH0gfVwiXG4gICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAoY3JlYXRlQ29uZmlybSk9XCJvbkNyZWF0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgID5cbiAgICA8L25nMi1zbWFydC10YWJsZT4gLS0+XG5cbiAgICA8IS0tICpuZ0lmPVwiIXNob3dDaGVja2JveFwiIC0tPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGVcbiAgICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgICAgICAqbmdJZj1cImN1c3RvbVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPT09IDBcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGVcbiAgICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uZzItc21hcnQtdGFibGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtXCJcbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBteC0yXCI+e3sgXCJvcHRpb25zLnBlcl9wYWdlXCIgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPG5iLXNlbGVjdFxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLnRvU3RyaW5nKClcIlxuICAgICAgICBbKHNlbGVjdGVkKV09XCJjdXJyZW50UGVyUGFnZVwiXG4gICAgICA+XG4gICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgcGVyUGFnZSBvZiBwZXJQYWdlc09wdGlvbnNcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRQYWdlcihwZXJQYWdlLnZhbHVlKVwiXG4gICAgICAgICAgdmFsdWU9XCJwZXJQYWdlLnZhbHVlXCJcbiAgICAgICAgICA+e3sgcGVyUGFnZS50aXRsZSB9fTwvbmItb3B0aW9uXG4gICAgICAgID5cbiAgICAgIDwvbmItc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtYm9keT5cbjwvbmItY2FyZD5cbiJdfQ==