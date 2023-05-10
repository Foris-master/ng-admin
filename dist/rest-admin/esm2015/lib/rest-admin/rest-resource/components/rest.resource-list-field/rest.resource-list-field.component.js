import { Component, Input } from '@angular/core';
import { REST_FIELD_TYPES } from '../../models/rest-resource.model';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
import * as i2 from "../../service/rest-lang.service";
import * as i3 from "@angular/common";
import * as i4 from "@codehint-ng/html-compiler";
import * as i5 from "../fs-icon-ccomponent/fs-icon.component";
function RestResourceListFieldComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r12.val, "");
} }
function RestResourceListFieldComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r13.restField.template)("componentClass", ctx_r13.val);
} }
function RestResourceListFieldComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_0_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r0.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.restField.template);
} }
function RestResourceListFieldComponent_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "nb-checkbox", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r14.val)("disabled", true);
} }
function RestResourceListFieldComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r15.restField.template)("componentClass", ctx_r15.val);
} }
function RestResourceListFieldComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_1_ng_container_1_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_1_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.restField.template);
} }
function RestResourceListFieldComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementContainerStart(1, 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelement(3, "input", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.val);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r2.val)("value", ctx_r2.val);
} }
function RestResourceListFieldComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r16.style);
    i0.ɵɵproperty("src", ctx_r16.val, i0.ɵɵsanitizeUrl);
} }
function RestResourceListFieldComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r17.restField.template)("componentClass", ctx_r17.val);
} }
function RestResourceListFieldComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_3_ng_container_1_Template, 2, 3, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r3.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r3.restField.template);
} }
function RestResourceListFieldComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.val, "");
} }
function RestResourceListFieldComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r19.restField.template)("componentClass", ctx_r19.val);
} }
function RestResourceListFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_4_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_4_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r4.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r4.restField.template);
} }
function RestResourceListFieldComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r20.val, "");
} }
function RestResourceListFieldComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r21.restField.template)("componentClass", ctx_r21.val);
} }
function RestResourceListFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_5_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r5.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.restField.template);
} }
function RestResourceListFieldComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r22.val, "");
} }
function RestResourceListFieldComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r23.restField.template)("componentClass", ctx_r23.val);
} }
function RestResourceListFieldComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_6_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_6_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r6.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r6.restField.template);
} }
function RestResourceListFieldComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r24.jsonValue, "");
} }
function RestResourceListFieldComponent_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r25.restField.template)("componentClass", ctx_r25.jsonValue);
} }
function RestResourceListFieldComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_7_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_7_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.restField.template);
} }
function RestResourceListFieldComponent_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.val, "");
} }
function RestResourceListFieldComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r27.restField.template)("componentClass", ctx_r27.val);
} }
function RestResourceListFieldComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_8_ng_container_1_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_8_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.restField.template);
} }
function RestResourceListFieldComponent_div_9_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r31 = i0.ɵɵnextContext().$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r31.data[ctx_r32.customColumn], " ");
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r35.restField.name);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r31 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r36 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r36.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r31.data.item);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_9_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r31 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r31.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r31.data.place);
} }
function RestResourceListFieldComponent_div_9_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵelement(1, "ngx-fs-icon", 16);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_td_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_9_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r31 = ctx.$implicit;
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r31.expanded)("place", row_r31.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r29.restField == null ? null : ctx_r29.restField.metaData == null ? null : ctx_r29.restField.metaData.listConfig == null ? null : ctx_r29.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r29.restField == null ? null : ctx_r29.restField.metaData == null ? null : ctx_r29.restField.metaData.listConfig == null ? null : ctx_r29.restField.metaData.listConfig.restManyResources.template);
} }
function RestResourceListFieldComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 10);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_tr_2_Template, 1, 0, "tr", 11);
    i0.ɵɵelementContainerStart(3, 12);
    i0.ɵɵtemplate(4, RestResourceListFieldComponent_div_9_td_4_Template, 4, 4, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r9.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r9.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r9.customColumn);
} }
function RestResourceListFieldComponent_div_10_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 14);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r42.data[ctx_r43.customColumn], " ");
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r46.restField.name);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r42 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r47 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r47.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r42.data.item);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_10_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r42 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r42.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r42.data.place);
} }
function RestResourceListFieldComponent_div_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵelement(1, "ngx-fs-icon", 16);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_td_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_10_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r42 = ctx.$implicit;
    const ctx_r40 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r42.expanded)("place", row_r42.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r40.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r40.restField.metaData.listConfig.restBelongToManyResources.template);
} }
function RestResourceListFieldComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "table", 10);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_tr_2_Template, 1, 0, "tr", 11);
    i0.ɵɵelementContainerStart(3, 12);
    i0.ɵɵtemplate(4, RestResourceListFieldComponent_div_10_td_4_Template, 4, 4, "td", 13);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGrid", ctx_r10.dataSource);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridRowDefColumns", ctx_r10.allColumns);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTreeGridColumnDef", ctx_r10.customColumn);
} }
function RestResourceListFieldComponent_div_11_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "a", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r50 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("href", ctx_r50.val, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r50.val);
} }
function RestResourceListFieldComponent_div_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r51.restField.template)("componentClass", ctx_r51.val);
} }
function RestResourceListFieldComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_11_ng_container_1_Template, 3, 2, "ng-container", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_11_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r11.restField.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r11.restField.template);
} }
export class RestResourceListFieldComponent {
    constructor(dataSourceBuilder, langService) {
        this.dataSourceBuilder = dataSourceBuilder;
        this.langService = langService;
        this.customColumn = 'name';
        this.allColumns = [this.customColumn];
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.restField = this.value.restField;
        this.val = _.get(this.rowData, this.restField.label);
        switch (this.restField.type) {
            case REST_FIELD_TYPES.HAS_MANY:
                const datas = [];
                this.val.forEach((item) => {
                    var _a, _b, _c;
                    datas.push({
                        data: {
                            name: ((_c = (_b = (_a = this.restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restManyResources.label)
                                ? item[this.restField.metaData.listConfig.restManyResources.label]
                                : item,
                            item,
                        },
                    });
                });
                const rowsT = [
                    {
                        data: {
                            name: this.restField.name,
                            place: 'header-place',
                        },
                        children: datas,
                    },
                ];
                this.dataSource = this.dataSourceBuilder.create(rowsT);
                break;
            case REST_FIELD_TYPES.BELONG_TO_MANY:
                const items = [];
                this.val.forEach((item) => {
                    items.push({
                        data: {
                            name: item[this.restField.metaData.listConfig.restBelongToManyResources
                                .label],
                            item,
                        },
                    });
                });
                const rowsBelongToMany = [
                    {
                        data: {
                            name: this.restField.name,
                            place: 'header-place',
                        },
                        children: items,
                    },
                ];
                this.dataSource = this.dataSourceBuilder.create(rowsBelongToMany);
                break;
            case REST_FIELD_TYPES.HAS_ONE:
                if (this.val &&
                    !((_d = (_c = (_b = (_a = this.restField) === null || _a === void 0 ? void 0 : _a.metaData) === null || _b === void 0 ? void 0 : _b.listConfig) === null || _c === void 0 ? void 0 : _c.restHasOneResources) === null || _d === void 0 ? void 0 : _d.template)) {
                    this.val =
                        this.val[this.restField.metaData.listConfig.restHasOneResources.name];
                }
                break;
            case REST_FIELD_TYPES.COLOR:
                if (!this.val) {
                    this.val = '#E4E4E4';
                }
                break;
            default:
                break;
        }
        this.class = (_f = (_e = this.restField.metaData) === null || _e === void 0 ? void 0 : _e.listConfig) === null || _f === void 0 ? void 0 : _f.class;
        this.style = (_h = (_g = this.restField.metaData) === null || _g === void 0 ? void 0 : _g.listConfig) === null || _h === void 0 ? void 0 : _h.style;
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    get jsonValue() {
        if (this.restField.i18n == true) {
            this.restField.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                if (field == this.langService.selected) {
                    if (this.val[0] == '{')
                        this._jsonValue = JSON.parse(this.val)[field];
                    else if (typeof this.val !== 'string')
                        this._jsonValue = this.val[field];
                    else
                        this._jsonValue = this.val;
                }
            });
        }
        else {
            this._jsonValue = this.val;
        }
        if (typeof this.val == 'object')
            return JSON.stringify(this._jsonValue);
        else
            return this._jsonValue;
    }
}
RestResourceListFieldComponent.ɵfac = function RestResourceListFieldComponent_Factory(t) { return new (t || RestResourceListFieldComponent)(i0.ɵɵdirectiveInject(i1.NbTreeGridDataSourceBuilder), i0.ɵɵdirectiveInject(i2.RestLangService)); };
RestResourceListFieldComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListFieldComponent, selectors: [["ngx-rest-resource-list-field"]], inputs: { value: "value", rowData: "rowData" }, decls: 12, vars: 12, consts: [[4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["style", "height: 50px; display: flex", 4, "ngIf"], [3, "template", "componentClass"], [1, "text-center"], [3, "checked", "disabled"], [2, "height", "50px", "display", "flex"], [2, "align-self", "center"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["alt", "", 1, "rest-img", 3, "src"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"]], template: function RestResourceListFieldComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceListFieldComponent_div_0_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_1_Template, 3, 2, "div", 1);
        i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_3_Template, 3, 2, "div", 1);
        i0.ɵɵtemplate(4, RestResourceListFieldComponent_div_4_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(5, RestResourceListFieldComponent_div_5_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(6, RestResourceListFieldComponent_div_6_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(7, RestResourceListFieldComponent_div_7_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(8, RestResourceListFieldComponent_div_8_Template, 3, 2, "div", 0);
        i0.ɵɵtemplate(9, RestResourceListFieldComponent_div_9_Template, 5, 3, "div", 0);
        i0.ɵɵtemplate(10, RestResourceListFieldComponent_div_10_Template, 5, 3, "div", 0);
        i0.ɵɵtemplate(11, RestResourceListFieldComponent_div_11_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.TEXT || ctx.restField.type == ctx.REST_FIELD_TYPES.STRING || ctx.restField.type == ctx.REST_FIELD_TYPES.NUMBER || ctx.restField.type == ctx.REST_FIELD_TYPES.ENUM);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.BOOLEAN);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.COLOR);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.IMAGE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.HAS_ONE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.BELONG_TO);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.MORPH);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.JSON);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.DATE);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.HAS_MANY);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.BELONG_TO_MANY);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.restField.type == ctx.REST_FIELD_TYPES.LINK);
    } }, directives: [i3.NgIf, i4.CngHtmlCompilerComponent, i1.NbCheckboxComponent, i1.NbTreeGridComponent, i1.NbTreeGridRowDefDirective, i1.NbTreeGridColumnDefDirective, i1.NbTreeGridCellDefDirective, i1.NbTreeGridRowComponent, i1.NbTreeGridCellDirective, i5.FsIconCComponent], styles: ["@use \"@nebular/theme/styles/themes/default\";.rest-img[_ngcontent-%COMP%]{max-width:100px}.nb-theme-default   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-default   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-default   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-default   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-default   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-default   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}.nb-theme-dark   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-dark   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-dark   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-dark   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-dark   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-dark   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-cosmic   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-cosmic   [_nghost-%COMP%]     .row-toggle-button{color:#fff}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}.nb-theme-corporate   [_nghost-%COMP%]   button[nbTreeGridRowToggle][_ngcontent-%COMP%]{background:transparent;border:none;padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .search-label[_ngcontent-%COMP%]{display:block}.nb-theme-corporate   [_nghost-%COMP%]   .search-input[_ngcontent-%COMP%]{margin-bottom:1rem}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:100%}.nb-theme-corporate   [_nghost-%COMP%]     .row-toggle-button{color:#222b45}.nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-tree-grid-header-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{text-transform:capitalize}@media screen and (min-width: 400px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%]{width:50%}}@media screen and (min-width: 500px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%]{width:33.333%}}@media screen and (min-width: 600px){.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-name[_ngcontent-%COMP%]{width:31%}.nb-theme-corporate   [_nghost-%COMP%]   .nb-column-size[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-kind[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   .nb-column-items[_ngcontent-%COMP%]{width:23%}}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceListFieldComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-list-field',
                templateUrl: './rest.resource-list-field.component.html',
                styleUrls: ['./rest.resource-list-field.component.scss'],
            }]
    }], function () { return [{ type: i1.NbTreeGridDataSourceBuilder }, { type: i2.RestLangService }]; }, { value: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7SUNJMUIsNkJBQTBDO0lBQUMsWUFBUztJQUFBLDBCQUFlOzs7SUFBeEIsZUFBUztJQUFULDJDQUFTOzs7SUFFcEQsNkJBQXlDO0lBQ3ZDLHVDQUNvQjtJQUN0QiwwQkFBZTs7O0lBRk0sZUFBK0I7SUFBL0IscURBQStCLCtCQUFBOzs7SUFYdEQsMkJBT0M7SUFDQyx1R0FBbUU7SUFFbkUsdUdBR2U7SUFDakIsaUJBQU07OztJQU5XLGVBQXlCO0lBQXpCLGlEQUF5QjtJQUV6QixlQUF3QjtJQUF4QixnREFBd0I7OztJQU92Qyw2QkFBMEM7SUFDeEMsaUNBQTZEO0lBQy9ELDBCQUFlOzs7SUFEQSxlQUFlO0lBQWYscUNBQWUsa0JBQUE7OztJQUc5Qiw2QkFBeUM7SUFDdkMsdUNBQ29CO0lBQ3RCLDBCQUFlOzs7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QUVOLCtFQU1NO1FBRU4sK0VBTU07UUFFTiwrRUFNTTtRQUVOLCtFQVNNO1FBRU4sK0VBTU07UUFFTiwrRUFpQ007UUFFTixpRkFxQ007UUFFTixpRkFTTTs7UUFoTEgsbU9BTUg7UUFTTSxlQUFnRDtRQUFoRCx5RUFBZ0Q7UUFZbkQsZUFBOEM7UUFBOUMsdUVBQThDO1FBYTNDLGVBQThDO1FBQTlDLHVFQUE4QztRQVU5QyxlQUFnRDtRQUFoRCx5RUFBZ0Q7UUFRaEQsZUFBa0Q7UUFBbEQsMkVBQWtEO1FBUWxELGVBQThDO1FBQTlDLHVFQUE4QztRQVE5QyxlQUE2QztRQUE3QyxzRUFBNkM7UUFXN0MsZUFBNkM7UUFBN0Msc0VBQTZDO1FBUTdDLGVBQWlEO1FBQWpELDBFQUFpRDtRQW1DakQsZUFBdUQ7UUFBdkQsZ0ZBQXVEO1FBdUN2RCxlQUE2QztRQUE3QyxzRUFBNkM7O3VGRHZKdEMsOEJBQThCO2NBTDFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsOEJBQThCO2dCQUN4QyxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQzthQUN6RDs0R0FFVSxLQUFLO2tCQUFiLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWaWV3Q2VsbCB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XG5pbXBvcnQgeyBSZXN0RmllbGQsIFJFU1RfRklFTERfVFlQRVMgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7XG4gIE5iVHJlZUdyaWREYXRhU291cmNlLFxuICBOYlNvcnREaXJlY3Rpb24sXG4gIE5iVHJlZUdyaWREYXRhU291cmNlQnVpbGRlcixcbiAgTmJTb3J0UmVxdWVzdCxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1saXN0LWZpZWxkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIFZpZXdDZWxsIHtcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcbiAgQElucHV0KCkgcm93RGF0YTogYW55O1xuICB2YWw6IGFueTtcbiAgcmVzdEZpZWxkITogUmVzdEZpZWxkO1xuICBjbGFzcyE6IHN0cmluZztcbiAgc3R5bGUhOiBzdHJpbmc7XG5cbiAgY3VzdG9tQ29sdW1uID0gJ25hbWUnO1xuICBhbGxDb2x1bW5zID0gW3RoaXMuY3VzdG9tQ29sdW1uXTtcbiAgZGF0YVNvdXJjZSE6IE5iVHJlZUdyaWREYXRhU291cmNlPGFueT47XG4gIGltYWdlOiBhbnk7XG4gIC8vanNvbiBvcHRpb25zXG4gIF9qc29uVmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRhdGFTb3VyY2VCdWlsZGVyOiBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXI8YW55PixcbiAgICBwcml2YXRlIGxhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2VcbiAgKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJlc3RGaWVsZCA9IHRoaXMudmFsdWUucmVzdEZpZWxkO1xuICAgIHRoaXMudmFsID0gXy5nZXQodGhpcy5yb3dEYXRhLCB0aGlzLnJlc3RGaWVsZC5sYWJlbCk7XG4gICAgc3dpdGNoICh0aGlzLnJlc3RGaWVsZC50eXBlKSB7XG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgIGNvbnN0IGRhdGFzOiBhbnkgPSBbXTtcblxuICAgICAgICB0aGlzLnZhbC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBkYXRhcy5wdXNoKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5yZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlc1xuICAgICAgICAgICAgICAgIC5sYWJlbFxuICAgICAgICAgICAgICAgID8gaXRlbVtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy5sYWJlbFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogaXRlbSxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJvd3NUID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5yZXN0RmllbGQubmFtZSxcbiAgICAgICAgICAgICAgcGxhY2U6ICdoZWFkZXItcGxhY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBkYXRhcyxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSB0aGlzLmRhdGFTb3VyY2VCdWlsZGVyLmNyZWF0ZShyb3dzVCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgIGNvbnN0IGl0ZW1zOiBhbnkgPSBbXTtcblxuICAgICAgICB0aGlzLnZhbC5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbmFtZTogaXRlbVtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAgIC5sYWJlbFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgcm93c0JlbG9uZ1RvTWFueSA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c0JlbG9uZ1RvTWFueSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX09ORTpcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMudmFsICYmXG4gICAgICAgICAgIXRoaXMucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZz8ucmVzdEhhc09uZVJlc291cmNlcz8udGVtcGxhdGVcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhpcy52YWwgPVxuICAgICAgICAgICAgdGhpcy52YWxbXG4gICAgICAgICAgICAgIHRoaXMucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWcucmVzdEhhc09uZVJlc291cmNlcy5uYW1lXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SOlxuICAgICAgICBpZiAoIXRoaXMudmFsKSB7XG4gICAgICAgICAgdGhpcy52YWwgPSAnI0U0RTRFNCc7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzID0gdGhpcy5yZXN0RmllbGQubWV0YURhdGE/Lmxpc3RDb25maWc/LmNsYXNzO1xuICAgIHRoaXMuc3R5bGUgPSB0aGlzLnJlc3RGaWVsZC5tZXRhRGF0YT8ubGlzdENvbmZpZz8uc3R5bGU7XG4gIH1cblxuICBnZXQgUkVTVF9GSUVMRF9UWVBFUygpIHtcbiAgICByZXR1cm4gUkVTVF9GSUVMRF9UWVBFUztcbiAgfVxuICBnZXQganNvblZhbHVlKCkge1xuICAgIGlmICh0aGlzLnJlc3RGaWVsZC5pMThuID09IHRydWUpIHtcbiAgICAgIHRoaXMucmVzdEZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmpzb25GaWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQgPT0gdGhpcy5sYW5nU2VydmljZS5zZWxlY3RlZCkge1xuICAgICAgICAgIGlmICh0aGlzLnZhbFswXSA9PSAneycpIHRoaXMuX2pzb25WYWx1ZSA9IEpTT04ucGFyc2UodGhpcy52YWwpW2ZpZWxkXTtcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpcy52YWwgIT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgdGhpcy5fanNvblZhbHVlID0gdGhpcy52YWxbZmllbGRdO1xuICAgICAgICAgIGVsc2UgdGhpcy5fanNvblZhbHVlID0gdGhpcy52YWw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9qc29uVmFsdWUgPSB0aGlzLnZhbDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMudmFsID09ICdvYmplY3QnKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5fanNvblZhbHVlKTtcbiAgICBlbHNlIHJldHVybiB0aGlzLl9qc29uVmFsdWU7XG4gIH1cbn1cbiIsIjxkaXZcbiAgKm5nSWY9XCJcbiAgICByZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRFWFQgfHxcbiAgICByZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgIHJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8XG4gICAgcmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXG4gIFwiXG4+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+IHt7IHZhbCB9fTwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8Y25nLWh0bWwtY29tcGlsZXIgW3RlbXBsYXRlXT1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiIFtjb21wb25lbnRDbGFzc109XCJ2YWxcIj5cbiAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgIDxuYi1jaGVja2JveCBbY2hlY2tlZF09XCJ2YWxcIiBbZGlzYWJsZWRdPVwidHJ1ZVwiPjwvbmItY2hlY2tib3g+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8Y25nLWh0bWwtY29tcGlsZXIgW3RlbXBsYXRlXT1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiIFtjb21wb25lbnRDbGFzc109XCJ2YWxcIj5cbiAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2XG4gICpuZ0lmPVwicmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlwiXG4gIHN0eWxlPVwiaGVpZ2h0OiA1MHB4OyBkaXNwbGF5OiBmbGV4XCJcbj5cbiAgPG5nLWNvbnRhaW5lciBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlclwiPnt7IHZhbCB9fTwvbmctY29udGFpbmVyPlxuICA8aW5wdXRcbiAgICBzdHlsZT1cImhlaWdodDogNDVweDsgd2lkdGg6IDgwcHg7IG1hcmdpbi1sZWZ0OiA1cHhcIlxuICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cInZhbFwiXG4gICAgW3ZhbHVlXT1cInZhbFwiXG4gICAgdHlwZT1cImNvbG9yXCJcbiAgLz5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8aW1nIGNsYXNzPVwicmVzdC1pbWdcIiBbc3JjXT1cInZhbFwiIGFsdD1cIlwiIFtzdHlsZV09XCJzdHlsZVwiXG4gIC8+PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8Y25nLWh0bWwtY29tcGlsZXIgW3RlbXBsYXRlXT1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiIFtjb21wb25lbnRDbGFzc109XCJ2YWxcIj5cbiAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfT05FXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+IHt7IHZhbCB9fTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+IHt7IHZhbCB9fTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTU9SUEhcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZXN0RmllbGQudGVtcGxhdGVcIj4ge3sgdmFsIH19PC9uZy1jb250YWluZXI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8Y25nLWh0bWwtY29tcGlsZXIgW3RlbXBsYXRlXT1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiIFtjb21wb25lbnRDbGFzc109XCJ2YWxcIj5cbiAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+IHt7IGpzb25WYWx1ZSB9fTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICBbdGVtcGxhdGVdPVwicmVzdEZpZWxkLnRlbXBsYXRlXCJcbiAgICAgIFtjb21wb25lbnRDbGFzc109XCJqc29uVmFsdWVcIlxuICAgID5cbiAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PlxuXG48ZGl2ICpuZ0lmPVwicmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+IHt7IHZhbCB9fTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSEFTX01BTllcIj5cbiAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImRhdGFTb3VyY2VcIj5cbiAgICA8dHIgbmJUcmVlR3JpZFJvdyAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIj48L3RyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nSWY9XCIhcmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcIlxuICAgICAgICA+XG4gICAgICAgICAge3sgcm93LmRhdGFbY3VzdG9tQ29sdW1uXSB9fVxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nSWY9XCJyZXN0RmllbGQ/Lm1ldGFEYXRhPy5saXN0Q29uZmlnPy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3sgcmVzdEZpZWxkLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICByZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZy5yZXN0TWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICBbY29tcG9uZW50Q2xhc3NdPVwicm93LmRhdGEuaXRlbVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2NuZy1odG1sLWNvbXBpbGVyPlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvdGFibGU+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcIj5cbiAgPHRhYmxlIFtuYlRyZWVHcmlkXT1cImRhdGFTb3VyY2VcIj5cbiAgICA8dHIgbmJUcmVlR3JpZFJvdyAqbmJUcmVlR3JpZFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGFsbENvbHVtbnNcIj48L3RyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBbbmJUcmVlR3JpZENvbHVtbkRlZl09XCJjdXN0b21Db2x1bW5cIj5cbiAgICAgIDx0ZCBuYlRyZWVHcmlkQ2VsbCAqbmJUcmVlR3JpZENlbGxEZWY9XCJsZXQgcm93XCI+XG4gICAgICAgIDxuZ3gtZnMtaWNvblxuICAgICAgICAgIFtleHBhbmRlZF09XCJyb3cuZXhwYW5kZWRcIlxuICAgICAgICAgIFtwbGFjZV09XCJyb3cuZGF0YS5wbGFjZVwiXG4gICAgICAgID48L25neC1mcy1pY29uPlxuICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICFyZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZy5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX1cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICByZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZy5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuICpuZ0lmPVwicm93LmRhdGEucGxhY2VcIj57eyByZXN0RmllbGQubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJvdy5kYXRhLnBsYWNlXCI+XG4gICAgICAgICAgICA8Y25nLWh0bWwtY29tcGlsZXJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cIlxuICAgICAgICAgICAgICAgIHJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnLnJlc3RCZWxvbmdUb01hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cInJvdy5kYXRhLml0ZW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3RhYmxlPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJyZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkxJTktcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8YSBbaHJlZl09XCJ2YWxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+e3sgdmFsIH19PC9hPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cbiJdfQ==