import { FILTER_OPERATORS } from './../service/rest-resource.service';
import { Component, Input, ViewChild, } from '@angular/core';
import { ServerDataSource } from 'ng2-smart-table';
import { REST_FIELD_TYPES } from '../models/rest-resource.model';
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
import * as i9 from "@angular/common";
import * as i10 from "ng2-smart-table";
import * as i11 from "@ngx-translate/core";
const _c0 = ["search"];
const _c1 = ["autoBelongToMany"];
function RestResourceListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.selectAllRows(); });
    i0.ɵɵelement(2, "input", 21);
    i0.ɵɵtext(3, "Selectionner ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", (ctx_r0.selectedRows == null ? null : ctx_r0.selectedRows.length) == ctx_r0.source.count());
} }
function RestResourceListComponent_button_17_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function RestResourceListComponent_button_17_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 22);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r20 = ctx.$implicit;
    i0.ɵɵproperty("value", filter_r20);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, filter_r20["name"]));
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r22 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r22.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, operator_r22.name), " ");
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "nb-select", 27);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_5_Template_nb_select_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r25); const index_r11 = i0.ɵɵnextContext().index; const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.selectOperator($event, index_r11); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template, 3, 4, "nb-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "rest-list.operator"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r13.filterOperator);
} }
const _c2 = function (a0) { return { "col-12": a0 }; };
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "input", 36);
    i0.ɵɵlistener("input", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r28); const index_r11 = i0.ɵɵnextContext().index; const ctx_r26 = i0.ɵɵnextContext(3); return ctx_r26.onFilter($event.target, index_r11); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r14.resource.listConfig.searchFilter == null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 2, "rest-list.searchPlaceholder"));
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 44);
} if (rf & 2) {
    const tree_r33 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r33["name"]);
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r34 = ctx.$implicit;
    const index_r11 = i0.ɵɵnextContext(2).index;
    const ctx_r32 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r34[ctx_r32.searchItems[index_r11].fieldName ? ctx_r32.searchItems[index_r11].fieldName : "id"], " ");
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵelementStart(2, "nb-tag-list", 38);
    i0.ɵɵlistener("tagRemove", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(4); return ctx_r36.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template, 1, 1, "nb-tag", 39);
    i0.ɵɵelementStart(4, "input", 40, 41);
    i0.ɵɵlistener("keyup", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r37); const index_r11 = i0.ɵɵnextContext().index; const ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.filterInput($event, index_r11); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 42, 43);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r37); const index_r11 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.onChoose($event, index_r11); });
    i0.ɵɵtemplate(8, RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template, 2, 2, "nb-option", 28);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r31 = i0.ɵɵreference(7);
    const index_r11 = i0.ɵɵnextContext().index;
    const ctx_r15 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r15.belongToMany["id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r31)("placeholder", ctx_r15.searchItems[index_r11].fieldName ? ctx_r15.searchItems[index_r11].fieldName : "id")("formControlName", "id");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 5, ctx_r15.allFilterContains["id"]));
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r44); const ctx_r43 = i0.ɵɵnextContext(4); return ctx_r43.startSearch(); });
    i0.ɵɵelement(2, "nb-icon", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(4); return ctx_r45.addFieldSearch(); });
    i0.ɵɵelement(2, "nb-icon", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelementStart(1, "button", 51);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_template_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r49); const index_r11 = i0.ɵɵnextContext().index; const ctx_r47 = i0.ɵɵnextContext(3); return ctx_r47.removeFieldSearch(index_r11); });
    i0.ɵɵelement(2, "nb-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_19_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "nb-select", 27);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_19_ng_container_1_ng_container_1_Template_nb_select_selectedChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r51); const index_r11 = restoredCtx.index; const ctx_r50 = i0.ɵɵnextContext(3); return ctx_r50.selectFilterBy($event, index_r11); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_19_ng_container_1_ng_container_1_nb_option_4_Template, 3, 4, "nb-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 24);
    i0.ɵɵtemplate(6, RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_6_Template, 3, 6, "div", 29);
    i0.ɵɵelementStart(7, "div", 30);
    i0.ɵɵtemplate(8, RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_container_8_Template, 10, 7, "ng-container", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_9_Template, 3, 0, "div", 31);
    i0.ɵɵtemplate(10, RestResourceListComponent_div_19_ng_container_1_ng_container_1_div_10_Template, 3, 0, "div", 32);
    i0.ɵɵtemplate(11, RestResourceListComponent_div_19_ng_container_1_ng_container_1_ng_template_11_Template, 3, 0, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r11 = ctx.index;
    const _r18 = i0.ɵɵreference(12);
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 9, "rest-list.filterPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r9.resource.listConfig.searchFilter.filterBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.searchItems[index_r11].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.searchItems[index_r11].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r9.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r9.searchItems[index_r11].field === "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r11 == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r11 == 0)("ngIfElse", _r18);
} }
function RestResourceListComponent_div_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_19_ng_container_1_ng_container_1_Template, 13, 11, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.searchItems);
} }
function RestResourceListComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_19_ng_container_1_Template, 2, 1, "ng-container", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.resource.listConfig.searchFilter.filterBy.length > 0);
} }
function RestResourceListComponent_nb_option_26_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-option", 53);
    i0.ɵɵlistener("click", function RestResourceListComponent_nb_option_26_Template_nb_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r54); const perPage_r52 = restoredCtx.$implicit; const ctx_r53 = i0.ɵɵnextContext(); return ctx_r53.setPager(perPage_r52.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const perPage_r52 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(perPage_r52.title);
} }
export class RestResourceListComponent {
    constructor(fb, serviceRestConfig, serviceRestResources, http, dialogService, activatedRoute, router, nbMenuService, exportService, restShare) {
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
        this.router.navigate([
            `/admin/${this.ressourceName}-detail`,
            event.data.id,
        ]);
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
        this.source.getAll().then(rows => {
            var _a;
            if (((_a = this.selectedRows) === null || _a === void 0 ? void 0 : _a.length) !== (rows === null || rows === void 0 ? void 0 : rows.length)) {
                this.selectedRows = [];
                rows.forEach(row => {
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
            colunms["isChecked"] = this.isChecked;
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
RestResourceListComponent.ɵfac = function RestResourceListComponent_Factory(t) { return new (t || RestResourceListComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestAdminConfigService), i0.ɵɵdirectiveInject(i3.RestResourceService), i0.ɵɵdirectiveInject(i4.HttpClient), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i6.ActivatedRoute), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i7.RestExportService), i0.ɵɵdirectiveInject(i8.RestShareService)); };
RestResourceListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListComponent, selectors: [["ngx-rest-resource-list"]], viewQuery: function RestResourceListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 27, vars: 18, consts: [["status", "primary"], [1, "row", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "text-white"], ["class", "", 4, "ngIf"], [1, "", 2, "height", "40px"], ["nbButton", "", "ghost", "", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["icon", "plus-circle"], ["nbButton", "", "nbContextMenuTag", "my-context", "ghost", "", "status", "control", 3, "nbContextMenu"], ["icon", "download-outline"], ["nbButton", "", "ghost", "", "status", "control", 3, "click", 4, "ngIf"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, ""], ["type", "checkbox", 1, "mr-2", 3, "checked"], ["icon", "trash", "color", "danger", 2, "color", "rgb(238, 130, 157)"], [1, "row", "mb-5"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-12 col-xs-12 input-space", 3, "ngClass", 4, "ngIf"], [3, "formGroup"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space row", 4, "ngIf"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], [1, "input-space"], [3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], [3, "selectedChange"], ["belongToField", ""], ["removable", "", 3, "text"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space", "row"], ["nbButton", "", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "search-outline"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space"], ["icon", "plus-outline"], [1, "col-lg-1", "input-space"], ["nbButton", "", "fullWidth", "", "status", "danger", 3, "click"], ["icon", "minus-outline"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "h6", 3);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, RestResourceListComponent_div_6_Template, 4, 1, "div", 4);
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "button", 6);
        i0.ɵɵlistener("click", function RestResourceListComponent_Template_button_click_8_listener() { return ctx.toggleShowCheckbox(); });
        i0.ɵɵelementStart(9, "input", 7);
        i0.ɵɵlistener("ngModelChange", function RestResourceListComponent_Template_input_ngModelChange_9_listener($event) { return ctx.showCheckbox = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "button", 8);
        i0.ɵɵlistener("click", function RestResourceListComponent_Template_button_click_10_listener() { return ctx.addNewEntity(); });
        i0.ɵɵelementStart(11, "span");
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(14, "nb-icon", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "button", 10);
        i0.ɵɵelement(16, "nb-icon", 11);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(17, RestResourceListComponent_button_17_Template, 2, 0, "button", 12);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(18, "nb-card-body", 13);
        i0.ɵɵtemplate(19, RestResourceListComponent_div_19_Template, 2, 1, "div", 14);
        i0.ɵɵelementStart(20, "ng2-smart-table", 15);
        i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_Template_ng2_smart_table_deleteConfirm_20_listener($event) { return ctx.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_Template_ng2_smart_table_createConfirm_20_listener($event) { return ctx.onCreateConfirm($event); })("custom", function RestResourceListComponent_Template_ng2_smart_table_custom_20_listener($event) { return ctx.onCustom($event); })("userRowSelect", function RestResourceListComponent_Template_ng2_smart_table_userRowSelect_20_listener($event) { return ctx.detailEntity($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "div", 16);
        i0.ɵɵelementStart(22, "label", 17);
        i0.ɵɵtext(23);
        i0.ɵɵpipe(24, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(25, "nb-select", 18);
        i0.ɵɵlistener("selectedChange", function RestResourceListComponent_Template_nb_select_selectedChange_25_listener($event) { return ctx.currentPerPage = $event; });
        i0.ɵɵtemplate(26, RestResourceListComponent_nb_option_26_Template, 2, 1, "nb-option", 19);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.resource.listConfig.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCheckbox);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngModel", ctx.showCheckbox);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(13, 14, "add"));
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("nbContextMenu", ctx.items);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", (ctx.selectedRows == null ? null : ctx.selectedRows.length) > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nbSpinner", ctx.restShare.listLoader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.listConfig.searchFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("settings", ctx.settings)("source", ctx.source);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(24, 16, "options.per_page"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.resource.listConfig.perPage.toString())("selected", ctx.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.perPagesOptions);
    } }, directives: [i5.NbCardComponent, i5.NbCardHeaderComponent, i9.NgIf, i5.NbButtonComponent, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel, i5.NbIconComponent, i5.NbContextMenuDirective, i5.NbCardBodyComponent, i5.NbSpinnerDirective, i10.Ng2SmartTableComponent, i5.NbSelectComponent, i9.NgForOf, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NbOptionComponent, i9.NgClass, i5.NbInputDirective, i5.NbTagListComponent, i5.NbTagInputDirective, i5.NbAutocompleteDirective, i1.DefaultValueAccessor, i1.FormControlName, i5.NbAutocompleteComponent, i5.NbTagComponent], pipes: [i11.TranslatePipe, i9.TitleCasePipe, i9.AsyncPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-default   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-default   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-dark   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-dark   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-cosmic   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-corporate   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}  ng2-st-tbody-edit-delete{display:none;height:0!important}  ng2-st-tbody-custom{display:flex;text-align:center}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.nb-theme-default[_ngcontent-%COMP%]   ng2-smart-table[_ngcontent-%COMP%]   th.ng2-smart-actions-title-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceListComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-list',
                templateUrl: './rest-resource-list.component.html',
                styleUrls: ['./rest-resource-list.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.RestAdminConfigService }, { type: i3.RestResourceService }, { type: i4.HttpClient }, { type: i5.NbDialogService }, { type: i6.ActivatedRoute }, { type: i6.Router }, { type: i5.NbMenuService }, { type: i7.RestExportService }, { type: i8.RestShareService }]; }, { resource: [{
            type: Input
        }], search: [{
            type: ViewChild,
            args: ['search']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzVFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzNILE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBR3RHLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFFBQVEsRUFBcUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUc3RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG1EQUFtRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ2YvRiwrQkFB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O2FBQ25EO3lVQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFDZSxNQUFNO2tCQUExQixTQUFTO21CQUFDLFFBQVE7WUFDWSxpQkFBaUI7a0JBQS9DLFNBQVM7bUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xuaW1wb3J0IHsgUmVzdEZpZWxkLCBSRVNUX0ZJRUxEX1RZUEVTIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlLCBOYlRhZ0NvbXBvbmVudCB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTFBIQUJFVCwgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFNoYXJlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVzb3VyY2U6IFJlc3RSZXNvdXJjZTtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoO1xuICBAVmlld0NoaWxkKCdhdXRvQmVsb25nVG9NYW55JykgaW5wdXRCZWxvbmdUb01hbnk7XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBhbHBoYWJlbHQ6IHN0cmluZ1tdID0gQUxQSEFCRVQ7XG4gIGRhdGE6IGFueTtcbiAgc2V0dGluZ3M6IGFueTtcbiAgc291cmNlOiBTZXJ2ZXJEYXRhU291cmNlO1xuICBjdXJyZW50UGVyUGFnZTogbnVtYmVyO1xuICBpc0ZldGNoaW5nID0gdHJ1ZTtcbiAgcmVzc291cmNlTmFtZSA9ICcnO1xuICBmaWx0ZXJCeSA9ICcnO1xuICBmaWx0ZXJPcGVyYXRvciA9IEZJTFRFUl9PUEVSQVRPUlM7XG4gIGV4cG9ydEFzQ29uZmlnID0ge1xuICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxuICAgIGVsZW1lbnRJZDogJ215VGFibGVFbGVtZW50SWQnLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XG4gIH07XG4gIHNlYXJjaEl0ZW1zID0gW107XG4gIHNlYXJjaEl0ZW0gPSAnJztcblxuICBzaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgc2hvd0RldGFpbHMgPSBmYWxzZTtcbiAgb3B0aW9uczogYW55ID0ge307XG4gIGFsbEZpbHRlckNvbnRhaW5zOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9WYWx1ZTogYW55ID0ge307XG4gIGJlbG9uZ1RvTWFueTogYW55ID0ge307XG4gIGNvbnRyb2xzOiBhbnk7XG4gIGlzQ2hlY2tlZDogYW55ID0geyB9O1xuXG4gIHNlbGVjdGVkUm93czogYW55W10gPSBbXTtcblxuICBpdGVtcyA9IFtcbiAgICB7IHRpdGxlOiAnQWxsIGZvcm1hdHMnIH0sXG4gICAgeyB0aXRsZTogJ0NTVicgfSxcbiAgICB7IHRpdGxlOiAnRVhDRUwnIH0sXG4gICAgeyB0aXRsZTogJ1BERicgfSxcbiAgXTtcbiAgcGVyUGFnZXNPcHRpb25zID0gW1xuICAgIHsgdGl0bGU6ICc1JywgdmFsdWU6IDUgfSxcbiAgICB7IHRpdGxlOiAnMTAnLCB2YWx1ZTogMTAgfSxcbiAgICB7IHRpdGxlOiAnMjAnLCB2YWx1ZTogMjAgfSxcbiAgICB7IHRpdGxlOiAnNTAnLCB2YWx1ZTogNTAgfSxcbiAgICB7IHRpdGxlOiAnMTAwJywgdmFsdWU6IDEwMCB9LFxuICBdO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0Q29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RSZXNvdXJjZXM6IFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBuYk1lbnVTZXJ2aWNlOiBOYk1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXhwb3J0U2VydmljZTogUmVzdEV4cG9ydFNlcnZpY2UsXG4gICAgcHVibGljIHJlc3RTaGFyZTogUmVzdFNoYXJlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgICBpZiAoIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZz8uc2VhcmNoRmlsdGVyPy5maWx0ZXJCeSkge1xuICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZz8uc2VhcmNoRmlsdGVyPy5maWx0ZXJCeT8ucmVkdWNlKFxuICAgICAgICAoY3VtdWwsIGVsdCkgPT4ge1xuICAgICAgICAgIHN3aXRjaCAoZWx0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgdGhpcy5iZWxvbmdUb01hbnlbZWx0LnZhbHVlXSA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogWycnXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAodGhpcy5jb250cm9scyk7XG4gICAgdGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10gPSBuZXcgU2V0KCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHtcbiAgICAgICAgZmllbGQ6ICcnLFxuICAgICAgICBvcGVyYXRvcjogJycsXG4gICAgICAgIHRlcm1zOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBlclBhZ2UgPSB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZTtcbiAgICBcblxuICAgIHRoaXMuZ2V0TGlzdCgpO1xuXG4gICAgdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0NoZWNrZWQgPSB7XG4gICAgICB0aXRsZTogJ2NoZWNrJyxcbiAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljazogKGV2ZW50LCByb3dEYXRhKSA9PiB0aGlzLm9uQ2hlY2tib3hDbGljayhldmVudCwgcm93RGF0YSksXG4gICAgICAgIHNlbGVjdGVkOiB0aGlzLnNlbGVjdGVkUm93cy5maW5kKChlbHQpID0+IGVsdD8uaWQgPT0gcm93Py5pZCkgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgY2VsbCxcbiAgICAgICAgcm93LFxuICAgICAgfSksXG4gICAgICBlZGl0b3I6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICByZW5kZXJDb21wb25lbnQ6IFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgcG9zaXRpb246ICdyaWdodCcsXG4gICAgICAgIGN1c3RvbTogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZXRhaWwnLFxuICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLWNvbXBvc2UnPjwvaT5cIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgdGl0bGU6IFwiPGkgIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcicgPjwvaT4gXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgIGRlbGV0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgcGFnZXI6IHtcbiAgICAgICAgcGVyUGFnZTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UsXG4gICAgICB9LFxuXG4gICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICBhZGQ6IHtcbiAgICAgICAgYWRkQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItcGx1c1wiID48L2k+JyxcbiAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAgIGNvbmZpcm1DcmVhdGU6IHRydWUsXG4gICAgICB9LFxuICAgICAgLy8gZWRpdDoge1xuICAgICAgLy8gICBlZGl0QnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItZWRpdFwiPjwvaT4nLFxuICAgICAgLy8gICBzYXZlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAvLyAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAvLyB9LFxuICAgICAgLy8gZGVsZXRlOiB7XG4gICAgICAvLyAgIGRlbGV0ZUJ1dHRvbkNvbnRlbnQ6ICc8aSAgY2xhc3M9XCJuYi10cmFzaFwiPjwvaT4nLFxuICAgICAgLy8gICBjb25maXJtRGVsZXRlOiB0cnVlLFxuICAgICAgLy8gfSxcbiAgICB9O1xuXG4gICAgdGhpcy5uYk1lbnVTZXJ2aWNlXG4gICAgICAub25JdGVtQ2xpY2soKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gdGFnID09PSAnbXktY29udGV4dCcpLFxuICAgICAgICBtYXAoKHsgaXRlbTogeyB0aXRsZSB9IH0pID0+IHRpdGxlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgodGl0bGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aXRsZSkge1xuICAgICAgICAgIGNhc2UgJ0VYQ0VMJzpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0VG9FeGNlbCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnUERGJzpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0VG9QZGYoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0NTVic6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvQ3N2KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhpcy5leHBvcnRBbGwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZVNob3dDaGVja2JveCgpIHtcbiAgICB0aGlzLnNob3dDaGVja2JveCA9ICF0aGlzLnNob3dDaGVja2JveDtcbiAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gIH1cblxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IGV2ZW50LmRhdGEsXG4gICAgICAgIHRpdGxlOiAnU1VQUFJFU1NJT04nLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiBmYWxzZSxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlQWxsQ29uZmlybSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHRoaXMuc2VsZWN0ZWRSb3dzLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1RPVVQgU1VQUFJJTUVSJyxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0VudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWFkZGApO1xuICB9XG5cbiAgZGV0YWlsRW50aXR5KGV2ZW50KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgIGV2ZW50LmRhdGEuaWQsXG4gICAgXSk7XG4gIH1cbiAgb25DaGVja2JveENsaWNrKGV2ZW50OiBhbnksIHJvdzogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSwgMSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdEFsbFJvd3MoKSB7XG4gICAgdGhpcy5zb3VyY2UuZ2V0QWxsKCkudGhlbihyb3dzID0+IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoICE9PSByb3dzPy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAgICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH0gIFxuXG4gIHByaXZhdGUgY3JlYXRlTWF0VGFibGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGlmICghdGhpcy5zaG93Q2hlY2tib3gpIHtcbiAgICAgIGNvbHVubXNbXCJpc0NoZWNrZWRcIl0gPSB0aGlzLmlzQ2hlY2tlZDtcbiAgICB9XG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgICAgICBhZGRhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiAoY2VsbCwgcm93KSA9PiAoe1xuICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlbmRlckNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgcmV0dXJuIGNvbHVubXM7XG4gIH1cbiAgXG5cbiAgZ2V0TGlzdChwYWdlID0gbnVsbCwgcGVyUGFnZSA9IG51bGwpIHtcbiAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIodHJ1ZSk7XG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7IC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsIHBhZ2UgfTtcbiAgICB9XG4gICAgaWYgKHBlclBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7XG4gICAgICAgIC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgIHBlcl9wYWdlOiBwZXJQYWdlLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtcylcbiAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgKGN1bXVsLCBpdGVtKSA9PlxuICAgICAgICAgICAgICBjdW11bCArXG4gICAgICAgICAgICAgIGl0ZW0gK1xuICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNbaXRlbV0gK1xuICAgICAgICAgICAgICAnLCcsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcbiAgICAgICAgICAuc2xpY2UoMCwgLTEpLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0YXMgPSBldmVudC5uZXdEYXRhO1xuICAgIGNvbnN0IHNhdmVCZWxvbmdUb21hbnkgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlkpIHtcbiAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5wdXNoKHtcbiAgICAgICAgICByZXNvdXJjZXM6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICBwaXZvdDogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnBpdm90TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBkYXRhc1tlbHQubmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAuYWRkUmVzb3VyY2VzKHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLCB7IC4uLmRhdGFzLCB1c2VyX2lkOiAxIH0pXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgIGVsZW1lbnQucGl2b3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25DdXN0b20oZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNvbmZpcm0oZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RldGFpbCc6XG4gICAgICAgIHRoaXMuZGV0YWlsRW50aXR5KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0RnVsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXMuZ2V0UmVzb3VyY2VzKHtcbiAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9FeGNlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCAvLyB0aXRsZVxuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQsIGluZGljZSkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgdWR0LmRhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX2V4Y2VsJyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb1BkZigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlciA9IFtdO1xuICAgIGxldCBlbHQgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBoZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IFtdO1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0LnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWxlVGl0bGU6IHN0cmluZyA9IHRoaXMucmVzb3VyY2UubmFtZTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb1BkZihcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjdXN0b21EYXRhLFxuICAgICAgICAncmVzdF9maWxlX3BkZicsXG4gICAgICAgIGZpbGVUaXRsZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvQ3N2KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgY29uc3QgaGVhZGVyID0gW107XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGhlYWRlci5wdXNoKGVsdC5sYWJlbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9Dc3YoaGVhZGVyLCBjdXN0b21EYXRhLCAncmVzdF9maWxlX2NzdicpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0QWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBwZGZBbmRDc3ZIZWFkZXIgPSBbXTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuICAgIGNvbnN0IGNzdkRhdGEgPSBbXTtcbiAgICBjb25zdCBwZGZEYXRhID0gW107XG4gICAgbGV0IGVsdFBERiA9IFtdO1xuICAgIGxldCBlbHRDU1YgPSB7fTtcbiAgICBsZXQgZWx0RVhDRUwgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXhjZWxEYXRhOiBhbnkgPSB7XG4gICAgICBkYXRhOiBbeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIHNoZWV0SGVhZGVyXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgLy9DU1ZcbiAgICAgICAgZWx0Q1NWID0ge307XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRDU1Zbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNzdkRhdGEucHVzaChlbHRDU1YpO1xuICAgICAgICAvL1BERlxuICAgICAgICBlbHRQREYgPSBbXTtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdFBERi5wdXNoKGVsZW1lbnRbcm93XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwZGZEYXRhLnB1c2goZWx0UERGKTtcbiAgICAgICAgLy9FWENFTFxuICAgICAgICBlbHRFWENFTCA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWx0RVhDRUxbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGVsZW1lbnRbc2hlZXRIZWFkZXJba2V5c1tpbmRleF1dXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4Y2VsRGF0YS5kYXRhLnB1c2goZWx0RVhDRUwpO1xuICAgICAgICBlZGF0YS5wdXNoKGV4Y2VsRGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5nZW5lcmF0ZVppcChwZGZBbmRDc3ZIZWFkZXIsIHBkZkRhdGEsIGNzdkRhdGEsIGVkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vRmlsdGVyXG5cbiAgc2V0UGFnZXIoc2V0UGFnZXIpIHtcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdpbmcoMSwgc2V0UGFnZXIsIHRydWUpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHNlbGVjdEZpbHRlckJ5KGRhdGEsIGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgPSBkYXRhWyd2YWx1ZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZSA9IGRhdGFbJ3Jlc291cmNlRmllbGROYW1lJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ucmVzb3VyY2UgPSBkYXRhWydyZXNvdXJjZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnJlc3NvdXJjZUZpbHRlck5hbWUgPSBkYXRhWydyZXNzb3VyY2VGaWx0ZXJOYW1lJ107XG4gICAgaWYgKGRhdGFbJ3ZhbHVlJ10gPT09ICdpZCcpIHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gZGF0YT8ucmVzb3VyY2U/LmFkZENvbmZpZztcbiAgICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgYXBpOiByZXNvdXJjZS5hcGksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMub3B0aW9uc1tkYXRhWyd2YWx1ZSddXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgIHhbJ2lkJ11cbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbJ2lkJ10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tkYXRhWyd2YWx1ZSddXSA9IG9mKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2RhdGFbJ3ZhbHVlJ11dXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdE9wZXJhdG9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLm9wZXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBvbkZpbHRlcih2YWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS50ZXJtcyA9IHZhbD8udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbSA9IHZhbD8udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHsgZmllbGQ6ICcnLCBvcGVyYXRvcjogJycsIHRlcm1zOiAnJyB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJNYW55KFxuICAgIHZhbHVlOiBhbnksXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBvcHRpb25zID0gJ2JlbG9uZ1RvTWFueU9wdGlvbnMnXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICYmIHRoaXMub3B0aW9uc1snaWQnXT8ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1snaWQnXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgOiAnaWQnLFxuICAgICAgICBdLnNvbWUoKGVsdCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtvcHRpb25WYWx1ZVtlbHRdPy50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICBgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucyh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyTWFueShmaWx0ZXJTdHJpbmcsIGluZGV4KSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zWydpZCddID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cblxuICBvblRhZ1JlbW92ZUJlbG9uZyh0YWdUb1JlbW92ZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcbiAgICBjZWxsRGF0YS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHRbJ25hbWUnXSAhPSB0YWdUb1JlbW92ZS50ZXh0KSBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFsnaWQnXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuICAvL2JlbG9uZ1RvTWFueU9wdGlvbnNcbiAgb25DaG9vc2UoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuICAgICAgaWYgKHNlYXJjaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbmV3RWx0ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBzYXZlUmVsYXRlZElkTmFtZTogZXZlbnQuaWQsXG4gICAgICAgICAgc2F2ZVJlc291cmNlSWROYW1lOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudFtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFsnaWQnXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSAnJztcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQ/LmZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgIGxldCB0YWIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuYmVsb25nVG9NYW55WydpZCddKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRhYi5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgbGlzdElkID0gdGFiLm1hcCgoZWx0OiBhbnkpID0+IGVsdD8uaWQpLmpvaW4oJywnKTtcbiAgICAgICAgICBwYXJhbXNbYCR7ZWxlbWVudD8ucmVzc291cmNlRmlsdGVyTmFtZX0taW5gXSA9IGAke2xpc3RJZH1gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudD8uZmllbGQgIT0gJycgJiYgZWxlbWVudD8udGVybXMgIT0gJycpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudD8ub3BlcmF0b3IgIT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJhbXNbXG4gICAgICAgICAgICAgIGVsZW1lbnQ/LmZpZWxkICsgJy0nICsgZWxlbWVudD8ub3BlcmF0b3JcbiAgICAgICAgICAgIF0gPSBgJHtlbGVtZW50Py50ZXJtc31gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNbZWxlbWVudD8uZmllbGRdID0gYCR7ZWxlbWVudD8udGVybXN9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2ggPSBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgY3VtdWwgKyBpdGVtICsgJz0nICsgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICsgJywnLFxuICAgICAgICAnJ1xuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgIHNlYXJjaCArPSAnJic7XG4gICAgfVxuICAgIHNlYXJjaCArPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAucmVkdWNlKChjdW11bCwgaXRlbSkgPT4gY3VtdWwgKyBpdGVtICsgJz0nICsgcGFyYW1zW2l0ZW1dICsgJyYnLCAnJylcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIHNlYXJjaCxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5iLWNhcmQgc3RhdHVzPVwicHJpbWFyeVwiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7eyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcudGl0bGUgfX1cbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nSWY9XCJzaG93Q2hlY2tib3hcIj5cbiAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MoKVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID09IHRoaXMuc291cmNlLmNvdW50KClcIlxuICAgICAgICAgIC8+U2VsZWN0aW9ubmVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNDBweDtcIj5cbiAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCAoY2xpY2spPVwidG9nZ2xlU2hvd0NoZWNrYm94KClcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzaG93Q2hlY2tib3hcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cImFkZE5ld0VudGl0eSgpXCI+XG4gICAgICAgICAgPHNwYW4+e3sgXCJhZGRcIiB8IHRyYW5zbGF0ZSB9fTwvc3Bhbj5cbiAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1cy1jaXJjbGVcIj48L25iLWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICAgIGdob3N0XG4gICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmItaWNvbiBpY29uPVwiZG93bmxvYWQtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgIGdob3N0XG4gICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlQWxsQ29uZmlybSgpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJ0cmFzaFwiIGNvbG9yPVwiZGFuZ2VyXCIgc3R5bGU9XCJjb2xvcjogcmdiKDIzOCwgMTMwLCAxNTcpO1wiPjwvbmItaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwhLS0gPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgIG5iQ29udGV4dE1lbnVUYWc9XCJteS1jb250ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IFwicmVzdC1saXN0LmV4cG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPiAtLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWJvZHlcbiAgICBbbmJTcGlubmVyXT1cInRoaXMucmVzdFNoYXJlLmxpc3RMb2FkZXJcIlxuICAgIG5iU3Bpbm5lclNpemU9XCJsYXJnZVwiXG4gICAgbmJTcGlubmVyU3RhdHVzPVwicHJpbWFyeVwiXG4gID5cbiAgICA8IS0tIFJlc3Qtc2VhcmNoIGltcGxlbWVudCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTVcIiAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJ0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyLmZpbHRlckJ5Lmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWFyY2ggb2Ygc2VhcmNoSXRlbXM7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgPCEtLSBTZWxlY3Qgd2l0aCBmaWx0ZXIgYnkgLS0+XG4gICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0LmZpbHRlclBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwic2VsZWN0RmlsdGVyQnkoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyIG9mIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnlcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgID57eyBmaWx0ZXJbXCJuYW1lXCJdIHwgdGl0bGVjYXNlIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5vcGVyYXRvcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RPcGVyYXRvcigkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3BlcmF0b3Igb2YgZmlsdGVyT3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wZXJhdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBvcGVyYXRvci5uYW1lIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTEyIGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICdjb2wtMTInOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyID09IG51bGxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbHRlcigkZXZlbnQudGFyZ2V0LCBpbmRleClcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID09PSAnaWQnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55WydpZCddXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVsnbmFtZSddXCJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZhYmxlXG4gICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICNhdXRvQmVsb25nVG9NYW55XG4gICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJiZWxvbmdUb0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIidpZCdcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cblxuICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25DaG9vc2UoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1snaWQnXSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTIgY29sLXhzLTQgaW5wdXQtc3BhY2Ugcm93XCIgKm5nSWY9XCJpbmRleCA9PSAwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGZ1bGxXaWR0aCBzdGF0dXM9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInN0YXJ0U2VhcmNoKClcIj5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInNlYXJjaC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0yIGNvbC14cy00IGlucHV0LXNwYWNlXCIgKm5nSWY9XCJpbmRleCA9PSAwOyBlbHNlIGVsc2VCbG9ja1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJhZGRGaWVsZFNlYXJjaCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0xIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWludXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmcyLXNtYXJ0LXRhYmxlXG4gICAgKm5nSWY9XCJzaG93Q2hlY2tib3hcIlxuICAgICAgW3NldHRpbmdzXT1cInsuLi5zZXR0aW5ncywgY29sdW1uczogeyAuLi5zZXR0aW5ncy5jb2x1bW5zLCBpc0NoZWNrZWQgfSB9XCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjdXN0b20pPVwib25DdXN0b20oJGV2ZW50KVwiXG4gICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlPiAtLT5cblxuICAgIDwhLS0gKm5nSWY9XCIhc2hvd0NoZWNrYm94XCIgLS0+XG4gICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjdXN0b20pPVwib25DdXN0b20oJGV2ZW50KVwiXG4gICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuXG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtXCJcbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBteC0yXCI+e3sgXCJvcHRpb25zLnBlcl9wYWdlXCIgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPG5iLXNlbGVjdFxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLnRvU3RyaW5nKClcIlxuICAgICAgICBbKHNlbGVjdGVkKV09XCJjdXJyZW50UGVyUGFnZVwiXG4gICAgICA+XG4gICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgcGVyUGFnZSBvZiBwZXJQYWdlc09wdGlvbnNcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRQYWdlcihwZXJQYWdlLnZhbHVlKVwiXG4gICAgICAgICAgdmFsdWU9XCJwZXJQYWdlLnZhbHVlXCJcbiAgICAgICAgICA+e3sgcGVyUGFnZS50aXRsZSB9fTwvbmItb3B0aW9uXG4gICAgICAgID5cbiAgICAgIDwvbmItc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtYm9keT5cbjwvbmItY2FyZD5cbiJdfQ==