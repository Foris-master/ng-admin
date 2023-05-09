import { FILTER_OPERATORS } from './../service/rest-resource.service';
import { Component, Input, ViewChild, } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { REST_FIELD_TYPES } from '../models/rest-resource.model';
import { RestResourceEditorFieldsComponent } from '../components/rest-resource-editor-fields/rest-resource-editor-fields.component';
import { RestResourceListFieldComponent } from '../components/rest.resource-list-field/rest.resource-list-field.component';
import { RestResourceDeleteComponent } from '../rest-ressource-delete/rest-resource-delete.component';
import { filter, map } from 'rxjs/operators';
import { ALPHABET } from '../service/rest-export.service';
import * as i0 from "@angular/core";
import * as i1 from "../service/rest-admin-config.service";
import * as i2 from "../service/rest-resource.service";
import * as i3 from "@angular/common/http";
import * as i4 from "@nebular/theme";
import * as i5 from "@angular/router";
import * as i6 from "../service/rest-export.service";
import * as i7 from "../service/rest-share.service";
import * as i8 from "@angular/common";
import * as i9 from "ng2-smart-table";
import * as i10 from "@ngx-translate/core";
const _c0 = ["search"];
function RestResourceListComponent_div_12_ng_container_1_ng_container_1_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r12 = ctx.$implicit;
    i0.ɵɵproperty("value", filter_r12);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, filter_r12));
} }
function RestResourceListComponent_div_12_ng_container_1_ng_container_1_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 27);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r13.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(2, 2, operator_r13.name), " ");
} }
function RestResourceListComponent_div_12_ng_container_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "button", 29);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_12_ng_container_1_ng_container_1_div_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(4); return ctx_r14.startSearch(); });
    i0.ɵɵelement(2, "nb-icon", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_12_ng_container_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "button", 29);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_12_ng_container_1_ng_container_1_div_13_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(4); return ctx_r16.addFieldSearch(); });
    i0.ɵɵelement(2, "nb-icon", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_12_ng_container_1_ng_container_1_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "button", 32);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_12_ng_container_1_ng_container_1_ng_template_14_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r20); const index_r5 = i0.ɵɵnextContext().index; const ctx_r18 = i0.ɵɵnextContext(3); return ctx_r18.removeFieldSearch(index_r5); });
    i0.ɵɵelement(2, "nb-icon", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { "col-12": a0 }; };
function RestResourceListComponent_div_12_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵelementStart(2, "nb-select", 20);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_12_ng_container_1_ng_container_1_Template_nb_select_selectedChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r22); const index_r5 = restoredCtx.index; const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.selectFilterBy($event, index_r5); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_12_ng_container_1_ng_container_1_nb_option_4_Template, 3, 4, "nb-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 19);
    i0.ɵɵelementStart(6, "nb-select", 20);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_12_ng_container_1_ng_container_1_Template_nb_select_selectedChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r22); const index_r5 = restoredCtx.index; const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.selectOperator($event, index_r5); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtemplate(8, RestResourceListComponent_div_12_ng_container_1_ng_container_1_nb_option_8_Template, 3, 4, "nb-option", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 22);
    i0.ɵɵelementStart(10, "input", 23);
    i0.ɵɵlistener("input", function RestResourceListComponent_div_12_ng_container_1_ng_container_1_Template_input_input_10_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r22); const index_r5 = restoredCtx.index; const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.onFilter($event.target, index_r5); });
    i0.ɵɵpipe(11, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, RestResourceListComponent_div_12_ng_container_1_ng_container_1_div_12_Template, 3, 0, "div", 24);
    i0.ɵɵtemplate(13, RestResourceListComponent_div_12_ng_container_1_ng_container_1_div_13_Template, 3, 0, "div", 25);
    i0.ɵɵtemplate(14, RestResourceListComponent_div_12_ng_container_1_ng_container_1_ng_template_14_Template, 3, 0, "ng-template", null, 26, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r5 = ctx.index;
    const _r10 = i0.ɵɵreference(15);
    const ctx_r3 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 9, "rest-list.filterPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.resource.listConfig.searchFilter.filterBy);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(7, 11, "rest-list.operator"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r3.filterOperator);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c1, ctx_r3.resource.listConfig.searchFilter == null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(11, 13, "rest-list.searchPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", index_r5 == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r5 == 0)("ngIfElse", _r10);
} }
function RestResourceListComponent_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_12_ng_container_1_ng_container_1_Template, 16, 17, "ng-container", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.searchItems);
} }
function RestResourceListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_12_ng_container_1_Template, 2, 1, "ng-container", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.resource.listConfig.searchFilter.filterBy.length > 0);
} }
function RestResourceListComponent_nb_option_19_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵlistener("click", function RestResourceListComponent_nb_option_19_Template_nb_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r27); const perPage_r25 = restoredCtx.$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.setPager(perPage_r25.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const perPage_r25 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(perPage_r25.title);
} }
export class RestResourceListComponent {
    constructor(serviceRestConfig, serviceRestResources, http, dialogService, activatedRoute, router, nbMenuService, exportService, restShare) {
        this.serviceRestConfig = serviceRestConfig;
        this.serviceRestResources = serviceRestResources;
        this.http = http;
        this.dialogService = dialogService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.restShare = restShare;
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
        this.ressourceName =
            this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split('-')[0];
        this.resource = this.serviceRestConfig.getSpecificResource(this.ressourceName);
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
                        title: "<i  class='nb-trash text-danger' ></i> ",
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
            // edit: {
            //   editButtonContent: '<i class="nb-edit"></i>',
            //   saveButtonContent: '<i class="nb-checkmark"></i>',
            //   cancelButtonContent: '<i class="nb-close"></i>',
            // },
            // delete: {
            //   deleteButtonContent: '<i  class="nb-trash"></i>',
            //   confirmDelete: true,
            // },
        };
        this.getList();
        this.source.onChanged().subscribe((e) => {
            setTimeout(() => {
                this.restShare.setLoader(false);
            });
        });
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
    }
    onDeleteConfirm(event) {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: event.data,
                title: 'SUPPRESSION',
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
        this.router.navigate([
            `/admin/${this.ressourceName}-detail`,
            event.data.id,
        ]);
    }
    createMatTableColumns() {
        const colunms = {};
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
    selectFilterBy(value, index) {
        this.searchItems[index].field = value;
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
    startSearch() {
        const params = {};
        let search = '';
        this.searchItems.forEach((element) => {
            if (element.field != '' && element.terms != '') {
                if (element.operator != '=') {
                    params[element.field + '-' + element.operator] = `${element.terms}`;
                }
                else {
                    params[element.field] = `${element.terms}`;
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
        // console.log(search);
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
RestResourceListComponent.ɵfac = function RestResourceListComponent_Factory(t) { return new (t || RestResourceListComponent)(i0.ɵɵdirectiveInject(i1.RestAdminConfigService), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.HttpClient), i0.ɵɵdirectiveInject(i4.NbDialogService), i0.ɵɵdirectiveInject(i5.ActivatedRoute), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i4.NbMenuService), i0.ɵɵdirectiveInject(i6.RestExportService), i0.ɵɵdirectiveInject(i7.RestShareService)); };
RestResourceListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListComponent, selectors: [["ngx-rest-resource-list"]], viewQuery: function RestResourceListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
    } }, inputs: { resource: "resource" }, decls: 20, vars: 12, consts: [["status", "success"], [1, "row"], [1, "col-10"], [1, "col-1"], [1, "col-1", 2, "display", "flex"], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["icon", "plus-circle"], ["nbButton", "", "nbContextMenuTag", "my-context", "ghost", "", "status", "control", 3, "nbContextMenu"], ["icon", "menu"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "userRowSelect", "custom"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "mb-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], ["class", "col-lg-1 col-md-6 col-xs-6 input-space", 4, "ngIf"], ["class", "col-lg-1 col-md-6 col-xs-6 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-1", "col-md-6", "col-xs-6", "input-space"], ["nbButton", "", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "search-outline"], ["icon", "plus-outline"], ["nbButton", "", "fullWidth", "", "status", "danger", 3, "click"], ["icon", "minus-outline"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵtext(4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "div", 3);
        i0.ɵɵelementStart(6, "div", 4);
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵlistener("click", function RestResourceListComponent_Template_button_click_7_listener() { return ctx.addNewEntity(); });
        i0.ɵɵelement(8, "nb-icon", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "button", 7);
        i0.ɵɵelement(10, "nb-icon", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "nb-card-body", 9);
        i0.ɵɵtemplate(12, RestResourceListComponent_div_12_Template, 2, 1, "div", 10);
        i0.ɵɵelementStart(13, "ng2-smart-table", 11);
        i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_Template_ng2_smart_table_deleteConfirm_13_listener($event) { return ctx.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_Template_ng2_smart_table_createConfirm_13_listener($event) { return ctx.onCreateConfirm($event); })("userRowSelect", function RestResourceListComponent_Template_ng2_smart_table_userRowSelect_13_listener($event) { return ctx.detailEntity($event); })("custom", function RestResourceListComponent_Template_ng2_smart_table_custom_13_listener($event) { return ctx.onCustom($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div", 12);
        i0.ɵɵelementStart(15, "label", 13);
        i0.ɵɵtext(16);
        i0.ɵɵpipe(17, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "nb-select", 14);
        i0.ɵɵlistener("selectedChange", function RestResourceListComponent_Template_nb_select_selectedChange_18_listener($event) { return ctx.currentPerPage = $event; });
        i0.ɵɵtemplate(19, RestResourceListComponent_nb_option_19_Template, 2, 1, "nb-option", 15);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1(" ", ctx.resource.listConfig.title, " ");
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("nbContextMenu", ctx.items);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("nbSpinner", ctx.restShare.listLoader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.listConfig.searchFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("settings", ctx.settings)("source", ctx.source);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(17, 10, "options.per_page"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.resource.listConfig.perPage.toString())("selected", ctx.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.perPagesOptions);
    } }, directives: [i4.NbCardComponent, i4.NbCardHeaderComponent, i4.NbButtonComponent, i4.NbIconComponent, i4.NbContextMenuDirective, i4.NbCardBodyComponent, i4.NbSpinnerDirective, i8.NgIf, i9.Ng2SmartTableComponent, i4.NbSelectComponent, i8.NgForOf, i8.NgClass, i4.NbInputDirective, i4.NbOptionComponent], pipes: [i10.TranslatePipe, i8.TitleCasePipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem;display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-default   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-default   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}@media (max-width: 1199.98px){.nb-theme-default   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-default   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem}}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem;display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-dark   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-dark   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}@media (max-width: 1199.98px){.nb-theme-dark   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-dark   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem}}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem;display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-cosmic   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}@media (max-width: 1199.98px){.nb-theme-cosmic   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-cosmic   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem}}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-bottom:2rem;display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-corporate   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}@media (max-width: 1199.98px){.nb-theme-corporate   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.8rem}}@media (max-width: 575.98px){.nb-theme-corporate   [_nghost-%COMP%]   button[_ngcontent-%COMP%]{padding:.75rem}}  ng2-st-tbody-edit-delete{display:none;height:0!important}  ng2-st-tbody-custom{display:flex;text-align:center}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.nb-theme-default[_ngcontent-%COMP%]   ng2-smart-table[_ngcontent-%COMP%]   th.ng2-smart-actions-title-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceListComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-list',
                templateUrl: './rest-resource-list.component.html',
                styleUrls: ['./rest-resource-list.component.scss'],
            }]
    }], function () { return [{ type: i1.RestAdminConfigService }, { type: i2.RestResourceService }, { type: i3.HttpClient }, { type: i4.NbDialogService }, { type: i5.ActivatedRoute }, { type: i5.Router }, { type: i4.NbMenuService }, { type: i6.RestExportService }, { type: i7.RestShareService }]; }, { resource: [{
            type: Input
        }], search: [{
            type: ViewChild,
            args: ['search']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzVFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzNILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBR3RHLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUMrQi9ELHFDQUtHO0lBQUEsWUFBd0I7O0lBQUEsaUJBQzFCOzs7SUFGQyxrQ0FBZ0I7SUFDZixlQUF3QjtJQUF4QixzREFBd0I7OztJQVczQixxQ0FHRztJQUFBLFlBQ0g7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LHlCQUF5QjtjQUxyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLHFDQUFxQztnQkFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQ7K1NBRVUsUUFBUTtrQkFBaEIsS0FBSztZQUNlLE1BQU07a0JBQTFCLFNBQVM7bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZJTFRFUl9PUEVSQVRPUlMgfSBmcm9tICcuLy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xuaW1wb3J0IHsgUmVzdEZpZWxkLCBSRVNUX0ZJRUxEX1RZUEVTIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFMUEhBQkVULCBSZXN0RXhwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1leHBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0U2hhcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXNoYXJlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVzb3VyY2U6IFJlc3RSZXNvdXJjZTtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoO1xuXG4gIGFscGhhYmVsdDogc3RyaW5nW10gPSBBTFBIQUJFVDtcbiAgZGF0YTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XG4gIGN1cnJlbnRQZXJQYWdlOiBudW1iZXI7XG4gIGlzRmV0Y2hpbmcgPSB0cnVlO1xuICByZXNzb3VyY2VOYW1lID0gJyc7XG4gIGZpbHRlckJ5ID0gJyc7XG4gIGZpbHRlck9wZXJhdG9yID0gRklMVEVSX09QRVJBVE9SUztcbiAgZXhwb3J0QXNDb25maWcgPSB7XG4gICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXG4gICAgZWxlbWVudElkOiAnbXlUYWJsZUVsZW1lbnRJZCcsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcbiAgfTtcbiAgc2VhcmNoSXRlbXMgPSBbXTtcbiAgc2VhcmNoSXRlbSA9ICcnO1xuXG4gIGl0ZW1zID0gW1xuICAgIHsgdGl0bGU6ICdBbGwgZm9ybWF0cycgfSxcbiAgICB7IHRpdGxlOiAnQ1NWJyB9LFxuICAgIHsgdGl0bGU6ICdFWENFTCcgfSxcbiAgICB7IHRpdGxlOiAnUERGJyB9LFxuICBdO1xuICBwZXJQYWdlc09wdGlvbnMgPSBbXG4gICAgeyB0aXRsZTogJzUnLCB2YWx1ZTogNSB9LFxuICAgIHsgdGl0bGU6ICcxMCcsIHZhbHVlOiAxMCB9LFxuICAgIHsgdGl0bGU6ICcyMCcsIHZhbHVlOiAyMCB9LFxuICAgIHsgdGl0bGU6ICc1MCcsIHZhbHVlOiA1MCB9LFxuICAgIHsgdGl0bGU6ICcxMDAnLCB2YWx1ZTogMTAwIH0sXG4gIF07XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlczogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5iTWVudVNlcnZpY2U6IE5iTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBleHBvcnRTZXJ2aWNlOiBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBwdWJsaWMgcmVzdFNoYXJlOiBSZXN0U2hhcmVTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzc291cmNlTmFtZSA9XG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwubGVuZ3RoIC0gMVxuICAgICAgXS5wYXRoLnNwbGl0KCctJylbMF07XG5cbiAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zLnB1c2goe1xuICAgICAgICBmaWVsZDogJycsXG4gICAgICAgIG9wZXJhdG9yOiAnJyxcbiAgICAgICAgdGVybXM6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGVyUGFnZSA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGN1c3RvbTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZXRhaWwnLFxuICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLWNvbXBvc2UnPjwvaT5cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgdGl0bGU6IFwiPGkgIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcicgPjwvaT4gXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgIGRlbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcGFnZXI6IHtcbiAgICAgICAgcGVyUGFnZTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UsXG4gICAgICB9LFxuXG4gICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICBhZGQ6IHtcbiAgICAgICAgYWRkQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItcGx1c1wiID48L2k+JyxcbiAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAgIGNvbmZpcm1DcmVhdGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgLy8gZWRpdDoge1xuICAgICAgLy8gICBlZGl0QnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItZWRpdFwiPjwvaT4nLFxuICAgICAgLy8gICBzYXZlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAvLyAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAvLyB9LFxuICAgICAgLy8gZGVsZXRlOiB7XG4gICAgICAvLyAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSAgY2xhc3M9XCJuYi10cmFzaFwiPjwvaT4nLFxuICAgICAgLy8gICBjb25maXJtRGVsZXRlOiB0cnVlLFxuICAgICAgLy8gfSxcbiAgICB9O1xuXG4gICAgdGhpcy5nZXRMaXN0KCk7XG5cbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm5iTWVudVNlcnZpY2VcbiAgICAgIC5vbkl0ZW1DbGljaygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IHRhZyB9KSA9PiB0YWcgPT09ICdteS1jb250ZXh0JyksXG4gICAgICAgIG1hcCgoeyBpdGVtOiB7IHRpdGxlIH0gfSkgPT4gdGl0bGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh0aXRsZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRpdGxlKSB7XG4gICAgICAgICAgY2FzZSAnRVhDRUwnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdQREYnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb1BkZigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnQ1NWJzpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0VG9Dc3YoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydEFsbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgb25EZWxldGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiBldmVudC5kYXRhLFxuICAgICAgICB0aXRsZTogJ1NVUFBSRVNTSU9OJyxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0VudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWFkZGApO1xuICB9XG5cbiAgZGV0YWlsRW50aXR5KGV2ZW50KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgIGV2ZW50LmRhdGEuaWQsXG4gICAgXSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IChjZWxsLCByb3cpID0+ICh7XG4gICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gY29sdW5tcztcbiAgfVxuXG4gIGdldExpc3QocGFnZSA9IG51bGwsIHBlclBhZ2UgPSBudWxsKSB7XG4gICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKHRydWUpO1xuICAgIGlmIChwYWdlKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zID0geyAuLi50aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zLCBwYWdlIH07XG4gICAgfVxuICAgIGlmIChwZXJQYWdlKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICAuLi50aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICBwZXJfcGFnZTogcGVyUGFnZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UodGhpcy5odHRwLCB7XG4gICAgICBlbmRQb2ludDpcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybCArXG4gICAgICAgICcvJyArXG4gICAgICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGkgK1xuICAgICAgICAnPycgK1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgIChjdW11bCwgaXRlbSkgPT5cbiAgICAgICAgICAgICAgY3VtdWwgK1xuICAgICAgICAgICAgICBpdGVtICtcbiAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICtcbiAgICAgICAgICAgICAgJywnLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApXG4gICAgICAgICAgLnNsaWNlKDAsIC0xKSxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xuICAgIGNvbnN0IGRhdGFzID0gZXZlbnQubmV3RGF0YTtcbiAgICBjb25zdCBzYXZlQmVsb25nVG9tYW55ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZKSB7XG4gICAgICAgIHNhdmVCZWxvbmdUb21hbnkucHVzaCh7XG4gICAgICAgICAgcmVzb3VyY2VzOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgcGl2b3Q6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5waXZvdE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgZGF0YXNbZWx0Lm5hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgLmFkZFJlc291cmNlcyh0aGlzLnJlc291cmNlLmFkZENvbmZpZywgeyAuLi5kYXRhcywgdXNlcl9pZDogMSB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICBlbGVtZW50LnBpdm90XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcHJvbXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQucmVzb3VyY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXTogaXRlbVtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXSxcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlc291cmNlSWROYW1lJ11dOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBwcm9tcy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIC5hZGRSZXNvdXJjZXMocmVzdFJlc291cmNlLmFkZENvbmZpZywgZGF0YSlcbiAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uQ3VzdG9tKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIHRoaXMub25EZWxldGVDb25maXJtKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXRhaWwnOlxuICAgICAgICB0aGlzLmRldGFpbEVudGl0eShldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldEZ1bGxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzLmdldFJlc291cmNlcyh7XG4gICAgICBhcGk6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGksXG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBzaG91bGRfcGFnaW5hdGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvRXhjZWwoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNoZWV0SGVhZGVyKTtcbiAgICBjb25zdCBlZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgIGNvbnN0IHVkdDogYW55ID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICB7IEE6ICdSZXN0IEV4Y2VsIGV4cG9ydCcgfSwgLy8gdGl0bGVcbiAgICAgICAgc2hlZXRIZWFkZXIsIC8vIHRhYmxlIGhlYWRlclxuICAgICAgXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcbiAgICBsZXQgZWx0ID0ge307XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50LCBpbmRpY2UpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbHRbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGVsZW1lbnRbc2hlZXRIZWFkZXJba2V5c1tpbmRleF1dXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVkdC5kYXRhLnB1c2goZWx0KTtcbiAgICAgIH0pO1xuXG4gICAgICBlZGF0YS5wdXNoKHVkdCk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9FeGNlbChlZGF0YSwgJ3Jlc3RfZmlsZV9leGNlbCcpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9QZGYoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tcyA9IHt9O1xuICAgIGNvbnN0IGN1c3RvbURhdGEgPSBbXTtcbiAgICBjb25zdCBoZWFkZXIgPSBbXTtcbiAgICBsZXQgZWx0ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgaGVhZGVyLnB1c2goZWx0LmxhYmVsKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbHQgPSBbXTtcbiAgICAgICAgaGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdC5wdXNoKGVsZW1lbnRbcm93XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21EYXRhLnB1c2goZWx0KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZmlsZVRpdGxlOiBzdHJpbmcgPSB0aGlzLnJlc291cmNlLm5hbWU7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9QZGYoXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgY3VzdG9tRGF0YSxcbiAgICAgICAgJ3Jlc3RfZmlsZV9wZGYnLFxuICAgICAgICBmaWxlVGl0bGVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb0NzdigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlciA9IFtdO1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBoZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IHt9O1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0W3Jvd10gPSBlbGVtZW50W3Jvd107XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21EYXRhLnB1c2goZWx0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydFRvQ3N2KGhlYWRlciwgY3VzdG9tRGF0YSwgJ3Jlc3RfZmlsZV9jc3YnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydEFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgcGRmQW5kQ3N2SGVhZGVyID0gW107XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcbiAgICBjb25zdCBjc3ZEYXRhID0gW107XG4gICAgY29uc3QgcGRmRGF0YSA9IFtdO1xuICAgIGxldCBlbHRQREYgPSBbXTtcbiAgICBsZXQgZWx0Q1NWID0ge307XG4gICAgbGV0IGVsdEVYQ0VMID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLnB1c2goZWx0LmxhYmVsKTtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgc2hlZXRIZWFkZXJbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGtleTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4Y2VsRGF0YTogYW55ID0ge1xuICAgICAgZGF0YTogW3sgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCBzaGVldEhlYWRlcl0sXG4gICAgICBza2lwSGVhZGVyOiB0cnVlLFxuICAgIH07XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIC8vQ1NWXG4gICAgICAgIGVsdENTViA9IHt9O1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0Q1NWW3Jvd10gPSBlbGVtZW50W3Jvd107XG4gICAgICAgIH0pO1xuICAgICAgICBjc3ZEYXRhLnB1c2goZWx0Q1NWKTtcbiAgICAgICAgLy9QREZcbiAgICAgICAgZWx0UERGID0gW107XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRQREYucHVzaChlbGVtZW50W3Jvd10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcGRmRGF0YS5wdXNoKGVsdFBERik7XG4gICAgICAgIC8vRVhDRUxcbiAgICAgICAgZWx0RVhDRUwgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdEVYQ0VMW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBlbGVtZW50W3NoZWV0SGVhZGVyW2tleXNbaW5kZXhdXV07XG4gICAgICAgIH0pO1xuICAgICAgICBleGNlbERhdGEuZGF0YS5wdXNoKGVsdEVYQ0VMKTtcbiAgICAgICAgZWRhdGEucHVzaChleGNlbERhdGEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZ2VuZXJhdGVaaXAocGRmQW5kQ3N2SGVhZGVyLCBwZGZEYXRhLCBjc3ZEYXRhLCBlZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICAvL0ZpbHRlclxuXG4gIHNldFBhZ2VyKHNldFBhZ2VyKSB7XG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnaW5nKDEsIHNldFBhZ2VyLCB0cnVlKTtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBzZWxlY3RGaWx0ZXJCeSh2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZCA9IHZhbHVlO1xuICB9XG4gIHNlbGVjdE9wZXJhdG9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLm9wZXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBvbkZpbHRlcih2YWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS50ZXJtcyA9IHZhbD8udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbSA9IHZhbD8udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHsgZmllbGQ6ICcnLCBvcGVyYXRvcjogJycsIHRlcm1zOiAnJyB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgc3RhcnRTZWFyY2goKSB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgbGV0IHNlYXJjaCA9ICcnO1xuICAgIHRoaXMuc2VhcmNoSXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQuZmllbGQgIT0gJycgJiYgZWxlbWVudC50ZXJtcyAhPSAnJykge1xuICAgICAgICBpZiAoZWxlbWVudC5vcGVyYXRvciAhPSAnPScpIHtcbiAgICAgICAgICBwYXJhbXNbZWxlbWVudC5maWVsZCArICctJyArIGVsZW1lbnQub3BlcmF0b3JdID0gYCR7ZWxlbWVudC50ZXJtc31gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtc1tlbGVtZW50LmZpZWxkXSA9IGAke2VsZW1lbnQudGVybXN9YDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHNlYXJjaCA9IE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtcylcbiAgICAgIC5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgaXRlbSkgPT5cbiAgICAgICAgICBjdW11bCArIGl0ZW0gKyAnPScgKyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNbaXRlbV0gKyAnLCcsXG4gICAgICAgICcnXG4gICAgICApXG4gICAgICAuc2xpY2UoMCwgLTEpO1xuICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgIHNlYXJjaCArPSAnJic7XG4gICAgfVxuICAgIHNlYXJjaCArPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAucmVkdWNlKChjdW11bCwgaXRlbSkgPT4gY3VtdWwgKyBpdGVtICsgJz0nICsgcGFyYW1zW2l0ZW1dICsgJyYnLCAnJylcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2gpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIHNlYXJjaCxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5iLWNhcmQgc3RhdHVzPVwic3VjY2Vzc1wiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xMFwiPlxuICAgICAgICB7eyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcudGl0bGUgfX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTFcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiIHN0eWxlPVwiZGlzcGxheTogZmxleFwiPlxuICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImNvbnRyb2xcIiAoY2xpY2spPVwiYWRkTmV3RW50aXR5KClcIj5cbiAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1cy1jaXJjbGVcIj48L25iLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICAgIGdob3N0XG4gICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWVudVwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPCEtLSA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgXCJyZXN0LWxpc3QuZXhwb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1oZWFkZXI+XG5cbiAgPG5iLWNhcmQtYm9keVxuICAgIFtuYlNwaW5uZXJdPVwidGhpcy5yZXN0U2hhcmUubGlzdExvYWRlclwiXG4gICAgbmJTcGlubmVyU2l6ZT1cImxhcmdlXCJcbiAgICBuYlNwaW5uZXJTdGF0dXM9XCJwcmltYXJ5XCJcbiAgPlxuICAgIDwhLS0gUmVzdC1zZWFyY2ggaW1wbGVtZW50IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiICpuZ0lmPVwidGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnkubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlYXJjaCBvZiBzZWFyY2hJdGVtczsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICA8IS0tIFNlbGVjdCB3aXRoIGZpbHRlciBieSAtLT5cbiAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3QuZmlsdGVyUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RGaWx0ZXJCeSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgb2YgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlci5maWx0ZXJCeVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgPnt7IGZpbHRlciB8IHRpdGxlY2FzZSB9fTwvbmItb3B0aW9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5vcGVyYXRvcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cInNlbGVjdE9wZXJhdG9yKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcGVyYXRvciBvZiBmaWx0ZXJPcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wZXJhdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICA+e3sgb3BlcmF0b3IubmFtZSB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTEyIGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICdjb2wtMTInOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyID09IG51bGxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbHRlcigkZXZlbnQudGFyZ2V0LCBpbmRleClcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC02IGNvbC14cy02IGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT0gMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBmdWxsV2lkdGggc3RhdHVzPVwicHJpbWFyeVwiIChjbGljayk9XCJzdGFydFNlYXJjaCgpXCI+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJzZWFyY2gtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTYgY29sLXhzLTYgaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgKm5nSWY9XCJpbmRleCA9PSAwOyBlbHNlIGVsc2VCbG9ja1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJhZGRGaWVsZFNlYXJjaCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC02IGNvbC14cy02IGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWludXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICh1c2VyUm93U2VsZWN0KT1cImRldGFpbEVudGl0eSgkZXZlbnQpXCJcbiAgICAgIChjdXN0b20pPVwib25DdXN0b20oJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtXCJcbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBteC0yXCI+e3sgXCJvcHRpb25zLnBlcl9wYWdlXCIgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPG5iLXNlbGVjdFxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLnRvU3RyaW5nKClcIlxuICAgICAgICBbKHNlbGVjdGVkKV09XCJjdXJyZW50UGVyUGFnZVwiXG4gICAgICA+XG4gICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgcGVyUGFnZSBvZiBwZXJQYWdlc09wdGlvbnNcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRQYWdlcihwZXJQYWdlLnZhbHVlKVwiXG4gICAgICAgICAgdmFsdWU9XCJwZXJQYWdlLnZhbHVlXCJcbiAgICAgICAgICA+e3sgcGVyUGFnZS50aXRsZSB9fTwvbmItb3B0aW9uXG4gICAgICAgID5cbiAgICAgIDwvbmItc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtYm9keT5cbjwvbmItY2FyZD5cbiJdfQ==