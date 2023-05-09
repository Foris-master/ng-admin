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
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r11.val, "");
} }
function RestResourceListFieldComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r12.restField.template)("componentClass", ctx_r12.val);
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
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r13.val)("disabled", true);
} }
function RestResourceListFieldComponent_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r14.restField.template)("componentClass", ctx_r14.val);
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
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵstyleMap(ctx_r15.style);
    i0.ɵɵproperty("src", ctx_r15.val, i0.ɵɵsanitizeUrl);
} }
function RestResourceListFieldComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r16.restField.template)("componentClass", ctx_r16.val);
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
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r17.val, "");
} }
function RestResourceListFieldComponent_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r18.restField.template)("componentClass", ctx_r18.val);
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
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r19.val, "");
} }
function RestResourceListFieldComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r20.restField.template)("componentClass", ctx_r20.val);
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
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r21.val, "");
} }
function RestResourceListFieldComponent_div_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r22.restField.template)("componentClass", ctx_r22.val);
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
    const ctx_r23 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r23.jsonValue, "");
} }
function RestResourceListFieldComponent_div_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r24.restField.template)("componentClass", ctx_r24.jsonValue);
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
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r25.val, "");
} }
function RestResourceListFieldComponent_div_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r26.restField.template)("componentClass", ctx_r26.val);
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
    const row_r30 = i0.ɵɵnextContext().$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r30.data[ctx_r31.customColumn], " ");
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r34.restField.name);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r30 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r35 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r35.restField.metaData.listConfig.restManyResources.template)("componentClass", row_r30.data.item);
} }
function RestResourceListFieldComponent_div_9_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_9_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r30.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r30.data.place);
} }
function RestResourceListFieldComponent_div_9_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵelement(1, "ngx-fs-icon", 16);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_9_td_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_9_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r30 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r30.expanded)("place", row_r30.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(ctx_r28.restField == null ? null : ctx_r28.restField.metaData == null ? null : ctx_r28.restField.metaData.listConfig == null ? null : ctx_r28.restField.metaData.listConfig.restManyResources.template));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r28.restField == null ? null : ctx_r28.restField.metaData == null ? null : ctx_r28.restField.metaData.listConfig == null ? null : ctx_r28.restField.metaData.listConfig.restManyResources.template);
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
    const row_r41 = i0.ɵɵnextContext().$implicit;
    const ctx_r42 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", row_r41.data[ctx_r42.customColumn], " ");
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r45.restField.name);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "cng-html-compiler", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r41 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r46 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("template", ctx_r46.restField.metaData.listConfig.restBelongToManyResources.template)("componentClass", row_r41.data.item);
} }
function RestResourceListFieldComponent_div_10_td_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceListFieldComponent_div_10_td_4_ng_container_3_span_1_Template, 2, 1, "span", 0);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_td_4_ng_container_3_ng_container_2_Template, 2, 2, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const row_r41 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", row_r41.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !row_r41.data.place);
} }
function RestResourceListFieldComponent_div_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 15);
    i0.ɵɵelement(1, "ngx-fs-icon", 16);
    i0.ɵɵtemplate(2, RestResourceListFieldComponent_div_10_td_4_ng_container_2_Template, 2, 1, "ng-container", 0);
    i0.ɵɵtemplate(3, RestResourceListFieldComponent_div_10_td_4_ng_container_3_Template, 3, 2, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r41 = ctx.$implicit;
    const ctx_r39 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("expanded", row_r41.expanded)("place", row_r41.data.place);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r39.restField.metaData.listConfig.restBelongToManyResources.template);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r39.restField.metaData.listConfig.restBelongToManyResources.template);
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
RestResourceListFieldComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceListFieldComponent, selectors: [["ngx-rest-resource-list-field"]], inputs: { value: "value", rowData: "rowData" }, decls: 11, vars: 11, consts: [[4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["style", "height: 50px; display: flex", 4, "ngIf"], [3, "template", "componentClass"], [1, "text-center"], [3, "checked", "disabled"], [2, "height", "50px", "display", "flex"], [2, "align-self", "center"], ["disabled", "true", "type", "color", 2, "height", "45px", "width", "80px", "margin-left", "5px", 3, "placeholder", "value"], ["alt", "", 1, "rest-img", 3, "src"], [3, "nbTreeGrid"], ["nbTreeGridRow", "", 4, "nbTreeGridRowDef", "nbTreeGridRowDefColumns"], [3, "nbTreeGridColumnDef"], ["nbTreeGridCell", "", 4, "nbTreeGridCellDef"], ["nbTreeGridRow", ""], ["nbTreeGridCell", ""], [3, "expanded", "place"]], template: function RestResourceListFieldComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE2QixNQUFNLGVBQWUsQ0FBQztBQUU1RSxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUUvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7SUNJMUIsNkJBQTBDO0lBQUMsWUFBUztJQUFBLDBCQUFlOzs7SUFBeEIsZUFBUztJQUFULDJDQUFTOzs7SUFFcEQsNkJBQXlDO0lBQ3ZDLHVDQUNvQjtJQUN0QiwwQkFBZTs7O0lBRk0sZUFBK0I7SUFBL0IscURBQStCLCtCQUFBOzs7SUFYdEQsMkJBT0M7SUFDQyx1R0FBbUU7SUFFbkUsdUdBR2U7SUFDakIsaUJBQU07OztJQU5XLGVBQXlCO0lBQXpCLGlEQUF5QjtJQUV6QixlQUF3QjtJQUF4QixnREFBd0I7OztJQU92Qyw2QkFBMEM7SUFDeEMsaUNBQTZEO0lBQy9ELDBCQUFlOzs7SUFEQSxlQUFlO0lBQWYscUNBQWUsa0JBQUE7OztJQUc5Qiw2QkFBeUM7SUFDdkMsdUNBQ29CO0lBQ3RCLDBCQUFlOzs7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N0Msc0VBQTZDO1FBUTdDLGVBQWlEO1FBQWpELDBFQUFpRDtRQW1DakQsZUFBdUQ7UUFBdkQsZ0ZBQXVEOzt1RkRoSGhELDhCQUE4QjtjQUwxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7YUFDekQ7NEdBRVUsS0FBSztrQkFBYixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmlld0NlbGwgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xuaW1wb3J0IHsgUmVzdEZpZWxkLCBSRVNUX0ZJRUxEX1RZUEVTIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge1xuICBOYlRyZWVHcmlkRGF0YVNvdXJjZSxcbiAgTmJTb3J0RGlyZWN0aW9uLFxuICBOYlRyZWVHcmlkRGF0YVNvdXJjZUJ1aWxkZXIsXG4gIE5iU29ydFJlcXVlc3QsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtcmVzb3VyY2UtbGlzdC1maWVsZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBWaWV3Q2VsbCB7XG4gIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcbiAgdmFsOiBhbnk7XG4gIHJlc3RGaWVsZCE6IFJlc3RGaWVsZDtcbiAgY2xhc3MhOiBzdHJpbmc7XG4gIHN0eWxlITogc3RyaW5nO1xuXG4gIGN1c3RvbUNvbHVtbiA9ICduYW1lJztcbiAgYWxsQ29sdW1ucyA9IFt0aGlzLmN1c3RvbUNvbHVtbl07XG4gIGRhdGFTb3VyY2UhOiBOYlRyZWVHcmlkRGF0YVNvdXJjZTxhbnk+O1xuICBpbWFnZTogYW55O1xuICAvL2pzb24gb3B0aW9uc1xuICBfanNvblZhbHVlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkYXRhU291cmNlQnVpbGRlcjogTmJUcmVlR3JpZERhdGFTb3VyY2VCdWlsZGVyPGFueT4sXG4gICAgcHJpdmF0ZSBsYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlXG4gICkge31cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXN0RmllbGQgPSB0aGlzLnZhbHVlLnJlc3RGaWVsZDtcbiAgICB0aGlzLnZhbCA9IF8uZ2V0KHRoaXMucm93RGF0YSwgdGhpcy5yZXN0RmllbGQubGFiZWwpO1xuICAgIHN3aXRjaCAodGhpcy5yZXN0RmllbGQudHlwZSkge1xuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICBjb25zdCBkYXRhczogYW55ID0gW107XG5cbiAgICAgICAgdGhpcy52YWwuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgZGF0YXMucHVzaCh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMucmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXNcbiAgICAgICAgICAgICAgICAubGFiZWxcbiAgICAgICAgICAgICAgICA/IGl0ZW1bXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMubGFiZWxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICA6IGl0ZW0sXG4gICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByb3dzVCA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMucmVzdEZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgIHBsYWNlOiAnaGVhZGVyLXBsYWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogZGF0YXMsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gdGhpcy5kYXRhU291cmNlQnVpbGRlci5jcmVhdGUocm93c1QpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICBjb25zdCBpdGVtczogYW55ID0gW107XG5cbiAgICAgICAgdGhpcy52YWwuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgIG5hbWU6IGl0ZW1bXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZy5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzXG4gICAgICAgICAgICAgICAgICAubGFiZWxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHJvd3NCZWxvbmdUb01hbnkgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnJlc3RGaWVsZC5uYW1lLFxuICAgICAgICAgICAgICBwbGFjZTogJ2hlYWRlci1wbGFjZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZUJ1aWxkZXIuY3JlYXRlKHJvd3NCZWxvbmdUb01hbnkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19PTkU6XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLnZhbCAmJlxuICAgICAgICAgICF0aGlzLnJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWc/LnJlc3RIYXNPbmVSZXNvdXJjZXM/LnRlbXBsYXRlXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMudmFsID1cbiAgICAgICAgICAgIHRoaXMudmFsW1xuICAgICAgICAgICAgICB0aGlzLnJlc3RGaWVsZC5tZXRhRGF0YS5saXN0Q29uZmlnLnJlc3RIYXNPbmVSZXNvdXJjZXMubmFtZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5DT0xPUjpcbiAgICAgICAgaWYgKCF0aGlzLnZhbCkge1xuICAgICAgICAgIHRoaXMudmFsID0gJyNFNEU0RTQnO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5jbGFzcyA9IHRoaXMucmVzdEZpZWxkLm1ldGFEYXRhPy5saXN0Q29uZmlnPy5jbGFzcztcbiAgICB0aGlzLnN0eWxlID0gdGhpcy5yZXN0RmllbGQubWV0YURhdGE/Lmxpc3RDb25maWc/LnN0eWxlO1xuICB9XG5cbiAgZ2V0IFJFU1RfRklFTERfVFlQRVMoKSB7XG4gICAgcmV0dXJuIFJFU1RfRklFTERfVFlQRVM7XG4gIH1cbiAgZ2V0IGpzb25WYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5yZXN0RmllbGQuaTE4biA9PSB0cnVlKSB7XG4gICAgICB0aGlzLnJlc3RGaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkID09IHRoaXMubGFuZ1NlcnZpY2Uuc2VsZWN0ZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy52YWxbMF0gPT0gJ3snKSB0aGlzLl9qc29uVmFsdWUgPSBKU09OLnBhcnNlKHRoaXMudmFsKVtmaWVsZF07XG4gICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXMudmFsICE9PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHRoaXMuX2pzb25WYWx1ZSA9IHRoaXMudmFsW2ZpZWxkXTtcbiAgICAgICAgICBlbHNlIHRoaXMuX2pzb25WYWx1ZSA9IHRoaXMudmFsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fanNvblZhbHVlID0gdGhpcy52YWw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnZhbCA9PSAnb2JqZWN0JykgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuX2pzb25WYWx1ZSk7XG4gICAgZWxzZSByZXR1cm4gdGhpcy5fanNvblZhbHVlO1xuICB9XG59XG4iLCI8ZGl2XG4gICpuZ0lmPVwiXG4gICAgcmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUIHx8XG4gICAgcmVzdEZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICByZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fFxuICAgIHJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRU5VTVxuICBcIlxuPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlc3RGaWVsZC50ZW1wbGF0ZVwiPiB7eyB2YWwgfX08L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyZXN0RmllbGQudGVtcGxhdGVcIj5cbiAgICA8bmItY2hlY2tib3ggW2NoZWNrZWRdPVwidmFsXCIgW2Rpc2FibGVkXT1cInRydWVcIj48L25iLWNoZWNrYm94PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdlxuICAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcIlxuICBzdHlsZT1cImhlaWdodDogNTBweDsgZGlzcGxheTogZmxleFwiXG4+XG4gIDxuZy1jb250YWluZXIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXJcIj57eyB2YWwgfX08L25nLWNvbnRhaW5lcj5cbiAgPGlucHV0XG4gICAgc3R5bGU9XCJoZWlnaHQ6IDQ1cHg7IHdpZHRoOiA4MHB4OyBtYXJnaW4tbGVmdDogNXB4XCJcbiAgICBkaXNhYmxlZD1cInRydWVcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJ2YWxcIlxuICAgIFt2YWx1ZV09XCJ2YWxcIlxuICAgIHR5cGU9XCJjb2xvclwiXG4gIC8+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0VcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGltZyBjbGFzcz1cInJlc3QtaW1nXCIgW3NyY109XCJ2YWxcIiBhbHQ9XCJcIiBbc3R5bGVdPVwic3R5bGVcIlxuICAvPjwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSEFTX09ORVwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlc3RGaWVsZC50ZW1wbGF0ZVwiPiB7eyB2YWwgfX08L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgIDxjbmctaHRtbC1jb21waWxlciBbdGVtcGxhdGVdPVwicmVzdEZpZWxkLnRlbXBsYXRlXCIgW2NvbXBvbmVudENsYXNzXT1cInZhbFwiPlxuICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJyZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1wiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlc3RGaWVsZC50ZW1wbGF0ZVwiPiB7eyB2YWwgfX08L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgIDxjbmctaHRtbC1jb21waWxlciBbdGVtcGxhdGVdPVwicmVzdEZpZWxkLnRlbXBsYXRlXCIgW2NvbXBvbmVudENsYXNzXT1cInZhbFwiPlxuICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJyZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk1PUlBIXCI+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcmVzdEZpZWxkLnRlbXBsYXRlXCI+IHt7IHZhbCB9fTwvbmctY29udGFpbmVyPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwicmVzdEZpZWxkLnRlbXBsYXRlXCI+XG4gICAgPGNuZy1odG1sLWNvbXBpbGVyIFt0ZW1wbGF0ZV09XCJyZXN0RmllbGQudGVtcGxhdGVcIiBbY29tcG9uZW50Q2xhc3NdPVwidmFsXCI+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSlNPTlwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlc3RGaWVsZC50ZW1wbGF0ZVwiPiB7eyBqc29uVmFsdWUgfX08L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgW3RlbXBsYXRlXT1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiXG4gICAgICBbY29tcG9uZW50Q2xhc3NdPVwianNvblZhbHVlXCJcbiAgICA+XG4gICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj5cblxuPGRpdiAqbmdJZj1cInJlc3RGaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVwiPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXJlc3RGaWVsZC50ZW1wbGF0ZVwiPiB7eyB2YWwgfX08L25nLWNvbnRhaW5lcj5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc3RGaWVsZC50ZW1wbGF0ZVwiPlxuICAgIDxjbmctaHRtbC1jb21waWxlciBbdGVtcGxhdGVdPVwicmVzdEZpZWxkLnRlbXBsYXRlXCIgW2NvbXBvbmVudENsYXNzXT1cInZhbFwiPlxuICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gIDwvbmctY29udGFpbmVyPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJyZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCI+XG4gIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJkYXRhU291cmNlXCI+XG4gICAgPHRyIG5iVHJlZUdyaWRSb3cgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCI+PC90cj5cblxuICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiIXJlc3RGaWVsZD8ubWV0YURhdGE/Lmxpc3RDb25maWc/LnJlc3RNYW55UmVzb3VyY2VzLnRlbXBsYXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIHt7IHJvdy5kYXRhW2N1c3RvbUNvbHVtbl0gfX1cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwicmVzdEZpZWxkPy5tZXRhRGF0YT8ubGlzdENvbmZpZz8ucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gKm5nSWY9XCJyb3cuZGF0YS5wbGFjZVwiPnt7IHJlc3RGaWVsZC5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhcm93LmRhdGEucGxhY2VcIj5cbiAgICAgICAgICAgIDxjbmctaHRtbC1jb21waWxlclxuICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiXG4gICAgICAgICAgICAgICAgcmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWcucmVzdE1hbnlSZXNvdXJjZXMudGVtcGxhdGVcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgW2NvbXBvbmVudENsYXNzXT1cInJvdy5kYXRhLml0ZW1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9jbmctaHRtbC1jb21waWxlcj5cbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L3RhYmxlPlxuPC9kaXY+XG5cbjxkaXYgKm5nSWY9XCJyZXN0RmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXCI+XG4gIDx0YWJsZSBbbmJUcmVlR3JpZF09XCJkYXRhU291cmNlXCI+XG4gICAgPHRyIG5iVHJlZUdyaWRSb3cgKm5iVHJlZUdyaWRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBhbGxDb2x1bW5zXCI+PC90cj5cblxuICAgIDxuZy1jb250YWluZXIgW25iVHJlZUdyaWRDb2x1bW5EZWZdPVwiY3VzdG9tQ29sdW1uXCI+XG4gICAgICA8dGQgbmJUcmVlR3JpZENlbGwgKm5iVHJlZUdyaWRDZWxsRGVmPVwibGV0IHJvd1wiPlxuICAgICAgICA8bmd4LWZzLWljb25cbiAgICAgICAgICBbZXhwYW5kZWRdPVwicm93LmV4cGFuZGVkXCJcbiAgICAgICAgICBbcGxhY2VdPVwicm93LmRhdGEucGxhY2VcIlxuICAgICAgICA+PC9uZ3gtZnMtaWNvbj5cbiAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAhcmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWcucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICB7eyByb3cuZGF0YVtjdXN0b21Db2x1bW5dIH19XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgcmVzdEZpZWxkLm1ldGFEYXRhLmxpc3RDb25maWcucmVzdEJlbG9uZ1RvTWFueVJlc291cmNlcy50ZW1wbGF0ZVxuICAgICAgICAgIFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiAqbmdJZj1cInJvdy5kYXRhLnBsYWNlXCI+e3sgcmVzdEZpZWxkLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFyb3cuZGF0YS5wbGFjZVwiPlxuICAgICAgICAgICAgPGNuZy1odG1sLWNvbXBpbGVyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJcbiAgICAgICAgICAgICAgICByZXN0RmllbGQubWV0YURhdGEubGlzdENvbmZpZy5yZXN0QmVsb25nVG9NYW55UmVzb3VyY2VzLnRlbXBsYXRlXG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIFtjb21wb25lbnRDbGFzc109XCJyb3cuZGF0YS5pdGVtXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvY25nLWh0bWwtY29tcGlsZXI+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC90YWJsZT5cbjwvZGl2PlxuIl19