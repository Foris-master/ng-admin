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
function RestResourceListComponent_ng_container_13_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.onDeleteAllConfirm(); });
    i0.ɵɵpipe(1, "translate");
    i0.ɵɵelement(2, "nb-icon", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(1, 1, "rest-list.deleteAllSelect"));
} }
function RestResourceListComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 20);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_13_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.addNewEntity(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "nb-icon", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceListComponent_ng_container_13_button_7_Template, 3, 3, "button", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 3, "rest-list.add"));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(5, 5, "add"));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", (ctx_r1.selectedRows == null ? null : ctx_r1.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_14_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_14_ng_container_1_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(3); return ctx_r17.addNewEntity(); });
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
function RestResourceListComponent_ng_container_14_ng_container_1_ng_container_2_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵlistener("click", function RestResourceListComponent_ng_container_14_ng_container_1_ng_container_2_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(4); return ctx_r20.onDeleteAllConfirm(); });
    i0.ɵɵelement(1, "nb-icon", 24);
    i0.ɵɵelementEnd();
} }
function RestResourceListComponent_ng_container_14_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_14_ng_container_1_ng_container_2_button_1_Template, 2, 0, "button", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r16.selectedRows == null ? null : ctx_r16.selectedRows.length) > 0);
} }
function RestResourceListComponent_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_14_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 25);
    i0.ɵɵtemplate(2, RestResourceListComponent_ng_container_14_ng_container_1_ng_container_2_Template, 2, 1, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r14.PERMISSION.CREATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r14.PERMISSION.DELETE);
} }
function RestResourceListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_14_ng_container_1_Template, 3, 2, "ng-container", 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r2.permissions);
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r34 = ctx.$implicit;
    i0.ɵɵproperty("value", filter_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(2, 2, filter_r34["name"]));
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 37);
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const operator_r36 = ctx.$implicit;
    i0.ɵɵproperty("value", operator_r36.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 2, operator_r36.name), " ");
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelementStart(2, "nb-select", 30);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_5_Template_nb_select_selectedChange_2_listener($event) { i0.ɵɵrestoreView(_r39); const index_r25 = i0.ɵɵnextContext().index; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.selectOperator($event, index_r25); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_5_nb_option_4_Template, 3, 4, "nb-option", 31);
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
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 38);
    i0.ɵɵelementStart(1, "input", 39);
    i0.ɵɵlistener("input", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r42); const index_r25 = i0.ɵɵnextContext().index; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.onFilter($event.target, index_r25); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, ctx_r28.resource.listConfig.searchFilter == null));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", i0.ɵɵpipeBind1(2, 2, "rest-list.searchPlaceholder"));
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r47 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r47["name"]);
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 37);
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
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵelementStart(2, "nb-tag-list", 41);
    i0.ɵɵlistener("tagRemove", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(4); return ctx_r50.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_nb_tag_3_Template, 1, 1, "nb-tag", 42);
    i0.ɵɵelementStart(4, "input", 43, 44);
    i0.ɵɵlistener("keyup", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r51); const index_r25 = i0.ɵɵnextContext().index; const ctx_r52 = i0.ɵɵnextContext(3); return ctx_r52.filterInput($event, index_r25); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 45, 46);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r51); const index_r25 = i0.ɵɵnextContext().index; const ctx_r54 = i0.ɵɵnextContext(3); return ctx_r54.onChoose($event, index_r25); });
    i0.ɵɵtemplate(8, RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_nb_option_8_Template, 2, 2, "nb-option", 31);
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
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 48);
    i0.ɵɵelementStart(1, "button", 49);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_9_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(4); return ctx_r57.startSearch(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "nb-icon", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 1, "rest-list.search"));
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51);
    i0.ɵɵelementStart(1, "button", 49);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_10_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r60); const ctx_r59 = i0.ɵɵnextContext(4); return ctx_r59.addFieldSearch(); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "nb-icon", 52);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 1, "rest-list.addSearch"));
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53);
    i0.ɵɵelementStart(1, "button", 54);
    i0.ɵɵlistener("click", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_template_11_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r63); const index_r25 = i0.ɵɵnextContext().index; const ctx_r61 = i0.ɵɵnextContext(3); return ctx_r61.removeFieldSearch(index_r25); });
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelement(3, "nb-icon", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(2, 1, "rest-list.removeSearch"));
} }
function RestResourceListComponent_div_16_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 29);
    i0.ɵɵelementStart(2, "nb-select", 30);
    i0.ɵɵlistener("selectedChange", function RestResourceListComponent_div_16_ng_container_1_ng_container_1_Template_nb_select_selectedChange_2_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r65); const index_r25 = restoredCtx.index; const ctx_r64 = i0.ɵɵnextContext(3); return ctx_r64.selectFilterBy($event, index_r25); });
    i0.ɵɵpipe(3, "translate");
    i0.ɵɵtemplate(4, RestResourceListComponent_div_16_ng_container_1_ng_container_1_nb_option_4_Template, 3, 4, "nb-option", 31);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_5_Template, 5, 4, "ng-container", 10);
    i0.ɵɵtemplate(6, RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_6_Template, 3, 6, "div", 32);
    i0.ɵɵelementStart(7, "div", 33);
    i0.ɵɵtemplate(8, RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_container_8_Template, 10, 7, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_9_Template, 4, 3, "div", 34);
    i0.ɵɵtemplate(10, RestResourceListComponent_div_16_ng_container_1_ng_container_1_div_10_Template, 4, 3, "div", 35);
    i0.ɵɵtemplate(11, RestResourceListComponent_div_16_ng_container_1_ng_container_1_ng_template_11_Template, 4, 3, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
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
function RestResourceListComponent_div_16_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_16_ng_container_1_ng_container_1_Template, 13, 11, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r22.searchItems);
} }
function RestResourceListComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, RestResourceListComponent_div_16_ng_container_1_Template, 2, 1, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.resource.listConfig.searchFilter.filterBy.length > 0);
} }
function RestResourceListComponent_ng_container_17_ng2_smart_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ng2-smart-table", 57);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_17_ng2_smart_table_1_Template_ng2_smart_table_deleteConfirm_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r67 = i0.ɵɵnextContext(2); return ctx_r67.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_17_ng2_smart_table_1_Template_ng2_smart_table_createConfirm_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_17_ng2_smart_table_1_Template_ng2_smart_table_custom_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_17_ng2_smart_table_1_Template_ng2_smart_table_userRowSelect_0_listener($event) { i0.ɵɵrestoreView(_r68); const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.detailEntity($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("settings", ctx_r66.settings)("source", ctx_r66.source);
} }
function RestResourceListComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListComponent_ng_container_17_ng2_smart_table_1_Template, 1, 2, "ng2-smart-table", 56);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.custom);
} }
function RestResourceListComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ng2-smart-table", 57);
    i0.ɵɵlistener("deleteConfirm", function RestResourceListComponent_ng_container_18_Template_ng2_smart_table_deleteConfirm_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r72 = i0.ɵɵnextContext(); return ctx_r72.onDeleteConfirm($event); })("createConfirm", function RestResourceListComponent_ng_container_18_Template_ng2_smart_table_createConfirm_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r74 = i0.ɵɵnextContext(); return ctx_r74.onCreateConfirm($event); })("custom", function RestResourceListComponent_ng_container_18_Template_ng2_smart_table_custom_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r75 = i0.ɵɵnextContext(); return ctx_r75.onCustom($event); })("userRowSelect", function RestResourceListComponent_ng_container_18_Template_ng2_smart_table_userRowSelect_1_listener($event) { i0.ɵɵrestoreView(_r73); const ctx_r76 = i0.ɵɵnextContext(); return ctx_r76.detailEntity($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("settings", ctx_r5.settings)("source", ctx_r5.source);
} }
function RestResourceListComponent_nb_option_24_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵlistener("click", function RestResourceListComponent_nb_option_24_Template_nb_option_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r79); const perPage_r77 = restoredCtx.$implicit; const ctx_r78 = i0.ɵɵnextContext(); return ctx_r78.setPager(perPage_r77.value); });
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
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'export-context'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            console.log(title, 'title====================>');
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
RestResourceListComponent.ɵfac = function RestResourceListComponent_Factory(t) { return new (t || RestResourceListComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestAdminConfigService), i0.ɵɵdirectiveInject(i3.RestResourceService), i0.ɵɵdirectiveInject(i4.HttpClient), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i6.ActivatedRoute), i0.ɵɵdirectiveInject(i6.Router), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i7.RestExportService), i0.ɵɵdirectiveInject(i8.RestShareService), i0.ɵɵdirectiveInject(i9.NgxPermissionsService), i0.ɵɵdirectiveInject(i3.RestResourceService)); };
RestResourceListComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListComponent, selectors: [["ngx-rest-resource-list"]], viewQuery: function RestResourceListComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.search = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 25, vars: 19, consts: [["status", "primary"], [1, "row", "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], [1, "text-white"], ["class", "", 4, "ngIf"], [1, "", 2, "height", "40px"], ["nbButton", "", "ghost", "", "nbTooltipPlacement", "top", 3, "nbTooltip", "click"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], ["nbButton", "", "ghost", "", "nbContextMenuTag", "export-context", "status", "control", 3, "nbContextMenu"], ["icon", "download-outline"], [4, "ngIf"], ["nbSpinnerSize", "large", "nbSpinnerStatus", "primary", 3, "nbSpinner"], ["class", "row mb-5", 4, "ngIf"], [1, "row", "align-items-center", "justify-content-end", 2, "margin-top", "1rem"], [1, "label", "mx-2"], [3, "placeholder", "selected", "selectedChange"], ["value", "perPage.value", 3, "click", 4, "ngFor", "ngForOf"], [1, ""], ["nbButton", "", "ghost", "", "status", "control", 3, "click"], ["type", "checkbox", 1, "mr-2", 3, "checked"], ["nbButton", "", "ghost", "", "status", "control", "nbTooltipPlacement", "top", 3, "nbTooltip", "click"], ["icon", "plus-circle"], ["nbButton", "", "ghost", "", "nbTooltipPlacement", "top", "status", "control", 3, "nbTooltip", "click", 4, "ngIf"], ["nbButton", "", "ghost", "", "nbTooltipPlacement", "top", "status", "control", 3, "nbTooltip", "click"], ["icon", "trash", "color", "danger", 2, "color", "rgb(238, 130, 157)"], [4, "ngxPermissionsOnly"], ["nbButton", "", "ghost", "", "status", "control", 3, "click", 4, "ngIf"], [1, "row", "mb-5"], [4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "col-xs-12", "input-space"], ["fullWidth", "", 3, "placeholder", "selectedChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4 col-md-12 col-xs-12 input-space", 3, "ngClass", 4, "ngIf"], [3, "formGroup"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space row", 4, "ngIf"], ["class", "col-lg-1 col-md-2 col-xs-4 input-space", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [3, "value"], [1, "col-lg-4", "col-md-12", "col-xs-12", "input-space", 3, "ngClass"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "placeholder", "input"], [1, "input-space"], [3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], [3, "selectedChange"], ["belongToField", ""], ["removable", "", 3, "text"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space", "row"], ["nbButton", "", "fullWidth", "", "nbTooltipPlacement", "top", "status", "primary", 3, "nbTooltip", "click"], ["icon", "search-outline"], [1, "col-lg-1", "col-md-2", "col-xs-4", "input-space"], ["icon", "plus-outline"], [1, "col-lg-1", "input-space"], ["nbButton", "", "fullWidth", "", "nbTooltipPlacement", "top", "status", "danger", 3, "nbTooltip", "click"], ["icon", "minus-outline"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect", 4, "ngIf"], [3, "settings", "source", "deleteConfirm", "createConfirm", "custom", "userRowSelect"], ["value", "perPage.value", 3, "click"]], template: function RestResourceListComponent_Template(rf, ctx) { if (rf & 1) {
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
        i0.ɵɵelementStart(11, "button", 8);
        i0.ɵɵelement(12, "nb-icon", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(13, RestResourceListComponent_ng_container_13_Template, 8, 7, "ng-container", 10);
        i0.ɵɵtemplate(14, RestResourceListComponent_ng_container_14_Template, 2, 1, "ng-container", 10);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "nb-card-body", 11);
        i0.ɵɵtemplate(16, RestResourceListComponent_div_16_Template, 2, 1, "div", 12);
        i0.ɵɵtemplate(17, RestResourceListComponent_ng_container_17_Template, 2, 1, "ng-container", 10);
        i0.ɵɵtemplate(18, RestResourceListComponent_ng_container_18_Template, 2, 2, "ng-container", 10);
        i0.ɵɵelementStart(19, "div", 13);
        i0.ɵɵelementStart(20, "label", 14);
        i0.ɵɵtext(21);
        i0.ɵɵpipe(22, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(23, "nb-select", 15);
        i0.ɵɵlistener("selectedChange", function RestResourceListComponent_Template_nb_select_selectedChange_23_listener($event) { return ctx.currentPerPage = $event; });
        i0.ɵɵtemplate(24, RestResourceListComponent_nb_option_24_Template, 2, 1, "nb-option", 16);
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
        i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(22, 17, "options.per_page"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("placeholder", ctx.resource.listConfig.perPage.toString())("selected", ctx.currentPerPage);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.perPagesOptions);
    } }, directives: [i5.NbCardComponent, i5.NbCardHeaderComponent, i10.NgIf, i5.NbButtonComponent, i5.NbTooltipDirective, i1.CheckboxControlValueAccessor, i1.NgControlStatus, i1.NgModel, i5.NbContextMenuDirective, i5.NbIconComponent, i5.NbCardBodyComponent, i5.NbSpinnerDirective, i5.NbSelectComponent, i10.NgForOf, i9.NgxPermissionsDirective, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.NbOptionComponent, i10.NgClass, i5.NbInputDirective, i5.NbTagListComponent, i5.NbTagInputDirective, i5.NbAutocompleteDirective, i1.DefaultValueAccessor, i1.FormControlName, i5.NbAutocompleteComponent, i5.NbTagComponent, i11.Ng2SmartTableComponent], pipes: [i12.TranslatePipe, i10.TitleCasePipe, i10.AsyncPipe], styles: ["@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-default   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-default   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-dark   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-dark   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-cosmic   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-cosmic   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   nb-card-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-bottom:0}.nb-theme-corporate   [_nghost-%COMP%]   .result-from-dialog[_ngcontent-%COMP%]{flex-direction:column}.nb-theme-corporate   [_nghost-%COMP%]   .form-input-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{display:block}  ng2-st-tbody-edit-delete{display:none;height:0!important}  ng2-st-tbody-custom{display:flex;text-align:center}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.nb-theme-default[_ngcontent-%COMP%]   ng2-smart-table[_ngcontent-%COMP%]   th.ng2-smart-actions-title-add[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#00d68f!important;border-bottom-width:0;border-bottom-color:#00d68f!important;color:#fff}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEUsT0FBTyxFQUFHLFNBQVMsRUFBRSxLQUFLLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25ELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFJNUIsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHdEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBRzdFLE9BQU8sRUFBNEIsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQ0FBZ0Ms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QztRQWUxQixlQUFvQztRQUFwQyxnRUFBb0M7UUFFNUQsZUFBc0Q7UUFBdEQsd0VBQXNELGdDQUFBO1FBSWhDLGVBQWtCO1FBQWxCLDZDQUFrQjs7dUZEdlJuQyx5QkFBeUI7Y0FMckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2FBQ25EOytZQUdVLFFBQVE7a0JBQWhCLEtBQUs7WUFDZSxNQUFNO2tCQUExQixTQUFTO21CQUFDLFFBQVE7WUFDWSxpQkFBaUI7a0JBQS9DLFNBQVM7bUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRklMVEVSX09QRVJBVE9SUyB9IGZyb20gJy4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7ICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VydmVyRGF0YVNvdXJjZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XG5pbXBvcnQge1xuICBSZXN0RmllbGQsXG4gIFJFU1RfRklFTERfVFlQRVMsXG4gIFBFUk1JU1NJT04sXG59IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSwgTmJNZW51U2VydmljZSwgTmJUYWdDb21wb25lbnQgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQUxQSEFCRVQsIFJlc3RFeHBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWV4cG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RTaGFyZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICBAVmlld0NoaWxkKCdzZWFyY2gnKSBzZWFyY2g7XG4gIEBWaWV3Q2hpbGQoJ2F1dG9CZWxvbmdUb01hbnknKSBpbnB1dEJlbG9uZ1RvTWFueTtcbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGFscGhhYmVsdDogc3RyaW5nW10gPSBBTFBIQUJFVDtcbiAgZGF0YTogYW55O1xuICBzZXR0aW5nczogYW55O1xuICBzb3VyY2U6IFNlcnZlckRhdGFTb3VyY2U7XG4gIGN1cnJlbnRQZXJQYWdlOiBudW1iZXI7XG4gIGlzRmV0Y2hpbmcgPSB0cnVlO1xuICByZXNzb3VyY2VOYW1lID0gJyc7XG4gIGZpbHRlckJ5ID0gJyc7XG4gIGZpbHRlck9wZXJhdG9yID0gRklMVEVSX09QRVJBVE9SUztcbiAgZXhwb3J0QXNDb25maWcgPSB7XG4gICAgdHlwZTogJ3BuZycsIC8vIHRoZSB0eXBlIHlvdSB3YW50IHRvIGRvd25sb2FkXG4gICAgZWxlbWVudElkOiAnbXlUYWJsZUVsZW1lbnRJZCcsIC8vIHRoZSBpZCBvZiBodG1sL3RhYmxlIGVsZW1lbnRcbiAgfTtcbiAgc2VhcmNoSXRlbXMgPSBbXTtcbiAgc2VhcmNoSXRlbSA9ICcnO1xuXG4gIHNob3dDaGVja2JveCA9IGZhbHNlO1xuICBzaG93RGV0YWlscyA9IGZhbHNlO1xuICBvcHRpb25zOiBhbnkgPSB7fTtcbiAgYWxsRmlsdGVyQ29udGFpbnM6IGFueSA9IHt9O1xuICBiZWxvbmdUb1ZhbHVlOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9NYW55OiBhbnkgPSB7fTtcbiAgY29udHJvbHM6IGFueTtcbiAgaXNDaGVja2VkOiBhbnkgPSB7fTtcblxuICBzZWxlY3RlZFJvd3M6IGFueVtdID0gW107XG5cbiAgaXRlbXMgPSBbXG4gICAgeyB0aXRsZTogJ0FsbCBmb3JtYXRzJyB9LFxuICAgIHsgdGl0bGU6ICdDU1YnIH0sXG4gICAgeyB0aXRsZTogJ0VYQ0VMJyB9LFxuICAgIHsgdGl0bGU6ICdQREYnIH0sXG4gIF07XG4gIHBlclBhZ2VzT3B0aW9ucyA9IFtcbiAgICB7IHRpdGxlOiAnNScsIHZhbHVlOiA1IH0sXG4gICAgeyB0aXRsZTogJzEwJywgdmFsdWU6IDEwIH0sXG4gICAgeyB0aXRsZTogJzIwJywgdmFsdWU6IDIwIH0sXG4gICAgeyB0aXRsZTogJzUwJywgdmFsdWU6IDUwIH0sXG4gICAgeyB0aXRsZTogJzEwMCcsIHZhbHVlOiAxMDAgfSxcbiAgXTtcblxuICBwZXJtaXNzaW9ucyA9IFtQRVJNSVNTSU9OLkNSRUFURSwgUEVSTUlTU0lPTi5SRUFELCBQRVJNSVNTSU9OLkRFTEVURV07XG5cbiAgZ2V0IFBFUk1JU1NJT04oKSB7XG4gICAgcmV0dXJuIFBFUk1JU1NJT047XG4gIH1cbiAgY3VzdG9tID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RDb25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdFJlc291cmNlczogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5iTWVudVNlcnZpY2U6IE5iTWVudVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBleHBvcnRTZXJ2aWNlOiBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBwdWJsaWMgcmVzdFNoYXJlOiBSZXN0U2hhcmVTZXJ2aWNlLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RDb25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICk7XG5cbiAgICAvLyB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5KSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnPy5zZWFyY2hGaWx0ZXI/LmZpbHRlckJ5Py5yZWR1Y2UoXG4gICAgICAgIChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQudmFsdWVdID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXSA9IG5ldyBTZXQoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgdGhpcy5uYk1lbnVTZXJ2aWNlXG4gICAgLm9uSXRlbUNsaWNrKClcbiAgICAucGlwZShcbiAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gdGFnID09PSAnZXhwb3J0LWNvbnRleHQnKSxcbiAgICAgIG1hcCgoeyBpdGVtOiB7IHRpdGxlIH0gfSkgPT4gdGl0bGUpLFxuICAgIClcbiAgICAuc3Vic2NyaWJlKCh0aXRsZSkgPT4ge1xuICAgICAgY29uc29sZS5sb2codGl0bGUsICd0aXRsZT09PT09PT09PT09PT09PT09PT09PicpO1xuICAgICAgc3dpdGNoICh0aXRsZSkge1xuICAgICAgICBjYXNlICdFWENFTCc6XG4gICAgICAgICAgdGhpcy5leHBvcnRUb0V4Y2VsKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ1BERic6XG4gICAgICAgICAgdGhpcy5leHBvcnRUb1BkZigpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdDU1YnOlxuICAgICAgICAgIHRoaXMuZXhwb3J0VG9Dc3YoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLmV4cG9ydEFsbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlcikge1xuICAgICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHtcbiAgICAgICAgZmllbGQ6ICcnLFxuICAgICAgICBvcGVyYXRvcjogJycsXG4gICAgICAgIHRlcm1zOiAnJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudFBlclBhZ2UgPSB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZTtcblxuICAgIHRoaXMuZ2V0TGlzdCgpO1xuXG4gICAgdGhpcy5zb3VyY2Uub25DaGFuZ2VkKCkuc3Vic2NyaWJlKChlKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pc0NoZWNrZWQgPSB7XG4gICAgICB0aXRsZTogJ2NoZWNrJyxcbiAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgZmlsdGVyOiBmYWxzZSxcbiAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgaGFuZGxlQ2hlY2tib3hDbGljazogKGV2ZW50LCByb3dEYXRhKSA9PlxuICAgICAgICAgIHRoaXMub25DaGVja2JveENsaWNrKGV2ZW50LCByb3dEYXRhKSxcbiAgICAgICAgc2VsZWN0ZWQ6XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MuZmluZCgoZWx0KSA9PiBlbHQ/LmlkID09IHJvdz8uaWQpICE9PSB1bmRlZmluZWQsXG4gICAgICAgIGNlbGwsXG4gICAgICAgIHJvdyxcbiAgICAgIH0pLFxuICAgICAgZWRpdG9yOiB7XG4gICAgICAgIHR5cGU6ICdjaGVja2JveCcsXG4gICAgICB9LFxuICAgICAgcmVuZGVyQ29tcG9uZW50OiBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCxcbiAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgIH07XG5cbiAgXG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjdXN0b20gPSBbXTtcbiAgICAgIHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMuZm9yRWFjaCgocGVybWlzc2lvbikgPT4ge1xuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICBhcGk6IHBlcm1pc3Npb24uZmllbGRLZXkuYXBpLnN1YnN0cmluZygxKSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA6IHt9LFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsID0ge307XG5cbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAocGVybWlzc2lvbi50eXBlID09PSBQRVJNSVNTSU9OLlJFQUQpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RldGFpbCcsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi1jb21wb3NlJz48L2k+XCIsXG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHBlcm1pc3Npb24udHlwZSA9PT0gUEVSTUlTU0lPTi5ERUxFVEUpIHtcbiAgICAgICAgICAgICAgICAgIGN1c3RvbS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2RlbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjxpIGNsYXNzPSduYi10cmFzaCB0ZXh0LWRhbmdlcic+PC9pPlwiLFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgdGhpcy5jdXN0b20gPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgIGhpZGVTdWJIZWFkZXI6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5oaWRlQWRkU3ViSGVhZGVyLFxuICAgICAgICAgICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgICAgY3VzdG9tOiBjdXN0b20sXG4gICAgICAgICAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwYWdlcjoge1xuICAgICAgICAgICAgICAgICAgcGVyUGFnZTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgICAgICAgICAgICBhZGQ6IHtcbiAgICAgICAgICAgICAgICAgIGFkZEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLXBsdXNcIiA+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbkNvbnRlbnQ6ICc8aSBjbGFzcz1cIm5iLWNsb3NlXCI+PC9pPicsXG4gICAgICAgICAgICAgICAgICBjb25maXJtQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgICBoaWRlU3ViSGVhZGVyOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuaGlkZUFkZFN1YkhlYWRlcixcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgIHBvc2l0aW9uOiAncmlnaHQnLFxuICAgICAgICAgIGN1c3RvbTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOiAnZGV0YWlsJyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwiPGkgY2xhc3M9J25iLWNvbXBvc2UnPjwvaT5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6ICdkZWxldGUnLFxuICAgICAgICAgICAgICB0aXRsZTogXCI8aSBjbGFzcz0nbmItdHJhc2ggdGV4dC1kYW5nZXInPjwvaT5cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBlZGl0OiBmYWxzZSxcbiAgICAgICAgICBkZWxldGU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYWdlcjoge1xuICAgICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG5cbiAgICAgICAgYWRkOiB7XG4gICAgICAgICAgYWRkQnV0dG9uQ29udGVudDogJzxpIGNsYXNzPVwibmItcGx1c1wiID48L2k+JyxcbiAgICAgICAgICBjcmVhdGVCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jaGVja21hcmtcIj48L2k+JyxcbiAgICAgICAgICBjYW5jZWxCdXR0b25Db250ZW50OiAnPGkgY2xhc3M9XCJuYi1jbG9zZVwiPjwvaT4nLFxuICAgICAgICAgIGNvbmZpcm1DcmVhdGU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVNob3dDaGVja2JveCgpIHtcbiAgICB0aGlzLnNob3dDaGVja2JveCA9ICF0aGlzLnNob3dDaGVja2JveDtcbiAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gIH1cblxuICBvbkRlbGV0ZUNvbmZpcm0oZXZlbnQpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IGV2ZW50LmRhdGEsXG4gICAgICAgIHRpdGxlOiAnU1VQUFJFU1NJT04nLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiBmYWxzZSxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlQWxsQ29uZmlybSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHRoaXMuc2VsZWN0ZWRSb3dzLFxuICAgICAgICBtdWx0aVN1cHByZXNzOiB0cnVlLFxuICAgICAgICB0aXRsZTogJ1RPVVQgU1VQUFJJTUVSJyxcbiAgICAgICAgbGlzdENvbmZpZzogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLFxuICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB7XG4gICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFkZE5ld0VudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWFkZGApO1xuICB9XG5cbiAgZGV0YWlsRW50aXR5KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmhhc1Blcm1pc3Npb24oUEVSTUlTU0lPTi5SRUFEKSkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICBldmVudC5kYXRhLmlkLFxuICAgICAgICBdKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICBldmVudC5kYXRhLmlkLFxuICAgICAgXSk7XG4gICAgfVxuICB9XG5cbiAgb25DaGVja2JveENsaWNrKGV2ZW50OiBhbnksIHJvdzogYW55KSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSA9PT0gLTEpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzLnB1c2gocm93KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZFJvd3Muc3BsaWNlKHRoaXMuc2VsZWN0ZWRSb3dzLmluZGV4T2Yocm93KSwgMSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0QWxsUm93cygpIHtcbiAgICB0aGlzLnNvdXJjZS5nZXRBbGwoKS50aGVuKChyb3dzKSA9PiB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCAhPT0gcm93cz8ubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG4gICAgICAgIHJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJvd3MucHVzaChyb3cpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRSb3dzID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLnNvdXJjZS5yZWZyZXNoKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICBpZiAoIXRoaXMuc2hvd0NoZWNrYm94KSB7XG4gICAgICBjb2x1bm1zWydpc0NoZWNrZWQnXSA9IHRoaXMuaXNDaGVja2VkO1xuICAgIH1cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IChjZWxsLCByb3cpID0+ICh7XG4gICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gY29sdW5tcztcbiAgfVxuXG4gIGdldExpc3QocGFnZSA9IG51bGwsIHBlclBhZ2UgPSBudWxsKSB7XG4gICAgdGhpcy5yZXN0U2hhcmUuc2V0TG9hZGVyKHRydWUpO1xuICAgIGlmIChwYWdlKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zID0geyAuLi50aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zLCBwYWdlIH07XG4gICAgfVxuICAgIGlmIChwZXJQYWdlKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zID0ge1xuICAgICAgICAuLi50aGlzLnJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICBwZXJfcGFnZTogcGVyUGFnZSxcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc291cmNlID0gbmV3IFNlcnZlckRhdGFTb3VyY2UodGhpcy5odHRwLCB7XG4gICAgICBlbmRQb2ludDpcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5yZXN0QmFzZVVybCArXG4gICAgICAgICcvJyArXG4gICAgICAgIHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGkgK1xuICAgICAgICAnPycgK1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAgICAgLnJlZHVjZShcbiAgICAgICAgICAgIChjdW11bCwgaXRlbSkgPT5cbiAgICAgICAgICAgICAgY3VtdWwgK1xuICAgICAgICAgICAgICBpdGVtICtcbiAgICAgICAgICAgICAgJz0nICtcbiAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICtcbiAgICAgICAgICAgICAgJyYnLFxuICAgICAgICAgICAgJydcbiAgICAgICAgICApXG4gICAgICAgICAgLnNsaWNlKDAsIC0xKSxcbiAgICAgIGRhdGFLZXk6ICdkYXRhJyxcbiAgICAgIHBhZ2VyUGFnZUtleTogJ3BhZ2UnLFxuICAgICAgcGFnZXJMaW1pdEtleTogJ3Blcl9wYWdlJyxcbiAgICAgIHRvdGFsS2V5OiAndG90YWwnLFxuICAgICAgZmlsdGVyRmllbGRLZXk6IGAjX2luY2x1ZGUjYCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlQ29uZmlybShldmVudCkge1xuICAgIGNvbnN0IGRhdGFzID0gZXZlbnQubmV3RGF0YTtcbiAgICBjb25zdCBzYXZlQmVsb25nVG9tYW55ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZKSB7XG4gICAgICAgIHNhdmVCZWxvbmdUb21hbnkucHVzaCh7XG4gICAgICAgICAgcmVzb3VyY2VzOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgcGl2b3Q6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5waXZvdE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkZWxldGUgZGF0YXNbZWx0Lm5hbWVdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdFJlc291cmNlc1xuICAgICAgLmFkZFJlc291cmNlcyh0aGlzLnJlc291cmNlLmFkZENvbmZpZywgeyAuLi5kYXRhcywgdXNlcl9pZDogMSB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdENvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICBlbGVtZW50LnBpdm90XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgcHJvbXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQucmVzb3VyY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXTogaXRlbVtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXSxcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlc291cmNlSWROYW1lJ11dOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBwcm9tcy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIC5hZGRSZXNvdXJjZXMocmVzdFJlc291cmNlLmFkZENvbmZpZywgZGF0YSlcbiAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0TGlzdChcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlLmdldFBhZ2luZygpLnBlclBhZ2VcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICB0aGlzLmdldExpc3QoXG4gICAgICAgICAgICB0aGlzLnNvdXJjZS5nZXRQYWdpbmcoKS5wYWdlLFxuICAgICAgICAgICAgdGhpcy5zb3VyY2UuZ2V0UGFnaW5nKCkucGVyUGFnZVxuICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uQ3VzdG9tKGV2ZW50KSB7XG4gICAgc3dpdGNoIChldmVudC5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICAgIHRoaXMub25EZWxldGVDb25maXJtKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdkZXRhaWwnOlxuICAgICAgICB0aGlzLmRldGFpbEVudGl0eShldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldEZ1bGxEYXRhKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzLmdldFJlc291cmNlcyh7XG4gICAgICBhcGk6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5hcGksXG4gICAgICBxdWVyeVBhcmFtczoge1xuICAgICAgICBzaG91bGRfcGFnaW5hdGU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydFRvRXhjZWwoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHNoZWV0SGVhZGVyKTtcbiAgICBjb25zdCBlZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgIGNvbnN0IHVkdDogYW55ID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICB7IEE6ICdSZXN0IEV4Y2VsIGV4cG9ydCcgfSwgLy8gdGl0bGVcbiAgICAgICAgc2hlZXRIZWFkZXIsIC8vIHRhYmxlIGhlYWRlclxuICAgICAgXSxcbiAgICAgIHNraXBIZWFkZXI6IHRydWUsXG4gICAgfTtcbiAgICBsZXQgZWx0ID0ge307XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50LCBpbmRpY2UpID0+IHtcbiAgICAgICAgZWx0ID0ge307XG4gICAgICAgIE9iamVjdC5lbnRyaWVzKGNvbHVubXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBlbHRbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGVsZW1lbnRbc2hlZXRIZWFkZXJba2V5c1tpbmRleF1dXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHVkdC5kYXRhLnB1c2goZWx0KTtcbiAgICAgIH0pO1xuXG4gICAgICBlZGF0YS5wdXNoKHVkdCk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9FeGNlbChlZGF0YSwgJ3Jlc3RfZmlsZV9leGNlbCcpO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0VG9QZGYoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tcyA9IHt9O1xuICAgIGNvbnN0IGN1c3RvbURhdGEgPSBbXTtcbiAgICBjb25zdCBoZWFkZXIgPSBbXTtcbiAgICBsZXQgZWx0ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgaGVhZGVyLnB1c2goZWx0LmxhYmVsKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5nZXRGdWxsRGF0YSgpLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbHQgPSBbXTtcbiAgICAgICAgaGVhZGVyLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICAgIGVsdC5wdXNoKGVsZW1lbnRbcm93XSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21EYXRhLnB1c2goZWx0KTtcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZmlsZVRpdGxlOiBzdHJpbmcgPSB0aGlzLnJlc291cmNlLm5hbWU7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9QZGYoXG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgY3VzdG9tRGF0YSxcbiAgICAgICAgJ3Jlc3RfZmlsZV9wZGYnLFxuICAgICAgICBmaWxlVGl0bGVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRUb0NzdigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgY3VzdG9tRGF0YSA9IFtdO1xuICAgIGNvbnN0IGhlYWRlciA9IFtdO1xuICAgIGxldCBlbHQgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBoZWFkZXIucHVzaChlbHQubGFiZWwpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsdCA9IHt9O1xuICAgICAgICBoZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0W3Jvd10gPSBlbGVtZW50W3Jvd107XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21EYXRhLnB1c2goZWx0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5leHBvcnRTZXJ2aWNlLmV4cG9ydFRvQ3N2KGhlYWRlciwgY3VzdG9tRGF0YSwgJ3Jlc3RfZmlsZV9jc3YnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydEFsbCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bm1zID0ge307XG4gICAgY29uc3QgcGRmQW5kQ3N2SGVhZGVyID0gW107XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcbiAgICBjb25zdCBjc3ZEYXRhID0gW107XG4gICAgY29uc3QgcGRmRGF0YSA9IFtdO1xuICAgIGxldCBlbHRQREYgPSBbXTtcbiAgICBsZXQgZWx0Q1NWID0ge307XG4gICAgbGV0IGVsdEVYQ0VMID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgcGRmQW5kQ3N2SGVhZGVyLnB1c2goZWx0LmxhYmVsKTtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgc2hlZXRIZWFkZXJbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGtleTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGV4Y2VsRGF0YTogYW55ID0ge1xuICAgICAgZGF0YTogW3sgQTogJ1Jlc3QgRXhjZWwgZXhwb3J0JyB9LCBzaGVldEhlYWRlcl0sXG4gICAgICBza2lwSGVhZGVyOiB0cnVlLFxuICAgIH07XG5cbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoc2hlZXRIZWFkZXIpO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICB0aGlzLmdldEZ1bGxEYXRhKCkuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICByZXNwb25zZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIC8vQ1NWXG4gICAgICAgIGVsdENTViA9IHt9O1xuICAgICAgICBwZGZBbmRDc3ZIZWFkZXIuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgZWx0Q1NWW3Jvd10gPSBlbGVtZW50W3Jvd107XG4gICAgICAgIH0pO1xuICAgICAgICBjc3ZEYXRhLnB1c2goZWx0Q1NWKTtcbiAgICAgICAgLy9QREZcbiAgICAgICAgZWx0UERGID0gW107XG4gICAgICAgIHBkZkFuZENzdkhlYWRlci5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgICAgICBlbHRQREYucHVzaChlbGVtZW50W3Jvd10pO1xuICAgICAgICB9KTtcbiAgICAgICAgcGRmRGF0YS5wdXNoKGVsdFBERik7XG4gICAgICAgIC8vRVhDRUxcbiAgICAgICAgZWx0RVhDRUwgPSB7fTtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGVsdEVYQ0VMW3RoaXMuYWxwaGFiZWx0W2luZGV4XV0gPSBlbGVtZW50W3NoZWV0SGVhZGVyW2tleXNbaW5kZXhdXV07XG4gICAgICAgIH0pO1xuICAgICAgICBleGNlbERhdGEuZGF0YS5wdXNoKGVsdEVYQ0VMKTtcbiAgICAgICAgZWRhdGEucHVzaChleGNlbERhdGEpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZ2VuZXJhdGVaaXAocGRmQW5kQ3N2SGVhZGVyLCBwZGZEYXRhLCBjc3ZEYXRhLCBlZGF0YSk7XG4gICAgfSk7XG4gIH1cblxuICAvL0ZpbHRlclxuXG4gIHNldFBhZ2VyKHNldFBhZ2VyKSB7XG4gICAgdGhpcy5zb3VyY2Uuc2V0UGFnaW5nKDEsIHNldFBhZ2VyLCB0cnVlKTtcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zZXR0aW5ncyk7XG4gIH1cblxuICBzZWxlY3RGaWx0ZXJCeShkYXRhLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkID0gZGF0YVsndmFsdWUnXTtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWUgPSBkYXRhWydyZXNvdXJjZUZpZWxkTmFtZSddO1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLnJlc291cmNlID0gZGF0YVsncmVzb3VyY2UnXTtcbiAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5yZXNzb3VyY2VGaWx0ZXJOYW1lID0gZGF0YVsncmVzc291cmNlRmlsdGVyTmFtZSddO1xuICAgIGlmIChkYXRhWyd2YWx1ZSddID09PSAnaWQnKSB7XG4gICAgICBjb25zdCByZXNvdXJjZSA9IGRhdGE/LnJlc291cmNlPy5hZGRDb25maWc7XG4gICAgICB0aGlzLnNlcnZpY2VSZXN0UmVzb3VyY2VzXG4gICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgIGFwaTogcmVzb3VyY2UuYXBpLFxuICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7XG4gICAgICAgICAgICBzaG91bGRfcGFnaW5hdGU6IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICB0aGlzLm9wdGlvbnNbZGF0YVsndmFsdWUnXV0gPSBbLi4ucmVzcG9uc2VdLnNvcnQoKHgsIHkpID0+XG4gICAgICAgICAgICB4WydpZCddXG4gICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5WydpZCddLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZGF0YVsndmFsdWUnXV0gPSBvZihcbiAgICAgICAgICAgIHRoaXMub3B0aW9uc1tkYXRhWyd2YWx1ZSddXVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE9wZXJhdG9yKHZhbHVlLCBpbmRleCkge1xuICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLm9wZXJhdG9yID0gdmFsdWU7XG4gIH1cblxuICBvbkZpbHRlcih2YWwsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4ICE9IHVuZGVmaW5lZCAmJiBpbmRleCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS50ZXJtcyA9IHZhbD8udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoSXRlbSA9IHZhbD8udmFsdWU7XG4gICAgfVxuICB9XG5cbiAgYWRkRmllbGRTZWFyY2goKSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5wdXNoKHsgZmllbGQ6ICcnLCBvcGVyYXRvcjogJycsIHRlcm1zOiAnJyB9KTtcbiAgfVxuXG4gIHJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KSB7XG4gICAgdGhpcy5zZWFyY2hJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgcHJpdmF0ZSBmaWx0ZXJNYW55KFxuICAgIHZhbHVlOiBhbnksXG4gICAgaW5kZXg6IG51bWJlcixcbiAgICBvcHRpb25zID0gJ2JlbG9uZ1RvTWFueU9wdGlvbnMnXG4gICk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnICYmIHRoaXMub3B0aW9uc1snaWQnXT8ubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1snaWQnXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgOiAnaWQnLFxuICAgICAgICBdLnNvbWUoKGVsdCkgPT4ge1xuICAgICAgICAgIHJldHVybiBgJHtvcHRpb25WYWx1ZVtlbHRdPy50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICBgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucyh2YWx1ZTogYW55LCBpbmRleDogbnVtYmVyKTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyTWFueShmaWx0ZXJTdHJpbmcsIGluZGV4KSlcbiAgICApO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zWydpZCddID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBpbmRleFxuICAgICk7XG4gIH1cblxuICBvblRhZ1JlbW92ZUJlbG9uZyh0YWdUb1JlbW92ZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbJ2lkJ10pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcbiAgICBjZWxsRGF0YS5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHRbJ25hbWUnXSAhPSB0YWdUb1JlbW92ZS50ZXh0KSBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55WydpZCddID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFsnaWQnXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuICAvL2JlbG9uZ1RvTWFueU9wdGlvbnNcbiAgb25DaG9vc2UoZXZlbnQsIGluZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55WydpZCddKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuICAgICAgaWYgKHNlYXJjaCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgbmV3RWx0ID0ge1xuICAgICAgICAgIGlkOiBldmVudC5pZCxcbiAgICAgICAgICBzYXZlUmVsYXRlZElkTmFtZTogZXZlbnQuaWQsXG4gICAgICAgICAgc2F2ZVJlc291cmNlSWROYW1lOiBldmVudC5pZCxcbiAgICAgICAgICBuYW1lOiBldmVudFtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICBdLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFsnaWQnXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVsnaWQnXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIHN0YXJ0U2VhcmNoKCkge1xuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuICAgIGxldCBzZWFyY2ggPSAnJztcbiAgICB0aGlzLnNlYXJjaEl0ZW1zLmZvckVhY2goKGVsZW1lbnQsIGluZCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQ/LmZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgIGxldCB0YWIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuYmVsb25nVG9NYW55WydpZCddKSB7XG4gICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgIHRhYi5wdXNoKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGFiLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsZXQgbGlzdElkID0gdGFiLm1hcCgoZWx0OiBhbnkpID0+IGVsdD8uaWQpLmpvaW4oJywnKTtcbiAgICAgICAgICBwYXJhbXNbYCR7ZWxlbWVudD8ucmVzc291cmNlRmlsdGVyTmFtZX0taW5gXSA9IGAke2xpc3RJZH1gO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudD8uZmllbGQgIT0gJycgJiYgZWxlbWVudD8udGVybXMgIT0gJycpIHtcbiAgICAgICAgICBpZiAoZWxlbWVudD8ub3BlcmF0b3IgIT0gJz0nKSB7XG4gICAgICAgICAgICBwYXJhbXNbXG4gICAgICAgICAgICAgIGVsZW1lbnQ/LmZpZWxkICsgJy0nICsgZWxlbWVudD8ub3BlcmF0b3JcbiAgICAgICAgICAgIF0gPSBgJHtlbGVtZW50Py50ZXJtc31gO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXNbZWxlbWVudD8uZmllbGRdID0gYCR7ZWxlbWVudD8udGVybXN9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBzZWFyY2ggPSBPYmplY3Qua2V5cyh0aGlzLnJlc291cmNlLmxpc3RDb25maWcucXVlcnlQYXJhbXMpXG4gICAgICAucmVkdWNlKFxuICAgICAgICAoY3VtdWwsIGl0ZW0pID0+XG4gICAgICAgICAgY3VtdWwgKyBpdGVtICsgJz0nICsgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnF1ZXJ5UGFyYW1zW2l0ZW1dICsgJyYnLFxuICAgICAgICAnJ1xuICAgICAgKVxuICAgICAgLnNsaWNlKDAsIC0xKTtcblxuICAgIGlmIChzZWFyY2ggIT0gJycpIHtcbiAgICAgIHNlYXJjaCArPSAnJic7XG4gICAgfVxuICAgIHNlYXJjaCArPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAucmVkdWNlKChjdW11bCwgaXRlbSkgPT4gY3VtdWwgKyBpdGVtICsgJz0nICsgcGFyYW1zW2l0ZW1dICsgJyYnLCAnJylcbiAgICAgIC5zbGljZSgwLCAtMSk7XG5cbiAgICB0aGlzLnNvdXJjZSA9IG5ldyBTZXJ2ZXJEYXRhU291cmNlKHRoaXMuaHR0cCwge1xuICAgICAgZW5kUG9pbnQ6XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RDb25maWcucmVzdEJhc2VVcmwgK1xuICAgICAgICAnLycgK1xuICAgICAgICB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuYXBpICtcbiAgICAgICAgJz8nICtcbiAgICAgICAgc2VhcmNoLFxuICAgICAgZGF0YUtleTogJ2RhdGEnLFxuICAgICAgcGFnZXJQYWdlS2V5OiAncGFnZScsXG4gICAgICBwYWdlckxpbWl0S2V5OiAncGVyX3BhZ2UnLFxuICAgICAgdG90YWxLZXk6ICd0b3RhbCcsXG4gICAgICBmaWx0ZXJGaWVsZEtleTogYCNfaW5jbHVkZSNgLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmItY2FyZCBzdGF0dXM9XCJwcmltYXJ5XCI+XG4gIDxuYi1jYXJkLWhlYWRlcj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgPGg2IGNsYXNzPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgIHt7IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy50aXRsZSB9fVxuICAgICAgICA8L2g2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJcIiAqbmdJZj1cInNob3dDaGVja2JveFwiPlxuICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIGdob3N0IHN0YXR1cz1cImNvbnRyb2xcIiAoY2xpY2spPVwic2VsZWN0QWxsUm93cygpXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzcz1cIm1yLTJcIlxuICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIFtjaGVja2VkXT1cInRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggPT0gdGhpcy5zb3VyY2UuY291bnQoKVwiXG4gICAgICAgICAgLz57eyAncmVzdC1kZXRhaWwuc2VsZWN0JyB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiXCIgc3R5bGU9XCJoZWlnaHQ6IDQwcHhcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgZ2hvc3RcbiAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1kZXRhaWwuc2VsZWN0JyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAoY2xpY2spPVwidG9nZ2xlU2hvd0NoZWNrYm94KClcIlxuICAgICAgICA+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFsobmdNb2RlbCldPVwic2hvd0NoZWNrYm94XCIgLz5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgZ2hvc3RcbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cImV4cG9ydC1jb250ZXh0XCJcbiAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuYi1pY29uIGljb249XCJkb3dubG9hZC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID09PSAwXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICBzdGF0dXM9XCJjb250cm9sXCJcbiAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QuYWRkJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImFkZE5ld0VudGl0eSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3Bhbj57eyBcImFkZFwiIHwgdHJhbnNsYXRlIH19PC9zcGFuPlxuICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWxlY3RlZFJvd3M/Lmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWxpc3QuZGVsZXRlQWxsU2VsZWN0JyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgc3RhdHVzPVwiY29udHJvbFwiXG4gICAgICAgICAgICAoY2xpY2spPVwib25EZWxldGVBbGxDb25maXJtKClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgIGljb249XCJ0cmFzaFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogcmdiKDIzOCwgMTMwLCAxNTcpXCJcbiAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmd4UGVybWlzc2lvbnNPbmx5PVwicGVybWlzc2lvbnNcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uQ1JFQVRFXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gbmJCdXR0b24gZ2hvc3Qgc3RhdHVzPVwiY29udHJvbFwiIChjbGljayk9XCJhZGROZXdFbnRpdHkoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IFwiYWRkXCIgfCB0cmFuc2xhdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXMtY2lyY2xlXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkRFTEVURVwiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAqbmdJZj1cInRoaXMuc2VsZWN0ZWRSb3dzPy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkRlbGV0ZUFsbENvbmZpcm0oKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgaWNvbj1cInRyYXNoXCJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6IHJnYigyMzgsIDEzMCwgMTU3KVwiXG4gICAgICAgICAgICAgICAgPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPCEtLSA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHRcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgXCJyZXN0LWxpc3QuZXhwb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+IC0tPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1oZWFkZXI+XG5cbiAgPG5iLWNhcmQtYm9keVxuICAgIFtuYlNwaW5uZXJdPVwidGhpcy5yZXN0U2hhcmUubGlzdExvYWRlclwiXG4gICAgbmJTcGlubmVyU2l6ZT1cImxhcmdlXCJcbiAgICBuYlNwaW5uZXJTdGF0dXM9XCJwcmltYXJ5XCJcbiAgPlxuICAgIDwhLS0gUmVzdC1zZWFyY2ggaW1wbGVtZW50IC0tPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgbWItNVwiICpuZ0lmPVwidGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlclwiPlxuICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAqbmdJZj1cInRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIuZmlsdGVyQnkubGVuZ3RoID4gMFwiXG4gICAgICA+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNlYXJjaCBvZiBzZWFyY2hJdGVtczsgbGV0IGluZGV4ID0gaW5kZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTMgY29sLW1kLTYgY29sLXhzLTEyIGlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICA8IS0tIFNlbGVjdCB3aXRoIGZpbHRlciBieSAtLT5cbiAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIidyZXN0LWxpc3QuZmlsdGVyUGxhY2Vob2xkZXInIHwgdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJzZWxlY3RGaWx0ZXJCeSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgIGxldCBmaWx0ZXIgb2YgdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnNlYXJjaEZpbHRlci5maWx0ZXJCeVxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cImZpbHRlclwiXG4gICAgICAgICAgICAgICAgPnt7IGZpbHRlcltcIm5hbWVcIl0gfCB0aXRsZWNhc2UgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L25iLXNlbGVjdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgIT09ICdpZCdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMyBjb2wtbWQtNiBjb2wteHMtMTIgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCIncmVzdC1saXN0Lm9wZXJhdG9yJyB8IHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cInNlbGVjdE9wZXJhdG9yKCRldmVudCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcGVyYXRvciBvZiBmaWx0ZXJPcGVyYXRvclwiXG4gICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3BlcmF0b3IudmFsdWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IG9wZXJhdG9yLm5hbWUgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgIT09ICdpZCdcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtMTIgY29sLXhzLTEyIGlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgJ2NvbC0xMic6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5zZWFyY2hGaWx0ZXIgPT0gbnVsbFxuICAgICAgICAgICAgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgKGlucHV0KT1cIm9uRmlsdGVyKCRldmVudC50YXJnZXQsIGluZGV4KVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiJ3Jlc3QtbGlzdC5zZWFyY2hQbGFjZWhvbGRlcicgfCB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJmb3JtXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGQgPT09ICdpZCdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0ICh0YWdSZW1vdmUpPVwib25UYWdSZW1vdmVCZWxvbmcoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBiZWxvbmdUb01hbnlbJ2lkJ11cIlxuICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJ0cmVlWyduYW1lJ11cIlxuICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgI2F1dG9CZWxvbmdUb01hbnlcbiAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImJlbG9uZ1RvRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hJdGVtc1tpbmRleF0uZmllbGROYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuc2VhcmNoSXRlbXNbaW5kZXhdLmZpZWxkTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiJ2lkJ1wiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuXG4gICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgI2JlbG9uZ1RvRmllbGRcbiAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvbkNob29zZSgkZXZlbnQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zWydpZCddIHwgYXN5bmNcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnNlYXJjaEl0ZW1zW2luZGV4XS5maWVsZE5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLWxnLTEgY29sLW1kLTIgY29sLXhzLTQgaW5wdXQtc3BhY2Ugcm93XCJcbiAgICAgICAgICAgICpuZ0lmPVwiaW5kZXggPT0gMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5zZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIChjbGljayk9XCJzdGFydFNlYXJjaCgpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInNlYXJjaC1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtbGctMSBjb2wtbWQtMiBjb2wteHMtNCBpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAqbmdJZj1cImluZGV4ID09IDA7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1saXN0LmFkZFNlYXJjaCcgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEZpZWxkU2VhcmNoKClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1cy1vdXRsaW5lXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTEgaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtbGlzdC5yZW1vdmVTZWFyY2gnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUZpZWxkU2VhcmNoKGluZGV4KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwibWludXMtb3V0bGluZVwiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLSA8bmcyLXNtYXJ0LXRhYmxlXG4gICAgKm5nSWY9XCJzaG93Q2hlY2tib3hcIlxuICAgICAgW3NldHRpbmdzXT1cInsuLi5zZXR0aW5ncywgY29sdW1uczogeyAuLi5zZXR0aW5ncy5jb2x1bW5zLCBpc0NoZWNrZWQgfSB9XCJcbiAgICAgIFtzb3VyY2VdPVwic291cmNlXCJcbiAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjcmVhdGVDb25maXJtKT1cIm9uQ3JlYXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgIChjdXN0b20pPVwib25DdXN0b20oJGV2ZW50KVwiXG4gICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgPlxuICAgIDwvbmcyLXNtYXJ0LXRhYmxlPiAtLT5cblxuICAgIDwhLS0gKm5nSWY9XCIhc2hvd0NoZWNrYm94XCIgLS0+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgICAgICpuZ0lmPVwiY3VzdG9tXCJcbiAgICAgID5cbiAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA9PT0gMFwiPlxuICAgICAgPG5nMi1zbWFydC10YWJsZVxuICAgICAgICBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIlxuICAgICAgICBbc291cmNlXT1cInNvdXJjZVwiXG4gICAgICAgIChkZWxldGVDb25maXJtKT1cIm9uRGVsZXRlQ29uZmlybSgkZXZlbnQpXCJcbiAgICAgICAgKGNyZWF0ZUNvbmZpcm0pPVwib25DcmVhdGVDb25maXJtKCRldmVudClcIlxuICAgICAgICAoY3VzdG9tKT1cIm9uQ3VzdG9tKCRldmVudClcIlxuICAgICAgICAodXNlclJvd1NlbGVjdCk9XCJkZXRhaWxFbnRpdHkoJGV2ZW50KVwiXG4gICAgICA+XG4gICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWVuZFwiXG4gICAgICBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW1cIlxuICAgID5cbiAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsIG14LTJcIj57eyBcIm9wdGlvbnMucGVyX3BhZ2VcIiB8IHRyYW5zbGF0ZSB9fTwvbGFiZWw+XG4gICAgICA8bmItc2VsZWN0XG4gICAgICAgIFtwbGFjZWhvbGRlcl09XCJyZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UudG9TdHJpbmcoKVwiXG4gICAgICAgIFsoc2VsZWN0ZWQpXT1cImN1cnJlbnRQZXJQYWdlXCJcbiAgICAgID5cbiAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICpuZ0Zvcj1cImxldCBwZXJQYWdlIG9mIHBlclBhZ2VzT3B0aW9uc1wiXG4gICAgICAgICAgKGNsaWNrKT1cInNldFBhZ2VyKHBlclBhZ2UudmFsdWUpXCJcbiAgICAgICAgICB2YWx1ZT1cInBlclBhZ2UudmFsdWVcIlxuICAgICAgICAgID57eyBwZXJQYWdlLnRpdGxlIH19PC9uYi1vcHRpb25cbiAgICAgICAgPlxuICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1ib2R5PlxuPC9uYi1jYXJkPlxuIl19