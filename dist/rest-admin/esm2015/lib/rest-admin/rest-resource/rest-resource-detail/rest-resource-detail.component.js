import { Component, Input } from '@angular/core';
import { REST_FIELD_TYPES } from '../models/rest-resource.model';
// import urlToFile from '../../../utils/';
import * as _ from 'lodash';
import urlToFile from '../../../utils/urlToFile';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../service/rest-resource.service";
import * as i3 from "../service/rest-admin-config.service";
import * as i4 from "@nebular/theme";
import * as i5 from "../service/rest-lang.service";
import * as i6 from "@angular/common";
import * as i7 from "@codehint-ng/html-compiler";
import * as i8 from "ngx-dropzone";
import * as i9 from "../components/fs-icon-ccomponent/fs-icon.component";
import * as i10 from "@ngx-translate/core";
function RestResourceDetailComponent_nb_card_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r0.resource.detailConfig == null ? null : ctx_r0.resource.detailConfig.title), " ");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.data, " ");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_1_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_1_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 5);
    i0.ɵɵelementStart(8, "ngx-dropzone", 7);
    i0.ɵɵlistener("change", function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r25 = i0.ɵɵnextContext(5); return ctx_r25.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 8);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r26); const item_r6 = i0.ɵɵnextContext(3).$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onRemove(ctx_r27.filesUpload[item_r6.key]); });
    i0.ɵɵelementStart(10, "ngx-dropzone-label");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.data, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r6 == null ? null : item_r6.value == null ? null : item_r6.value.data, " (", "pdf", ")");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_1_ng_container_5_Template, 12, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r6.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", ctx_r23.jsonValue(item_r6.value));
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_1_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵelementContainerStart(8);
    i0.ɵɵtext(9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r6.value.data);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r38 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r38.jsonValue(item_r6.value), " ");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", ctx_r39.jsonValue(item_r6.value));
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelement(6, "nb-checkbox", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r6.value.data)("disabled", true);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelement(6, "img", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r48 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r48.style);
    i0.ɵɵproperty("src", item_r6.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r6.value.data), " ");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "a", 12);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r62); const item_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r60 = i0.ɵɵnextContext(2); return ctx_r60.loadBelongToDetail(item_r6.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r6.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.data, " ");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r72 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r71.data[ctx_r72.customColumn], "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.restField.name, "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r71 = i0.ɵɵnextContext(2).$implicit;
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r71.data.item);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r71 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r71.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r71.data.place);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelement(1, "ngx-fs-icon", 19);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r71 = ctx.$implicit;
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r71.expanded)("place", row_r71.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.listConfig == null ? null : item_r6.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.listConfig == null ? null : item_r6.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 13);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_tr_2_Template, 1, 0, "tr", 14);
    i0.ɵɵelementContainerStart(3, 15);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_td_4_Template, 4, 4, "td", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r66 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r66.listDataSource[item_r6.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r66.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r66.customColumn);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r89 = i0.ɵɵnextContext().$implicit;
    const ctx_r90 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r89.data[ctx_r90.customColumn], "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.restField.name, "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r89 = i0.ɵɵnextContext(2).$implicit;
    const item_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r89.data.item);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r89 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r89.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r89.data.place);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelement(1, "ngx-fs-icon", 19);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r89 = ctx.$implicit;
    const item_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r89.expanded)("place", row_r89.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r6.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 13);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_tr_2_Template, 1, 0, "tr", 14);
    i0.ɵɵelementContainerStart(3, 15);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_td_4_Template, 4, 4, "td", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r83 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r83.listDataSource[item_r6.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r83.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r83.customColumn);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r102 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r102.style);
    i0.ɵɵproperty("resource", res_r102.resource)("ID", res_r102.id)("ressourceName", res_r102.resourceName)("container", true);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 21);
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r85 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r85.listDataSource[item_r6.value.restField.name]);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_div_1_Template, 5, 3, "div", 1);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 20, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r84 = i0.ɵɵreference(3);
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r67 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r67.isObject(item_r6.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r84);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.listConfig == null ? null : item_r6.value.restField.metaData.listConfig.restManyResources) && !(item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.detailConfig == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.detailConfig == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r109 = i0.ɵɵnextContext().$implicit;
    const ctx_r110 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r109.data[ctx_r110.customColumn], "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.value.restField.name);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r109 = i0.ɵɵnextContext(2).$implicit;
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r109.data.item);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r109 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r109.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r109.data.place);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelement(1, "ngx-fs-icon", 19);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r109 = ctx.$implicit;
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r109.expanded)("place", row_r109.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 13);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_tr_2_Template, 1, 0, "tr", 14);
    i0.ɵɵelementContainerStart(3, 15);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_td_4_Template, 4, 4, "td", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r16.listDataSource[item_r6.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r16.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r16.customColumn);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item", 4);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_1_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_2_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_Template, 5, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.TEXT || item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.STRING || item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.NUMBER || item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.BELONG_TO_MANY);
} }
function RestResourceDetailComponent_nb_list_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list");
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_Template, 11, 10, "nb-list-item", 3);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.datas));
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r124.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r124.value.data, " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.template)("componentClass", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_1_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_1_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r124.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r124.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r124.value.data)("value", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.template)("componentClass", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_2_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_2_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelement(6, "nb-checkbox", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r124.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r124.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.template)("componentClass", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelement(6, "img", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r148 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r124.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r148.style);
    i0.ɵɵproperty("src", item_r124.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.template)("componentClass", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r124.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r124.value.data), " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.template)("componentClass", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "a", 12);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r162); const item_r124 = i0.ɵɵnextContext(2).$implicit; const ctx_r160 = i0.ɵɵnextContext(3); return ctx_r160.loadBelongToDetail(item_r124.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r124.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r124.value.data, " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.template)("componentClass", item_r124.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r171 = i0.ɵɵnextContext().$implicit;
    const ctx_r172 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r171.data[ctx_r172.customColumn], "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r124.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r171 = i0.ɵɵnextContext(2).$implicit;
    const item_r124 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r171.data.item);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r171 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r171.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r171.data.place);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelement(1, "ngx-fs-icon", 19);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r171 = ctx.$implicit;
    const item_r124 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r171.expanded)("place", row_r171.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.listConfig == null ? null : item_r124.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.listConfig == null ? null : item_r124.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 13);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_tr_2_Template, 1, 0, "tr", 14);
    i0.ɵɵelementContainerStart(3, 15);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_td_4_Template, 4, 4, "td", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r166 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r166.listDataSource[item_r124.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r166.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r166.customColumn);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r189 = i0.ɵɵnextContext().$implicit;
    const ctx_r190 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r189.data[ctx_r190.customColumn], "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r124.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r189 = i0.ɵɵnextContext(2).$implicit;
    const item_r124 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r189.data.item);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r189 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r189.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r189.data.place);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelement(1, "ngx-fs-icon", 19);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r189 = ctx.$implicit;
    const item_r124 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r189.expanded)("place", row_r189.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.detailConfig == null ? null : item_r124.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.detailConfig == null ? null : item_r124.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 13);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_tr_2_Template, 1, 0, "tr", 14);
    i0.ɵɵelementContainerStart(3, 15);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_td_4_Template, 4, 4, "td", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r183 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r183.listDataSource[item_r124.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r183.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r183.customColumn);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r202 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r202.style);
    i0.ɵɵproperty("resource", res_r202.resource)("ID", res_r202.id)("ressourceName", res_r202.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 21);
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r185 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r185.listDataSource[item_r124.value.restField.name]);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 1);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 27, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r184 = i0.ɵɵreference(3);
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r167 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r167.isObject(item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.detailConfig == null ? null : item_r124.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r184);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.listConfig == null ? null : item_r124.value.restField.metaData.listConfig.restManyResources) && !(item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.detailConfig == null ? null : item_r124.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField == null ? null : item_r124.value.restField.metaData == null ? null : item_r124.value.restField.metaData.detailConfig == null ? null : item_r124.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 17);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext().$implicit;
    const ctx_r210 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r209.data[ctx_r210.customColumn], "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r124.value.restField.name);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext(2).$implicit;
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r124.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r209.data.item);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r209.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r209.data.place);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 18);
    i0.ɵɵelement(1, "ngx-fs-icon", 19);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r209 = ctx.$implicit;
    const item_r124 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r209.expanded)("place", row_r209.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r124.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 13);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_tr_2_Template, 1, 0, "tr", 14);
    i0.ɵɵelementContainerStart(3, 15);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_td_4_Template, 4, 4, "td", 16);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r124 = i0.ɵɵnextContext().$implicit;
    const ctx_r132 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r132.listDataSource[item_r124.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r132.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r132.customColumn);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item", 4);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_1_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_2_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_Template, 5, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r124 = ctx.$implicit;
    const ctx_r123 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.TEXT || item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.STRING || item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.NUMBER || item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r124.value.restField.type == ctx_r123.REST_FIELD_TYPES.BELONG_TO_MANY);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 25);
    i0.ɵɵelementStart(1, "nb-list");
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_Template, 9, 8, "nb-list-item", 3);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r122 = ctx.$implicit;
    const ctx_r121 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tabTitle", tabs_r122);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r121.datas1[tabs_r122]));
} }
function RestResourceDetailComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset");
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_Template, 4, 4, "nb-tab", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.tabsName);
} }
function RestResourceDetailComponent_nb_card_footer_6_Template(rf, ctx) { if (rf & 1) {
    const _r222 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 28);
    i0.ɵɵelementStart(2, "button", 29);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_card_footer_6_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r222); const ctx_r221 = i0.ɵɵnextContext(); return ctx_r221.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 30);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_card_footer_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r222); const ctx_r223 = i0.ɵɵnextContext(); return ctx_r223.editEntity(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 2, "rest-detail.btnCancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, "rest-detail.btnEdit"), " ");
} }
export class RestResourceDetailComponent {
    constructor(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, langService) {
        this.activatedRoute = activatedRoute;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.router = router;
        this.dataSourceBuilder = dataSourceBuilder;
        this.langService = langService;
        this.objectKeys = Object.keys;
        this.customColumn = 'name';
        this.allColumns = [this.customColumn];
        this.listDataSource = {};
        this.isTabsMenu = false;
        this.tabsName = [];
        this.filesUpload = {};
        this.isObject = (a) => {
            let isObject = false;
            if (a.metaData)
                isObject = true;
            if (a.type)
                isObject = true;
            if (a.template)
                isObject = true;
            if (a.inForm)
                isObject = true;
            return isObject;
        };
        this.isArray = (a) => {
            return !!a && a.constructor === Array;
        };
        this.getBelongToSecondField = (elt, response) => {
            var _a, _b, _c, _d;
            const belongVal = `${(_c = (_b = (_a = elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.belongToOptions) === null || _c === void 0 ? void 0 : _c.resourceName}.${(_d = elt.metaData) === null || _d === void 0 ? void 0 : _d.belongToSecondFieldLabel}`.split('.');
            let dat = response;
            if (belongVal && (belongVal === null || belongVal === void 0 ? void 0 : belongVal.length) > 0) {
                belongVal.forEach((val) => {
                    if (dat[val]) {
                        dat = dat[val];
                    }
                    else
                        dat = '';
                });
            }
            else {
                dat = '';
            }
            return dat;
        };
        this.jsonValue = (val) => {
            let _jsonValue;
            if (val.restField.i18n == true) {
                if (val.data[0] == '{')
                    _jsonValue = JSON.parse(val.data)[this.langService.selected];
                else if (typeof val.data !== 'string')
                    _jsonValue = val.data[this.langService.selected];
                else
                    _jsonValue = val.data;
            }
            else {
                _jsonValue = val.data;
            }
            if (typeof val.data == 'object')
                return JSON.stringify(_jsonValue);
            else
                return _jsonValue;
        };
    }
    ngOnInit() {
        let id;
        if (this.ID) {
            id = this.ID;
        }
        else {
            id = this.activatedRoute.snapshot.paramMap.get('id');
            this.ressourceName =
                this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 2].path.split('-')[0];
        }
        this.entityId = parseInt(id);
        this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
        // console.log('this.resource.detailConfig', this.resource.detailConfig);
        if (this.resource.detailConfig.preparedStatementQuery) {
            // this.resource.detailConfig.queryParams.fieldForNextQuery
            this.serviceRest
                .getResources({
                api: this.resource.detailConfig.preparedStatementQuery.api.substring(1),
                queryParams: this.resource.detailConfig.preparedStatementQuery
                    .queryParams
                    ? this.resource.detailConfig.preparedStatementQuery.queryParams
                    : {},
            })
                .subscribe((resp) => {
                const val = {};
                const params = {};
                this.resource.detailConfig.preparedStatementQuery.fieldForNextQuery.forEach((item) => {
                    val[item] = _.get(resp, item);
                });
                this.resource.detailConfig.preparedStatementQuery.queryParamsComplete.forEach((element) => {
                    if (element.isPreparedStatement) {
                        params[element.label] = val[element.value];
                    }
                    else {
                        params[element.label] = element.value;
                    }
                });
                this.serviceRest
                    .getOneResource({
                    api: this.resource.detailConfig.api,
                    queryParams: params,
                }, id)
                    .subscribe((response) => {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    const colunms = {};
                    this.entityId = response.id;
                    if (this.resource.detailConfig.tabsConfig &&
                        this.resource.detailConfig.tabsConfig.length > 1) {
                        this.isTabsMenu = true;
                        this.resource.detailConfig.tabsConfig.forEach((tab) => {
                            this.tabsName.push(tab.name);
                            const temp = {};
                            tab.datas.forEach((elt) => {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                                const search = this.resource.fields.find((field) => field.label === elt);
                                if (search) {
                                    temp[search.name] = {
                                        restField: search,
                                        data: response[search.label],
                                    };
                                }
                                switch (temp[search.name].restField.type) {
                                    case REST_FIELD_TYPES.HAS_MANY:
                                        /*Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                      Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                      on considere que les configs sont les memes
                                      */
                                        if (((_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                            !((_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                            const datas = [];
                                            // console.log("Xa me concerne");
                                            // console.log(temp[search.name]);
                                            temp[search.name].data.forEach((item) => {
                                                var _a, _b, _c, _d;
                                                datas.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[temp[search.name].restField.metaData
                                                                .listConfig.restManyResources.label]
                                                            : item,
                                                        item,
                                                    },
                                                });
                                            });
                                            const rowsT = [
                                                {
                                                    data: {
                                                        name: temp[search.name].restField.name,
                                                        place: 'header-place',
                                                    },
                                                    children: datas,
                                                },
                                            ];
                                            this.listDataSource[temp[search.name].restField.name] = this.dataSourceBuilder.create(rowsT);
                                        }
                                        else if ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                            if (this.isObject((_m = (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                                const datas = [];
                                                temp[search.name].data.forEach((item) => {
                                                    var _a, _b, _c, _d;
                                                    datas.push({
                                                        data: {
                                                            name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                                ? item[temp[search.name].restField.metaData
                                                                    .detailConfig.restManyResources.label]
                                                                : item,
                                                            item,
                                                        },
                                                    });
                                                });
                                                const rowsT = [
                                                    {
                                                        data: {
                                                            name: temp[search.name].restField.name,
                                                            place: 'header-place',
                                                        },
                                                        children: datas,
                                                    },
                                                ];
                                                this.listDataSource[temp[search.name].restField.name] = this.dataSourceBuilder.create(rowsT);
                                            }
                                            else {
                                                this.listDataSource[temp[search.name].restField.name] = [];
                                                temp[search.name].data.forEach((element) => {
                                                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                    this.listDataSource[temp[search.name].restField.name].push({
                                                        resource: (_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                        resourceName: (_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                        id: element === null || element === void 0 ? void 0 : element.id,
                                                        style: ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                            ? (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                            : '',
                                                    });
                                                });
                                            }
                                        }
                                        break;
                                    case REST_FIELD_TYPES.BELONG_TO_MANY:
                                        const items = [];
                                        temp[search.name].data.forEach((item) => {
                                            items.push({
                                                data: {
                                                    name: item[temp[search.name].restField.metaData.listConfig
                                                        .restBelongToManyResources.label],
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsBelongToMany = [
                                            {
                                                data: {
                                                    name: temp[search.name].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: items,
                                            },
                                        ];
                                        this.listDataSource[temp[search.name].restField.name] =
                                            this.dataSourceBuilder.create(rowsBelongToMany);
                                        break;
                                    case REST_FIELD_TYPES.BELONG_TO:
                                        let dat = this.getBelongToSecondField(search, response);
                                        if (search) {
                                            temp[search.name] = {
                                                restField: search,
                                                data: `${dat} (${response[search.label]})`,
                                            };
                                        }
                                        break;
                                    default:
                                        break;
                                }
                                colunms[tab.name] = temp;
                            });
                        });
                        this.datas = colunms;
                        this.datas1 = colunms;
                    }
                    else {
                        this.resource.fields.forEach((elt) => {
                            if (elt.type === REST_FIELD_TYPES.BELONG_TO) {
                                let dat = this.getBelongToSecondField(elt, response);
                                colunms[elt.name] = {
                                    restField: elt,
                                    data: `${dat} (${response[elt.label]})`,
                                };
                            }
                            else {
                                colunms[elt.name] = {
                                    restField: elt,
                                    data: response[elt.label],
                                };
                            }
                        });
                        this.datas = colunms;
                        for (const property in this.datas) {
                            switch (this.datas[property].restField.type) {
                                case REST_FIELD_TYPES.HAS_MANY:
                                    if (((_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                        !((_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                        const datas = [];
                                        this.datas[property].data.forEach((item) => {
                                            var _a, _b, _c, _d;
                                            datas.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[this.datas[property].restField.metaData
                                                            .listConfig.restManyResources.label]
                                                        : item,
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsT = [
                                            {
                                                data: {
                                                    name: this.datas[property].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: datas,
                                            },
                                        ];
                                        this.listDataSource[this.datas[property].restField.name] = this.dataSourceBuilder.create(rowsT);
                                    }
                                    else if ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                        if (this.isObject((_m = (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                            const datas = [];
                                            this.datas[property].data.forEach((item) => {
                                                var _a, _b, _c, _d;
                                                datas.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[this.datas[property].restField.metaData
                                                                .detailConfig.restManyResources.label]
                                                            : item,
                                                        item,
                                                    },
                                                });
                                            });
                                            const rowsT = [
                                                {
                                                    data: {
                                                        name: this.datas[property].restField.name,
                                                        place: 'header-place',
                                                    },
                                                    children: datas,
                                                },
                                            ];
                                            this.listDataSource[this.datas[property].restField.name] = this.dataSourceBuilder.create(rowsT);
                                        }
                                        else {
                                            this.listDataSource[this.datas[property].restField.name] = [];
                                            this.datas[property].data.forEach((element) => {
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                this.listDataSource[this.datas[property].restField.name].push({
                                                    resource: (_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                    resourceName: (_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                    id: element === null || element === void 0 ? void 0 : element.id,
                                                    style: ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                        ? (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                        : '',
                                                });
                                            });
                                        }
                                    }
                                    break;
                                case REST_FIELD_TYPES.BELONG_TO_MANY:
                                    const items = [];
                                    this.datas[property].data.forEach((item) => {
                                        items.push({
                                            data: {
                                                name: item[this.datas[property].restField.metaData.listConfig
                                                    .restBelongToManyResources.label],
                                                item,
                                            },
                                        });
                                    });
                                    const rowsBelongToMany = [
                                        {
                                            data: {
                                                name: this.datas[property].restField.name,
                                                place: 'header-place',
                                            },
                                            children: items,
                                        },
                                    ];
                                    this.listDataSource[this.datas[property].restField.name] =
                                        this.dataSourceBuilder.create(rowsBelongToMany);
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            });
        }
        else {
            this.serviceRest
                .getOneResource({
                api: this.resource.detailConfig.api,
                queryParams: this.resource.detailConfig.queryParams,
            }, id)
                .subscribe((response) => {
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                const colunms = {};
                this.entityId = response.id;
                if (this.resource.detailConfig.tabsConfig &&
                    this.resource.detailConfig.tabsConfig.length > 1) {
                    this.isTabsMenu = true;
                    this.resource.detailConfig.tabsConfig.forEach((tab) => {
                        this.tabsName.push(tab.name);
                        const temp = {};
                        tab.datas.forEach((elt) => {
                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                            const search = this.resource.fields.find((field) => field.label === elt);
                            if (search) {
                                temp[search.name] = {
                                    restField: search,
                                    data: response[search.label],
                                };
                            }
                            switch (temp[search.name].restField.type) {
                                case REST_FIELD_TYPES.HAS_MANY:
                                    /*Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                    Premier cas si les configs ont ete definis dans le listConfig et rien dans le detailConfig
                                    on considere que les configs sont les memes
                                    */
                                    if (((_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                        !((_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                        const datas = [];
                                        // console.log("Xa me concerne");
                                        // console.log(temp[search.name]);
                                        temp[search.name].data.forEach((item) => {
                                            var _a, _b, _c, _d;
                                            datas.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[temp[search.name].restField.metaData
                                                            .listConfig.restManyResources.label]
                                                        : item,
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsT = [
                                            {
                                                data: {
                                                    name: temp[search.name].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: datas,
                                            },
                                        ];
                                        this.listDataSource[temp[search.name].restField.name] =
                                            this.dataSourceBuilder.create(rowsT);
                                    }
                                    else if ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                        if (this.isObject((_m = (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                            const datas = [];
                                            temp[search.name].data.forEach((item) => {
                                                var _a, _b, _c, _d;
                                                datas.push({
                                                    data: {
                                                        name: ((_d = (_c = (_b = (_a = temp[search.name]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                            ? item[temp[search.name].restField.metaData
                                                                .detailConfig.restManyResources.label]
                                                            : item,
                                                        item,
                                                    },
                                                });
                                            });
                                            const rowsT = [
                                                {
                                                    data: {
                                                        name: temp[search.name].restField.name,
                                                        place: 'header-place',
                                                    },
                                                    children: datas,
                                                },
                                            ];
                                            this.listDataSource[temp[search.name].restField.name] =
                                                this.dataSourceBuilder.create(rowsT);
                                        }
                                        else {
                                            this.listDataSource[temp[search.name].restField.name] =
                                                [];
                                            temp[search.name].data.forEach((element) => {
                                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                                this.listDataSource[temp[search.name].restField.name].push({
                                                    resource: (_c = (_b = (_a = temp[search.name].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                    resourceName: (_f = (_e = (_d = temp[search.name].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                    id: element === null || element === void 0 ? void 0 : element.id,
                                                    style: ((_j = (_h = (_g = temp[search.name].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                        ? (_l = (_k = temp[search.name].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                        : '',
                                                });
                                            });
                                        }
                                    }
                                    break;
                                case REST_FIELD_TYPES.BELONG_TO_MANY:
                                    const items = [];
                                    temp[search.name].data.forEach((item) => {
                                        items.push({
                                            data: {
                                                name: item[temp[search.name].restField.metaData.listConfig
                                                    .restBelongToManyResources.label],
                                                item,
                                            },
                                        });
                                    });
                                    const rowsBelongToMany = [
                                        {
                                            data: {
                                                name: temp[search.name].restField.name,
                                                place: 'header-place',
                                            },
                                            children: items,
                                        },
                                    ];
                                    this.listDataSource[temp[search.name].restField.name] =
                                        this.dataSourceBuilder.create(rowsBelongToMany);
                                    break;
                                case REST_FIELD_TYPES.BELONG_TO:
                                    let dat = this.getBelongToSecondField(search, response);
                                    if (search) {
                                        temp[search.name] = {
                                            restField: search,
                                            data: `${dat} (${response[search.label]})`,
                                        };
                                    }
                                    break;
                                case REST_FIELD_TYPES.PDF:
                                    const file = urlToFile(response[search.label], search.label, 'pdf');
                                    this.filesUpload[search.label] = file;
                                    break;
                                default:
                                    break;
                            }
                            colunms[tab.name] = temp;
                        });
                    });
                    this.datas = colunms;
                    this.datas1 = colunms;
                }
                else {
                    this.resource.fields.forEach((elt) => {
                        if (elt.type === REST_FIELD_TYPES.BELONG_TO) {
                            let dat = this.getBelongToSecondField(elt, response);
                            colunms[elt.name] = {
                                restField: elt,
                                data: `${dat} (${response[elt.label]})`,
                            };
                        }
                        else {
                            colunms[elt.name] = {
                                restField: elt,
                                data: response[elt.label],
                            };
                        }
                    });
                    this.datas = colunms;
                    for (const property in this.datas) {
                        switch (this.datas[property].restField.type) {
                            case REST_FIELD_TYPES.HAS_MANY:
                                if (((_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources) &&
                                    !((_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources)) {
                                    const datas = [];
                                    this.datas[property].data.forEach((item) => {
                                        var _a, _b, _c, _d;
                                        datas.push({
                                            data: {
                                                name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.listConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                    ? item[this.datas[property].restField.metaData
                                                        .listConfig.restManyResources.label]
                                                    : item,
                                                item,
                                            },
                                        });
                                    });
                                    const rowsT = [
                                        {
                                            data: {
                                                name: this.datas[property].restField.name,
                                                place: 'header-place',
                                            },
                                            children: datas,
                                        },
                                    ];
                                    this.listDataSource[this.datas[property].restField.name] =
                                        this.dataSourceBuilder.create(rowsT);
                                }
                                else if ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources) {
                                    if (this.isObject((_m = (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources)) {
                                        const datas = [];
                                        this.datas[property].data.forEach((item) => {
                                            var _a, _b, _c, _d;
                                            datas.push({
                                                data: {
                                                    name: ((_d = (_c = (_b = (_a = this.datas[property]) === null || _a === void 0 ? void 0 : _a.restField) === null || _b === void 0 ? void 0 : _b.metaData) === null || _c === void 0 ? void 0 : _c.detailConfig) === null || _d === void 0 ? void 0 : _d.restManyResources.label)
                                                        ? item[this.datas[property].restField.metaData
                                                            .detailConfig.restManyResources.label]
                                                        : item,
                                                    item,
                                                },
                                            });
                                        });
                                        const rowsT = [
                                            {
                                                data: {
                                                    name: this.datas[property].restField.name,
                                                    place: 'header-place',
                                                },
                                                children: datas,
                                            },
                                        ];
                                        this.listDataSource[this.datas[property].restField.name] =
                                            this.dataSourceBuilder.create(rowsT);
                                    }
                                    else {
                                        this.listDataSource[this.datas[property].restField.name] =
                                            [];
                                        this.datas[property].data.forEach((element) => {
                                            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                                            this.listDataSource[this.datas[property].restField.name].push({
                                                resource: (_c = (_b = (_a = this.datas[property].restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.detailConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.resource,
                                                resourceName: (_f = (_e = (_d = this.datas[property].restField) === null || _d === void 0 ? void 0 : _d.metaData) === null || _e === void 0 ? void 0 : _e.detailConfig) === null || _f === void 0 ? void 0 : _f.restManyResources.resourceName,
                                                id: element === null || element === void 0 ? void 0 : element.id,
                                                style: ((_j = (_h = (_g = this.datas[property].restField) === null || _g === void 0 ? void 0 : _g.metaData) === null || _h === void 0 ? void 0 : _h.detailConfig) === null || _j === void 0 ? void 0 : _j.restManyResources.style)
                                                    ? (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig.restManyResources.style
                                                    : '',
                                            });
                                        });
                                    }
                                }
                                break;
                            case REST_FIELD_TYPES.BELONG_TO_MANY:
                                const items = [];
                                this.datas[property].data.forEach((item) => {
                                    items.push({
                                        data: {
                                            name: item[this.datas[property].restField.metaData.listConfig
                                                .restBelongToManyResources.label],
                                            item,
                                        },
                                    });
                                });
                                const rowsBelongToMany = [
                                    {
                                        data: {
                                            name: this.datas[property].restField.name,
                                            place: 'header-place',
                                        },
                                        children: items,
                                    },
                                ];
                                this.listDataSource[this.datas[property].restField.name] =
                                    this.dataSourceBuilder.create(rowsBelongToMany);
                                break;
                            default:
                                break;
                        }
                    }
                }
            });
        }
    }
    editEntity() {
        this.router.navigate([`/admin/${this.ressourceName}-edit`, this.entityId]);
    }
    listEntity() {
        this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    //Image input
    onSelect(event) { }
    onRemove(field) { }
    loadBelongToDetail(data) {
        const resourceName = data.restField.metaData.addConfig.belongToOptions.resourceName;
        this.router.navigate([`/admin/${resourceName}-detail`, data.data]);
    }
}
RestResourceDetailComponent.ɵfac = function RestResourceDetailComponent_Factory(t) { return new (t || RestResourceDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i4.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(i5.RestLangService)); };
RestResourceDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDetailComponent, selectors: [["ngx-rest-resource-detail"]], inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, decls: 7, vars: 6, consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tabsContent", ""], ["class", "rest-item-align", 4, "ngFor", "ngForOf"], [1, "rest-item-align"], [1, ""], [3, "template", "componentClass"], [3, "change"], [3, "removable", "removed"], [1, "text-center", "color-card"], [3, "checked", "disabled"], ["alt", "", 1, "rest-img", 3, "src"], ["nbTooltipPlacement", "top", 1, "belongTo-link", 3, "nbTooltip", "click"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], ["cas21", ""], ["class", "row", 4, "ngFor", "ngForOf"], [1, "row"], [3, "resource", "ID", "ressourceName", "container"], [3, "tabTitle", 4, "ngFor", "ngForOf"], [3, "tabTitle"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["displayRes", ""], [1, "buttons-row"], ["nbButton", "", "status", "danger", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"]], template: function RestResourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card");
        i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_card_header_1_Template, 3, 3, "nb-card-header", 0);
        i0.ɵɵelementStart(2, "nb-card-body");
        i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_Template, 3, 3, "nb-list", 1);
        i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, RestResourceDetailComponent_nb_card_footer_6_Template, 8, 6, "nb-card-footer", 0);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r2 = i0.ɵɵreference(5);
        i0.ɵɵstyleMap(ctx.style ? ctx.style : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.container);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx.isTabsMenu)("ngIfElse", _r2);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.datas && !ctx.container);
    } }, directives: [i4.NbCardComponent, i6.NgIf, i4.NbCardBodyComponent, i4.NbCardHeaderComponent, i4.NbListComponent, i6.NgForOf, i4.NbListItemComponent, i7.CngHtmlCompilerComponent, i8.NgxDropzoneComponent, i8.NgxDropzonePreviewComponent, i8.NgxDropzoneLabelDirective, i4.NbCheckboxComponent, i4.NbTooltipDirective, i4.NbTreeGridComponent, i4.NbTreeGridRowDefDirective, i4.NbTreeGridColumnDefDirective, i4.NbTreeGridCellDefDirective, i4.NbTreeGridRowComponent, i4.NbTreeGridCellDirective, i9.FsIconCComponent, RestResourceDetailComponent, i4.NbTabsetComponent, i4.NbTabComponent, i4.NbCardFooterComponent, i4.NbButtonComponent], pipes: [i6.TitleCasePipe, i6.KeyValuePipe, i6.DatePipe, i10.TranslatePipe], styles: ["b[_ngcontent-%COMP%]{margin-right:20px}.belongTo-link[_ngcontent-%COMP%]{color:#598bff!important}.belongTo-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important;cursor:pointer}img[_ngcontent-%COMP%]{max-width:300px;max-height:200px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;border-color:#909293;margin-left:5px;justify-content:center;align-items:center}[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}.rest-item-align[_ngcontent-%COMP%]{margin-right:5px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDetailComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-detail',
                templateUrl: './rest-resource-detail.component.html',
                styleUrls: ['./rest-resource-detail.component.scss'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i1.Router }, { type: i4.NbTreeGridDataSourceBuilder }, { type: i5.RestLangService }]; }, { resource: [{
            type: Input
        }], ID: [{
            type: Input
        }], ressourceName: [{
            type: Input
        }], container: [{
            type: Input
        }], style: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzVFLDJDQUEyQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLFNBQVMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1QvQyxzQ0FBbUM7SUFDakMsWUFDRjs7SUFBQSxpQkFBaUI7OztJQURmLGVBQ0Y7SUFERSx1SUFDRjs7O0lBZ0JRLDZCQUFxRDtJQUNuRCw4QkFBYztJQUNaLHlCQUFHO0lBQUEsWUFBNEI7O0lBQUEsaUJBQUk7SUFDckMsaUJBQU07SUFDTiw4QkFBYztJQUNaLFlBQ0Y7SUFBQSxpQkFBTTtJQUNSLDBCQUFlOzs7SUFMUixlQUE0QjtJQUE1QixrRUFBNEI7SUFHL0IsZUFDRjtJQURFLG1EQUNGOzs7SUFHRiwyQkFBMkM7SUFDekMsdUNBSW9CO0lBQ3RCLGlCQUFNOzs7SUFKRixlQUEwQztJQUExQywyREFBMEMsc0NBQUE7OztJQW5CaEQsNkJBT0M7SUFDQyxzSUFPZTtJQUVmLG9IQU1NO0lBQ1IsMEJB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O1FDakJ4QywrQkFBc0M7UUFDcEMsa0dBRWlCO1FBQ2pCLG9DQUFjO1FBQ1osb0ZBMllVO1FBQ1YsNkhBNlZjO1FBQ2hCLGlCQUFlO1FBRWYsa0dBZWlCO1FBQ25CLGlCQUFVOzs7UUFqd0JELHlDQUE0QjtRQUNsQixlQUFnQjtRQUFoQixxQ0FBZ0I7UUFJckIsZUFBbUI7UUFBbkIsc0NBQW1CLGlCQUFBO1FBNHVCZCxlQUF5QjtRQUF6QixrREFBeUI7a2dCRGh1Qi9CLDJCQUEyQjt1RkFBM0IsMkJBQTJCO2NBTHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDtxT0FFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzdEZpZWxkLCBSRVNUX0ZJRUxEX1RZUEVTIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG4vLyBpbXBvcnQgdXJsVG9GaWxlIGZyb20gJy4uLy4uLy4uL3V0aWxzLyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXJsVG9GaWxlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3VybFRvRmlsZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJlc291cmNlOiBSZXN0UmVzb3VyY2U7XG4gIEBJbnB1dCgpIElEOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc3NvdXJjZU5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY29udGFpbmVyOiBCb29sZWFuO1xuICBASW5wdXQoKSBzdHlsZTogYW55O1xuICBkYXRhczogYW55W107XG4gIGRhdGFzMTogYW55W11bXTtcbiAgZW50aXR5SWQ6IG51bWJlcjtcbiAgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuXG4gIGN1c3RvbUNvbHVtbiA9ICduYW1lJztcbiAgYWxsQ29sdW1ucyA9IFt0aGlzLmN1c3RvbUNvbHVtbl07XG4gIGxpc3REYXRhU291cmNlOiBhbnkgPSB7fTtcbiAgaXNUYWJzTWVudSA9IGZhbHNlO1xuICB0YWJzTmFtZSA9IFtdO1xuICBmaWxlc1VwbG9hZCA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3Q6IFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdEFkbWluQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPGFueT4sXG4gICAgcHJpdmF0ZSBsYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgaWQ7XG4gICAgaWYgKHRoaXMuSUQpIHtcbiAgICAgIGlkID0gdGhpcy5JRDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZSA9XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsW1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDJcbiAgICAgICAgXS5wYXRoLnNwbGl0KCctJylbMF07XG4gICAgfVxuICAgIHRoaXMuZW50aXR5SWQgPSBwYXJzZUludChpZCk7XG5cbiAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWVcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZycsIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeSkge1xuICAgICAgLy8gdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucXVlcnlQYXJhbXMuZmllbGRGb3JOZXh0UXVlcnlcbiAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LmFwaS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeVxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICA/IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LmZpZWxkRm9yTmV4dFF1ZXJ5LmZvckVhY2goXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeS5xdWVyeVBhcmFtc0NvbXBsZXRlLmZvckVhY2goXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc1ByZXBhcmVkU3RhdGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2VsZW1lbnQubGFiZWxdID0gdmFsW2VsZW1lbnQudmFsdWVdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tlbGVtZW50LmxhYmVsXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgIC5nZXRPbmVSZXNvdXJjZShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcuYXBpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSByZXNwb25zZS5pZDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhYnNNZW51ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWcuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRhYnNOYW1lLnB1c2godGFiLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICB0YWIuZGF0YXMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCA9PT0gZWx0XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBzZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICAgICAgLypQcmVtaWVyIGNhcyBzaSBsZXMgY29uZmlncyBvbnQgZXRlIGRlZmluaXMgZGFucyBsZSBsaXN0Q29uZmlnIGV0IHJpZW4gZGFucyBsZSBkZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICBQcmVtaWVyIGNhcyBzaSBsZXMgY29uZmlncyBvbnQgZXRlIGRlZmluaXMgZGFucyBsZSBsaXN0Q29uZmlnIGV0IHJpZW4gZGFucyBsZSBkZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICBvbiBjb25zaWRlcmUgcXVlIGxlcyBjb25maWdzIHNvbnQgbGVzIG1lbWVzXG4gICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhhIG1lIGNvbmNlcm5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wW3NlYXJjaC5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0/LnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc291cmNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzQmVsb25nVG9NYW55ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoc2VhcmNoLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGAke2RhdH0gKCR7cmVzcG9uc2Vbc2VhcmNoLmxhYmVsXX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bm1zW3RhYi5uYW1lXSA9IHRlbXA7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gY29sdW5tcztcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzMSA9IGNvbHVubXM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAoZWx0LnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoZWx0LCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGAke2RhdH0gKCR7cmVzcG9uc2VbZWx0LmxhYmVsXX0pYCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmRhdGFzKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0Q29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc291cmNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NCZWxvbmdUb01hbnkpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgLmdldE9uZVJlc291cmNlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcuYXBpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWRcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG5cbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gcmVzcG9uc2UuaWQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZyAmJlxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZy5sZW5ndGggPiAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFic01lbnUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRhYnNOYW1lLnB1c2godGFiLm5hbWUpO1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge307XG5cbiAgICAgICAgICAgICAgdGFiLmRhdGFzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkLmxhYmVsID09PSBlbHRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgICAgICAgICAgICAgIC8qUHJlbWllciBjYXMgc2kgbGVzIGNvbmZpZ3Mgb250IGV0ZSBkZWZpbmlzIGRhbnMgbGUgbGlzdENvbmZpZyBldCByaWVuIGRhbnMgbGUgZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIFByZW1pZXIgY2FzIHNpIGxlcyBjb25maWdzIG9udCBldGUgZGVmaW5pcyBkYW5zIGxlIGxpc3RDb25maWcgZXQgcmllbiBkYW5zIGxlIGRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBvbiBjb25zaWRlcmUgcXVlIGxlcyBjb25maWdzIHNvbnQgbGVzIG1lbWVzXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgIXRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWGEgbWUgY29uY2VybmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFtzZWFyY2gubmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/Lmxpc3RDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE86XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoc2VhcmNoLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtzZWFyY2gubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB1cmxUb0ZpbGUoXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Vbc2VhcmNoLmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgJ3BkZidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1VwbG9hZFtzZWFyY2gubGFiZWxdID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sdW5tc1t0YWIubmFtZV0gPSB0ZW1wO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICB0aGlzLmRhdGFzMSA9IGNvbHVubXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWx0LnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdCA9IHRoaXMuZ2V0QmVsb25nVG9TZWNvbmRGaWVsZChlbHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtlbHQubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY29sdW5tcztcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5kYXRhcykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFtdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c0JlbG9uZ1RvTWFueSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZWRpdEVudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZWRpdGAsIHRoaXMuZW50aXR5SWRdKTtcbiAgfVxuXG4gIGxpc3RFbnRpdHkoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1saXN0YCk7XG4gIH1cblxuICBnZXQgUkVTVF9GSUVMRF9UWVBFUygpIHtcbiAgICByZXR1cm4gUkVTVF9GSUVMRF9UWVBFUztcbiAgfVxuXG4gIC8vSW1hZ2UgaW5wdXRcbiAgb25TZWxlY3QoZXZlbnQpIHt9XG5cbiAgb25SZW1vdmUoZmllbGQpIHt9XG5cbiAgbG9hZEJlbG9uZ1RvRGV0YWlsKGRhdGEpIHtcbiAgICBjb25zdCByZXNvdXJjZU5hbWUgPVxuICAgICAgZGF0YS5yZXN0RmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5yZXNvdXJjZU5hbWU7XG5cbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbYC9hZG1pbi8ke3Jlc291cmNlTmFtZX0tZGV0YWlsYCwgZGF0YS5kYXRhXSk7XG4gIH1cblxuICBpc09iamVjdCA9IChhKSA9PiB7XG4gICAgbGV0IGlzT2JqZWN0ID0gZmFsc2U7XG4gICAgaWYgKGEubWV0YURhdGEpIGlzT2JqZWN0ID0gdHJ1ZTtcbiAgICBpZiAoYS50eXBlKSBpc09iamVjdCA9IHRydWU7XG4gICAgaWYgKGEudGVtcGxhdGUpIGlzT2JqZWN0ID0gdHJ1ZTtcbiAgICBpZiAoYS5pbkZvcm0pIGlzT2JqZWN0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc09iamVjdDtcbiAgfTtcblxuICBpc0FycmF5ID0gKGEpID0+IHtcbiAgICByZXR1cm4gISFhICYmIGEuY29uc3RydWN0b3IgPT09IEFycmF5O1xuICB9O1xuXG4gIGdldEJlbG9uZ1RvU2Vjb25kRmllbGQgPSAoZWx0LCByZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGJlbG9uZ1ZhbCA9XG4gICAgICBgJHtlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5yZXNvdXJjZU5hbWV9LiR7ZWx0Lm1ldGFEYXRhPy5iZWxvbmdUb1NlY29uZEZpZWxkTGFiZWx9YC5zcGxpdChcbiAgICAgICAgJy4nXG4gICAgICApO1xuICAgIGxldCBkYXQgPSByZXNwb25zZTtcbiAgICBpZiAoYmVsb25nVmFsICYmIGJlbG9uZ1ZhbD8ubGVuZ3RoID4gMCkge1xuICAgICAgYmVsb25nVmFsLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICBpZiAoZGF0W3ZhbF0pIHtcbiAgICAgICAgICBkYXQgPSBkYXRbdmFsXTtcbiAgICAgICAgfSBlbHNlIGRhdCA9ICcnO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gZGF0O1xuICB9O1xuXG4gIGpzb25WYWx1ZSA9ICh2YWwpID0+IHtcbiAgICBsZXQgX2pzb25WYWx1ZTogYW55O1xuICAgIGlmICh2YWwucmVzdEZpZWxkLmkxOG4gPT0gdHJ1ZSkge1xuICAgICAgaWYgKHZhbC5kYXRhWzBdID09ICd7JylcbiAgICAgICAgX2pzb25WYWx1ZSA9IEpTT04ucGFyc2UodmFsLmRhdGEpW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdO1xuICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbC5kYXRhICE9PSAnc3RyaW5nJylcbiAgICAgICAgX2pzb25WYWx1ZSA9IHZhbC5kYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdO1xuICAgICAgZWxzZSBfanNvblZhbHVlID0gdmFsLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9qc29uVmFsdWUgPSB2YWwuZGF0YTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbC5kYXRhID09ICdvYmplY3QnKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkoX2pzb25WYWx1ZSk7XG4gICAgZWxzZSByZXR1cm4gX2pzb25WYWx1ZTtcbiAgfTtcbn1cbiIsIjxuYi1jYXJkIFtzdHlsZV09XCJzdHlsZSA/IHN0eWxlIDogJydcIj5cbiAgPG5iLWNhcmQtaGVhZGVyICpuZ0lmPVwiIWNvbnRhaW5lclwiPlxuICAgIHt7IHJlc291cmNlLmRldGFpbENvbmZpZz8udGl0bGUgfCB0aXRsZWNhc2UgfX1cbiAgPC9uYi1jYXJkLWhlYWRlcj5cbiAgPG5iLWNhcmQtYm9keT5cbiAgICA8bmItbGlzdCAqbmdJZj1cIiFpc1RhYnNNZW51OyBlbHNlIHRhYnNDb250ZW50XCI+XG4gICAgICA8bmItbGlzdC1pdGVtXG4gICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzIHwga2V5dmFsdWVcIlxuICAgICAgICBjbGFzcz1cInJlc3QtaXRlbS1hbGlnblwiXG4gICAgICA+XG4gICAgICAgIDwhLS0gc3R5bGU9XCJkaXNwbGF5OiBibG9ja1wiIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUIHx8XG4gICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HIHx8XG4gICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8XG4gICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRU5VTVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5QREZcIj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lIChjaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKGZpbGVzVXBsb2FkW2l0ZW0ua2V5XSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0/LnZhbHVlPy5kYXRhIH19ICh7e1xuICAgICAgICAgICAgICAgICAgICAgICAgJ3BkZidcbiAgICAgICAgICAgICAgICAgICAgICB9fSk8L25neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyIGNvbG9yLWNhcmRcIlxuICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyPnt7IGl0ZW0udmFsdWUuZGF0YSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICB7eyBqc29uVmFsdWUoaXRlbS52YWx1ZSkgfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU5cIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgID48L25iLWNoZWNrYm94PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgID5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzPVwicmVzdC1pbWdcIlxuICAgICAgICAgICAgICAgIFtzcmNdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgIFtzdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfCBkYXRlIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cIlxuICAgICAgICA+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8Yj57eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRCZWxvbmdUb0RldGFpbChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtZGV0YWlsLmJlbG9uZ1RvUmVmJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJlbG9uZ1RvLWxpbmtcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgPlxuICAgICAgICAgIDwhLS0gQ0FTIDEgLS0+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICA8IS0tIENBUyAyIC0tPlxuICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGVsc2UgY2FzMjFcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcz8udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcz8udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYXMyMT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwicm93XCJcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgcmVzIG9mIGxpc3REYXRhU291cmNlW2l0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWxcbiAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgW0lEXT1cInJlcy5pZFwiXG4gICAgICAgICAgICAgICAgICBbcmVzc291cmNlTmFtZV09XCJyZXMucmVzb3VyY2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBbc3R5bGVdPVwicmVzLnN0eWxlXCJcbiAgICAgICAgICAgICAgICA+PC9uZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXCJcbiAgICAgICAgPlxuICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj57e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cInJvdy5kYXRhLml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgPC9uYi1saXN0PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGFic0NvbnRlbnQ+XG4gICAgICA8bmItdGFic2V0PlxuICAgICAgICA8bmItdGFiIFt0YWJUaXRsZV09XCJ0YWJzXCIgKm5nRm9yPVwibGV0IHRhYnMgb2YgdGFic05hbWVcIj5cbiAgICAgICAgICA8bmItbGlzdD5cbiAgICAgICAgICAgIDxuYi1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YXMxW3RhYnNdIHwga2V5dmFsdWVcIlxuICAgICAgICAgICAgICBjbGFzcz1cInJlc3QtaXRlbS1hbGlnblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwhLS0gc3R5bGU9XCJkaXNwbGF5OiBmbGV4LCBcIiAtLT5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fFxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDVweDsgd2lkdGg6IDgwcHg7IG1hcmdpbi1sZWZ0OiA1cHhcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8bmItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvbmItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXN0LWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB8IGRhdGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibG9hZEJlbG9uZ1RvRGV0YWlsKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1kZXRhaWwuYmVsb25nVG9SZWYnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmVsb25nVG8tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSEFTX01BTllcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgZGlzcGxheVJlc1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgW25iVHJlZUdyaWRdPVwibGlzdERhdGFTb3VyY2VbaXRlbS5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNwbGF5UmVzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyBvZiBsaXN0RGF0YVNvdXJjZVtpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmVzb3VyY2VdPVwicmVzLnJlc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtJRF09XCJyZXMuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInJlcy5zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cInJvdy5kYXRhLml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgICAgICAgPC9uYi1saXN0PlxuICAgICAgICA8L25iLXRhYj5cbiAgICAgIDwvbmItdGFic2V0PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIDwvbmItY2FyZC1ib2R5PlxuXG4gIDxuYi1jYXJkLWZvb3RlciAqbmdJZj1cImRhdGFzICYmICFjb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1yb3dcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbmJCdXR0b25cbiAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIlxuICAgICAgICAoY2xpY2spPVwibGlzdEVudGl0eSgpXCJcbiAgICAgID5cbiAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5DYW5jZWxcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gbmJCdXR0b24gc3RhdHVzPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0RW50aXR5KClcIj5cbiAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5FZGl0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtZm9vdGVyPlxuPC9uYi1jYXJkPlxuIl19