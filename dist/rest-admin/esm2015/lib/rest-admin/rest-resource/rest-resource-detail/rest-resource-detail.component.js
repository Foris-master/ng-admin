import { Component, Input, } from '@angular/core';
import { REST_FIELD_TYPES, PERMISSION, } from '../models/rest-resource.model';
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
import * as i7 from "@angular/cdk/overlay";
import * as i8 from "ngx-permissions";
import * as i9 from "@angular/common";
import * as i10 from "@codehint-ng/html-compiler";
import * as i11 from "ngx-dropzone";
import * as i12 from "../components/fs-icon-ccomponent/image-zoom.component";
import * as i13 from "../components/fs-icon-ccomponent/fs-icon.component";
import * as i14 from "@ngx-translate/core";
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
    i0.ɵɵelement(6, "ngx-image-zoom", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r8.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("imageUrl", item_r8.value.data);
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
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 4, "ng-container", 0);
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
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_iframe_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 31);
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r128 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("src", ctx_r128.sanitizerUrl(item_r8.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_iframe_1_Template, 1, 1, "iframe", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.linkConfig) ? !(item_r8.value.restField == null ? null : item_r8.value.restField.metaData == null ? null : item_r8.value.restField.metaData.detailConfig == null ? null : item_r8.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_Template, 2, 1, "div", 28);
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
    i0.ɵɵproperty("ngIf", item_r8.value.data);
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
    i0.ɵɵelementStart(1, "span", 32);
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
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r138.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
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
    i0.ɵɵelement(7, "input", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r138.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r138.value.data)("value", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
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
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r138.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
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
    i0.ɵɵelement(6, "ngx-image-zoom", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("imageUrl", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵtext(2, "http://localhost:4200/admin/agency-list ");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
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
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r170 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r170.jsonValue(item_r138.value), " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r171 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", ctx_r171.jsonValue(item_r138.value));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
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
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r138.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r184); const item_r138 = i0.ɵɵnextContext(2).$implicit; const ctx_r182 = i0.ɵɵnextContext(4); return ctx_r182.loadBelongToDetail(item_r138.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r138.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r138.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
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
    const row_r193 = i0.ɵɵnextContext().$implicit;
    const ctx_r194 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r193.data[ctx_r194.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r138.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r193 = i0.ɵɵnextContext(2).$implicit;
    const item_r138 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r193.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r193 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r193.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r193.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r193 = ctx.$implicit;
    const item_r138 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r193.expanded)("place", row_r193.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.listConfig == null ? null : item_r138.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.listConfig == null ? null : item_r138.value.restField.metaData.listConfig.restManyResources.template);
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
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r188 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r188.listDataSource[item_r138.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r188.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r188.customColumn);
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
    const row_r211 = i0.ɵɵnextContext().$implicit;
    const ctx_r212 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r211.data[ctx_r212.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r138.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r211 = i0.ɵɵnextContext(2).$implicit;
    const item_r138 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r211.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r211 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r211.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r211.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r211 = ctx.$implicit;
    const item_r138 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r211.expanded)("place", row_r211.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.restManyResources.template);
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
    const item_r138 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r205 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r205.listDataSource[item_r138.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r205.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r205.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r224 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r224.style);
    i0.ɵɵproperty("resource", res_r224.resource)("ID", res_r224.id)("ressourceName", res_r224.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r207 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r207.listDataSource[item_r138.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r206 = i0.ɵɵreference(3);
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r189 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r189.isObject(item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r206);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.listConfig == null ? null : item_r138.value.restField.metaData.listConfig.restManyResources) && !(item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.restManyResources);
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
    const row_r231 = i0.ɵɵnextContext().$implicit;
    const ctx_r232 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r231.data[ctx_r232.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r138.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r231 = i0.ɵɵnextContext(2).$implicit;
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r231.data.item);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r231 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r231.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r231.data.place);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r231 = ctx.$implicit;
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r231.expanded)("place", row_r231.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.metaData.listConfig.restBelongToManyResources.template);
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
    const item_r138 = i0.ɵɵnextContext().$implicit;
    const ctx_r147 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r147.listDataSource[item_r138.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r147.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r147.customColumn);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_iframe_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 31);
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r246 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", ctx_r246.sanitizerUrl(item_r138.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_iframe_1_Template, 1, 1, "iframe", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.linkConfig) ? !(item_r138.value.restField == null ? null : item_r138.value.restField.metaData == null ? null : item_r138.value.restField.metaData.detailConfig == null ? null : item_r138.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_Template, 2, 1, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r138.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r138.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r138.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r138.value.restField.template)("componentClass", item_r138.value.data);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r138.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r138 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r138.value.restField.note);
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
    const item_r138 = ctx.$implicit;
    const ctx_r137 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.TEXT || item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.STRING || item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.NUMBER || item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.type == ctx_r137.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r138.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 35);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r136 = ctx.$implicit;
    const ctx_r135 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tabTitle", tabs_r136);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r135.datas1[tabs_r136]));
} }
function RestResourceDetailComponent_ng_container_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 33);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_0_ng_template_5_nb_tab_1_Template, 4, 4, "nb-tab", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r5.tabsName);
} }
function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template(rf, ctx) { if (rf & 1) {
    const _r254 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 38);
    i0.ɵɵelementStart(2, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r254); const ctx_r253 = i0.ɵɵnextContext(2); return ctx_r253.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 40);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r254); const ctx_r255 = i0.ɵɵnextContext(2); return ctx_r255.editEntity(); });
    i0.ɵɵtext(6);
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 41);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_0_nb_card_footer_7_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r254); const ctx_r256 = i0.ɵɵnextContext(2); return ctx_r256.deleteEntity(); });
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
    const ctx_r258 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, ctx_r258.resource.detailConfig == null ? null : ctx_r258.resource.detailConfig.title), " ");
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r264.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r286 = i0.ɵɵgetCurrentView();
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
    i0.ɵɵlistener("change", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_change_8_listener($event) { i0.ɵɵrestoreView(_r286); const ctx_r285 = i0.ɵɵnextContext(7); return ctx_r285.onSelect($event); });
    i0.ɵɵelementStart(9, "ngx-dropzone-preview", 11);
    i0.ɵɵlistener("removed", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_ng_container_5_Template_ngx_dropzone_preview_removed_9_listener() { i0.ɵɵrestoreView(_r286); const item_r264 = i0.ɵɵnextContext(3).$implicit; const ctx_r287 = i0.ɵɵnextContext(4); return ctx_r287.onRemove(ctx_r287.filesUpload[item_r264.key]); });
    i0.ɵɵelementStart(10, "ngx-dropzone-label");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r264.value.data, " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", item_r264 == null ? null : item_r264.value == null ? null : item_r264.value.data, " (", "pdf", ")");
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r264.key), ": ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r283 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", ctx_r283.jsonValue(item_r264.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 5, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r264.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", item_r264.value.data);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_ng_container_1_Template, 10, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_5_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r298 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r298.jsonValue(item_r264.value), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r299 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", ctx_r299.jsonValue(item_r264.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r264.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
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
    i0.ɵɵelement(6, "ngx-image-zoom", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("imageUrl", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r264.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r322 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r322); const item_r264 = i0.ɵɵnextContext(2).$implicit; const ctx_r320 = i0.ɵɵnextContext(4); return ctx_r320.loadBelongToDetail(item_r264.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r264.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r264.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_10_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
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
    const row_r331 = i0.ɵɵnextContext().$implicit;
    const ctx_r332 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r331.data[ctx_r332.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r264.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r331 = i0.ɵɵnextContext(2).$implicit;
    const item_r264 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r331.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r331 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r331.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r331.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r331 = ctx.$implicit;
    const item_r264 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r331.expanded)("place", row_r331.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.listConfig == null ? null : item_r264.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.listConfig == null ? null : item_r264.value.restField.metaData.listConfig.restManyResources.template);
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
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r326 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r326.listDataSource[item_r264.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r326.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r326.customColumn);
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
    const row_r349 = i0.ɵɵnextContext().$implicit;
    const ctx_r350 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r349.data[ctx_r350.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r264.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r349 = i0.ɵɵnextContext(2).$implicit;
    const item_r264 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r349.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r349 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r349.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r349.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r349 = ctx.$implicit;
    const item_r264 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r349.expanded)("place", row_r349.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r264.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r264.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.metaData.detailConfig.restManyResources == null ? null : item_r264.value.restField.metaData.detailConfig.restManyResources.template);
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
    const item_r264 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r343 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r343.listDataSource[item_r264.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r343.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r343.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r362 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r362.style);
    i0.ɵɵproperty("resource", res_r362.resource)("ID", res_r362.id)("ressourceName", res_r362.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r345 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngForOf", ctx_r345.listDataSource[item_r264.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_div_1_Template, 5, 3, "div", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 24, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r344 = i0.ɵɵreference(3);
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r327 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r327.isObject(item_r264.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r344);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_11_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.listConfig == null ? null : item_r264.value.restField.metaData.listConfig.restManyResources) && !(item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.detailConfig == null ? null : item_r264.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.detailConfig == null ? null : item_r264.value.restField.metaData.detailConfig.restManyResources);
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
    const row_r369 = i0.ɵɵnextContext().$implicit;
    const ctx_r370 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r369.data[ctx_r370.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r264.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r369 = i0.ɵɵnextContext(2).$implicit;
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r369.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r369 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r369.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r369.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_12_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r369 = ctx.$implicit;
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r369.expanded)("place", row_r369.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.metaData.listConfig.restBelongToManyResources.template);
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
    const item_r264 = i0.ɵɵnextContext().$implicit;
    const ctx_r274 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r274.listDataSource[item_r264.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r274.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r274.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_iframe_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 31);
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r384 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", ctx_r384.sanitizerUrl(item_r264.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_iframe_1_Template, 1, 1, "iframe", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.detailConfig == null ? null : item_r264.value.restField.metaData.detailConfig.linkConfig) ? !(item_r264.value.restField == null ? null : item_r264.value.restField.metaData == null ? null : item_r264.value.restField.metaData.detailConfig == null ? null : item_r264.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_div_8_Template, 2, 1, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r264.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r264.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r264.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r264.value.restField.template)("componentClass", item_r264.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_13_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r264.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r264 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r264.value.restField.note);
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
    const item_r264 = ctx.$implicit;
    const ctx_r263 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.TEXT || item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.STRING || item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.NUMBER || item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.type == ctx_r263.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r264.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-list", 3);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_nb_list_4_nb_list_item_1_Template, 16, 12, "nb-list-item", 4);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r259 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r259.datas));
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
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r394.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_3_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
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
    i0.ɵɵelement(7, "input", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", item_r394.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", item_r394.value.data)("value", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_4_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
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
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("checked", item_r394.value.data)("disabled", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_1_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
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
    i0.ɵɵelement(6, "ngx-image-zoom", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("imageUrl", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
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
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r426 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", ctx_r426.jsonValue(item_r394.value), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r427 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", ctx_r427.jsonValue(item_r394.value));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_1_Template, 7, 4, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
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
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 2, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(7, 4, item_r394.value.data), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_1_Template, 8, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r440 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "b");
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 7);
    i0.ɵɵelementStart(6, "a", 15);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template_a_click_6_listener() { i0.ɵɵrestoreView(_r440); const item_r394 = i0.ɵɵnextContext(2).$implicit; const ctx_r438 = i0.ɵɵnextContext(5); return ctx_r438.loadBelongToDetail(item_r394.value); });
    i0.ɵɵpipe(7, "translate");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 3, item_r394.value.restField.label), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("nbTooltip", i0.ɵɵpipeBind1(7, 5, "rest-detail.belongToRef"));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", item_r394.value.data, " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_1_Template, 9, 7, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_9_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
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
    const row_r449 = i0.ɵɵnextContext().$implicit;
    const ctx_r450 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r449.data[ctx_r450.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(5).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r394.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r449 = i0.ɵɵnextContext(2).$implicit;
    const item_r394 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r449.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r449 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r449.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r449.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r449 = ctx.$implicit;
    const item_r394 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r449.expanded)("place", row_r449.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.listConfig == null ? null : item_r394.value.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.listConfig == null ? null : item_r394.value.restField.metaData.listConfig.restManyResources.template);
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
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r444 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r444.listDataSource[item_r394.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r444.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r444.customColumn);
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
    const row_r467 = i0.ɵɵnextContext().$implicit;
    const ctx_r468 = i0.ɵɵnextContext(9);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r467.data[ctx_r468.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(6).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r394.value.restField.name, "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r467 = i0.ɵɵnextContext(2).$implicit;
    const item_r394 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.metaData.detailConfig.restManyResources.template)("componentClass", row_r467.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r467 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r467.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r467.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r467 = ctx.$implicit;
    const item_r394 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r467.expanded)("place", row_r467.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.restManyResources.template);
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
    const item_r394 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r461 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r461.listDataSource[item_r394.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r461.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r461.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "ngx-rest-resource-detail", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const res_r480 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(res_r480.style);
    i0.ɵɵproperty("resource", res_r480.resource)("ID", res_r480.id)("ressourceName", res_r480.resourceName)("container", true);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_div_0_Template, 2, 6, "div", 25);
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r463 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngForOf", ctx_r463.listDataSource[item_r394.value.restField.name]);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 23);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_ng_template_2_Template, 1, 1, "ng-template", null, 37, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r462 = i0.ɵɵreference(3);
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r445 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r445.isObject(item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.restManyResources))("ngIfElse", _r462);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_1_Template, 5, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_10_ng_container_2_Template, 4, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.listConfig == null ? null : item_r394.value.restField.metaData.listConfig.restManyResources) && !(item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.restManyResources));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.restManyResources);
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
    const row_r487 = i0.ɵɵnextContext().$implicit;
    const ctx_r488 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", row_r487.data[ctx_r488.customColumn], "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(4).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r394.value.restField.name);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r487 = i0.ɵɵnextContext(2).$implicit;
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r487.data.item);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r487 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r487.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r487.data.place);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 21);
    i0.ɵɵelement(1, "ngx-fs-icon", 22);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_2_Template, 3, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_11_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r487 = ctx.$implicit;
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r487.expanded)("place", row_r487.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.metaData.listConfig.restBelongToManyResources.template);
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
    const item_r394 = i0.ɵɵnextContext().$implicit;
    const ctx_r403 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r403.listDataSource[item_r394.key]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r403.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r403.customColumn);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_iframe_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "iframe", 31);
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r502 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("src", ctx_r502.sanitizerUrl(item_r394.value.data), i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_iframe_1_Template, 1, 1, "iframe", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.linkConfig) ? !(item_r394.value.restField == null ? null : item_r394.value.restField.metaData == null ? null : item_r394.value.restField.metaData.detailConfig == null ? null : item_r394.value.restField.metaData.detailConfig.linkConfig.disabledIframePreview) : true);
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
    i0.ɵɵtemplate(8, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_div_8_Template, 2, 1, "div", 28);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", i0.ɵɵpipeBind1(4, 4, item_r394.key), ": ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("href", item_r394.value.data, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", item_r394.value.data, " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "cng-html-compiler", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", item_r394.value.restField.template)("componentClass", item_r394.value.data);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_ng_container_1_Template, 9, 6, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_12_div_2_Template, 2, 2, "div", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !item_r394.value.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.template);
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 32);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r394 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r394.value.restField.note);
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
    const item_r394 = ctx.$implicit;
    const ctx_r393 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.TEXT || item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.STRING || item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.NUMBER || item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.type == ctx_r393.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r394.value.restField.note != "");
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tab", 35);
    i0.ɵɵelementStart(1, "nb-list", 3);
    i0.ɵɵtemplate(2, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_nb_list_item_2_Template, 15, 11, "nb-list-item", 4);
    i0.ɵɵpipe(3, "keyvalue");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const tabs_r392 = ctx.$implicit;
    const ctx_r391 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tabTitle", tabs_r392);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r391.datas1[tabs_r392]));
} }
function RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-tabset", 33);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_ng_template_5_nb_tab_1_Template, 4, 4, "nb-tab", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r261 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r261.tabsName);
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r512 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r512); const ctx_r511 = i0.ɵɵnextContext(4); return ctx_r511.editEntity(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "rest-detail.btnEdit"), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r514 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r514); const ctx_r513 = i0.ɵɵnextContext(4); return ctx_r513.deleteEntity(); });
    i0.ɵɵtext(1);
    i0.ɵɵpipe(2, "translate");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(2, 1, "rest-detail.btnDelete"), " ");
} }
function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template(rf, ctx) { if (rf & 1) {
    const _r516 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-card-footer");
    i0.ɵɵelementStart(1, "div", 38);
    i0.ɵɵelementStart(2, "button", 39);
    i0.ɵɵlistener("click", function RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r516); const ctx_r515 = i0.ɵɵnextContext(3); return ctx_r515.listEntity(); });
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_5_Template, 3, 3, "button", 43);
    i0.ɵɵtemplate(6, RestResourceDetailComponent_ng_container_1_div_1_nb_card_footer_7_button_6_Template, 3, 3, "button", 44);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r262 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(4, 3, "rest-detail.btnCancel"), " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r262.PERMISSION.UPDATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r262.PERMISSION.DELETE);
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
    const _r260 = i0.ɵɵreference(6);
    const ctx_r257 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r257.style ? ctx_r257.style : "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r257.container);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r257.isTabsMenu)("ngIfElse", _r260);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r257.datas && !ctx_r257.container);
} }
function RestResourceDetailComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_div_1_Template, 8, 6, "div", 42);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r1.PERMISSION.READ);
} }
export class RestResourceDetailComponent {
    constructor(activatedRoute, serviceRest, serviceRestAdminConfig, router, dataSourceBuilder, dialogService, langService, sanitizer, overlay, componentFactoryResolver, permissionsService) {
        this.activatedRoute = activatedRoute;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.router = router;
        this.dataSourceBuilder = dataSourceBuilder;
        this.dialogService = dialogService;
        this.langService = langService;
        this.sanitizer = sanitizer;
        this.overlay = overlay;
        this.componentFactoryResolver = componentFactoryResolver;
        this.permissionsService = permissionsService;
        this.objectKeys = Object.keys;
        this.customColumn = 'name';
        this.allColumns = [this.customColumn];
        this.listDataSource = {};
        this.isTabsMenu = false;
        this.tabsName = [];
        this.filesUpload = {};
        this.overlayRef = null;
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
                var _a, _b;
                const val = {};
                const params = {};
                (_a = this.resource.detailConfig.preparedStatementQuery.fieldForNextQuery) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                    val[item] = _.get(resp, item);
                });
                (_b = this.resource.detailConfig.preparedStatementQuery.queryParamsComplete) === null || _b === void 0 ? void 0 : _b.forEach((element) => {
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
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
                    const colunms = {};
                    this.entityId = response.id;
                    if (this.resource.detailConfig.tabsConfig &&
                        this.resource.detailConfig.tabsConfig.length > 1) {
                        this.isTabsMenu = true;
                        (_a = this.resource.detailConfig.tabsConfig) === null || _a === void 0 ? void 0 : _a.forEach((tab) => {
                            var _a;
                            this.tabsName.push(tab.name);
                            const temp = {};
                            (_a = tab.datas) === null || _a === void 0 ? void 0 : _a.forEach((elt) => {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
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
                                            (_g = temp[search.name].data) === null || _g === void 0 ? void 0 : _g.forEach((item) => {
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
                                        else if ((_k = (_j = (_h = temp[search.name].restField) === null || _h === void 0 ? void 0 : _h.metaData) === null || _j === void 0 ? void 0 : _j.detailConfig) === null || _k === void 0 ? void 0 : _k.restManyResources) {
                                            if (this.isObject((_o = (_m = (_l = temp[search.name].restField) === null || _l === void 0 ? void 0 : _l.metaData) === null || _m === void 0 ? void 0 : _m.detailConfig) === null || _o === void 0 ? void 0 : _o.restManyResources)) {
                                                const datas = [];
                                                (_p = temp[search.name].data) === null || _p === void 0 ? void 0 : _p.forEach((item) => {
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
                                                (_q = temp[search.name].data) === null || _q === void 0 ? void 0 : _q.forEach((element) => {
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
                                        (_r = temp[search.name].data) === null || _r === void 0 ? void 0 : _r.forEach((item) => {
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
                        (_b = this.resource.fields) === null || _b === void 0 ? void 0 : _b.forEach((elt) => {
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
                                    if (((_e = (_d = (_c = this.datas[property].restField) === null || _c === void 0 ? void 0 : _c.metaData) === null || _d === void 0 ? void 0 : _d.listConfig) === null || _e === void 0 ? void 0 : _e.restManyResources) &&
                                        !((_h = (_g = (_f = this.datas[property].restField) === null || _f === void 0 ? void 0 : _f.metaData) === null || _g === void 0 ? void 0 : _g.detailConfig) === null || _h === void 0 ? void 0 : _h.restManyResources)) {
                                        const datas = [];
                                        (_j = this.datas[property].data) === null || _j === void 0 ? void 0 : _j.forEach((item) => {
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
                                    else if ((_m = (_l = (_k = this.datas[property].restField) === null || _k === void 0 ? void 0 : _k.metaData) === null || _l === void 0 ? void 0 : _l.detailConfig) === null || _m === void 0 ? void 0 : _m.restManyResources) {
                                        if (this.isObject((_q = (_p = (_o = this.datas[property].restField) === null || _o === void 0 ? void 0 : _o.metaData) === null || _p === void 0 ? void 0 : _p.detailConfig) === null || _q === void 0 ? void 0 : _q.restManyResources)) {
                                            const datas = [];
                                            (_r = this.datas[property].data) === null || _r === void 0 ? void 0 : _r.forEach((item) => {
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
                                            (_s = this.datas[property].data) === null || _s === void 0 ? void 0 : _s.forEach((element) => {
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
                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
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
                                        if (((_p = (_o = this.datas[property]) === null || _o === void 0 ? void 0 : _o.data) === null || _p === void 0 ? void 0 : _p.length) > 0) {
                                            (_r = (_q = this.datas[property]) === null || _q === void 0 ? void 0 : _q.data) === null || _r === void 0 ? void 0 : _r.forEach((element) => {
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
    zoomImage(imageElement) {
        // Ajoutez la classe CSS "zoomed" à l'élément de l'image lorsqu'il est cliqué
        imageElement.classList.add('zoomed');
    }
    loadBelongToDetail(data) {
        const resourceName = data.restField.metaData.addConfig.belongToOptions.resourceName;
        this.router.navigate([`/admin/${resourceName}-detail`, data.navigationId]);
    }
}
RestResourceDetailComponent.ɵfac = function RestResourceDetailComponent_Factory(t) { return new (t || RestResourceDetailComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i4.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(i4.NbDialogService), i0.ɵɵdirectiveInject(i5.RestLangService), i0.ɵɵdirectiveInject(i6.DomSanitizer), i0.ɵɵdirectiveInject(i7.Overlay), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i8.NgxPermissionsService)); };
RestResourceDetailComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceDetailComponent, selectors: [["ngx-rest-resource-detail"]], inputs: { resource: "resource", ID: "ID", ressourceName: "ressourceName", container: "container", style: "style" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "list-group", 4, "ngIf", "ngIfElse"], ["tabsContent", ""], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "d-block", 2, "margin-left", "15px"], [1, "row"], [1, ""], [1, "marg"], [3, "template", "componentClass"], [3, "change"], [3, "removable", "removed"], [1, "text-center", "color-card"], [3, "checked", "disabled"], [3, "imageUrl"], ["nbTooltipPlacement", "top", 1, "belongTo-link", "text-primary", 3, "nbTooltip", "click"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], [4, "ngIf", "ngIfElse"], ["cas21", ""], ["class", "row", 4, "ngFor", "ngForOf"], [3, "resource", "ID", "ressourceName", "container"], ["target", "_blank", 3, "href"], ["style", "height: 400px; width: 100%;", 4, "ngIf"], [2, "height", "400px", "width", "100%"], ["height", "400px", "width", "100%", "class", "mt-2", 3, "src", 4, "ngIf"], ["height", "400px", "width", "100%", 1, "mt-2", 3, "src"], [1, "text-muted", "ml-20", "mt-3"], ["fullWidth", ""], [3, "tabTitle", 4, "ngFor", "ngForOf"], [3, "tabTitle"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["displayRes", ""], ["fullWidth", "", 1, "buttons-row", "text-center"], ["nbButton", "", "status", "secondary", 2, "margin-right", "10px", 3, "click"], ["nbButton", "", "status", "primary", 3, "click"], ["nbButton", "", "status", "danger", 2, "margin-left", "10px", 3, "click"], [4, "ngxPermissionsOnly"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngxPermissionsOnly"], ["nbButton", "", "status", "danger", "style", "margin-left: 10px", 3, "click", 4, "ngxPermissionsOnly"]], template: function RestResourceDetailComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceDetailComponent_ng_container_0_Template, 8, 6, "ng-container", 0);
        i0.ɵɵtemplate(1, RestResourceDetailComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
    } }, directives: [i9.NgIf, i4.NbCardComponent, i4.NbCardBodyComponent, i4.NbCardHeaderComponent, i4.NbListComponent, i9.NgForOf, i4.NbListItemComponent, i10.CngHtmlCompilerComponent, i11.NgxDropzoneComponent, i11.NgxDropzonePreviewComponent, i11.NgxDropzoneLabelDirective, i4.NbCheckboxComponent, i12.ImageZoomComponent, i4.NbTooltipDirective, i4.NbTreeGridComponent, i4.NbTreeGridRowDefDirective, i4.NbTreeGridColumnDefDirective, i4.NbTreeGridCellDefDirective, i4.NbTreeGridRowComponent, i4.NbTreeGridCellDirective, i13.FsIconCComponent, RestResourceDetailComponent, i4.NbTabsetComponent, i4.NbTabComponent, i4.NbCardFooterComponent, i4.NbButtonComponent, i8.NgxPermissionsDirective], pipes: [i9.TitleCasePipe, i9.KeyValuePipe, i9.DatePipe, i14.TranslatePipe], styles: [".belongTo-link[_ngcontent-%COMP%]:hover{text-decoration:underline!important;cursor:pointer}img[_ngcontent-%COMP%]{max-width:300px;max-height:200px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;margin-left:5px;justify-content:center;align-items:center}[_nghost-%COMP%]   nb-tab[_ngcontent-%COMP%]{padding:1.25rem}.rest-item-align[_ngcontent-%COMP%]{padding-block:3}.marg[_ngcontent-%COMP%]{margin-right:25px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceDetailComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-detail',
                templateUrl: './rest-resource-detail.component.html',
                styleUrls: ['./rest-resource-detail.component.scss'],
            }]
    }], function () { return [{ type: i1.ActivatedRoute }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i1.Router }, { type: i4.NbTreeGridDataSourceBuilder }, { type: i4.NbDialogService }, { type: i5.RestLangService }, { type: i6.DomSanitizer }, { type: i7.Overlay }, { type: i0.ComponentFactoryResolver }, { type: i8.NgxPermissionsService }]; }, { resource: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxHQUFxQyxNQUFNLGVBQWUsQ0FBQztBQUdwRixPQUFPLEVBRUwsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLCtCQUErQixDQUFDO0FBS3ZDLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sU0FBUyxNQUFNLDBCQUEwQixDQUFDO0FBQ2pELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1psRyxzQ0FBbUM7SUFDakMsWUFDRjs7SUFBQSxpQkFBaUI7OztJQURmLGVBQ0Y7SUFERSx1SUFDRjs7O0lBZVksNkJBQXFEO0lBQ25ELDhCQUFrQjtJQUNoQix5QkFBRztJQUFBLFlBQTRCOztJQUFBLGlCQUFJO0lBQ3JDLGlCQUFNO0lBQ04sOEJBQWM7SUFDWixZQUNGO0lBQUEsaUJBQU07SUFDUiwwQkFBZTs7O0lBTFIsZUFBNEI7SUFBNUIsa0VBQTRCO0lBRy9CLGVBQ0Y7SUFERSxtREFDRjs7O0lBR0YsMkJBQTJDO0lBQ3pDLHVDQUlvQjtJQUN0QixpQkFBTTs7O0lBSkYsZUFBMEM7SUFBMUMsMkRBQTBDLHND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SCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLGdCQUFnQjtRQUNsQixPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO0lBQ2IsUUFBUSxDQUFDLEtBQUssSUFBRyxDQUFDO0lBRWxCLFFBQVEsQ0FBQyxLQUFLLElBQUcsQ0FBQztJQUVsQixTQUFTLENBQUMsWUFBWTtRQUNwQiw2RUFBNkU7UUFDN0UsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQUk7UUFDckIsTUFBTSxZQUFZLEdBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDO1FBRWpFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxZQUFZLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUM3RSxDQUFDOztzR0FoMkJVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FDeEJ4Qyw4RkFvNUJlO1FBRWYsOEZBMjZCZTs7UUFqMERBLDJEQUFzQztRQXM1QnRDLGVBQXFDO1FBQXJDLDBEQUFxQzsraEJEOTNCdkMsMkJBQTJCO3VGQUEzQiwyQkFBMkI7Y0FMdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFdBQVcsRUFBRSx1Q0FBdUM7Z0JBQ3BELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO2FBQ3JEOytYQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQge1xuICBSZXN0RmllbGQsXG4gIFJFU1RfRklFTERfVFlQRVMsXG4gIFBFUk1JU1NJT04sXG59IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5iRGlhbG9nU2VydmljZSwgTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgdXJsVG9GaWxlIGZyb20gJy4uLy4uLy4uL3V0aWxzL3VybFRvRmlsZSc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmd4UGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnbmd4LXBlcm1pc3Npb25zJztcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWRldGFpbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJlc291cmNlOiBSZXN0UmVzb3VyY2U7XG4gIEBJbnB1dCgpIElEOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJlc3NvdXJjZU5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgY29udGFpbmVyOiBCb29sZWFuO1xuICBASW5wdXQoKSBzdHlsZTogYW55O1xuICBkYXRhczogYW55W107XG4gIGRhdGFzMTogYW55W11bXTtcbiAgZW50aXR5SWQ6IG51bWJlcjtcbiAgb2JqZWN0S2V5cyA9IE9iamVjdC5rZXlzO1xuXG4gIGN1c3RvbUNvbHVtbiA9ICduYW1lJztcbiAgYWxsQ29sdW1ucyA9IFt0aGlzLmN1c3RvbUNvbHVtbl07XG4gIGxpc3REYXRhU291cmNlOiBhbnkgPSB7fTtcbiAgaXNUYWJzTWVudSA9IGZhbHNlO1xuICB0YWJzTmFtZSA9IFtdO1xuICBmaWxlc1VwbG9hZCA9IHt9O1xuXG4gIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsID0gbnVsbDtcblxuXG4gIHBlcm1pc3Npb25zID0gW1xuICAgIFBFUk1JU1NJT04uQ1JFQVRFLFxuICAgIFBFUk1JU1NJT04uVVBEQVRFLFxuICAgIFBFUk1JU1NJT04uREVMRVRFLFxuICAgIFBFUk1JU1NJT04uUkVBRCxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0OiBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbkNvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgZGF0YVNvdXJjZUJ1aWxkZXI6IE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcjxhbnk+LFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgbGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZSxcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldCBQRVJNSVNTSU9OKCkge1xuICAgIHJldHVybiBQRVJNSVNTSU9OO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgbGV0IGlkO1xuICAgIGlmICh0aGlzLklEKSB7XG4gICAgICBpZCA9IHRoaXMuSUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlkID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC5wYXJhbU1hcC5nZXQoJ2lkJyk7XG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5sZW5ndGggLSAyXG4gICAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuICAgIH1cbiAgICB0aGlzLmVudGl0eUlkID0gcGFyc2VJbnQoaWQpO1xuXG4gICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcnLCB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZyk7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnkpIHtcbiAgICAgIC8vIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnF1ZXJ5UGFyYW1zLmZpZWxkRm9yTmV4dFF1ZXJ5XG4gICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeS5hcGkuc3Vic3RyaW5nKFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnByZXBhcmVkU3RhdGVtZW50UXVlcnlcbiAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgPyB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICA6IHt9LFxuICAgICAgICB9KVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsID0ge307XG4gICAgICAgICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcucHJlcGFyZWRTdGF0ZW1lbnRRdWVyeS5maWVsZEZvck5leHRRdWVyeT8uZm9yRWFjaChcbiAgICAgICAgICAgIChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHZhbFtpdGVtXSA9IF8uZ2V0KHJlc3AsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy5wcmVwYXJlZFN0YXRlbWVudFF1ZXJ5LnF1ZXJ5UGFyYW1zQ29tcGxldGU/LmZvckVhY2goXG4gICAgICAgICAgICAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWxlbWVudC5pc1ByZXBhcmVkU3RhdGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2VsZW1lbnQubGFiZWxdID0gdmFsW2VsZW1lbnQudmFsdWVdO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1tlbGVtZW50LmxhYmVsXSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgIC5nZXRPbmVSZXNvdXJjZShcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcuYXBpLFxuICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuXG4gICAgICAgICAgICAgIHRoaXMuZW50aXR5SWQgPSByZXNwb25zZS5pZDtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWcgJiZcbiAgICAgICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmxlbmd0aCA+IDFcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc1RhYnNNZW51ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnRhYnNDb25maWc/LmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy50YWJzTmFtZS5wdXNoKHRhYi5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSB7fTtcblxuICAgICAgICAgICAgICAgICAgdGFiLmRhdGFzPy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VhcmNoID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkLmxhYmVsID09PSBlbHRcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN0RmllbGQ6IHNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW3NlYXJjaC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgICAgICAgICAgICAgICAgICAvKlByZW1pZXIgY2FzIHNpIGxlcyBjb25maWdzIG9udCBldGUgZGVmaW5pcyBkYW5zIGxlIGxpc3RDb25maWcgZXQgcmllbiBkYW5zIGxlIGRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgIFByZW1pZXIgY2FzIHNpIGxlcyBjb25maWdzIG9udCBldGUgZGVmaW5pcyBkYW5zIGxlIGxpc3RDb25maWcgZXQgcmllbiBkYW5zIGxlIGRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgIG9uIGNvbnNpZGVyZSBxdWUgbGVzIGNvbmZpZ3Mgc29udCBsZXMgbWVtZXNcbiAgICAgICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAhdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWGEgbWUgY29uY2VybmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlbXBbc2VhcmNoLm5hbWVdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhPy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhPy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZXRhaWxDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhPy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzb3VyY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogZWxlbWVudD8uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YT8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzQmVsb25nVG9NYW55ID0gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoc2VhcmNoLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGAke2RhdH0gKCR7cmVzcG9uc2Vbc2VhcmNoLmxhYmVsXX0pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uSWQ6IHJlc3BvbnNlW3NlYXJjaC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29sdW5tc1t0YWIubmFtZV0gPSB0ZW1wO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhczEgPSBjb2x1bm1zO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZmllbGRzPy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChlbHQudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE8pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdCA9IHRoaXMuZ2V0QmVsb25nVG9TZWNvbmRGaWVsZChlbHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdEZpZWxkOiBlbHQsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtlbHQubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRpb25JZDogcmVzcG9uc2VbZWx0LmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVubXNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiB0aGlzLmRhdGFzKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICF0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YT8uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/Lmxpc3RDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBdID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhPy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhPy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXS5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnJlc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc291cmNlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NCZWxvbmdUb01hbnkpO1xuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgLmdldE9uZVJlc291cmNlKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcuYXBpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucmVzb3VyY2UuZGV0YWlsQ29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaWRcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG5cbiAgICAgICAgICB0aGlzLmVudGl0eUlkID0gcmVzcG9uc2UuaWQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZyAmJlxuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZS5kZXRhaWxDb25maWcudGFic0NvbmZpZy5sZW5ndGggPiAxXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0aGlzLmlzVGFic01lbnUgPSB0cnVlO1xuXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlLmRldGFpbENvbmZpZy50YWJzQ29uZmlnLmZvckVhY2goKHRhYikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnRhYnNOYW1lLnB1c2godGFiLm5hbWUpO1xuICAgICAgICAgICAgICBjb25zdCB0ZW1wID0ge307XG5cbiAgICAgICAgICAgICAgdGFiLmRhdGFzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgICAgICAgICAoZmllbGQpID0+IGZpZWxkLmxhYmVsID09PSBlbHRcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgICAgICAgICAgICAgIC8qUHJlbWllciBjYXMgc2kgbGVzIGNvbmZpZ3Mgb250IGV0ZSBkZWZpbmlzIGRhbnMgbGUgbGlzdENvbmZpZyBldCByaWVuIGRhbnMgbGUgZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgIFByZW1pZXIgY2FzIHNpIGxlcyBjb25maWdzIG9udCBldGUgZGVmaW5pcyBkYW5zIGxlIGxpc3RDb25maWcgZXQgcmllbiBkYW5zIGxlIGRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICBvbiBjb25zaWRlcmUgcXVlIGxlcyBjb25maWdzIHNvbnQgbGVzIG1lbWVzXG4gICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgIXRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWGEgbWUgY29uY2VybmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFtzZWFyY2gubmFtZV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/Lmxpc3RDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c1QgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NUKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc09iamVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5kYXRhLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBpdGVtW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRlbXBbc2VhcmNoLm5hbWVdLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGVtcFtzZWFyY2gubmFtZV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzQmVsb25nVG9NYW55KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE86XG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXQgPSB0aGlzLmdldEJlbG9uZ1RvU2Vjb25kRmllbGQoc2VhcmNoLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0ZW1wW3NlYXJjaC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtzZWFyY2gubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbklkOiByZXNwb25zZVtzZWFyY2gubGFiZWxdLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB1cmxUb0ZpbGUoXG4gICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2Vbc2VhcmNoLmxhYmVsXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZWFyY2gubGFiZWwsXG4gICAgICAgICAgICAgICAgICAgICAgJ3BkZidcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1VwbG9hZFtzZWFyY2gubGFiZWxdID0gZmlsZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29sdW5tc1t0YWIubmFtZV0gPSB0ZW1wO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IGNvbHVubXM7XG4gICAgICAgICAgICB0aGlzLmRhdGFzMSA9IGNvbHVubXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoZWx0LnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdCA9IHRoaXMuZ2V0QmVsb25nVG9TZWNvbmRGaWVsZChlbHQsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgICAgICAgZGF0YTogYCR7ZGF0fSAoJHtyZXNwb25zZVtlbHQubGFiZWxdfSlgLFxuICAgICAgICAgICAgICAgICAgbmF2aWdhdGlvbklkOiByZXNwb25zZVtlbHQubGFiZWxdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3BvbnNlW2VsdC5sYWJlbF0sXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFzID0gY29sdW5tcztcbiAgICAgICAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gdGhpcy5kYXRhcykge1xuICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0uZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldPy5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YXMgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbcHJvcGVydHldLmRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmRhdGFzW3Byb3BlcnR5XT8ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGV0YWlsQ29uZmlnLnJlc3RNYW55UmVzb3VyY2VzLmxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGRhdGFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVt0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZV0gPVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFzW3Byb3BlcnR5XT8uZGF0YT8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0/LmRhdGE/LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMucmVzb3VyY2VOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBlbGVtZW50Py5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5kZXRhaWxDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5zdHlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgICAgICBjb25zdCBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW3Byb3BlcnR5XS5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YXNbcHJvcGVydHldLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGFTb3VyY2VbdGhpcy5kYXRhc1twcm9wZXJ0eV0ucmVzdEZpZWxkLm5hbWVdID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c0JlbG9uZ1RvTWFueSk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgIGFwaTogcGVybWlzc2lvbi5maWVsZEtleS5hcGkuc3Vic3RyaW5nKDEpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgPyBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBlZGl0RW50aXR5KCkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1lZGl0YCwgdGhpcy5lbnRpdHlJZF0pO1xuICB9XG5cbiAgbGlzdEVudGl0eSgpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWxpc3RgKTtcbiAgfVxuXG4gIGRlbGV0ZUVudGl0eSgpIHtcbiAgICBjb25zdCBkaWFsb2cgPSB0aGlzLmRpYWxvZ1NlcnZpY2Uub3BlbihSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsIHtcbiAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgZGF0YXM6IHsgaWQ6IHRoaXMuZW50aXR5SWQgfSxcbiAgICAgICAgdGl0bGU6ICdTVVBQUkVTU0lPTicsXG4gICAgICAgIGxpc3RDb25maWc6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZyxcbiAgICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlhbG9nLm9uQ2xvc2Uuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICBpZiAocmVzcCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZUJ5VXJsKGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWxpc3RgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgLy9JbWFnZSBpbnB1dFxuICBvblNlbGVjdChldmVudCkge31cblxuICBvblJlbW92ZShmaWVsZCkge31cblxuICB6b29tSW1hZ2UoaW1hZ2VFbGVtZW50KSB7XG4gICAgLy8gQWpvdXRleiBsYSBjbGFzc2UgQ1NTIFwiem9vbWVkXCIgw6AgbCfDqWzDqW1lbnQgZGUgbCdpbWFnZSBsb3JzcXUnaWwgZXN0IGNsaXF1w6lcbiAgICBpbWFnZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnem9vbWVkJyk7XG4gIH1cbiAgXG4gIGxvYWRCZWxvbmdUb0RldGFpbChkYXRhKSB7XG4gICAgY29uc3QgcmVzb3VyY2VOYW1lID1cbiAgICAgIGRhdGEucmVzdEZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucmVzb3VyY2VOYW1lO1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW2AvYWRtaW4vJHtyZXNvdXJjZU5hbWV9LWRldGFpbGAsIGRhdGEubmF2aWdhdGlvbklkXSk7XG4gIH1cblxuICBpc09iamVjdCA9IChhKSA9PiB7XG4gICAgbGV0IGlzT2JqZWN0ID0gZmFsc2U7XG4gICAgaWYgKGEubWV0YURhdGEpIGlzT2JqZWN0ID0gdHJ1ZTtcbiAgICBpZiAoYS50eXBlKSBpc09iamVjdCA9IHRydWU7XG4gICAgaWYgKGEudGVtcGxhdGUpIGlzT2JqZWN0ID0gdHJ1ZTtcbiAgICBpZiAoYS5pbkZvcm0pIGlzT2JqZWN0ID0gdHJ1ZTtcblxuICAgIHJldHVybiBpc09iamVjdDtcbiAgfTtcblxuICBpc0FycmF5ID0gKGEpID0+IHtcbiAgICByZXR1cm4gISFhICYmIGEuY29uc3RydWN0b3IgPT09IEFycmF5O1xuICB9O1xuXG4gIGdldEJlbG9uZ1RvU2Vjb25kRmllbGQgPSAoZWx0LCByZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGJlbG9uZ1ZhbCA9XG4gICAgICBgJHtlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5yZXNvdXJjZU5hbWV9LiR7ZWx0Lm1ldGFEYXRhPy5iZWxvbmdUb1NlY29uZEZpZWxkTGFiZWx9YC5zcGxpdChcbiAgICAgICAgJy4nXG4gICAgICApO1xuICAgIGxldCBkYXQgPSByZXNwb25zZTtcbiAgICBpZiAoYmVsb25nVmFsICYmIGJlbG9uZ1ZhbD8ubGVuZ3RoID4gMCkge1xuICAgICAgYmVsb25nVmFsLmZvckVhY2goKHZhbCkgPT4ge1xuICAgICAgICBpZiAoZGF0W3ZhbF0pIHtcbiAgICAgICAgICBkYXQgPSBkYXRbdmFsXTtcbiAgICAgICAgfSBlbHNlIGRhdCA9ICcnO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdCA9ICcnO1xuICAgIH1cbiAgICByZXR1cm4gZGF0O1xuICB9O1xuXG4gIGpzb25WYWx1ZSA9ICh2YWw6IGFueSk6IGFueSA9PiB7XG4gICAgbGV0IF9qc29uVmFsdWU6IGFueTtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoIXZhbCB8fCAhdmFsLnJlc3RGaWVsZCB8fCAhdmFsLmRhdGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHJlcXVpcmVkIGRhdGEgcHJvcGVydGllcycpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmFsLnJlc3RGaWVsZC5pMThuID09PSB0cnVlKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsLmRhdGEgPT09ICdzdHJpbmcnICYmIHZhbC5kYXRhWzBdID09PSAneycpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWREYXRhID0gSlNPTi5wYXJzZSh2YWwuZGF0YSk7XG4gICAgICAgICAgaWYgKHBhcnNlZERhdGFbdGhpcy5sYW5nU2VydmljZS5zZWxlY3RlZF0pIHtcbiAgICAgICAgICAgIF9qc29uVmFsdWUgPSBwYXJzZWREYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgaTE4biBsYW5ndWFnZSBzZWxlY3RlZCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICB0eXBlb2YgdmFsLmRhdGEgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgdmFsLmRhdGFbdGhpcy5sYW5nU2VydmljZS5zZWxlY3RlZF1cbiAgICAgICAgKSB7XG4gICAgICAgICAgX2pzb25WYWx1ZSA9IHZhbC5kYXRhW3RoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWRdO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwuZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBfanNvblZhbHVlID0gdmFsLmRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRhdGEgZm9ybWF0IGZvciBpMThuIGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9qc29uVmFsdWUgPSB2YWwuZGF0YTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBfanNvblZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBfanNvblZhbHVlID0gSlNPTi5zdHJpbmdpZnkoX2pzb25WYWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgRXJyb3Igb2NjdXJyZWQgaW4ganNvblZhbHVlOiAke2Vycn1gKTtcbiAgICAgIF9qc29uVmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWwuZGF0YSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9qc29uVmFsdWU7XG4gIH07XG5cbiAgc2FuaXRpemVyVXJsID0gKGxpbmspID0+IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChsaW5rKTtcbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPD0gMFwiPlxuICA8bmItY2FyZCBbc3R5bGVdPVwic3R5bGUgPyBzdHlsZSA6ICcnXCI+XG4gICAgPG5iLWNhcmQtaGVhZGVyICpuZ0lmPVwiIWNvbnRhaW5lclwiPlxuICAgICAge3sgcmVzb3VyY2UuZGV0YWlsQ29uZmlnPy50aXRsZSB8IHRpdGxlY2FzZSB9fVxuICAgIDwvbmItY2FyZC1oZWFkZXI+XG4gICAgPG5iLWNhcmQtYm9keT5cbiAgICAgIDxuYi1saXN0ICpuZ0lmPVwiIWlzVGFic01lbnU7IGVsc2UgdGFic0NvbnRlbnRcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgPG5iLWxpc3QtaXRlbSAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkYXRhcyB8IGtleXZhbHVlXCI+XG4gICAgICAgICAgPCEtLSBjbGFzcz1cInJlc3QtaXRlbS1hbGlnbiBsaXN0LWdyb3VwLWl0ZW1cIiAtLT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ibG9ja1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fFxuICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuUERGXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lIChjaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKGZpbGVzVXBsb2FkW2l0ZW0ua2V5XSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0/LnZhbHVlPy5kYXRhIH19ICh7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19KTwvbmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cImpzb25WYWx1ZShpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyIGNvbG9yLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPnt7IGl0ZW0udmFsdWUuZGF0YSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sganNvblZhbHVlKGl0ZW0udmFsdWUpIH19XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8bmItY2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvbmItY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1pbWFnZS16b29tXG4gICAgICAgICAgICAgICAgICAgICAgW2ltYWdlVXJsXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWltYWdlLXpvb20+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIHwgZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwibG9hZEJlbG9uZ1RvRGV0YWlsKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1kZXRhaWwuYmVsb25nVG9SZWYnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYmVsb25nVG8tbGluayB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwhLS0gQ0FTIDEgLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcyAmJlxuICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIENBUyAyIC0tPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhczIxXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXM/LnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXM/LnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2FzMjE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzIG9mIGxpc3REYXRhU291cmNlW2l0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW0lEXT1cInJlcy5pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmVzc291cmNlTmFtZV09XCJyZXMucmVzb3VyY2VOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3R5bGVdPVwicmVzLnN0eWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtcmVzdC1yZXNvdXJjZS1kZXRhaWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkxJTktcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnZhbHVlLmRhdGFcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLmRhdGFcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlua0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ubGlua0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWRJZnJhbWVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQubm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZCBtbC0yMCBtdC0zXCI+e3tcbiAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGVcbiAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgICA8L25iLWxpc3Q+XG4gICAgICA8bmctdGVtcGxhdGUgI3RhYnNDb250ZW50PlxuICAgICAgICA8bmItdGFic2V0IGZ1bGxXaWR0aD5cbiAgICAgICAgICA8bmItdGFiIFt0YWJUaXRsZV09XCJ0YWJzXCIgKm5nRm9yPVwibGV0IHRhYnMgb2YgdGFic05hbWVcIj5cbiAgICAgICAgICAgIDxuYi1saXN0IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICA8bmItbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzMVt0YWJzXSB8IGtleXZhbHVlXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBjbGFzcz1cInJlc3QtaXRlbS1hbGlnbiBsaXN0LWdyb3VwLWl0ZW1cIiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ibG9ja1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHhcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQ1cHg7IHdpZHRoOiA4MHB4OyBtYXJnaW4tbGVmdDogNXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L25iLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1pbWFnZS16b29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ltYWdlVXJsXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWltYWdlLXpvb20+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgID5odHRwOi8vbG9jYWxob3N0OjQyMDAvYWRtaW4vYWdlbmN5LWxpc3RcbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkpTT05cIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBqc29uVmFsdWUoaXRlbS52YWx1ZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfCBkYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRCZWxvbmdUb0RldGFpbChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwPVwie3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN0LWRldGFpbC5iZWxvbmdUb1JlZicgfCB0cmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUb29sdGlwUGxhY2VtZW50PVwidG9wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJlbG9uZ1RvLWxpbmsgdGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgW25iVHJlZUdyaWRdPVwibGlzdERhdGFTb3VyY2VbaXRlbS5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2V4cGFuZGVkXT1cInJvdy5leHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YT8uZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPYmplY3QoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGRpc3BsYXlSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNwbGF5UmVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyBvZiBsaXN0RGF0YVNvdXJjZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVzb3VyY2VdPVwicmVzLnJlc291cmNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtJRF09XCJyZXMuaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29udGFpbmVyXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlXT1cInJlcy5zdHlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgW25iVHJlZUdyaWRdPVwibGlzdERhdGFTb3VyY2VbaXRlbS5rZXldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cIml0ZW0udmFsdWUuZGF0YVwiIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLmRhdGFcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpZnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwic2FuaXRpemVyVXJsKGl0ZW0udmFsdWUuZGF0YSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ubGlua0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ubGlua0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGlzYWJsZWRJZnJhbWVQcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQubm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZCBtbC0yMCBtdC0zXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5vdGVcbiAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uYi1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L25iLWxpc3Q+XG4gICAgICAgICAgPC9uYi10YWI+XG4gICAgICAgIDwvbmItdGFic2V0PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L25iLWNhcmQtYm9keT5cblxuICAgIDxuYi1jYXJkLWZvb3RlciAqbmdJZj1cImRhdGFzICYmICFjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLXJvdyB0ZXh0LWNlbnRlclwiIGZ1bGxXaWR0aD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgc3RhdHVzPVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweFwiXG4gICAgICAgICAgKGNsaWNrKT1cImxpc3RFbnRpdHkoKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkNhbmNlbFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxidXR0b24gbmJCdXR0b24gc3RhdHVzPVwicHJpbWFyeVwiIChjbGljayk9XCJlZGl0RW50aXR5KClcIj5cbiAgICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkVkaXRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDEwcHhcIlxuICAgICAgICAgIChjbGljayk9XCJkZWxldGVFbnRpdHkoKVwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkRlbGV0ZVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgPC9uYi1jYXJkPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwXCI+XG4gIDxkaXYgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uUkVBRFwiPlxuICAgIDxuYi1jYXJkIFtzdHlsZV09XCJzdHlsZSA/IHN0eWxlIDogJydcIj5cbiAgICAgIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cIiFjb250YWluZXJcIj5cbiAgICAgICAge3sgcmVzb3VyY2UuZGV0YWlsQ29uZmlnPy50aXRsZSB8IHRpdGxlY2FzZSB9fVxuICAgICAgPC9uYi1jYXJkLWhlYWRlcj5cbiAgICAgIDxuYi1jYXJkLWJvZHk+XG4gICAgICAgIDxuYi1saXN0ICpuZ0lmPVwiIWlzVGFic01lbnU7IGVsc2UgdGFic0NvbnRlbnRcIiBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICA8bmItbGlzdC1pdGVtICpuZ0Zvcj1cImxldCBpdGVtIG9mIGRhdGFzIHwga2V5dmFsdWVcIj5cbiAgICAgICAgICAgIDwhLS0gY2xhc3M9XCJyZXN0LWl0ZW0tYWxpZ24gbGlzdC1ncm91cC1pdGVtXCIgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ibG9ja1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHhcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUIHx8XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRU5VTVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuUERGXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZSAoY2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlbW92YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZShmaWxlc1VwbG9hZFtpdGVtLmtleV0pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBpdGVtPy52YWx1ZT8uZGF0YSB9fSAoe3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwZGZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0pPC9uZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtY2VudGVyIGNvbG9yLWNhcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPnt7IGl0ZW0udmFsdWUuZGF0YSB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7eyBqc29uVmFsdWUoaXRlbS52YWx1ZSkgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWUoaXRlbS52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgID48L25iLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5neC1pbWFnZS16b29tXG4gICAgICAgICAgICAgICAgICAgICAgICBbaW1hZ2VVcmxdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L25neC1pbWFnZS16b29tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIHwgZGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1xuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRCZWxvbmdUb0RldGFpbChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7eyAncmVzdC1kZXRhaWwuYmVsb25nVG9SZWYnIHwgdHJhbnNsYXRlIH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iVG9vbHRpcFBsYWNlbWVudD1cInRvcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJlbG9uZ1RvLWxpbmsgdGV4dC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPCEtLSBDQVMgMSAtLT5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBDQVMgMiAtLT5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGNhczIxXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJsaXN0RGF0YVNvdXJjZVtpdGVtLmtleV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuYlRyZWVHcmlkUm93RGVmPVwibGV0IHJvdzsgY29sdW1uczogYWxsQ29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIG5iVHJlZUdyaWRDZWxsICpuYlRyZWVHcmlkQ2VsbERlZj1cImxldCByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlXT1cInJvdy5kYXRhLnBsYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGEuZGV0YWlsQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlc3RNYW55UmVzb3VyY2VzPy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcz8udGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lIH19PC9zcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjYXMyMT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlcyBvZiBsaXN0RGF0YVNvdXJjZVtpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbSURdPVwicmVzLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJyZXMuc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5MSU5LXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnZhbHVlLmRhdGFcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLmRhdGFcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInNhbml0aXplclVybChpdGVtLnZhbHVlLmRhdGEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saW5rQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ubGlua0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZElmcmFtZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQubm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkIG1sLTIwIG10LTNcIj57e1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlXG4gICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgICAgPC9uYi1saXN0PlxuICAgICAgICA8bmctdGVtcGxhdGUgI3RhYnNDb250ZW50PlxuICAgICAgICAgIDxuYi10YWJzZXQgZnVsbFdpZHRoPlxuICAgICAgICAgICAgPG5iLXRhYiBbdGFiVGl0bGVdPVwidGFic1wiICpuZ0Zvcj1cImxldCB0YWJzIG9mIHRhYnNOYW1lXCI+XG4gICAgICAgICAgICAgIDxuYi1saXN0IGNsYXNzPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxuYi1saXN0LWl0ZW0gKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGF0YXMxW3RhYnNdIHwga2V5dmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgIDwhLS0gY2xhc3M9XCJyZXN0LWl0ZW0tYWxpZ24gbGlzdC1ncm91cC1pdGVtXCIgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1ibG9ja1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0NXB4OyB3aWR0aDogODBweDsgbWFyZ2luLWxlZnQ6IDVweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBpdGVtLmtleSB8IHRpdGxlY2FzZSB9fTogPC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L25iLWNoZWNrYm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0VcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1pbWFnZS16b29tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW1hZ2VVcmxdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L25neC1pbWFnZS16b29tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkpTT05cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFyZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGl0ZW0ua2V5IHwgdGl0bGVjYXNlIH19OiA8L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sganNvblZhbHVlKGl0ZW0udmFsdWUpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlKGl0ZW0udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpdGVtLnZhbHVlLmRhdGEgfCBkYXRlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwiaXRlbS52YWx1ZS5kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImxvYWRCZWxvbmdUb0RldGFpbChpdGVtLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXA9XCJ7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzdC1kZXRhaWwuYmVsb25nVG9SZWYnIHwgdHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRvb2x0aXBQbGFjZW1lbnQ9XCJ0b3BcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJiZWxvbmdUby1saW5rIHRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5kYXRhIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIml0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cIml0ZW0udmFsdWUuZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5kZXRhaWxDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJUcmVlR3JpZFJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC90cj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+IHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX08L2I+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaXRlbS52YWx1ZS5yZXN0RmllbGQubmFtZSB9fTwvc3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT2JqZWN0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGRpc3BsYXlSZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iVHJlZUdyaWRSb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuYlRyZWVHcmlkQ29sdW1uRGVmXT1cImN1c3RvbUNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yj4ge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkPy5tZXRhRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uZGV0YWlsQ29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWUgfX08L3NwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZS5yZXN0RmllbGQubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRldGFpbENvbmZpZy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNkaXNwbGF5UmVzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzIG9mIGxpc3REYXRhU291cmNlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXNvdXJjZV09XCJyZXMucmVzb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbSURdPVwicmVzLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jlc3NvdXJjZU5hbWVdPVwicmVzLnJlc291cmNlTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb250YWluZXJdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdHlsZV09XCJyZXMuc3R5bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LXJlc3QtcmVzb3VyY2UtZGV0YWlsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImxpc3REYXRhU291cmNlW2l0ZW0ua2V5XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYlRyZWVHcmlkUm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvdHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1mcy1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWZzLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPiB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWl0ZW0udmFsdWUucmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXJnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgaXRlbS5rZXkgfCB0aXRsZWNhc2UgfX06IDwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLnZhbHVlLmRhdGFcIiB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IGl0ZW0udmFsdWUuZGF0YSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLmRhdGFcIiBzdHlsZT1cImhlaWdodDogNDAwcHg7IHdpZHRoOiAxMDAlO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInNhbml0aXplclVybChpdGVtLnZhbHVlLmRhdGEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGE/LmRldGFpbENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5saW5rQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICFpdGVtLnZhbHVlLnJlc3RGaWVsZD8ubWV0YURhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmRldGFpbENvbmZpZz8ubGlua0NvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kaXNhYmxlZElmcmFtZVByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0MDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibXQtMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpdGVtLnZhbHVlLnJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQudGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJpdGVtLnZhbHVlLmRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXRlbS52YWx1ZS5yZXN0RmllbGQubm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkIG1sLTIwIG10LTNcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnZhbHVlLnJlc3RGaWVsZC5ub3RlXG4gICAgICAgICAgICAgICAgICAgICAgICB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25iLWxpc3QtaXRlbT5cbiAgICAgICAgICAgICAgPC9uYi1saXN0PlxuICAgICAgICAgICAgPC9uYi10YWI+XG4gICAgICAgICAgPC9uYi10YWJzZXQ+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L25iLWNhcmQtYm9keT5cblxuICAgICAgPG5iLWNhcmQtZm9vdGVyICpuZ0lmPVwiZGF0YXMgJiYgIWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1yb3cgdGV4dC1jZW50ZXJcIiBmdWxsV2lkdGg+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgIHN0YXR1cz1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweFwiXG4gICAgICAgICAgICAoY2xpY2spPVwibGlzdEVudGl0eSgpXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkNhbmNlbFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZWRpdEVudGl0eSgpXCJcbiAgICAgICAgICAgICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLlVQREFURVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3sgXCJyZXN0LWRldGFpbC5idG5FZGl0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tbGVmdDogMTBweFwiXG4gICAgICAgICAgICAoY2xpY2spPVwiZGVsZXRlRW50aXR5KClcIlxuICAgICAgICAgICAgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uREVMRVRFXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7eyBcInJlc3QtZGV0YWlsLmJ0bkRlbGV0ZVwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgICA8L25iLWNhcmQ+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=