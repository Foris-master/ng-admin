import { Component, Input } from '@angular/core';
import { REST_FIELD_TYPES } from '../models/rest-resource.model';
// import urlToFile from '../../../utils/';
import * as _ from 'lodash';
import urlToFile from '../../../utils/urlToFile';
import { RestResourceDeleteComponent } from '../rest-ressource-delete/rest-resource-delete.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../service/rest-resource.service";
import * as i3 from "../service/rest-admin-config.service";
import * as i4 from "@nebular/theme";
import * as i5 from "../service/rest-lang.service";
import * as i6 from "@angular/platform-browser";
import * as i7 from "@angular/common";
import * as i8 from "@codehint-ng/html-compiler";
import * as i9 from "ngx-dropzone";
import * as i10 from "../components/fs-icon-ccomponent/fs-icon.component";
import * as i11 from "@ngx-translate/core";
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 7);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 7);
    i0.ɵɵelementStart(8, "ngx-dropzone", 10);
    i0.ɵɵlistener("change", function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(5); return ctx_r27.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 11);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r28); const item_r6 = i0.ɵɵnextContext(3).$implicit; const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.onRemove(ctx_r29.filesUpload[item_r6.key]); });
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template, 12, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r6.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", ctx_r25.jsonValue(item_r6.value));
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 0);
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
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 12);
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_div_2_Template, 2, 2, "div", 0);
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
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r40.jsonValue(item_r6.value), " ");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r41 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", ctx_r41.jsonValue(item_r6.value));
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
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
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "nb-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r6.value.data)("disabled", true);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 0);
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
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r50.style);
    i0.ɵɵproperty("src", item_r6.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r64); const item_r6 = i0.ɵɵnextContext(2).$implicit; const ctx_r62 = i0.ɵɵnextContext(2); return ctx_r62.loadBelongToDetail(item_r6.value); });
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r73 = i0.ɵɵnextContext().$implicit;
    const ctx_r74 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r73.data[ctx_r74.customColumn], "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.restField.name, "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r73 = i0.ɵɵnextContext(2).$implicit;
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r73.data.item);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r73 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r73.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r73.data.place);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r73 = ctx.$implicit;
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r73.expanded)("place", row_r73.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.listConfig == null ? null : item_r6.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.listConfig == null ? null : item_r6.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r68 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r68.listDataSource[item_r6.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r68.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r68.customColumn);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r91 = i0.ɵɵnextContext().$implicit;
    const ctx_r92 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r91.data[ctx_r92.customColumn], "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r6.value.restField.name, "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r91 = i0.ɵɵnextContext(2).$implicit;
    const item_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r91.data.item);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r91 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r91.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r91.data.place);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r91 = ctx.$implicit;
    const item_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r91.expanded)("place", row_r91.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r6.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r85 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r85.listDataSource[item_r6.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r85.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r85.customColumn);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r104 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r104.style);
    i0.ɵɵproperty("resource", res_r104.resource)("ID", res_r104.id)("ressourceName", res_r104.resourceName)("container", true);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r87 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r87.listDataSource[item_r6.value.restField.name]);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template, 5, 3, "div", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r86 = i0.ɵɵreference(3);
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r69 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r69.isObject(item_r6.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r86);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.listConfig == null ? null : item_r6.value.restField.metaData.listConfig.restManyResources) && !(item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.detailConfig == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.detailConfig == null ? null : item_r6.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r111 = i0.ɵɵnextContext().$implicit;
    const ctx_r112 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r111.data[ctx_r112.customColumn], "");
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.value.restField.name);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r111 = i0.ɵɵnextContext(2).$implicit;
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r111.data.item);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r111 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r111.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r111.data.place);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r111 = ctx.$implicit;
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r111.expanded)("place", row_r111.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_td_4_Template, 4, 4, "td", 19);
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
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r125 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r125.sanitizerUrl(item_r6.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r6.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r6.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r6.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.detailConfig == null ? null : item_r6.value.restField.metaData.detailConfig.linkConfig) ? !(item_r6.value.restField == null ? null : item_r6.value.restField.metaData == null ? null : item_r6.value.restField.metaData.detailConfig == null ? null : item_r6.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r6.value.restField.template)("componentClass", item_r6.value.data);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r6.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.template);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r6.value.restField.note);
} }
function RestResourceDetailComponent_nb_list_3_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_11_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_12_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(13, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_13_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵtemplate(15, RestResourceDetailComponent_nb_list_3_nb_list_item_1_ng_container_15_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.type == ctx_r5.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r6.value.restField.note != "");
} }
function RestResourceDetailComponent_nb_list_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list", 3);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_list_3_nb_list_item_1_Template, 16, 12, "nb-list-item", 4);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.datas));
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r134.value.data, " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(7, "input", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r134.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r134.value.data)("value", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "nb-checkbox", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r134.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelement(6, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r161 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r161.style);
    i0.ɵɵproperty("src", item_r134.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r166 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r166.jsonValue(item_r134.value), " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r167 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", ctx_r167.jsonValue(item_r134.value));
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r134.value.data), " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r180); const item_r134 = i0.ɵɵnextContext(2).$implicit; const ctx_r178 = i0.ɵɵnextContext(3); return ctx_r178.loadBelongToDetail(item_r134.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r134.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r134.value.data, " ");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r189 = i0.ɵɵnextContext().$implicit;
    const ctx_r190 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r189.data[ctx_r190.customColumn], "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r134.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r189 = i0.ɵɵnextContext(2).$implicit;
    const item_r134 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r189.data.item);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r189 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r189.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r189.data.place);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r189 = ctx.$implicit;
    const item_r134 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r189.expanded)("place", row_r189.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.listConfig == null ? null : item_r134.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.listConfig == null ? null : item_r134.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r184 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r184.listDataSource[item_r134.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r184.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r184.customColumn);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r207 = i0.ɵɵnextContext().$implicit;
    const ctx_r208 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r207.data[ctx_r208.customColumn], "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r134.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r207 = i0.ɵɵnextContext(2).$implicit;
    const item_r134 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r207.data.item);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r207 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r207.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r207.data.place);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r207 = ctx.$implicit;
    const item_r134 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r207.expanded)("place", row_r207.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r201 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r201.listDataSource[item_r134.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r201.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r201.customColumn);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r220 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r220.style);
    i0.ɵɵproperty("resource", res_r220.resource)("ID", res_r220.id)("ressourceName", res_r220.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r203 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r203.listDataSource[item_r134.value.restField.name]);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r202 = i0.ɵɵreference(3);
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r185 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r185.isObject(item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r202);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.listConfig == null ? null : item_r134.value.restField.metaData.listConfig.restManyResources) && !(item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r227 = i0.ɵɵnextContext().$implicit;
    const ctx_r228 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r227.data[ctx_r228.customColumn], "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r134.value.restField.name);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r227 = i0.ɵɵnextContext(2).$implicit;
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r227.data.item);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r227 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r227.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r227.data.place);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r227 = ctx.$implicit;
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r227.expanded)("place", row_r227.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    const ctx_r143 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r143.listDataSource[item_r134.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r143.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r143.customColumn);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r241 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r241.sanitizerUrl(item_r134.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 27);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r134.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r134.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r134.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.linkConfig) ? !(item_r134.value.restField == null ? null : item_r134.value.restField.metaData == null ? null : item_r134.value.restField.metaData.detailConfig == null ? null : item_r134.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r134.value.restField.template)("componentClass", item_r134.value.data);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r134.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.template);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r134 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r134.value.restField.note);
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_11_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_12_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵtemplate(14, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_ng_container_14_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r134 = ctx.$implicit;
    const ctx_r133 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.TEXT || item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.STRING || item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.NUMBER || item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.type == ctx_r133.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r134.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_template_4_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 33);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_template_4_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r132 = ctx.$implicit;
    const ctx_r131 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tabTitle", tabs_r132);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r131.datas1[tabs_r132]));
} }
function RestResourceDetailComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 31);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_template_4_nb_tab_1_Template, 4, 4, "nb-tab", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.tabsName);
} }
function RestResourceDetailComponent_nb_card_footer_6_Template(rf, ctx) { if (rf & 1) {
    const _r248 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_card_footer_6_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r248); const ctx_r247 = i0.ɵɵnextContext(); return ctx_r247.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 38);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_card_footer_6_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r248); const ctx_r249 = i0.ɵɵnextContext(); return ctx_r249.editEntity(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_nb_card_footer_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r248); const ctx_r250 = i0.ɵɵnextContext(); return ctx_r250.deleteEntity(); });
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "rest-detail.btnCancel"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 5, "rest-detail.btnEdit"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(10, 7, "rest-detail.btnDelete"), " ");
} }
export class RestResourceDetailComponent {
    constructor(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, dialogService, langService, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.router = router;
        this.dataSourceBuilder = dataSourceBuilder;
        this.dialogService = dialogService;
        this.langService = langService;
        this.sanitizer = sanitizer;
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
            try {
                if (!val || !val.restField || !val.data) {
                    throw new Error('Missing required data properties');
                }
                if (val.restField.i18n === true) {
                    if (typeof val.data === 'string' && val.data[0] === '{') {
                        const parsedData = JSON.parse(val.data);
                        if (parsedData[this.langService.selected]) {
                            _jsonValue = parsedData[this.langService.selected];
                        }
                        else {
                            throw new Error('Invalid i18n language selected');
                        }
                    }
                    else if (typeof val.data === 'object' &&
                        val.data[this.langService.selected]) {
                        _jsonValue = val.data[this.langService.selected];
                    }
                    else if (typeof val.data === 'string') {
                        _jsonValue = val.data;
                    }
                    else {
                        throw new Error('Invalid data format for i18n field');
                    }
                }
                else {
                    _jsonValue = val.data;
                }
                if (typeof _jsonValue === 'object') {
                    _jsonValue = JSON.stringify(_jsonValue);
                }
            }
            catch (err) {
                // console.log(`Error occurred in jsonValue: ${err}`);
                _jsonValue = JSON.stringify(val.data);
            }
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
                                                navigationId: response[search.label],
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
                                    navigationId: response[elt.label],
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
                                            navigationId: response[search.label],
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
                                navigationId: response[elt.label],
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
    deleteEntity() {
        const dialog = this.dialogService.open(RestResourceDeleteComponent, {
            context: {
                datas: { id: this.entityId },
                title: 'SUPPRESSION',
                listConfig: this.resource.listConfig,
                resourceName: this.ressourceName,
            },
        });
        dialog.onClose.subscribe((resp) => {
            if (resp) {
                this.router.navigateByUrl(`/admin/${this.ressourceName}-list`);
            }
        });
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    //Image input
    onSelect(event) { }
    onRemove(field) { }
    loadBelongToDetail(data) {
        const resourceName = data.restField.metaData.addConfig.belongToOptions.resourceName;
        this.router.navigate([`/admin/${resourceName}-detail`, data.navigationId]);
    }
    sanitizerUrl(link) {
        console.log('link', link);
        return this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
}
RestResourceDetailComponent.ɵfac = function RestResourceDetailComponent_Factory(t) { return new (t || RestResourceDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i4.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(i4.NbDialogService), i0.ɵɵdirectiveInject(i5.RestLangService), i0.ɵɵdirectiveInject(i6.DomSanitizer)); };
RestResourceDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDetailComponent, selectors: [["ngx-rest-resource-detail"]], inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, decls: 7, vars: 6, consts: [[4, "ngIf"], ["class", "list-group", 4, "ngIf", "ngIfElse"], ["tabsContent", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "d-block", 2, "margin-left", "15px"], [1, "row"], [1, ""], [1, "marg"], [3, "template", "componentClass"], [3, "change"], [3, "removable", "removed"], [1, "text-center", "color-card"], [3, "checked", "disabled"], ["alt", "", 1, "rest-img", 3, "src"], ["nbTooltipPlacement", "top", 1, "belongTo-link", 3, "nbTooltip", "click"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], [4, "ngIf", "ngIfElse"], ["cas21", ""], ["class", "row", 4, "ngFor", "ngForOf"], [3, "resource", "ID", "ressourceName", "container"], ["target", "_blank", 3, "href"], ["height", "400px", "width", "100%", "class", "mt-2", 3, "src", 4, "ngIf"], ["height", "400px", "width", "100%", 1, "mt-2", 3, "src"], [1, "text-muted", "ml-20", "mt-3"], ["fullWidth", ""], [3, "tabTitle", 4, "ngFor", "ngForOf"], [3, "tabTitle"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["displayRes", ""], ["fullWidth", "", 1, "buttons-row", "text-center"], ["nbButton", "", "status", "secondary", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 2, "margin-left", "10px", 3, "click"]], template: function RestResourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card");
        i0.ɵɵtemplate(1, RestResourceDetailComponent_nb_card_header_1_Template, 3, 3, "nb-card-header", 0);
        i0.ɵɵelementStart(2, "nb-card-body");
        i0.ɵɵtemplate(3, RestResourceDetailComponent_nb_list_3_Template, 3, 3, "nb-list", 1);
        i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_template_4_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, RestResourceDetailComponent_nb_card_footer_6_Template, 11, 9, "nb-card-footer", 0);
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
    } }, directives: [i4.NbCardComponent, i7.NgIf, i4.NbCardBodyComponent, i4.NbCardHeaderComponent, i4.NbListComponent, i7.NgForOf, i4.NbListItemComponent, i8.CngHtmlCompilerComponent, i9.NgxDropzoneComponent, i9.NgxDropzonePreviewComponent, i9.NgxDropzoneLabelDirective, i4.NbCheckboxComponent, i4.NbTooltipDirective, i4.NbTreeGridComponent, i4.NbTreeGridRowDefDirective, i4.NbTreeGridColumnDefDirective, i4.NbTreeGridCellDefDirective, i4.NbTreeGridRowComponent, i4.NbTreeGridCellDirective, i10.FsIconCComponent, RestResourceDetailComponent, i4.NbTabsetComponent, i4.NbTabComponent, i4.NbCardFooterComponent, i4.NbButtonComponent], pipes: [i7.TitleCasePipe, i7.KeyValuePipe, i7.DatePipe, i11.TranslatePipe], styles: [".belongTo-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important;cursor:pointer}img[_ngcontent-%COMP%]{max-width:300px;max-height:200px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;margin-left:5px;justify-content:center;align-items:center}[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}.rest-item-align[_ngcontent-%COMP%]{padding-block:3}.marg[_ngcontent-%COMP%]{margin-right:25px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDetailComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-detail',
                templateUrl: './rest-resource-detail.component.html',
                styleUrls: ['./rest-resource-detail.component.scss'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i1.Router }, { type: i4.NbTreeGridDataSourceBuilder }, { type: i4.NbDialogService }, { type: i5.RestLangService }, { type: i6.DomSanitizer }]; }, { resource: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSzVFLDJDQUEyQztBQUMzQyxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLFNBQVMsTUFBTSwwQkFBMEIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUNWcEcsc0NBQW1DO0lBQ2pDLFlBQ0Y7O0lBQUEsaUJBQWlCOzs7SUFEZixlQUNGO0lBREUsdUlBQ0Y7OztJQWVZLDZCQUFxRDtJQUNuRCw4QkFBa0I7SUFDaEIseUJBQUc7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBSTtJQUNyQyxpQkFBTTtJQUNOLDhCQUFjO0lBQ1osWUFDRjtJQUFBLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxSLGVBQTRCO0lBQTVCLGtFQUE0QjtJQUcvQixlQUNGO0lBREUsbURBQ0Y7OztJQUdGLDJCQUEyQztJQUN6Qyx1Q0FJb0I7SUFDdEIsaUJBQU07OztJQUpGLGVBQTBDO0lBQTFDLDJEQUEwQyxzQ0FB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QUx2QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLHVDQUF1QztnQkFDcEQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7YUFDckQ7OFJBRVUsUUFBUTtrQkFBaEIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJlc3RGaWVsZCwgUkVTVF9GSUVMRF9UWVBFUyB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG4vLyBpbXBvcnQgdXJsVG9GaWxlIGZyb20gJy4uLy4uLy4uL3V0aWxzLyc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXJsVG9GaWxlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3VybFRvRmlsZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICBASW5wdXQoKSBJRDogc3RyaW5nO1xuICBASW5wdXQoKSByZXNzb3VyY2VOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogQm9vbGVhbjtcbiAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgZGF0YXM6IGFueVtdO1xuICBkYXRhczE6IGFueVtdW107XG4gIGVudGl0eUlkOiBudW1iZXI7XG4gIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cztcblxuICBjdXN0b21Db2x1bW4gPSAnbmFtZSc7XG4gIGFsbENvbHVtbnMgPSBbdGhpcy5jdXN0b21Db2x1bW5dO1xuICBsaXN0RGF0YVNvdXJjZTogYW55ID0ge307XG4gIGlzVGFic01lbnUgPSBmYWxzZTtcbiAgdGFic05hbWUgPSBbXTtcbiAgZmlsZXNVcGxvYWQgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0OiBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbkNvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxhbnk+LFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBsZXQgaWQ7XG4gICAgaWYgKHRoaXMuSUQpIHtcbiAgICAgIGlkID0gdGhpcy5JRDtcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgPSB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKTtcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZSA9XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsW1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDJcbiAgICAgICAgXS5wYXRoLnNwbGl0KCctJylbMF07XG4gICAgfVxuICAgIHRoaXMuZW50aXR5SWQgPSBwYXJzZUludChpZCk7XG5cbiAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWVcbiAgICApO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZycsIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnKTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeSkge1xuICAgICAgLy8gdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucXVlcnlQYXJhbXMuZmllbGRGb3JOZXh0UXVlcnlcbiAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LmFwaS5zdWJzdHJpbmcoXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBxdWVyeVBhcmFtczogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeVxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICA/IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgIDoge30sXG4gICAgICAgIH0pXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LmZpZWxkRm9yTmV4dFF1ZXJ5LmZvckVhY2goXG4gICAgICAgICAgICAoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeS5xdWVyeVBhcmFtc0NvbXBsZXRlLmZvckVhY2goXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc1ByZXBhcmVkU3RhdGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2VsZW1lbnQubGFiZWxdID0gdmFsW2VsZW1lbnQudmFsdWVdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tlbGVtZW50LmxhYmVsXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgIC5nZXRPbmVSZXNvdXJjZShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcuYXBpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSByZXNwb25zZS5pZDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhYnNNZW51ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWcuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRhYnNOYW1lLnB1c2godGFiLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcCA9IHt9O1xuXG4gICAgICAgICAgICAgICAgICB0YWIuZGF0YXMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgKGZpZWxkKSA9PiBmaWVsZC5sYWJlbCA9PT0gZWx0XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBzZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICAgICAgLypQcmVtaWVyIGNhcyBzaSBsZXMgY29uZmlncyBvbnQgZXRlIGRlZmluaXMgZGFucyBsZSBsaXN0Q29uZmlnIGV0IHJpZW4gZGFucyBsZSBkZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICBQcmVtaWVyIGNhcyBzaSBsZXMgY29uZmlncyBvbnQgZXRlIGRlZmluaXMgZGFucyBsZSBsaXN0Q29uZmlnIGV0IHJpZW4gZGFucyBsZSBkZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICBvbiBjb25zaWRlcmUgcXVlIGxlcyBjb25maWdzIHNvbnQgbGVzIG1lbWVzXG4gICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIXRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhhIG1lIGNvbmNlcm5lXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wW3NlYXJjaC5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0/LnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc291cmNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzQmVsb25nVG9NYW55ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoc2VhcmNoLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGAke2RhdH0gKCR7cmVzcG9uc2Vbc2VhcmNoLmxhYmVsXX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uSWQ6IHJlc3BvbnNlW3NlYXJjaC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW5tc1t0YWIubmFtZV0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhczEgPSBjb2x1bm1zO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGVsdC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ID0gdGhpcy5nZXRCZWxvbmdUb1NlY29uZEZpZWxkKGVsdCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBgJHtkYXR9ICgke3Jlc3BvbnNlW2VsdC5sYWJlbF19KWAsXG4gICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbklkOiByZXNwb25zZVtlbHQubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2VbZWx0LmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzID0gY29sdW5tcztcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHRoaXMuZGF0YXMpIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0/LnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgXSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzb3VyY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzQmVsb25nVG9NYW55ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c0JlbG9uZ1RvTWFueSk7XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAuZ2V0T25lUmVzb3VyY2UoXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5hcGksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucXVlcnlQYXJhbXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpZFxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcblxuICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSByZXNwb25zZS5pZDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnICYmXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmxlbmd0aCA+IDFcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuaXNUYWJzTWVudSA9IHRydWU7XG5cbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWcuZm9yRWFjaCgodGFiKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudGFic05hbWUucHVzaCh0YWIubmFtZSk7XG4gICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7fTtcblxuICAgICAgICAgICAgICB0YWIuZGF0YXMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZChcbiAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGQubGFiZWwgPT09IGVsdFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBzZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW3NlYXJjaC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHN3aXRjaCAodGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgLypQcmVtaWVyIGNhcyBzaSBsZXMgY29uZmlncyBvbnQgZXRlIGRlZmluaXMgZGFucyBsZSBsaXN0Q29uZmlnIGV0IHJpZW4gZGFucyBsZSBkZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgUHJlbWllciBjYXMgc2kgbGVzIGNvbmZpZ3Mgb250IGV0ZSBkZWZpbmlzIGRhbnMgbGUgbGlzdENvbmZpZyBldCByaWVuIGRhbnMgbGUgZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIG9uIGNvbnNpZGVyZSBxdWUgbGVzIGNvbmZpZ3Mgc29udCBsZXMgbWVtZXNcbiAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJYYSBtZSBjb25jZXJuZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZW1wW3NlYXJjaC5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0/LnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0Q29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0/LnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW3RlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzQmVsb25nVG9NYW55ID0gW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NCZWxvbmdUb01hbnkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdCA9IHRoaXMuZ2V0QmVsb25nVG9TZWNvbmRGaWVsZChzZWFyY2gsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBzZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBgJHtkYXR9ICgke3Jlc3BvbnNlW3NlYXJjaC5sYWJlbF19KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uSWQ6IHJlc3BvbnNlW3NlYXJjaC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLlBERjpcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IHVybFRvRmlsZShcbiAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaC5sYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAncGRmJ1xuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzVXBsb2FkW3NlYXJjaC5sYWJlbF0gPSBmaWxlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2x1bm1zW3RhYi5uYW1lXSA9IHRlbXA7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY29sdW5tcztcbiAgICAgICAgICAgIHRoaXMuZGF0YXMxID0gY29sdW5tcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlbHQudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE8pIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ID0gdGhpcy5nZXRCZWxvbmdUb1NlY29uZEZpZWxkKGVsdCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICAgICAgICBkYXRhOiBgJHtkYXR9ICgke3Jlc3BvbnNlW2VsdC5sYWJlbF19KWAsXG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uSWQ6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2VbZWx0LmxhYmVsXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjb2x1bm1zO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmRhdGFzKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzICYmXG4gICAgICAgICAgICAgICAgICAgICF0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0/LnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/Lmxpc3RDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW3RoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgW107XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnJlc291cmNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGVsZW1lbnQ/LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICBjb25zdCByb3dzQmVsb25nVG9NYW55ID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlZGl0RW50aXR5KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1lZGl0YCwgdGhpcy5lbnRpdHlJZF0pO1xuICB9XG5cbiAgbGlzdEVudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWxpc3RgKTtcbiAgfVxuXG4gIGRlbGV0ZUVudGl0eSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHsgaWQ6IHRoaXMuZW50aXR5SWQgfSxcbiAgICAgICAgdGl0bGU6ICdTVVBQUkVTU0lPTicsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWxpc3RgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgLy9JbWFnZSBpbnB1dFxuICBvblNlbGVjdChldmVudCkge31cblxuICBvblJlbW92ZShmaWVsZCkge31cblxuICBsb2FkQmVsb25nVG9EZXRhaWwoZGF0YSkge1xuICAgIGNvbnN0IHJlc291cmNlTmFtZSA9XG4gICAgICBkYXRhLnJlc3RGaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnJlc291cmNlTmFtZTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2FkbWluLyR7cmVzb3VyY2VOYW1lfS1kZXRhaWxgLCBkYXRhLm5hdmlnYXRpb25JZF0pO1xuICB9XG5cbiAgaXNPYmplY3QgPSAoYSkgPT4ge1xuICAgIGxldCBpc09iamVjdCA9IGZhbHNlO1xuICAgIGlmIChhLm1ldGFEYXRhKSBpc09iamVjdCA9IHRydWU7XG4gICAgaWYgKGEudHlwZSkgaXNPYmplY3QgPSB0cnVlO1xuICAgIGlmIChhLnRlbXBsYXRlKSBpc09iamVjdCA9IHRydWU7XG4gICAgaWYgKGEuaW5Gb3JtKSBpc09iamVjdCA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNPYmplY3Q7XG4gIH07XG5cbiAgaXNBcnJheSA9IChhKSA9PiB7XG4gICAgcmV0dXJuICEhYSAmJiBhLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbiAgfTtcblxuICBnZXRCZWxvbmdUb1NlY29uZEZpZWxkID0gKGVsdCwgcmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBiZWxvbmdWYWwgPVxuICAgICAgYCR7ZWx0Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8ucmVzb3VyY2VOYW1lfS4ke2VsdC5tZXRhRGF0YT8uYmVsb25nVG9TZWNvbmRGaWVsZExhYmVsfWAuc3BsaXQoXG4gICAgICAgICcuJ1xuICAgICAgKTtcbiAgICBsZXQgZGF0ID0gcmVzcG9uc2U7XG4gICAgaWYgKGJlbG9uZ1ZhbCAmJiBiZWxvbmdWYWw/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGJlbG9uZ1ZhbC5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgaWYgKGRhdFt2YWxdKSB7XG4gICAgICAgICAgZGF0ID0gZGF0W3ZhbF07XG4gICAgICAgIH0gZWxzZSBkYXQgPSAnJztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXQgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIGRhdDtcbiAgfTtcblxuICBqc29uVmFsdWUgPSAodmFsOiBhbnkpOiBhbnkgPT4ge1xuICAgIGxldCBfanNvblZhbHVlOiBhbnk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCF2YWwgfHwgIXZhbC5yZXN0RmllbGQgfHwgIXZhbC5kYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBkYXRhIHByb3BlcnRpZXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbC5yZXN0RmllbGQuaTE4biA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbC5kYXRhID09PSAnc3RyaW5nJyAmJiB2YWwuZGF0YVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UodmFsLmRhdGEpO1xuICAgICAgICAgIGlmIChwYXJzZWREYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdKSB7XG4gICAgICAgICAgICBfanNvblZhbHVlID0gcGFyc2VkRGF0YVt0aGlzLmxhbmdTZXJ2aWNlLnNlbGVjdGVkXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGkxOG4gbGFuZ3VhZ2Ugc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZW9mIHZhbC5kYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIHZhbC5kYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdXG4gICAgICAgICkge1xuICAgICAgICAgIF9qc29uVmFsdWUgPSB2YWwuZGF0YVt0aGlzLmxhbmdTZXJ2aWNlLnNlbGVjdGVkXTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgX2pzb25WYWx1ZSA9IHZhbC5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkYXRhIGZvcm1hdCBmb3IgaTE4biBmaWVsZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfanNvblZhbHVlID0gdmFsLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgX2pzb25WYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2pzb25WYWx1ZSA9IEpTT04uc3RyaW5naWZ5KF9qc29uVmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY29uc29sZS5sb2coYEVycm9yIG9jY3VycmVkIGluIGpzb25WYWx1ZTogJHtlcnJ9YCk7XG4gICAgICBfanNvblZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBfanNvblZhbHVlO1xuICB9O1xuXG4gIHNhbml0aXplclVybChsaW5rKSB7XG4gICAgY29uc29sZS5sb2coJ2xpbmsnLCBsaW5rKTtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKGxpbmspO1xuICB9XG59XG4iLCI8bmItY2FyZCBbc3R5bGVdPVwic3R5bGUgPyBzdHlsZSA6ICcnXCI+XG4gIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cIiFjb250YWluZXJcIj5cbiAgICB7eyByZXNvdXJjZS5kZXRhaWxDb25maWc/LnRpdGxlIHwgdGl0bGVjYXNlIH19XG4gIDwvbmItY2FyZC1oZWFkZXI+XG4gIDxuYi1jYXJkLWJvZHk+XG4gICAgPG5iLWxpc3QgKm5nSWY9XCIhaXNUYWJzTWVudTsgZWxzZSB0YWJzQ29udGVudFwiIGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgPG5iLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhcyB8IGtleXZhbHVlXCI+XG4gICAgICAgIDwhLS0gY2xhc3M9XCJyZXN0LWl0ZW0tYWxpZ24gbGlzdC1ncm91cC1pdGVtXCIgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWJsb2NrXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTVweFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5QREZcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZSAoY2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZShmaWxlc1VwbG9hZFtpdGVtLmtleV0pXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtPy52YWx1ZT8uZGF0YSB9fSAoe3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBkZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19KTwvbmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1jZW50ZXIgY29sb3ItY2FyZFwiXG4gICAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+e3sgaXRlbS52YWx1ZS5kYXRhIH19PC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkpTT05cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAge3sganNvblZhbHVlKGl0ZW0udmFsdWUpIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgID48L25iLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVzdC1pbWdcIlxuICAgICAgICAgICAgICAgICAgICBbc3JjXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfCBkYXRlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRCZWxvbmdUb0RldGFpbChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7ICdyZXN0LWRldGFpbC5iZWxvbmdUb1JlZicgfCB0cmFuc2xhdGUgfX1cIlxuICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJlbG9uZ1RvLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPCEtLSBDQVMgMSAtLT5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8IS0tIENBUyAyIC0tPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBjYXMyMVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGFibGUgW25iVHJlZUdyaWRdPVwibGlzdERhdGFTb3VyY2VbaXRlbS5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXM/LnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcz8udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYXMyMT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzIG9mIGxpc3REYXRhU291cmNlW2l0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICBbcmVzb3VyY2VdPVwicmVzLnJlc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbSURdPVwicmVzLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcmVzc291cmNlTmFtZV09XCJyZXMucmVzb3VyY2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJyZXMuc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWw+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkxJTktcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwiaXRlbS52YWx1ZS5kYXRhXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnPy5saW5rQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlua0NvbmZpZy5kaXNhYmxlZElmcmFtZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlICE9ICcnXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZCBtbC0yMCBtdC0zXCI+e3tcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlXG4gICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgPC9uYi1saXN0PlxuICAgIDxuZy10ZW1wbGF0ZSAjdGFic0NvbnRlbnQ+XG4gICAgICA8bmItdGFic2V0IGZ1bGxXaWR0aD5cbiAgICAgICAgPG5iLXRhYiBbdGFiVGl0bGVdPVwidGFic1wiICpuZ0Zvcj1cImxldCB0YWJzIG9mIHRhYnNOYW1lXCI+XG4gICAgICAgICAgPG5iLWxpc3QgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICA8bmItbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzMVt0YWJzXSB8IGtleXZhbHVlXCI+XG4gICAgICAgICAgICAgIDwhLS0gY2xhc3M9XCJyZXN0LWl0ZW0tYWxpZ24gbGlzdC1ncm91cC1pdGVtXCIgLS0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWJsb2NrXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTVweFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8XG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0NXB4OyB3aWR0aDogODBweDsgbWFyZ2luLWxlZnQ6IDVweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyZXN0LWltZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGpzb25WYWx1ZShpdGVtLnZhbHVlKSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cImpzb25WYWx1ZShpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfCBkYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2FkQmVsb25nVG9EZXRhaWwoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN0LWRldGFpbC5iZWxvbmdUb1JlZicgfCB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJlbG9uZ1RvLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGRpc3BsYXlSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cInJvdy5kYXRhLml0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Rpc3BsYXlSZXM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyBvZiBsaXN0RGF0YVNvdXJjZVtpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc291cmNlXT1cInJlcy5yZXNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW0lEXT1cInJlcy5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbnRhaW5lcl09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwicmVzLnN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkxJTktcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwiaXRlbS52YWx1ZS5kYXRhXCIgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmxpbmtDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saW5rQ29uZmlnLmRpc2FibGVkSWZyYW1lUHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtdC0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkIG1sLTIwIG10LTNcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGVcbiAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgICAgICA8L25iLWxpc3Q+XG4gICAgICAgIDwvbmItdGFiPlxuICAgICAgPC9uYi10YWJzZXQ+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgPC9uYi1jYXJkLWJvZHk+XG5cbiAgPG5iLWNhcmQtZm9vdGVyICpuZ0lmPVwiZGF0YXMgJiYgIWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLXJvdyB0ZXh0LWNlbnRlclwiIGZ1bGxXaWR0aD5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbmJCdXR0b25cbiAgICAgICAgc3RhdHVzPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIlxuICAgICAgICAoY2xpY2spPVwibGlzdEVudGl0eSgpXCJcbiAgICAgID5cbiAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5DYW5jZWxcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxidXR0b24gbmJCdXR0b24gc3RhdHVzPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0RW50aXR5KClcIj5cbiAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5FZGl0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5iQnV0dG9uXG4gICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHhcIlxuICAgICAgICAoY2xpY2spPVwiZGVsZXRlRW50aXR5KClcIlxuICAgICAgPlxuICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkRlbGV0ZVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9uYi1jYXJkLWZvb3Rlcj5cbjwvbmItY2FyZD5cbiJdfQ==