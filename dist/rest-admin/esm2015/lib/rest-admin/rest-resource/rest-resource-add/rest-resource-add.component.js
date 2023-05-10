import { LocalDataSource } from 'ng2-smart-table';
import { REST_FIELD_TYPES } from '../models/rest-resource.model';
import { Component, Input, ViewChild, } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { base64ToFile } from 'ngx-image-cropper';
import { ALPHABET } from '../service/rest-export.service';
import { UploadFileComponent } from '../components/upload-file/upload-file.component';
import { RestResourceListFieldComponent } from '../components/rest.resource-list-field/rest.resource-list-field.component';
import { RestResourceEditorFieldsComponent } from '../components/rest-resource-editor-fields/rest-resource-editor-fields.component';
import { Validator } from 'ngx-input-validator';
import * as moment from 'moment';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../service/rest-resource.service";
import * as i3 from "../service/rest-admin-config.service";
import * as i4 from "@angular/router";
import * as i5 from "@nebular/theme";
import * as i6 from "../service/rest-export.service";
import * as i7 from "../service/notification.service";
const _c0 = ["belongTo"];
const _c1 = ["autoBelongToMany"];
function RestResourceAddComponent_nb_card_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r0.resource.editConfig.title, " ");
} }
function RestResourceAddComponent_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r1.resource.addConfig.title, " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r28 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r28.$implicit;
    const i_r6 = ctx_r28.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r29.$implicit;
    const i_r6 = ctx_r29.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(3);
    const field_r5 = ctx_r31.$implicit;
    const i_r6 = ctx_r31.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.confirmLabel) ? field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.confirmLabel : i0.ɵɵpipeBind1(4, 5, field_r5.label + "_confirmation"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label + "_confirmation")("formControlName", (field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.confirmField) ? field_r5.metaData.addConfig.passwordOptions.confirmField : field_r5.name + "_confirmation");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_ng_container_6_Template, 6, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r32.$implicit;
    const i_r6 = ctx_r32.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.isNeedConfirm);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r33.$implicit;
    const i_r6 = ctx_r33.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 24);
    i0.ɵɵelement(5, "nb-datepicker", null, 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r34 = i0.ɵɵreference(6);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", field_r5.label)("nbDatepicker", _r34)("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-date-timepicker", 27, 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r36 = i0.ɵɵreference(6);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("nbDatepicker", _r36)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 29);
    i0.ɵɵelement(5, "nb-timepicker", null, 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(6);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbTimepicker", _r38)("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r41 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r41.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r41.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 31);
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 32);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r5.name)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r5.metaData.addConfig.enumOptions);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵelementStart(2, "label", 35);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-toggle", 36);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r44 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("src", ctx_r44.urlsImage[field_r5.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template_ngx_dropzone_preview_removed_0_listener() { i0.ɵɵrestoreView(_r51); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r49 = i0.ɵɵnextContext(2); return ctx_r49.onRemove(field_r5); });
    i0.ɵɵelementStart(1, "ngx-dropzone-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r48 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r48)("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r48.name, " (", f_r48.type, ")");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r54); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.onSelect($event, field_r5); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r18.urlsImage[field_r5.name] != "" && ctx_r18.filesUpload[field_r5.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.filesUpload[field_r5.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r18.filesUpload[field_r5.name]);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r56 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("src", ctx_r56.urlsImage[field_r5.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r65); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.onRemove(field_r5); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r62 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r62)("removable", true);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r68 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r68); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r66 = i0.ɵɵnextContext(2); return ctx_r66.activeCroper(field_r5); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 45);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r71); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r69 = i0.ɵɵnextContext(2); return ctx_r69.imageCropped($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r71); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r72 = i0.ɵɵnextContext(2); return ctx_r72.saveCroper(field_r5); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r71); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r74 = i0.ɵɵnextContext(2); return ctx_r74.desactiveCrop(field_r5); });
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r60 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r60.controlCroper[field_r5.name])("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r79 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r79); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r77 = i0.ɵɵnextContext(2); return ctx_r77.onSelect($event, field_r5); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 43);
    i0.ɵɵtemplate(9, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template, 6, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r19.urlsImage[field_r5.name] != "" && ctx_r19.filesUpload[field_r5.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.filesUpload[field_r5.name].length <= 0 && ctx_r19.urlsImage[field_r5.name] == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r19.filesUpload[field_r5.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r19.isCrop[field_r5.name] && ctx_r19.controlCroper[field_r5.name] != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.isCrop[field_r5.name]);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 50);
} if (rf & 2) {
    const tree_r82 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r82);
} }
const _c2 = function (a0) { return [a0]; };
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 47);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r85); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r83 = i0.ɵɵnextContext(2); return ctx_r83.onTagRemove($event, field_r5.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 48);
    i0.ɵɵelementStart(6, "input", 49);
    i0.ɵɵlistener("tagAdd", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template_input_tagAdd_6_listener($event) { i0.ɵɵrestoreView(_r85); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r86 = i0.ɵɵnextContext(2); return ctx_r86.onTagAdd($event, field_r5.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r20.form.get(i0.ɵɵpureFunction1(6, _c2, field_r5.name)).value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "input", 57);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext(3);
    const field_r5 = ctx_r93.$implicit;
    const i_r6 = ctx_r93.index;
    const ctx_r90 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("value", ctx_r90.belongToValue[field_r5.name] ? ctx_r90.belongToValue[field_r5.name] : "")("id", i_r6 + 100);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r94 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r94[(field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig.belongToOptions == null ? null : field_r5.metaData.addConfig.belongToOptions.value) ? field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.belongToOptions == null ? null : field_r5.metaData.addConfig.belongToOptions.value : "id"])("attributes", field_r5.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r94[field_r5.metaData.addConfig.belongToOptions.template ? field_r5.metaData.addConfig.belongToOptions.template : field_r5.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "input", 51, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r98); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r96 = i0.ɵɵnextContext(2); return ctx_r96.filterInput($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r98); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r99 = i0.ɵɵnextContext(2); return ctx_r99.onSelectionChange($event, field_r5); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r91 = i0.ɵɵreference(10);
    const ctx_r101 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r101.$implicit;
    const i_r6 = ctx_r101.index;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r5.label));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name)("nbAutocomplete", _r91)("id", i_r6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.belongToOptions == null ? null : field_r5.metaData.addConfig.belongToOptions.secondField));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 9, ctx_r21.allFilterContains[field_r5.name]));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 64);
} if (rf & 2) {
    const tree_r106 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r106[field_r5.metaData.addConfig.belongToManyOptions.template ? field_r5.metaData.addConfig.belongToManyOptions.template : field_r5.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r5.metaData.attributes);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r108 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r108)("attributes", field_r5.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r108[field_r5.metaData.addConfig.belongToManyOptions.template ? field_r5.metaData.addConfig.belongToManyOptions.template : field_r5.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r112 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 59);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r112); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r110 = i0.ɵɵnextContext(2); return ctx_r110.onTagRemoveBelong($event, field_r5); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 60);
    i0.ɵɵelementStart(6, "input", 61, 62);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r112); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r113 = i0.ɵɵnextContext(2); return ctx_r113.filterInput($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 54, 63);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r112); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r115 = i0.ɵɵnextContext(2); return ctx_r115.onChoose($event, field_r5); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r104 = i0.ɵɵreference(9);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r22.belongToMany[field_r5.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("nbAutocomplete", _r104)("placeholder", field_r5.label)("formControlName", field_r5.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 9, ctx_r22.allFilterContains[field_r5.name]));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 65);
    i0.ɵɵelement(5, "input", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r118 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r118.$implicit;
    const i_r6 = ctx_r118.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r119 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r119.$implicit;
    const i_r6 = ctx_r119.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r124 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r124); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r122 = i0.ɵɵnextContext(2); return ctx_r122.addJSONField(field_r5); });
    i0.ɵɵelement(1, "nb-icon", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes);
} }
const _c3 = function () { return { standalone: true }; };
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r134); const item_r126 = i0.ɵɵnextContext().$implicit; return item_r126.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r126 = i0.ɵɵnextContext().$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r126.label)("attributes", field_r5.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 79);
} if (rf & 2) {
    const item_r126 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r126.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r140 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵelementStart(1, "button", 80);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r140); const index_r127 = i0.ɵɵnextContext().index; const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r138 = i0.ɵɵnextContext(2); return ctx_r138.removeJSONField(field_r5, index_r127); });
    i0.ɵɵelement(2, "nb-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r143 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelementStart(1, "div", 72);
    i0.ɵɵtemplate(2, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 73);
    i0.ɵɵtemplate(3, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelementStart(6, "input", 76);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r143); const item_r126 = restoredCtx.$implicit; return item_r126.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 77);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r126 = ctx.$implicit;
    const index_r127 = ctx.index;
    const _r129 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", index_r127);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r126.add)("ngIfElse", _r129);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r126.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r126.add);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r5.metaData.addConfig.jsonConfig.isOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r25.jsonEditorOptions[field_r5.name]);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 85);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r149 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("value", option_r149.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r149.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r151 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r151[(field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig.morphConfig == null ? null : field_r5.metaData.addConfig.morphConfig.value) ? field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig.morphConfig == null ? null : field_r5.metaData.addConfig.morphConfig.value : "id"])("attributes", field_r5.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r151[field_r5.metaData.addConfig.morphConfig.template ? field_r5.metaData.addConfig.morphConfig.template : field_r5.metaData.addConfig.morphConfig.filterKeys[0]], " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r155 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 19);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 82);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r155); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r153 = i0.ɵɵnextContext(2); return ctx_r153.onMorphSelectField($event, field_r5.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "label", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 84, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r155); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r156 = i0.ɵɵnextContext(2); return ctx_r156.filterInput($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r155); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r158 = i0.ɵɵnextContext(2); return ctx_r158.onSelectionChange($event, field_r5); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 56);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r147 = i0.ɵɵreference(14);
    const ctx_r160 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r160.$implicit;
    const i_r6 = ctx_r160.index;
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", field_r5.metaData.addConfig.morphConfig.related);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name)("nbAutocomplete", _r147)("id", i_r6)("disabled", !ctx_r26.allFilterContains[field_r5.name]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 10, ctx_r26.allFilterContains[field_r5.name]));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r163 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 86);
    i0.ɵɵlistener("latChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template_ngx_gmaps_latChange_4_listener($event) { i0.ɵɵrestoreView(_r163); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r161 = i0.ɵɵnextContext(2); return ctx_r161.onLatChange($event, field_r5.name); })("lngChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template_ngx_gmaps_lngChange_4_listener($event) { i0.ɵɵrestoreView(_r163); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r164 = i0.ɵɵnextContext(2); return ctx_r164.onLngChange($event, field_r5.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, field_r5.label));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_form_6_div_1_ng_container_1_div_1_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(2, RestResourceAddComponent_form_6_div_1_ng_container_1_div_2_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(3, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_form_6_div_1_ng_container_1_div_4_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_5_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_6_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_7_Template, 7, 6, "div", 17);
    i0.ɵɵtemplate(8, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 17);
    i0.ɵɵtemplate(9, RestResourceAddComponent_form_6_div_1_ng_container_1_div_9_Template, 6, 4, "div", 17);
    i0.ɵɵtemplate(10, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_Template, 8, 6, "div", 17);
    i0.ɵɵtemplate(11, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_Template, 10, 8, "div", 17);
    i0.ɵɵtemplate(12, RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template, 7, 8, "div", 17);
    i0.ɵɵtemplate(13, RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template, 13, 11, "div", 17);
    i0.ɵɵtemplate(14, RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template, 12, 11, "div", 17);
    i0.ɵɵtemplate(15, RestResourceAddComponent_form_6_div_1_ng_container_1_div_15_Template, 6, 7, "div", 17);
    i0.ɵɵtemplate(16, RestResourceAddComponent_form_6_div_1_ng_container_1_div_16_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(17, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_Template, 7, 5, "div", 17);
    i0.ɵɵtemplate(18, RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template, 17, 12, "div", 17);
    i0.ɵɵtemplate(19, RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template, 5, 3, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext().$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.STRING || field_r5.type == ctx_r7.REST_FIELD_TYPES.HAS_ONE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.PASSWORD);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.FILE || field_r5.type == ctx_r7.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.MORPH);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.type == ctx_r7.REST_FIELD_TYPES.MAP);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r5.note);
} }
function RestResourceAddComponent_form_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, RestResourceAddComponent_form_6_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 16);
    i0.ɵɵtemplate(3, RestResourceAddComponent_form_6_div_1_ng_container_3_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.inForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r5.note != "");
} }
function RestResourceAddComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_form_6_div_1_Template, 4, 2, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r2.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.resource.fields)("ngForTrackBy", ctx_r2.trackByFn);
} }
function RestResourceAddComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
} }
export class RestResourceAddComponent {
    constructor(fb, serviceRest, serviceRestAdminConfig, activatedRoute, nbMenuService, exportService, dialogService, router, notificationService, cdref) {
        this.fb = fb;
        this.serviceRest = serviceRest;
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.activatedRoute = activatedRoute;
        this.nbMenuService = nbMenuService;
        this.exportService = exportService;
        this.dialogService = dialogService;
        this.router = router;
        this.notificationService = notificationService;
        this.cdref = cdref;
        this.message = 'Ressource ajoutée avec succès';
        this.formState = {
            btnLabel: 'Modifier',
            isAdd: false,
            idEntity: null,
            onReady: false,
        };
        // Loader
        this.loading = false;
        // End test
        //BELONG_TO FIELD
        this.options = {};
        this.allFilterContains = {};
        this.belongToValue = {};
        this.belongToMany = {};
        //json editor
        this.jsonEditorOptions = {};
        this.multiple = false;
        this.controlCroper = {};
        this.imageChangedEvent = '';
        this.croppedImage = {};
        this.isCrop = {};
        this.controlsImage = {};
        // Color
        this.colors = [];
        // End test
        //Import
        this.items = [{ title: 'Download template' }, { title: 'Import' }];
        this.alphabelt = ALPHABET;
        //Image
        this.filesUpload = {};
        this.urlsImage = {};
        //Morph_field
        this.morphFields = {};
        activatedRoute.params.subscribe((params) => {
            this.ressourceName =
                this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 1].path.split('-')[0];
            this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
            if (Object.keys(params).length != 0) {
                this.ressourceName =
                    this.activatedRoute.snapshot.url[this.activatedRoute.snapshot.url.length - 2].path.split('-')[0];
                this.resource = this.serviceRestAdminConfig.getSpecificResource(this.ressourceName);
                this.serviceRest
                    .getOneResource({
                    api: this.resource.editConfig.api,
                    queryParams: this.resource.editConfig.queryParams,
                }, params.id)
                    .subscribe((response) => {
                    this.initForm(response);
                    this.formState = {
                        btnLabel: 'Modifier',
                        isAdd: false,
                        idEntity: response.id,
                        onReady: true,
                    };
                });
            }
            else {
                this.initForm(null);
                this.formState = {
                    btnLabel: 'Ajouter',
                    isAdd: true,
                    onReady: true,
                };
            }
        });
    }
    ngOnInit() {
        this.nbMenuService
            .onItemClick()
            .pipe(filter(({ tag }) => tag === 'my-context-add'), map(({ item: { title } }) => title))
            .subscribe((title) => {
            switch (title) {
                case 'Download template':
                    this.downloadTemplate();
                    break;
                case 'Import':
                    this.importData();
                    break;
                default:
                    console.log('pass');
                    break;
            }
        });
        this.settings = {
            hideSubHeader: true,
            actions: false,
            pager: {
                perPage: this.resource.listConfig.perPage,
            },
            columns: this.createMatTableColumns(),
        };
        this.cdref.detectChanges();
    }
    initForm(datas) {
        if (datas != null) {
            this.controls = this.resource.fields.reduce((cumul, elt) => {
                var _a, _b, _c, _d, _e, _f;
                var filterKey = ((_c = (_b = (_a = elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.belongToOptions) === null || _c === void 0 ? void 0 : _c.filterKeys[0])
                    ? (_f = (_e = (_d = elt.metaData) === null || _d === void 0 ? void 0 : _d.addConfig) === null || _e === void 0 ? void 0 : _e.belongToOptions) === null || _f === void 0 ? void 0 : _f.filterKeys[0]
                    : 'name';
                if (elt.inForm) {
                    switch (elt.type) {
                        case REST_FIELD_TYPES.FILE:
                        case REST_FIELD_TYPES.PDF:
                        case REST_FIELD_TYPES.IMAGE:
                            this.filesUpload[elt.name] = [];
                            this.urlsImage[elt.name] = datas[elt.name];
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.HAS_MANY:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: new Set([datas[elt.name]]) });
                        case REST_FIELD_TYPES.BOOLEAN:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.BELONG_TO:
                            const restResource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToOptions.resourceName);
                            this.serviceRest
                                .getResources({
                                api: restResource.api,
                                queryParams: elt.metaData.addConfig.belongToOptions
                                    .queryParams
                                    ? elt.metaData.addConfig.belongToOptions.queryParams
                                    : restResource.queryParams,
                            })
                                .subscribe((response) => {
                                this.options[elt.name] = [...response].sort((x, y) => {
                                    var _a;
                                    return (_a = x[filterKey]
                                        .toString()
                                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                });
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name]] });
                        case REST_FIELD_TYPES.BELONG_TO_MANY:
                            const resource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToManyOptions.relatedName);
                            this.serviceRest
                                .getResources({
                                api: resource.api,
                                queryParams: elt.metaData.addConfig.belongToManyOptions
                                    .queryParams
                                    ? elt.metaData.addConfig.belongToManyOptions.queryParams
                                    : resource.queryParams,
                            })
                                .subscribe((response) => {
                                this.options[elt.name] = [...response].sort((x, y) => {
                                    var _a;
                                    return (_a = x[filterKey]
                                        .toString()
                                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                });
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            this.belongToMany[elt.name] = new Set(datas[elt.name]);
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name]] });
                        case REST_FIELD_TYPES.LINK:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name], Validator.url] });
                        case REST_FIELD_TYPES.COLOR:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.JSON:
                            const jsonFields = [];
                            if (elt.metaData && elt.metaData.addConfig && elt.metaData.addConfig.jsonConfig && elt.metaData.addConfig.jsonConfig.jsonFields) {
                                elt.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                                    if (datas[elt.name]) {
                                        if (datas[elt.name][0] == '{') {
                                            try {
                                                jsonFields.push({
                                                    label: field,
                                                    value: JSON.parse(datas[elt.name])[field],
                                                });
                                            }
                                            catch (error) {
                                                console.error(`Error parsing JSON for ${field} in ${elt.name}: ${error}`);
                                            }
                                        }
                                        else if (typeof datas[elt.name] !== 'string') {
                                            try {
                                                jsonFields.push({
                                                    label: field,
                                                    value: datas[elt.name][field],
                                                });
                                            }
                                            catch (error) {
                                                console.error(`Error accessing field ${field} in ${elt.name}: ${error}`);
                                            }
                                        }
                                        else {
                                            jsonFields.push({
                                                label: field,
                                                value: datas[elt.name],
                                            });
                                        }
                                    }
                                    else {
                                        jsonFields.push({ label: field, value: '' });
                                    }
                                });
                            }
                            this.jsonEditorOptions[elt.name] = jsonFields;
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.MORPH_ONE:
                            this.morphFields[elt.name] = {
                                type: datas[elt.name].type,
                                id: datas[elt.name].id,
                            };
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        case REST_FIELD_TYPES.MAP:
                            const lat = elt.metaData.addConfig.mapConfig.lattiudeKeyField;
                            const long = elt.metaData.addConfig.mapConfig.longitudeKeyField;
                            return Object.assign(Object.assign({}, cumul), { [lat]: datas[lat], [long]: datas[long] });
                        default:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                    }
                }
                else
                    return Object.assign({}, cumul);
            }, {});
        }
        else {
            this.controls = this.resource.fields.reduce((cumul, elt) => {
                var _a, _b, _c, _d, _e, _f;
                var filterKey = ((_c = (_b = (_a = elt.metaData) === null || _a === void 0 ? void 0 : _a.addConfig) === null || _b === void 0 ? void 0 : _b.belongToOptions) === null || _c === void 0 ? void 0 : _c.filterKeys[0])
                    ? (_f = (_e = (_d = elt.metaData) === null || _d === void 0 ? void 0 : _d.addConfig) === null || _e === void 0 ? void 0 : _e.belongToOptions) === null || _f === void 0 ? void 0 : _f.filterKeys[0]
                    : 'name';
                if (elt.inForm) {
                    switch (elt.type) {
                        case REST_FIELD_TYPES.FILE:
                        case REST_FIELD_TYPES.PDF:
                        case REST_FIELD_TYPES.IMAGE:
                            this.filesUpload[elt.name] = [];
                            this.urlsImage[elt.name] = '';
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        case REST_FIELD_TYPES.HAS_MANY:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: new Set([]) });
                        case REST_FIELD_TYPES.BOOLEAN:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: false });
                        case REST_FIELD_TYPES.BELONG_TO:
                            const restResource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToOptions.resourceName);
                            if (restResource) {
                                this.serviceRest
                                    .getResources({
                                    api: restResource.api,
                                    queryParams: elt.metaData.addConfig.belongToOptions
                                        .queryParams
                                        ? elt.metaData.addConfig.belongToOptions.queryParams
                                        : restResource.queryParams,
                                })
                                    .subscribe((response) => {
                                    this.options[elt.name] = [...response].sort((x, y) => {
                                        var _a;
                                        return (_a = x[filterKey]
                                            .toString()
                                            .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                    });
                                    this.allFilterContains[elt.name] = of(this.options[elt.name]);
                                });
                            }
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [''] });
                        case REST_FIELD_TYPES.BELONG_TO_MANY:
                            const resource = this.serviceRestAdminConfig.getSpecificResource(elt.metaData.addConfig.belongToManyOptions.relatedName);
                            this.serviceRest
                                .getResources({
                                api: resource.api,
                                queryParams: elt.metaData.addConfig.belongToManyOptions
                                    .queryParams
                                    ? elt.metaData.addConfig.belongToManyOptions.queryParams
                                    : resource.queryParams,
                            })
                                .subscribe((response) => {
                                this.options[elt.name] = [...response].sort((x, y) => {
                                    var _a;
                                    return (_a = x[filterKey]
                                        .toString()
                                        .toLowerCase()) === null || _a === void 0 ? void 0 : _a.localeCompare(y[filterKey].toString().toLowerCase());
                                });
                                this.allFilterContains[elt.name] = of(this.options[elt.name]);
                            });
                            this.belongToMany[elt.name] = new Set();
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [] });
                        case REST_FIELD_TYPES.LINK:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: ['', Validator.url] });
                        case REST_FIELD_TYPES.JSON:
                            if (elt && elt.metaData && elt.metaData.addConfig && elt.metaData.addConfig.jsonConfig && elt.metaData.addConfig.jsonConfig.jsonFields) {
                                const jsonFields = [];
                                elt.metaData.addConfig.jsonConfig.jsonFields.forEach((field) => {
                                    jsonFields.push({ label: field, value: '' });
                                });
                                this.jsonEditorOptions[elt.name] = jsonFields;
                            }
                            else {
                                // Si une propriété requise n'est pas présente, renvoyer une erreur
                                throw new Error("Une erreur s'est produite lors du traitement de l'élément.");
                            }
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [null] });
                        case REST_FIELD_TYPES.MAP:
                            const lat = elt.metaData.addConfig.mapConfig.lattiudeKeyField;
                            const long = elt.metaData.addConfig.mapConfig.longitudeKeyField;
                            return Object.assign(Object.assign({}, cumul), { [lat]: [null], [long]: [null] });
                        default:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [''] });
                    }
                }
                else
                    return Object.assign({}, cumul);
            }, {});
        }
        this.form = this.fb.group(this.controls);
    }
    trackByFn(index) {
        return index;
    }
    reset() {
        this.form = this.fb.group(this.controls);
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    //Tags
    onTagRemove(tagToRemove, name) {
        const treesA = new Set(this.form.get([name]).value);
        treesA.delete(tagToRemove.text);
        this.form.patchValue({
            [name]: Array.from(treesA.values()),
        });
    }
    onTagAdd({ value, input }, name) {
        if (value) {
            const treesA = new Set(this.form.get([name]).value);
            treesA.add(value);
            this.form.patchValue({
                [name]: Array.from(treesA.values()),
            });
        }
        input.nativeElement.value = '';
    }
    // Autocomplete
    filter(value, field) {
        if (typeof value == 'string') {
            if (!this.options[field.name]) {
                return [];
            }
            else
                return this.options[field.name].filter((optionValue) => {
                    return field.metaData.addConfig.belongToOptions.filterKeys.some((elt) => {
                        var _a;
                        return `${(_a = optionValue[elt]) === null || _a === void 0 ? void 0 : _a.toLowerCase()}`.includes(`${value.toLowerCase()}`);
                    });
                });
        }
    }
    getFilteredOptions(value, field) {
        if (field.type == REST_FIELD_TYPES.BELONG_TO)
            return of(value).pipe(map((filterString) => this.filter(filterString, field)));
        else if (field.type == REST_FIELD_TYPES.MORPH)
            return of(value).pipe(map((filterString) => this.filterMany(filterString, field, 'morphConfig')));
        return of(value).pipe(map((filterString) => this.filterMany(filterString, field)));
    }
    onSelectionChange(event, field) {
        var _a, _b;
        const bVal = this.options[field.name]
            ? this.options[field.name].find((elt) => (elt === null || elt === void 0 ? void 0 : elt.id) === event)
            : {};
        this.belongToValue[field.name] = bVal
            ? bVal[((_a = field === null || field === void 0 ? void 0 : field.metaData) === null || _a === void 0 ? void 0 : _a.belongToSecondFieldLabel)
                ? (_b = field === null || field === void 0 ? void 0 : field.metaData) === null || _b === void 0 ? void 0 : _b.belongToSecondFieldLabel
                : 'name']
            : '';
        this.allFilterContains[field.name] = this.getFilteredOptions(event, field);
    }
    filterInput(event, field) {
        this.allFilterContains[field.name] = this.getFilteredOptions(event.target.value, field);
    }
    test(event) {
        console.log(event);
    }
    // End Autocomplete
    //Image input
    onSelect(event, field) {
        this.filesUpload[field.name] = [];
        const addedFiles = event.addedFiles;
        this.filesUpload[field.name] = [addedFiles[0]];
        if (field.type == REST_FIELD_TYPES.IMAGE) {
            this.isCrop[field.name] = true;
            this.controlCroper[field.name] = addedFiles[0];
        }
        this.form.patchValue({
            [field.name]: addedFiles[0],
        });
    }
    onRemove(field) {
        this.filesUpload[field.name] = [];
        this.form.patchValue({
            [field.name]: null,
        });
    }
    imageCropped(event, field) {
        this.croppedImage[field.name] = event.base64;
    }
    activeCroper(field) {
        this.isCrop[field.name] = true;
    }
    desactiveCrop(field) {
        this.isCrop[field.name] = false;
    }
    saveCroper(field) {
        this.isCrop[field.name] = false;
        this.filesUpload[field.name] = [
            base64ToFile(this.croppedImage[field.name]),
        ];
        this.form.patchValue({
            [field.name]: new File([base64ToFile(this.croppedImage[field.name])], field.name),
        });
    }
    //belongToManyOptions
    onChoose(event, field) {
        const cellData = Array.from(this.belongToMany[field.name]);
        if (event.id) {
            const search = cellData.find((elt) => elt.id == event.id);
            if (search == undefined) {
                const newElt = {
                    id: event.id,
                    [field.metaData.addConfig.belongToManyOptions.relatedIdName]: event.id,
                    [field.metaData.addConfig.belongToManyOptions.resourceIdName]: '',
                    [field.metaData.addConfig.belongToManyOptions.filterKeys[0]]: event[field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
                    saveRelatedIdName: field.metaData.addConfig.belongToManyOptions.relatedIdName,
                    saveResourceIdName: field.metaData.addConfig.belongToManyOptions.resourceIdName,
                };
                this.belongToMany[field.name].add(newElt);
                this.form.patchValue({
                    [field.name]: Array.from(this.belongToMany[field.name].values()),
                });
            }
        }
        this.inputBelongToMany.nativeElement.value = '';
    }
    onTagRemoveBelong(tagToRemove, field) {
        const cellData = Array.from(this.belongToMany[field.name]);
        const save = [];
        cellData.forEach((elt) => {
            if (elt[field.metaData.addConfig.belongToManyOptions.template
                ? field.metaData.addConfig.belongToManyOptions.template
                : field.metaData.addConfig.belongToManyOptions.filterKeys[0]] != tagToRemove.text)
                save.push(elt);
        });
        this.belongToMany[field.name] = new Set(save);
        this.form.patchValue({
            [field.name]: save,
        });
    }
    filterMany(value, field, options = 'belongToManyOptions') {
        if (value == null || value == undefined) {
            return [];
        }
        if (typeof value == 'string') {
            return this.options[field === null || field === void 0 ? void 0 : field.name].filter((optionValue) => {
                return field.metaData.addConfig[options].filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`));
            });
        }
    }
    //End BelongToMany
    onCreate() {
        let datas;
        const msg = {
            label: `msg-adding-success`,
            resourceName: this.ressourceName,
        };
        this.loading = true;
        const formData = this.form.value;
        console.log('this.form', this.form.value);
        const _body = this.resource.addConfig.body;
        if (this.resource.hasFile) {
            datas = new FormData();
            Object.keys(formData).forEach((key, index) => {
                var _a;
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search && formData[key] !== undefined) {
                    switch (search.type) {
                        case REST_FIELD_TYPES.DATE:
                            datas.append(key, `${moment(formData[key]).format('YYYY-MM-DD')}`);
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (this.jsonEditorOptions[key] !== null) {
                                if (typeof this.jsonEditorOptions[key] === 'object' && Array.isArray(this.jsonEditorOptions[key])) {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        if (typeof elt === 'object' && elt !== null && elt.label && elt.value) {
                                            jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                            datas.append(`${key}[${elt.label}]`, elt.value);
                                        }
                                        else {
                                            console.error(`Error: Invalid element in jsonEditorOptions[${key}]: ${JSON.stringify(elt)}`);
                                        }
                                    });
                                }
                                else {
                                    console.error(`Error: Invalid type of jsonEditorOptions[${key}]: ${typeof this.jsonEditorOptions[key]}`);
                                }
                            }
                            else {
                                console.error(`Error: Missing jsonEditorOptions[${key}]`);
                            }
                            break;
                        case REST_FIELD_TYPES.BOOLEAN:
                            if ((_a = search.metaData) === null || _a === void 0 ? void 0 : _a.number) {
                                if (formData[key]) {
                                    datas.append(key, 1);
                                }
                                else
                                    datas.append(key, 0);
                            }
                            else {
                                datas.append(key, formData[key]);
                            }
                            break;
                        case REST_FIELD_TYPES.IMAGE:
                            if (formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.PDF:
                            if (formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.FILE:
                            if (formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                        default:
                            // if (search.type === REST_FIELD_TYPES.STRING || search.type === REST_FIELD_TYPES.NUMBER || search.type === REST_FIELD_TYPES.PASSWORD)
                            if (formData[key] !== '' && formData[key] !== null)
                                datas.append(key, formData[key]);
                            break;
                    }
                }
            });
            Object.keys(_body).map((key) => {
                datas.append(key, _body[key]);
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                datas.append([elt.metaData.addConfig.mapConfig.lattiudeKeyField], formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField]);
                datas.append([elt.metaData.addConfig.mapConfig.longitudeKeyField], formData[elt.metaData.addConfig.mapConfig.longitudeKeyField]);
            });
        }
        else {
            const tab = {};
            Object.keys(formData).forEach((key, index) => {
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search) {
                    if (this.jsonEditorOptions[key] !== null &&
                        formData[key] !== undefined &&
                        formData[key] !== '') {
                        tab[key] = formData[key];
                    }
                }
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                tab[elt.metaData.addConfig.mapConfig.lattiudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField];
                tab[elt.metaData.addConfig.mapConfig.longitudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.longitudeKeyField];
            });
            datas = Object.assign(Object.assign({}, tab), _body);
        }
        const saveBelongTomany = [];
        this.resource.fields.forEach((elt) => {
            if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
                saveBelongTomany.push({
                    resources: datas[elt.name],
                    pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                });
            }
        });
        this.serviceRest.addResources(this.resource.addConfig, datas).subscribe((response) => {
            if (saveBelongTomany.length > 0) {
                saveBelongTomany.forEach((element, index) => {
                    const restResource = this.serviceRestAdminConfig.getSpecificResource(element.pivot);
                    const proms = [];
                    for (let index = 0; index < element.resources.length; index++) {
                        const item = element.resources[index];
                        const data = {
                            [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                            [item['saveResourceIdName']]: response.id,
                        };
                        proms.push(this.serviceRest
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        if (index == saveBelongTomany.length - 1) {
                            this.notificationService.successToast(msg);
                            this.router.navigate([
                                `/admin/${this.ressourceName}-detail`,
                                response.id,
                            ]);
                            this.reset();
                        }
                    });
                });
                this.loading = false;
            }
            else {
                this.notificationService.successToast(msg);
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    response.id,
                ]);
                this.loading = false;
                this.reset();
            }
        }, (error) => {
            const msgError = {
                label: `msg-adding-error`,
                resourceName: this.ressourceName,
            };
            this.loading = false;
            this.notificationService.dangerToast(msgError);
        });
    }
    onEdit() {
        const msg = {
            label: `msg-updating-success`,
            resourceName: this.ressourceName,
        };
        this.loading = true;
        let datas;
        const formData = this.form.value;
        const _body = this.resource.editConfig.body;
        if (this.resource.hasFile) {
            datas = new FormData();
            Object.keys(formData).forEach((key, index) => {
                var _a;
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search && formData[key] !== undefined) {
                    switch (search.type) {
                        case REST_FIELD_TYPES.DATE:
                            datas.append(key, `${moment(formData[key]).format('YYYY-MM-DD')}`);
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (this.jsonEditorOptions[key] !== null) {
                                if (typeof this.jsonEditorOptions[key] === 'object') {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        if (typeof elt === 'object' && elt !== null && elt.label && elt.value) {
                                            jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                            datas.append(`${key}[${elt.label}]`, elt.value);
                                        }
                                        else {
                                            if (elt.label) {
                                                datas.append(`${key}[${elt.label}]`, "");
                                            }
                                            console.error(`Error: Invalid element in jsonEditorOptions[${key}]: ${JSON.stringify(elt)}`);
                                        }
                                    });
                                }
                                else {
                                    console.error(`Error: Invalid type of jsonEditorOptions[${key}]: ${typeof this.jsonEditorOptions[key]}`);
                                }
                            }
                            else {
                                console.error(`Error: Missing jsonEditorOptions[${key}]`);
                            }
                            break;
                        case REST_FIELD_TYPES.BOOLEAN:
                            if ((_a = search.metaData) === null || _a === void 0 ? void 0 : _a.number) {
                                if (formData[key]) {
                                    datas.append(key, 1);
                                }
                                else
                                    datas.append(key, 0);
                            }
                            else {
                                datas.append(key, formData[key]);
                            }
                            break;
                        case REST_FIELD_TYPES.IMAGE:
                            if (formData[key] !== null && this.isFile(formData[key]))
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.PDF:
                            if (formData[key] !== null && this.isFile(formData[key]))
                                datas.append(key, formData[key]);
                            break;
                        case REST_FIELD_TYPES.FILE:
                            if (formData[key] !== null && this.isFile(formData[key]))
                                datas.append(key, formData[key]);
                            break;
                        default:
                            // if (search.type === REST_FIELD_TYPES.STRING || search.type === REST_FIELD_TYPES.NUMBER || search.type === REST_FIELD_TYPES.PASSWORD)
                            if (formData[key] !== '')
                                datas.append(key, formData[key]);
                            break;
                    }
                }
            });
            Object.keys(_body).map((key) => {
                datas.append(key, _body[key]);
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                datas.append([elt.metaData.addConfig.mapConfig.lattiudeKeyField], formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField]);
                datas.append([elt.metaData.addConfig.mapConfig.longitudeKeyField], formData[elt.metaData.addConfig.mapConfig.longitudeKeyField]);
            });
        }
        else {
            const tab = {};
            Object.keys(formData).forEach((key, index) => {
                const search = this.resource.fields.find((elt) => elt.name == key);
                if (search &&
                    this.jsonEditorOptions[key] !== null &&
                    formData[key] !== undefined &&
                    formData[key] !== '') {
                    tab[key] = formData[key];
                }
            });
            // Add map type;
            const mapField = this.resource.fields.filter((item) => item.type === REST_FIELD_TYPES.MAP);
            mapField.forEach((elt) => {
                tab[elt.metaData.addConfig.mapConfig.lattiudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.lattiudeKeyField];
                tab[elt.metaData.addConfig.mapConfig.longitudeKeyField] =
                    formData[elt.metaData.addConfig.mapConfig.longitudeKeyField];
            });
            datas = Object.assign(Object.assign({}, tab), _body);
        }
        const saveBelongTomany = [];
        this.resource.fields.forEach((elt) => {
            if (elt.type == REST_FIELD_TYPES.BELONG_TO_MANY) {
                saveBelongTomany.push({
                    resources: datas[elt.name],
                    pivot: elt.metaData.addConfig.belongToManyOptions.pivotName,
                });
            }
        });
        this.serviceRest
            .editResources(this.resource.editConfig, this.resource.hasFile, datas, this.formState.idEntity)
            .subscribe((response) => {
            if (saveBelongTomany.length > 0) {
                saveBelongTomany.forEach((element, index) => {
                    const restResource = this.serviceRestAdminConfig.getSpecificResource(element.pivot);
                    const proms = [];
                    for (let index = 0; index < element.resources.length; index++) {
                        const item = element.resources[index];
                        const data = {
                            [item['saveRelatedIdName']]: item[item['saveRelatedIdName']],
                            [item['saveResourceIdName']]: response.id,
                        };
                        proms.push(this.serviceRest
                            .addResources(restResource.addConfig, data)
                            .toPromise());
                    }
                    Promise.all(proms).then((res) => {
                        if (index == saveBelongTomany.length - 1) {
                            this.notificationService.successToast(msg);
                            this.router.navigate([
                                `/admin/${this.ressourceName}-detail`,
                                this.formState.idEntity,
                            ]);
                            this.reset();
                        }
                    });
                });
                this.loading = false;
            }
            else {
                this.notificationService.successToast(msg);
                this.router.navigate([
                    `/admin/${this.ressourceName}-detail`,
                    this.formState.idEntity,
                ]);
                this.loading = false;
                this.reset();
            }
        }, (error) => {
            const msgError = {
                label: `msg-updating-fail`,
                resourceName: this.ressourceName,
            };
            this.loading = false;
            this.notificationService.dangerToast(msgError);
        });
    }
    isFile(variable) {
        return typeof variable === 'object' && variable instanceof File;
    }
    downloadTemplate() {
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
        const edata = [];
        const udt = {
            data: [
                sheetHeader, // table header
            ],
            skipHeader: true,
        };
        edata.push(udt);
        this.exportService.exportToExcel(edata, 'rest_file_template_data');
    }
    importData() {
        const dialog = this.dialogService.open(UploadFileComponent, {});
        dialog.onClose.subscribe((resp) => {
            if (resp)
                this.source = new LocalDataSource(resp);
        });
    }
    createMatTableColumns() {
        const colunms = {};
        // console.log(this.resource.fields);
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
    onSumbit() {
        if (this.formState.isAdd)
            this.onCreate();
        else
            this.onEdit();
    }
    addJSONField(event) {
        this.jsonEditorOptions[event.name].push({
            label: '',
            value: '',
            add: true,
        });
    }
    removeJSONField(event, index) {
        this.jsonEditorOptions[event.name].splice(index, 1);
    }
    onMorphSelectField(event, field) {
        const ressources = this.serviceRestAdminConfig.getSpecificResource(event);
        const fieldConfig = this.resource.fields.find((elt) => elt.name == field);
        this.serviceRest
            .getResources({
            api: ressources.api,
            queryParams: fieldConfig.metaData.addConfig.morphConfig.queryParams
                ? fieldConfig.metaData.addConfig.morphConfig.queryParams
                : {},
        })
            .subscribe((response) => {
            this.options[field] = response;
            this.allFilterContains[field] = of(this.options[field]);
        });
    }
    onLatChange(value, fieldName) {
        const fieldLat = this.resource.fields.find((elt) => elt.name == fieldName);
        const name = fieldLat.metaData.addConfig.mapConfig.lattiudeKeyField;
        this.form.patchValue({
            [name]: value,
        });
    }
    onLngChange(value, fieldName) {
        const fieldLat = this.resource.fields.find((elt) => elt.name == fieldName);
        const name = fieldLat.metaData.addConfig.mapConfig.longitudeKeyField;
        this.form.patchValue({
            [name]: value,
        });
    }
}
RestResourceAddComponent.ɵfac = function RestResourceAddComponent_Factory(t) { return new (t || RestResourceAddComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i6.RestExportService), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i7.NotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
RestResourceAddComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceAddComponent, selectors: [["ngx-rest-resource-add"]], viewQuery: function RestResourceAddComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.belongTo = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 22, vars: 12, consts: [[4, "ngIf"], ["fullWidth", ""], ["tabTitle", "Ajout simple"], ["class", "row", 3, "formGroup", 4, "ngIf"], ["tabTitle", "Importation"], [1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "status", "primary", "nbContextMenuTag", "my-context-add", 3, "nbContextMenu"], [3, "settings", "source"], [1, "buttons-row"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-2", 4, "ngIf"], [1, "row", 3, "formGroup"], ["class", "col-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-12"], [1, ""], ["class", "input-space", 4, "ngIf"], [1, "input-space"], [1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "password", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "number", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "attributes", "formControlName"], ["formpicker", ""], ["nbInput", "", "fullWidth", "", 3, "attributes", "placeholder", "nbDatepicker", "formControlName"], ["withSeconds", ""], ["dateTimePicker", ""], ["fullWidth", "", "twelveHoursFormat", "", "nbInput", "", 3, "nbTimepicker", "attributes", "formControlName"], ["timepicker", ""], ["fullWidth", "", 3, "formControlName", "attributes", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "display", "flex", "align-items", "center"], [2, "margin-right", "0.5em"], [3, "formControlName"], ["ngx-dropzone", "", 1, "custom-dropzone", "form-control-custom", "rounded", "m-2", 2, "border", "dashed", "display", "flex", 3, "change"], ["class", "custom-img-dropzone", 3, "attributes", "src", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "custom-img-dropzone", 3, "attributes", "src"], ["icon", "cloud-upload-outline", 2, "font-size", "2em", "color", "#ccc"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], ["nbButton", "", "status", "danger", 3, "click"], ["fullWidth", "", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "fullWidth", "", "nbTagInput", "", 3, "attributes", "placeholder", "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "keyup"], ["autoInput", ""], ["class", "col-3", 4, "ngIf"], [3, "selectedChange"], ["autoComplete", ""], [3, "value", "attributes", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "disabled", "true", "type", "text", "placeholder", "Value", 3, "attributes", "value", "id"], [3, "value", "attributes"], [3, "tagRemove"], ["removable", "", 3, "text", "attributes", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "attributes", "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], ["belongToField", ""], ["removable", "", 3, "text", "attributes"], [1, "color-row"], ["nbInput", "", "fullWidth", "", "type", "color", 2, "height", "45px", 3, "id", "attributes", "placeholder", "formControlName"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click", 4, "ngIf"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click"], ["icon", "plus", "pack", "fas"], [1, "row", "mb-2"], [1, "col", 3, "id"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col", 4, "ngIf"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange"], ["fullWidth", "", "nbInput", "", "disabled", "", 3, "value"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "click"], ["icon", "trash-alt", "pack", "fas"], ["fullWidth", "", 3, "selectedChange"], [3, "attributes", "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "disabled", "keyup"], [3, "attributes", "value"], [3, "latChange", "lngChange"], [1, "text-muted", "ml-20", "mt-3"], [1, "spinner-border", "spinner-border-sm", "mr-2"]], template: function RestResourceAddComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card");
        i0.ɵɵtemplate(1, RestResourceAddComponent_nb_card_header_1_Template, 2, 1, "nb-card-header", 0);
        i0.ɵɵtemplate(2, RestResourceAddComponent_nb_card_header_2_Template, 2, 1, "nb-card-header", 0);
        i0.ɵɵelementStart(3, "nb-card-body");
        i0.ɵɵelementStart(4, "nb-tabset", 1);
        i0.ɵɵelementStart(5, "nb-tab", 2);
        i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_Template, 2, 3, "form", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nb-tab", 4);
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelement(9, "div", 6);
        i0.ɵɵelementStart(10, "div", 7);
        i0.ɵɵelementStart(11, "button", 8);
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div");
        i0.ɵɵelement(15, "ng2-smart-table", 9);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "nb-card-footer");
        i0.ɵɵelementStart(17, "div", 10);
        i0.ɵɵelementStart(18, "button", 11);
        i0.ɵɵlistener("click", function RestResourceAddComponent_Template_button_click_18_listener() { return ctx.onSumbit(); });
        i0.ɵɵtext(19, " > ");
        i0.ɵɵtemplate(20, RestResourceAddComponent_span_20_Template, 1, 0, "span", 12);
        i0.ɵɵtext(21);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formState.onReady && !ctx.formState.isAdd);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.formState.onReady && ctx.formState.isAdd);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.formState.onReady);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("nbContextMenu", ctx.items);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(13, 10, "rest-add.import"), " ");
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("settings", ctx.settings)("source", ctx.source);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("disabled", ctx.loading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.formState.btnLabel, " ");
    } }, styles: ["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.color-row[_ngcontent-%COMP%]{justify-content:space-between;height:45px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;border-color:#909293;margin-left:5px;justify-content:center;align-items:center}@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.icon[_ngcontent-%COMP%]{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;font-size:14px}svg[_ngcontent-%COMP%]{fill:#909293;height:20px}.overlay[_ngcontent-%COMP%]{position:relative}.delete-button[_ngcontent-%COMP%]{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}nb-toggle[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceAddComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-add',
                templateUrl: './rest-resource-add.component.html',
                styleUrls: ['./rest-resource-add.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i4.ActivatedRoute }, { type: i5.NbMenuService }, { type: i6.RestExportService }, { type: i5.NbDialogService }, { type: i4.Router }, { type: i7.NotificationService }, { type: i0.ChangeDetectorRef }]; }, { resource: [{
            type: Input
        }], belongTo: [{
            type: ViewChild,
            args: ['belongTo']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQStCLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJckUsT0FBTyxFQUFxQixZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FB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LGlCQUFTO1FBQ1gsaUJBQU07UUFDUixpQkFBaUI7UUFDbkIsaUJBQVU7O1FBbHVCUyxlQUEyQztRQUEzQyxvRUFBMkM7UUFJM0MsZUFBMEM7UUFBMUMsbUVBQTBDO1FBT2YsZUFBdUI7UUFBdkIsNENBQXVCO1FBcXJCdkQsZUFBdUI7UUFBdkIseUNBQXVCO1FBR3ZCLGVBQ0Y7UUFERSwwRUFDRjtRQUtlLGVBQXFCO1FBQXJCLHVDQUFxQixzQkFBQTtRQWF4QyxlQUFvQjtRQUFwQixzQ0FBb0I7UUFLakIsZUFBYTtRQUFiLGtDQUFhO1FBR2hCLGVBQ0Y7UUFERSx1REFDRjs7dUZENXNCTyx3QkFBd0I7Y0FMcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO2FBQ2xEO21WQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUErQmlCLFFBQVE7a0JBQTlCLFNBQVM7bUJBQUMsVUFBVTtZQUNVLGlCQUFpQjtrQkFBL0MsU0FBUzttQkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbERhdGFTb3VyY2UgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xuaW1wb3J0IHsgUmVzdEZpZWxkLCBSRVNUX0ZJRUxEX1RZUEVTIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYkRpYWxvZ1NlcnZpY2UsXG4gIE5iTWVudVNlcnZpY2UsXG4gIE5iVGFnQ29tcG9uZW50LFxuICBOYlRhZ0lucHV0QWRkRXZlbnQsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCwgYmFzZTY0VG9GaWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFMUEhBQkVULCBSZXN0RXhwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1leHBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJ25neC1pbnB1dC12YWxpZGF0b3InO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtcmVzdC1yZXNvdXJjZS1hZGQnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICByZXNzb3VyY2VOYW1lOiBzdHJpbmc7XG4gIG1lc3NhZ2UgPSAnUmVzc291cmNlIGFqb3V0w6llIGF2ZWMgc3VjY8Oocyc7XG4gIC8vSWNvbnNcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvcm1TdGF0ZTogYW55ID0ge1xuICAgIGJ0bkxhYmVsOiAnTW9kaWZpZXInLFxuICAgIGlzQWRkOiBmYWxzZSxcbiAgICBpZEVudGl0eTogbnVsbCxcbiAgICBvblJlYWR5OiBmYWxzZSxcbiAgfTtcblxuICBlbnRpdHk6IGFueTtcbiAgLy8gTG9hZGVyXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICAvLyBUZXN0XG4gIHB1YmxpYyB1cGxvYWRlZEZpbGU6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvLyBFbmQgdGVzdFxuXG4gIC8vQkVMT05HX1RPIEZJRUxEXG4gIG9wdGlvbnM6IGFueSA9IHt9O1xuICBhbGxGaWx0ZXJDb250YWluczogYW55ID0ge307XG4gIGJlbG9uZ1RvVmFsdWU6IGFueSA9IHt9O1xuICBiZWxvbmdUb01hbnk6IGFueSA9IHt9O1xuXG4gIC8vanNvbiBlZGl0b3JcbiAganNvbkVkaXRvck9wdGlvbnMgPSB7fTtcblxuICBAVmlld0NoaWxkKCdiZWxvbmdUbycpIGJlbG9uZ1RvOiBRdWVyeUxpc3Q8YW55PjtcbiAgQFZpZXdDaGlsZCgnYXV0b0JlbG9uZ1RvTWFueScpIGlucHV0QmVsb25nVG9NYW55O1xuXG4gIGNvbnRyb2xzOiBhbnk7XG4gIG11bHRpcGxlID0gZmFsc2U7XG5cbiAgY29udHJvbENyb3BlcjogYW55ID0ge307XG5cbiAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xuICBjcm9wcGVkSW1hZ2U6IGFueSA9IHt9O1xuICBpc0Nyb3A6IGFueSA9IHt9O1xuXG4gIGNvbnRyb2xzSW1hZ2U6IGFueSA9IHt9O1xuXG4gIC8vIENvbG9yXG4gIGNvbG9ycyA9IFtdO1xuXG4gIC8vIEVuZCB0ZXN0XG5cbiAgLy9JbXBvcnRcbiAgaXRlbXMgPSBbeyB0aXRsZTogJ0Rvd25sb2FkIHRlbXBsYXRlJyB9LCB7IHRpdGxlOiAnSW1wb3J0JyB9XTtcbiAgYWxwaGFiZWx0OiBzdHJpbmdbXSA9IEFMUEhBQkVUO1xuXG4gIC8vSW1hZ2VcbiAgZmlsZXNVcGxvYWQgPSB7fTtcbiAgdXJsc0ltYWdlID0ge307XG5cbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2U7XG4gIHNldHRpbmdzOiBhbnk7XG5cbiAgLy9Nb3JwaF9maWVsZFxuICBtb3JwaEZpZWxkcyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3Q6IFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdEFkbWluQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbmJNZW51U2VydmljZTogTmJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIGV4cG9ydFNlcnZpY2U6IFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmXG4gICkge1xuICAgIGFjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtcykgPT4ge1xuICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lID1cbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwubGVuZ3RoIC0gMVxuICAgICAgICBdLnBhdGguc3BsaXQoJy0nKVswXTtcblxuICAgICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICB0aGlzLnJlc3NvdXJjZU5hbWVcbiAgICAgICk7XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgIHRoaXMucmVzc291cmNlTmFtZSA9XG4gICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmxbXG4gICAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5sZW5ndGggLSAyXG4gICAgICAgICAgXS5wYXRoLnNwbGl0KCctJylbMF07XG5cbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAuZ2V0T25lUmVzb3VyY2UoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGFwaTogdGhpcy5yZXNvdXJjZS5lZGl0Q29uZmlnLmFwaSxcbiAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMucmVzb3VyY2UuZWRpdENvbmZpZy5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJhbXMuaWRcbiAgICAgICAgICApXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0Rm9ybShyZXNwb25zZSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1TdGF0ZSA9IHtcbiAgICAgICAgICAgICAgYnRuTGFiZWw6ICdNb2RpZmllcicsXG4gICAgICAgICAgICAgIGlzQWRkOiBmYWxzZSxcbiAgICAgICAgICAgICAgaWRFbnRpdHk6IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICBvblJlYWR5OiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5pdEZvcm0obnVsbCk7XG4gICAgICAgIHRoaXMuZm9ybVN0YXRlID0ge1xuICAgICAgICAgIGJ0bkxhYmVsOiAnQWpvdXRlcicsXG4gICAgICAgICAgaXNBZGQ6IHRydWUsXG4gICAgICAgICAgb25SZWFkeTogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQtYWRkJyksXG4gICAgICAgIG1hcCgoeyBpdGVtOiB7IHRpdGxlIH0gfSkgPT4gdGl0bGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh0aXRsZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRpdGxlKSB7XG4gICAgICAgICAgY2FzZSAnRG93bmxvYWQgdGVtcGxhdGUnOlxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZFRlbXBsYXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdJbXBvcnQnOlxuICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bhc3MnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBoaWRlU3ViSGVhZGVyOiB0cnVlLFxuICAgICAgYWN0aW9uczogZmFsc2UsXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwZXJQYWdlOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuICAgIH07XG4gICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBpbml0Rm9ybShkYXRhcykge1xuICAgIGlmIChkYXRhcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5maWVsZHMucmVkdWNlKChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgIHZhciBmaWx0ZXJLZXkgPSBlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgPyBlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgOiAnbmFtZSc7XG4gICAgICAgIGlmIChlbHQuaW5Gb3JtKSB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEU6XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuUERGOlxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFOlxuICAgICAgICAgICAgICB0aGlzLmZpbGVzVXBsb2FkW2VsdC5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLnVybHNJbWFnZVtlbHQubmFtZV0gPSBkYXRhc1tlbHQubmFtZV07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBuZXcgU2V0KFtkYXRhc1tlbHQubmFtZV1dKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnJlc291cmNlTmFtZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgYXBpOiByZXN0UmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICA/IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIDogcmVzdFJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgeFtmaWx0ZXJLZXldXG4gICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5W2ZpbHRlcktleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZWx0Lm5hbWVdID0gb2YodGhpcy5vcHRpb25zW2VsdC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbZGF0YXNbZWx0Lm5hbWVdXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkTmFtZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICBhcGk6IHJlc291cmNlLmFwaSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgID8gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIDogcmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tlbHQubmFtZV0gPSBvZih0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5iZWxvbmdUb01hbnlbZWx0Lm5hbWVdID0gbmV3IFNldChkYXRhc1tlbHQubmFtZV0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW2RhdGFzW2VsdC5uYW1lXV0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5MSU5LOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtkYXRhc1tlbHQubmFtZV0sIFZhbGlkYXRvci51cmxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkpTT046XG4gIGNvbnN0IGpzb25GaWVsZHMgPSBbXTtcbiAgaWYgKGVsdC5tZXRhRGF0YSAmJiBlbHQubWV0YURhdGEuYWRkQ29uZmlnICYmIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZyAmJiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmpzb25Db25maWcuanNvbkZpZWxkcykge1xuICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChkYXRhc1tlbHQubmFtZV0pIHtcbiAgICAgICAgaWYgKGRhdGFzW2VsdC5uYW1lXVswXSA9PSAneycpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAganNvbkZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLFxuICAgICAgICAgICAgICB2YWx1ZTogSlNPTi5wYXJzZShkYXRhc1tlbHQubmFtZV0pW2ZpZWxkXSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gZm9yICR7ZmllbGR9IGluICR7ZWx0Lm5hbWV9OiAke2Vycm9yfWApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YXNbZWx0Lm5hbWVdICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBqc29uRmllbGRzLnB1c2goe1xuICAgICAgICAgICAgICBsYWJlbDogZmllbGQsXG4gICAgICAgICAgICAgIHZhbHVlOiBkYXRhc1tlbHQubmFtZV1bZmllbGRdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIGFjY2Vzc2luZyBmaWVsZCAke2ZpZWxkfSBpbiAke2VsdC5uYW1lfTogJHtlcnJvcn1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAganNvbkZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgIGxhYmVsOiBmaWVsZCxcbiAgICAgICAgICAgIHZhbHVlOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAganNvbkZpZWxkcy5wdXNoKHsgbGFiZWw6IGZpZWxkLCB2YWx1ZTogJycgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tlbHQubmFtZV0gPSBqc29uRmllbGRzO1xuICByZXR1cm4ge1xuICAgIC4uLmN1bXVsLFxuICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgfTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuTU9SUEhfT05FOlxuICAgICAgICAgICAgICB0aGlzLm1vcnBoRmllbGRzW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBkYXRhc1tlbHQubmFtZV0udHlwZSxcbiAgICAgICAgICAgICAgICBpZDogZGF0YXNbZWx0Lm5hbWVdLmlkLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtudWxsXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLk1BUDpcbiAgICAgICAgICAgICAgY29uc3QgbGF0ID0gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgY29uc3QgbG9uZyA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtsYXRdOiBkYXRhc1tsYXRdLFxuICAgICAgICAgICAgICAgIFtsb25nXTogZGF0YXNbbG9uZ10sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICB9O1xuICAgICAgfSwge30pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5maWVsZHMucmVkdWNlKChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgIHZhciBmaWx0ZXJLZXkgPSBlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgPyBlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgOiAnbmFtZSc7XG4gICAgICAgIGlmIChlbHQuaW5Gb3JtKSB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEU6XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuUERGOlxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFOlxuICAgICAgICAgICAgICB0aGlzLmZpbGVzVXBsb2FkW2VsdC5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLnVybHNJbWFnZVtlbHQubmFtZV0gPSAnJztcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtudWxsXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IG5ldyBTZXQoW10pLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBmYWxzZSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE86XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5yZXNvdXJjZU5hbWVcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmIChyZXN0UmVzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICAgICAgYXBpOiByZXN0UmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgICA/IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgOiByZXN0UmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHhbZmlsdGVyS2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICA/LmxvY2FsZUNvbXBhcmUoeVtmaWx0ZXJLZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tlbHQubmFtZV0gPSBvZihcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogWycnXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkTmFtZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICBhcGk6IHJlc291cmNlLmFwaSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgID8gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIDogcmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tlbHQubmFtZV0gPSBvZih0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5iZWxvbmdUb01hbnlbZWx0Lm5hbWVdID0gbmV3IFNldCgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW10sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5MSU5LOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJywgVmFsaWRhdG9yLnVybF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSlNPTjpcbiAgICAgICAgICAgICAgaWYgKGVsdCAmJiBlbHQubWV0YURhdGEgJiYgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZyAmJiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmpzb25Db25maWcgJiYgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmpzb25GaWVsZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uRmllbGRzID0gW107XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICBqc29uRmllbGRzLnB1c2goeyBsYWJlbDogZmllbGQsIHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tlbHQubmFtZV0gPSBqc29uRmllbGRzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNpIHVuZSBwcm9wcmnDqXTDqSByZXF1aXNlIG4nZXN0IHBhcyBwcsOpc2VudGUsIHJlbnZveWVyIHVuZSBlcnJldXJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlIGxvcnMgZHUgdHJhaXRlbWVudCBkZSBsJ8OpbMOpbWVudC5cIik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW251bGxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLk1BUDpcbiAgICAgICAgICAgICAgY29uc3QgbGF0ID0gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgY29uc3QgbG9uZyA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtsYXRdOiBbbnVsbF0sXG4gICAgICAgICAgICAgICAgW2xvbmddOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJ10sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHRoaXMuY29udHJvbHMpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgLy9UYWdzXG4gIG9uVGFnUmVtb3ZlKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCwgbmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IHRyZWVzQSA9IG5ldyBTZXQodGhpcy5mb3JtLmdldChbbmFtZV0pLnZhbHVlKTtcblxuICAgIHRyZWVzQS5kZWxldGUodGFnVG9SZW1vdmUudGV4dCk7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbbmFtZV06IEFycmF5LmZyb20odHJlZXNBLnZhbHVlcygpKSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGFnQWRkKHsgdmFsdWUsIGlucHV0IH06IE5iVGFnSW5wdXRBZGRFdmVudCwgbmFtZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgdHJlZXNBID0gbmV3IFNldCh0aGlzLmZvcm0uZ2V0KFtuYW1lXSkudmFsdWUpO1xuICAgICAgdHJlZXNBLmFkZCh2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIFtuYW1lXTogQXJyYXkuZnJvbSh0cmVlc0EudmFsdWVzKCkpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8vIEF1dG9jb21wbGV0ZVxuICBwcml2YXRlIGZpbHRlcih2YWx1ZTogYW55LCBmaWVsZCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMuZmlsdGVyS2V5cy5zb21lKFxuICAgICAgICAgICAgKGVsdCkgPT5cbiAgICAgICAgICAgICAgYCR7b3B0aW9uVmFsdWVbZWx0XT8udG9Mb3dlckNhc2UoKX1gLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGAke3ZhbHVlLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKHZhbHVlOiBhbnksIGZpZWxkOiBSZXN0RmllbGQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE8pXG4gICAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKGZpbHRlclN0cmluZywgZmllbGQpKVxuICAgICAgKTtcbiAgICBlbHNlIGlmIChmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTU9SUEgpXG4gICAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJNYW55KGZpbHRlclN0cmluZywgZmllbGQsICdtb3JwaENvbmZpZycpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgcmV0dXJuIG9mKHZhbHVlKS5waXBlKFxuICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdGhpcy5maWx0ZXJNYW55KGZpbHRlclN0cmluZywgZmllbGQpKVxuICAgICk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShldmVudCwgZmllbGQ6IFJlc3RGaWVsZCkge1xuICAgIGNvbnN0IGJWYWwgPSB0aGlzLm9wdGlvbnNbZmllbGQubmFtZV1cbiAgICAgID8gdGhpcy5vcHRpb25zW2ZpZWxkLm5hbWVdLmZpbmQoKGVsdCkgPT4gZWx0Py5pZCA9PT0gZXZlbnQpXG4gICAgICA6IHt9O1xuICAgIHRoaXMuYmVsb25nVG9WYWx1ZVtmaWVsZC5uYW1lXSA9IGJWYWxcbiAgICAgID8gYlZhbFtcbiAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmJlbG9uZ1RvU2Vjb25kRmllbGRMYWJlbFxuICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmJlbG9uZ1RvU2Vjb25kRmllbGRMYWJlbFxuICAgICAgICAgICAgOiAnbmFtZSdcbiAgICAgICAgXVxuICAgICAgOiAnJztcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoZXZlbnQsIGZpZWxkKTtcbiAgfVxuXG4gIGZpbHRlcklucHV0KGV2ZW50LCBmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKFxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgZmllbGRcbiAgICApO1xuICB9XG5cbiAgdGVzdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuICAvLyBFbmQgQXV0b2NvbXBsZXRlXG5cbiAgLy9JbWFnZSBpbnB1dFxuICBvblNlbGVjdChldmVudCwgZmllbGQ6IFJlc3RGaWVsZCkge1xuICAgIHRoaXMuZmlsZXNVcGxvYWRbZmllbGQubmFtZV0gPSBbXTtcbiAgICBjb25zdCBhZGRlZEZpbGVzOiBGaWxlID0gZXZlbnQuYWRkZWRGaWxlcztcblxuICAgIHRoaXMuZmlsZXNVcGxvYWRbZmllbGQubmFtZV0gPSBbYWRkZWRGaWxlc1swXV07XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFKSB7XG4gICAgICB0aGlzLmlzQ3JvcFtmaWVsZC5uYW1lXSA9IHRydWU7XG4gICAgICB0aGlzLmNvbnRyb2xDcm9wZXJbZmllbGQubmFtZV0gPSBhZGRlZEZpbGVzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogYWRkZWRGaWxlc1swXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVtb3ZlKGZpZWxkKSB7XG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQsIGZpZWxkKSB7XG4gICAgdGhpcy5jcm9wcGVkSW1hZ2VbZmllbGQubmFtZV0gPSBldmVudC5iYXNlNjQ7XG4gIH1cblxuICBhY3RpdmVDcm9wZXIoZmllbGQpIHtcbiAgICB0aGlzLmlzQ3JvcFtmaWVsZC5uYW1lXSA9IHRydWU7XG4gIH1cblxuICBkZXNhY3RpdmVDcm9wKGZpZWxkKSB7XG4gICAgdGhpcy5pc0Nyb3BbZmllbGQubmFtZV0gPSBmYWxzZTtcbiAgfVxuXG4gIHNhdmVDcm9wZXIoZmllbGQ6IFJlc3RGaWVsZCkge1xuICAgIHRoaXMuaXNDcm9wW2ZpZWxkLm5hbWVdID0gZmFsc2U7XG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFtcbiAgICAgIGJhc2U2NFRvRmlsZSh0aGlzLmNyb3BwZWRJbWFnZVtmaWVsZC5uYW1lXSksXG4gICAgXTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbmV3IEZpbGUoXG4gICAgICAgIFtiYXNlNjRUb0ZpbGUodGhpcy5jcm9wcGVkSW1hZ2VbZmllbGQubmFtZV0pXSxcbiAgICAgICAgZmllbGQubmFtZVxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vYmVsb25nVG9NYW55T3B0aW9uc1xuICBvbkNob29zZShldmVudCwgZmllbGQpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuXG4gICAgICBpZiAoc2VhcmNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBuZXdFbHQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIFtmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkSWROYW1lXTpcbiAgICAgICAgICAgIGV2ZW50LmlkLFxuICAgICAgICAgIFtmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZXNvdXJjZUlkTmFtZV06ICcnLFxuICAgICAgICAgIFtmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5maWx0ZXJLZXlzWzBdXTpcbiAgICAgICAgICAgIGV2ZW50W2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1dLFxuICAgICAgICAgIHNhdmVSZWxhdGVkSWROYW1lOlxuICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZElkTmFtZSxcbiAgICAgICAgICBzYXZlUmVzb3VyY2VJZE5hbWU6XG4gICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZXNvdXJjZUlkTmFtZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFtmaWVsZC5uYW1lXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIG9uVGFnUmVtb3ZlQmVsb25nKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCwgZmllbGQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbZmllbGQubmFtZV0pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcblxuICAgIGNlbGxEYXRhLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbHRbXG4gICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICBdICE9IHRhZ1RvUmVtb3ZlLnRleHRcbiAgICAgIClcbiAgICAgICAgc2F2ZS5wdXNoKGVsdCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXSA9IG5ldyBTZXQoc2F2ZSk7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbZmllbGQubmFtZV06IHNhdmUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlck1hbnkoXG4gICAgdmFsdWU6IGFueSxcbiAgICBmaWVsZDogYW55LFxuICAgIG9wdGlvbnMgPSAnYmVsb25nVG9NYW55T3B0aW9ucydcbiAgKTogc3RyaW5nW10ge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zW2ZpZWxkPy5uYW1lXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWdbb3B0aW9uc10uZmlsdGVyS2V5cy5zb21lKChlbHQpID0+XG4gICAgICAgICAgYCR7b3B0aW9uVmFsdWVbZWx0XS50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoYCR7dmFsdWUudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9FbmQgQmVsb25nVG9NYW55XG5cbiAgb25DcmVhdGUoKSB7XG4gICAgbGV0IGRhdGFzO1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIGxhYmVsOiBgbXNnLWFkZGluZy1zdWNjZXNzYCxcbiAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNzb3VyY2VOYW1lLFxuICAgIH07XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5mb3JtJywgdGhpcy5mb3JtLnZhbHVlKTtcblxuICAgIGNvbnN0IF9ib2R5ID0gdGhpcy5yZXNvdXJjZS5hZGRDb25maWcuYm9keTtcblxuICAgIGlmICh0aGlzLnJlc291cmNlLmhhc0ZpbGUpIHtcbiAgICAgIGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2g6IFJlc3RGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgKGVsdCkgPT4gZWx0Lm5hbWUgPT0ga2V5XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlYXJjaCAmJiBmb3JtRGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzd2l0Y2ggKHNlYXJjaC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuREFURTpcbiAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBgJHttb21lbnQoZm9ybURhdGFba2V5XSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5KU09OOlxuICAgICAgICAgICAgICBsZXQganNvbkZpZWxkcyA9IHt9O1xuICAgICAgICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkodGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldLm1hcCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWx0ID09PSAnb2JqZWN0JyAmJiBlbHQgIT09IG51bGwgJiYgZWx0LmxhYmVsICYmIGVsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGpzb25GaWVsZHMgPSB7IC4uLmpzb25GaWVsZHMsIFtlbHQubGFiZWxdOiBlbHQudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoYCR7a2V5fVske2VsdC5sYWJlbH1dYCwgZWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogSW52YWxpZCBlbGVtZW50IGluIGpzb25FZGl0b3JPcHRpb25zWyR7a2V5fV06ICR7SlNPTi5zdHJpbmdpZnkoZWx0KX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBJbnZhbGlkIHR5cGUgb2YganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XTogJHt0eXBlb2YgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogTWlzc2luZyBqc29uRWRpdG9yT3B0aW9uc1ske2tleX1dYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgICAgXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5tZXRhRGF0YT8ubnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBkYXRhcy5hcHBlbmQoa2V5LCAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5JTUFHRTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwpIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBudWxsKSBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwpIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIGlmIChzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHwgc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8IHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLlBBU1NXT1JEKVxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gJycgJiYgZm9ybURhdGFba2V5XSAhPT0gbnVsbClcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKF9ib2R5KS5tYXAoKGtleSkgPT4ge1xuICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBfYm9keVtrZXldKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIG1hcCB0eXBlO1xuICAgICAgY29uc3QgbWFwRmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTUFQXG4gICAgICApO1xuICAgICAgbWFwRmllbGQuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICBbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF0sXG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF1cbiAgICAgICAgKTtcbiAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgIFtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF0sXG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFiID0ge307XG4gICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2g6IFJlc3RGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgKGVsdCkgPT4gZWx0Lm5hbWUgPT0ga2V5XG4gICAgICAgICk7XG4gICAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gIT09IG51bGwgJiZcbiAgICAgICAgICAgIGZvcm1EYXRhW2tleV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gJydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRhYltrZXldID0gZm9ybURhdGFba2V5XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgbWFwIHR5cGU7XG4gICAgICBjb25zdCBtYXBGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5NQVBcbiAgICAgICk7XG4gICAgICBtYXBGaWVsZC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgdGFiW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdID1cbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXTtcbiAgICAgICAgdGFiW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXSA9XG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdO1xuICAgICAgfSk7XG5cbiAgICAgIGRhdGFzID0geyAuLi50YWIsIC4uLl9ib2R5IH07XG4gICAgfVxuXG4gICAgY29uc3Qgc2F2ZUJlbG9uZ1RvbWFueSA9IFtdO1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoZWx0LnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWSkge1xuICAgICAgICBzYXZlQmVsb25nVG9tYW55LnB1c2goe1xuICAgICAgICAgIHJlc291cmNlczogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgIHBpdm90OiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucGl2b3ROYW1lLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc2VydmljZVJlc3QuYWRkUmVzb3VyY2VzKHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhcykuc3Vic2NyaWJlKFxuICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNhdmVCZWxvbmdUb21hbnkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKGVsZW1lbnQucGl2b3QpO1xuICAgICAgICAgICAgY29uc3QgcHJvbXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQucmVzb3VyY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXTogaXRlbVtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXSxcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlc291cmNlSWROYW1lJ11dOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICBwcm9tcy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgICAgIC5hZGRSZXNvdXJjZXMocmVzdFJlc291cmNlLmFkZENvbmZpZywgZGF0YSlcbiAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpbmRleCA9PSBzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3NUb2FzdChtc2cpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgICByZXNwb25zZS5pZCxcbiAgICAgICAgICBdKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc3QgbXNnRXJyb3IgPSB7XG4gICAgICAgICAgbGFiZWw6IGBtc2ctYWRkaW5nLWVycm9yYCxcbiAgICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kYW5nZXJUb2FzdChtc2dFcnJvcik7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIG9uRWRpdCgpIHtcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICBsYWJlbDogYG1zZy11cGRhdGluZy1zdWNjZXNzYCxcbiAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNzb3VyY2VOYW1lLFxuICAgIH07XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBsZXQgZGF0YXM7XG4gICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgY29uc3QgX2JvZHkgPSB0aGlzLnJlc291cmNlLmVkaXRDb25maWcuYm9keTtcbiAgICBpZiAodGhpcy5yZXNvdXJjZS5oYXNGaWxlKSB7XG4gICAgICBkYXRhcyA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoOiBSZXN0RmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgIChlbHQpID0+IGVsdC5uYW1lID09IGtleVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzZWFyY2ggJiYgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3dpdGNoIChzZWFyY2gudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEU6XG4gICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYCR7bW9tZW50KGZvcm1EYXRhW2tleV0pLmZvcm1hdCgnWVlZWS1NTS1ERCcpfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5KU09OOlxuICAgICAgICAgICAgICAgIGxldCBqc29uRmllbGRzID0ge307XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XS5tYXAoKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWx0ID09PSAnb2JqZWN0JyAmJiBlbHQgIT09IG51bGwgJiYgZWx0LmxhYmVsICYmIGVsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcyA9IHsgLi4uanNvbkZpZWxkcywgW2VsdC5sYWJlbF06IGVsdC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGAke2tleX1bJHtlbHQubGFiZWx9XWAsIGVsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbHQubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChgJHtrZXl9WyR7ZWx0LmxhYmVsfV1gLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBJbnZhbGlkIGVsZW1lbnQgaW4ganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XTogJHtKU09OLnN0cmluZ2lmeShlbHQpfWApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogSW52YWxpZCB0eXBlIG9mIGpzb25FZGl0b3JPcHRpb25zWyR7a2V5fV06ICR7dHlwZW9mIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XX1gKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IE1pc3NpbmcganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhazsgICBcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOOlxuICAgICAgICAgICAgICBpZiAoc2VhcmNoLm1ldGFEYXRhPy5udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGRhdGFzLmFwcGVuZChrZXksIDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCAmJiB0aGlzLmlzRmlsZShmb3JtRGF0YVtrZXldKSlcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuUERGOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCAmJiB0aGlzLmlzRmlsZShmb3JtRGF0YVtrZXldKSlcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwgJiYgdGhpcy5pc0ZpbGUoZm9ybURhdGFba2V5XSkpXG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgLy8gaWYgKHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fCBzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHwgc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuUEFTU1dPUkQpXG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSAnJykgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhfYm9keSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgX2JvZHlba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBtYXAgdHlwZTtcbiAgICAgIGNvbnN0IG1hcEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFxuICAgICAgKTtcbiAgICAgIG1hcEZpZWxkLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdLFxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdXG4gICAgICAgICk7XG4gICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICBbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdLFxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYiA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoOiBSZXN0RmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgIChlbHQpID0+IGVsdC5uYW1lID09IGtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2VhcmNoICYmXG4gICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldICE9PSBudWxsICYmXG4gICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gJydcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFiW2tleV0gPSBmb3JtRGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIG1hcCB0eXBlO1xuICAgICAgY29uc3QgbWFwRmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTUFQXG4gICAgICApO1xuICAgICAgbWFwRmllbGQuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIHRhYltlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXSA9XG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF07XG4gICAgICAgIHRhYltlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF0gPVxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXTtcbiAgICAgIH0pO1xuICAgICAgZGF0YXMgPSB7IC4uLnRhYiwgLi4uX2JvZHkgfTtcbiAgICB9XG4gICAgY29uc3Qgc2F2ZUJlbG9uZ1RvbWFueSA9IFtdO1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoZWx0LnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWSkge1xuICAgICAgICBzYXZlQmVsb25nVG9tYW55LnB1c2goe1xuICAgICAgICAgIHJlc291cmNlczogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgIHBpdm90OiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucGl2b3ROYW1lLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAuZWRpdFJlc291cmNlcyhcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5lZGl0Q29uZmlnLFxuICAgICAgICB0aGlzLnJlc291cmNlLmhhc0ZpbGUsXG4gICAgICAgIGRhdGFzLFxuICAgICAgICB0aGlzLmZvcm1TdGF0ZS5pZEVudGl0eVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoZWxlbWVudC5waXZvdCk7XG4gICAgICAgICAgICAgIGNvbnN0IHByb21zID0gW107XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQucmVzb3VyY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXTogaXRlbVtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXSxcbiAgICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9tcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgICAgICAuYWRkUmVzb3VyY2VzKHJlc3RSZXNvdXJjZS5hZGRDb25maWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3NUb2FzdChtc2cpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1TdGF0ZS5pZEVudGl0eSxcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgICAgIHRoaXMuZm9ybVN0YXRlLmlkRW50aXR5LFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1zZ0Vycm9yID0ge1xuICAgICAgICAgICAgbGFiZWw6IGBtc2ctdXBkYXRpbmctZmFpbGAsXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kYW5nZXJUb2FzdChtc2dFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBpc0ZpbGUodmFyaWFibGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09PSAnb2JqZWN0JyAmJiB2YXJpYWJsZSBpbnN0YW5jZW9mIEZpbGU7XG4gIH1cblxuICBkb3dubG9hZFRlbXBsYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0SGVhZGVyID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgc2hlZXRIZWFkZXJbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGtleTtcbiAgICB9KTtcbiAgICBjb25zdCBlZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgIGNvbnN0IHVkdDogYW55ID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9FeGNlbChlZGF0YSwgJ3Jlc3RfZmlsZV90ZW1wbGF0ZV9kYXRhJyk7XG4gIH1cblxuICBpbXBvcnREYXRhKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFVwbG9hZEZpbGVDb21wb25lbnQsIHt9KTtcbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB0aGlzLnNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UocmVzcCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc291cmNlLmZpZWxkcyk7XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IChjZWxsLCByb3cpID0+ICh7XG4gICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gY29sdW5tcztcbiAgfVxuXG4gIG9uU3VtYml0KCkge1xuICAgIGlmICh0aGlzLmZvcm1TdGF0ZS5pc0FkZCkgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIGVsc2UgdGhpcy5vbkVkaXQoKTtcbiAgfVxuXG4gIGFkZEpTT05GaWVsZChldmVudCkge1xuICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNbZXZlbnQubmFtZV0ucHVzaCh7XG4gICAgICBsYWJlbDogJycsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBhZGQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVKU09ORmllbGQoZXZlbnQsIGluZGV4KSB7XG4gICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tldmVudC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgb25Nb3JwaFNlbGVjdEZpZWxkKGV2ZW50LCBmaWVsZCkge1xuICAgIGNvbnN0IHJlc3NvdXJjZXMgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShldmVudCk7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKChlbHQpID0+IGVsdC5uYW1lID09IGZpZWxkKTtcblxuICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICBhcGk6IHJlc3NvdXJjZXMuYXBpLFxuICAgICAgICBxdWVyeVBhcmFtczogZmllbGRDb25maWcubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgPyBmaWVsZENvbmZpZy5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcucXVlcnlQYXJhbXNcbiAgICAgICAgICA6IHt9LFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vcHRpb25zW2ZpZWxkXSA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkXSA9IG9mKHRoaXMub3B0aW9uc1tmaWVsZF0pO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkxhdENoYW5nZSh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgY29uc3QgZmllbGRMYXQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKChlbHQpID0+IGVsdC5uYW1lID09IGZpZWxkTmFtZSk7XG4gICAgY29uc3QgbmFtZSA9IGZpZWxkTGF0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZDtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25MbmdDaGFuZ2UodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgIGNvbnN0IGZpZWxkTGF0ID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZCgoZWx0KSA9PiBlbHQubmFtZSA9PSBmaWVsZE5hbWUpO1xuICAgIGNvbnN0IG5hbWUgPSBmaWVsZExhdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5iLWNhcmQ+XG4gIDwhLS0gPG5iLWNhcmQtaGVhZGVyIGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC05XCIgKm5nSWY9XCJmb3JtU3RhdGUuaXNBZGRcIj5cbiAgICAgIHt7IHJlc291cmNlLmFkZENvbmZpZy50aXRsZSB9fVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5iQnV0dG9uXG4gICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgIG5iQ29udGV4dE1lbnVUYWc9XCJteS1jb250ZXh0LW1lbnVcIlxuICAgICAgPlxuICAgICAgICB7eyBcInJlc3QtYWRkLmltcG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9uYi1jYXJkLWhlYWRlcj4gLS0+XG5cbiAgPG5iLWNhcmQtaGVhZGVyICpuZ0lmPVwiZm9ybVN0YXRlLm9uUmVhZHkgJiYgIWZvcm1TdGF0ZS5pc0FkZFwiXG4gICAgPnt7IHJlc291cmNlLmVkaXRDb25maWcudGl0bGUgfX1cbiAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICA8bmItY2FyZC1oZWFkZXIgKm5nSWY9XCJmb3JtU3RhdGUub25SZWFkeSAmJiBmb3JtU3RhdGUuaXNBZGRcIlxuICAgID57eyByZXNvdXJjZS5hZGRDb25maWcudGl0bGUgfX1cbiAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICA8bmItY2FyZC1ib2R5PlxuICAgIDxuYi10YWJzZXQgZnVsbFdpZHRoPlxuICAgICAgPG5iLXRhYiB0YWJUaXRsZT1cIkFqb3V0IHNpbXBsZVwiPlxuICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiZm9ybVN0YXRlLm9uUmVhZHlcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgbGV0IGZpZWxkIG9mIHJlc291cmNlLmZpZWxkcztcbiAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUZuO1xuICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4XG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgY2xhc3M9XCJjb2wtMTJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5pbkZvcm1cIj5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHN0cmluZyAgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19PTkVcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHRleHQgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBBU1NXT1JEXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zPy5pc05lZWRDb25maXJtXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LnBhc3N3b3JkT3B0aW9ucz8uY29uZmlybUxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmNvbmZpcm1MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgOiAoZmllbGQubGFiZWwgKyBcIl9jb25maXJtYXRpb25cIiB8IHRpdGxlY2FzZSlcbiAgICAgICAgICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbCArICdfY29uZmlybWF0aW9uJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhPy5hZGRDb25maWc/LnBhc3N3b3JkT3B0aW9ucz8uY29uZmlybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLnBhc3N3b3JkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmZpcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm5hbWUgKyAnX2NvbmZpcm1hdGlvbidcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIG51bWJlciAgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVJcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZGF0ZSAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgW25iRGF0ZXBpY2tlcl09XCJmb3JtcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG5iLWRhdGVwaWNrZXIgI2Zvcm1waWNrZXI+PC9uYi1kYXRlcGlja2VyPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZGF0ZVRpbWUgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFVElNRVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgW25iRGF0ZXBpY2tlcl09XCJkYXRlVGltZVBpY2tlclwiXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPG5iLWRhdGUtdGltZXBpY2tlclxuICAgICAgICAgICAgICAgICAgd2l0aFNlY29uZHNcbiAgICAgICAgICAgICAgICAgICNkYXRlVGltZVBpY2tlclxuICAgICAgICAgICAgICAgID48L25iLWRhdGUtdGltZXBpY2tlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHRpbWUgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5USU1FXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdHdlbHZlSG91cnNGb3JtYXRcbiAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxuYi10aW1lcGlja2VyICN0aW1lcGlja2VyPjwvbmItdGltZXBpY2tlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGVudW0gLS0+XG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmVudW1PcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgYm9vbGVhbiAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU5cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC41ZW1cIj57e1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZVxuICAgICAgICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPCEtLSBbbmFtZV09XCJmaWVsZC5uYW1lXCIgLS0+XG4gICAgICAgICAgICAgICAgICA8bmItdG9nZ2xlIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPjwvbmItdG9nZ2xlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZmlsZSAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRklMRSB8fFxuICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBERlxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogZGFzaGVkOyBkaXNwbGF5OiBmbGV4XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWRyb3B6b25lIGZvcm0tY29udHJvbC1jdXN0b20gcm91bmRlZCBtLTJcIlxuICAgICAgICAgICAgICAgICAgbmd4LWRyb3B6b25lXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdICE9ICcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtzcmNdPVwidXJsc0ltYWdlW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20taW1nLWRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3VkLXVwbG9hZC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMmVtOyBjb2xvcjogI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgZmlsZXMgaGVyZSBvciBjbGljayB0byB1cGxvYWRcbiAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgbmdQcm9qZWN0QXM9XCJuZ3gtZHJvcHpvbmUtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmIG9mIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZlwiXG4gICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICA+e3sgZi5uYW1lIH19ICh7eyBmLnR5cGUgfX0pPC9uZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtcHJldmlldz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IGRhc2hlZDsgZGlzcGxheTogZmxleFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1kcm9wem9uZSBmb3JtLWNvbnRyb2wtY3VzdG9tIHJvdW5kZWQgbS0yXCJcbiAgICAgICAgICAgICAgICAgIG5neC1kcm9wem9uZVxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIHVybHNJbWFnZVtmaWVsZC5uYW1lXSAhPSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInVybHNJbWFnZVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWltZy1kcm9wem9uZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICB1cmxzSW1hZ2VbZmllbGQubmFtZV0gPT0gJydcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2xvdWQtdXBsb2FkLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAyZW07IGNvbG9yOiAjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgZHJvcCBmaWxlcyBoZXJlIG9yIGNsaWNrIHRvIHVwbG9hZFxuICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgPiAtLT5cbiAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICBuZ1Byb2plY3RBcz1cIm5neC1kcm9wem9uZS1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsZXNVcGxvYWRbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICBbZmlsZV09XCJmXCJcbiAgICAgICAgICAgICAgICAgICAgW3JlbW92YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICA8IS0tIDwvbmctY29udGFpbmVyPiAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICFpc0Nyb3BbZmllbGQubmFtZV0gJiYgY29udHJvbENyb3BlcltmaWVsZC5uYW1lXSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFjdGl2ZUNyb3BlcihmaWVsZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENST1BcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0Nyb3BbZmllbGQubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWFnZS1jcm9wcGVyXG4gICAgICAgICAgICAgICAgICAgIFtpbWFnZUZpbGVdPVwiY29udHJvbENyb3BlcltmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgIFttYWludGFpbkFzcGVjdFJhdGlvXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICBbYXNwZWN0UmF0aW9dPVwiNCAvIDNcIlxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJwbmdcIlxuICAgICAgICAgICAgICAgICAgICAoaW1hZ2VDcm9wcGVkKT1cImltYWdlQ3JvcHBlZCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+PC9pbWFnZS1jcm9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG5iQnV0dG9uIHN0YXR1cz1cInByaW1hcnlcIiAoY2xpY2spPVwic2F2ZUNyb3BlcihmaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgU0FWRSBDSEFOR0VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGVzYWN0aXZlQ3JvcChmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8aW1nIFtzcmNdPVwiY3JvcHBlZEltYWdlXCIgLz4gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBoYXNNYW55IC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSEFTX01BTllcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0XG4gICAgICAgICAgICAgICAgICAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBmb3JtLmdldChbZmllbGQubmFtZV0pLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICAgICAgICAgICAgPjwvbmItdGFnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICh0YWdBZGQpPVwib25UYWdBZGQoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbmItdGFnLWxpc3Q+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBiZWxvbmdfdG8gLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgI2F1dG9JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbmJBdXRvY29tcGxldGVdPVwiYXV0b0NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICFmaWVsZC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LnNlY29uZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLTNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgYmVsb25nVG9WYWx1ZVtmaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJlbG9uZ1RvVmFsdWVbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImkgKyAxMDBcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmItYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAjYXV0b0NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGJlbG9uZ190b19tYW55IC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0ICh0YWdSZW1vdmUpPVwib25UYWdSZW1vdmVCZWxvbmcoJGV2ZW50LCBmaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHJlZVtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICAgICAgICAgICAgPjwvbmItdGFnPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmJUYWdJbnB1dFxuICAgICAgICAgICAgICAgICAgICAjYXV0b0JlbG9uZ1RvTWFueVxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImJlbG9uZ1RvRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cblxuICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25DaG9vc2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSB8IGFzeW5jXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIDwvbmItb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvbmItYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgY29sb3IgIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0NXB4XCJcbiAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBsaW5rIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0KFtmaWVsZC5uYW1lXSkuaGFzRXJyb3IoJ2ludmFsaWRVcmwnKSAmJlxuICAgICAgICAgICAgICAgICAgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS50b3VjaGVkXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZXJyb3JcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgXCJyZXN0LWFkZC5pbnZhbGlkLWxpbmtcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBKU09OIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSlNPTlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5pc09wZW5cIlxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkSlNPTkZpZWxkKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzXCIgcGFjaz1cImZhc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgbWItMlwiXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gb2YganNvbkVkaXRvck9wdGlvbnNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiBbaWRdPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5hZGQ7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBmdWxsV2lkdGggbmJJbnB1dCBkaXNhYmxlZCBbdmFsdWVdPVwiaXRlbS5sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiICpuZ0lmPVwiaXRlbS5hZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlSlNPTkZpZWxkKGZpZWxkLCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInRyYXNoLWFsdFwiIHBhY2s9XCJmYXNcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBNT1JQSCAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk1PUlBIXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlJlc3NvdXJjZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uTW9ycGhTZWxlY3RGaWVsZCgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZWxhdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAjYXV0b0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJhdXRvQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJJbnB1dCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bmItYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgI2F1dG9Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSB8IGFzeW5jXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWcubW9ycGhDb25maWc/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLm1vcnBoQ29uZmlnPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIDwvbmItb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgR09PR0xFTUFQIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTUFQXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxuZ3gtZ21hcHNcbiAgICAgICAgICAgICAgICAgIChsYXRDaGFuZ2UpPVwib25MYXRDaGFuZ2UoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAobG5nQ2hhbmdlKT1cIm9uTG5nQ2hhbmdlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgID48L25neC1nbWFwcz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQubm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZCBtbC0yMCBtdC0zXCI+e3sgZmllbGQubm90ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9uYi10YWI+XG4gICAgICA8bmItdGFiIHRhYlRpdGxlPVwiSW1wb3J0YXRpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dC1hZGRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7eyBcInJlc3QtYWRkLmltcG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bmcyLXNtYXJ0LXRhYmxlIFtzZXR0aW5nc109XCJzZXR0aW5nc1wiIFtzb3VyY2VdPVwic291cmNlXCI+XG4gICAgICAgICAgPC9uZzItc21hcnQtdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYi10YWI+XG4gICAgPC9uYi10YWJzZXQ+XG4gIDwvbmItY2FyZC1ib2R5PlxuXG4gIDxuYi1jYXJkLWZvb3Rlcj5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1yb3dcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbmJCdXR0b25cbiAgICAgICAgKGNsaWNrKT1cIm9uU3VtYml0KClcIlxuICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmdcIlxuICAgICAgPlxuICAgICAgICA+XG4gICAgICAgIDwhLS0gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiAtLT5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAqbmdJZj1cImxvYWRpbmdcIlxuICAgICAgICAgIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIHt7IGZvcm1TdGF0ZS5idG5MYWJlbCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1mb290ZXI+XG48L25iLWNhcmQ+XG4iXX0=