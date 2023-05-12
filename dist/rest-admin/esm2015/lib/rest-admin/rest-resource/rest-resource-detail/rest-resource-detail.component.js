import { Component, Input } from '@angular/core';
import { REST_FIELD_TYPES, PERMISSION, } from '../models/rest-resource.model';
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
import * as i7 from "ngx-permissions";
import * as i8 from "@angular/common";
import * as i9 from "@codehint-ng/html-compiler";
import * as i10 from "ngx-dropzone";
import * as i11 from "../components/fs-icon-ccomponent/fs-icon.component";
import * as i12 from "@ngx-translate/core";
function RestResourceDetailComponent_ng_container_0_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r2.resource.detailConfig == null ? null : ctx_r2.resource.detailConfig.title), " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("change", function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(6); return ctx_r29.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 11);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r30); const item_r8 = i0.ɵɵnextContext(3).$implicit; const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.onRemove(ctx_r31.filesUpload[item_r8.key]); });
    i0.ɵɵelementStart(10, "ngx-dropzone-label");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r8 == null ? null : item_r8.value == null ? null : item_r8.value.data, " (", "pdf", ")");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template, 12, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", ctx_r27.jsonValue(item_r8.value));
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r8.value.data);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r42 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r42.jsonValue(item_r8.value), " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r43 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", ctx_r43.jsonValue(item_r8.value));
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r8.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r52 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r52.style);
    i0.ɵɵproperty("src", item_r8.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r8.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r66); const item_r8 = i0.ɵɵnextContext(2).$implicit; const ctx_r64 = i0.ɵɵnextContext(3); return ctx_r64.loadBelongToDetail(item_r8.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r8.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r75 = i0.ɵɵnextContext().$implicit;
    const ctx_r76 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r75.data[ctx_r76.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r75 = i0.ɵɵnextContext(2).$implicit;
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r75.data.item);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r75 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r75.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r75.data.place);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r75 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r75.expanded)("place", row_r75.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.listConfig == null ? null : item_r8.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.listConfig == null ? null : item_r8.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r70 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r70.listDataSource[item_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r70.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r70.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r93 = i0.ɵɵnextContext().$implicit;
    const ctx_r94 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r93.data[ctx_r94.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r8.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r93 = i0.ɵɵnextContext(2).$implicit;
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r93.data.item);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r93 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r93.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r93.data.place);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r93 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r93.expanded)("place", row_r93.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r8.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r87 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r87.listDataSource[item_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r87.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r87.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r106 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r106.style);
    i0.ɵɵproperty("resource", res_r106.resource)("ID", res_r106.id)("ressourceName", res_r106.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r89 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r89.listDataSource[item_r8.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template, 5, 3, "div", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r88 = i0.ɵɵreference(3);
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r71.isObject(item_r8.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r88);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.listConfig == null ? null : item_r8.value.restField.metaData.listConfig.restManyResources) && !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r113 = i0.ɵɵnextContext().$implicit;
    const ctx_r114 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r113.data[ctx_r114.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r8.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r113 = i0.ɵɵnextContext(2).$implicit;
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r113.data.item);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r113 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r113.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r113.data.place);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r113 = ctx.$implicit;
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r113.expanded)("place", row_r113.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r18.listDataSource[item_r8.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r18.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r18.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r127 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r127.sanitizerUrl(item_r8.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r8.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r8.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.linkConfig) ? !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r8.value.restField.template)("componentClass", item_r8.value.data);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r8.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r8.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_11_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_12_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(13, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵtemplate(15, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_15_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.TEXT || item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.STRING || item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.NUMBER || item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.type == ctx_r7.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r8.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list", 3);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_Template, 16, 12, "nb-list-item", 4);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.datas));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r136.value.data)("value", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r136.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r163 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r163.style);
    i0.ɵɵproperty("src", item_r136.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵtext(2, "http://localhost:4200/admin/agency-list ");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r168 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r168.jsonValue(item_r136.value), " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r169 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", ctx_r169.jsonValue(item_r136.value));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r136.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r182 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r182); const item_r136 = i0.ɵɵnextContext(2).$implicit; const ctx_r180 = i0.ɵɵnextContext(4); return ctx_r180.loadBelongToDetail(item_r136.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r136.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r191 = i0.ɵɵnextContext().$implicit;
    const ctx_r192 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r191.data[ctx_r192.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r191 = i0.ɵɵnextContext(2).$implicit;
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r191.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r191 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r191.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r191.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r191 = ctx.$implicit;
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r191.expanded)("place", row_r191.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.listConfig == null ? null : item_r136.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.listConfig == null ? null : item_r136.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r186 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r186.listDataSource[item_r136.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r186.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r186.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext().$implicit;
    const ctx_r210 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r209.data[ctx_r210.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r136.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext(2).$implicit;
    const item_r136 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r209.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r209 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r209.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r209.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r209 = ctx.$implicit;
    const item_r136 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r209.expanded)("place", row_r209.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r203 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r203.listDataSource[item_r136.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r203.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r203.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r222 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r222.style);
    i0.ɵɵproperty("resource", res_r222.resource)("ID", res_r222.id)("ressourceName", res_r222.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r205 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r205.listDataSource[item_r136.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r204 = i0.ɵɵreference(3);
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r187 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r187.isObject(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r204);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.listConfig == null ? null : item_r136.value.restField.metaData.listConfig.restManyResources) && !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r229 = i0.ɵɵnextContext().$implicit;
    const ctx_r230 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r229.data[ctx_r230.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r136.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r229 = i0.ɵɵnextContext(2).$implicit;
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r229.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r229 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r229.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r229.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r229 = ctx.$implicit;
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r229.expanded)("place", row_r229.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    const ctx_r145 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r145.listDataSource[item_r136.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r145.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r145.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r243 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", ctx_r243.sanitizerUrl(item_r136.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r136.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r136.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r136.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.linkConfig) ? !(item_r136.value.restField == null ? null : item_r136.value.restField.metaData == null ? null : item_r136.value.restField.metaData.detailConfig == null ? null : item_r136.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r136.value.restField.template)("componentClass", item_r136.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r136.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r136 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r136.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵtemplate(14, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r136 = ctx.$implicit;
    const ctx_r135 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.TEXT || item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.STRING || item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.NUMBER || item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.type == ctx_r135.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r136.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 33);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r134 = ctx.$implicit;
    const ctx_r133 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tabTitle", tabs_r134);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r133.datas1[tabs_r134]));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 31);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_Template, 4, 4, "nb-tab", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.tabsName);
} }
function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template(rf, ctx) { if (rf & 1) {
    const _r250 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r250); const ctx_r249 = i0.ɵɵnextContext(2); return ctx_r249.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 38);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r250); const ctx_r251 = i0.ɵɵnextContext(2); return ctx_r251.editEntity(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r250); const ctx_r252 = i0.ɵɵnextContext(2); return ctx_r252.deleteEntity(); });
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
function RestResourceDetailComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_nb_card_header_2_Template, 3, 3, "nb-card-header", 0);
    i0.ɵɵelementStart(3, "nb-card-body");
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_0_nb_list_4_Template, 3, 3, "nb-list", 1);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_0_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template, 11, 9, "nb-card-footer", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r4 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r0.style ? ctx_r0.style : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.container);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isTabsMenu)("ngIfElse", _r4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.datas && !ctx_r0.container);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "titlecase");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r254 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r254.resource.detailConfig == null ? null : ctx_r254.resource.detailConfig.title), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r282 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("change", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r282); const ctx_r281 = i0.ɵɵnextContext(7); return ctx_r281.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 11);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r282); const item_r260 = i0.ɵɵnextContext(3).$implicit; const ctx_r283 = i0.ɵɵnextContext(4); return ctx_r283.onRemove(ctx_r283.filesUpload[item_r260.key]); });
    i0.ɵɵelementStart(10, "ngx-dropzone-label");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r260 == null ? null : item_r260.value == null ? null : item_r260.value.data, " (", "pdf", ")");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template, 12, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r279 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", ctx_r279.jsonValue(item_r260.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r260.value.data);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r294 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r294.jsonValue(item_r260.value), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r295 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", ctx_r295.jsonValue(item_r260.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r260.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r304 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r304.style);
    i0.ɵɵproperty("src", item_r260.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r260.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r318 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r318); const item_r260 = i0.ɵɵnextContext(2).$implicit; const ctx_r316 = i0.ɵɵnextContext(4); return ctx_r316.loadBelongToDetail(item_r260.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r260.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r327 = i0.ɵɵnextContext().$implicit;
    const ctx_r328 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r327.data[ctx_r328.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r327 = i0.ɵɵnextContext(2).$implicit;
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r327.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r327 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r327.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r327.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r327 = ctx.$implicit;
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r327.expanded)("place", row_r327.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.listConfig == null ? null : item_r260.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.listConfig == null ? null : item_r260.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r322 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r322.listDataSource[item_r260.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r322.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r322.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r345 = i0.ɵɵnextContext().$implicit;
    const ctx_r346 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r345.data[ctx_r346.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r260.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r345 = i0.ɵɵnextContext(2).$implicit;
    const item_r260 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r345.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r345 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r345.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r345.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r345 = ctx.$implicit;
    const item_r260 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r345.expanded)("place", row_r345.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r260.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r339 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r339.listDataSource[item_r260.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r339.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r339.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r358 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r358.style);
    i0.ɵɵproperty("resource", res_r358.resource)("ID", res_r358.id)("ressourceName", res_r358.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r341 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r341.listDataSource[item_r260.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template, 5, 3, "div", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r340 = i0.ɵɵreference(3);
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r323 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r323.isObject(item_r260.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r340);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.listConfig == null ? null : item_r260.value.restField.metaData.listConfig.restManyResources) && !(item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r365 = i0.ɵɵnextContext().$implicit;
    const ctx_r366 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r365.data[ctx_r366.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r260.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r365 = i0.ɵɵnextContext(2).$implicit;
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r365.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r365 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r365.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r365.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r365 = ctx.$implicit;
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r365.expanded)("place", row_r365.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    const ctx_r270 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r270.listDataSource[item_r260.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r270.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r270.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r379 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", ctx_r379.sanitizerUrl(item_r260.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r260.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r260.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r260.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.linkConfig) ? !(item_r260.value.restField == null ? null : item_r260.value.restField.metaData == null ? null : item_r260.value.restField.metaData.detailConfig == null ? null : item_r260.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r260.value.restField.template)("componentClass", item_r260.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r260.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r260 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r260.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(13, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 7);
    i0.ɵɵtemplate(15, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_15_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r260 = ctx.$implicit;
    const ctx_r259 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.TEXT || item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.STRING || item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.NUMBER || item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.type == ctx_r259.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r260.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list", 3);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_Template, 16, 12, "nb-list-item", 4);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r255 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r255.datas));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r388.value.data)("value", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r388.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r415 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵstyleMap(ctx_r415.style);
    i0.ɵɵproperty("src", item_r388.value.data, i0.ɵɵsanitizeUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r420 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r420.jsonValue(item_r388.value), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r421 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", ctx_r421.jsonValue(item_r388.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r388.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r434 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r434); const item_r388 = i0.ɵɵnextContext(2).$implicit; const ctx_r432 = i0.ɵɵnextContext(5); return ctx_r432.loadBelongToDetail(item_r388.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r388.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r443 = i0.ɵɵnextContext().$implicit;
    const ctx_r444 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r443.data[ctx_r444.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r443 = i0.ɵɵnextContext(2).$implicit;
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r443.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r443 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r443.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r443.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r443 = ctx.$implicit;
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r443.expanded)("place", row_r443.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.listConfig == null ? null : item_r388.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.listConfig == null ? null : item_r388.value.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r438 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r438.listDataSource[item_r388.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r438.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r438.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r461 = i0.ɵɵnextContext().$implicit;
    const ctx_r462 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r461.data[ctx_r462.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r388.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r461 = i0.ɵɵnextContext(2).$implicit;
    const item_r388 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r461.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r461 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r461.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r461.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r461 = ctx.$implicit;
    const item_r388 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r461.expanded)("place", row_r461.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r455 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r455.listDataSource[item_r388.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r455.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r455.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r474 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r474.style);
    i0.ɵɵproperty("resource", res_r474.resource)("ID", res_r474.id)("ressourceName", res_r474.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r457 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngForOf", ctx_r457.listDataSource[item_r388.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 35, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r456 = i0.ɵɵreference(3);
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r439 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r439.isObject(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r456);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.listConfig == null ? null : item_r388.value.restField.metaData.listConfig.restManyResources) && !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.restManyResources);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 20);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r481 = i0.ɵɵnextContext().$implicit;
    const ctx_r482 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r481.data[ctx_r482.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r388.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r481 = i0.ɵɵnextContext(2).$implicit;
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r481.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r481 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r481.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r481.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r481 = ctx.$implicit;
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r481.expanded)("place", row_r481.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "table", 16);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_tr_2_Template, 1, 0, "tr", 17);
    i0.ɵɵelementContainerStart(3, 18);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template, 4, 4, "td", 19);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    const ctx_r397 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r397.listDataSource[item_r388.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r397.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r397.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 29);
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r495 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r495.sanitizerUrl(item_r388.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_iframe_8_Template, 1, 1, "iframe", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r388.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r388.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r388.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.linkConfig) ? !(item_r388.value.restField == null ? null : item_r388.value.restField.metaData == null ? null : item_r388.value.restField.metaData.detailConfig == null ? null : item_r388.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r388.value.restField.template)("componentClass", item_r388.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r388.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 30);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r388 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r388.value.restField.note);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list-item");
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(9, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 7);
    i0.ɵɵtemplate(14, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r388 = ctx.$implicit;
    const ctx_r387 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.TEXT || item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.STRING || item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.NUMBER || item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.type == ctx_r387.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r388.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 33);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r386 = ctx.$implicit;
    const ctx_r385 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tabTitle", tabs_r386);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r385.datas1[tabs_r386]));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 31);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_Template, 4, 4, "nb-tab", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r257 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r257.tabsName);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r504 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r504); const ctx_r503 = i0.ɵɵnextContext(4); return ctx_r503.editEntity(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "rest-detail.btnEdit"), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r506 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r506); const ctx_r505 = i0.ɵɵnextContext(4); return ctx_r505.deleteEntity(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "rest-detail.btnDelete"), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template(rf, ctx) { if (rf & 1) {
    const _r508 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "button", 37);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r508); const ctx_r507 = i0.ɵɵnextContext(3); return ctx_r507.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template, 3, 3, "button", 41);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template, 3, 3, "button", 42);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r258 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "rest-detail.btnCancel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r258.PERMISSION.UPDATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r258.PERMISSION.DELETE);
} }
function RestResourceDetailComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_card_header_2_Template, 3, 3, "nb-card-header", 0);
    i0.ɵɵelementStart(3, "nb-card-body");
    i0.ɵɵtemplate(4, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_Template, 3, 3, "nb-list", 1);
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template, 7, 5, "nb-card-footer", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r256 = i0.ɵɵreference(6);
    const ctx_r253 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r253.style ? ctx_r253.style : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r253.container);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r253.isTabsMenu)("ngIfElse", _r256);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r253.datas && !ctx_r253.container);
} }
function RestResourceDetailComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_Template, 8, 6, "div", 40);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r1.PERMISSION.READ);
} }
export class RestResourceDetailComponent {
    constructor(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, dialogService, langService, sanitizer, permissionsService) {
        this.activatedRoute = activatedRoute;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.router = router;
        this.dataSourceBuilder = dataSourceBuilder;
        this.dialogService = dialogService;
        this.langService = langService;
        this.sanitizer = sanitizer;
        this.permissionsService = permissionsService;
        this.objectKeys = Object.keys;
        this.customColumn = 'name';
        this.allColumns = [this.customColumn];
        this.listDataSource = {};
        this.isTabsMenu = false;
        this.tabsName = [];
        this.filesUpload = {};
        this.permissions = [
            PERMISSION.CREATE,
            PERMISSION.UPDATE,
            PERMISSION.DELETE,
            PERMISSION.READ,
        ];
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
        this.sanitizerUrl = (link) => this.sanitizer.bypassSecurityTrustResourceUrl(link);
    }
    get PERMISSION() {
        return PERMISSION;
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
        if (this.resource.permissions.length > 0) {
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
                        }
                    });
                });
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
}
RestResourceDetailComponent.ɵfac = function RestResourceDetailComponent_Factory(t) { return new (t || RestResourceDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i4.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(i4.NbDialogService), i0.ɵɵdirectiveInject(i5.RestLangService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.NgxPermissionsService)); };
RestResourceDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDetailComponent, selectors: [["ngx-rest-resource-detail"]], inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "list-group", 4, "ngIf", "ngIfElse"], ["tabsContent", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "d-block", 2, "margin-left", "15px"], [1, "row"], [1, ""], [1, "marg"], [3, "template", "componentClass"], [3, "change"], [3, "removable", "removed"], [1, "text-center", "color-card"], [3, "checked", "disabled"], ["alt", "", 1, "rest-img", 3, "src"], ["nbTooltipPlacement", "top", 1, "belongTo-link", 3, "nbTooltip", "click"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], [4, "ngIf", "ngIfElse"], ["cas21", ""], ["class", "row", 4, "ngFor", "ngForOf"], [3, "resource", "ID", "ressourceName", "container"], ["target", "_blank", 3, "href"], ["height", "400px", "width", "100%", "class", "mt-2", 3, "src", 4, "ngIf"], ["height", "400px", "width", "100%", 1, "mt-2", 3, "src"], [1, "text-muted", "ml-20", "mt-3"], ["fullWidth", ""], [3, "tabTitle", 4, "ngFor", "ngForOf"], [3, "tabTitle"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["displayRes", ""], ["fullWidth", "", 1, "buttons-row", "text-center"], ["nbButton", "", "status", "secondary", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 2, "margin-left", "10px", 3, "click"], [4, "ngxPermissionsOnly"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngxPermissionsOnly"], ["nbButton", "", "status", "danger", "style", "margin-left: 10px", 3, "click", 4, "ngxPermissionsOnly"]], template: function RestResourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_Template, 8, 6, "ng-container", 0);
        i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
    } }, directives: [i8.NgIf, i4.NbCardComponent, i4.NbCardBodyComponent, i4.NbCardHeaderComponent, i4.NbListComponent, i8.NgForOf, i4.NbListItemComponent, i9.CngHtmlCompilerComponent, i10.NgxDropzoneComponent, i10.NgxDropzonePreviewComponent, i10.NgxDropzoneLabelDirective, i4.NbCheckboxComponent, i4.NbTooltipDirective, i4.NbTreeGridComponent, i4.NbTreeGridRowDefDirective, i4.NbTreeGridColumnDefDirective, i4.NbTreeGridCellDefDirective, i4.NbTreeGridRowComponent, i4.NbTreeGridCellDirective, i11.FsIconCComponent, RestResourceDetailComponent, i4.NbTabsetComponent, i4.NbTabComponent, i4.NbCardFooterComponent, i4.NbButtonComponent, i7.NgxPermissionsDirective], pipes: [i8.TitleCasePipe, i8.KeyValuePipe, i8.DatePipe, i12.TranslatePipe], styles: [".belongTo-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important;cursor:pointer}img[_ngcontent-%COMP%]{max-width:300px;max-height:200px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;margin-left:5px;justify-content:center;align-items:center}[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}.rest-item-align[_ngcontent-%COMP%]{padding-block:3}.marg[_ngcontent-%COMP%]{margin-right:25px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDetailComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-detail',
                templateUrl: './rest-resource-detail.component.html',
                styleUrls: ['./rest-resource-detail.component.scss'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i1.Router }, { type: i4.NbTreeGridDataSourceBuilder }, { type: i4.NbDialogService }, { type: i5.RestLangService }, { type: i6.DomSanitizer }, { type: i7.NgxPermissionsService }]; }, { resource: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBR3pELE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFLdkMsMkNBQTJDO0FBQzNDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sU0FBUyxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNibEcsc0NBQW1DO0lBQ2pDLFlBQ0Y7O0lBQUEsaUJBQWlCOzs7SUFEZixlQUNGO0lBREUsdUlBQ0Y7OztJQWVZLDZCQUFxRDtJQUNuRCw4QkFBa0I7SUFDaEIseUJBQUc7SUFBQSxZQUE0Qjs7SUFBQSxpQkFBSTtJQUNyQyxpQkFBTTtJQUNOLDhCQUFjO0lBQ1osWUFDRjtJQUFBLGlCQUFNO0lBQ1IsMEJBQWU7OztJQUxSLGVBQTRCO0lBQTVCLGtFQUE0QjtJQUcvQixlQUNGO0lBREUsbURBQ0Y7OztJQUdGLDJCQUEyQztJQUN6Qyx1Q0FJb0I7SUFDdEIsaUJBQU07OztJQUpGLGVBQTBDO0lBQTFD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QkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxXQUFXLEVBQUUsdUNBQXVDO2dCQUNwRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQzthQUNyRDtrVUFFVSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxLQUFLO2tCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHtcbiAgUmVzdEZpZWxkLFxuICBSRVNUX0ZJRUxEX1RZUEVTLFxuICBQRVJNSVNTSU9OLFxufSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBOYkRpYWxvZ1NlcnZpY2UsIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlciB9IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IFJlc3RMYW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHVybFRvRmlsZSBmcm9tICcuLi8uLi8uLi91dGlscy8nO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHVybFRvRmlsZSBmcm9tICcuLi8uLi8uLi91dGlscy91cmxUb0ZpbGUnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJlc291cmNlOiBSZXN0UmVzb3VyY2U7XG4gIEBJbnB1dCgpIElEOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc3NvdXJjZU5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY29udGFpbmVyOiBCb29sZWFuO1xuICBASW5wdXQoKSBzdHlsZTogYW55O1xuICBkYXRhczogYW55W107XG4gIGRhdGFzMTogYW55W11bXTtcbiAgZW50aXR5SWQ6IG51bWJlcjtcbiAgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuXG4gIGN1c3RvbUNvbHVtbiA9ICduYW1lJztcbiAgYWxsQ29sdW1ucyA9IFt0aGlzLmN1c3RvbUNvbHVtbl07XG4gIGxpc3REYXRhU291cmNlOiBhbnkgPSB7fTtcbiAgaXNUYWJzTWVudSA9IGZhbHNlO1xuICB0YWJzTmFtZSA9IFtdO1xuICBmaWxlc1VwbG9hZCA9IHt9O1xuXG4gIHBlcm1pc3Npb25zID0gW1xuICAgIFBFUk1JU1NJT04uQ1JFQVRFLFxuICAgIFBFUk1JU1NJT04uVVBEQVRFLFxuICAgIFBFUk1JU1NJT04uREVMRVRFLFxuICAgIFBFUk1JU1NJT04uUkVBRCxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0OiBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbkNvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxhbnk+LFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBQRVJNSVNTSU9OKCkge1xuICAgIHJldHVybiBQRVJNSVNTSU9OO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgbGV0IGlkO1xuICAgIGlmICh0aGlzLklEKSB7XG4gICAgICBpZCA9IHRoaXMuSUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5sZW5ndGggLSAyXG4gICAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuICAgIH1cbiAgICB0aGlzLmVudGl0eUlkID0gcGFyc2VJbnQoaWQpO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcnLCB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZyk7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnkpIHtcbiAgICAgIC8vIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnF1ZXJ5UGFyYW1zLmZpZWxkRm9yTmV4dFF1ZXJ5XG4gICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeS5hcGkuc3Vic3RyaW5nKFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnlcbiAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgPyB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsID0ge307XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeS5maWVsZEZvck5leHRRdWVyeS5mb3JFYWNoKFxuICAgICAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgdmFsW2l0ZW1dID0gXy5nZXQocmVzcCwgaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnkucXVlcnlQYXJhbXNDb21wbGV0ZS5mb3JFYWNoKFxuICAgICAgICAgICAgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuaXNQcmVwYXJlZFN0YXRlbWVudCkge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tlbGVtZW50LmxhYmVsXSA9IHZhbFtlbGVtZW50LnZhbHVlXTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbZWxlbWVudC5sYWJlbF0gPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAuZ2V0T25lUmVzb3VyY2UoXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhcGk6IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLmFwaSxcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogcGFyYW1zLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcblxuICAgICAgICAgICAgICB0aGlzLmVudGl0eUlkID0gcmVzcG9uc2UuaWQ7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnICYmXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZy5sZW5ndGggPiAxXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNUYWJzTWVudSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy50YWJzTmFtZS5wdXNoKHRhYi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgdGFiLmRhdGFzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2ggPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4gZmllbGQubGFiZWwgPT09IGVsdFxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzcG9uc2Vbc2VhcmNoLmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qUHJlbWllciBjYXMgc2kgbGVzIGNvbmZpZ3Mgb250IGV0ZSBkZWZpbmlzIGRhbnMgbGUgbGlzdENvbmZpZyBldCByaWVuIGRhbnMgbGUgZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgUHJlbWllciBjYXMgc2kgbGVzIGNvbmZpZ3Mgb250IGV0ZSBkZWZpbmlzIGRhbnMgbGUgbGlzdENvbmZpZyBldCByaWVuIGRhbnMgbGUgZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgb24gY29uc2lkZXJlIHF1ZSBsZXMgY29uZmlncyBzb250IGxlcyBtZW1lc1xuICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICF0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJYYSBtZSBjb25jZXJuZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFtzZWFyY2gubmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0Q29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c0JlbG9uZ1RvTWFueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE86XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0ID0gdGhpcy5nZXRCZWxvbmdUb1NlY29uZEZpZWxkKHNlYXJjaCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0RmllbGQ6IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBgJHtkYXR9ICgke3Jlc3BvbnNlW3NlYXJjaC5sYWJlbF19KWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbklkOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVubXNbdGFiLm5hbWVdID0gdGVtcDtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMgPSBjb2x1bm1zO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMxID0gY29sdW5tcztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbHQudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE8pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdCA9IHRoaXMuZ2V0QmVsb25nVG9TZWNvbmRGaWVsZChlbHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtlbHQubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25JZDogcmVzcG9uc2VbZWx0LmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmRhdGFzKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5saXN0Q29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc291cmNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NCZWxvbmdUb01hbnkpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgLmdldE9uZVJlc291cmNlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcuYXBpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWRcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG5cbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gcmVzcG9uc2UuaWQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZyAmJlxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZy5sZW5ndGggPiAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFic01lbnUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRhYnNOYW1lLnB1c2godGFiLm5hbWUpO1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge307XG5cbiAgICAgICAgICAgICAgdGFiLmRhdGFzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkLmxhYmVsID09PSBlbHRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgICAgICAgICAgICAgIC8qUHJlbWllciBjYXMgc2kgbGVzIGNvbmZpZ3Mgb250IGV0ZSBkZWZpbmlzIGRhbnMgbGUgbGlzdENvbmZpZyBldCByaWVuIGRhbnMgbGUgZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIFByZW1pZXIgY2FzIHNpIGxlcyBjb25maWdzIG9udCBldGUgZGVmaW5pcyBkYW5zIGxlIGxpc3RDb25maWcgZXQgcmllbiBkYW5zIGxlIGRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBvbiBjb25zaWRlcmUgcXVlIGxlcyBjb25maWdzIHNvbnQgbGVzIG1lbWVzXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgIXRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWGEgbWUgY29uY2VybmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFtzZWFyY2gubmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/Lmxpc3RDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE86XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoc2VhcmNoLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtzZWFyY2gubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbklkOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB1cmxUb0ZpbGUoXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Vbc2VhcmNoLmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgJ3BkZidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1VwbG9hZFtzZWFyY2gubGFiZWxdID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sdW5tc1t0YWIubmFtZV0gPSB0ZW1wO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICB0aGlzLmRhdGFzMSA9IGNvbHVubXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWx0LnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdCA9IHRoaXMuZ2V0QmVsb25nVG9TZWNvbmRGaWVsZChlbHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtlbHQubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbklkOiByZXNwb25zZVtlbHQubGFiZWxdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY29sdW5tcztcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5kYXRhcykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFtdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5yZXNvdXJjZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMuc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c0JlbG9uZ1RvTWFueSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgIGFwaTogcGVybWlzc2lvbi5maWVsZEtleS5hcGkuc3Vic3RyaW5nKDEpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgPyBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlZGl0RW50aXR5KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1lZGl0YCwgdGhpcy5lbnRpdHlJZF0pO1xuICB9XG5cbiAgbGlzdEVudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWxpc3RgKTtcbiAgfVxuXG4gIGRlbGV0ZUVudGl0eSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHsgaWQ6IHRoaXMuZW50aXR5SWQgfSxcbiAgICAgICAgdGl0bGU6ICdTVVBQUkVTU0lPTicsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWxpc3RgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgLy9JbWFnZSBpbnB1dFxuICBvblNlbGVjdChldmVudCkge31cblxuICBvblJlbW92ZShmaWVsZCkge31cblxuICBsb2FkQmVsb25nVG9EZXRhaWwoZGF0YSkge1xuICAgIGNvbnN0IHJlc291cmNlTmFtZSA9XG4gICAgICBkYXRhLnJlc3RGaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnJlc291cmNlTmFtZTtcblxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2FkbWluLyR7cmVzb3VyY2VOYW1lfS1kZXRhaWxgLCBkYXRhLm5hdmlnYXRpb25JZF0pO1xuICB9XG5cbiAgaXNPYmplY3QgPSAoYSkgPT4ge1xuICAgIGxldCBpc09iamVjdCA9IGZhbHNlO1xuICAgIGlmIChhLm1ldGFEYXRhKSBpc09iamVjdCA9IHRydWU7XG4gICAgaWYgKGEudHlwZSkgaXNPYmplY3QgPSB0cnVlO1xuICAgIGlmIChhLnRlbXBsYXRlKSBpc09iamVjdCA9IHRydWU7XG4gICAgaWYgKGEuaW5Gb3JtKSBpc09iamVjdCA9IHRydWU7XG5cbiAgICByZXR1cm4gaXNPYmplY3Q7XG4gIH07XG5cbiAgaXNBcnJheSA9IChhKSA9PiB7XG4gICAgcmV0dXJuICEhYSAmJiBhLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbiAgfTtcblxuICBnZXRCZWxvbmdUb1NlY29uZEZpZWxkID0gKGVsdCwgcmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBiZWxvbmdWYWwgPVxuICAgICAgYCR7ZWx0Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8ucmVzb3VyY2VOYW1lfS4ke2VsdC5tZXRhRGF0YT8uYmVsb25nVG9TZWNvbmRGaWVsZExhYmVsfWAuc3BsaXQoXG4gICAgICAgICcuJ1xuICAgICAgKTtcbiAgICBsZXQgZGF0ID0gcmVzcG9uc2U7XG4gICAgaWYgKGJlbG9uZ1ZhbCAmJiBiZWxvbmdWYWw/Lmxlbmd0aCA+IDApIHtcbiAgICAgIGJlbG9uZ1ZhbC5mb3JFYWNoKCh2YWwpID0+IHtcbiAgICAgICAgaWYgKGRhdFt2YWxdKSB7XG4gICAgICAgICAgZGF0ID0gZGF0W3ZhbF07XG4gICAgICAgIH0gZWxzZSBkYXQgPSAnJztcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXQgPSAnJztcbiAgICB9XG4gICAgcmV0dXJuIGRhdDtcbiAgfTtcblxuICBqc29uVmFsdWUgPSAodmFsOiBhbnkpOiBhbnkgPT4ge1xuICAgIGxldCBfanNvblZhbHVlOiBhbnk7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKCF2YWwgfHwgIXZhbC5yZXN0RmllbGQgfHwgIXZhbC5kYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyByZXF1aXJlZCBkYXRhIHByb3BlcnRpZXMnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbC5yZXN0RmllbGQuaTE4biA9PT0gdHJ1ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbC5kYXRhID09PSAnc3RyaW5nJyAmJiB2YWwuZGF0YVswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkRGF0YSA9IEpTT04ucGFyc2UodmFsLmRhdGEpO1xuICAgICAgICAgIGlmIChwYXJzZWREYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdKSB7XG4gICAgICAgICAgICBfanNvblZhbHVlID0gcGFyc2VkRGF0YVt0aGlzLmxhbmdTZXJ2aWNlLnNlbGVjdGVkXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGkxOG4gbGFuZ3VhZ2Ugc2VsZWN0ZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgdHlwZW9mIHZhbC5kYXRhID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgIHZhbC5kYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdXG4gICAgICAgICkge1xuICAgICAgICAgIF9qc29uVmFsdWUgPSB2YWwuZGF0YVt0aGlzLmxhbmdTZXJ2aWNlLnNlbGVjdGVkXTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsLmRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgX2pzb25WYWx1ZSA9IHZhbC5kYXRhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkYXRhIGZvcm1hdCBmb3IgaTE4biBmaWVsZCcpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfanNvblZhbHVlID0gdmFsLmRhdGE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgX2pzb25WYWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgX2pzb25WYWx1ZSA9IEpTT04uc3RyaW5naWZ5KF9qc29uVmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gY29uc29sZS5sb2coYEVycm9yIG9jY3VycmVkIGluIGpzb25WYWx1ZTogJHtlcnJ9YCk7XG4gICAgICBfanNvblZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsLmRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiBfanNvblZhbHVlO1xuICB9O1xuXG4gIHNhbml0aXplclVybCA9IChsaW5rKSA9PiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwobGluayk7XG59XG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoIDw9IDBcIj5cbiAgPG5iLWNhcmQgW3N0eWxlXT1cInN0eWxlID8gc3R5bGUgOiAnJ1wiPlxuICAgIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cIiFjb250YWluZXJcIj5cbiAgICAgIHt7IHJlc291cmNlLmRldGFpbENvbmZpZz8udGl0bGUgfCB0aXRsZWNhc2UgfX1cbiAgICA8L25iLWNhcmQtaGVhZGVyPlxuICAgIDxuYi1jYXJkLWJvZHk+XG4gICAgICA8bmItbGlzdCAqbmdJZj1cIiFpc1RhYnNNZW51OyBlbHNlIHRhYnNDb250ZW50XCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgIDxuYi1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YXMgfCBrZXl2YWx1ZVwiPlxuICAgICAgICAgIDwhLS0gY2xhc3M9XCJyZXN0LWl0ZW0tYWxpZ24gbGlzdC1ncm91cC1pdGVtXCIgLS0+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImQtYmxvY2tcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRFWFQgfHxcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHxcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBERlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZSAoY2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVtb3ZhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZShmaWxlc1VwbG9hZFtpdGVtLmtleV0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtPy52YWx1ZT8uZGF0YSB9fSAoe3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSk8L25neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBjb2xvci1jYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj57eyBpdGVtLnZhbHVlLmRhdGEgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSlNPTlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGpzb25WYWx1ZShpdGVtLnZhbHVlKSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cImpzb25WYWx1ZShpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgID48L25iLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlc3QtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwic3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB8IGRhdGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRCZWxvbmdUb0RldGFpbChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtZGV0YWlsLmJlbG9uZ1RvUmVmJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJlbG9uZ1RvLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwhLS0gQ0FTIDEgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIENBUyAyIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhczIxXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXM/LnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXM/LnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2FzMjE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzIG9mIGxpc3REYXRhU291cmNlW2l0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW0lEXT1cInJlcy5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmVzc291cmNlTmFtZV09XCJyZXMucmVzb3VyY2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwicmVzLnN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkxJTktcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnZhbHVlLmRhdGFcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInNhbml0aXplclVybChpdGVtLnZhbHVlLmRhdGEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWc/LmxpbmtDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlua0NvbmZpZy5kaXNhYmxlZElmcmFtZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxuICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgbWwtMjAgbXQtM1wiPnt7XG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlXG4gICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmItbGlzdC1pdGVtPlxuICAgICAgPC9uYi1saXN0PlxuICAgICAgPG5nLXRlbXBsYXRlICN0YWJzQ29udGVudD5cbiAgICAgICAgPG5iLXRhYnNldCBmdWxsV2lkdGg+XG4gICAgICAgICAgPG5iLXRhYiBbdGFiVGl0bGVdPVwidGFic1wiICpuZ0Zvcj1cImxldCB0YWJzIG9mIHRhYnNOYW1lXCI+XG4gICAgICAgICAgICA8bmItbGlzdCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPG5iLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhczFbdGFic10gfCBrZXl2YWx1ZVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gY2xhc3M9XCJyZXN0LWl0ZW0tYWxpZ24gbGlzdC1ncm91cC1pdGVtXCIgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtYmxvY2tcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRFWFQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0NXB4OyB3aWR0aDogODBweDsgbWFyZ2luLWxlZnQ6IDVweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU5cbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uYi1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJlc3QtaW1nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwic3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA+aHR0cDovL2xvY2FsaG9zdDo0MjAwL2FkbWluL2FnZW5jeS1saXN0XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sganNvblZhbHVlKGl0ZW0udmFsdWUpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIHwgZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2FkQmVsb25nVG9EZXRhaWwoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iVG9vbHRpcD1cInt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdC1kZXRhaWwuYmVsb25nVG9SZWYnIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iVG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZWxvbmdUby1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgW25iVHJlZUdyaWRdPVwibGlzdERhdGFTb3VyY2VbaXRlbS5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGRpc3BsYXlSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNwbGF5UmVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyBvZiBsaXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVzb3VyY2VdPVwicmVzLnJlc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtJRF09XCJyZXMuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInJlcy5zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgW25iVHJlZUdyaWRdPVwibGlzdERhdGFTb3VyY2VbaXRlbS5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cIml0ZW0udmFsdWUuZGF0YVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmxpbmtDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlua0NvbmZpZy5kaXNhYmxlZElmcmFtZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgbWwtMjAgbXQtM1wiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlXG4gICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmItbGlzdC1pdGVtPlxuICAgICAgICAgICAgPC9uYi1saXN0PlxuICAgICAgICAgIDwvbmItdGFiPlxuICAgICAgICA8L25iLXRhYnNldD5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPC9uYi1jYXJkLWJvZHk+XG5cbiAgICA8bmItY2FyZC1mb290ZXIgKm5nSWY9XCJkYXRhcyAmJiAhY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1yb3cgdGV4dC1jZW50ZXJcIiBmdWxsV2lkdGg+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIHN0YXR1cz1cInNlY29uZGFyeVwiXG4gICAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIlxuICAgICAgICAgIChjbGljayk9XCJsaXN0RW50aXR5KClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5DYW5jZWxcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIHN0YXR1cz1cInByaW1hcnlcIiAoY2xpY2spPVwiZWRpdEVudGl0eSgpXCI+XG4gICAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5FZGl0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4XCJcbiAgICAgICAgICAoY2xpY2spPVwiZGVsZXRlRW50aXR5KClcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5EZWxldGVcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmItY2FyZC1mb290ZXI+XG4gIDwvbmItY2FyZD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICA8ZGl2ICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLlJFQURcIj5cbiAgICA8bmItY2FyZCBbc3R5bGVdPVwic3R5bGUgPyBzdHlsZSA6ICcnXCI+XG4gICAgICA8bmItY2FyZC1oZWFkZXIgKm5nSWY9XCIhY29udGFpbmVyXCI+XG4gICAgICAgIHt7IHJlc291cmNlLmRldGFpbENvbmZpZz8udGl0bGUgfCB0aXRsZWNhc2UgfX1cbiAgICAgIDwvbmItY2FyZC1oZWFkZXI+XG4gICAgICA8bmItY2FyZC1ib2R5PlxuICAgICAgICA8bmItbGlzdCAqbmdJZj1cIiFpc1RhYnNNZW51OyBlbHNlIHRhYnNDb250ZW50XCIgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgPG5iLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhcyB8IGtleXZhbHVlXCI+XG4gICAgICAgICAgICA8IS0tIGNsYXNzPVwicmVzdC1pdGVtLWFsaWduIGxpc3QtZ3JvdXAtaXRlbVwiIC0tPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtYmxvY2tcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HIHx8XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBERlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUgKGNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoZmlsZXNVcGxvYWRbaXRlbS5rZXldKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgaXRlbT8udmFsdWU/LmRhdGEgfX0gKHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGRmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KTwvbmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBjb2xvci1jYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj57eyBpdGVtLnZhbHVlLmRhdGEgfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSlNPTlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sganNvblZhbHVlKGl0ZW0udmFsdWUpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uYi1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVzdC1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB8IGRhdGUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2FkQmVsb25nVG9EZXRhaWwoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3sgJ3Jlc3QtZGV0YWlsLmJlbG9uZ1RvUmVmJyB8IHRyYW5zbGF0ZSB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZWxvbmdUby1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPCEtLSBDQVMgMSAtLT5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBDQVMgMiAtLT5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhczIxXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzPy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcz8udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYXMyMT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyBvZiBsaXN0RGF0YVNvdXJjZVtpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbSURdPVwicmVzLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJyZXMuc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5MSU5LXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnZhbHVlLmRhdGFcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmxpbmtDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmxpbmtDb25maWcuZGlzYWJsZWRJZnJhbWVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZCBtbC0yMCBtdC0zXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubm90ZVxuICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgICAgIDwvbmItbGlzdD5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN0YWJzQ29udGVudD5cbiAgICAgICAgICA8bmItdGFic2V0IGZ1bGxXaWR0aD5cbiAgICAgICAgICAgIDxuYi10YWIgW3RhYlRpdGxlXT1cInRhYnNcIiAqbmdGb3I9XCJsZXQgdGFicyBvZiB0YWJzTmFtZVwiPlxuICAgICAgICAgICAgICA8bmItbGlzdCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICA8bmItbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzMVt0YWJzXSB8IGtleXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICA8IS0tIGNsYXNzPVwicmVzdC1pdGVtLWFsaWduIGxpc3QtZ3JvdXAtaXRlbVwiIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtYmxvY2tcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxNXB4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDVweDsgd2lkdGg6IDgwcHg7IG1hcmdpbi1sZWZ0OiA1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1jaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uYi1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmVzdC1pbWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJzdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGpzb25WYWx1ZShpdGVtLnZhbHVlKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cImpzb25WYWx1ZShpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIHwgZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgICBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJsb2FkQmVsb25nVG9EZXRhaWwoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3QtZGV0YWlsLmJlbG9uZ1RvUmVmJyB8IHRyYW5zbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmVsb25nVG8tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGRpc3BsYXlSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNwbGF5UmVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzIG9mIGxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbSURdPVwicmVzLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJyZXMuc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnZhbHVlLmRhdGFcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmxpbmtDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LmxpbmtDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRpc2FibGVkSWZyYW1lUHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjQwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2lmcmFtZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlICE9ICcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgbWwtMjAgbXQtM1wiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmItbGlzdC1pdGVtPlxuICAgICAgICAgICAgICA8L25iLWxpc3Q+XG4gICAgICAgICAgICA8L25iLXRhYj5cbiAgICAgICAgICA8L25iLXRhYnNldD5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvbmItY2FyZC1ib2R5PlxuXG4gICAgICA8bmItY2FyZC1mb290ZXIgKm5nSWY9XCJkYXRhcyAmJiAhY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLXJvdyB0ZXh0LWNlbnRlclwiIGZ1bGxXaWR0aD5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgc3RhdHVzPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCJcbiAgICAgICAgICAgIChjbGljayk9XCJsaXN0RW50aXR5KClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IFwicmVzdC1kZXRhaWwuYnRuQ2FuY2VsXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIChjbGljayk9XCJlZGl0RW50aXR5KClcIlxuICAgICAgICAgICAgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uVVBEQVRFXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkVkaXRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAxMHB4XCJcbiAgICAgICAgICAgIChjbGljayk9XCJkZWxldGVFbnRpdHkoKVwiXG4gICAgICAgICAgICAqbmd4UGVybWlzc2lvbnNPbmx5PVwiUEVSTUlTU0lPTi5ERUxFVEVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt7IFwicmVzdC1kZXRhaWwuYnRuRGVsZXRlXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25iLWNhcmQtZm9vdGVyPlxuICAgIDwvbmItY2FyZD5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==