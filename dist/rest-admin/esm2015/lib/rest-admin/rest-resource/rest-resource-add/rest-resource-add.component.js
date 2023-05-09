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
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r27.$implicit;
    const i_r6 = ctx_r27.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 19);
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
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "label", 17);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(3);
    const field_r5 = ctx_r30.$implicit;
    const i_r6 = ctx_r30.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.confirmLabel) ? field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.confirmLabel : i0.ɵɵpipeBind1(4, 5, field_r5.label + "_confirmation"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label + "_confirmation")("formControlName", (field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.confirmField) ? field_r5.metaData.addConfig.passwordOptions.confirmField : field_r5.name + "_confirmation");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 16);
    i0.ɵɵelementStart(2, "label", 17);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_ng_container_6_Template, 6, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r31.$implicit;
    const i_r6 = ctx_r31.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.passwordOptions == null ? null : field_r5.metaData.addConfig.passwordOptions.isNeedConfirm);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r32.$implicit;
    const i_r6 = ctx_r32.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 22);
    i0.ɵɵelement(5, "nb-datepicker", null, 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r33 = i0.ɵɵreference(6);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", field_r5.label)("nbDatepicker", _r33)("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 24);
    i0.ɵɵelement(5, "nb-date-timepicker", 25, 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r35 = i0.ɵɵreference(6);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("nbDatepicker", _r35)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 27);
    i0.ɵɵelement(5, "nb-timepicker", null, 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r37 = i0.ɵɵreference(6);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbTimepicker", _r37)("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r40 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r40.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r40.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 29);
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 30);
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
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 32);
    i0.ɵɵelementStart(2, "label", 33);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-toggle", 34);
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
    i0.ɵɵelement(0, "img", 38);
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r43 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("src", ctx_r43.urlsImage[field_r5.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 39);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r50 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 40);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template_ngx_dropzone_preview_removed_0_listener() { i0.ɵɵrestoreView(_r50); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.onRemove(field_r5); });
    i0.ɵɵelementStart(1, "ngx-dropzone-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r47 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r47)("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r47.name, " (", f_r47.type, ")");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵlistener("change", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r53); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r51 = i0.ɵɵnextContext(2); return ctx_r51.onSelect($event, field_r5); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 36);
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r17.urlsImage[field_r5.name] != "" && ctx_r17.filesUpload[field_r5.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r17.filesUpload[field_r5.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r17.filesUpload[field_r5.name]);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 38);
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r55 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("src", ctx_r55.urlsImage[field_r5.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 39);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 40);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r64); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r62 = i0.ɵɵnextContext(2); return ctx_r62.onRemove(field_r5); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r61 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r61)("removable", true);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r67); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.activeCroper(field_r5); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 43);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r70); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r68 = i0.ɵɵnextContext(2); return ctx_r68.imageCropped($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 42);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r70); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r71 = i0.ɵɵnextContext(2); return ctx_r71.saveCroper(field_r5); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r70); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r73 = i0.ɵɵnextContext(2); return ctx_r73.desactiveCrop(field_r5); });
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r59 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r59.controlCroper[field_r5.name])("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r78 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 35);
    i0.ɵɵlistener("change", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r78); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r76 = i0.ɵɵnextContext(2); return ctx_r76.onSelect($event, field_r5); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 36);
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 37);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 41);
    i0.ɵɵtemplate(9, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_ng_container_9_Template, 6, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r18.urlsImage[field_r5.name] != "" && ctx_r18.filesUpload[field_r5.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.filesUpload[field_r5.name].length <= 0 && ctx_r18.urlsImage[field_r5.name] == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r18.filesUpload[field_r5.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r18.isCrop[field_r5.name] && ctx_r18.controlCroper[field_r5.name] != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r18.isCrop[field_r5.name]);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 48);
} if (rf & 2) {
    const tree_r81 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r81);
} }
const _c2 = function (a0) { return [a0]; };
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 45);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r84); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r82 = i0.ɵɵnextContext(2); return ctx_r82.onTagRemove($event, field_r5.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 46);
    i0.ɵɵelementStart(6, "input", 47);
    i0.ɵɵlistener("tagAdd", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template_input_tagAdd_6_listener($event) { i0.ɵɵrestoreView(_r84); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r85 = i0.ɵɵnextContext(2); return ctx_r85.onTagAdd($event, field_r5.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r19.form.get(i0.ɵɵpureFunction1(6, _c2, field_r5.name)).value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelement(1, "input", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r92 = i0.ɵɵnextContext(3);
    const field_r5 = ctx_r92.$implicit;
    const i_r6 = ctx_r92.index;
    const ctx_r89 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("value", ctx_r89.belongToValue[field_r5.name] ? ctx_r89.belongToValue[field_r5.name] : "")("id", i_r6 + 100);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r93 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r93[(field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig.belongToOptions == null ? null : field_r5.metaData.addConfig.belongToOptions.value) ? field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.belongToOptions == null ? null : field_r5.metaData.addConfig.belongToOptions.value : "id"])("attributes", field_r5.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r93[field_r5.metaData.addConfig.belongToOptions.template ? field_r5.metaData.addConfig.belongToOptions.template : field_r5.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r97 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵelementStart(5, "div", 5);
    i0.ɵɵelementStart(6, "input", 49, 50);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r97); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r95 = i0.ɵɵnextContext(2); return ctx_r95.filterInput($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 51);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 52, 53);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r97); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r98 = i0.ɵɵnextContext(2); return ctx_r98.onSelectionChange($event, field_r5); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 54);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r90 = i0.ɵɵreference(10);
    const ctx_r100 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r100.$implicit;
    const i_r6 = ctx_r100.index;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r5.label));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name)("nbAutocomplete", _r90)("id", i_r6);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(field_r5.metaData == null ? null : field_r5.metaData.addConfig == null ? null : field_r5.metaData.addConfig.belongToOptions == null ? null : field_r5.metaData.addConfig.belongToOptions.secondField));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 9, ctx_r20.allFilterContains[field_r5.name]));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 62);
} if (rf & 2) {
    const tree_r105 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r105[field_r5.metaData.addConfig.belongToManyOptions.template ? field_r5.metaData.addConfig.belongToManyOptions.template : field_r5.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r5.metaData.attributes);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r107 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r107)("attributes", field_r5.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r107[field_r5.metaData.addConfig.belongToManyOptions.template ? field_r5.metaData.addConfig.belongToManyOptions.template : field_r5.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 57);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r111); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r109 = i0.ɵɵnextContext(2); return ctx_r109.onTagRemoveBelong($event, field_r5); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 58);
    i0.ɵɵelementStart(6, "input", 59, 60);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r111); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r112 = i0.ɵɵnextContext(2); return ctx_r112.filterInput($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 52, 61);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r111); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r114 = i0.ɵɵnextContext(2); return ctx_r114.onChoose($event, field_r5); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 54);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r103 = i0.ɵɵreference(9);
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r21.belongToMany[field_r5.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("nbAutocomplete", _r103)("placeholder", field_r5.label)("formControlName", field_r5.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 9, ctx_r21.allFilterContains[field_r5.name]));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 63);
    i0.ɵɵelement(5, "input", 64);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r117 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r117.$implicit;
    const i_r6 = ctx_r117.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r118 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r118.$implicit;
    const i_r6 = ctx_r118.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r6)("attributes", field_r5.metaData.attributes)("placeholder", field_r5.label)("formControlName", field_r5.name);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r123 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r123); const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r121 = i0.ɵɵnextContext(2); return ctx_r121.addJSONField(field_r5); });
    i0.ɵɵelement(1, "nb-icon", 68);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes);
} }
const _c3 = function () { return { standalone: true }; };
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r133 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 76);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r133); const item_r125 = i0.ɵɵnextContext().$implicit; return item_r125.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r125 = i0.ɵɵnextContext().$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r125.label)("attributes", field_r5.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 77);
} if (rf & 2) {
    const item_r125 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r125.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r139 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵelementStart(1, "button", 78);
    i0.ɵɵlistener("click", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r139); const index_r126 = i0.ɵɵnextContext().index; const field_r5 = i0.ɵɵnextContext(3).$implicit; const ctx_r137 = i0.ɵɵnextContext(2); return ctx_r137.removeJSONField(field_r5, index_r126); });
    i0.ɵɵelement(2, "nb-icon", 79);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 69);
    i0.ɵɵelementStart(1, "div", 70);
    i0.ɵɵtemplate(2, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 71);
    i0.ɵɵtemplate(3, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 72, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 73);
    i0.ɵɵelementStart(6, "input", 74);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r142); const item_r125 = restoredCtx.$implicit; return item_r125.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 75);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r125 = ctx.$implicit;
    const index_r126 = ctx.index;
    const _r128 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", index_r126);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r125.add)("ngIfElse", _r128);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r125.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r125.add);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 17);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 66);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r5.metaData.addConfig.jsonConfig.isOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r24.jsonEditorOptions[field_r5.name]);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 83);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r148 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("value", option_r148.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r148.label);
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r150 = ctx.$implicit;
    const field_r5 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r150[(field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig.morphConfig == null ? null : field_r5.metaData.addConfig.morphConfig.value) ? field_r5 == null ? null : field_r5.metaData == null ? null : field_r5.metaData.addConfig.morphConfig == null ? null : field_r5.metaData.addConfig.morphConfig.value : "id"])("attributes", field_r5.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r150[field_r5.metaData.addConfig.morphConfig.template ? field_r5.metaData.addConfig.morphConfig.template : field_r5.metaData.addConfig.morphConfig.filterKeys[0]], " ");
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r154 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 6);
    i0.ɵɵelementStart(3, "label", 17);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 80);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r154); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r152 = i0.ɵɵnextContext(2); return ctx_r152.onMorphSelectField($event, field_r5.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 5);
    i0.ɵɵelementStart(8, "label", 17);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 82, 50);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r154); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r155 = i0.ɵɵnextContext(2); return ctx_r155.filterInput($event, field_r5); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 52, 53);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r154); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r157 = i0.ɵɵnextContext(2); return ctx_r157.onSelectionChange($event, field_r5); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 54);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r146 = i0.ɵɵreference(14);
    const ctx_r159 = i0.ɵɵnextContext(2);
    const field_r5 = ctx_r159.$implicit;
    const i_r6 = ctx_r159.index;
    const ctx_r25 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", field_r5.metaData.addConfig.morphConfig.related);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, field_r5.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r5.metaData.attributes)("formControlName", field_r5.name)("nbAutocomplete", _r146)("id", i_r6)("disabled", !ctx_r25.allFilterContains[field_r5.name]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 10, ctx_r25.allFilterContains[field_r5.name]));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵelementStart(1, "label", 17);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 84);
    i0.ɵɵlistener("latChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template_ngx_gmaps_latChange_4_listener($event) { i0.ɵɵrestoreView(_r162); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r160 = i0.ɵɵnextContext(2); return ctx_r160.onLatChange($event, field_r5.name); })("lngChange", function RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template_ngx_gmaps_lngChange_4_listener($event) { i0.ɵɵrestoreView(_r162); const field_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r163 = i0.ɵɵnextContext(2); return ctx_r163.onLngChange($event, field_r5.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 1, field_r5.label));
} }
function RestResourceAddComponent_form_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_form_6_div_1_ng_container_1_div_1_Template, 5, 7, "div", 15);
    i0.ɵɵtemplate(2, RestResourceAddComponent_form_6_div_1_ng_container_1_div_2_Template, 5, 7, "div", 15);
    i0.ɵɵtemplate(3, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_form_6_div_1_ng_container_1_div_4_Template, 5, 7, "div", 15);
    i0.ɵɵtemplate(5, RestResourceAddComponent_form_6_div_1_ng_container_1_div_5_Template, 7, 7, "div", 15);
    i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_div_1_ng_container_1_div_6_Template, 7, 7, "div", 15);
    i0.ɵɵtemplate(7, RestResourceAddComponent_form_6_div_1_ng_container_1_div_7_Template, 7, 6, "div", 15);
    i0.ɵɵtemplate(8, RestResourceAddComponent_form_6_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 15);
    i0.ɵɵtemplate(9, RestResourceAddComponent_form_6_div_1_ng_container_1_div_9_Template, 6, 4, "div", 15);
    i0.ɵɵtemplate(10, RestResourceAddComponent_form_6_div_1_ng_container_1_div_10_Template, 8, 6, "div", 15);
    i0.ɵɵtemplate(11, RestResourceAddComponent_form_6_div_1_ng_container_1_div_11_Template, 10, 8, "div", 15);
    i0.ɵɵtemplate(12, RestResourceAddComponent_form_6_div_1_ng_container_1_div_12_Template, 7, 8, "div", 15);
    i0.ɵɵtemplate(13, RestResourceAddComponent_form_6_div_1_ng_container_1_div_13_Template, 13, 11, "div", 15);
    i0.ɵɵtemplate(14, RestResourceAddComponent_form_6_div_1_ng_container_1_div_14_Template, 12, 11, "div", 15);
    i0.ɵɵtemplate(15, RestResourceAddComponent_form_6_div_1_ng_container_1_div_15_Template, 6, 7, "div", 15);
    i0.ɵɵtemplate(16, RestResourceAddComponent_form_6_div_1_ng_container_1_div_16_Template, 5, 7, "div", 15);
    i0.ɵɵtemplate(17, RestResourceAddComponent_form_6_div_1_ng_container_1_div_17_Template, 7, 5, "div", 15);
    i0.ɵɵtemplate(18, RestResourceAddComponent_form_6_div_1_ng_container_1_div_18_Template, 17, 12, "div", 15);
    i0.ɵɵtemplate(19, RestResourceAddComponent_form_6_div_1_ng_container_1_div_19_Template, 5, 3, "div", 15);
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
function RestResourceAddComponent_form_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, RestResourceAddComponent_form_6_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r5.inForm);
} }
function RestResourceAddComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 12);
    i0.ɵɵtemplate(1, RestResourceAddComponent_form_6_div_1_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("formGroup", ctx_r2.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.resource.fields)("ngForTrackBy", ctx_r2.trackByFn);
} }
function RestResourceAddComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 85);
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
                            const jsonFiels = [];
                            elt.metaData.addConfig.jsonConfig.jsonFields.map((field) => {
                                jsonFiels.push({
                                    label: field,
                                    value: datas[elt.name][0] == '{'
                                        ? JSON.parse(datas[elt.name])[field]
                                        : typeof datas[elt.name] !== 'string'
                                            ? datas[elt.name][field]
                                            : datas[elt.name],
                                });
                            });
                            this.jsonEditorOptions[elt.name] = jsonFiels;
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
                var _a, _b, _c, _d, _e, _f, _g, _h;
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
                            const jsonFiels = [];
                            (_h = (_g = elt === null || elt === void 0 ? void 0 : elt.metaData) === null || _g === void 0 ? void 0 : _g.addConfig) === null || _h === void 0 ? void 0 : _h.jsonConfig.jsonFields.map((field) => {
                                jsonFiels.push({ label: field, value: '' });
                            });
                            this.jsonEditorOptions[elt.name] = jsonFiels;
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
                    return field.metaData.addConfig.belongToOptions.filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`));
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
        if (typeof value == 'string') {
            return this.options[field.name].filter((optionValue) => {
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
                                if (typeof this.jsonEditorOptions[key] == 'object') {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                        datas.append(`${key}[${elt.label}]`, elt.value);
                                    });
                                }
                                // datas.append(key, JSON.stringify(jsonFields));
                                // datas.append(key, jsonFields);
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
                                if (typeof this.jsonEditorOptions[key] == 'object') {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                    });
                                }
                                datas.append(key, JSON.stringify(jsonFields));
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
    } }, inputs: { resource: "resource" }, decls: 21, vars: 12, consts: [[4, "ngIf"], ["tabTitle", "Ajout simple"], ["class", "row", 3, "formGroup", 4, "ngIf"], ["tabTitle", "Importation"], [1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "status", "primary", "nbContextMenuTag", "my-context-add", 3, "nbContextMenu"], [3, "settings", "source"], [1, "buttons-row"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-2", 4, "ngIf"], [1, "row", 3, "formGroup"], ["class", "col-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-12"], ["class", "input-space", 4, "ngIf"], [1, "input-space"], [1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "password", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "number", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "attributes", "formControlName"], ["formpicker", ""], ["nbInput", "", "fullWidth", "", 3, "attributes", "placeholder", "nbDatepicker", "formControlName"], ["withSeconds", ""], ["dateTimePicker", ""], ["fullWidth", "", "twelveHoursFormat", "", "nbInput", "", 3, "nbTimepicker", "attributes", "formControlName"], ["timepicker", ""], ["fullWidth", "", 3, "formControlName", "attributes", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "display", "flex", "align-items", "center"], [2, "margin-right", "0.5em"], [3, "formControlName"], ["ngx-dropzone", "", 1, "custom-dropzone", "form-control-custom", "rounded", "m-2", 2, "border", "dashed", "display", "flex", 3, "change"], ["class", "custom-img-dropzone", 3, "attributes", "src", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "custom-img-dropzone", 3, "attributes", "src"], ["icon", "cloud-upload-outline", 2, "font-size", "2em", "color", "#ccc"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], ["nbButton", "", "status", "danger", 3, "click"], ["fullWidth", "", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "fullWidth", "", "nbTagInput", "", 3, "attributes", "placeholder", "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "keyup"], ["autoInput", ""], ["class", "col-3", 4, "ngIf"], [3, "selectedChange"], ["autoComplete", ""], [3, "value", "attributes", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "disabled", "true", "type", "text", "placeholder", "Value", 3, "attributes", "value", "id"], [3, "value", "attributes"], [3, "tagRemove"], ["removable", "", 3, "text", "attributes", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "attributes", "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], ["belongToField", ""], ["removable", "", 3, "text", "attributes"], [1, "color-row"], ["nbInput", "", "fullWidth", "", "type", "color", 2, "height", "45px", 3, "id", "attributes", "placeholder", "formControlName"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click", 4, "ngIf"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click"], ["icon", "plus", "pack", "fas"], [1, "row", "mb-2"], [1, "col", 3, "id"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col", 4, "ngIf"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange"], ["fullWidth", "", "nbInput", "", "disabled", "", 3, "value"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "click"], ["icon", "trash-alt", "pack", "fas"], ["fullWidth", "", 3, "selectedChange"], [3, "attributes", "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "disabled", "keyup"], [3, "attributes", "value"], [3, "latChange", "lngChange"], [1, "spinner-border", "spinner-border-sm", "mr-2"]], template: function RestResourceAddComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nb-card");
        i0.ɵɵtemplate(1, RestResourceAddComponent_nb_card_header_1_Template, 2, 1, "nb-card-header", 0);
        i0.ɵɵtemplate(2, RestResourceAddComponent_nb_card_header_2_Template, 2, 1, "nb-card-header", 0);
        i0.ɵɵelementStart(3, "nb-card-body");
        i0.ɵɵelementStart(4, "nb-tabset");
        i0.ɵɵelementStart(5, "nb-tab", 1);
        i0.ɵɵtemplate(6, RestResourceAddComponent_form_6_Template, 2, 3, "form", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "nb-tab", 3);
        i0.ɵɵelementStart(8, "div", 4);
        i0.ɵɵelement(9, "div", 5);
        i0.ɵɵelementStart(10, "div", 6);
        i0.ɵɵelementStart(11, "button", 7);
        i0.ɵɵtext(12);
        i0.ɵɵpipe(13, "translate");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(14, "div");
        i0.ɵɵelement(15, "ng2-smart-table", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(16, "nb-card-footer");
        i0.ɵɵelementStart(17, "div", 9);
        i0.ɵɵelementStart(18, "button", 10);
        i0.ɵɵlistener("click", function RestResourceAddComponent_Template_button_click_18_listener() { return ctx.onSumbit(); });
        i0.ɵɵtemplate(19, RestResourceAddComponent_span_19_Template, 1, 0, "span", 11);
        i0.ɵɵtext(20);
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
        i0.ɵɵadvance(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFHTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFPdkIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQStCLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFJckUsT0FBTyxFQUFxQixZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUdwRSxPQUFPLEVBQUUsUUFBUSxFQUFxQixNQUFNLGdDQUFnQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3RGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQzNILE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBQ3BJLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FB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O2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7YUFDbEQ7bVZBRVUsUUFBUTtrQkFBaEIsS0FBSztZQStCaUIsUUFBUTtrQkFBOUIsU0FBUzttQkFBQyxVQUFVO1lBQ1UsaUJBQWlCO2tCQUEvQyxTQUFTO21CQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2FsRGF0YVNvdXJjZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XG5pbXBvcnQgeyBSZXN0RmllbGQsIFJFU1RfRklFTERfVFlQRVMgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5iRGlhbG9nU2VydmljZSxcbiAgTmJNZW51U2VydmljZSxcbiAgTmJUYWdDb21wb25lbnQsXG4gIE5iVGFnSW5wdXRBZGRFdmVudCxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlZEV2ZW50LCBiYXNlNjRUb0ZpbGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQUxQSEFCRVQsIFJlc3RFeHBvcnRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9yZXN0LWV4cG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IFVwbG9hZEZpbGVDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmFsaWRhdG9yIH0gZnJvbSAnbmd4LWlucHV0LXZhbGlkYXRvcic7XG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1yZXN0LXJlc291cmNlLWFkZCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHJlc291cmNlOiBSZXN0UmVzb3VyY2U7XG4gIHJlc3NvdXJjZU5hbWU6IHN0cmluZztcbiAgbWVzc2FnZSA9ICdSZXNzb3VyY2UgYWpvdXTDqWUgYXZlYyBzdWNjw6hzJztcbiAgLy9JY29uc1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgZm9ybVN0YXRlOiBhbnkgPSB7XG4gICAgYnRuTGFiZWw6ICdNb2RpZmllcicsXG4gICAgaXNBZGQ6IGZhbHNlLFxuICAgIGlkRW50aXR5OiBudWxsLFxuICAgIG9uUmVhZHk6IGZhbHNlLFxuICB9O1xuXG4gIGVudGl0eTogYW55O1xuICAvLyBMb2FkZXJcbiAgbG9hZGluZyA9IGZhbHNlO1xuXG4gIC8vIFRlc3RcbiAgcHVibGljIHVwbG9hZGVkRmlsZTogQmVoYXZpb3JTdWJqZWN0PGFueT47XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIEVuZCB0ZXN0XG5cbiAgLy9CRUxPTkdfVE8gRklFTERcbiAgb3B0aW9uczogYW55ID0ge307XG4gIGFsbEZpbHRlckNvbnRhaW5zOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9WYWx1ZTogYW55ID0ge307XG4gIGJlbG9uZ1RvTWFueTogYW55ID0ge307XG5cbiAgLy9qc29uIGVkaXRvclxuICBqc29uRWRpdG9yT3B0aW9ucyA9IHt9O1xuXG4gIEBWaWV3Q2hpbGQoJ2JlbG9uZ1RvJykgYmVsb25nVG86IFF1ZXJ5TGlzdDxhbnk+O1xuICBAVmlld0NoaWxkKCdhdXRvQmVsb25nVG9NYW55JykgaW5wdXRCZWxvbmdUb01hbnk7XG5cbiAgY29udHJvbHM6IGFueTtcbiAgbXVsdGlwbGUgPSBmYWxzZTtcblxuICBjb250cm9sQ3JvcGVyOiBhbnkgPSB7fTtcblxuICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XG4gIGNyb3BwZWRJbWFnZTogYW55ID0ge307XG4gIGlzQ3JvcDogYW55ID0ge307XG5cbiAgY29udHJvbHNJbWFnZTogYW55ID0ge307XG5cbiAgLy8gQ29sb3JcbiAgY29sb3JzID0gW107XG5cbiAgLy8gRW5kIHRlc3RcblxuICAvL0ltcG9ydFxuICBpdGVtcyA9IFt7IHRpdGxlOiAnRG93bmxvYWQgdGVtcGxhdGUnIH0sIHsgdGl0bGU6ICdJbXBvcnQnIH1dO1xuICBhbHBoYWJlbHQ6IHN0cmluZ1tdID0gQUxQSEFCRVQ7XG5cbiAgLy9JbWFnZVxuICBmaWxlc1VwbG9hZCA9IHt9O1xuICB1cmxzSW1hZ2UgPSB7fTtcblxuICBzb3VyY2U6IExvY2FsRGF0YVNvdXJjZTtcbiAgc2V0dGluZ3M6IGFueTtcblxuICAvL01vcnBoX2ZpZWxkXG4gIG1vcnBoRmllbGRzID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0QWRtaW5Db25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBuYk1lbnVTZXJ2aWNlOiBOYk1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXhwb3J0U2VydmljZTogUmVzdEV4cG9ydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7XG4gICAgYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5sZW5ndGggLSAxXG4gICAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICAgKTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoICE9IDApIHtcbiAgICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lID1cbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDJcbiAgICAgICAgICBdLnBhdGguc3BsaXQoJy0nKVswXTtcblxuICAgICAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgIC5nZXRPbmVSZXNvdXJjZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmVkaXRDb25maWcuYXBpLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogdGhpcy5yZXNvdXJjZS5lZGl0Q29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmFtcy5pZFxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRGb3JtKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVN0YXRlID0ge1xuICAgICAgICAgICAgICBidG5MYWJlbDogJ01vZGlmaWVyJyxcbiAgICAgICAgICAgICAgaXNBZGQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpZEVudGl0eTogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgIG9uUmVhZHk6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0Rm9ybShudWxsKTtcbiAgICAgICAgdGhpcy5mb3JtU3RhdGUgPSB7XG4gICAgICAgICAgYnRuTGFiZWw6ICdBam91dGVyJyxcbiAgICAgICAgICBpc0FkZDogdHJ1ZSxcbiAgICAgICAgICBvblJlYWR5OiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uYk1lbnVTZXJ2aWNlXG4gICAgICAub25JdGVtQ2xpY2soKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoeyB0YWcgfSkgPT4gdGFnID09PSAnbXktY29udGV4dC1hZGQnKSxcbiAgICAgICAgbWFwKCh7IGl0ZW06IHsgdGl0bGUgfSB9KSA9PiB0aXRsZSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHRpdGxlKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGl0bGUpIHtcbiAgICAgICAgICBjYXNlICdEb3dubG9hZCB0ZW1wbGF0ZSc6XG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkVGVtcGxhdGUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0ltcG9ydCc6XG4gICAgICAgICAgICB0aGlzLmltcG9ydERhdGEoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGFzcycpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIGhpZGVTdWJIZWFkZXI6IHRydWUsXG4gICAgICBhY3Rpb25zOiBmYWxzZSxcbiAgICAgIHBhZ2VyOiB7XG4gICAgICAgIHBlclBhZ2U6IHRoaXMucmVzb3VyY2UubGlzdENvbmZpZy5wZXJQYWdlLFxuICAgICAgfSxcbiAgICAgIGNvbHVtbnM6IHRoaXMuY3JlYXRlTWF0VGFibGVDb2x1bW5zKCksXG4gICAgfTtcbiAgICB0aGlzLmNkcmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIGluaXRGb3JtKGRhdGFzKSB7XG4gICAgaWYgKGRhdGFzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5yZWR1Y2UoKGN1bXVsLCBlbHQpID0+IHtcbiAgICAgICAgdmFyIGZpbHRlcktleSA9IGVsdC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LmZpbHRlcktleXNbMF1cbiAgICAgICAgICA/IGVsdC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LmZpbHRlcktleXNbMF1cbiAgICAgICAgICA6ICduYW1lJztcbiAgICAgICAgaWYgKGVsdC5pbkZvcm0pIHtcbiAgICAgICAgICBzd2l0Y2ggKGVsdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSU1BR0U6XG4gICAgICAgICAgICAgIHRoaXMuZmlsZXNVcGxvYWRbZWx0Lm5hbWVdID0gW107XG4gICAgICAgICAgICAgIHRoaXMudXJsc0ltYWdlW2VsdC5uYW1lXSA9IGRhdGFzW2VsdC5uYW1lXTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IG5ldyBTZXQoW2RhdGFzW2VsdC5uYW1lXV0pLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPOlxuICAgICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPVxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucmVzb3VyY2VOYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICBhcGk6IHJlc3RSZXNvdXJjZS5hcGksXG4gICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgID8gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgOiByZXN0UmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tlbHQubmFtZV0gPSBvZih0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtkYXRhc1tlbHQubmFtZV1dLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWROYW1lXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICAgIGFwaTogcmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgPyBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgOiByZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tlbHQubmFtZV0gPSBbLi4ucmVzcG9uc2VdLnNvcnQoKHgsIHkpID0+XG4gICAgICAgICAgICAgICAgICAgIHhbZmlsdGVyS2V5XVxuICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICA/LmxvY2FsZUNvbXBhcmUoeVtmaWx0ZXJLZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2VsdC5uYW1lXSA9IG9mKHRoaXMub3B0aW9uc1tlbHQubmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQubmFtZV0gPSBuZXcgU2V0KGRhdGFzW2VsdC5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbZGF0YXNbZWx0Lm5hbWVdXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkxJTks6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW2RhdGFzW2VsdC5uYW1lXSwgVmFsaWRhdG9yLnVybF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQ09MT1I6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkpTT046XG4gICAgICAgICAgICAgIGNvbnN0IGpzb25GaWVscyA9IFtdO1xuICAgICAgICAgICAgICBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmpzb25Db25maWcuanNvbkZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAganNvbkZpZWxzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgIGRhdGFzW2VsdC5uYW1lXVswXSA9PSAneydcbiAgICAgICAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UoZGF0YXNbZWx0Lm5hbWVdKVtmaWVsZF1cbiAgICAgICAgICAgICAgICAgICAgICA6IHR5cGVvZiBkYXRhc1tlbHQubmFtZV0gIT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgPyBkYXRhc1tlbHQubmFtZV1bZmllbGRdXG4gICAgICAgICAgICAgICAgICAgICAgOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNbZWx0Lm5hbWVdID0ganNvbkZpZWxzO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLk1PUlBIX09ORTpcbiAgICAgICAgICAgICAgdGhpcy5tb3JwaEZpZWxkc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogZGF0YXNbZWx0Lm5hbWVdLnR5cGUsXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGFzW2VsdC5uYW1lXS5pZCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5NQVA6XG4gICAgICAgICAgICAgIGNvbnN0IGxhdCA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGQ7XG4gICAgICAgICAgICAgIGNvbnN0IGxvbmcgPSBlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbbGF0XTogZGF0YXNbbGF0XSxcbiAgICAgICAgICAgICAgICBbbG9uZ106IGRhdGFzW2xvbmddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMucmVzb3VyY2UuZmllbGRzLnJlZHVjZSgoY3VtdWwsIGVsdCkgPT4ge1xuICAgICAgICB2YXIgZmlsdGVyS2V5ID0gZWx0Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8uZmlsdGVyS2V5c1swXVxuICAgICAgICAgID8gZWx0Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8uZmlsdGVyS2V5c1swXVxuICAgICAgICAgIDogJ25hbWUnO1xuICAgICAgICBpZiAoZWx0LmluRm9ybSkge1xuICAgICAgICAgIHN3aXRjaCAoZWx0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5GSUxFOlxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLlBERjpcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5JTUFHRTpcbiAgICAgICAgICAgICAgdGhpcy5maWxlc1VwbG9hZFtlbHQubmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy51cmxzSW1hZ2VbZWx0Lm5hbWVdID0gJyc7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBuZXcgU2V0KFtdKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogZmFsc2UsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPOlxuICAgICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPVxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucmVzb3VyY2VOYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAocmVzdFJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICAgIGFwaTogcmVzdFJlc291cmNlLmFwaSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgPyBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgIDogcmVzdFJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZWx0Lm5hbWVdID0gb2YoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJ10sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZE5hbWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgYXBpOiByZXNvdXJjZS5hcGksXG4gICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICA/IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICA6IHJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgeFtmaWx0ZXJLZXldXG4gICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5W2ZpbHRlcktleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZWx0Lm5hbWVdID0gb2YodGhpcy5vcHRpb25zW2VsdC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuYmVsb25nVG9NYW55W2VsdC5uYW1lXSA9IG5ldyBTZXQoKTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuTElOSzpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJycsIFZhbGlkYXRvci51cmxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkpTT046XG4gICAgICAgICAgICAgIGNvbnN0IGpzb25GaWVscyA9IFtdO1xuICAgICAgICAgICAgICBlbHQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/Lmpzb25Db25maWcuanNvbkZpZWxkcy5tYXAoKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAganNvbkZpZWxzLnB1c2goeyBsYWJlbDogZmllbGQsIHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tlbHQubmFtZV0gPSBqc29uRmllbHM7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW251bGxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLk1BUDpcbiAgICAgICAgICAgICAgY29uc3QgbGF0ID0gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgY29uc3QgbG9uZyA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtsYXRdOiBbbnVsbF0sXG4gICAgICAgICAgICAgICAgW2xvbmddOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJ10sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHRoaXMuY29udHJvbHMpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgLy9UYWdzXG4gIG9uVGFnUmVtb3ZlKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCwgbmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IHRyZWVzQSA9IG5ldyBTZXQodGhpcy5mb3JtLmdldChbbmFtZV0pLnZhbHVlKTtcblxuICAgIHRyZWVzQS5kZWxldGUodGFnVG9SZW1vdmUudGV4dCk7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbbmFtZV06IEFycmF5LmZyb20odHJlZXNBLnZhbHVlcygpKSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGFnQWRkKHsgdmFsdWUsIGlucHV0IH06IE5iVGFnSW5wdXRBZGRFdmVudCwgbmFtZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgdHJlZXNBID0gbmV3IFNldCh0aGlzLmZvcm0uZ2V0KFtuYW1lXSkudmFsdWUpO1xuICAgICAgdHJlZXNBLmFkZCh2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIFtuYW1lXTogQXJyYXkuZnJvbSh0cmVlc0EudmFsdWVzKCkpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8vIEF1dG9jb21wbGV0ZVxuICBwcml2YXRlIGZpbHRlcih2YWx1ZTogYW55LCBmaWVsZCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMuZmlsdGVyS2V5cy5zb21lKFxuICAgICAgICAgICAgKGVsdCkgPT5cbiAgICAgICAgICAgICAgYCR7b3B0aW9uVmFsdWVbZWx0XS50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgYCR7dmFsdWUudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXJlZE9wdGlvbnModmFsdWU6IGFueSwgZmllbGQ6IFJlc3RGaWVsZCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBpZiAoZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTylcbiAgICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdGhpcy5maWx0ZXIoZmlsdGVyU3RyaW5nLCBmaWVsZCkpXG4gICAgICApO1xuICAgIGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5NT1JQSClcbiAgICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlck1hbnkoZmlsdGVyU3RyaW5nLCBmaWVsZCwgJ21vcnBoQ29uZmlnJylcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICBtYXAoKGZpbHRlclN0cmluZzogc3RyaW5nKSA9PiB0aGlzLmZpbHRlck1hbnkoZmlsdGVyU3RyaW5nLCBmaWVsZCkpXG4gICAgKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGV2ZW50LCBmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgY29uc3QgYlZhbCA9IHRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXVxuICAgICAgPyB0aGlzLm9wdGlvbnNbZmllbGQubmFtZV0uZmluZCgoZWx0KSA9PiBlbHQ/LmlkID09PSBldmVudClcbiAgICAgIDoge307XG4gICAgdGhpcy5iZWxvbmdUb1ZhbHVlW2ZpZWxkLm5hbWVdID0gYlZhbFxuICAgICAgPyBiVmFsW1xuICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYmVsb25nVG9TZWNvbmRGaWVsZExhYmVsXG4gICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYmVsb25nVG9TZWNvbmRGaWVsZExhYmVsXG4gICAgICAgICAgICA6ICduYW1lJ1xuICAgICAgICBdXG4gICAgICA6ICcnO1xuICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucyhldmVudCwgZmllbGQpO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGZpZWxkOiBSZXN0RmllbGQpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBmaWVsZFxuICAgICk7XG4gIH1cblxuICB0ZXN0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG4gIC8vIEVuZCBBdXRvY29tcGxldGVcblxuICAvL0ltYWdlIGlucHV0XG4gIG9uU2VsZWN0KGV2ZW50LCBmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgIGNvbnN0IGFkZGVkRmlsZXM6IEZpbGUgPSBldmVudC5hZGRlZEZpbGVzO1xuXG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFthZGRlZEZpbGVzWzBdXTtcblxuICAgIGlmIChmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0UpIHtcbiAgICAgIHRoaXMuaXNDcm9wW2ZpZWxkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29udHJvbENyb3BlcltmaWVsZC5uYW1lXSA9IGFkZGVkRmlsZXNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBhZGRlZEZpbGVzWzBdLFxuICAgIH0pO1xuICB9XG5cbiAgb25SZW1vdmUoZmllbGQpIHtcbiAgICB0aGlzLmZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdID0gW107XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCwgZmllbGQpIHtcbiAgICB0aGlzLmNyb3BwZWRJbWFnZVtmaWVsZC5uYW1lXSA9IGV2ZW50LmJhc2U2NDtcbiAgfVxuXG4gIGFjdGl2ZUNyb3BlcihmaWVsZCkge1xuICAgIHRoaXMuaXNDcm9wW2ZpZWxkLm5hbWVdID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2FjdGl2ZUNyb3AoZmllbGQpIHtcbiAgICB0aGlzLmlzQ3JvcFtmaWVsZC5uYW1lXSA9IGZhbHNlO1xuICB9XG5cbiAgc2F2ZUNyb3BlcihmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgdGhpcy5pc0Nyb3BbZmllbGQubmFtZV0gPSBmYWxzZTtcbiAgICB0aGlzLmZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdID0gW1xuICAgICAgYmFzZTY0VG9GaWxlKHRoaXMuY3JvcHBlZEltYWdlW2ZpZWxkLm5hbWVdKSxcbiAgICBdO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBuZXcgRmlsZShcbiAgICAgICAgW2Jhc2U2NFRvRmlsZSh0aGlzLmNyb3BwZWRJbWFnZVtmaWVsZC5uYW1lXSldLFxuICAgICAgICBmaWVsZC5uYW1lXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgLy9iZWxvbmdUb01hbnlPcHRpb25zXG4gIG9uQ2hvb3NlKGV2ZW50LCBmaWVsZCkge1xuICAgIGNvbnN0IGNlbGxEYXRhOiBhbnlbXSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbZmllbGQubmFtZV0pO1xuICAgIGlmIChldmVudC5pZCkge1xuICAgICAgY29uc3Qgc2VhcmNoID0gY2VsbERhdGEuZmluZCgoZWx0OiBhbnkpID0+IGVsdC5pZCA9PSBldmVudC5pZCk7XG5cbiAgICAgIGlmIChzZWFyY2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsdCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgW2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWRJZE5hbWVdOlxuICAgICAgICAgICAgZXZlbnQuaWQsXG4gICAgICAgICAgW2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlc291cmNlSWROYW1lXTogJycsXG4gICAgICAgICAgW2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1dOlxuICAgICAgICAgICAgZXZlbnRbZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXV0sXG4gICAgICAgICAgc2F2ZVJlbGF0ZWRJZE5hbWU6XG4gICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkSWROYW1lLFxuICAgICAgICAgIHNhdmVSZXNvdXJjZUlkTmFtZTpcbiAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlc291cmNlSWROYW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdLmFkZChuZXdFbHQpO1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgW2ZpZWxkLm5hbWVdOiBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdLnZhbHVlcygpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXRCZWxvbmdUb01hbnkubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgb25UYWdSZW1vdmVCZWxvbmcodGFnVG9SZW1vdmU6IE5iVGFnQ29tcG9uZW50LCBmaWVsZCk6IHZvaWQge1xuICAgIGNvbnN0IGNlbGxEYXRhID0gQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXSk7XG4gICAgY29uc3Qgc2F2ZSA9IFtdO1xuXG4gICAgY2VsbERhdGEuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsdFtcbiAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5maWx0ZXJLZXlzWzBdXG4gICAgICAgIF0gIT0gdGFnVG9SZW1vdmUudGV4dFxuICAgICAgKVxuICAgICAgICBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyTWFueShcbiAgICB2YWx1ZTogYW55LFxuICAgIGZpZWxkLFxuICAgIG9wdGlvbnMgPSAnYmVsb25nVG9NYW55T3B0aW9ucydcbiAgKTogc3RyaW5nW10ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbZmllbGQubmFtZV0uZmlsdGVyKChvcHRpb25WYWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnW29wdGlvbnNdLmZpbHRlcktleXMuc29tZSgoZWx0KSA9PlxuICAgICAgICAgIGAke29wdGlvblZhbHVlW2VsdF0udG9Mb3dlckNhc2UoKX1gLmluY2x1ZGVzKGAke3ZhbHVlLnRvTG93ZXJDYXNlKCl9YClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vRW5kIEJlbG9uZ1RvTWFueVxuXG4gIG9uQ3JlYXRlKCkge1xuICAgIGxldCBkYXRhcztcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICBsYWJlbDogYG1zZy1hZGRpbmctc3VjY2Vzc2AsXG4gICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZm9ybScsIHRoaXMuZm9ybS52YWx1ZSk7XG5cbiAgICBjb25zdCBfYm9keSA9IHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLmJvZHk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5oYXNGaWxlKSB7XG4gICAgICBkYXRhcyA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoOiBSZXN0RmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgIChlbHQpID0+IGVsdC5uYW1lID09IGtleVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzZWFyY2ggJiYgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3dpdGNoIChzZWFyY2gudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEU6XG4gICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYCR7bW9tZW50KGZvcm1EYXRhW2tleV0pLmZvcm1hdCgnWVlZWS1NTS1ERCcpfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSlNPTjpcbiAgICAgICAgICAgICAgbGV0IGpzb25GaWVsZHMgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0ubWFwKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcyA9IHsgLi4uanNvbkZpZWxkcywgW2VsdC5sYWJlbF06IGVsdC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoYCR7a2V5fVske2VsdC5sYWJlbH1dYCwgZWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBkYXRhcy5hcHBlbmQoa2V5LCBKU09OLnN0cmluZ2lmeShqc29uRmllbGRzKSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YXMuYXBwZW5kKGtleSwganNvbkZpZWxkcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5tZXRhRGF0YT8ubnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBkYXRhcy5hcHBlbmQoa2V5LCAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5JTUFHRTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwpIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIGlmIChzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHwgc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8IHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLlBBU1NXT1JEKVxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gJycpIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmtleXMoX2JvZHkpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGRhdGFzLmFwcGVuZChrZXksIF9ib2R5W2tleV0pO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgbWFwIHR5cGU7XG4gICAgICBjb25zdCBtYXBGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5NQVBcbiAgICAgICk7XG4gICAgICBtYXBGaWVsZC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgIFtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXSxcbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXVxuICAgICAgICApO1xuICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXSxcbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWIgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaDogUmVzdEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZChcbiAgICAgICAgICAoZWx0KSA9PiBlbHQubmFtZSA9PSBrZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBmb3JtRGF0YVtrZXldICE9PSAnJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGFiW2tleV0gPSBmb3JtRGF0YVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBtYXAgdHlwZTtcbiAgICAgIGNvbnN0IG1hcEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFxuICAgICAgKTtcbiAgICAgIG1hcEZpZWxkLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICB0YWJbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF0gPVxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdO1xuICAgICAgICB0YWJbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdID1cbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF07XG4gICAgICB9KTtcblxuICAgICAgZGF0YXMgPSB7IC4uLnRhYiwgLi4uX2JvZHkgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzYXZlQmVsb25nVG9tYW55ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZKSB7XG4gICAgICAgIHNhdmVCZWxvbmdUb21hbnkucHVzaCh7XG4gICAgICAgICAgcmVzb3VyY2VzOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgcGl2b3Q6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5waXZvdE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdC5hZGRSZXNvdXJjZXModGhpcy5yZXNvdXJjZS5hZGRDb25maWcsIGRhdGFzKS5zdWJzY3JpYmUoXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID1cbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoZWxlbWVudC5waXZvdCk7XG4gICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09IHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zdCBtc2dFcnJvciA9IHtcbiAgICAgICAgICBsYWJlbDogYG1zZy1hZGRpbmctZXJyb3JgLFxuICAgICAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNzb3VyY2VOYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmRhbmdlclRvYXN0KG1zZ0Vycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25FZGl0KCkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIGxhYmVsOiBgbXNnLXVwZGF0aW5nLXN1Y2Nlc3NgLFxuICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGxldCBkYXRhcztcbiAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICBjb25zdCBfYm9keSA9IHRoaXMucmVzb3VyY2UuZWRpdENvbmZpZy5ib2R5O1xuICAgIGlmICh0aGlzLnJlc291cmNlLmhhc0ZpbGUpIHtcbiAgICAgIGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2g6IFJlc3RGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgKGVsdCkgPT4gZWx0Lm5hbWUgPT0ga2V5XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlYXJjaCAmJiBmb3JtRGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzd2l0Y2ggKHNlYXJjaC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuREFURTpcbiAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBgJHttb21lbnQoZm9ybURhdGFba2V5XSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5KU09OOlxuICAgICAgICAgICAgICBsZXQganNvbkZpZWxkcyA9IHt9O1xuICAgICAgICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XS5tYXAoKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBqc29uRmllbGRzID0geyAuLi5qc29uRmllbGRzLCBbZWx0LmxhYmVsXTogZWx0LnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgSlNPTi5zdHJpbmdpZnkoanNvbkZpZWxkcykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubWV0YURhdGE/Lm51bWJlcikge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZGF0YXMuYXBwZW5kKGtleSwgMCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSU1BR0U6XG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBudWxsKSBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAvLyBpZiAoc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HIHx8IHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fCBzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5QQVNTV09SRClcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09ICcnKSBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIE9iamVjdC5rZXlzKF9ib2R5KS5tYXAoKGtleSkgPT4ge1xuICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBfYm9keVtrZXldKTtcbiAgICAgIH0pO1xuICAgICAgLy8gQWRkIG1hcCB0eXBlO1xuICAgICAgY29uc3QgbWFwRmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTUFQXG4gICAgICApO1xuICAgICAgbWFwRmllbGQuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICBbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF0sXG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF1cbiAgICAgICAgKTtcbiAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgIFtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF0sXG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFiID0ge307XG4gICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2g6IFJlc3RGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgKGVsdCkgPT4gZWx0Lm5hbWUgPT0ga2V5XG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBzZWFyY2ggJiZcbiAgICAgICAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gIT09IG51bGwgJiZcbiAgICAgICAgICBmb3JtRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICBmb3JtRGF0YVtrZXldICE9PSAnJ1xuICAgICAgICApIHtcbiAgICAgICAgICB0YWJba2V5XSA9IGZvcm1EYXRhW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgbWFwIHR5cGU7XG4gICAgICBjb25zdCBtYXBGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5NQVBcbiAgICAgICk7XG4gICAgICBtYXBGaWVsZC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgdGFiW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdID1cbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXTtcbiAgICAgICAgdGFiW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXSA9XG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdO1xuICAgICAgfSk7XG4gICAgICBkYXRhcyA9IHsgLi4udGFiLCAuLi5fYm9keSB9O1xuICAgIH1cbiAgICBjb25zdCBzYXZlQmVsb25nVG9tYW55ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZKSB7XG4gICAgICAgIHNhdmVCZWxvbmdUb21hbnkucHVzaCh7XG4gICAgICAgICAgcmVzb3VyY2VzOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgcGl2b3Q6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5waXZvdE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgIC5lZGl0UmVzb3VyY2VzKFxuICAgICAgICB0aGlzLnJlc291cmNlLmVkaXRDb25maWcsXG4gICAgICAgIHRoaXMucmVzb3VyY2UuaGFzRmlsZSxcbiAgICAgICAgZGF0YXMsXG4gICAgICAgIHRoaXMuZm9ybVN0YXRlLmlkRW50aXR5XG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNhdmVCZWxvbmdUb21hbnkuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShlbGVtZW50LnBpdm90KTtcbiAgICAgICAgICAgICAgY29uc3QgcHJvbXMgPSBbXTtcblxuICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucmVzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZXNvdXJjZUlkTmFtZSddXTogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgICAgIC5hZGRSZXNvdXJjZXMocmVzdFJlc291cmNlLmFkZENvbmZpZywgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybVN0YXRlLmlkRW50aXR5LFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICAgICAgdGhpcy5mb3JtU3RhdGUuaWRFbnRpdHksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc3QgbXNnRXJyb3IgPSB7XG4gICAgICAgICAgICBsYWJlbDogYG1zZy11cGRhdGluZy1mYWlsYCxcbiAgICAgICAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNzb3VyY2VOYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmRhbmdlclRvYXN0KG1zZ0Vycm9yKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGRvd25sb2FkVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHNoZWV0SGVhZGVyLCAvLyB0YWJsZSBoZWFkZXJcbiAgICAgIF0sXG4gICAgICBza2lwSGVhZGVyOiB0cnVlLFxuICAgIH07XG4gICAgZWRhdGEucHVzaCh1ZHQpO1xuICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX3RlbXBsYXRlX2RhdGEnKTtcbiAgfVxuXG4gIGltcG9ydERhdGEoKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oVXBsb2FkRmlsZUNvbXBvbmVudCwge30pO1xuICAgIGRpYWxvZy5vbkNsb3NlLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgaWYgKHJlc3ApIHRoaXMuc291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZShyZXNwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTWF0VGFibGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzb3VyY2UuZmllbGRzKTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlZGl0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjb2x1bm1zO1xuICB9XG5cbiAgb25TdW1iaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybVN0YXRlLmlzQWRkKSB0aGlzLm9uQ3JlYXRlKCk7XG4gICAgZWxzZSB0aGlzLm9uRWRpdCgpO1xuICB9XG5cbiAgYWRkSlNPTkZpZWxkKGV2ZW50KSB7XG4gICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tldmVudC5uYW1lXS5wdXNoKHtcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGFkZDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUpTT05GaWVsZChldmVudCwgaW5kZXgpIHtcbiAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2V2ZW50Lm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBvbk1vcnBoU2VsZWN0RmllbGQoZXZlbnQsIGZpZWxkKSB7XG4gICAgY29uc3QgcmVzc291cmNlcyA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKGV2ZW50KTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoKGVsdCkgPT4gZWx0Lm5hbWUgPT0gZmllbGQpO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgIGFwaTogcmVzc291cmNlcy5hcGksXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBmaWVsZENvbmZpZy5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcucXVlcnlQYXJhbXNcbiAgICAgICAgICA/IGZpZWxkQ29uZmlnLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgICAgIDoge30sXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnNbZmllbGRdID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZmllbGRdID0gb2YodGhpcy5vcHRpb25zW2ZpZWxkXSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uTGF0Q2hhbmdlKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICBjb25zdCBmaWVsZExhdCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoKGVsdCkgPT4gZWx0Lm5hbWUgPT0gZmllbGROYW1lKTtcbiAgICBjb25zdCBuYW1lID0gZmllbGRMYXQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuICBvbkxuZ0NoYW5nZSh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgY29uc3QgZmllbGRMYXQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKChlbHQpID0+IGVsdC5uYW1lID09IGZpZWxkTmFtZSk7XG4gICAgY29uc3QgbmFtZSA9IGZpZWxkTGF0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGQ7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbbmFtZV06IHZhbHVlLFxuICAgIH0pO1xuICB9XG59XG4iLCI8bmItY2FyZD5cbiAgPCEtLSA8bmItY2FyZC1oZWFkZXIgY2xhc3M9XCJyb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIiAqbmdJZj1cImZvcm1TdGF0ZS5pc0FkZFwiPlxuICAgICAge3sgcmVzb3VyY2UuYWRkQ29uZmlnLnRpdGxlIH19XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgbmJCdXR0b25cbiAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHQtbWVudVwiXG4gICAgICA+XG4gICAgICAgIHt7IFwicmVzdC1hZGQuaW1wb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L25iLWNhcmQtaGVhZGVyPiAtLT5cblxuICA8bmItY2FyZC1oZWFkZXIgKm5nSWY9XCJmb3JtU3RhdGUub25SZWFkeSAmJiAhZm9ybVN0YXRlLmlzQWRkXCJcbiAgICA+e3sgcmVzb3VyY2UuZWRpdENvbmZpZy50aXRsZSB9fVxuICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5ICYmIGZvcm1TdGF0ZS5pc0FkZFwiXG4gICAgPnt7IHJlc291cmNlLmFkZENvbmZpZy50aXRsZSB9fVxuICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gIDxuYi1jYXJkLWJvZHk+XG4gICAgPG5iLXRhYnNldD5cbiAgICAgIDxuYi10YWIgdGFiVGl0bGU9XCJBam91dCBzaW1wbGVcIj5cbiAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5XCI+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgIGxldCBmaWVsZCBvZiByZXNvdXJjZS5maWVsZHM7XG4gICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlGbjtcbiAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIGNsYXNzPVwiY29sLTEyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuaW5Gb3JtXCI+XG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBzdHJpbmcgIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHxcbiAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfT05FXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSB0ZXh0IC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5QQVNTV09SRFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LnBhc3N3b3JkT3B0aW9ucz8uaXNOZWVkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnM/LmNvbmZpcm1MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5jb25maXJtTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKGZpZWxkLmxhYmVsICsgXCJfY29uZmlybWF0aW9uXCIgfCB0aXRsZWNhc2UpXG4gICAgICAgICAgICAgICAgICAgIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWwgKyAnX2NvbmZpcm1hdGlvbidcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnM/LmNvbmZpcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25maXJtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5uYW1lICsgJ19jb25maXJtYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBudW1iZXIgIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGRhdGUgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIFtuYkRhdGVwaWNrZXJdPVwiZm9ybXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxuYi1kYXRlcGlja2VyICNmb3JtcGlja2VyPjwvbmItZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGRhdGVUaW1lIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVRJTUVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIFtuYkRhdGVwaWNrZXJdPVwiZGF0ZVRpbWVQaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxuYi1kYXRlLXRpbWVwaWNrZXJcbiAgICAgICAgICAgICAgICAgIHdpdGhTZWNvbmRzXG4gICAgICAgICAgICAgICAgICAjZGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICA+PC9uYi1kYXRlLXRpbWVwaWNrZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSB0aW1lIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVElNRVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIFtuYlRpbWVwaWNrZXJdPVwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIHR3ZWx2ZUhvdXJzRm9ybWF0XG4gICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlcj48L25iLXRpbWVwaWNrZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBlbnVtIC0tPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRU5VTVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5lbnVtT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L25iLXNlbGVjdD5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGJvb2xlYW4gLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDAuNWVtXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgZmllbGQubGFiZWwgfCB0aXRsZWNhc2VcbiAgICAgICAgICAgICAgICAgIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDwhLS0gW25hbWVdPVwiZmllbGQubmFtZVwiIC0tPlxuICAgICAgICAgICAgICAgICAgPG5iLXRvZ2dsZSBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIj48L25iLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGZpbGUgLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEUgfHxcbiAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5QREZcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IGRhc2hlZDsgZGlzcGxheTogZmxleFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1kcm9wem9uZSBmb3JtLWNvbnRyb2wtY3VzdG9tIHJvdW5kZWQgbS0yXCJcbiAgICAgICAgICAgICAgICAgIG5neC1kcm9wem9uZVxuICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIHVybHNJbWFnZVtmaWVsZC5uYW1lXSAhPSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInVybHNJbWFnZVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWltZy1kcm9wem9uZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjbG91ZC11cGxvYWQtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDJlbTsgY29sb3I6ICNjY2NcIlxuICAgICAgICAgICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGZpbGVzIGhlcmUgb3IgY2xpY2sgdG8gdXBsb2FkXG4gICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgIG5nUHJvamVjdEFzPVwibmd4LWRyb3B6b25lLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgIFtmaWxlXT1cImZcIlxuICAgICAgICAgICAgICAgICAgICBbcmVtb3ZhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZShmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgPnt7IGYubmFtZSB9fSAoe3sgZi50eXBlIH19KTwvbmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBkYXNoZWQ7IGRpc3BsYXk6IGZsZXhcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tZHJvcHpvbmUgZm9ybS1jb250cm9sLWN1c3RvbSByb3VuZGVkIG0tMlwiXG4gICAgICAgICAgICAgICAgICBuZ3gtZHJvcHpvbmVcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICB1cmxzSW1hZ2VbZmllbGQubmFtZV0gIT0gJycgJiZcbiAgICAgICAgICAgICAgICAgICAgICBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW3NyY109XCJ1cmxzSW1hZ2VbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1pbWctZHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwICYmXG4gICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdID09ICcnXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3VkLXVwbG9hZC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMmVtOyBjb2xvcjogI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgZmlsZXMgaGVyZSBvciBjbGljayB0byB1cGxvYWRcbiAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgID4gLS0+XG4gICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgbmdQcm9qZWN0QXM9XCJuZ3gtZHJvcHpvbmUtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmIG9mIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZlwiXG4gICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgPCEtLSA8L25nLWNvbnRhaW5lcj4gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAhaXNDcm9wW2ZpZWxkLm5hbWVdICYmIGNvbnRyb2xDcm9wZXJbZmllbGQubmFtZV0gIT0gbnVsbFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3RpdmVDcm9wZXIoZmllbGQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDUk9QXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDcm9wW2ZpZWxkLm5hbWVdXCI+XG4gICAgICAgICAgICAgICAgICA8aW1hZ2UtY3JvcHBlclxuICAgICAgICAgICAgICAgICAgICBbaW1hZ2VGaWxlXT1cImNvbnRyb2xDcm9wZXJbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICBbbWFpbnRhaW5Bc3BlY3RSYXRpb109XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgW2FzcGVjdFJhdGlvXT1cIjQgLyAzXCJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwicG5nXCJcbiAgICAgICAgICAgICAgICAgICAgKGltYWdlQ3JvcHBlZCk9XCJpbWFnZUNyb3BwZWQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPjwvaW1hZ2UtY3JvcHBlcj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBzdGF0dXM9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmVDcm9wZXIoZmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICAgIFNBVkUgQ0hBTkdFXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlc2FjdGl2ZUNyb3AoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwhLS0gPGltZyBbc3JjXT1cImNyb3BwZWRJbWFnZVwiIC8+IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgaGFzTWFueSAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdFxuICAgICAgICAgICAgICAgICAgKHRhZ1JlbW92ZSk9XCJvblRhZ1JlbW92ZSgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cInRyZWVcIlxuICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAodGFnQWRkKT1cIm9uVGFnQWRkKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgYmVsb25nX3RvIC0tPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICNhdXRvSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImF1dG9Db21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAhZmllbGQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5zZWNvbmRGaWVsZFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC0zXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlbG9uZ1RvVmFsdWVbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiZWxvbmdUb1ZhbHVlW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpICsgMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgI2F1dG9Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnM/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBiZWxvbmdfdG9fbWFueSAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudCwgZmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICA8bmItdGFnXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0cmVlIG9mIGJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cIlxuICAgICAgICAgICAgICAgICAgICAgIHRyZWVbXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgI2F1dG9CZWxvbmdUb01hbnlcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJiZWxvbmdUb0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbmItdGFnLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICA8bmItYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAjYmVsb25nVG9GaWVsZFxuICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uQ2hvb3NlKCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gfCBhc3luY1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGNvbG9yICAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogNDVweFwiXG4gICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgbGluayAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkxJTktcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICBmb3JtLmdldChbZmllbGQubmFtZV0pLmhhc0Vycm9yKCdpbnZhbGlkVXJsJykgJiZcbiAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0KFtmaWVsZC5uYW1lXSkudG91Y2hlZFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWVycm9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IFwicmVzdC1hZGQuaW52YWxpZC1saW5rXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgSlNPTiAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkpTT05cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmpzb25Db25maWcuaXNPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEpTT05GaWVsZChmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1c1wiIHBhY2s9XCJmYXNcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IG1iLTJcIlxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtIG9mIGpzb25FZGl0b3JPcHRpb25zW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgW2lkXT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIml0ZW0uYWRkOyBlbHNlIGVsc2VCbG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgZnVsbFdpZHRoIG5iSW5wdXQgZGlzYWJsZWQgW3ZhbHVlXT1cIml0ZW0ubGFiZWxcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAqbmdJZj1cIml0ZW0uYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInJlbW92ZUpTT05GaWVsZChmaWVsZCwgaW5kZXgpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJ0cmFzaC1hbHRcIiBwYWNrPVwiZmFzXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgTU9SUEggLS0+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5NT1JQSFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5SZXNzb3VyY2VzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvbk1vcnBoU2VsZWN0RmllbGQoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiBvZiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgI2F1dG9JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbmJBdXRvY29tcGxldGVdPVwiYXV0b0NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICNhdXRvQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gfCBhc3luY1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLm1vcnBoQ29uZmlnPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5tb3JwaENvbmZpZz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIEdPT0dMRU1BUCAtLT5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8bmd4LWdtYXBzXG4gICAgICAgICAgICAgICAgICAobGF0Q2hhbmdlKT1cIm9uTGF0Q2hhbmdlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgKGxuZ0NoYW5nZSk9XCJvbkxuZ0NoYW5nZSgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICA+PC9uZ3gtZ21hcHM+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvbmItdGFiPlxuICAgICAgPG5iLXRhYiB0YWJUaXRsZT1cIkltcG9ydGF0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHQtYWRkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge3sgXCJyZXN0LWFkZC5pbXBvcnRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPG5nMi1zbWFydC10YWJsZSBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIiBbc291cmNlXT1cInNvdXJjZVwiPlxuICAgICAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmItdGFiPlxuICAgIDwvbmItdGFic2V0PlxuICA8L25iLWNhcmQtYm9keT5cblxuICA8bmItY2FyZC1mb290ZXI+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtcm93XCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG5iQnV0dG9uXG4gICAgICAgIChjbGljayk9XCJvblN1bWJpdCgpXCJcbiAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgIFtkaXNhYmxlZF09XCJsb2FkaW5nXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICAqbmdJZj1cImxvYWRpbmdcIlxuICAgICAgICAgIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXG4gICAgICAgID48L3NwYW4+XG4gICAgICAgIHt7IGZvcm1TdGF0ZS5idG5MYWJlbCB9fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIDwvbmItY2FyZC1mb290ZXI+XG48L25iLWNhcmQ+XG4iXX0=