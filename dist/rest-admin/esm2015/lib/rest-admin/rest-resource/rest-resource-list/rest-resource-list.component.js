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
import * as i10 from "@angular/common";
import * as i11 from "ng2-smart-table";
import * as i12 from "@ngx-translate/core";
const _c0 = ["search"];
const _c1 = ["autoBelongToMany"];
function RestResourceListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.selectAllRows(); });
    i0.ɵɵelement(2, "input", 17);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", (ctx_r0.selectedRows == null ? null : ctx_r0.selectedRows.length) == ctx_r0.source.count());
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, "rest-detail.select"), " ");
} }
function RestResourceListComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵelement(2, "nb-icon", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbContextMenu", ctx_r1.items);
} }
function RestResourceListComponent_ng_container_12_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_12_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r12); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.onDeleteAllConfirm(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "nb-icon", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(1, 1, "rest-list.deleteAllSelect"));
} }
function RestResourceListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 20);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.addNewEntity(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "nb-icon", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceListComponent_ng_container_12_button_7_Template, 3, 3, "button", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 3, "rest-list.add"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 5, "add"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r2.selectedRows == null ? null : ctx_r2.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 16);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(3); return ctx_r18.addNewEntity(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-icon", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 1, "add"));
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(4); return ctx_r21.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 24);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template, 2, 0, "button", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r17.selectedRows == null ? null : ctx_r17.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 25);
    i0.ɵɵtemplate(2, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r15.PERMISSION.CREATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r15.PERMISSION.DELETE);
} }
function RestResourceListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r3.permissions);
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r35 = ctx.$implicit;
    i0.ɵɵproperty("value", filter_r35);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, filter_r35["name"]));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r37 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r37.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, operator_r37.name), " ");
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelementStart(2, "nb-select", 30);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template_nb_select_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const index_r26 = i0.ɵɵnextContext().index; const ctx_r38 = i0.ɵɵnextContext(3); return ctx_r38.selectOperator($event, index_r26); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template, 3, 4, "nb-option", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "rest-list.operator"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r28.filterOperator);
} }
const _c2 = function (a0) { return { "col-12": a0 }; };
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "input", 39);
    i0.ɵɵlistener("input", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r43); const index_r26 = i0.ɵɵnextContext().index; const ctx_r41 = i0.ɵɵnextContext(3); return ctx_r41.onFilter($event.target, index_r26); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r29.resource.listConfig.searchFilter == null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 2, "rest-list.searchPlaceholder"));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r48 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r48["name"]);
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r49 = ctx.$implicit;
    const index_r26 = i0.ɵɵnextContext(2).index;
    const ctx_r47 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r49);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r49[ctx_r47.searchItems[index_r26].fieldName ? ctx_r47.searchItems[index_r26].fieldName : "id"], " ");
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵelementStart(2, "nb-tag-list", 41);
    i0.ɵɵlistener("tagRemove", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r51 = i0.ɵɵnextContext(4); return ctx_r51.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template, 1, 1, "nb-tag", 42);
    i0.ɵɵelementStart(4, "input", 43, 44);
    i0.ɵɵlistener("keyup", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r52); const index_r26 = i0.ɵɵnextContext().index; const ctx_r53 = i0.ɵɵnextContext(3); return ctx_r53.filterInput($event, index_r26); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 45, 46);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r52); const index_r26 = i0.ɵɵnextContext().index; const ctx_r55 = i0.ɵɵnextContext(3); return ctx_r55.onChoose($event, index_r26); });
    i0.ɵɵtemplate(8, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template, 2, 2, "nb-option", 31);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r46 = i0.ɵɵreference(7);
    const index_r26 = i0.ɵɵnextContext().index;
    const ctx_r30 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r30.belongToMany["id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r46)("placeholder", ctx_r30.searchItems[index_r26].fieldName ? ctx_r30.searchItems[index_r26].fieldName : "id")("formControlName", "id");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 5, ctx_r30.allFilterContains["id"]));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "button", 49);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r59); const ctx_r58 = i0.ɵɵnextContext(4); return ctx_r58.startSearch(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "nb-icon", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 1, "rest-list.search"));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵelementStart(1, "button", 49);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(4); return ctx_r60.addFieldSearch(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "nb-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 1, "rest-list.addSearch"));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "button", 54);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r64); const index_r26 = i0.ɵɵnextContext().index; const ctx_r62 = i0.ɵɵnextContext(3); return ctx_r62.removeFieldSearch(index_r26); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "nb-icon", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 1, "rest-list.removeSearch"));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelementStart(2, "nb-select", 30);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template_nb_select_selectedChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r66); const index_r26 = restoredCtx.index; const ctx_r65 = i0.ɵɵnextContext(3); return ctx_r65.selectFilterBy($event, index_r26); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_15_ng_container_1_ng_container_1_nb_option_4_Template, 3, 4, "nb-option", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 8);
    i0.ɵɵtemplate(6, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template, 3, 6, "div", 32);
    i0.ɵɵelementStart(7, "div", 33);
    i0.ɵɵtemplate(8, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template, 10, 7, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template, 4, 3, "div", 34);
    i0.ɵɵtemplate(10, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template, 4, 3, "div", 35);
    i0.ɵɵtemplate(11, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template, 4, 3, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r26 = ctx.index;
    const _r33 = i0.ɵɵreference(12);
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 9, "rest-list.filterPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r24.resource.listConfig.searchFilter.filterBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.searchItems[index_r26].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.searchItems[index_r26].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r24.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r24.searchItems[index_r26].field === "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r26 == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r26 == 0)("ngIfElse", _r33);
} }
function RestResourceListComponent_div_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template, 13, 11, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r23.searchItems);
} }
function RestResourceListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_15_ng_container_1_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.resource.listConfig.searchFilter.filterBy.length > 0);
} }
function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table", 57);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_deleteConfirm_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(2); return ctx_r68.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_createConfirm_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_custom_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_userRowSelect_0_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r72 = i0.ɵɵnextContext(2); return ctx_r72.detailEntity($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("settings", ctx_r67.settings)("source", ctx_r67.source);
} }
function RestResourceListComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template, 1, 2, "ng2-smart-table", 56);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.custom);
} }
function RestResourceListComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r74 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng2-smart-table", 57);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_deleteConfirm_1_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r73 = i0.ɵɵnextContext(); return ctx_r73.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_createConfirm_1_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r75 = i0.ɵɵnextContext(); return ctx_r75.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_custom_1_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_userRowSelect_1_listener($event) { i0.ɵɵrestoreView(_r74); const ctx_r77 = i0.ɵɵnextContext(); return ctx_r77.detailEntity($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("settings", ctx_r6.settings)("source", ctx_r6.source);
} }
function RestResourceListComponent_nb_option_23_Template(rf, ctx) { if (rf & 1) {
    const _r80 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵlistener("click", function RestResourceListComponent_nb_option_23_Template_nb_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r80); const perPage_r78 = restoredCtx.$implicit; const ctx_r79 = i0.ɵɵnextContext(); return ctx_r79.setPager(perPage_r78.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const perPage_r78 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(perPage_r78.title);
} }
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
RestResourceListComponent.ɵfac = function RestResourceListComponent_Factory(t) { return new (t || RestResourceListComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestAdminConfigService), i0.ɵɵdirectiveInject(i3.RestResourceService), i0.ɵɵdirectiveInject(i4.HttpClient), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i6.ActivatedRoute), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i7.RestExportService), i0.ɵɵdirectiveInject(i8.RestShareService), i0.ɵɵdirectiveInject(i9.NgxPermissionsService), i0.ɵɵdirectiveInject(i3.RestResourceService)); };
RestResourceListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListComponent, selectors: [["ngx-rest-resource-list"]], viewQuery: function RestResourceListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 24, vars: 19, consts: [["status", "primary"], [1, "row", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "text-white"], ["class", "", 4, "ngIf"], [1, "", 2, "height", "40px"], ["nbButton", "", "ghost", "", "nbTooltipPlacement", "top", 3, "nbTooltip", "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [4, "ngIf"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, ""], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["type", "checkbox", 1, "mr-2", 3, "checked"], ["nbButton", "", "ghost", "", "nbContextMenuTag", "export-context", "status", "control", 3, "nbContextMenu"], ["icon", "download-outline"], ["nbButton", "", "ghost", "", "status", "control", "nbTooltipPlacement", "top", 3, "nbTooltip", "click"], ["icon", "plus-circle"], ["nbButton", "", "ghost", "", "nbTooltipPlacement", "top", "status", "control", 3, "nbTooltip", "click", 4, "ngIf"], ["nbButton", "", "ghost", "", "nbTooltipPlacement", "top", "status", "control", 3, "nbTooltip", "click"], ["icon", "trash", "color", "danger", 2, "color", "rgb(238, 130, 157)"], [4, "ngxPermissionsOnly"], ["nbButton", "", "ghost", "", "status", "control", 3, "click", 4, "ngIf"], [1, "row", "mb-5"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-12 col-xs-12 input-space", 3, "ngClass", 4, "ngIf"], [3, "formGroup"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space row", 4, "ngIf"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], [1, "input-space"], [3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], [3, "selectedChange"], ["belongToField", ""], ["removable", "", 3, "text"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space", "row"], ["nbButton", "", "fullWidth", "", "nbTooltipPlacement", "top", "status", "primary", 3, "nbTooltip", "click"], ["icon", "search-outline"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space"], ["icon", "plus-outline"], [1, "col-lg-1", "input-space"], ["nbButton", "", "fullWidth", "", "nbTooltipPlacement", "top", "status", "danger", 3, "nbTooltip", "click"], ["icon", "minus-outline"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card", 0);
        i0.ɵɵelementStart(1, "nb-card-header");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "h6", 3);
        i0.ɵɵtext(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, RestResourceListComponent_div_6_Template, 5, 4, "div", 4);
        i0.ɵɵelementStart(7, "div", 5);
        i0.ɵɵelementStart(8, "button", 6);
        i0.ɵɵlistener("click", function RestResourceListComponent_Template_button_click_8_listener() { return ctx.toggleShowCheckbox(); });
        i0.ɵɵpipe(9, "translate");
        i0.ɵɵelementStart(10, "input", 7);
        i0.ɵɵlistener("ngModelChange", function RestResourceListComponent_Template_input_ngModelChange_10_listener($event) { return ctx.showCheckbox = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(11, RestResourceListComponent_ng_container_11_Template, 3, 1, "ng-container", 8);
        i0.ɵɵtemplate(12, RestResourceListComponent_ng_container_12_Template, 8, 7, "ng-container", 8);
        i0.ɵɵtemplate(13, RestResourceListComponent_ng_container_13_Template, 2, 1, "ng-container", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "nb-card-body", 9);
        i0.ɵɵtemplate(15, RestResourceListComponent_div_15_Template, 2, 1, "div", 10);
        i0.ɵɵtemplate(16, RestResourceListComponent_ng_container_16_Template, 2, 1, "ng-container", 8);
        i0.ɵɵtemplate(17, RestResourceListComponent_ng_container_17_Template, 2, 2, "ng-container", 8);
        i0.ɵɵelementStart(18, "div", 11);
        i0.ɵɵelementStart(19, "label", 12);
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "nb-select", 13);
        i0.ɵɵlistener("selectedChange", function RestResourceListComponent_Template_nb_select_selectedChange_22_listener($event) { return ctx.currentPerPage = $event; });
        i0.ɵɵtemplate(23, RestResourceListComponent_nb_option_23_Template, 2, 1, "nb-option", 14);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate1(" ", ctx.resource.listConfig.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showCheckbox);
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(9, 15, "rest-detail.select"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.showCheckbox);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.listConfig.exportResource === true);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length === 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nbSpinner", ctx.restShare.listLoader);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.listConfig.searchFilter);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length === 0);
        i0.ɵɵadvance(3);
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(21, 17, "options.per_page"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.resource.listConfig.perPage.toString())("selected", ctx.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.perPagesOptions);
    } }, directives: [i5.NbCardComponent, i5.NbCardHeaderComponent, i10.NgIf, i5.NbButtonComponent, i5.NbTooltipDirective, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel, i5.NbCardBodyComponent, i5.NbSpinnerDirective, i5.NbSelectComponent, i10.NgForOf, i5.NbContextMenuDirective, i5.NbIconComponent, i9.NgxPermissionsDirective, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NbOptionComponent, i10.NgClass, i5.NbInputDirective, i5.NbTagListComponent, i5.NbTagInputDirective, i5.NbAutocompleteDirective, i1.DefaultValueAccessor, i1.FormControlName, i5.NbAutocompleteComponent, i5.NbTagComponent, i11.Ng2SmartTableComponent], pipes: [i12.TranslatePipe, i10.TitleCasePipe, i10.AsyncPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-default   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-default   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-dark   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-dark   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-cosmic   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-corporate   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}  ng2-st-tbody-edit-delete{display:none;height:0!important}  ng2-st-tbody-custom{display:flex;text-align:center}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.nb-theme-default[_ngcontent-%COMP%]   ng2-smart-table[_ngcontent-%COMP%]   th.ng2-smart-actions-title-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceListComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-list',
                templateUrl: './rest-resource-list.component.html',
                styleUrls: ['./rest-resource-list.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.RestAdminConfigService }, { type: i3.RestResourceService }, { type: i4.HttpClient }, { type: i5.NbDialogService }, { type: i6.ActivatedRoute }, { type: i6.Router }, { type: i5.NbMenuService }, { type: i7.RestExportService }, { type: i8.RestShareService }, { type: i9.NgxPermissionsService }, { type: i3.RestResourceService }]; }, { resource: [{
            type: Input
        }], search: [{
            type: ViewChild,
            args: ['search']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE9BQU8sRUFBNEIsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQ0FBZ0Ms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dCI6WyJpbXBvcnQgeyBGSUxURVJfT1BFUkFUT1JTIH0gZnJvbSAnLi8uLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNlcnZlckRhdGFTb3VyY2UgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xuaW1wb3J0IHtcbiAgUmVzdEZpZWxkLFxuICBSRVNUX0ZJRUxEX1RZUEVTLFxuICBQRVJNSVNTSU9OLFxufSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UsIE5iTWVudVNlcnZpY2UsIE5iVGFnQ29tcG9uZW50IH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFMUEhBQkVULCBSZXN0RXhwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1leHBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0U2hhcmVTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXNoYXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UgfSBmcm9tICduZ3gtcGVybWlzc2lvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgQElucHV0KCkgcmVzb3VyY2U6IFJlc3RSZXNvdXJjZTtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoJykgc2VhcmNoO1xuICBAVmlld0NoaWxkKCdhdXRvQmVsb25nVG9NYW55JykgaW5wdXRCZWxvbmdUb01hbnk7XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBhbHBoYWJlbHQ6IHN0cmluZ1tdID0gQUxQSEFCRVQ7XG4gIGRhdGE6IGFueTtcbiAgc2V0dGluZ3M6IGFueTtcbiAgc291cmNlOiBTZXJ2ZXJEYXRhU291cmNlO1xuICBjdXJyZW50UGVyUGFnZTogbnVtYmVyO1xuICBpc0ZldGNoaW5nID0gdHJ1ZTtcbiAgcmVzc291cmNlTmFtZSA9ICcnO1xuICBmaWx0ZXJCeSA9ICcnO1xuICBmaWx0ZXJPcGVyYXRvciA9IEZJTFRFUl9PUEVSQVRPUlM7XG4gIGV4cG9ydEFzQ29uZmlnID0ge1xuICAgIHR5cGU6ICdwbmcnLCAvLyB0aGUgdHlwZSB5b3Ugd2FudCB0byBkb3dubG9hZFxuICAgIGVsZW1lbnRJZDogJ215VGFibGVFbGVtZW50SWQnLCAvLyB0aGUgaWQgb2YgaHRtbC90YWJsZSBlbGVtZW50XG4gIH07XG4gIHNlYXJjaEl0ZW1zID0gW107XG4gIHNlYXJjaEl0ZW0gPSAnJztcblxuICBzaG93Q2hlY2tib3ggPSBmYWxzZTtcbiAgc2hvd0RldGFpbHMgPSBmYWxzZTtcbiAgb3B0aW9uczogYW55ID0ge307XG4gIGFsbEZpbHRlckNvbnRhaW5zOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9WYWx1ZTogYW55ID0ge307XG4gIGJlbG9uZ1RvTWFueTogYW55ID0ge307XG4gIGNvbnRyb2xzOiBhbnk7XG4gIGlzQ2hlY2tlZDogYW55ID0ge307XG5cbiAgc2VsZWN0ZWRSb3dzOiBhbnlbXSA9IFtdO1xuXG4gIGl0ZW1zID0gW11cbiAgcGVyUGFnZXNPcHRpb25zID0gW1xuICAgIHsgdGl0bGU6ICc1JywgdmFsdWU6IDUgfSxcbiAgICB7IHRpdGxlOiAnMTAnLCB2YWx1ZTogMTAgfSxcbiAgICB7IHRpdGxlOiAnMjAnLCB2YWx1ZTogMjAgfSxcbiAgICB7IHRpdGxlOiAnNTAnLCB2YWx1ZTogNTAgfSxcbiAgICB7IHRpdGxlOiAnMTAwJywgdmFsdWU6IDEwMCB9LFxuICBdO1xuXG4gIHBlcm1pc3Npb25zID0gW1BFUk1JU1NJT04uQ1JFQVRFLCBQRVJNSVNTSU9OLlJFQUQsIFBFUk1JU1NJT04uREVMRVRFXTtcblxuICBnZXQgUEVSTUlTU0lPTigpIHtcbiAgICByZXR1cm4gUEVSTUlTU0lPTjtcbiAgfVxuICBjdXN0b20gPSBmYWxzZTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdENvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0UmVzb3VyY2VzOiBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGRpYWxvZ1NlcnZpY2U6IE5iRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgbmJNZW51U2VydmljZTogTmJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIGV4cG9ydFNlcnZpY2U6IFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIHB1YmxpYyByZXN0U2hhcmU6IFJlc3RTaGFyZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uc1NlcnZpY2U6IE5neFBlcm1pc3Npb25zU2VydmljZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0OiBSZXN0UmVzb3VyY2VTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMucmVzc291cmNlTmFtZSA9XG4gICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwubGVuZ3RoIC0gMVxuICAgICAgXS5wYXRoLnNwbGl0KCctJylbMF07XG5cbiAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgKTtcblxuICAgIC8vIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldCgpO1xuICAgIGlmICh0aGlzLnJlc291cmNlLmxpc3RDb25maWc/LnNlYXJjaEZpbHRlcj8uZmlsdGVyQnkpIHtcbiAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLnJlc291cmNlLmxpc3RDb25maWc/LnNlYXJjaEZpbHRlcj8uZmlsdGVyQnk/LnJlZHVjZShcbiAgICAgICAgKGN1bXVsLCBlbHQpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKGVsdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgIHRoaXMuYmVsb25nVG9NYW55W2VsdC52YWx1ZV0gPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW10sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJ10sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHRoaXMuY29udHJvbHMpO1xuICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldCgpO1xuICB9XG5cbiAgaW5pdEV4cG9ydEl0ZW1zKCkge1xuICAgIGlmKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRSZXNvdXJjZSl7XG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmV4cG9ydENvbmZpZy5mb3JtYXRzLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgICAgdGl0bGU6IGl0ZW0sXG4gICAgICB9KSk7XG4gICAgfVxuICAgXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRFeHBvcnRJdGVtcygpXG4gICAgdGhpcy5uYk1lbnVTZXJ2aWNlXG4gICAgICAub25JdGVtQ2xpY2soKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gdGFnID09PSAnZXhwb3J0LWNvbnRleHQnKSxcbiAgICAgICAgbWFwKCh7IGl0ZW06IHsgdGl0bGUgfSB9KSA9PiB0aXRsZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgICBjYXNlICdFWENFTCc6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1BERic6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDU1YnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0NzdigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QWxsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHtcbiAgICAgICAgZmllbGQ6ICcnLFxuICAgICAgICBvcGVyYXRvcjogJycsXG4gICAgICAgIHRlcm1zOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBlclBhZ2UgPSB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZTtcblxuICAgIHRoaXMuZ2V0TGlzdCgpO1xuXG4gICAgdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0NoZWNrZWQgPSB7XG4gICAgICB0aXRsZTogJ2NoZWNrJyxcbiAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljazogKGV2ZW50LCByb3dEYXRhKSA9PlxuICAgICAgICAgIHRoaXMub25DaGVja2JveENsaWNrKGV2ZW50LCByb3dEYXRhKSxcbiAgICAgICAgc2VsZWN0ZWQ6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuZmluZCgoZWx0KSA9PiBlbHQ/LmlkID09IHJvdz8uaWQpICE9PSB1bmRlZmluZWQsXG4gICAgICAgIGNlbGwsXG4gICAgICAgIHJvdyxcbiAgICAgIH0pLFxuICAgICAgZWRpdG9yOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICB9LFxuICAgICAgcmVuZGVyQ29tcG9uZW50OiBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXN0b20gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICBhcGk6IHBlcm1pc3Npb24uZmllbGRLZXkuYXBpLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG5cbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbi50eXBlID09PSBQRVJNSVNTSU9OLlJFQUQpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24udHlwZSA9PT0gUEVSTUlTU0lPTi5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPlwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5jdXN0b20gPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIGhpZGVTdWJIZWFkZXI6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5oaWRlQWRkU3ViSGVhZGVyLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgY3VzdG9tOiBjdXN0b20sXG4gICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdlcjoge1xuICAgICAgICAgICAgICAgICAgcGVyUGFnZTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgICAgICAgICAgICBhZGQ6IHtcbiAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIiA+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjb25maXJtQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGN1c3RvbTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGV0YWlsJyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLWNvbXBvc2UnPjwvaT5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICB0aXRsZTogXCI8aSBjbGFzcz0nbmItdHJhc2ggdGV4dC1kYW5nZXInPjwvaT5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdlcjoge1xuICAgICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgICAgYWRkOiB7XG4gICAgICAgICAgYWRkQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItcGx1c1wiID48L2k+JyxcbiAgICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nLFxuICAgICAgICAgIGNvbmZpcm1DcmVhdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNob3dDaGVja2JveCgpIHtcbiAgICB0aGlzLnNob3dDaGVja2JveCA9ICF0aGlzLnNob3dDaGVja2JveDtcbiAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gIH1cblxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IGV2ZW50LmRhdGEsXG4gICAgICAgIHRpdGxlOiAnU1VQUFJFU1NJT04nLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiBmYWxzZSxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlQWxsQ29uZmlybSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHRoaXMuc2VsZWN0ZWRSb3dzLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1RPVVQgU1VQUFJJTUVSJyxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0VudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWFkZGApO1xuICB9XG5cbiAgZGV0YWlsRW50aXR5KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmhhc1Blcm1pc3Npb24oUEVSTUlTU0lPTi5SRUFEKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICBldmVudC5kYXRhLmlkLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICBldmVudC5kYXRhLmlkLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2JveENsaWNrKGV2ZW50OiBhbnksIHJvdzogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSwgMSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsUm93cygpIHtcbiAgICB0aGlzLnNvdXJjZS5nZXRBbGwoKS50aGVuKChyb3dzKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCAhPT0gcm93cz8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICBpZiAoIXRoaXMuc2hvd0NoZWNrYm94KSB7XG4gICAgICBjb2x1bm1zWydpc0NoZWNrZWQnXSA9IHRoaXMuaXNDaGVja2VkO1xuICAgIH1cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IChjZWxsLCByb3cpID0+ICh7XG4gICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gY29sdW5tcztcbiAgfVxuXG4gIGdldExpc3QocGFnZSA9IG51bGwsIHBlclBhZ2UgPSBudWxsKSB7XG4gICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKHRydWUpO1xuICAgIGlmIChwYWdlKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zID0geyAuLi50aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zLCBwYWdlIH07XG4gICAgfVxuICAgIGlmIChwZXJQYWdlKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICAuLi50aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICBwZXJfcGFnZTogcGVyUGFnZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UodGhpcy5odHRwLCB7XG4gICAgICBlbmRQb2ludDpcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybCArXG4gICAgICAgICcvJyArXG4gICAgICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGkgK1xuICAgICAgICAnPycgK1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgIChjdW11bCwgaXRlbSkgPT5cbiAgICAgICAgICAgICAgY3VtdWwgK1xuICAgICAgICAgICAgICBpdGVtICtcbiAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICtcbiAgICAgICAgICAgICAgJyYnLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApXG4gICAgICAgICAgLnNsaWNlKDAsIC0xKSxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xuICAgIGNvbnN0IGRhdGFzID0gZXZlbnQubmV3RGF0YTtcbiAgICBjb25zdCBzYXZlQmVsb25nVG9tYW55ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZKSB7XG4gICAgICAgIHNhdmVCZWxvbmdUb21hbnkucHVzaCh7XG4gICAgICAgICAgcmVzb3VyY2VzOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgcGl2b3Q6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5waXZvdE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgZGF0YXNbZWx0Lm5hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgLmFkZFJlc291cmNlcyh0aGlzLnJlc291cmNlLmFkZENvbmZpZywgeyAuLi5kYXRhcywgdXNlcl9pZDogMSB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICBlbGVtZW50LnBpdm90XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcHJvbXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQucmVzb3VyY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXTogaXRlbVtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXSxcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlc291cmNlSWROYW1lJ11dOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBwcm9tcy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIC5hZGRSZXNvdXJjZXMocmVzdFJlc291cmNlLmFkZENvbmZpZywgZGF0YSlcbiAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uQ3VzdG9tKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIHRoaXMub25EZWxldGVDb25maXJtKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXRhaWwnOlxuICAgICAgICB0aGlzLmRldGFpbEVudGl0eShldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG5cblxuICAgcmVtcGxhY2VyS2V5KHRhYmxlYXUsIGNvcnJlc3BvbmRhbmNlcykge1xuICAgIHRhYmxlYXUuZm9yRWFjaChvYmpldCA9PiB7XG4gICAgICBjb3JyZXNwb25kYW5jZXMuZm9yRWFjaCgoeyBrZXksIGxhYmVsIH0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsZXVyID0gXy5nZXQob2JqZXQsIGtleSk7XG4gICAgICAgIGlmICh2YWxldXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIF8uc2V0KG9iamV0LCBsYWJlbCwgdmFsZXVyKTtcbiAgICAgICAgICBfLnVuc2V0KG9iamV0LCBrZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGFibGVhdTtcbiAgfVxuXG4gIGdldEZ1bGxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzLmdldFJlc291cmNlcyh7XG4gICAgICBhcGk6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGksXG5cbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICAgIC4uLnRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvRXhjZWwoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5sYWJlbF0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgc2hlZXRIZWFkZXJbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGtleTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcbiAgICBjb25zdCB1ZHQ6IGFueSA9IHtcbiAgICAgIGRhdGE6IFtcbiAgICAgICAgeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIC8vIHRpdGxlXG4gICAgICAgIHNoZWV0SGVhZGVyLCAvLyB0YWJsZSBoZWFkZXJcbiAgICAgIF0sXG4gICAgICBza2lwSGVhZGVyOiB0cnVlLFxuICAgIH07XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcDogYW55KSA9PiB7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gdGhpcy5yZW1wbGFjZXJLZXkocmVzcCwgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmV4cG9ydENvbmZpZy5jb2x1bW5GaWxlKTtcblxuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCwgaW5kaWNlKSA9PiB7XG4gICAgICAgIGVsdCA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWx0W3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBlbGVtZW50W3NoZWV0SGVhZGVyW2tleXNbaW5kZXhdXV07XG4gICAgICAgIH0pO1xuICAgICAgICB1ZHQuZGF0YS5wdXNoKGVsdCk7XG4gICAgICB9KTtcblxuICAgICAgZWRhdGEucHVzaCh1ZHQpO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydFRvRXhjZWwoZWRhdGEsICdyZXN0X2ZpbGVfZXhjZWwnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvUGRmKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgbGV0IGVsdCA9IFtdO1xuXG4gICBcbiAgICBjb25zdCBoZWFkZXIgPSB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGUubWFwKChpdGVtKSA9PiBpdGVtLmxhYmVsKTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3A6IGFueSkgPT4ge1xuXG4gICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmVtcGxhY2VyS2V5KHJlc3AsIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZSk7XG5cbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0gW107XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHQucHVzaChlbGVtZW50W3Jvd10pO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tRGF0YS5wdXNoKGVsdCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGZpbGVUaXRsZTogc3RyaW5nID0gdGhpcy5yZXNvdXJjZS5uYW1lO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydFRvUGRmKFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGN1c3RvbURhdGEsXG4gICAgICAgICdyZXN0X2ZpbGVfcGRmJyxcbiAgICAgICAgZmlsZVRpdGxlXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9Dc3YoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tcyA9IHt9O1xuICAgIGNvbnN0IGN1c3RvbURhdGEgPSBbXTtcbiAgICBsZXQgZWx0ID0ge307XG5cbiAgIGNvbnN0IGhlYWRlciA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZS5tYXAoKGl0ZW0pID0+IGl0ZW0ubGFiZWwpO1xuICAgXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcDogYW55KSA9PiB7XG4gICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLnJlbXBsYWNlcktleShyZXNwLCB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuZXhwb3J0Q29uZmlnLmNvbHVtbkZpbGUpO1xuIFxuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgaGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdFtyb3ddID0gZWxlbWVudFtyb3ddO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tRGF0YS5wdXNoKGVsdCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0NzdihoZWFkZXIsIGN1c3RvbURhdGEsICdyZXN0X2ZpbGVfY3N2Jyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRBbGwoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tcyA9IHt9O1xuICAgIGNvbnN0IHNoZWV0SGVhZGVyID0ge307XG4gICAgY29uc3QgY3N2RGF0YSA9IFtdO1xuICAgIGNvbnN0IHBkZkRhdGEgPSBbXTtcbiAgICBsZXQgZWx0UERGID0gW107XG4gICAgbGV0IGVsdENTViA9IHt9O1xuICAgIGxldCBlbHRFWENFTCA9IHt9O1xuXG5cbiAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICBjb2x1bm1zW2VsdC5sYWJlbF0gPSB7XG4gICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgIH07XG4gIH0pO1xuICAgY29uc3QgcGRmQW5kQ3N2SGVhZGVyID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmV4cG9ydENvbmZpZy5jb2x1bW5GaWxlLm1hcCgoaXRlbSkgPT4gaXRlbS5sYWJlbCk7XG5cblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBleGNlbERhdGE6IGFueSA9IHtcbiAgICAgIGRhdGE6IFt7IEE6ICdSZXN0IEV4Y2VsIGV4cG9ydCcgfSwgc2hlZXRIZWFkZXJdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNoZWV0SGVhZGVyKTtcbiAgICBjb25zdCBlZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcDogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMucmVtcGxhY2VyS2V5KHJlc3AsIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRDb25maWcuY29sdW1uRmlsZSk7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIC8vQ1NWXG4gICAgICAgIGVsdENTViA9IHt9O1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0Q1NWW3Jvd10gPSBlbGVtZW50W3Jvd107XG4gICAgICAgIH0pO1xuICAgICAgICBjc3ZEYXRhLnB1c2goZWx0Q1NWKTtcbiAgICAgICAgLy9QREZcbiAgICAgICAgZWx0UERGID0gW107XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRQREYucHVzaChlbGVtZW50W3Jvd10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcGRmRGF0YS5wdXNoKGVsdFBERik7XG4gICAgICAgIC8vRVhDRUxcbiAgICAgICAgZWx0RVhDRUwgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdEVYQ0VMW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBlbGVtZW50W3NoZWV0SGVhZGVyW2tleXNbaW5kZXhdXV07XG4gICAgICAgIH0pO1xuICAgICAgICBleGNlbERhdGEuZGF0YS5wdXNoKGVsdEVYQ0VMKTtcbiAgICAgICAgZWRhdGEucHVzaChleGNlbERhdGEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZ2VuZXJhdGVaaXAocGRmQW5kQ3N2SGVhZGVyLCBwZGZEYXRhLCBjc3ZEYXRhLCBlZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICAvL0ZpbHRlclxuXG4gIHNldFBhZ2VyKHNldFBhZ2VyKSB7XG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnaW5nKDEsIHNldFBhZ2VyLCB0cnVlKTtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBzZWxlY3RGaWx0ZXJCeShkYXRhLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID0gZGF0YVsndmFsdWUnXTtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWUgPSBkYXRhWydyZXNvdXJjZUZpZWxkTmFtZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnJlc291cmNlID0gZGF0YVsncmVzb3VyY2UnXTtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5yZXNzb3VyY2VGaWx0ZXJOYW1lID0gZGF0YVsncmVzc291cmNlRmlsdGVyTmFtZSddO1xuICAgIGlmIChkYXRhWyd2YWx1ZSddID09PSAnaWQnKSB7XG4gICAgICBjb25zdCByZXNvdXJjZSA9IGRhdGE/LnJlc291cmNlPy5hZGRDb25maWc7XG4gICAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgIGFwaTogcmVzb3VyY2UuYXBpLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICBzaG91bGRfcGFnaW5hdGU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbZGF0YVsndmFsdWUnXV0gPSBbLi4ucmVzcG9uc2VdLnNvcnQoKHgsIHkpID0+XG4gICAgICAgICAgICB4WydpZCddXG4gICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5WydpZCddLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZGF0YVsndmFsdWUnXV0gPSBvZihcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tkYXRhWyd2YWx1ZSddXVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE9wZXJhdG9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLm9wZXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBvbkZpbHRlcih2YWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS50ZXJtcyA9IHZhbD8udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbSA9IHZhbD8udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHsgZmllbGQ6ICcnLCBvcGVyYXRvcjogJycsIHRlcm1zOiAnJyB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJNYW55KFxuICAgIHZhbHVlOiBhbnksXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBvcHRpb25zID0gJ2JlbG9uZ1RvTWFueU9wdGlvbnMnXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICYmIHRoaXMub3B0aW9uc1snaWQnXT8ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1snaWQnXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgOiAnaWQnLFxuICAgICAgICBdLnNvbWUoKGVsdCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtvcHRpb25WYWx1ZVtlbHRdPy50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICBgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucyh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyTWFueShmaWx0ZXJTdHJpbmcsIGluZGV4KSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zWydpZCddID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cblxuICBvblRhZ1JlbW92ZUJlbG9uZyh0YWdUb1JlbW92ZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcbiAgICBjZWxsRGF0YS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHRbJ25hbWUnXSAhPSB0YWdUb1JlbW92ZS50ZXh0KSBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFsnaWQnXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuICAvL2JlbG9uZ1RvTWFueU9wdGlvbnNcbiAgb25DaG9vc2UoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuICAgICAgaWYgKHNlYXJjaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbmV3RWx0ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBzYXZlUmVsYXRlZElkTmFtZTogZXZlbnQuaWQsXG4gICAgICAgICAgc2F2ZVJlc291cmNlSWROYW1lOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudFtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFsnaWQnXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSAnJztcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQ/LmZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgIGxldCB0YWIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuYmVsb25nVG9NYW55WydpZCddKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRhYi5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgbGlzdElkID0gdGFiLm1hcCgoZWx0OiBhbnkpID0+IGVsdD8uaWQpLmpvaW4oJywnKTtcbiAgICAgICAgICBwYXJhbXNbYCR7ZWxlbWVudD8ucmVzc291cmNlRmlsdGVyTmFtZX0taW5gXSA9IGAke2xpc3RJZH1gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudD8uZmllbGQgIT0gJycgJiYgZWxlbWVudD8udGVybXMgIT0gJycpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudD8ub3BlcmF0b3IgIT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJhbXNbXG4gICAgICAgICAgICAgIGVsZW1lbnQ/LmZpZWxkICsgJy0nICsgZWxlbWVudD8ub3BlcmF0b3JcbiAgICAgICAgICAgIF0gPSBgJHtlbGVtZW50Py50ZXJtc31gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNbZWxlbWVudD8uZmllbGRdID0gYCR7ZWxlbWVudD8udGVybXN9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2ggPSBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgY3VtdWwgKyBpdGVtICsgJz0nICsgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICsgJyYnLFxuICAgICAgICAnJ1xuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgIHNlYXJjaCArPSAnJic7XG4gICAgfVxuICAgIHNlYXJjaCArPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAucmVkdWNlKChjdW11bCwgaXRlbSkgPT4gY3VtdWwgKyBpdGVtICsgJz0nICsgcGFyYW1zW2l0ZW1dICsgJyYnLCAnJylcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKHRoaXMuaHR0cCwge1xuICAgICAgZW5kUG9pbnQ6XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmwgK1xuICAgICAgICAnLycgK1xuICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpICtcbiAgICAgICAgJz8nICtcbiAgICAgICAgc2VhcmNoLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmItY2FyZCBzdGF0dXM9XCJwcmltYXJ5XCI+XG4gIDxuYi1jYXJkLWhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgIHt7IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy50aXRsZSB9fVxuICAgICAgICA8L2g2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiAqbmdJZj1cInNob3dDaGVja2JveFwiPlxuICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImNvbnRyb2xcIiAoY2xpY2spPVwic2VsZWN0QWxsUm93cygpXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cIm1yLTJcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggPT0gdGhpcy5zb3VyY2UuY291bnQoKVwiXG4gICAgICAgICAgLz57eyBcInJlc3QtZGV0YWlsLnNlbGVjdFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNDBweFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBnaG9zdFxuICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWRldGFpbC5zZWxlY3QnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgIChjbGljayk9XCJ0b2dnbGVTaG93Q2hlY2tib3goKVwiXG4gICAgICAgID5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJzaG93Q2hlY2tib3hcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UubGlzdENvbmZpZy5leHBvcnRSZXNvdXJjZSA9PT0gdHJ1ZVwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cImV4cG9ydC1jb250ZXh0XCJcbiAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJkb3dubG9hZC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QuYWRkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFkZE5ld0VudGl0eSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QuZGVsZXRlQWxsU2VsZWN0JyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGVBbGxDb25maXJtKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogcmdiKDIzOCwgMTMwLCAxNTcpXCJcbiAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmd4UGVybWlzc2lvbnNPbmx5PVwicGVybWlzc2lvbnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uQ1JFQVRFXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiY29udHJvbFwiIChjbGljayk9XCJhZGROZXdFbnRpdHkoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IFwiYWRkXCIgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkRFTEVURVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZUFsbENvbmZpcm0oKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IHJnYigyMzgsIDEzMCwgMTU3KVwiXG4gICAgICAgICAgICAgICAgPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgXCJyZXN0LWxpc3QuZXhwb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1oZWFkZXI+XG5cbiAgPG5iLWNhcmQtYm9keVxuICAgIFtuYlNwaW5uZXJdPVwidGhpcy5yZXN0U2hhcmUubGlzdExvYWRlclwiXG4gICAgbmJTcGlubmVyU2l6ZT1cImxhcmdlXCJcbiAgICBuYlNwaW5uZXJTdGF0dXM9XCJwcmltYXJ5XCJcbiAgPlxuICAgIDwhLS0gUmVzdC1zZWFyY2ggaW1wbGVtZW50IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiICpuZ0lmPVwidGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnkubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlYXJjaCBvZiBzZWFyY2hJdGVtczsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICA8IS0tIFNlbGVjdCB3aXRoIGZpbHRlciBieSAtLT5cbiAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3QuZmlsdGVyUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RGaWx0ZXJCeSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgb2YgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlci5maWx0ZXJCeVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgPnt7IGZpbHRlcltcIm5hbWVcIl0gfCB0aXRsZWNhc2UgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L25iLXNlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgIT09ICdpZCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wteHMtMTIgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0Lm9wZXJhdG9yJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cInNlbGVjdE9wZXJhdG9yKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcGVyYXRvciBvZiBmaWx0ZXJPcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3BlcmF0b3IudmFsdWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IG9wZXJhdG9yLm5hbWUgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgIT09ICdpZCdcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXhzLTEyIGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2NvbC0xMic6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIgPT0gbnVsbFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudC50YXJnZXQsIGluZGV4KVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5zZWFyY2hQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgPT09ICdpZCdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0ICh0YWdSZW1vdmUpPVwib25UYWdSZW1vdmVCZWxvbmcoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBiZWxvbmdUb01hbnlbJ2lkJ11cIlxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJ0cmVlWyduYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgI2F1dG9CZWxvbmdUb01hbnlcbiAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImJlbG9uZ1RvRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuXG4gICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgI2JlbG9uZ1RvRmllbGRcbiAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvbkNob29zZSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zWydpZCddIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTIgY29sLXhzLTQgaW5wdXQtc3BhY2Ugcm93XCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT0gMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5zZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJzdGFydFNlYXJjaCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInNlYXJjaC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMSBjb2wtbWQtMiBjb2wteHMtNCBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDA7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1saXN0LmFkZFNlYXJjaCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEZpZWxkU2VhcmNoKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1cy1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5yZW1vdmVTZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWludXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmcyLXNtYXJ0LXRhYmxlXG4gICAgKm5nSWY9XCJzaG93Q2hlY2tib3hcIlxuICAgICAgW3NldHRpbmdzXT1cInsuLi5zZXR0aW5ncywgY29sdW1uczogeyAuLi5zZXR0aW5ncy5jb2x1bW5zLCBpc0NoZWNrZWQgfSB9XCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjdXN0b20pPVwib25DdXN0b20oJGV2ZW50KVwiXG4gICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlPiAtLT5cblxuICAgIDwhLS0gKm5nSWY9XCIhc2hvd0NoZWNrYm94XCIgLS0+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgICAgICpuZ0lmPVwiY3VzdG9tXCJcbiAgICAgID5cbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiXG4gICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW1cIlxuICAgID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIG14LTJcIj57eyBcIm9wdGlvbnMucGVyX3BhZ2VcIiB8IHRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8bmItc2VsZWN0XG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJyZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UudG9TdHJpbmcoKVwiXG4gICAgICAgIFsoc2VsZWN0ZWQpXT1cImN1cnJlbnRQZXJQYWdlXCJcbiAgICAgID5cbiAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBwZXJQYWdlIG9mIHBlclBhZ2VzT3B0aW9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cInNldFBhZ2VyKHBlclBhZ2UudmFsdWUpXCJcbiAgICAgICAgICB2YWx1ZT1cInBlclBhZ2UudmFsdWVcIlxuICAgICAgICAgID57eyBwZXJQYWdlLnRpdGxlIH19PC9uYi1vcHRpb25cbiAgICAgICAgPlxuICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1ib2R5PlxuPC9uYi1jYXJkPlxuIl19