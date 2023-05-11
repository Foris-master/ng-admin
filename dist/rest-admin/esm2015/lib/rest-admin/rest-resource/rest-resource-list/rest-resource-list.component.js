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
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_6_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.selectAllRows(); });
    i0.ɵɵelement(2, "input", 19);
    i0.ɵɵtext(3, "Selectionner ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", (ctx_r0.selectedRows == null ? null : ctx_r0.selectedRows.length) == ctx_r0.source.count());
} }
function RestResourceListComponent_ng_container_12_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_12_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 22);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_12_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.addNewEntity(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceListComponent_ng_container_12_button_6_Template, 2, 0, "button", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, "add"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedRows == null ? null : ctx_r1.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.addNewEntity(); });
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-icon", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 1, "add"));
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(4); return ctx_r20.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 22);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_button_1_Template, 2, 0, "button", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r16.selectedRows == null ? null : ctx_r16.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceListComponent_ng_container_13_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r14.PERMISSION.CREATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r14.PERMISSION.DELETE);
} }
function RestResourceListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_13_ng_container_1_Template, 3, 2, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r2.permissions);
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r34 = ctx.$implicit;
    i0.ɵɵproperty("value", filter_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, filter_r34["name"]));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r36 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r36.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, operator_r36.name), " ");
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "nb-select", 27);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template_nb_select_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r39); const index_r25 = i0.ɵɵnextContext().index; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.selectOperator($event, index_r25); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template, 3, 4, "nb-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 2, "rest-list.operator"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r27.filterOperator);
} }
const _c2 = function (a0) { return { "col-12": a0 }; };
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵelementStart(1, "input", 36);
    i0.ɵɵlistener("input", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r42); const index_r25 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.onFilter($event.target, index_r25); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r28.resource.listConfig.searchFilter == null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 2, "rest-list.searchPlaceholder"));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 44);
} if (rf & 2) {
    const tree_r47 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r47["name"]);
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 34);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r48 = ctx.$implicit;
    const index_r25 = i0.ɵɵnextContext(2).index;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r48);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r48[ctx_r46.searchItems[index_r25].fieldName ? ctx_r46.searchItems[index_r25].fieldName : "id"], " ");
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵelementStart(2, "nb-tag-list", 38);
    i0.ɵɵlistener("tagRemove", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(4); return ctx_r50.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template, 1, 1, "nb-tag", 39);
    i0.ɵɵelementStart(4, "input", 40, 41);
    i0.ɵɵlistener("keyup", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r51); const index_r25 = i0.ɵɵnextContext().index; const ctx_r52 = i0.ɵɵnextContext(3); return ctx_r52.filterInput($event, index_r25); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 42, 43);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r51); const index_r25 = i0.ɵɵnextContext().index; const ctx_r54 = i0.ɵɵnextContext(3); return ctx_r54.onChoose($event, index_r25); });
    i0.ɵɵtemplate(8, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template, 2, 2, "nb-option", 28);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r45 = i0.ɵɵreference(7);
    const index_r25 = i0.ɵɵnextContext().index;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r29.belongToMany["id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r45)("placeholder", ctx_r29.searchItems[index_r25].fieldName ? ctx_r29.searchItems[index_r25].fieldName : "id")("formControlName", "id");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 5, ctx_r29.allFilterContains["id"]));
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 45);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(4); return ctx_r57.startSearch(); });
    i0.ɵɵelement(2, "nb-icon", 47);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "button", 46);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(4); return ctx_r59.addFieldSearch(); });
    i0.ɵɵelement(2, "nb-icon", 49);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵelementStart(1, "button", 51);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r63); const index_r25 = i0.ɵɵnextContext().index; const ctx_r61 = i0.ɵɵnextContext(3); return ctx_r61.removeFieldSearch(index_r25); });
    i0.ɵɵelement(2, "nb-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵelementStart(2, "nb-select", 27);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template_nb_select_selectedChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r65); const index_r25 = restoredCtx.index; const ctx_r64 = i0.ɵɵnextContext(3); return ctx_r64.selectFilterBy($event, index_r25); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_15_ng_container_1_ng_container_1_nb_option_4_Template, 3, 4, "nb-option", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 10);
    i0.ɵɵtemplate(6, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_6_Template, 3, 6, "div", 29);
    i0.ɵɵelementStart(7, "div", 30);
    i0.ɵɵtemplate(8, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_container_8_Template, 10, 7, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_9_Template, 3, 0, "div", 31);
    i0.ɵɵtemplate(10, RestResourceListComponent_div_15_ng_container_1_ng_container_1_div_10_Template, 3, 0, "div", 32);
    i0.ɵɵtemplate(11, RestResourceListComponent_div_15_ng_container_1_ng_container_1_ng_template_11_Template, 3, 0, "ng-template", null, 33, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const index_r25 = ctx.index;
    const _r32 = i0.ɵɵreference(12);
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(3, 9, "rest-list.filterPlaceholder"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r23.resource.listConfig.searchFilter.filterBy);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.searchItems[index_r25].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.searchItems[index_r25].field !== "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r23.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r23.searchItems[index_r25].field === "id");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r25 == 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", index_r25 == 0)("ngIfElse", _r32);
} }
function RestResourceListComponent_div_15_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_15_ng_container_1_ng_container_1_Template, 13, 11, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r22.searchItems);
} }
function RestResourceListComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_15_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.resource.listConfig.searchFilter.filterBy.length > 0);
} }
function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table", 54);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_deleteConfirm_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r67 = i0.ɵɵnextContext(2); return ctx_r67.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_createConfirm_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_custom_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template_ng2_smart_table_userRowSelect_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.detailEntity($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("settings", ctx_r66.settings)("source", ctx_r66.source);
} }
function RestResourceListComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_16_ng2_smart_table_1_Template, 1, 2, "ng2-smart-table", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.custom);
} }
function RestResourceListComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng2-smart-table", 54);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_deleteConfirm_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_createConfirm_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r74 = i0.ɵɵnextContext(); return ctx_r74.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_custom_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r75 = i0.ɵɵnextContext(); return ctx_r75.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_17_Template_ng2_smart_table_userRowSelect_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.detailEntity($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("settings", ctx_r5.settings)("source", ctx_r5.source);
} }
function RestResourceListComponent_nb_option_23_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-option", 55);
    i0.ɵɵlistener("click", function RestResourceListComponent_nb_option_23_Template_nb_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r79); const perPage_r77 = restoredCtx.$implicit; const ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.setPager(perPage_r77.value); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const perPage_r77 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(perPage_r77.title);
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
RestResourceListComponent.ɵfac = function RestResourceListComponent_Factory(t) { return new (t || RestResourceListComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestAdminConfigService), i0.ɵɵdirectiveInject(i3.RestResourceService), i0.ɵɵdirectiveInject(i4.HttpClient), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i6.ActivatedRoute), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i7.RestExportService), i0.ɵɵdirectiveInject(i8.RestShareService), i0.ɵɵdirectiveInject(i9.NgxPermissionsService), i0.ɵɵdirectiveInject(i3.RestResourceService)); };
RestResourceListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListComponent, selectors: [["ngx-rest-resource-list"]], viewQuery: function RestResourceListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 24, vars: 16, consts: [["status", "primary"], [1, "row", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "text-white"], ["class", "", 4, "ngIf"], [1, "", 2, "height", "40px"], ["nbButton", "", "ghost", "", 3, "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["nbButton", "", "nbContextMenuTag", "my-context", "ghost", "", "status", "control", 3, "nbContextMenu"], ["icon", "download-outline"], [4, "ngIf"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, ""], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["type", "checkbox", 1, "mr-2", 3, "checked"], ["icon", "plus-circle"], ["nbButton", "", "ghost", "", "status", "control", 3, "click", 4, "ngIf"], ["icon", "trash", "color", "danger", 2, "color", "rgb(238, 130, 157)"], [4, "ngxPermissionsOnly"], [1, "row", "mb-5"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-12 col-xs-12 input-space", 3, "ngClass", 4, "ngIf"], [3, "formGroup"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space row", 4, "ngIf"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], [1, "input-space"], [3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], [3, "selectedChange"], ["belongToField", ""], ["removable", "", 3, "text"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space", "row"], ["nbButton", "", "fullWidth", "", "status", "primary", 3, "click"], ["icon", "search-outline"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space"], ["icon", "plus-outline"], [1, "col-lg-1", "input-space"], ["nbButton", "", "fullWidth", "", "status", "danger", 3, "click"], ["icon", "minus-outline"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelement(11, "nb-icon", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, RestResourceListComponent_ng_container_12_Template, 7, 4, "ng-container", 10);
        i0.ɵɵtemplate(13, RestResourceListComponent_ng_container_13_Template, 2, 1, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "nb-card-body", 11);
        i0.ɵɵtemplate(15, RestResourceListComponent_div_15_Template, 2, 1, "div", 12);
        i0.ɵɵtemplate(16, RestResourceListComponent_ng_container_16_Template, 2, 1, "ng-container", 10);
        i0.ɵɵtemplate(17, RestResourceListComponent_ng_container_17_Template, 2, 2, "ng-container", 10);
        i0.ɵɵelementStart(18, "div", 13);
        i0.ɵɵelementStart(19, "label", 14);
        i0.ɵɵtext(20);
        i0.ɵɵpipe(21, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(22, "nb-select", 15);
        i0.ɵɵlistener("selectedChange", function RestResourceListComponent_Template_nb_select_selectedChange_22_listener($event) { return ctx.currentPerPage = $event; });
        i0.ɵɵtemplate(23, RestResourceListComponent_nb_option_23_Template, 2, 1, "nb-option", 16);
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
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("nbContextMenu", ctx.items);
        i0.ɵɵadvance(2);
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
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(21, 14, "options.per_page"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.resource.listConfig.perPage.toString())("selected", ctx.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.perPagesOptions);
    } }, directives: [i5.NbCardComponent, i5.NbCardHeaderComponent, i10.NgIf, i5.NbButtonComponent, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel, i5.NbContextMenuDirective, i5.NbIconComponent, i5.NbCardBodyComponent, i5.NbSpinnerDirective, i5.NbSelectComponent, i10.NgForOf, i9.NgxPermissionsDirective, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NbOptionComponent, i10.NgClass, i5.NbInputDirective, i5.NbTagListComponent, i5.NbTagInputDirective, i5.NbAutocompleteDirective, i1.DefaultValueAccessor, i1.FormControlName, i5.NbAutocompleteComponent, i5.NbTagComponent, i11.Ng2SmartTableComponent], pipes: [i12.TranslatePipe, i10.TitleCasePipe, i10.AsyncPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-default   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-default   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-dark   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-dark   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-cosmic   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-corporate   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}  ng2-st-tbody-edit-delete{display:none;height:0!important}  ng2-st-tbody-custom{display:flex;text-align:center}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.nb-theme-default[_ngcontent-%COMP%]   ng2-smart-table[_ngcontent-%COMP%]   th.ng2-smart-actions-title-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdDQUFnQyxF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RSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EOytZQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFDZSxNQUFNO2tCQUExQixTQUFTO21CQUFDLFFBQVE7WUFDWSxpQkFBaUI7a0JBQS9DLFNBQVM7bUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2ZXJEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7XG4gIFJlc3RGaWVsZCxcbiAgUkVTVF9GSUVMRF9UWVBFUyxcbiAgUEVSTUlTU0lPTixcbn0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgTmJEaWFsb2dTZXJ2aWNlLCBOYk1lbnVTZXJ2aWNlLCBOYlRhZ0NvbXBvbmVudCB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBTFBIQUJFVCwgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFNoYXJlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2g7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9CZWxvbmdUb01hbnknKSBpbnB1dEJlbG9uZ1RvTWFueTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGFscGhhYmVsdDogc3RyaW5nW10gPSBBTFBIQUJFVDtcbiAgZGF0YTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XG4gIGN1cnJlbnRQZXJQYWdlOiBudW1iZXI7XG4gIGlzRmV0Y2hpbmcgPSB0cnVlO1xuICByZXNzb3VyY2VOYW1lID0gJyc7XG4gIGZpbHRlckJ5ID0gJyc7XG4gIGZpbHRlck9wZXJhdG9yID0gRklMVEVSX09QRVJBVE9SUztcbiAgZXhwb3J0QXNDb25maWcgPSB7XG4gICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXG4gICAgZWxlbWVudElkOiAnbXlUYWJsZUVsZW1lbnRJZCcsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcbiAgfTtcbiAgc2VhcmNoSXRlbXMgPSBbXTtcbiAgc2VhcmNoSXRlbSA9ICcnO1xuXG4gIHNob3dDaGVja2JveCA9IGZhbHNlO1xuICBzaG93RGV0YWlscyA9IGZhbHNlO1xuICBvcHRpb25zOiBhbnkgPSB7fTtcbiAgYWxsRmlsdGVyQ29udGFpbnM6IGFueSA9IHt9O1xuICBiZWxvbmdUb1ZhbHVlOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9NYW55OiBhbnkgPSB7fTtcbiAgY29udHJvbHM6IGFueTtcbiAgaXNDaGVja2VkOiBhbnkgPSB7fTtcblxuICBzZWxlY3RlZFJvd3M6IGFueVtdID0gW107XG5cbiAgaXRlbXMgPSBbXG4gICAgeyB0aXRsZTogJ0FsbCBmb3JtYXRzJyB9LFxuICAgIHsgdGl0bGU6ICdDU1YnIH0sXG4gICAgeyB0aXRsZTogJ0VYQ0VMJyB9LFxuICAgIHsgdGl0bGU6ICdQREYnIH0sXG4gIF07XG4gIHBlclBhZ2VzT3B0aW9ucyA9IFtcbiAgICB7IHRpdGxlOiAnNScsIHZhbHVlOiA1IH0sXG4gICAgeyB0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgeyB0aXRsZTogJzIwJywgdmFsdWU6IDIwIH0sXG4gICAgeyB0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXG4gICAgeyB0aXRsZTogJzEwMCcsIHZhbHVlOiAxMDAgfSxcbiAgXTtcblxuICBwZXJtaXNzaW9ucyA9IFtQRVJNSVNTSU9OLkNSRUFURSwgUEVSTUlTU0lPTi5SRUFELCBQRVJNSVNTSU9OLkRFTEVURV07XG5cbiAgZ2V0IFBFUk1JU1NJT04oKSB7XG4gICAgcmV0dXJuIFBFUk1JU1NJT047XG4gIH1cbiAgY3VzdG9tID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlczogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5iTWVudVNlcnZpY2U6IE5iTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBleHBvcnRTZXJ2aWNlOiBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBwdWJsaWMgcmVzdFNoYXJlOiBSZXN0U2hhcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5KSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5Py5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQudmFsdWVdID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zLnB1c2goe1xuICAgICAgICBmaWVsZDogJycsXG4gICAgICAgIG9wZXJhdG9yOiAnJyxcbiAgICAgICAgdGVybXM6ICcnLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50UGVyUGFnZSA9IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlO1xuXG4gICAgdGhpcy5nZXRMaXN0KCk7XG5cbiAgICB0aGlzLnNvdXJjZS5vbkNoYW5nZWQoKS5zdWJzY3JpYmUoKGUpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHtcbiAgICAgIHRpdGxlOiAnY2hlY2snLFxuICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlUHJlcGFyZUZ1bmN0aW9uOiAoY2VsbCwgcm93KSA9PiAoe1xuICAgICAgICBoYW5kbGVDaGVja2JveENsaWNrOiAoZXZlbnQsIHJvd0RhdGEpID0+XG4gICAgICAgICAgdGhpcy5vbkNoZWNrYm94Q2xpY2soZXZlbnQsIHJvd0RhdGEpLFxuICAgICAgICBzZWxlY3RlZDpcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5maW5kKChlbHQpID0+IGVsdD8uaWQgPT0gcm93Py5pZCkgIT09IHVuZGVmaW5lZCxcbiAgICAgICAgY2VsbCxcbiAgICAgICAgcm93LFxuICAgICAgfSksXG4gICAgICBlZGl0b3I6IHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICByZW5kZXJDb21wb25lbnQ6IFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgfTtcblxuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQnKSxcbiAgICAgICAgbWFwKCh7IGl0ZW06IHsgdGl0bGUgfSB9KSA9PiB0aXRsZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgICBjYXNlICdFWENFTCc6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvRXhjZWwoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1BERic6XG4gICAgICAgICAgICB0aGlzLmV4cG9ydFRvUGRmKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdDU1YnOlxuICAgICAgICAgICAgdGhpcy5leHBvcnRUb0NzdigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRoaXMuZXhwb3J0QWxsKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXN0b20gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICBhcGk6IHBlcm1pc3Npb24uZmllbGRLZXkuYXBpLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG5cbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbi50eXBlID09PSBQRVJNSVNTSU9OLlJFQUQpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24udHlwZSA9PT0gUEVSTUlTU0lPTi5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPlwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXN0b20nLCBjdXN0b20pO1xuXG4gICAgICAgICAgICAgIHRoaXMuY3VzdG9tID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgICAgICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgICAgICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICAgIGN1c3RvbTogY3VzdG9tLFxuICAgICAgICAgICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnZXI6IHtcbiAgICAgICAgICAgICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICAgICAgICAgICAgYWRkOiB7XG4gICAgICAgICAgICAgICAgICBhZGRCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1wbHVzXCIgPjwvaT4nLFxuICAgICAgICAgICAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nLFxuICAgICAgICAgICAgICAgICAgY29uZmlybUNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgICAgaGlkZVN1YkhlYWRlcjogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmhpZGVBZGRTdWJIZWFkZXIsXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgICBjdXN0b206IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGVsZXRlJyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLXRyYXNoIHRleHQtZGFuZ2VyJz48L2k+XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgZWRpdDogZmFsc2UsXG4gICAgICAgICAgZGVsZXRlOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZXI6IHtcbiAgICAgICAgICBwZXJQYWdlOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIiA+PC9pPicsXG4gICAgICAgICAgY3JlYXRlQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2hlY2ttYXJrXCI+PC9pPicsXG4gICAgICAgICAgY2FuY2VsQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItY2xvc2VcIj48L2k+JyxcbiAgICAgICAgICBjb25maXJtQ3JlYXRlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVTaG93Q2hlY2tib3goKSB7XG4gICAgdGhpcy5zaG93Q2hlY2tib3ggPSAhdGhpcy5zaG93Q2hlY2tib3g7XG4gICAgdGhpcy5zb3VyY2UucmVmcmVzaCgpO1xuICB9XG5cbiAgb25EZWxldGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiBldmVudC5kYXRhLFxuICAgICAgICB0aXRsZTogJ1NVUFBSRVNTSU9OJyxcbiAgICAgICAgbXVsdGlTdXBwcmVzczogZmFsc2UsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkRlbGV0ZUFsbENvbmZpcm0oKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LCB7XG4gICAgICBjb250ZXh0OiB7XG4gICAgICAgIGRhdGFzOiB0aGlzLnNlbGVjdGVkUm93cyxcbiAgICAgICAgbXVsdGlTdXBwcmVzczogdHJ1ZSxcbiAgICAgICAgdGl0bGU6ICdUT1VUIFNVUFBSSU1FUicsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGFnZSxcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhZGROZXdFbnRpdHkoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1hZGRgKTtcbiAgfVxuXG4gIGRldGFpbEVudGl0eShldmVudCkge1xuICAgIGlmICh0aGlzLnJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICh0aGlzLnBlcm1pc3Npb25zU2VydmljZS5oYXNQZXJtaXNzaW9uKFBFUk1JU1NJT04uUkVBRCkpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICAgICAgXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgZXZlbnQuZGF0YS5pZCxcbiAgICAgIF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hlY2tib3hDbGljayhldmVudDogYW55LCByb3c6IGFueSkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdykgPT09IC0xKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnNwbGljZSh0aGlzLnNlbGVjdGVkUm93cy5pbmRleE9mKHJvdyksIDEpO1xuICAgIH1cbiAgfVxuICBzZWxlY3RBbGxSb3dzKCkge1xuICAgIHRoaXMuc291cmNlLmdldEFsbCgpLnRoZW4oKHJvd3MpID0+IHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoICE9PSByb3dzPy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAgICAgcm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUm93cy5wdXNoKHJvdyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MgPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc291cmNlLnJlZnJlc2goKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTWF0VGFibGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGlmICghdGhpcy5zaG93Q2hlY2tib3gpIHtcbiAgICAgIGNvbHVubXNbJ2lzQ2hlY2tlZCddID0gdGhpcy5pc0NoZWNrZWQ7XG4gICAgfVxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlZGl0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjb2x1bm1zO1xuICB9XG5cbiAgZ2V0TGlzdChwYWdlID0gbnVsbCwgcGVyUGFnZSA9IG51bGwpIHtcbiAgICB0aGlzLnJlc3RTaGFyZS5zZXRMb2FkZXIodHJ1ZSk7XG4gICAgaWYgKHBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7IC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsIHBhZ2UgfTtcbiAgICB9XG4gICAgaWYgKHBlclBhZ2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMgPSB7XG4gICAgICAgIC4uLnRoaXMucmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgIHBlcl9wYWdlOiBwZXJQYWdlLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5xdWVyeVBhcmFtcylcbiAgICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgKGN1bXVsLCBpdGVtKSA9PlxuICAgICAgICAgICAgICBjdW11bCArXG4gICAgICAgICAgICAgIGl0ZW0gK1xuICAgICAgICAgICAgICAnPScgK1xuICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXNbaXRlbV0gK1xuICAgICAgICAgICAgICAnLCcsXG4gICAgICAgICAgICAnJ1xuICAgICAgICAgIClcbiAgICAgICAgICAuc2xpY2UoMCwgLTEpLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGVDb25maXJtKGV2ZW50KSB7XG4gICAgY29uc3QgZGF0YXMgPSBldmVudC5uZXdEYXRhO1xuICAgIGNvbnN0IHNhdmVCZWxvbmdUb21hbnkgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlkpIHtcbiAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5wdXNoKHtcbiAgICAgICAgICByZXNvdXJjZXM6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICBwaXZvdDogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnBpdm90TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGRlbGV0ZSBkYXRhc1tlbHQubmFtZV07XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAuYWRkUmVzb3VyY2VzKHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLCB7IC4uLmRhdGFzLCB1c2VyX2lkOiAxIH0pXG4gICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgIGVsZW1lbnQucGl2b3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRMaXN0KFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBhZ2UsXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wZXJQYWdlXG4gICAgICAgICAgKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgb25DdXN0b20oZXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmFjdGlvbikge1xuICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNvbmZpcm0oZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2RldGFpbCc6XG4gICAgICAgIHRoaXMuZGV0YWlsRW50aXR5KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgZ2V0RnVsbERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXMuZ2V0UmVzb3VyY2VzKHtcbiAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSxcbiAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9FeGNlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgIHRpdGxlOiBlbHQubGFiZWwsXG4gICAgICAgIH07XG4gICAgICB9KTtcblxuICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgIHNoZWV0SGVhZGVyW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBrZXk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHsgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCAvLyB0aXRsZVxuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQsIGluZGljZSkgPT4ge1xuICAgICAgICBlbHQgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdFt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0gZWxlbWVudFtzaGVldEhlYWRlcltrZXlzW2luZGV4XV1dO1xuICAgICAgICB9KTtcbiAgICAgICAgdWR0LmRhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG5cbiAgICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX2V4Y2VsJyk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb1BkZigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlciA9IFtdO1xuICAgIGxldCBlbHQgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBoZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IFtdO1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0LnB1c2goZWxlbWVudFtyb3ddKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWxlVGl0bGU6IHN0cmluZyA9IHRoaXMucmVzb3VyY2UubmFtZTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb1BkZihcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjdXN0b21EYXRhLFxuICAgICAgICAncmVzdF9maWxlX3BkZicsXG4gICAgICAgIGZpbGVUaXRsZVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvQ3N2KCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBjdXN0b21EYXRhID0gW107XG4gICAgY29uc3QgaGVhZGVyID0gW107XG4gICAgbGV0IGVsdCA9IHt9O1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHNcbiAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5jb2x1bW5zLmluY2x1ZGVzKGl0ZW0ubmFtZSkpXG4gICAgICAuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGhlYWRlci5wdXNoKGVsdC5sYWJlbCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIGhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbURhdGEucHVzaChlbHQpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9Dc3YoaGVhZGVyLCBjdXN0b21EYXRhLCAncmVzdF9maWxlX2NzdicpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0QWxsKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXMgPSB7fTtcbiAgICBjb25zdCBwZGZBbmRDc3ZIZWFkZXIgPSBbXTtcbiAgICBjb25zdCBzaGVldEhlYWRlciA9IHt9O1xuICAgIGNvbnN0IGNzdkRhdGEgPSBbXTtcbiAgICBjb25zdCBwZGZEYXRhID0gW107XG4gICAgbGV0IGVsdFBERiA9IFtdO1xuICAgIGxldCBlbHRDU1YgPSB7fTtcbiAgICBsZXQgZWx0RVhDRUwgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZXhjZWxEYXRhOiBhbnkgPSB7XG4gICAgICBkYXRhOiBbeyBBOiAnUmVzdCBFeGNlbCBleHBvcnQnIH0sIHNoZWV0SGVhZGVyXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcblxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaGVldEhlYWRlcik7XG4gICAgY29uc3QgZWRhdGE6IEFycmF5PGFueT4gPSBbXTtcblxuICAgIHRoaXMuZ2V0RnVsbERhdGEoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgIHJlc3BvbnNlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgLy9DU1ZcbiAgICAgICAgZWx0Q1NWID0ge307XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRDU1Zbcm93XSA9IGVsZW1lbnRbcm93XTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNzdkRhdGEucHVzaChlbHRDU1YpO1xuICAgICAgICAvL1BERlxuICAgICAgICBlbHRQREYgPSBbXTtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdFBERi5wdXNoKGVsZW1lbnRbcm93XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBwZGZEYXRhLnB1c2goZWx0UERGKTtcbiAgICAgICAgLy9FWENFTFxuICAgICAgICBlbHRFWENFTCA9IHt9O1xuICAgICAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgZWx0RVhDRUxbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGVsZW1lbnRbc2hlZXRIZWFkZXJba2V5c1tpbmRleF1dXTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV4Y2VsRGF0YS5kYXRhLnB1c2goZWx0RVhDRUwpO1xuICAgICAgICBlZGF0YS5wdXNoKGV4Y2VsRGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZXhwb3J0U2VydmljZS5nZW5lcmF0ZVppcChwZGZBbmRDc3ZIZWFkZXIsIHBkZkRhdGEsIGNzdkRhdGEsIGVkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vRmlsdGVyXG5cbiAgc2V0UGFnZXIoc2V0UGFnZXIpIHtcbiAgICB0aGlzLnNvdXJjZS5zZXRQYWdpbmcoMSwgc2V0UGFnZXIsIHRydWUpO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIHNlbGVjdEZpbHRlckJ5KGRhdGEsIGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgPSBkYXRhWyd2YWx1ZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZSA9IGRhdGFbJ3Jlc291cmNlRmllbGROYW1lJ107XG4gICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0ucmVzb3VyY2UgPSBkYXRhWydyZXNvdXJjZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnJlc3NvdXJjZUZpbHRlck5hbWUgPSBkYXRhWydyZXNzb3VyY2VGaWx0ZXJOYW1lJ107XG4gICAgaWYgKGRhdGFbJ3ZhbHVlJ10gPT09ICdpZCcpIHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gZGF0YT8ucmVzb3VyY2U/LmFkZENvbmZpZztcbiAgICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgYXBpOiByZXNvdXJjZS5hcGksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHtcbiAgICAgICAgICAgIHNob3VsZF9wYWdpbmF0ZTogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIHRoaXMub3B0aW9uc1tkYXRhWyd2YWx1ZSddXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgIHhbJ2lkJ11cbiAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbJ2lkJ10udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tkYXRhWyd2YWx1ZSddXSA9IG9mKFxuICAgICAgICAgICAgdGhpcy5vcHRpb25zW2RhdGFbJ3ZhbHVlJ11dXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHNlbGVjdE9wZXJhdG9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLm9wZXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBvbkZpbHRlcih2YWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS50ZXJtcyA9IHZhbD8udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbSA9IHZhbD8udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHsgZmllbGQ6ICcnLCBvcGVyYXRvcjogJycsIHRlcm1zOiAnJyB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJNYW55KFxuICAgIHZhbHVlOiBhbnksXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBvcHRpb25zID0gJ2JlbG9uZ1RvTWFueU9wdGlvbnMnXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICYmIHRoaXMub3B0aW9uc1snaWQnXT8ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1snaWQnXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgOiAnaWQnLFxuICAgICAgICBdLnNvbWUoKGVsdCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtvcHRpb25WYWx1ZVtlbHRdPy50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICBgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucyh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyTWFueShmaWx0ZXJTdHJpbmcsIGluZGV4KSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zWydpZCddID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cblxuICBvblRhZ1JlbW92ZUJlbG9uZyh0YWdUb1JlbW92ZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcbiAgICBjZWxsRGF0YS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHRbJ25hbWUnXSAhPSB0YWdUb1JlbW92ZS50ZXh0KSBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFsnaWQnXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuICAvL2JlbG9uZ1RvTWFueU9wdGlvbnNcbiAgb25DaG9vc2UoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuICAgICAgaWYgKHNlYXJjaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbmV3RWx0ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBzYXZlUmVsYXRlZElkTmFtZTogZXZlbnQuaWQsXG4gICAgICAgICAgc2F2ZVJlc291cmNlSWROYW1lOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudFtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFsnaWQnXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSAnJztcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQ/LmZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgIGxldCB0YWIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuYmVsb25nVG9NYW55WydpZCddKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRhYi5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgbGlzdElkID0gdGFiLm1hcCgoZWx0OiBhbnkpID0+IGVsdD8uaWQpLmpvaW4oJywnKTtcbiAgICAgICAgICBwYXJhbXNbYCR7ZWxlbWVudD8ucmVzc291cmNlRmlsdGVyTmFtZX0taW5gXSA9IGAke2xpc3RJZH1gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudD8uZmllbGQgIT0gJycgJiYgZWxlbWVudD8udGVybXMgIT0gJycpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudD8ub3BlcmF0b3IgIT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJhbXNbXG4gICAgICAgICAgICAgIGVsZW1lbnQ/LmZpZWxkICsgJy0nICsgZWxlbWVudD8ub3BlcmF0b3JcbiAgICAgICAgICAgIF0gPSBgJHtlbGVtZW50Py50ZXJtc31gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNbZWxlbWVudD8uZmllbGRdID0gYCR7ZWxlbWVudD8udGVybXN9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2ggPSBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgY3VtdWwgKyBpdGVtICsgJz0nICsgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICsgJywnLFxuICAgICAgICAnJ1xuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgIHNlYXJjaCArPSAnJic7XG4gICAgfVxuICAgIHNlYXJjaCArPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAucmVkdWNlKChjdW11bCwgaXRlbSkgPT4gY3VtdWwgKyBpdGVtICsgJz0nICsgcGFyYW1zW2l0ZW1dICsgJyYnLCAnJylcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuXG4gICAgdGhpcy5zb3VyY2UgPSBuZXcgU2VydmVyRGF0YVNvdXJjZSh0aGlzLmh0dHAsIHtcbiAgICAgIGVuZFBvaW50OlxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0Q29uZmlnLnJlc3RCYXNlVXJsICtcbiAgICAgICAgJy8nICtcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmFwaSArXG4gICAgICAgICc/JyArXG4gICAgICAgIHNlYXJjaCxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5iLWNhcmQgc3RhdHVzPVwicHJpbWFyeVwiPlxuICA8bmItY2FyZC1oZWFkZXI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxoNiBjbGFzcz1cInRleHQtd2hpdGVcIj5cbiAgICAgICAgICB7eyB0aGlzLnJlc291cmNlLmxpc3RDb25maWcudGl0bGUgfX1cbiAgICAgICAgPC9oNj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nSWY9XCJzaG93Q2hlY2tib3hcIj5cbiAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cInNlbGVjdEFsbFJvd3MoKVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3M9XCJtci0yXCJcbiAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBbY2hlY2tlZF09XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID09IHRoaXMuc291cmNlLmNvdW50KClcIlxuICAgICAgICAgIC8+U2VsZWN0aW9ubmVyXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cImhlaWdodDogNDBweFwiPlxuICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IChjbGljayk9XCJ0b2dnbGVTaG93Q2hlY2tib3goKVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cInNob3dDaGVja2JveFwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dFwiXG4gICAgICAgICAgZ2hvc3RcbiAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJkb3dubG9hZC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBnaG9zdCBzdGF0dXM9XCJjb250cm9sXCIgKGNsaWNrKT1cImFkZE5ld0VudGl0eSgpXCI+XG4gICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uRGVsZXRlQWxsQ29uZmlybSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICBpY29uPVwidHJhc2hcIlxuICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IHJnYigyMzgsIDEzMCwgMTU3KVwiXG4gICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5neFBlcm1pc3Npb25zT25seT1cInBlcm1pc3Npb25zXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkNSRUFURVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImNvbnRyb2xcIiAoY2xpY2spPVwiYWRkTmV3RW50aXR5KClcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLWNpcmNsZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmd4UGVybWlzc2lvbnNPbmx5PVwiUEVSTUlTU0lPTi5ERUxFVEVcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJ0aGlzLnNlbGVjdGVkUm93cz8ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGVBbGxDb25maXJtKClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImNvbG9yOiByZ2IoMjM4LCAxMzAsIDE1NylcIlxuICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDwhLS0gPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgIG5iQ29udGV4dE1lbnVUYWc9XCJteS1jb250ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IFwicmVzdC1saXN0LmV4cG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPiAtLT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWJvZHlcbiAgICBbbmJTcGlubmVyXT1cInRoaXMucmVzdFNoYXJlLmxpc3RMb2FkZXJcIlxuICAgIG5iU3Bpbm5lclNpemU9XCJsYXJnZVwiXG4gICAgbmJTcGlubmVyU3RhdHVzPVwicHJpbWFyeVwiXG4gID5cbiAgICA8IS0tIFJlc3Qtc2VhcmNoIGltcGxlbWVudCAtLT5cbiAgICA8ZGl2IGNsYXNzPVwicm93IG1iLTVcIiAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXJcIj5cbiAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgKm5nSWY9XCJ0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyLmZpbHRlckJ5Lmxlbmd0aCA+IDBcIlxuICAgICAgPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzZWFyY2ggb2Ygc2VhcmNoSXRlbXM7IGxldCBpbmRleCA9IGluZGV4XCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0zIGNvbC1tZC02IGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgPCEtLSBTZWxlY3Qgd2l0aCBmaWx0ZXIgYnkgLS0+XG4gICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0LmZpbHRlclBsYWNlaG9sZGVyJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwic2VsZWN0RmlsdGVyQnkoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICBsZXQgZmlsdGVyIG9mIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnlcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICAgID57eyBmaWx0ZXJbXCJuYW1lXCJdIHwgdGl0bGVjYXNlIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5vcGVyYXRvcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RPcGVyYXRvcigkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3BlcmF0b3Igb2YgZmlsdGVyT3BlcmF0b3JcIlxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wZXJhdG9yLnZhbHVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBvcGVyYXRvci5uYW1lIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkICE9PSAnaWQnXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTQgY29sLW1kLTEyIGNvbC14cy0xMiBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICdjb2wtMTInOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuc2VhcmNoRmlsdGVyID09IG51bGxcbiAgICAgICAgICAgIH1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbHRlcigkZXZlbnQudGFyZ2V0LCBpbmRleClcIlxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3Quc2VhcmNoUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwiZm9ybVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID09PSAnaWQnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55WydpZCddXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVsnbmFtZSddXCJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZhYmxlXG4gICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICNhdXRvQmVsb25nVG9NYW55XG4gICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJiZWxvbmdUb0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIidpZCdcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cblxuICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25DaG9vc2UoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1snaWQnXSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0yIGNvbC14cy00IGlucHV0LXNwYWNlIHJvd1wiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZnVsbFdpZHRoIHN0YXR1cz1cInByaW1hcnlcIiAoY2xpY2spPVwic3RhcnRTZWFyY2goKVwiPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwic2VhcmNoLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImNvbC1sZy0xIGNvbC1tZC0yIGNvbC14cy00IGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT0gMDsgZWxzZSBlbHNlQmxvY2tcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkRmllbGRTZWFyY2goKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMSBpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVGaWVsZFNlYXJjaChpbmRleClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cIm1pbnVzLW91dGxpbmVcIj48L25iLWljb24+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cblxuICAgIDwhLS0gPG5nMi1zbWFydC10YWJsZVxuICAgICpuZ0lmPVwic2hvd0NoZWNrYm94XCJcbiAgICAgIFtzZXR0aW5nc109XCJ7Li4uc2V0dGluZ3MsIGNvbHVtbnM6IHsgLi4uc2V0dGluZ3MuY29sdW1ucywgaXNDaGVja2VkIH0gfVwiXG4gICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAoY3JlYXRlQ29uZmlybSk9XCJvbkNyZWF0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgID5cbiAgICA8L25nMi1zbWFydC10YWJsZT4gLS0+XG5cbiAgICA8IS0tICpuZ0lmPVwiIXNob3dDaGVja2JveFwiIC0tPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDBcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGVcbiAgICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgICAgICAqbmdJZj1cImN1c3RvbVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPT09IDBcIj5cbiAgICAgIDxuZzItc21hcnQtdGFibGVcbiAgICAgICAgW3NldHRpbmdzXT1cInNldHRpbmdzXCJcbiAgICAgICAgW3NvdXJjZV09XCJzb3VyY2VcIlxuICAgICAgICAoZGVsZXRlQ29uZmlybSk9XCJvbkRlbGV0ZUNvbmZpcm0oJGV2ZW50KVwiXG4gICAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGN1c3RvbSk9XCJvbkN1c3RvbSgkZXZlbnQpXCJcbiAgICAgICAgKHVzZXJSb3dTZWxlY3QpPVwiZGV0YWlsRW50aXR5KCRldmVudClcIlxuICAgICAgPlxuICAgICAgPC9uZzItc21hcnQtdGFibGU+XG4gICAgPC9uZy1jb250YWluZXI+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1lbmRcIlxuICAgICAgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtXCJcbiAgICA+XG4gICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbCBteC0yXCI+e3sgXCJvcHRpb25zLnBlcl9wYWdlXCIgfCB0cmFuc2xhdGUgfX08L2xhYmVsPlxuICAgICAgPG5iLXNlbGVjdFxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLnRvU3RyaW5nKClcIlxuICAgICAgICBbKHNlbGVjdGVkKV09XCJjdXJyZW50UGVyUGFnZVwiXG4gICAgICA+XG4gICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAqbmdGb3I9XCJsZXQgcGVyUGFnZSBvZiBwZXJQYWdlc09wdGlvbnNcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRQYWdlcihwZXJQYWdlLnZhbHVlKVwiXG4gICAgICAgICAgdmFsdWU9XCJwZXJQYWdlLnZhbHVlXCJcbiAgICAgICAgICA+e3sgcGVyUGFnZS50aXRsZSB9fTwvbmItb3B0aW9uXG4gICAgICAgID5cbiAgICAgIDwvbmItc2VsZWN0PlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtYm9keT5cbjwvbmItY2FyZD5cbiJdfQ==