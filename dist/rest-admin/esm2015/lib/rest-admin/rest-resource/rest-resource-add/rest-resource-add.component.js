import { LocalDataSource } from 'ng2-smart-table';
import { REST_FIELD_TYPES, PERMISSION, } from '../models/rest-resource.model';
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
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../service/rest-resource.service";
import * as i3 from "../service/rest-admin-config.service";
import * as i4 from "@angular/router";
import * as i5 from "@nebular/theme";
import * as i6 from "../service/rest-export.service";
import * as i7 from "../service/notification.service";
import * as i8 from "ngx-permissions";
import * as i9 from "../service/rest-error.service";
import * as i10 from "@angular/common";
import * as i11 from "ng2-smart-table";
import * as i12 from "../../directives/attribute.directive";
import * as i13 from "ngx-dropzone";
import * as i14 from "ngx-image-cropper";
import * as i15 from "../components/gmaps/gmaps.component";
import * as i16 from "@ngx-translate/core";
const _c0 = ["belongTo"];
const _c1 = ["autoBelongToMany"];
function RestResourceAddComponent_ng_container_0_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r2.resource.editConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_0_nb_card_header_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r3.resource.addConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r30.$implicit;
    const i_r8 = ctx_r30.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r31 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r31.$implicit;
    const i_r8 = ctx_r31.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "label", 21);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    const field_r7 = ctx_r33.$implicit;
    const i_r8 = ctx_r33.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.confirmLabel) ? field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.confirmLabel : i0.ɵɵpipeBind1(4, 5, field_r7.label + "_confirmation"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label + "_confirmation")("formControlName", (field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.confirmField) ? field_r7.metaData.addConfig.passwordOptions.confirmField : field_r7.name + "_confirmation");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "label", 21);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template, 6, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r34.$implicit;
    const i_r8 = ctx_r34.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.passwordOptions == null ? null : field_r7.metaData.addConfig.passwordOptions.isNeedConfirm);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r35 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r35.$implicit;
    const i_r8 = ctx_r35.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-datepicker", null, 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r36 = i0.ɵɵreference(6);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", field_r7.label)("nbDatepicker", _r36)("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 28);
    i0.ɵɵelement(5, "nb-date-timepicker", 29, 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r38 = i0.ɵɵreference(6);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("nbDatepicker", _r38)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 31);
    i0.ɵɵelement(5, "nb-timepicker", null, 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r40 = i0.ɵɵreference(6);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbTimepicker", _r40)("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r43 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r43.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r43.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 33);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r7.name)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r7.metaData.addConfig.enumOptions);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "label", 37);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-toggle", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 42);
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("src", ctx_r46.urlsImage[field_r7.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 43);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 44);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template_ngx_dropzone_preview_removed_0_listener() { i0.ɵɵrestoreView(_r53); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r51 = i0.ɵɵnextContext(3); return ctx_r51.onRemove(field_r7); });
    i0.ɵɵelementStart(1, "ngx-dropzone-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r50 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r50)("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r50.name, " (", f_r50.type, ")");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r56 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r56); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r54 = i0.ɵɵnextContext(3); return ctx_r54.onSelect($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 40);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r20.urlsImage[field_r7.name] != "" && ctx_r20.filesUpload[field_r7.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.filesUpload[field_r7.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r20.filesUpload[field_r7.name]);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 42);
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("src", ctx_r58.urlsImage[field_r7.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 43);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 44);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r67); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r65 = i0.ɵɵnextContext(3); return ctx_r65.onRemove(field_r7); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r64 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r64)("removable", true);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r70); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.activeCroper(field_r7); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 47);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r71 = i0.ɵɵnextContext(3); return ctx_r71.imageCropped($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r74 = i0.ɵɵnextContext(3); return ctx_r74.saveCroper(field_r7); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 48);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r76 = i0.ɵɵnextContext(3); return ctx_r76.desactiveCrop(field_r7); });
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r62 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r62.controlCroper[field_r7.name])("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r81); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r79 = i0.ɵɵnextContext(3); return ctx_r79.onSelect($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 40);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 45);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template, 6, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r21 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r21.urlsImage[field_r7.name] != "" && ctx_r21.filesUpload[field_r7.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.filesUpload[field_r7.name].length <= 0 && ctx_r21.urlsImage[field_r7.name] == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r21.filesUpload[field_r7.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r21.isCrop[field_r7.name] && ctx_r21.controlCroper[field_r7.name] != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.isCrop[field_r7.name]);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 52);
} if (rf & 2) {
    const tree_r84 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r84);
} }
const _c2 = function (a0) { return [a0]; };
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 49);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r87); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.onTagRemove($event, field_r7.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 50);
    i0.ɵɵelementStart(6, "input", 51);
    i0.ɵɵlistener("tagAdd", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template_input_tagAdd_6_listener($event) { i0.ɵɵrestoreView(_r87); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r88 = i0.ɵɵnextContext(3); return ctx_r88.onTagAdd($event, field_r7.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r22 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r22.form.get(i0.ɵɵpureFunction1(6, _c2, field_r7.name)).value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "input", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r95 = i0.ɵɵnextContext(3);
    const field_r7 = ctx_r95.$implicit;
    const i_r8 = ctx_r95.index;
    const ctx_r92 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("value", ctx_r92.belongToValue[field_r7.name] ? ctx_r92.belongToValue[field_r7.name] : "")("id", i_r8 + 100);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r96 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r96[(field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig.belongToOptions == null ? null : field_r7.metaData.addConfig.belongToOptions.value) ? field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.belongToOptions == null ? null : field_r7.metaData.addConfig.belongToOptions.value : "id"])("attributes", field_r7.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r96[field_r7.metaData.addConfig.belongToOptions.template ? field_r7.metaData.addConfig.belongToOptions.template : field_r7.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r100 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵelementStart(6, "input", 53, 54);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r100); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r98 = i0.ɵɵnextContext(3); return ctx_r98.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 56, 57);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r100); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r101 = i0.ɵɵnextContext(3); return ctx_r101.onSelectionChange($event, field_r7); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 58);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r93 = i0.ɵɵreference(10);
    const ctx_r103 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r103.$implicit;
    const i_r8 = ctx_r103.index;
    const ctx_r23 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r7.label));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name)("nbAutocomplete", _r93)("id", i_r8);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(field_r7.metaData == null ? null : field_r7.metaData.addConfig == null ? null : field_r7.metaData.addConfig.belongToOptions == null ? null : field_r7.metaData.addConfig.belongToOptions.secondField));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 9, ctx_r23.allFilterContains[field_r7.name]));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 66);
} if (rf & 2) {
    const tree_r108 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r108[field_r7.metaData.addConfig.belongToManyOptions.template ? field_r7.metaData.addConfig.belongToManyOptions.template : field_r7.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r7.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r110 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r110)("attributes", field_r7.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r110[field_r7.metaData.addConfig.belongToManyOptions.template ? field_r7.metaData.addConfig.belongToManyOptions.template : field_r7.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r114 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 61);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r112 = i0.ɵɵnextContext(3); return ctx_r112.onTagRemoveBelong($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 62);
    i0.ɵɵelementStart(6, "input", 63, 64);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 56, 65);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r117 = i0.ɵɵnextContext(3); return ctx_r117.onChoose($event, field_r7); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 58);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r106 = i0.ɵɵreference(9);
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r24 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r24.belongToMany[field_r7.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("nbAutocomplete", _r106)("placeholder", field_r7.label)("formControlName", field_r7.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 9, ctx_r24.allFilterContains[field_r7.name]));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 67);
    i0.ɵɵelement(5, "input", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r120 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r120.$implicit;
    const i_r8 = ctx_r120.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r121 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r121.$implicit;
    const i_r8 = ctx_r121.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r126 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r126); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r124 = i0.ɵɵnextContext(3); return ctx_r124.addJSONField(field_r7); });
    i0.ɵɵelement(1, "nb-icon", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes);
} }
const _c3 = function () { return { standalone: true }; };
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 80);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r136); const item_r128 = i0.ɵɵnextContext().$implicit; return item_r128.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r128 = i0.ɵɵnextContext().$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r128.label)("attributes", field_r7.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 81);
} if (rf & 2) {
    const item_r128 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r128.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵelementStart(1, "button", 82);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r142); const index_r129 = i0.ɵɵnextContext().index; const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r140 = i0.ɵɵnextContext(3); return ctx_r140.removeJSONField(field_r7, index_r129); });
    i0.ɵɵelement(2, "nb-icon", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵelementStart(1, "div", 74);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 75);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 76, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 77);
    i0.ɵɵelementStart(6, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r145); const item_r128 = restoredCtx.$implicit; return item_r128.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r128 = ctx.$implicit;
    const index_r129 = ctx.index;
    const _r131 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", index_r129);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r128.add)("ngIfElse", _r131);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r128.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r128.add);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 21);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r27 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r7.metaData.addConfig.jsonConfig.isOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r27.jsonEditorOptions[field_r7.name]);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 87);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r151 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("value", option_r151.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r151.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r153 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r153[(field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig.morphConfig == null ? null : field_r7.metaData.addConfig.morphConfig.value) ? field_r7 == null ? null : field_r7.metaData == null ? null : field_r7.metaData.addConfig.morphConfig == null ? null : field_r7.metaData.addConfig.morphConfig.value : "id"])("attributes", field_r7.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r153[field_r7.metaData.addConfig.morphConfig.template ? field_r7.metaData.addConfig.morphConfig.template : field_r7.metaData.addConfig.morphConfig.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r157 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelementStart(3, "label", 21);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 84);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r155 = i0.ɵɵnextContext(3); return ctx_r155.onMorphSelectField($event, field_r7.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵelementStart(8, "label", 21);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 86, 54);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r158 = i0.ɵɵnextContext(3); return ctx_r158.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 56, 57);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r160 = i0.ɵɵnextContext(3); return ctx_r160.onSelectionChange($event, field_r7); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 58);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r149 = i0.ɵɵreference(14);
    const ctx_r162 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r162.$implicit;
    const i_r8 = ctx_r162.index;
    const ctx_r28 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", field_r7.metaData.addConfig.morphConfig.related);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("formControlName", field_r7.name)("nbAutocomplete", _r149)("id", i_r8)("disabled", !ctx_r28.allFilterContains[field_r7.name]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 10, ctx_r28.allFilterContains[field_r7.name]));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r165 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 88);
    i0.ɵɵlistener("latChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_latChange_4_listener($event) { i0.ɵɵrestoreView(_r165); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r163 = i0.ɵɵnextContext(3); return ctx_r163.onLatChange($event, field_r7.name); })("lngChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_lngChange_4_listener($event) { i0.ɵɵrestoreView(_r165); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r166 = i0.ɵɵnextContext(3); return ctx_r166.onLngChange($event, field_r7.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r29 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("googleMapKey", ctx_r29.googleMapKeys);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_1_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_2_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_4_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_5_Template, 7, 7, "div", 19);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_6_Template, 7, 7, "div", 19);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_7_Template, 7, 6, "div", 19);
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 19);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_9_Template, 6, 4, "div", 19);
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template, 8, 6, "div", 19);
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template, 10, 8, "div", 19);
    i0.ɵɵtemplate(12, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template, 7, 8, "div", 19);
    i0.ɵɵtemplate(13, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template, 13, 11, "div", 19);
    i0.ɵɵtemplate(14, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template, 12, 11, "div", 19);
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_15_Template, 6, 7, "div", 19);
    i0.ɵɵtemplate(16, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_16_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(17, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_Template, 7, 5, "div", 19);
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template, 17, 12, "div", 19);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template, 5, 4, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext().$implicit;
    const ctx_r9 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.STRING || field_r7.type == ctx_r9.REST_FIELD_TYPES.HAS_ONE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.PASSWORD);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.FILE || field_r7.type == ctx_r9.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.MORPH);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.type == ctx_r9.REST_FIELD_TYPES.MAP);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 89);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r7.note);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 18);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_3_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r7.inForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r7.note != "");
} }
function RestResourceAddComponent_ng_container_0_form_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 16);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_Template, 4, 2, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r4.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.resource.fields)("ngForTrackBy", ctx_r4.trackByFn);
} }
function RestResourceAddComponent_ng_container_0_span_24_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 90);
} }
function RestResourceAddComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r172 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_nb_card_header_2_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_nb_card_header_3_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵelementStart(4, "nb-card-body");
    i0.ɵɵelementStart(5, "nb-tabset", 1);
    i0.ɵɵelementStart(6, "nb-tab", 2);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_Template, 2, 3, "form", 3);
    i0.ɵɵelementStart(8, "div", 4);
    i0.ɵɵelementStart(9, "div", 5);
    i0.ɵɵelement(10, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "nb-tab", 7);
    i0.ɵɵelementStart(12, "div", 8);
    i0.ɵɵelement(13, "div", 9);
    i0.ɵɵelementStart(14, "div", 10);
    i0.ɵɵelementStart(15, "button", 11);
    i0.ɵɵtext(16);
    i0.ɵɵpipe(17, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(18, "div");
    i0.ɵɵelement(19, "ng2-smart-table", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(20, "nb-card-footer");
    i0.ɵɵelementStart(21, "div", 13);
    i0.ɵɵelementStart(22, "button", 14);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_Template_button_click_22_listener() { i0.ɵɵrestoreView(_r172); const ctx_r171 = i0.ɵɵnextContext(); return ctx_r171.onSumbit(); });
    i0.ɵɵtext(23, " > ");
    i0.ɵɵtemplate(24, RestResourceAddComponent_ng_container_0_span_24_Template, 1, 0, "span", 15);
    i0.ɵɵtext(25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.formState.onReady && !ctx_r0.formState.isAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.formState.onReady && ctx_r0.formState.isAdd);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.formState.onReady);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.error, i0.ɵɵsanitizeHtml);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nbContextMenu", ctx_r0.items);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(17, 11, "rest-add.import"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("settings", ctx_r0.settings)("source", ctx_r0.source);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("disabled", ctx_r0.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.formState.btnLabel, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_nb_card_header_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r174 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r174.resource.editConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_nb_card_header_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-card-header");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r175 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r175.resource.addConfig.title, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r203 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r203.$implicit;
    const i_r181 = ctx_r203.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r204 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r204.$implicit;
    const i_r181 = ctx_r204.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "label", 21);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r206 = i0.ɵɵnextContext(3);
    const field_r180 = ctx_r206.$implicit;
    const i_r181 = ctx_r206.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.confirmLabel) ? field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.confirmLabel : i0.ɵɵpipeBind1(4, 5, field_r180.label + "_confirmation"));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label + "_confirmation")("formControlName", (field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.confirmField) ? field_r180.metaData.addConfig.passwordOptions.confirmField : field_r180.name + "_confirmation");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20);
    i0.ɵɵelementStart(2, "label", 21);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_ng_container_6_Template, 6, 7, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r207 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r207.$implicit;
    const i_r181 = ctx_r207.index;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 6, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.passwordOptions == null ? null : field_r180.metaData.addConfig.passwordOptions.isNeedConfirm);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r208 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r208.$implicit;
    const i_r181 = ctx_r208.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-datepicker", null, 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r209 = i0.ɵɵreference(6);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("placeholder", field_r180.label)("nbDatepicker", _r209)("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 28);
    i0.ɵɵelement(5, "nb-date-timepicker", 29, 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r211 = i0.ɵɵreference(6);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("nbDatepicker", _r211)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 31);
    i0.ɵɵelement(5, "nb-timepicker", null, 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r213 = i0.ɵɵreference(6);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("nbTimepicker", _r213)("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 35);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r216 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r216.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r216.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 33);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r180.name)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", field_r180.metaData.addConfig.enumOptions);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 36);
    i0.ɵɵelementStart(2, "label", 37);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "nb-toggle", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 42);
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r219 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("src", ctx_r219.urlsImage[field_r180.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 43);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 44);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template_ngx_dropzone_preview_removed_0_listener() { i0.ɵɵrestoreView(_r226); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r224 = i0.ɵɵnextContext(4); return ctx_r224.onRemove(field_r180); });
    i0.ɵɵelementStart(1, "ngx-dropzone-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r223 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r223)("removable", true);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", f_r223.name, " (", f_r223.type, ")");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r229 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r229); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r227 = i0.ɵɵnextContext(4); return ctx_r227.onSelect($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 40);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r193 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r193.urlsImage[field_r180.name] != "" && ctx_r193.filesUpload[field_r180.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r193.filesUpload[field_r180.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r193.filesUpload[field_r180.name]);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 42);
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r231 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("src", ctx_r231.urlsImage[field_r180.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 43);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r240 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 44);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r240); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r238 = i0.ɵɵnextContext(4); return ctx_r238.onRemove(field_r180); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r237 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r237)("removable", true);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r243 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r243); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r241 = i0.ɵɵnextContext(4); return ctx_r241.activeCroper(field_r180); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r246 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 47);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r244 = i0.ɵɵnextContext(4); return ctx_r244.imageCropped($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 46);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r247 = i0.ɵɵnextContext(4); return ctx_r247.saveCroper(field_r180); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 48);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r249 = i0.ɵɵnextContext(4); return ctx_r249.desactiveCrop(field_r180); });
    i0.ɵɵtext(5, " Cancel ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r235 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r235.controlCroper[field_r180.name])("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r254 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r254); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r252 = i0.ɵɵnextContext(4); return ctx_r252.onSelect($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 40);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 45);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template, 6, 3, "ng-container", 0);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r194 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 6, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r194.urlsImage[field_r180.name] != "" && ctx_r194.filesUpload[field_r180.name].length <= 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r194.filesUpload[field_r180.name].length <= 0 && ctx_r194.urlsImage[field_r180.name] == "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r194.filesUpload[field_r180.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r194.isCrop[field_r180.name] && ctx_r194.controlCroper[field_r180.name] != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r194.isCrop[field_r180.name]);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 52);
} if (rf & 2) {
    const tree_r257 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r257);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r260 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 49);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r260); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r258 = i0.ɵɵnextContext(4); return ctx_r258.onTagRemove($event, field_r180.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 50);
    i0.ɵɵelementStart(6, "input", 51);
    i0.ɵɵlistener("tagAdd", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template_input_tagAdd_6_listener($event) { i0.ɵɵrestoreView(_r260); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r261 = i0.ɵɵnextContext(4); return ctx_r261.onTagAdd($event, field_r180.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r195 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 4, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r195.form.get(i0.ɵɵpureFunction1(6, _c2, field_r180.name)).value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "input", 59);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r268 = i0.ɵɵnextContext(3);
    const field_r180 = ctx_r268.$implicit;
    const i_r181 = ctx_r268.index;
    const ctx_r265 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("value", ctx_r265.belongToValue[field_r180.name] ? ctx_r265.belongToValue[field_r180.name] : "")("id", i_r181 + 100);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_nb_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r269 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r269[(field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig.belongToOptions == null ? null : field_r180.metaData.addConfig.belongToOptions.value) ? field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.belongToOptions == null ? null : field_r180.metaData.addConfig.belongToOptions.value : "id"])("attributes", field_r180.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r269[field_r180.metaData.addConfig.belongToOptions.template ? field_r180.metaData.addConfig.belongToOptions.template : field_r180.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r273 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 8);
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵelementStart(6, "input", 53, 54);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r273); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r271 = i0.ɵɵnextContext(4); return ctx_r271.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 55);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 56, 57);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r273); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r274 = i0.ɵɵnextContext(4); return ctx_r274.onSelectionChange($event, field_r180); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 58);
    i0.ɵɵpipe(12, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r266 = i0.ɵɵreference(10);
    const ctx_r276 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r276.$implicit;
    const i_r181 = ctx_r276.index;
    const ctx_r196 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r180.label));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name)("nbAutocomplete", _r266)("id", i_r181);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(field_r180.metaData == null ? null : field_r180.metaData.addConfig == null ? null : field_r180.metaData.addConfig.belongToOptions == null ? null : field_r180.metaData.addConfig.belongToOptions.secondField));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 9, ctx_r196.allFilterContains[field_r180.name]));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 66);
} if (rf & 2) {
    const tree_r281 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r281[field_r180.metaData.addConfig.belongToManyOptions.template ? field_r180.metaData.addConfig.belongToManyOptions.template : field_r180.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r180.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r283 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r283)("attributes", field_r180.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r283[field_r180.metaData.addConfig.belongToManyOptions.template ? field_r180.metaData.addConfig.belongToManyOptions.template : field_r180.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r287 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 61);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r285 = i0.ɵɵnextContext(4); return ctx_r285.onTagRemoveBelong($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 62);
    i0.ɵɵelementStart(6, "input", 63, 64);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r288 = i0.ɵɵnextContext(4); return ctx_r288.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 56, 65);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r290 = i0.ɵɵnextContext(4); return ctx_r290.onChoose($event, field_r180); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 58);
    i0.ɵɵpipe(11, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r279 = i0.ɵɵreference(9);
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r197 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 7, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r197.belongToMany[field_r180.name]);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("nbAutocomplete", _r279)("placeholder", field_r180.label)("formControlName", field_r180.name);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 9, ctx_r197.allFilterContains[field_r180.name]));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 67);
    i0.ɵɵelement(5, "input", 68);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r293 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r293.$implicit;
    const i_r181 = ctx_r293.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r294 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r294.$implicit;
    const i_r181 = ctx_r294.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r299 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r299); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r297 = i0.ɵɵnextContext(4); return ctx_r297.addJSONField(field_r180); });
    i0.ɵɵelement(1, "nb-icon", 72);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r309 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 80);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r309); const item_r301 = i0.ɵɵnextContext().$implicit; return item_r301.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r301 = i0.ɵɵnextContext().$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r301.label)("attributes", field_r180.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 81);
} if (rf & 2) {
    const item_r301 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r301.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r315 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 77);
    i0.ɵɵelementStart(1, "button", 82);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r315); const index_r302 = i0.ɵɵnextContext().index; const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r313 = i0.ɵɵnextContext(4); return ctx_r313.removeJSONField(field_r180, index_r302); });
    i0.ɵɵelement(2, "nb-icon", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r318 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 73);
    i0.ɵɵelementStart(1, "div", 74);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 75);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 76, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 77);
    i0.ɵɵelementStart(6, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r318); const item_r301 = restoredCtx.$implicit; return item_r301.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r301 = ctx.$implicit;
    const index_r302 = ctx.index;
    const _r304 = i0.ɵɵreference(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", index_r302);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r301.add)("ngIfElse", _r304);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngModel", item_r301.value)("ngModelOptions", i0.ɵɵpureFunction0(6, _c3));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", item_r301.add);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 21);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 69);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r200 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 3, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r180.metaData.addConfig.jsonConfig.isOpen);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r200.jsonEditorOptions[field_r180.name]);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 87);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r324 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("value", option_r324.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r324.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 60);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r326 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", option_r326[(field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig.morphConfig == null ? null : field_r180.metaData.addConfig.morphConfig.value) ? field_r180 == null ? null : field_r180.metaData == null ? null : field_r180.metaData.addConfig.morphConfig == null ? null : field_r180.metaData.addConfig.morphConfig.value : "id"])("attributes", field_r180.metaData.attributes);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r326[field_r180.metaData.addConfig.morphConfig.template ? field_r180.metaData.addConfig.morphConfig.template : field_r180.metaData.addConfig.morphConfig.filterKeys[0]], " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r330 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵelementStart(2, "div", 10);
    i0.ɵɵelementStart(3, "label", 21);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 84);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r328 = i0.ɵɵnextContext(4); return ctx_r328.onMorphSelectField($event, field_r180.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 85);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 9);
    i0.ɵɵelementStart(8, "label", 21);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 86, 54);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r331 = i0.ɵɵnextContext(4); return ctx_r331.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 56, 57);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r333 = i0.ɵɵnextContext(4); return ctx_r333.onSelectionChange($event, field_r180); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 58);
    i0.ɵɵpipe(16, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r322 = i0.ɵɵreference(14);
    const ctx_r335 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r335.$implicit;
    const i_r181 = ctx_r335.index;
    const ctx_r201 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", field_r180.metaData.addConfig.morphConfig.related);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(10, 8, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("formControlName", field_r180.name)("nbAutocomplete", _r322)("id", i_r181)("disabled", !ctx_r201.allFilterContains[field_r180.name]);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(16, 10, ctx_r201.allFilterContains[field_r180.name]));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r338 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "label", 21);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 88);
    i0.ɵɵlistener("latChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_latChange_4_listener($event) { i0.ɵɵrestoreView(_r338); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r336 = i0.ɵɵnextContext(4); return ctx_r336.onLatChange($event, field_r180.name); })("lngChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template_ngx_gmaps_lngChange_4_listener($event) { i0.ɵɵrestoreView(_r338); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r339 = i0.ɵɵnextContext(4); return ctx_r339.onLngChange($event, field_r180.name); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r202 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("googleMapKey", ctx_r202.googleMapKeys);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_1_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_2_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_4_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_5_Template, 7, 7, "div", 19);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_6_Template, 7, 7, "div", 19);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_7_Template, 7, 6, "div", 19);
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 19);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_9_Template, 6, 4, "div", 19);
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template, 8, 6, "div", 19);
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template, 10, 8, "div", 19);
    i0.ɵɵtemplate(12, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template, 7, 8, "div", 19);
    i0.ɵɵtemplate(13, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template, 13, 11, "div", 19);
    i0.ɵɵtemplate(14, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template, 12, 11, "div", 19);
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_15_Template, 6, 7, "div", 19);
    i0.ɵɵtemplate(16, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_16_Template, 5, 7, "div", 19);
    i0.ɵɵtemplate(17, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_Template, 7, 5, "div", 19);
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template, 17, 12, "div", 19);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template, 5, 4, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext().$implicit;
    const ctx_r182 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.STRING || field_r180.type == ctx_r182.REST_FIELD_TYPES.HAS_ONE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.PASSWORD);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.FILE || field_r180.type == ctx_r182.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.BELONG_TO_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.JSON);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.MORPH);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.type == ctx_r182.REST_FIELD_TYPES.MAP);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span", 89);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r180.note);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 18);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_3_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", field_r180.inForm);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", field_r180.note != "");
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 16);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_Template, 4, 2, "div", 17);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r176 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r176.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r176.resource.fields)("ngForTrackBy", ctx_r176.trackByFn);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 90);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r347 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(4); return ctx_r346.onEdit(); });
    i0.ɵɵtext(1, " > ");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_span_2_Template, 1, 0, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r344 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r344.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r344.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r344.formState.btnLabel, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template, 4, 3, "button", 93);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r177 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r177.PERMISSION.UPDATE);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 90);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r351 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r351); const ctx_r350 = i0.ɵɵnextContext(4); return ctx_r350.onCreate(); });
    i0.ɵɵtext(1, " > ");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_span_2_Template, 1, 0, "span", 15);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r348 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r348.loading);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r348.loading);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r348.formState.btnLabel, " ");
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template, 4, 3, "button", 93);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r178 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r178.PERMISSION.CREATE);
} }
function RestResourceAddComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "nb-card");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_nb_card_header_2_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_nb_card_header_3_Template, 2, 1, "nb-card-header", 0);
    i0.ɵɵelementStart(4, "nb-card-body");
    i0.ɵɵelementStart(5, "nb-tabset", 1);
    i0.ɵɵelementStart(6, "nb-tab", 2);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_Template, 2, 3, "form", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-tab", 7);
    i0.ɵɵelementStart(9, "div", 8);
    i0.ɵɵelement(10, "div", 9);
    i0.ɵɵelementStart(11, "div", 10);
    i0.ɵɵelementStart(12, "button", 11);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵelement(16, "ng2-smart-table", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "nb-card-footer");
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_1_div_1_div_18_Template, 2, 1, "div", 92);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_1_div_1_div_19_Template, 2, 1, "div", 92);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r173 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.onReady && !ctx_r173.formState.isAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.onReady && ctx_r173.formState.isAdd);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.onReady);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nbContextMenu", ctx_r173.items);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 9, "rest-add.import"), " ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("settings", ctx_r173.settings)("source", ctx_r173.source);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r173.formState.isAdd);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r173.formState.isAdd);
} }
function RestResourceAddComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_Template, 20, 11, "div", 91);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r1.permissions);
} }
export class RestResourceAddComponent {
    constructor(fb, serviceRest, serviceRestAdminConfig, activatedRoute, nbMenuService, exportService, dialogService, router, notificationService, cdref, permissionsService, restErrorService) {
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
        this.permissionsService = permissionsService;
        this.restErrorService = restErrorService;
        this.error = null;
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
        this.permissions = [PERMISSION.CREATE, PERMISSION.UPDATE];
        this.googleMapApiKey = '';
        this.googleMapApiKey = serviceRestAdminConfig.googleMapApiKey;
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
        this.googleMapKeys = this.serviceRestAdminConfig.googleMapApiKey;
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
                            if (datas[elt.name] !== null) {
                                return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name], Validator.url] });
                            }
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: ['', Validator.url] });
                        case REST_FIELD_TYPES.COLOR:
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: datas[elt.name] });
                        case REST_FIELD_TYPES.JSON:
                            const jsonFields = [];
                            if (elt.metaData &&
                                elt.metaData.addConfig &&
                                elt.metaData.addConfig.jsonConfig &&
                                elt.metaData.addConfig.jsonConfig.jsonFields) {
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
                            if (elt &&
                                elt.metaData &&
                                elt.metaData.addConfig &&
                                elt.metaData.addConfig.jsonConfig &&
                                elt.metaData.addConfig.jsonConfig.jsonFields) {
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
    get PERMISSION() {
        return PERMISSION;
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
        this.error = '';
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
                                if (typeof this.jsonEditorOptions[key] === 'object' &&
                                    Array.isArray(this.jsonEditorOptions[key])) {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        if (typeof elt === 'object' &&
                                            elt !== null &&
                                            elt.label &&
                                            elt.value) {
                                            jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                            datas.append(`${key}[${elt.label}]`, elt.value);
                                        }
                                        else {
                                            console.error(`Error: Invalid element in jsonEditorOptions[${key}]: ${JSON.stringify(elt)}`);
                                        }
                                    });
                                }
                                else {
                                    console.error(`Error: Invalid type of jsonEditorOptions[${key}]: ${typeof this
                                        .jsonEditorOptions[key]}`);
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
            this.error = this.restErrorService.handleError(error);
            this.loading = false;
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
                            if (formData[key] !== null) {
                                datas.append(key, `${moment(formData[key]).format('YYYY-MM-DD')}`);
                            }
                            break;
                        case REST_FIELD_TYPES.JSON:
                            let jsonFields = {};
                            if (this.jsonEditorOptions[key] !== null) {
                                if (typeof this.jsonEditorOptions[key] === 'object') {
                                    this.jsonEditorOptions[key].map((elt) => {
                                        if (typeof elt === 'object' &&
                                            elt !== null &&
                                            elt.label &&
                                            elt.value) {
                                            jsonFields = Object.assign(Object.assign({}, jsonFields), { [elt.label]: elt.value });
                                            datas.append(`${key}[${elt.label}]`, elt.value);
                                        }
                                        else {
                                            if (elt.label) {
                                                datas.append(`${key}[${elt.label}]`, '');
                                            }
                                            console.error(`Error: Invalid element in jsonEditorOptions[${key}]: ${JSON.stringify(elt)}`);
                                        }
                                    });
                                }
                                else {
                                    console.error(`Error: Invalid type of jsonEditorOptions[${key}]: ${typeof this
                                        .jsonEditorOptions[key]}`);
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
            this.error = this.restErrorService.handleError(error);
            this.loading = false;
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
RestResourceAddComponent.ɵfac = function RestResourceAddComponent_Factory(t) { return new (t || RestResourceAddComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i6.RestExportService), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i7.NotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i8.NgxPermissionsService), i0.ɵɵdirectiveInject(i9.RestErrorService)); };
RestResourceAddComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceAddComponent, selectors: [["ngx-rest-resource-add"]], viewQuery: function RestResourceAddComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.belongTo = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["fullWidth", ""], ["tabTitle", "Ajout simple"], ["class", "row", 3, "formGroup", 4, "ngIf"], [1, "row", "text-center", "my-2"], [1, "col-12"], [1, "text-danger", 3, "innerHTML"], ["tabTitle", "Importation"], [1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "status", "primary", "nbContextMenuTag", "my-context-add", 3, "nbContextMenu"], [3, "settings", "source"], [1, "buttons-row"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-2", 4, "ngIf"], [1, "row", 3, "formGroup"], ["class", "col-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, ""], ["class", "input-space", 4, "ngIf"], [1, "input-space"], [1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "password", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "number", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "attributes", "formControlName"], ["formpicker", ""], ["nbInput", "", "fullWidth", "", 3, "attributes", "placeholder", "nbDatepicker", "formControlName"], ["withSeconds", ""], ["dateTimePicker", ""], ["fullWidth", "", "twelveHoursFormat", "", "nbInput", "", 3, "nbTimepicker", "attributes", "formControlName"], ["timepicker", ""], ["fullWidth", "", 3, "formControlName", "attributes", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "display", "flex", "align-items", "center"], [2, "margin-right", "0.5em"], [3, "formControlName"], ["ngx-dropzone", "", 1, "custom-dropzone", "form-control-custom", "rounded", "m-2", 2, "border", "dashed", "display", "flex", 3, "change"], ["class", "custom-img-dropzone", 3, "attributes", "src", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "custom-img-dropzone", 3, "attributes", "src"], ["icon", "cloud-upload-outline", 2, "font-size", "2em", "color", "#ccc"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], ["nbButton", "", "status", "danger", 3, "click"], ["fullWidth", "", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "fullWidth", "", "nbTagInput", "", 3, "attributes", "placeholder", "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "keyup"], ["autoInput", ""], ["class", "col-3", 4, "ngIf"], [3, "selectedChange"], ["autoComplete", ""], [3, "value", "attributes", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "disabled", "true", "type", "text", "placeholder", "Value", 3, "attributes", "value", "id"], [3, "value", "attributes"], [3, "tagRemove"], ["removable", "", 3, "text", "attributes", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "attributes", "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], ["belongToField", ""], ["removable", "", 3, "text", "attributes"], [1, "color-row"], ["nbInput", "", "fullWidth", "", "type", "color", 2, "height", "45px", 3, "id", "attributes", "placeholder", "formControlName"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click", 4, "ngIf"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click"], ["icon", "plus", "pack", "fas"], [1, "row", "mb-2"], [1, "col", 3, "id"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col", 4, "ngIf"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange"], ["fullWidth", "", "nbInput", "", "disabled", "", 3, "value"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "click"], ["icon", "trash-alt", "pack", "fas"], ["fullWidth", "", 3, "selectedChange"], [3, "attributes", "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "disabled", "keyup"], [3, "attributes", "value"], [3, "googleMapKey", "latChange", "lngChange"], [1, "text-muted", "ml-20", "mt-3"], [1, "spinner-border", "spinner-border-sm", "mr-2"], [4, "ngxPermissionsOnly"], ["class", "buttons-row", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "disabled", "click", 4, "ngxPermissionsOnly"]], template: function RestResourceAddComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceAddComponent_ng_container_0_Template, 26, 13, "ng-container", 0);
        i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
    } }, directives: [i10.NgIf, i5.NbCardComponent, i5.NbCardBodyComponent, i5.NbTabsetComponent, i5.NbTabComponent, i5.NbButtonComponent, i5.NbContextMenuDirective, i11.Ng2SmartTableComponent, i5.NbCardFooterComponent, i5.NbCardHeaderComponent, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i10.NgForOf, i5.NbInputDirective, i1.DefaultValueAccessor, i12.AttributeDirective, i1.NgControlStatus, i1.FormControlName, i1.NumberValueAccessor, i5.NbDatepickerDirective, i5.NbDatepickerComponent, i5.NbDateTimePickerComponent, i5.NbTimePickerDirective, i5.NbTimePickerComponent, i5.NbSelectComponent, i5.NbOptionComponent, i5.NbToggleComponent, i13.NgxDropzoneComponent, i13.NgxDropzoneLabelDirective, i5.NbIconComponent, i13.NgxDropzonePreviewComponent, i13.NgxDropzoneImagePreviewComponent, i14.ImageCropperComponent, i5.NbTagListComponent, i5.NbTagInputDirective, i5.NbTagComponent, i5.NbAutocompleteDirective, i5.NbAutocompleteComponent, i1.NgModel, i15.GmapsComponent, i8.NgxPermissionsDirective], pipes: [i16.TranslatePipe, i10.TitleCasePipe, i10.AsyncPipe], styles: ["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.color-row[_ngcontent-%COMP%]{justify-content:space-between;height:45px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;border-color:#909293;margin-left:5px;justify-content:center;align-items:center}@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.icon[_ngcontent-%COMP%]{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;font-size:14px}svg[_ngcontent-%COMP%]{fill:#909293;height:20px}.overlay[_ngcontent-%COMP%]{position:relative}.delete-button[_ngcontent-%COMP%]{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}nb-toggle[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceAddComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-add',
                templateUrl: './rest-resource-add.component.html',
                styleUrls: ['./rest-resource-add.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i4.ActivatedRoute }, { type: i5.NbMenuService }, { type: i6.RestExportService }, { type: i5.NbDialogService }, { type: i4.Router }, { type: i7.NotificationService }, { type: i0.ChangeDetectorRef }, { type: i8.NgxPermissionsService }, { type: i9.RestErrorService }]; }, { resource: [{
            type: Input
        }], belongTo: [{
            type: ViewChild,
            args: ['belongTo']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBRUwsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLCtCQUErQixDQUFDO0FBRXZDLE9BQU8sRUFFTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQU92QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBK0IsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUlyRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxRQUFRLEVBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1B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bnQiOlsiaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7XG4gIFJlc3RGaWVsZCxcbiAgUkVTVF9GSUVMRF9UWVBFUyxcbiAgUEVSTUlTU0lPTixcbn0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYkRpYWxvZ1NlcnZpY2UsXG4gIE5iTWVudVNlcnZpY2UsXG4gIE5iVGFnQ29tcG9uZW50LFxuICBOYlRhZ0lucHV0QWRkRXZlbnQsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCwgYmFzZTY0VG9GaWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFMUEhBQkVULCBSZXN0RXhwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1leHBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJ25neC1pbnB1dC12YWxpZGF0b3InO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UgfSBmcm9tICduZ3gtcGVybWlzc2lvbnMnO1xuaW1wb3J0IHsgUmVzdEVycm9yU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1lcnJvci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtcmVzb3VyY2UtYWRkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZXJyb3IgPSBudWxsO1xuICBASW5wdXQoKSByZXNvdXJjZTogUmVzdFJlc291cmNlO1xuICByZXNzb3VyY2VOYW1lOiBzdHJpbmc7XG4gIG1lc3NhZ2UgPSAnUmVzc291cmNlIGFqb3V0w6llIGF2ZWMgc3VjY8Oocyc7XG4gIC8vSWNvbnNcblxuICBmb3JtOiBGb3JtR3JvdXA7XG4gIGZvcm1TdGF0ZTogYW55ID0ge1xuICAgIGJ0bkxhYmVsOiAnTW9kaWZpZXInLFxuICAgIGlzQWRkOiBmYWxzZSxcbiAgICBpZEVudGl0eTogbnVsbCxcbiAgICBvblJlYWR5OiBmYWxzZSxcbiAgfTtcblxuICBlbnRpdHk6IGFueTtcbiAgLy8gTG9hZGVyXG4gIGxvYWRpbmcgPSBmYWxzZTtcblxuICAvLyBUZXN0XG4gIHB1YmxpYyB1cGxvYWRlZEZpbGU6IEJlaGF2aW9yU3ViamVjdDxhbnk+O1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvLyBFbmQgdGVzdFxuXG4gIC8vQkVMT05HX1RPIEZJRUxEXG4gIG9wdGlvbnM6IGFueSA9IHt9O1xuICBhbGxGaWx0ZXJDb250YWluczogYW55ID0ge307XG4gIGJlbG9uZ1RvVmFsdWU6IGFueSA9IHt9O1xuICBiZWxvbmdUb01hbnk6IGFueSA9IHt9O1xuXG4gIC8vanNvbiBlZGl0b3JcbiAganNvbkVkaXRvck9wdGlvbnMgPSB7fTtcblxuICBAVmlld0NoaWxkKCdiZWxvbmdUbycpIGJlbG9uZ1RvOiBRdWVyeUxpc3Q8YW55PjtcbiAgQFZpZXdDaGlsZCgnYXV0b0JlbG9uZ1RvTWFueScpIGlucHV0QmVsb25nVG9NYW55O1xuXG4gIGNvbnRyb2xzOiBhbnk7XG4gIG11bHRpcGxlID0gZmFsc2U7XG5cbiAgY29udHJvbENyb3BlcjogYW55ID0ge307XG5cbiAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9ICcnO1xuICBjcm9wcGVkSW1hZ2U6IGFueSA9IHt9O1xuICBpc0Nyb3A6IGFueSA9IHt9O1xuXG4gIGNvbnRyb2xzSW1hZ2U6IGFueSA9IHt9O1xuXG4gIC8vIENvbG9yXG4gIGNvbG9ycyA9IFtdO1xuXG4gIC8vIEVuZCB0ZXN0XG5cbiAgLy9JbXBvcnRcbiAgaXRlbXMgPSBbeyB0aXRsZTogJ0Rvd25sb2FkIHRlbXBsYXRlJyB9LCB7IHRpdGxlOiAnSW1wb3J0JyB9XTtcbiAgYWxwaGFiZWx0OiBzdHJpbmdbXSA9IEFMUEhBQkVUO1xuXG4gIC8vSW1hZ2VcbiAgZmlsZXNVcGxvYWQgPSB7fTtcbiAgdXJsc0ltYWdlID0ge307XG5cbiAgc291cmNlOiBMb2NhbERhdGFTb3VyY2U7XG4gIHNldHRpbmdzOiBhbnk7XG5cbiAgLy9Nb3JwaF9maWVsZFxuICBtb3JwaEZpZWxkcyA9IHt9O1xuXG4gIHBlcm1pc3Npb25zID0gW1BFUk1JU1NJT04uQ1JFQVRFLCBQRVJNSVNTSU9OLlVQREFURV07XG4gIGdvb2dsZU1hcEFwaUtleTogc3RyaW5nID0gJyc7XG4gIGdvb2dsZU1hcEtleXM7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdDogUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0QWRtaW5Db25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBuYk1lbnVTZXJ2aWNlOiBOYk1lbnVTZXJ2aWNlLFxuICAgIHByaXZhdGUgZXhwb3J0U2VydmljZTogUmVzdEV4cG9ydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkaWFsb2dTZXJ2aWNlOiBOYkRpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBwZXJtaXNzaW9uc1NlcnZpY2U6IE5neFBlcm1pc3Npb25zU2VydmljZSxcbiAgICBwcml2YXRlIHJlc3RFcnJvclNlcnZpY2U6IFJlc3RFcnJvclNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5nb29nbGVNYXBBcGlLZXkgPSBzZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdvb2dsZU1hcEFwaUtleTtcbiAgICBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKChwYXJhbXMpID0+IHtcbiAgICAgIHRoaXMucmVzc291cmNlTmFtZSA9XG4gICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsW1xuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDFcbiAgICAgICAgXS5wYXRoLnNwbGl0KCctJylbMF07XG5cbiAgICAgIHRoaXMucmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgICApO1xuXG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGggIT0gMCkge1xuICAgICAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsW1xuICAgICAgICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5zbmFwc2hvdC51cmwubGVuZ3RoIC0gMlxuICAgICAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICB0aGlzLnJlc3NvdXJjZU5hbWVcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgLmdldE9uZVJlc291cmNlKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhcGk6IHRoaXMucmVzb3VyY2UuZWRpdENvbmZpZy5hcGksXG4gICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLnJlc291cmNlLmVkaXRDb25maWcucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyYW1zLmlkXG4gICAgICAgICAgKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZvcm0ocmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JtU3RhdGUgPSB7XG4gICAgICAgICAgICAgIGJ0bkxhYmVsOiAnTW9kaWZpZXInLFxuICAgICAgICAgICAgICBpc0FkZDogZmFsc2UsXG4gICAgICAgICAgICAgIGlkRW50aXR5OiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgb25SZWFkeTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluaXRGb3JtKG51bGwpO1xuICAgICAgICB0aGlzLmZvcm1TdGF0ZSA9IHtcbiAgICAgICAgICBidG5MYWJlbDogJ0Fqb3V0ZXInLFxuICAgICAgICAgIGlzQWRkOiB0cnVlLFxuICAgICAgICAgIG9uUmVhZHk6IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmdvb2dsZU1hcEtleXMgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ29vZ2xlTWFwQXBpS2V5O1xuICAgIHRoaXMubmJNZW51U2VydmljZVxuICAgICAgLm9uSXRlbUNsaWNrKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHsgdGFnIH0pID0+IHRhZyA9PT0gJ215LWNvbnRleHQtYWRkJyksXG4gICAgICAgIG1hcCgoeyBpdGVtOiB7IHRpdGxlIH0gfSkgPT4gdGl0bGUpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCh0aXRsZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHRpdGxlKSB7XG4gICAgICAgICAgY2FzZSAnRG93bmxvYWQgdGVtcGxhdGUnOlxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZFRlbXBsYXRlKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdJbXBvcnQnOlxuICAgICAgICAgICAgdGhpcy5pbXBvcnREYXRhKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Bhc3MnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBoaWRlU3ViSGVhZGVyOiB0cnVlLFxuICAgICAgYWN0aW9uczogZmFsc2UsXG4gICAgICBwYWdlcjoge1xuICAgICAgICBwZXJQYWdlOiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcucGVyUGFnZSxcbiAgICAgIH0sXG4gICAgICBjb2x1bW5zOiB0aGlzLmNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpLFxuICAgIH07XG4gICAgdGhpcy5jZHJlZi5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnJlc291cmNlLnBlcm1pc3Npb25zLmZvckVhY2goKHBlcm1pc3Npb24pID0+IHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgYXBpOiBwZXJtaXNzaW9uLmZpZWxkS2V5LmFwaS5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogcGVybWlzc2lvbi5maWVsZEtleS5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA/IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgOiB7fSxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHt9O1xuICAgICAgICAgICAgcGVybWlzc2lvbi5maWVsZEtleS5maWVsZEZvck5leHRRdWVyeS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgIHZhbFtpdGVtXSA9IF8uZ2V0KHJlc3AsIGl0ZW0pO1xuICAgICAgICAgICAgICBpZiAodmFsW2l0ZW1dKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uc1NlcnZpY2UuYWRkUGVybWlzc2lvbihwZXJtaXNzaW9uLnR5cGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXRGb3JtKGRhdGFzKSB7XG4gICAgaWYgKGRhdGFzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5yZWR1Y2UoKGN1bXVsLCBlbHQpID0+IHtcbiAgICAgICAgdmFyIGZpbHRlcktleSA9IGVsdC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LmZpbHRlcktleXNbMF1cbiAgICAgICAgICA/IGVsdC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LmZpbHRlcktleXNbMF1cbiAgICAgICAgICA6ICduYW1lJztcbiAgICAgICAgaWYgKGVsdC5pbkZvcm0pIHtcbiAgICAgICAgICBzd2l0Y2ggKGVsdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSU1BR0U6XG4gICAgICAgICAgICAgIHRoaXMuZmlsZXNVcGxvYWRbZWx0Lm5hbWVdID0gW107XG4gICAgICAgICAgICAgIHRoaXMudXJsc0ltYWdlW2VsdC5uYW1lXSA9IGRhdGFzW2VsdC5uYW1lXTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IG5ldyBTZXQoW2RhdGFzW2VsdC5uYW1lXV0pLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPOlxuICAgICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPVxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucmVzb3VyY2VOYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICBhcGk6IHJlc3RSZXNvdXJjZS5hcGksXG4gICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgID8gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgOiByZXN0UmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tlbHQubmFtZV0gPSBvZih0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtkYXRhc1tlbHQubmFtZV1dLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWROYW1lXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICAgIGFwaTogcmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgPyBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgOiByZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tlbHQubmFtZV0gPSBbLi4ucmVzcG9uc2VdLnNvcnQoKHgsIHkpID0+XG4gICAgICAgICAgICAgICAgICAgIHhbZmlsdGVyS2V5XVxuICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICA/LmxvY2FsZUNvbXBhcmUoeVtmaWx0ZXJLZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2VsdC5uYW1lXSA9IG9mKHRoaXMub3B0aW9uc1tlbHQubmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQubmFtZV0gPSBuZXcgU2V0KGRhdGFzW2VsdC5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbZGF0YXNbZWx0Lm5hbWVdXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkxJTks6XG4gICAgICAgICAgICAgIGlmIChkYXRhc1tlbHQubmFtZV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbZGF0YXNbZWx0Lm5hbWVdLCBWYWxpZGF0b3IudXJsXSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogWycnLCBWYWxpZGF0b3IudXJsXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5DT0xPUjpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSlNPTjpcbiAgICAgICAgICAgICAgY29uc3QganNvbkZpZWxkcyA9IFtdO1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZyAmJlxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZyAmJlxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzLm1hcCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhc1tlbHQubmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzW2VsdC5uYW1lXVswXSA9PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogSlNPTi5wYXJzZShkYXRhc1tlbHQubmFtZV0pW2ZpZWxkXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgcGFyc2luZyBKU09OIGZvciAke2ZpZWxkfSBpbiAke2VsdC5uYW1lfTogJHtlcnJvcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YXNbZWx0Lm5hbWVdICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uRmllbGRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhc1tlbHQubmFtZV1bZmllbGRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciBhY2Nlc3NpbmcgZmllbGQgJHtmaWVsZH0gaW4gJHtlbHQubmFtZX06ICR7ZXJyb3J9YFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGpzb25GaWVsZHMucHVzaCh7IGxhYmVsOiBmaWVsZCwgdmFsdWU6ICcnIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNbZWx0Lm5hbWVdID0ganNvbkZpZWxkcztcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5NT1JQSF9PTkU6XG4gICAgICAgICAgICAgIHRoaXMubW9ycGhGaWVsZHNbZWx0Lm5hbWVdID0ge1xuICAgICAgICAgICAgICAgIHR5cGU6IGRhdGFzW2VsdC5uYW1lXS50eXBlLFxuICAgICAgICAgICAgICAgIGlkOiBkYXRhc1tlbHQubmFtZV0uaWQsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW251bGxdLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuTUFQOlxuICAgICAgICAgICAgICBjb25zdCBsYXQgPSBlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkO1xuICAgICAgICAgICAgICBjb25zdCBsb25nID0gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGQ7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2xhdF06IGRhdGFzW2xhdF0sXG4gICAgICAgICAgICAgICAgW2xvbmddOiBkYXRhc1tsb25nXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgIH07XG4gICAgICB9LCB7fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29udHJvbHMgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5yZWR1Y2UoKGN1bXVsLCBlbHQpID0+IHtcbiAgICAgICAgdmFyIGZpbHRlcktleSA9IGVsdC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LmZpbHRlcktleXNbMF1cbiAgICAgICAgICA/IGVsdC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LmZpbHRlcktleXNbMF1cbiAgICAgICAgICA6ICduYW1lJztcbiAgICAgICAgaWYgKGVsdC5pbkZvcm0pIHtcbiAgICAgICAgICBzd2l0Y2ggKGVsdC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSU1BR0U6XG4gICAgICAgICAgICAgIHRoaXMuZmlsZXNVcGxvYWRbZWx0Lm5hbWVdID0gW107XG4gICAgICAgICAgICAgIHRoaXMudXJsc0ltYWdlW2VsdC5uYW1lXSA9ICcnO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW251bGxdLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogbmV3IFNldChbXSksXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGZhbHNlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnJlc291cmNlTmFtZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgaWYgKHJlc3RSZXNvdXJjZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgICBhcGk6IHJlc3RSZXNvdXJjZS5hcGksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgID8gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgICA6IHJlc3RSZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tlbHQubmFtZV0gPSBbLi4ucmVzcG9uc2VdLnNvcnQoKHgsIHkpID0+XG4gICAgICAgICAgICAgICAgICAgICAgeFtmaWx0ZXJLZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5W2ZpbHRlcktleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2VsdC5uYW1lXSA9IG9mKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tlbHQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlk6XG4gICAgICAgICAgICAgIGNvbnN0IHJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWROYW1lXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgICAgICAgIGFwaTogcmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgPyBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgOiByZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgIHRoaXMub3B0aW9uc1tlbHQubmFtZV0gPSBbLi4ucmVzcG9uc2VdLnNvcnQoKHgsIHkpID0+XG4gICAgICAgICAgICAgICAgICAgIHhbZmlsdGVyS2V5XVxuICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgICAgICAgICAgICA/LmxvY2FsZUNvbXBhcmUoeVtmaWx0ZXJLZXldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2VsdC5uYW1lXSA9IG9mKHRoaXMub3B0aW9uc1tlbHQubmFtZV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtlbHQubmFtZV0gPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkxJTks6XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogWycnLCBWYWxpZGF0b3IudXJsXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5KU09OOlxuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZWx0ICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZyAmJlxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZyAmJlxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb25GaWVsZHMgPSBbXTtcblxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5qc29uRmllbGRzLmZvckVhY2goXG4gICAgICAgICAgICAgICAgICAoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcy5wdXNoKHsgbGFiZWw6IGZpZWxkLCB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNbZWx0Lm5hbWVdID0ganNvbkZpZWxkcztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaSB1bmUgcHJvcHJpw6l0w6kgcmVxdWlzZSBuJ2VzdCBwYXMgcHLDqXNlbnRlLCByZW52b3llciB1bmUgZXJyZXVyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICAgXCJVbmUgZXJyZXVyIHMnZXN0IHByb2R1aXRlIGxvcnMgZHUgdHJhaXRlbWVudCBkZSBsJ8OpbMOpbWVudC5cIlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtudWxsXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5NQVA6XG4gICAgICAgICAgICAgIGNvbnN0IGxhdCA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGQ7XG4gICAgICAgICAgICAgIGNvbnN0IGxvbmcgPSBlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbbGF0XTogW251bGxdLFxuICAgICAgICAgICAgICAgIFtsb25nXTogW251bGxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJyddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgIH07XG4gICAgICB9LCB7fSk7XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgfVxuXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAodGhpcy5jb250cm9scyk7XG4gIH1cblxuICBnZXQgUkVTVF9GSUVMRF9UWVBFUygpIHtcbiAgICByZXR1cm4gUkVTVF9GSUVMRF9UWVBFUztcbiAgfVxuXG4gIGdldCBQRVJNSVNTSU9OKCkge1xuICAgIHJldHVybiBQRVJNSVNTSU9OO1xuICB9XG5cbiAgLy9UYWdzXG4gIG9uVGFnUmVtb3ZlKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCwgbmFtZSk6IHZvaWQge1xuICAgIGNvbnN0IHRyZWVzQSA9IG5ldyBTZXQodGhpcy5mb3JtLmdldChbbmFtZV0pLnZhbHVlKTtcblxuICAgIHRyZWVzQS5kZWxldGUodGFnVG9SZW1vdmUudGV4dCk7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbbmFtZV06IEFycmF5LmZyb20odHJlZXNBLnZhbHVlcygpKSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uVGFnQWRkKHsgdmFsdWUsIGlucHV0IH06IE5iVGFnSW5wdXRBZGRFdmVudCwgbmFtZSk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgdHJlZXNBID0gbmV3IFNldCh0aGlzLmZvcm0uZ2V0KFtuYW1lXSkudmFsdWUpO1xuICAgICAgdHJlZXNBLmFkZCh2YWx1ZSk7XG4gICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgIFtuYW1lXTogQXJyYXkuZnJvbSh0cmVlc0EudmFsdWVzKCkpLFxuICAgICAgfSk7XG4gICAgfVxuICAgIGlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIC8vIEF1dG9jb21wbGV0ZVxuICBwcml2YXRlIGZpbHRlcih2YWx1ZTogYW55LCBmaWVsZCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIXRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9IGVsc2VcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMuZmlsdGVyS2V5cy5zb21lKFxuICAgICAgICAgICAgKGVsdCkgPT5cbiAgICAgICAgICAgICAgYCR7b3B0aW9uVmFsdWVbZWx0XT8udG9Mb3dlckNhc2UoKX1gLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgIGAke3ZhbHVlLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKHZhbHVlOiBhbnksIGZpZWxkOiBSZXN0RmllbGQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgaWYgKGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE8pXG4gICAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKGZpbHRlclN0cmluZywgZmllbGQpKVxuICAgICAgKTtcbiAgICBlbHNlIGlmIChmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTU9SUEgpXG4gICAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+XG4gICAgICAgICAgdGhpcy5maWx0ZXJNYW55KGZpbHRlclN0cmluZywgZmllbGQsICdtb3JwaENvbmZpZycpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgcmV0dXJuIG9mKHZhbHVlKS5waXBlKFxuICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdGhpcy5maWx0ZXJNYW55KGZpbHRlclN0cmluZywgZmllbGQpKVxuICAgICk7XG4gIH1cblxuICBvblNlbGVjdGlvbkNoYW5nZShldmVudCwgZmllbGQ6IFJlc3RGaWVsZCkge1xuICAgIGNvbnN0IGJWYWwgPSB0aGlzLm9wdGlvbnNbZmllbGQubmFtZV1cbiAgICAgID8gdGhpcy5vcHRpb25zW2ZpZWxkLm5hbWVdLmZpbmQoKGVsdCkgPT4gZWx0Py5pZCA9PT0gZXZlbnQpXG4gICAgICA6IHt9O1xuICAgIHRoaXMuYmVsb25nVG9WYWx1ZVtmaWVsZC5uYW1lXSA9IGJWYWxcbiAgICAgID8gYlZhbFtcbiAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmJlbG9uZ1RvU2Vjb25kRmllbGRMYWJlbFxuICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmJlbG9uZ1RvU2Vjb25kRmllbGRMYWJlbFxuICAgICAgICAgICAgOiAnbmFtZSdcbiAgICAgICAgXVxuICAgICAgOiAnJztcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoZXZlbnQsIGZpZWxkKTtcbiAgfVxuXG4gIGZpbHRlcklucHV0KGV2ZW50LCBmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKFxuICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgZmllbGRcbiAgICApO1xuICB9XG5cbiAgdGVzdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgfVxuICAvLyBFbmQgQXV0b2NvbXBsZXRlXG5cbiAgLy9JbWFnZSBpbnB1dFxuICBvblNlbGVjdChldmVudCwgZmllbGQ6IFJlc3RGaWVsZCkge1xuICAgIHRoaXMuZmlsZXNVcGxvYWRbZmllbGQubmFtZV0gPSBbXTtcbiAgICBjb25zdCBhZGRlZEZpbGVzOiBGaWxlID0gZXZlbnQuYWRkZWRGaWxlcztcblxuICAgIHRoaXMuZmlsZXNVcGxvYWRbZmllbGQubmFtZV0gPSBbYWRkZWRGaWxlc1swXV07XG5cbiAgICBpZiAoZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFKSB7XG4gICAgICB0aGlzLmlzQ3JvcFtmaWVsZC5uYW1lXSA9IHRydWU7XG4gICAgICB0aGlzLmNvbnRyb2xDcm9wZXJbZmllbGQubmFtZV0gPSBhZGRlZEZpbGVzWzBdO1xuICAgIH1cblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogYWRkZWRGaWxlc1swXSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVtb3ZlKGZpZWxkKSB7XG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbnVsbCxcbiAgICB9KTtcbiAgfVxuXG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQsIGZpZWxkKSB7XG4gICAgdGhpcy5jcm9wcGVkSW1hZ2VbZmllbGQubmFtZV0gPSBldmVudC5iYXNlNjQ7XG4gIH1cblxuICBhY3RpdmVDcm9wZXIoZmllbGQpIHtcbiAgICB0aGlzLmlzQ3JvcFtmaWVsZC5uYW1lXSA9IHRydWU7XG4gIH1cblxuICBkZXNhY3RpdmVDcm9wKGZpZWxkKSB7XG4gICAgdGhpcy5pc0Nyb3BbZmllbGQubmFtZV0gPSBmYWxzZTtcbiAgfVxuXG4gIHNhdmVDcm9wZXIoZmllbGQ6IFJlc3RGaWVsZCkge1xuICAgIHRoaXMuaXNDcm9wW2ZpZWxkLm5hbWVdID0gZmFsc2U7XG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFtcbiAgICAgIGJhc2U2NFRvRmlsZSh0aGlzLmNyb3BwZWRJbWFnZVtmaWVsZC5uYW1lXSksXG4gICAgXTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogbmV3IEZpbGUoXG4gICAgICAgIFtiYXNlNjRUb0ZpbGUodGhpcy5jcm9wcGVkSW1hZ2VbZmllbGQubmFtZV0pXSxcbiAgICAgICAgZmllbGQubmFtZVxuICAgICAgKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vYmVsb25nVG9NYW55T3B0aW9uc1xuICBvbkNob29zZShldmVudCwgZmllbGQpIHtcbiAgICBjb25zdCBjZWxsRGF0YTogYW55W10gPSBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdKTtcbiAgICBpZiAoZXZlbnQuaWQpIHtcbiAgICAgIGNvbnN0IHNlYXJjaCA9IGNlbGxEYXRhLmZpbmQoKGVsdDogYW55KSA9PiBlbHQuaWQgPT0gZXZlbnQuaWQpO1xuXG4gICAgICBpZiAoc2VhcmNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBuZXdFbHQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIFtmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkSWROYW1lXTpcbiAgICAgICAgICAgIGV2ZW50LmlkLFxuICAgICAgICAgIFtmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZXNvdXJjZUlkTmFtZV06ICcnLFxuICAgICAgICAgIFtmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5maWx0ZXJLZXlzWzBdXTpcbiAgICAgICAgICAgIGV2ZW50W2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1dLFxuICAgICAgICAgIHNhdmVSZWxhdGVkSWROYW1lOlxuICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZElkTmFtZSxcbiAgICAgICAgICBzYXZlUmVzb3VyY2VJZE5hbWU6XG4gICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZXNvdXJjZUlkTmFtZSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXS5hZGQobmV3RWx0KTtcbiAgICAgICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgICAgIFtmaWVsZC5uYW1lXTogQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXS52YWx1ZXMoKSksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmlucHV0QmVsb25nVG9NYW55Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbiAgfVxuXG4gIG9uVGFnUmVtb3ZlQmVsb25nKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCwgZmllbGQpOiB2b2lkIHtcbiAgICBjb25zdCBjZWxsRGF0YSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbZmllbGQubmFtZV0pO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcblxuICAgIGNlbGxEYXRhLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbHRbXG4gICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICBdICE9IHRhZ1RvUmVtb3ZlLnRleHRcbiAgICAgIClcbiAgICAgICAgc2F2ZS5wdXNoKGVsdCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXSA9IG5ldyBTZXQoc2F2ZSk7XG5cbiAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICBbZmllbGQubmFtZV06IHNhdmUsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGZpbHRlck1hbnkoXG4gICAgdmFsdWU6IGFueSxcbiAgICBmaWVsZDogYW55LFxuICAgIG9wdGlvbnMgPSAnYmVsb25nVG9NYW55T3B0aW9ucydcbiAgKTogc3RyaW5nW10ge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zW2ZpZWxkPy5uYW1lXS5maWx0ZXIoKG9wdGlvblZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWdbb3B0aW9uc10uZmlsdGVyS2V5cy5zb21lKChlbHQpID0+XG4gICAgICAgICAgYCR7b3B0aW9uVmFsdWVbZWx0XS50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoYCR7dmFsdWUudG9Mb3dlckNhc2UoKX1gKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy9FbmQgQmVsb25nVG9NYW55XG5cbiAgb25DcmVhdGUoKSB7XG4gICAgbGV0IGRhdGFzO1xuICAgIHRoaXMuZXJyb3IgPSAnJztcbiAgICBjb25zdCBtc2cgPSB7XG4gICAgICBsYWJlbDogYG1zZy1hZGRpbmctc3VjY2Vzc2AsXG4gICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICB9O1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgZm9ybURhdGEgPSB0aGlzLmZvcm0udmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZm9ybScsIHRoaXMuZm9ybS52YWx1ZSk7XG5cbiAgICBjb25zdCBfYm9keSA9IHRoaXMucmVzb3VyY2UuYWRkQ29uZmlnLmJvZHk7XG5cbiAgICBpZiAodGhpcy5yZXNvdXJjZS5oYXNGaWxlKSB7XG4gICAgICBkYXRhcyA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoOiBSZXN0RmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgIChlbHQpID0+IGVsdC5uYW1lID09IGtleVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChzZWFyY2ggJiYgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc3dpdGNoIChzZWFyY2gudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEU6XG4gICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgYCR7bW9tZW50KGZvcm1EYXRhW2tleV0pLmZvcm1hdCgnWVlZWS1NTS1ERCcpfWBcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSlNPTjpcbiAgICAgICAgICAgICAgbGV0IGpzb25GaWVsZHMgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgIHR5cGVvZiB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSlcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XS5tYXAoKGVsdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGVsdCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICAgICAgICBlbHQgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgICBlbHQubGFiZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgICBlbHQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcyA9IHsgLi4uanNvbkZpZWxkcywgW2VsdC5sYWJlbF06IGVsdC52YWx1ZSB9O1xuICAgICAgICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChgJHtrZXl9WyR7ZWx0LmxhYmVsfV1gLCBlbHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3I6IEludmFsaWQgZWxlbWVudCBpbiBqc29uRWRpdG9yT3B0aW9uc1ske2tleX1dOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICl9YFxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICBgRXJyb3I6IEludmFsaWQgdHlwZSBvZiBqc29uRWRpdG9yT3B0aW9uc1ske2tleX1dOiAke3R5cGVvZiB0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgLmpzb25FZGl0b3JPcHRpb25zW2tleV19YFxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3I6IE1pc3NpbmcganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XWApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgICAgICAgIGlmIChzZWFyY2gubWV0YURhdGE/Lm51bWJlcikge1xuICAgICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCAxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgZGF0YXMuYXBwZW5kKGtleSwgMCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSU1BR0U6XG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBudWxsKSBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuUERGOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCkgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEU6XG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBudWxsKSBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAvLyBpZiAoc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HIHx8IHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUiB8fCBzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5QQVNTV09SRClcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09ICcnICYmIGZvcm1EYXRhW2tleV0gIT09IG51bGwpXG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhfYm9keSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgX2JvZHlba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBtYXAgdHlwZTtcbiAgICAgIGNvbnN0IG1hcEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFxuICAgICAgKTtcbiAgICAgIG1hcEZpZWxkLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdLFxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdXG4gICAgICAgICk7XG4gICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICBbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdLFxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYiA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoOiBSZXN0RmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgIChlbHQpID0+IGVsdC5uYW1lID09IGtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldICE9PSBudWxsICYmXG4gICAgICAgICAgICBmb3JtRGF0YVtrZXldICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGZvcm1EYXRhW2tleV0gIT09ICcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB0YWJba2V5XSA9IGZvcm1EYXRhW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIG1hcCB0eXBlO1xuICAgICAgY29uc3QgbWFwRmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTUFQXG4gICAgICApO1xuICAgICAgbWFwRmllbGQuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIHRhYltlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXSA9XG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF07XG4gICAgICAgIHRhYltlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF0gPVxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXTtcbiAgICAgIH0pO1xuXG4gICAgICBkYXRhcyA9IHsgLi4udGFiLCAuLi5fYm9keSB9O1xuICAgIH1cblxuICAgIGNvbnN0IHNhdmVCZWxvbmdUb21hbnkgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlkpIHtcbiAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5wdXNoKHtcbiAgICAgICAgICByZXNvdXJjZXM6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICBwaXZvdDogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnBpdm90TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnNlcnZpY2VSZXN0LmFkZFJlc291cmNlcyh0aGlzLnJlc291cmNlLmFkZENvbmZpZywgZGF0YXMpLnN1YnNjcmliZShcbiAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPVxuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShlbGVtZW50LnBpdm90KTtcbiAgICAgICAgICAgIGNvbnN0IHByb21zID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50LnJlc291cmNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucmVzb3VyY2VzW2luZGV4XTtcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV06IGl0ZW1baXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV0sXG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZXNvdXJjZUlkTmFtZSddXTogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgcHJvbXMucHVzaChcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgICAuYWRkUmVzb3VyY2VzKHJlc3RSZXNvdXJjZS5hZGRDb25maWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3NUb2FzdChtc2cpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgICAgICAgICByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICAgICAgcmVzcG9uc2UuaWQsXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHRoaXMuZXJyb3IgPSB0aGlzLnJlc3RFcnJvclNlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25FZGl0KCkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIGxhYmVsOiBgbXNnLXVwZGF0aW5nLXN1Y2Nlc3NgLFxuICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGxldCBkYXRhcztcbiAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICBjb25zdCBfYm9keSA9IHRoaXMucmVzb3VyY2UuZWRpdENvbmZpZy5ib2R5O1xuICAgIGlmICh0aGlzLnJlc291cmNlLmhhc0ZpbGUpIHtcbiAgICAgIGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2g6IFJlc3RGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgKGVsdCkgPT4gZWx0Lm5hbWUgPT0ga2V5XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlYXJjaCAmJiBmb3JtRGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzd2l0Y2ggKHNlYXJjaC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuREFURTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICBgJHttb21lbnQoZm9ybURhdGFba2V5XSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9YFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSlNPTjpcbiAgICAgICAgICAgICAgbGV0IGpzb25GaWVsZHMgPSB7fTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldLm1hcCgoZWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgZWx0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgICAgIGVsdCAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgIGVsdC5sYWJlbCAmJlxuICAgICAgICAgICAgICAgICAgICAgIGVsdC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICBqc29uRmllbGRzID0geyAuLi5qc29uRmllbGRzLCBbZWx0LmxhYmVsXTogZWx0LnZhbHVlIH07XG4gICAgICAgICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGAke2tleX1bJHtlbHQubGFiZWx9XWAsIGVsdC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGVsdC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGAke2tleX1bJHtlbHQubGFiZWx9XWAsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvcjogSW52YWxpZCBlbGVtZW50IGluIGpzb25FZGl0b3JPcHRpb25zWyR7a2V5fV06ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVsdFxuICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBFcnJvcjogSW52YWxpZCB0eXBlIG9mIGpzb25FZGl0b3JPcHRpb25zWyR7a2V5fV06ICR7dHlwZW9mIHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAuanNvbkVkaXRvck9wdGlvbnNba2V5XX1gXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogTWlzc2luZyBqc29uRWRpdG9yT3B0aW9uc1ske2tleX1dYCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgaWYgKHNlYXJjaC5tZXRhRGF0YT8ubnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBkYXRhcy5hcHBlbmQoa2V5LCAwKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5JTUFHRTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwgJiYgdGhpcy5pc0ZpbGUoZm9ybURhdGFba2V5XSkpXG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLlBERjpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwgJiYgdGhpcy5pc0ZpbGUoZm9ybURhdGFba2V5XSkpXG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEU6XG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSBudWxsICYmIHRoaXMuaXNGaWxlKGZvcm1EYXRhW2tleV0pKVxuICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgIC8vIGlmIChzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5TVFJJTkcgfHwgc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSIHx8IHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLlBBU1NXT1JEKVxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gJycpIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmtleXMoX2JvZHkpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGRhdGFzLmFwcGVuZChrZXksIF9ib2R5W2tleV0pO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgbWFwIHR5cGU7XG4gICAgICBjb25zdCBtYXBGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5NQVBcbiAgICAgICk7XG4gICAgICBtYXBGaWVsZC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgIFtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXSxcbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXVxuICAgICAgICApO1xuICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXSxcbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWIgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaDogUmVzdEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZChcbiAgICAgICAgICAoZWx0KSA9PiBlbHQubmFtZSA9PSBrZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHNlYXJjaCAmJlxuICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCAmJlxuICAgICAgICAgIGZvcm1EYXRhW2tleV0gIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgIGZvcm1EYXRhW2tleV0gIT09ICcnXG4gICAgICAgICkge1xuICAgICAgICAgIHRhYltrZXldID0gZm9ybURhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBtYXAgdHlwZTtcbiAgICAgIGNvbnN0IG1hcEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFxuICAgICAgKTtcbiAgICAgIG1hcEZpZWxkLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICB0YWJbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF0gPVxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdO1xuICAgICAgICB0YWJbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdID1cbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF07XG4gICAgICB9KTtcbiAgICAgIGRhdGFzID0geyAuLi50YWIsIC4uLl9ib2R5IH07XG4gICAgfVxuICAgIGNvbnN0IHNhdmVCZWxvbmdUb21hbnkgPSBbXTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKGVsdC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTlkpIHtcbiAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5wdXNoKHtcbiAgICAgICAgICByZXNvdXJjZXM6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICBwaXZvdDogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnBpdm90TmFtZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgLmVkaXRSZXNvdXJjZXMoXG4gICAgICAgIHRoaXMucmVzb3VyY2UuZWRpdENvbmZpZyxcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5oYXNGaWxlLFxuICAgICAgICBkYXRhcyxcbiAgICAgICAgdGhpcy5mb3JtU3RhdGUuaWRFbnRpdHlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPVxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKGVsZW1lbnQucGl2b3QpO1xuICAgICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtZW50LnJlc291cmNlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZWxlbWVudC5yZXNvdXJjZXNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV06IGl0ZW1baXRlbVsnc2F2ZVJlbGF0ZWRJZE5hbWUnXV0sXG4gICAgICAgICAgICAgICAgICBbaXRlbVsnc2F2ZVJlc291cmNlSWROYW1lJ11dOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcHJvbXMucHVzaChcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgUHJvbWlzZS5hbGwocHJvbXMpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSBzYXZlQmVsb25nVG9tYW55Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtU3RhdGUuaWRFbnRpdHksXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3NUb2FzdChtc2cpO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICAgICAgICB0aGlzLmZvcm1TdGF0ZS5pZEVudGl0eSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLmVycm9yID0gdGhpcy5yZXN0RXJyb3JTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIGlzRmlsZSh2YXJpYWJsZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT09ICdvYmplY3QnICYmIHZhcmlhYmxlIGluc3RhbmNlb2YgRmlsZTtcbiAgfVxuXG4gIGRvd25sb2FkVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW5tczogYW55ID0ge307XG4gICAgY29uc3Qgc2hlZXRIZWFkZXIgPSB7fTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICB9O1xuICAgICAgfSk7XG5cbiAgICBPYmplY3QuZW50cmllcyhjb2x1bm1zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0sIGluZGV4KSA9PiB7XG4gICAgICBzaGVldEhlYWRlclt0aGlzLmFscGhhYmVsdFtpbmRleF1dID0ga2V5O1xuICAgIH0pO1xuICAgIGNvbnN0IGVkYXRhOiBBcnJheTxhbnk+ID0gW107XG4gICAgY29uc3QgdWR0OiBhbnkgPSB7XG4gICAgICBkYXRhOiBbXG4gICAgICAgIHNoZWV0SGVhZGVyLCAvLyB0YWJsZSBoZWFkZXJcbiAgICAgIF0sXG4gICAgICBza2lwSGVhZGVyOiB0cnVlLFxuICAgIH07XG4gICAgZWRhdGEucHVzaCh1ZHQpO1xuICAgIHRoaXMuZXhwb3J0U2VydmljZS5leHBvcnRUb0V4Y2VsKGVkYXRhLCAncmVzdF9maWxlX3RlbXBsYXRlX2RhdGEnKTtcbiAgfVxuXG4gIGltcG9ydERhdGEoKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5kaWFsb2dTZXJ2aWNlLm9wZW4oVXBsb2FkRmlsZUNvbXBvbmVudCwge30pO1xuICAgIGRpYWxvZy5vbkNsb3NlLnN1YnNjcmliZSgocmVzcCkgPT4ge1xuICAgICAgaWYgKHJlc3ApIHRoaXMuc291cmNlID0gbmV3IExvY2FsRGF0YVNvdXJjZShyZXNwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlTWF0VGFibGVDb2x1bW5zKCkge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzb3VyY2UuZmllbGRzKTtcblxuICAgIHRoaXMucmVzb3VyY2UuZmllbGRzXG4gICAgICAuZmlsdGVyKChpdGVtKSA9PiB0aGlzLnJlc291cmNlLmxpc3RDb25maWcuY29sdW1ucy5pbmNsdWRlcyhpdGVtLm5hbWUpKVxuICAgICAgLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBjb2x1bm1zW2VsdC5uYW1lXSA9IHtcbiAgICAgICAgICB0aXRsZTogZWx0LmxhYmVsLFxuICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgIGZpbHRlcjogZmFsc2UsXG4gICAgICAgICAgYWRkYWJsZTogdHJ1ZSxcbiAgICAgICAgICB2YWx1ZVByZXBhcmVGdW5jdGlvbjogKGNlbGwsIHJvdykgPT4gKHtcbiAgICAgICAgICAgIHJlc3RGaWVsZDogZWx0LFxuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlZGl0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZW5kZXJDb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIHJldHVybiBjb2x1bm1zO1xuICB9XG5cbiAgb25TdW1iaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybVN0YXRlLmlzQWRkKSB0aGlzLm9uQ3JlYXRlKCk7XG4gICAgZWxzZSB0aGlzLm9uRWRpdCgpO1xuICB9XG5cbiAgYWRkSlNPTkZpZWxkKGV2ZW50KSB7XG4gICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tldmVudC5uYW1lXS5wdXNoKHtcbiAgICAgIGxhYmVsOiAnJyxcbiAgICAgIHZhbHVlOiAnJyxcbiAgICAgIGFkZDogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbW92ZUpTT05GaWVsZChldmVudCwgaW5kZXgpIHtcbiAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2V2ZW50Lm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICBvbk1vcnBoU2VsZWN0RmllbGQoZXZlbnQsIGZpZWxkKSB7XG4gICAgY29uc3QgcmVzc291cmNlcyA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKGV2ZW50KTtcbiAgICBjb25zdCBmaWVsZENvbmZpZyA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoKGVsdCkgPT4gZWx0Lm5hbWUgPT0gZmllbGQpO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgIGFwaTogcmVzc291cmNlcy5hcGksXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiBmaWVsZENvbmZpZy5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcucXVlcnlQYXJhbXNcbiAgICAgICAgICA/IGZpZWxkQ29uZmlnLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy5xdWVyeVBhcmFtc1xuICAgICAgICAgIDoge30sXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm9wdGlvbnNbZmllbGRdID0gcmVzcG9uc2U7XG4gICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZmllbGRdID0gb2YodGhpcy5vcHRpb25zW2ZpZWxkXSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIG9uTGF0Q2hhbmdlKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICBjb25zdCBmaWVsZExhdCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoKGVsdCkgPT4gZWx0Lm5hbWUgPT0gZmllbGROYW1lKTtcbiAgICBjb25zdCBuYW1lID0gZmllbGRMYXQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uTG5nQ2hhbmdlKHZhbHVlLCBmaWVsZE5hbWUpIHtcbiAgICBjb25zdCBmaWVsZExhdCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoKGVsdCkgPT4gZWx0Lm5hbWUgPT0gZmllbGROYW1lKTtcbiAgICBjb25zdCBuYW1lID0gZmllbGRMYXQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZDtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cbn1cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJyZXNvdXJjZS5wZXJtaXNzaW9ucy5sZW5ndGggPD0gMFwiPlxuICA8bmItY2FyZD5cbiAgICA8bmItY2FyZC1oZWFkZXIgKm5nSWY9XCJmb3JtU3RhdGUub25SZWFkeSAmJiAhZm9ybVN0YXRlLmlzQWRkXCJcbiAgICAgID57eyByZXNvdXJjZS5lZGl0Q29uZmlnLnRpdGxlIH19XG4gICAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICAgIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5ICYmIGZvcm1TdGF0ZS5pc0FkZFwiXG4gICAgICA+e3sgcmVzb3VyY2UuYWRkQ29uZmlnLnRpdGxlIH19XG4gICAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICAgIDxuYi1jYXJkLWJvZHk+XG4gICAgICA8bmItdGFic2V0IGZ1bGxXaWR0aD5cbiAgICAgICAgPG5iLXRhYiB0YWJUaXRsZT1cIkFqb3V0IHNpbXBsZVwiPlxuICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwiZm9ybVwiIGNsYXNzPVwicm93XCIgKm5nSWY9XCJmb3JtU3RhdGUub25SZWFkeVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICBsZXQgZmllbGQgb2YgcmVzb3VyY2UuZmllbGRzO1xuICAgICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlGbjtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiY29sLTEyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmluRm9ybVwiPlxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBzdHJpbmcgIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSEFTX09ORVxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHRleHQgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBBU1NXT1JEXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zPy5pc05lZWRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5jb25maXJtTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmNvbmZpcm1MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IChmaWVsZC5sYWJlbCArIFwiX2NvbmZpcm1hdGlvblwiIHwgdGl0bGVjYXNlKVxuICAgICAgICAgICAgICAgICAgICAgIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWwgKyAnX2NvbmZpcm1hdGlvbidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5jb25maXJtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmZpcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubmFtZSArICdfY29uZmlybWF0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBudW1iZXIgIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZGF0ZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW25iRGF0ZXBpY2tlcl09XCJmb3JtcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxuYi1kYXRlcGlja2VyICNmb3JtcGlja2VyPjwvbmItZGF0ZXBpY2tlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBkYXRlVGltZSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVUSU1FXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW25iRGF0ZXBpY2tlcl09XCJkYXRlVGltZVBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPG5iLWRhdGUtdGltZXBpY2tlclxuICAgICAgICAgICAgICAgICAgICB3aXRoU2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAjZGF0ZVRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICAgID48L25iLWRhdGUtdGltZXBpY2tlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSB0aW1lIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVElNRVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0d2VsdmVIb3Vyc0Zvcm1hdFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPG5iLXRpbWVwaWNrZXIgI3RpbWVwaWNrZXI+PC9uYi10aW1lcGlja2VyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGVudW0gLS0+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5lbnVtT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPnt7IG9wdGlvbi5sYWJlbCB9fTwvbmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGJvb2xlYW4gLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8IS0tIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPiAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC41ZW1cIj57e1xuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlXG4gICAgICAgICAgICAgICAgICAgIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBbbmFtZV09XCJmaWVsZC5uYW1lXCIgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxuYi10b2dnbGUgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCI+PC9uYi10b2dnbGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBmaWxlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEUgfHxcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBERlxuICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IGRhc2hlZDsgZGlzcGxheTogZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWRyb3B6b25lIGZvcm0tY29udHJvbC1jdXN0b20gcm91bmRlZCBtLTJcIlxuICAgICAgICAgICAgICAgICAgICBuZ3gtZHJvcHpvbmVcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdICE9ICcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJ1cmxzSW1hZ2VbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWltZy1kcm9wem9uZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjbG91ZC11cGxvYWQtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMmVtOyBjb2xvcjogI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGZpbGVzIGhlcmUgb3IgY2xpY2sgdG8gdXBsb2FkXG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgIG5nUHJvamVjdEFzPVwibmd4LWRyb3B6b25lLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmIG9mIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZmlsZV09XCJmXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcmVtb3ZhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgZi5uYW1lIH19ICh7eyBmLnR5cGUgfX0pPC9uZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBkYXNoZWQ7IGRpc3BsYXk6IGZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1kcm9wem9uZSBmb3JtLWNvbnRyb2wtY3VzdG9tIHJvdW5kZWQgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgbmd4LWRyb3B6b25lXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybHNJbWFnZVtmaWVsZC5uYW1lXSAhPSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwidXJsc0ltYWdlW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1pbWctZHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybHNJbWFnZVtmaWVsZC5uYW1lXSA9PSAnJ1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3VkLXVwbG9hZC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAyZW07IGNvbG9yOiAjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgZmlsZXMgaGVyZSBvciBjbGljayB0byB1cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgbmdQcm9qZWN0QXM9XCJuZ3gtZHJvcHpvbmUtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsZXNVcGxvYWRbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIFtmaWxlXT1cImZcIlxuICAgICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICA8IS0tIDwvbmctY29udGFpbmVyPiAtLT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICFpc0Nyb3BbZmllbGQubmFtZV0gJiYgY29udHJvbENyb3BlcltmaWVsZC5uYW1lXSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3RpdmVDcm9wZXIoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgQ1JPUFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0Nyb3BbZmllbGQubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltYWdlLWNyb3BwZXJcbiAgICAgICAgICAgICAgICAgICAgICBbaW1hZ2VGaWxlXT1cImNvbnRyb2xDcm9wZXJbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIFttYWludGFpbkFzcGVjdFJhdGlvXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFthc3BlY3RSYXRpb109XCI0IC8gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwicG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAoaW1hZ2VDcm9wcGVkKT1cImltYWdlQ3JvcHBlZCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID48L2ltYWdlLWNyb3BwZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVDcm9wZXIoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFNBVkUgQ0hBTkdFXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZXNhY3RpdmVDcm9wKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSA8aW1nIFtzcmNdPVwiY3JvcHBlZEltYWdlXCIgLz4gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgaGFzTWFueSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWVwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdFxuICAgICAgICAgICAgICAgICAgICAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0cmVlIG9mIGZvcm0uZ2V0KFtmaWVsZC5uYW1lXSkudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cInRyZWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAodGFnQWRkKT1cIm9uVGFnQWRkKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBiZWxvbmdfdG8gLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgI2F1dG9JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJhdXRvQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAhZmllbGQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5zZWNvbmRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtM1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJlbG9uZ1RvVmFsdWVbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJlbG9uZ1RvVmFsdWVbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImkgKyAxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgI2F1dG9Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbmItb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgYmVsb25nX3RvX21hbnkgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8bmItdGFnLWxpc3QgKHRhZ1JlbW92ZSk9XCJvblRhZ1JlbW92ZUJlbG9uZygkZXZlbnQsIGZpZWxkKVwiPlxuICAgICAgICAgICAgICAgICAgICA8bmItdGFnXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgICAgPjwvbmItdGFnPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmJUYWdJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICNhdXRvQmVsb25nVG9NYW55XG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImJlbG9uZ1RvRmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJJbnB1dCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cblxuICAgICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAjYmVsb25nVG9GaWVsZFxuICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25DaG9vc2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvbmItYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGNvbG9yICAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0NXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBsaW5rIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2XG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBmb3JtLmdldChbZmllbGQubmFtZV0pLmhhc0Vycm9yKCdpbnZhbGlkVXJsJykgJiZcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS50b3VjaGVkXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWVycm9yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBcInJlc3QtYWRkLmludmFsaWQtbGlua1wiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIEpTT04gLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5KU09OXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmlzT3BlblwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEpTT05GaWVsZChmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInBsdXNcIiBwYWNrPVwiZmFzXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSBvZiBqc29uRWRpdG9yT3B0aW9uc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgW2lkXT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5hZGQ7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiaXRlbS5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdNb2RlbE9wdGlvbnNdPVwieyBzdGFuZGFsb25lOiB0cnVlIH1cIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKm5nSWY9XCJpdGVtLmFkZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlSlNPTkZpZWxkKGZpZWxkLCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJ0cmFzaC1hbHRcIiBwYWNrPVwiZmFzXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIE1PUlBIIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTU9SUEhcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5SZXNzb3VyY2VzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3JwaFNlbGVjdEZpZWxkKCRldmVudCwgZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L25iLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAjYXV0b0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImF1dG9Db21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAjYXV0b0NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSB8IGFzeW5jXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5tb3JwaENvbmZpZz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5tb3JwaENvbmZpZz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgR09PR0xFTUFQIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTUFQXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxuZ3gtZ21hcHNcbiAgICAgICAgICAgICAgICAgICAgKGxhdENoYW5nZSk9XCJvbkxhdENoYW5nZSgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgKGxuZ0NoYW5nZSk9XCJvbkxuZ0NoYW5nZSgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgW2dvb2dsZU1hcEtleV09XCJnb29nbGVNYXBLZXlzXCJcbiAgICAgICAgICAgICAgICAgID48L25neC1nbWFwcz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5ub3RlICE9ICcnXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgbWwtMjAgbXQtM1wiPnt7IGZpZWxkLm5vdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyB0ZXh0LWNlbnRlciBteS0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiIFtpbm5lckhUTUxdPVwiZXJyb3JcIj48L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYi10YWI+XG4gICAgICAgIDxuYi10YWIgdGFiVGl0bGU9XCJJbXBvcnRhdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgIFtuYkNvbnRleHRNZW51XT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dC1hZGRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3sgXCJyZXN0LWFkZC5pbXBvcnRcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxuZzItc21hcnQtdGFibGUgW3NldHRpbmdzXT1cInNldHRpbmdzXCIgW3NvdXJjZV09XCJzb3VyY2VcIj5cbiAgICAgICAgICAgIDwvbmcyLXNtYXJ0LXRhYmxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25iLXRhYj5cbiAgICAgIDwvbmItdGFic2V0PlxuICAgIDwvbmItY2FyZC1ib2R5PlxuXG4gICAgPG5iLWNhcmQtZm9vdGVyPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtcm93XCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgIChjbGljayk9XCJvblN1bWJpdCgpXCJcbiAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwibG9hZGluZ1wiXG4gICAgICAgID5cbiAgICAgICAgICA+XG4gICAgICAgICAgPCEtLSBbZGlzYWJsZWRdPVwibG9hZGluZ1wiIC0tPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAqbmdJZj1cImxvYWRpbmdcIlxuICAgICAgICAgICAgY2xhc3M9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSBtci0yXCJcbiAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgIHt7IGZvcm1TdGF0ZS5idG5MYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmItY2FyZC1mb290ZXI+XG4gIDwvbmItY2FyZD5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwicmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMFwiPlxuICA8ZGl2ICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJwZXJtaXNzaW9uc1wiPlxuICAgIDxuYi1jYXJkPlxuICAgICAgPG5iLWNhcmQtaGVhZGVyICpuZ0lmPVwiZm9ybVN0YXRlLm9uUmVhZHkgJiYgIWZvcm1TdGF0ZS5pc0FkZFwiXG4gICAgICAgID57eyByZXNvdXJjZS5lZGl0Q29uZmlnLnRpdGxlIH19XG4gICAgICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gICAgICA8bmItY2FyZC1oZWFkZXIgKm5nSWY9XCJmb3JtU3RhdGUub25SZWFkeSAmJiBmb3JtU3RhdGUuaXNBZGRcIlxuICAgICAgICA+e3sgcmVzb3VyY2UuYWRkQ29uZmlnLnRpdGxlIH19XG4gICAgICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gICAgICA8bmItY2FyZC1ib2R5PlxuICAgICAgICA8bmItdGFic2V0IGZ1bGxXaWR0aD5cbiAgICAgICAgICA8bmItdGFiIHRhYlRpdGxlPVwiQWpvdXQgc2ltcGxlXCI+XG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cImZvcm1cIiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiZm9ybVN0YXRlLm9uUmVhZHlcIj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkIG9mIHJlc291cmNlLmZpZWxkcztcbiAgICAgICAgICAgICAgICAgIHRyYWNrQnk6IHRyYWNrQnlGbjtcbiAgICAgICAgICAgICAgICAgIGxldCBpID0gaW5kZXhcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sLTEyXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5pbkZvcm1cIj5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBzdHJpbmcgIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HIHx8XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19PTkVcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgdGV4dCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRFWFRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuUEFTU1dPUkRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPy5pc05lZWRDb25maXJtXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5jb25maXJtTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5jb25maXJtTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IChmaWVsZC5sYWJlbCArIFwiX2NvbmZpcm1hdGlvblwiIHwgdGl0bGVjYXNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbCArICdfY29uZmlybWF0aW9uJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmNvbmZpcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmZpcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5uYW1lICsgJ19jb25maXJtYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgbnVtYmVyICAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk5VTUJFUlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZGF0ZSAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgW25iRGF0ZXBpY2tlcl09XCJmb3JtcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bmItZGF0ZXBpY2tlciAjZm9ybXBpY2tlcj48L25iLWRhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGRhdGVUaW1lIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVRJTUVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgW25iRGF0ZXBpY2tlcl09XCJkYXRlVGltZVBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWRhdGUtdGltZXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgIHdpdGhTZWNvbmRzXG4gICAgICAgICAgICAgICAgICAgICAgI2RhdGVUaW1lUGlja2VyXG4gICAgICAgICAgICAgICAgICAgID48L25iLWRhdGUtdGltZXBpY2tlcj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgdGltZSAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRJTUVcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR3ZWx2ZUhvdXJzRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlcj48L25iLXRpbWVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGVudW0gLS0+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5FTlVNXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiBvZiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuZW51bU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGJvb2xlYW4gLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD4gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjVlbVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZVxuICAgICAgICAgICAgICAgICAgICAgIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIFtuYW1lXT1cImZpZWxkLm5hbWVcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItdG9nZ2xlIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiPjwvbmItdG9nZ2xlPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZmlsZSAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEUgfHxcbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuUERGXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IGRhc2hlZDsgZGlzcGxheTogZmxleFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tZHJvcHpvbmUgZm9ybS1jb250cm9sLWN1c3RvbSByb3VuZGVkIG0tMlwiXG4gICAgICAgICAgICAgICAgICAgICAgbmd4LWRyb3B6b25lXG4gICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxzSW1hZ2VbZmllbGQubmFtZV0gIT0gJycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDBcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzcmNdPVwidXJsc0ltYWdlW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWltZy1kcm9wem9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjbG91ZC11cGxvYWQtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAyZW07IGNvbG9yOiAjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGZpbGVzIGhlcmUgb3IgY2xpY2sgdG8gdXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nUHJvamVjdEFzPVwibmd4LWRyb3B6b25lLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsZXNVcGxvYWRbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmVtb3ZhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57eyBmLm5hbWUgfX0gKHt7IGYudHlwZSB9fSk8L25neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBkYXNoZWQ7IGRpc3BsYXk6IGZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWRyb3B6b25lIGZvcm0tY29udHJvbC1jdXN0b20gcm91bmRlZCBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIG5neC1kcm9wem9uZVxuICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdICE9ICcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInVybHNJbWFnZVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1pbWctZHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxzSW1hZ2VbZmllbGQubmFtZV0gPT0gJydcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3VkLXVwbG9hZC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDJlbTsgY29sb3I6ICNjY2NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgZmlsZXMgaGVyZSBvciBjbGljayB0byB1cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgbmdQcm9qZWN0QXM9XCJuZ3gtZHJvcHpvbmUtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZmlsZV09XCJmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZShmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1pbWFnZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPC9uZy1jb250YWluZXI+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgIWlzQ3JvcFtmaWVsZC5uYW1lXSAmJiBjb250cm9sQ3JvcGVyW2ZpZWxkLm5hbWVdICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3RpdmVDcm9wZXIoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENST1BcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ3JvcFtmaWVsZC5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWFnZS1jcm9wcGVyXG4gICAgICAgICAgICAgICAgICAgICAgICBbaW1hZ2VGaWxlXT1cImNvbnRyb2xDcm9wZXJbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW21haW50YWluQXNwZWN0UmF0aW9dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXNwZWN0UmF0aW9dPVwiNCAvIDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwicG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbWFnZUNyb3BwZWQpPVwiaW1hZ2VDcm9wcGVkKCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pbWFnZS1jcm9wcGVyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNhdmVDcm9wZXIoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBTQVZFIENIQU5HRVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJkYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlc2FjdGl2ZUNyb3AoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBDYW5jZWxcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW1nIFtzcmNdPVwiY3JvcHBlZEltYWdlXCIgLz4gLS0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGhhc01hbnkgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bmItdGFnLWxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJ0cmVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJUYWdJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRhZ0FkZCk9XCJvblRhZ0FkZCgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBiZWxvbmdfdG8gLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2F1dG9JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImF1dG9Db21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJJbnB1dCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIWZpZWxkLm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uc2Vjb25kRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJWYWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWxvbmdUb1ZhbHVlW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGJlbG9uZ1RvVmFsdWVbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImkgKyAxMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICNhdXRvQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gfCBhc3luY1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGJlbG9uZ190b19tYW55IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPX01BTllcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0ICh0YWdSZW1vdmUpPVwib25UYWdSZW1vdmVCZWxvbmcoJGV2ZW50LCBmaWVsZClcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItdGFnXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBiZWxvbmdUb01hbnlbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWVbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICNhdXRvQmVsb25nVG9NYW55XG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJiZWxvbmdUb0ZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJJbnB1dCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbmItdGFnLWxpc3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uQ2hvb3NlKCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGNvbG9yICAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQ1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGxpbmsgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5MSU5LXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldChbZmllbGQubmFtZV0pLmhhc0Vycm9yKCdpbnZhbGlkVXJsJykgJiZcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtLmdldChbZmllbGQubmFtZV0pLnRvdWNoZWRcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LWVycm9yXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3sgXCJyZXN0LWFkZC5pbnZhbGlkLWxpbmtcIiB8IHRyYW5zbGF0ZSB9fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBKU09OIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSlNPTlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuanNvbkNvbmZpZy5pc09wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFkZEpTT05GaWVsZChmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJwbHVzXCIgcGFjaz1cImZhc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm93IG1iLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gb2YganNvbkVkaXRvck9wdGlvbnNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgW2lkXT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLmFkZDsgZWxzZSBlbHNlQmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2Vsc2VCbG9jaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIml0ZW0ubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiICpuZ0lmPVwiaXRlbS5hZGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdob3N0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVKU09ORmllbGQoZmllbGQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uIGljb249XCJ0cmFzaC1hbHRcIiBwYWNrPVwiZmFzXCI+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBNT1JQSCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk1PUlBIXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj5SZXNzb3VyY2VzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vcnBoU2VsZWN0RmllbGQoJGV2ZW50LCBmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPnt7IG9wdGlvbi5sYWJlbCB9fTwvbmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2F1dG9JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImF1dG9Db21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJJbnB1dCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAjYXV0b0NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhc3luY1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5tb3JwaENvbmZpZz8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLm1vcnBoQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmItYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgR09PR0xFTUFQIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTUFQXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxuZ3gtZ21hcHNcbiAgICAgICAgICAgICAgICAgICAgICAobGF0Q2hhbmdlKT1cIm9uTGF0Q2hhbmdlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIChsbmdDaGFuZ2UpPVwib25MbmdDaGFuZ2UoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2dvb2dsZU1hcEtleV09XCJnb29nbGVNYXBLZXlzXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvbmd4LWdtYXBzPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQubm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtbXV0ZWQgbWwtMjAgbXQtM1wiPnt7IGZpZWxkLm5vdGUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9uYi10YWI+XG4gICAgICAgICAgPG5iLXRhYiB0YWJUaXRsZT1cIkltcG9ydGF0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICBuYkNvbnRleHRNZW51VGFnPVwibXktY29udGV4dC1hZGRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IFwicmVzdC1hZGQuaW1wb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG5nMi1zbWFydC10YWJsZSBbc2V0dGluZ3NdPVwic2V0dGluZ3NcIiBbc291cmNlXT1cInNvdXJjZVwiPlxuICAgICAgICAgICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmItdGFiPlxuICAgICAgICA8L25iLXRhYnNldD5cbiAgICAgIDwvbmItY2FyZC1ib2R5PlxuXG4gICAgICA8bmItY2FyZC1mb290ZXI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLXJvd1wiICpuZ0lmPVwiIWZvcm1TdGF0ZS5pc0FkZFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwib25FZGl0KClcIlxuICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAqbmd4UGVybWlzc2lvbnNPbmx5PVwiUEVSTUlTU0lPTi5VUERBVEVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICpuZ0lmPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAge3sgZm9ybVN0YXRlLmJ0bkxhYmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1yb3dcIiAqbmdJZj1cImZvcm1TdGF0ZS5pc0FkZFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAoY2xpY2spPVwib25DcmVhdGUoKVwiXG4gICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICpuZ3hQZXJtaXNzaW9uc09ubHk9XCJQRVJNSVNTSU9OLkNSRUFURVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgKm5nSWY9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSBtci0yXCJcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICB7eyBmb3JtU3RhdGUuYnRuTGFiZWwgfX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25iLWNhcmQtZm9vdGVyPlxuICAgIDwvbmItY2FyZD5cbiAgPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cbiJdfQ==