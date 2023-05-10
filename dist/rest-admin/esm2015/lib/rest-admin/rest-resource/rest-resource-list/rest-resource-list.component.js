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
    } }, inputs: { resource: "resource" }, decls: 20, vars: 12, consts: [["status", "success"], [1, "row"], [1, "col-10"], [1, "col-1"], [1, "col-1", 2, "display", "flex"], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["icon", "plus-circle"], ["nbButton", "", "nbContextMenuTag", "my-context", "ghost", "", "status", "control", 3, "nbContextMenu"], ["icon", "menu"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, "row", "mb-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], ["class", "col-lg-1 col-md-6 col-xs-6 input-space", 4, "ngIf"], ["class", "col-lg-1 col-md-6 col-xs-6 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-1", "col-md-6", "col-xs-6", "input-space"], ["nbButton", "", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "search-outline"], ["icon", "plus-outline"], ["nbButton", "", "fullWidth", "", "status", "danger", 3, "click"], ["icon", "minus-outline"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_Template_ng2_smart_table_deleteConfirm_13_listener($event) { return ctx.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_Template_ng2_smart_table_createConfirm_13_listener($event) { return ctx.onCreateConfirm($event); })("custom", function RestResourceListComponent_Template_ng2_smart_table_custom_13_listener($event) { return ctx.onCustom($event); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBR0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzVFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzNILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBR3RHLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUMrQi9ELHFDQUtHO0lBQUEsWUFBd0I7O0lBQUEsaUJBQzFCOzs7SUFGQyxrQ0FBZ0I7SUFDZixlQUF3QjtJQUF4QixzREFBd0I7OztJQVczQixxQ0FHRztJQUFBLFlBQ0g7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ZUFBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUUsQ0FBQyxxQ0FBcUMsQ0FBQzthQUNuRDsrU0FFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ2UsTUFBTTtrQkFBMUIsU0FBUzttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VydmVyRGF0YVNvdXJjZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XG5pbXBvcnQgeyBSZXN0RmllbGQsIFJFU1RfRklFTERfVFlQRVMgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UsIE5iTWVudVNlcnZpY2UgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQUxQSEFCRVQsIFJlc3RFeHBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWV4cG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RTaGFyZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2g7XG5cbiAgYWxwaGFiZWx0OiBzdHJpbmdbXSA9IEFMUEhBQkVUO1xuICBkYXRhOiBhbnk7XG4gIHNldHRpbmdzOiBhbnk7XG4gIHNvdXJjZTogU2VydmVyRGF0YVNvdXJjZTtcbiAgY3VycmVudFBlclBhZ2U6IG51bWJlcjtcbiAgaXNGZXRjaGluZyA9IHRydWU7XG4gIHJlc3NvdXJjZU5hbWUgPSAnJztcbiAgZmlsdGVyQnkgPSAnJztcbiAgZmlsdGVyT3BlcmF0b3IgPSBGSUxURVJfT1BFUkFUT1JTO1xuICBleHBvcnRBc0NvbmZpZyA9IHtcbiAgICB0eXBlOiAncG5nJywgLy8gdGhlIHR5cGUgeW91IHdhbnQgdG8gZG93bmxvYWRcbiAgICBlbGVtZW50SWQ6ICdteVRhYmxlRWxlbWVudElkJywgLy8gdGhlIGlkIG9mIGh0bWwvdGFibGUgZWxlbWVudFxuICB9O1xuICBzZWFyY2hJdGVtcyA9IFtdO1xuICBzZWFyY2hJdGVtID0gJyc7XG5cbiAgaXRlbXMgPSBbXG4gICAgeyB0aXRsZTogJ0FsbCBmb3JtYXRzJyB9LFxuICAgIHsgdGl0bGU6ICdDU1YnIH0sXG4gICAgeyB0aXRsZTogJ0VYQ0VMJyB9LFxuICAgIHsgdGl0bGU6ICdQREYnIH0sXG4gIF07XG4gIHBlclBhZ2VzT3B0aW9ucyA9IFtcbiAgICB7IHRpdGxlOiAnNScsIHZhbHVlOiA1IH0sXG4gICAgeyB0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgeyB0aXRsZTogJzIwJywgdmFsdWU6IDIwIH0sXG4gICAgeyB0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXG4gICAgeyB0aXRsZTogJzEwMCcsIHZhbHVlOiAxMDAgfSxcbiAgXTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdENvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0UmVzb3VyY2VzOiBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbmJNZW51U2VydmljZTogTmJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIGV4cG9ydFNlcnZpY2U6IFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIHB1YmxpYyByZXN0U2hhcmU6IFJlc3RTaGFyZVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5yZXNzb3VyY2VOYW1lID1cbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsW1xuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5sZW5ndGggLSAxXG4gICAgICBdLnBhdGguc3BsaXQoJy0nKVswXTtcblxuICAgIHRoaXMucmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWVcbiAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIpIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbXMucHVzaCh7XG4gICAgICAgIGZpZWxkOiAnJyxcbiAgICAgICAgb3BlcmF0b3I6ICcnLFxuICAgICAgICB0ZXJtczogJycsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRQZXJQYWdlID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2U7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIGhpZGVTdWJIZWFkZXI6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5oaWRlQWRkU3ViSGVhZGVyLFxuICAgICAgYWN0aW9uczoge1xuICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgY3VzdG9tOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICB0aXRsZTogXCI8aSBjbGFzcz0nbmItY29tcG9zZSc+PC9pPlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICB0aXRsZTogXCI8aSAgY2xhc3M9J25iLXRyYXNoIHRleHQtZGFuZ2VyJyA+PC9pPiBcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgZGVsZXRlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwZXJQYWdlOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgIGFkZDoge1xuICAgICAgICBhZGRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1wbHVzXCIgPjwvaT4nLFxuICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+JyxcbiAgICAgICAgY29uZmlybUNyZWF0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvLyBlZGl0OiB7XG4gICAgICAvLyAgIGVkaXRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1lZGl0XCI+PC9pPicsXG4gICAgICAvLyAgIHNhdmVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgIC8vICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+JyxcbiAgICAgIC8vIH0sXG4gICAgICAvLyBkZWxldGU6IHtcbiAgICAgIC8vICAgZGVsZXRlQnV0dG9uQ29udGVudDogJzxpICBjbGFzcz1cIm5iLXRyYXNoXCI+PC9pPicsXG4gICAgICAvLyAgIGNvbmZpcm1EZWxldGU6IHRydWUsXG4gICAgICAvLyB9LFxuICAgIH07XG5cbiAgICB0aGlzLmdldExpc3QoKTtcblxuICAgIHRoaXMuc291cmNlLm9uQ2hhbmdlZCgpLnN1YnNjcmliZSgoZSkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVzdFNoYXJlLnNldExvYWRlcihmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQnKSxcbiAgICAgICAgbWFwKCh7IGl0ZW06IHsgdGl0bGUgfSB9KSA9PiB0aXRsZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgICBjYXNlICdFWENFTCc6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1BERic6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDU1YnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0NzdigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QWxsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IGV2ZW50LmRhdGEsXG4gICAgICAgIHRpdGxlOiAnU1VQUFJFU1NJT04nLFxuICAgICAgICBsaXN0Q29uZmlnOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcsXG4gICAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNzb3VyY2VOYW1lLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGRpYWxvZy5vbkNsb3NlLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgaWYgKHJlc3ApIHtcbiAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgYWRkTmV3RW50aXR5KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwoYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tYWRkYCk7XG4gIH1cblxuICBkZXRhaWxFbnRpdHkoZXZlbnQpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICBdKTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTWF0VGFibGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlZGl0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjb2x1bm1zO1xuICB9XG5cbiAgZ2V0TGlzdChwYWdlID0gbnVsbCwgcGVyUGFnZSA9IG51bGwpIHtcbiAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIodHJ1ZSk7XG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7IC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsIHBhZ2UgfTtcbiAgICB9XG4gICAgaWYgKHBlclBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7XG4gICAgICAgIC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgIHBlcl9wYWdlOiBwZXJQYWdlLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtcylcbiAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgKGN1bXVsLCBpdGVtKSA9PlxuICAgICAgICAgICAgICBjdW11bCArXG4gICAgICAgICAgICAgIGl0ZW0gK1xuICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNbaXRlbV0gK1xuICAgICAgICAgICAgICAnLCcsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcbiAgICAgICAgICAuc2xpY2UoMCwgLTEpLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0YXMgPSBldmVudC5uZXdEYXRhO1xuICAgIGNvbnN0IHNhdmVCZWxvbmdUb21hbnkgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlkpIHtcbiAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5wdXNoKHtcbiAgICAgICAgICByZXNvdXJjZXM6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICBwaXZvdDogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnBpdm90TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBkYXRhc1tlbHQubmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAuYWRkUmVzb3VyY2VzKHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLCB7IC4uLmRhdGFzLCB1c2VyX2lkOiAxIH0pXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgIGVsZW1lbnQucGl2b3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25DdXN0b20oZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNvbmZpcm0oZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RldGFpbCc6XG4gICAgICAgIHRoaXMuZGV0YWlsRW50aXR5KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0RnVsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXMuZ2V0UmVzb3VyY2VzKHtcbiAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9FeGNlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCAvLyB0aXRsZVxuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQsIGluZGljZSkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgdWR0LmRhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX2V4Y2VsJyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb1BkZigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlciA9IFtdO1xuICAgIGxldCBlbHQgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBoZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IFtdO1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0LnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWxlVGl0bGU6IHN0cmluZyA9IHRoaXMucmVzb3VyY2UubmFtZTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb1BkZihcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjdXN0b21EYXRhLFxuICAgICAgICAncmVzdF9maWxlX3BkZicsXG4gICAgICAgIGZpbGVUaXRsZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvQ3N2KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgY29uc3QgaGVhZGVyID0gW107XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGhlYWRlci5wdXNoKGVsdC5sYWJlbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9Dc3YoaGVhZGVyLCBjdXN0b21EYXRhLCAncmVzdF9maWxlX2NzdicpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0QWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBwZGZBbmRDc3ZIZWFkZXIgPSBbXTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuICAgIGNvbnN0IGNzdkRhdGEgPSBbXTtcbiAgICBjb25zdCBwZGZEYXRhID0gW107XG4gICAgbGV0IGVsdFBERiA9IFtdO1xuICAgIGxldCBlbHRDU1YgPSB7fTtcbiAgICBsZXQgZWx0RVhDRUwgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXhjZWxEYXRhOiBhbnkgPSB7XG4gICAgICBkYXRhOiBbeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIHNoZWV0SGVhZGVyXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgLy9DU1ZcbiAgICAgICAgZWx0Q1NWID0ge307XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRDU1Zbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNzdkRhdGEucHVzaChlbHRDU1YpO1xuICAgICAgICAvL1BERlxuICAgICAgICBlbHRQREYgPSBbXTtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdFBERi5wdXNoKGVsZW1lbnRbcm93XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwZGZEYXRhLnB1c2goZWx0UERGKTtcbiAgICAgICAgLy9FWENFTFxuICAgICAgICBlbHRFWENFTCA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWx0RVhDRUxbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGVsZW1lbnRbc2hlZXRIZWFkZXJba2V5c1tpbmRleF1dXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4Y2VsRGF0YS5kYXRhLnB1c2goZWx0RVhDRUwpO1xuICAgICAgICBlZGF0YS5wdXNoKGV4Y2VsRGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5nZW5lcmF0ZVppcChwZGZBbmRDc3ZIZWFkZXIsIHBkZkRhdGEsIGNzdkRhdGEsIGVkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vRmlsdGVyXG5cbiAgc2V0UGFnZXIoc2V0UGFnZXIpIHtcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdpbmcoMSwgc2V0UGFnZXIsIHRydWUpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHNlbGVjdEZpbHRlckJ5KHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID0gdmFsdWU7XG4gIH1cbiAgc2VsZWN0T3BlcmF0b3IodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ub3BlcmF0b3IgPSB2YWx1ZTtcbiAgfVxuXG4gIG9uRmlsdGVyKHZhbCwgaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggIT0gdW5kZWZpbmVkICYmIGluZGV4ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnRlcm1zID0gdmFsPy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWFyY2hJdGVtID0gdmFsPy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBhZGRGaWVsZFNlYXJjaCgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLnB1c2goeyBmaWVsZDogJycsIG9wZXJhdG9yOiAnJywgdGVybXM6ICcnIH0pO1xuICB9XG5cbiAgcmVtb3ZlRmllbGRTZWFyY2goaW5kZXgpIHtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBzdGFydFNlYXJjaCgpIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICBsZXQgc2VhcmNoID0gJyc7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5maWVsZCAhPSAnJyAmJiBlbGVtZW50LnRlcm1zICE9ICcnKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lm9wZXJhdG9yICE9ICc9Jykge1xuICAgICAgICAgIHBhcmFtc1tlbGVtZW50LmZpZWxkICsgJy0nICsgZWxlbWVudC5vcGVyYXRvcl0gPSBgJHtlbGVtZW50LnRlcm1zfWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyYW1zW2VsZW1lbnQuZmllbGRdID0gYCR7ZWxlbWVudC50ZXJtc31gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgc2VhcmNoID0gT2JqZWN0LmtleXModGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zKVxuICAgICAgLnJlZHVjZShcbiAgICAgICAgKGN1bXVsLCBpdGVtKSA9PlxuICAgICAgICAgIGN1bXVsICsgaXRlbSArICc9JyArIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtc1tpdGVtXSArICcsJyxcbiAgICAgICAgJydcbiAgICAgIClcbiAgICAgIC5zbGljZSgwLCAtMSk7XG4gICAgaWYgKHNlYXJjaCAhPSAnJykge1xuICAgICAgc2VhcmNoICs9ICcmJztcbiAgICB9XG4gICAgc2VhcmNoICs9IE9iamVjdC5rZXlzKHBhcmFtcylcbiAgICAgIC5yZWR1Y2UoKGN1bXVsLCBpdGVtKSA9PiBjdW11bCArIGl0ZW0gKyAnPScgKyBwYXJhbXNbaXRlbV0gKyAnJicsICcnKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaCk7XG5cbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKHRoaXMuaHR0cCwge1xuICAgICAgZW5kUG9pbnQ6XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmwgK1xuICAgICAgICAnLycgK1xuICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpICtcbiAgICAgICAgJz8nICtcbiAgICAgICAgc2VhcmNoLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmItY2FyZCBzdGF0dXM9XCJzdWNjZXNzXCI+XG4gIDxuYi1jYXJkLWhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTEwXCI+XG4gICAgICAgIHt7IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy50aXRsZSB9fVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0xXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4XCI+XG4gICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiY29udHJvbFwiIChjbGljayk9XCJhZGROZXdFbnRpdHkoKVwiPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLWNpcmNsZVwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dFwiXG4gICAgICAgICAgZ2hvc3RcbiAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJtZW51XCI+PC9uYi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8IS0tIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBcInJlc3QtbGlzdC5leHBvcnRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj4gLS0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICA8bmItY2FyZC1ib2R5XG4gICAgW25iU3Bpbm5lcl09XCJ0aGlzLnJlc3RTaGFyZS5saXN0TG9hZGVyXCJcbiAgICBuYlNwaW5uZXJTaXplPVwibGFyZ2VcIlxuICAgIG5iU3Bpbm5lclN0YXR1cz1cInByaW1hcnlcIlxuICA+XG4gICAgPCEtLSBSZXN0LXNlYXJjaCBpbXBsZW1lbnQgLS0+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBtYi01XCIgKm5nSWY9XCJ0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICpuZ0lmPVwidGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlci5maWx0ZXJCeS5sZW5ndGggPiAwXCJcbiAgICAgID5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VhcmNoIG9mIHNlYXJjaEl0ZW1zOyBsZXQgaW5kZXggPSBpbmRleFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wteHMtMTIgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgIDwhLS0gU2VsZWN0IHdpdGggZmlsdGVyIGJ5IC0tPlxuICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5maWx0ZXJQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cInNlbGVjdEZpbHRlckJ5KCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgbGV0IGZpbHRlciBvZiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyLmZpbHRlckJ5XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwiZmlsdGVyXCJcbiAgICAgICAgICAgICAgICA+e3sgZmlsdGVyIHwgdGl0bGVjYXNlIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0Lm9wZXJhdG9yJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwic2VsZWN0T3BlcmF0b3IoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wZXJhdG9yIG9mIGZpbHRlck9wZXJhdG9yXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3BlcmF0b3IudmFsdWVcIlxuICAgICAgICAgICAgICAgID57eyBvcGVyYXRvci5uYW1lIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgIDwvbmItb3B0aW9uPlxuICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXhzLTEyIGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2NvbC0xMic6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIgPT0gbnVsbFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudC50YXJnZXQsIGluZGV4KVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5zZWFyY2hQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTYgY29sLXhzLTYgaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgKm5nSWY9XCJpbmRleCA9PSAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGZ1bGxXaWR0aCBzdGF0dXM9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInN0YXJ0U2VhcmNoKClcIj5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInNlYXJjaC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMSBjb2wtbWQtNiBjb2wteHMtNiBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDA7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEZpZWxkU2VhcmNoKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1cy1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTYgY29sLXhzLTYgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlRmllbGRTZWFyY2goaW5kZXgpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJtaW51cy1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG5cbiAgICA8bmcyLXNtYXJ0LXRhYmxlXG4gICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgKGRlbGV0ZUNvbmZpcm0pPVwib25EZWxldGVDb25maXJtKCRldmVudClcIlxuICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICA+XG4gICAgPC9uZzItc21hcnQtdGFibGU+XG5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiXG4gICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW1cIlxuICAgID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIG14LTJcIj57eyBcIm9wdGlvbnMucGVyX3BhZ2VcIiB8IHRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8bmItc2VsZWN0XG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJyZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UudG9TdHJpbmcoKVwiXG4gICAgICAgIFsoc2VsZWN0ZWQpXT1cImN1cnJlbnRQZXJQYWdlXCJcbiAgICAgID5cbiAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBwZXJQYWdlIG9mIHBlclBhZ2VzT3B0aW9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cInNldFBhZ2VyKHBlclBhZ2UudmFsdWUpXCJcbiAgICAgICAgICB2YWx1ZT1cInBlclBhZ2UudmFsdWVcIlxuICAgICAgICAgID57eyBwZXJQYWdlLnRpdGxlIH19PC9uYi1vcHRpb25cbiAgICAgICAgPlxuICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1ib2R5PlxuPC9uYi1jYXJkPlxuIl19