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
import * as i9 from "@angular/common";
import * as i10 from "ng2-smart-table";
import * as i11 from "../../directives/attribute.directive";
import * as i12 from "ngx-dropzone";
import * as i13 from "ngx-image-cropper";
import * as i14 from "../components/gmaps/gmaps.component";
import * as i15 from "@ngx-translate/core";
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 21);
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
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
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
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 23);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 24);
    i0.ɵɵelement(5, "nb-datepicker", null, 25);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-date-timepicker", 27, 28);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 29);
    i0.ɵɵelement(5, "nb-timepicker", null, 30);
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
    i0.ɵɵelementStart(0, "nb-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r43 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r43.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r43.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 31);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 32);
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
    const field_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r7.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r46 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("src", ctx_r46.urlsImage[field_r7.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 42);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r56); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r54 = i0.ɵɵnextContext(3); return ctx_r54.onSelect($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 39);
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
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r58 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes)("src", ctx_r58.urlsImage[field_r7.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r67); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r65 = i0.ɵɵnextContext(3); return ctx_r65.onRemove(field_r7); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r64 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r64)("removable", true);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r70 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r70); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.activeCroper(field_r7); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r73 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 45);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r71 = i0.ɵɵnextContext(3); return ctx_r71.imageCropped($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r73); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r74 = i0.ɵɵnextContext(3); return ctx_r74.saveCroper(field_r7); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 46);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r81); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r79 = i0.ɵɵnextContext(3); return ctx_r79.onSelect($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 43);
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
    i0.ɵɵelement(0, "nb-tag", 50);
} if (rf & 2) {
    const tree_r84 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r84);
} }
const _c2 = function (a0) { return [a0]; };
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 47);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r87); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r85 = i0.ɵɵnextContext(3); return ctx_r85.onTagRemove($event, field_r7.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 48);
    i0.ɵɵelementStart(6, "input", 49);
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
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "input", 57);
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
    i0.ɵɵelementStart(0, "nb-option", 58);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "input", 51, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r100); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r98 = i0.ɵɵnextContext(3); return ctx_r98.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r100); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r101 = i0.ɵɵnextContext(3); return ctx_r101.onSelectionChange($event, field_r7); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 56);
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
    i0.ɵɵelement(0, "nb-tag", 64);
} if (rf & 2) {
    const tree_r108 = ctx.$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r108[field_r7.metaData.addConfig.belongToManyOptions.template ? field_r7.metaData.addConfig.belongToManyOptions.template : field_r7.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r7.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 59);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r112 = i0.ɵɵnextContext(3); return ctx_r112.onTagRemoveBelong($event, field_r7); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 60);
    i0.ɵɵelementStart(6, "input", 61, 62);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 54, 63);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r114); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r117 = i0.ɵɵnextContext(3); return ctx_r117.onChoose($event, field_r7); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 56);
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
    const ctx_r120 = i0.ɵɵnextContext(2);
    const field_r7 = ctx_r120.$implicit;
    const i_r8 = ctx_r120.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r7.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r8)("attributes", field_r7.metaData.attributes)("placeholder", field_r7.label)("formControlName", field_r7.name);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
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
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r126); const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r124 = i0.ɵɵnextContext(3); return ctx_r124.addJSONField(field_r7); });
    i0.ɵɵelement(1, "nb-icon", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r7.metaData.attributes);
} }
const _c3 = function () { return { standalone: true }; };
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r136 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r136); const item_r128 = i0.ɵɵnextContext().$implicit; return item_r128.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r128 = i0.ɵɵnextContext().$implicit;
    const field_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r128.label)("attributes", field_r7.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 79);
} if (rf & 2) {
    const item_r128 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r128.label);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r142 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵelementStart(1, "button", 80);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r142); const index_r129 = i0.ɵɵnextContext().index; const field_r7 = i0.ɵɵnextContext(3).$implicit; const ctx_r140 = i0.ɵɵnextContext(3); return ctx_r140.removeJSONField(field_r7, index_r129); });
    i0.ɵɵelement(2, "nb-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r145 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelementStart(1, "div", 72);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 73);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelementStart(6, "input", 76);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r145); const item_r128 = restoredCtx.$implicit; return item_r128.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 77);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 68);
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
    i0.ɵɵelementStart(0, "nb-option", 85);
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
    i0.ɵɵelementStart(0, "nb-option", 58);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 19);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 82);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r155 = i0.ɵɵnextContext(3); return ctx_r155.onMorphSelectField($event, field_r7.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "label", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 84, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r158 = i0.ɵɵnextContext(3); return ctx_r158.filterInput($event, field_r7); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r157); const field_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r160 = i0.ɵɵnextContext(3); return ctx_r160.onSelectionChange($event, field_r7); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 56);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 86);
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
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_1_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_2_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_4_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_5_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_6_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_7_Template, 7, 6, "div", 17);
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 17);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_9_Template, 6, 4, "div", 17);
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_10_Template, 8, 6, "div", 17);
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_11_Template, 10, 8, "div", 17);
    i0.ɵɵtemplate(12, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_12_Template, 7, 8, "div", 17);
    i0.ɵɵtemplate(13, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_13_Template, 13, 11, "div", 17);
    i0.ɵɵtemplate(14, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_14_Template, 12, 11, "div", 17);
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_15_Template, 6, 7, "div", 17);
    i0.ɵɵtemplate(16, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_16_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(17, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_17_Template, 7, 5, "div", 17);
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_18_Template, 17, 12, "div", 17);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_div_19_Template, 5, 4, "div", 17);
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
    i0.ɵɵelementStart(1, "span", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r7.note);
} }
function RestResourceAddComponent_ng_container_0_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 16);
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
    i0.ɵɵelementStart(0, "form", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_0_form_7_div_1_Template, 4, 2, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("formGroup", ctx_r4.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r4.resource.fields)("ngForTrackBy", ctx_r4.trackByFn);
} }
function RestResourceAddComponent_ng_container_0_span_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
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
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-tab", 4);
    i0.ɵɵelementStart(9, "div", 5);
    i0.ɵɵelement(10, "div", 6);
    i0.ɵɵelementStart(11, "div", 7);
    i0.ɵɵelementStart(12, "button", 8);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵelement(16, "ng2-smart-table", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "nb-card-footer");
    i0.ɵɵelementStart(18, "div", 10);
    i0.ɵɵelementStart(19, "button", 11);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_0_Template_button_click_19_listener() { i0.ɵɵrestoreView(_r172); const ctx_r171 = i0.ɵɵnextContext(); return ctx_r171.onSumbit(); });
    i0.ɵɵtext(20, " > ");
    i0.ɵɵtemplate(21, RestResourceAddComponent_ng_container_0_span_21_Template, 1, 0, "span", 12);
    i0.ɵɵtext(22);
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
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("nbContextMenu", ctx_r0.items);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind1(14, 10, "rest-add.import"), " ");
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "textarea", 21);
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
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
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
    i0.ɵɵelementStart(1, "div", 18);
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "input", 22);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 23);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 24);
    i0.ɵɵelement(5, "nb-datepicker", null, 25);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 26);
    i0.ɵɵelement(5, "nb-date-timepicker", 27, 28);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 29);
    i0.ɵɵelement(5, "nb-timepicker", null, 30);
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
    i0.ɵɵelementStart(0, "nb-option", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r216 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r216.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r216.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-select", 31);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_nb_option_5_Template, 2, 2, "nb-option", 32);
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
    const field_r180 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(4, 2, field_r180.label));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_img_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r219 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("src", ctx_r219.urlsImage[field_r180.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r226 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-preview", 42);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r229); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r227 = i0.ɵɵnextContext(4); return ctx_r227.onSelect($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_ngx_dropzone_preview_7_Template, 3, 4, "ngx-dropzone-preview", 39);
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
    i0.ɵɵelement(0, "img", 40);
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r231 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes)("src", ctx_r231.urlsImage[field_r180.name], i0.ɵɵsanitizeUrl);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ngx-dropzone-label");
    i0.ɵɵelement(1, "nb-icon", 41);
    i0.ɵɵtext(2, " Drag and drop files here or click to upload ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template(rf, ctx) { if (rf & 1) {
    const _r240 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ngx-dropzone-image-preview", 42);
    i0.ɵɵlistener("removed", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template_ngx_dropzone_image_preview_removed_0_listener() { i0.ɵɵrestoreView(_r240); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r238 = i0.ɵɵnextContext(4); return ctx_r238.onRemove(field_r180); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r237 = ctx.$implicit;
    i0.ɵɵproperty("file", f_r237)("removable", true);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r243 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r243); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r241 = i0.ɵɵnextContext(4); return ctx_r241.activeCroper(field_r180); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r246 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 45);
    i0.ɵɵlistener("imageCropped", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r244 = i0.ɵɵnextContext(4); return ctx_r244.imageCropped($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 44);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ng_container_9_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r246); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r247 = i0.ɵɵnextContext(4); return ctx_r247.saveCroper(field_r180); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "button", 46);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 37);
    i0.ɵɵlistener("change", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template_div_change_4_listener($event) { i0.ɵɵrestoreView(_r254); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r252 = i0.ɵɵnextContext(4); return ctx_r252.onSelect($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_img_5_Template, 1, 2, "img", 38);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_label_6_Template, 3, 0, "ngx-dropzone-label", 0);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_ngx_dropzone_image_preview_7_Template, 1, 2, "ngx-dropzone-image-preview", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_button_8_Template, 2, 0, "button", 43);
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
    i0.ɵɵelement(0, "nb-tag", 50);
} if (rf & 2) {
    const tree_r257 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r257);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r260 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 47);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r260); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r258 = i0.ɵɵnextContext(4); return ctx_r258.onTagRemove($event, field_r180.name); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_nb_tag_5_Template, 1, 1, "nb-tag", 48);
    i0.ɵɵelementStart(6, "input", 49);
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
    i0.ɵɵelementStart(0, "div", 7);
    i0.ɵɵelement(1, "input", 57);
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
    i0.ɵɵelementStart(0, "nb-option", 58);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵelementStart(6, "input", 51, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r273); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r271 = i0.ɵɵnextContext(4); return ctx_r271.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_div_8_Template, 2, 3, "div", 53);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template_nb_autocomplete_selectedChange_9_listener($event) { i0.ɵɵrestoreView(_r273); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r274 = i0.ɵɵnextContext(4); return ctx_r274.onSelectionChange($event, field_r180); });
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_nb_option_11_Template, 2, 3, "nb-option", 56);
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
    i0.ɵɵelement(0, "nb-tag", 64);
} if (rf & 2) {
    const tree_r281 = ctx.$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("text", tree_r281[field_r180.metaData.addConfig.belongToManyOptions.template ? field_r180.metaData.addConfig.belongToManyOptions.template : field_r180.metaData.addConfig.belongToManyOptions.filterKeys[0]])("attributes", field_r180.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 58);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "nb-tag-list", 59);
    i0.ɵɵlistener("tagRemove", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_nb_tag_list_tagRemove_4_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r285 = i0.ɵɵnextContext(4); return ctx_r285.onTagRemoveBelong($event, field_r180); });
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_tag_5_Template, 1, 2, "nb-tag", 60);
    i0.ɵɵelementStart(6, "input", 61, 62);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r288 = i0.ɵɵnextContext(4); return ctx_r288.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "nb-autocomplete", 54, 63);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template_nb_autocomplete_selectedChange_8_listener($event) { i0.ɵɵrestoreView(_r287); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r290 = i0.ɵɵnextContext(4); return ctx_r290.onChoose($event, field_r180); });
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_nb_option_10_Template, 2, 3, "nb-option", 56);
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
    const ctx_r293 = i0.ɵɵnextContext(2);
    const field_r180 = ctx_r293.$implicit;
    const i_r181 = ctx_r293.index;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 5, field_r180.label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("id", i_r181)("attributes", field_r180.metaData.attributes)("placeholder", field_r180.label)("formControlName", field_r180.name);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "input", 20);
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
    i0.ɵɵelementStart(0, "button", 69);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r299); const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r297 = i0.ɵɵnextContext(4); return ctx_r297.addJSONField(field_r180); });
    i0.ɵɵelement(1, "nb-icon", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("attributes", field_r180.metaData.attributes);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r309 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r309); const item_r301 = i0.ɵɵnextContext().$implicit; return item_r301.label = $event; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r301 = i0.ɵɵnextContext().$implicit;
    const field_r180 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("ngModel", item_r301.label)("attributes", field_r180.metaData.attributes)("ngModelOptions", i0.ɵɵpureFunction0(3, _c3));
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "input", 79);
} if (rf & 2) {
    const item_r301 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("value", item_r301.label);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r315 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 75);
    i0.ɵɵelementStart(1, "button", 80);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r315); const index_r302 = i0.ɵɵnextContext().index; const field_r180 = i0.ɵɵnextContext(3).$implicit; const ctx_r313 = i0.ɵɵnextContext(4); return ctx_r313.removeJSONField(field_r180, index_r302); });
    i0.ɵɵelement(2, "nb-icon", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r318 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelementStart(1, "div", 72);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_input_2_Template, 1, 4, "input", 73);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_ng_template_3_Template, 1, 1, "ng-template", null, 74, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 75);
    i0.ɵɵelementStart(6, "input", 76);
    i0.ɵɵlistener("ngModelChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template_input_ngModelChange_6_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r318); const item_r301 = restoredCtx.$implicit; return item_r301.value = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_div_7_Template, 3, 0, "div", 77);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "label", 19);
    i0.ɵɵtext(3);
    i0.ɵɵpipe(4, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_button_5_Template, 2, 1, "button", 67);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_div_6_Template, 8, 7, "div", 68);
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
    i0.ɵɵelementStart(0, "nb-option", 85);
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
    i0.ɵɵelementStart(0, "nb-option", 58);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵelementStart(2, "div", 7);
    i0.ɵɵelementStart(3, "label", 19);
    i0.ɵɵtext(4, "Ressources");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "nb-select", 82);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_nb_select_selectedChange_5_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r328 = i0.ɵɵnextContext(4); return ctx_r328.onMorphSelectField($event, field_r180.name); });
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_6_Template, 2, 3, "nb-option", 83);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 6);
    i0.ɵɵelementStart(8, "label", 19);
    i0.ɵɵtext(9);
    i0.ɵɵpipe(10, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "input", 84, 52);
    i0.ɵɵlistener("keyup", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_input_keyup_11_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r331 = i0.ɵɵnextContext(4); return ctx_r331.filterInput($event, field_r180); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "nb-autocomplete", 54, 55);
    i0.ɵɵlistener("selectedChange", function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template_nb_autocomplete_selectedChange_13_listener($event) { i0.ɵɵrestoreView(_r330); const field_r180 = i0.ɵɵnextContext(2).$implicit; const ctx_r333 = i0.ɵɵnextContext(4); return ctx_r333.onSelectionChange($event, field_r180); });
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_nb_option_15_Template, 2, 3, "nb-option", 56);
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
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "label", 19);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "titlecase");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ngx-gmaps", 86);
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
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_1_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_2_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(3, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_3_Template, 7, 8, "ng-container", 0);
    i0.ɵɵtemplate(4, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_4_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(5, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_5_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(6, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_6_Template, 7, 7, "div", 17);
    i0.ɵɵtemplate(7, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_7_Template, 7, 6, "div", 17);
    i0.ɵɵtemplate(8, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_ng_container_8_Template, 6, 7, "ng-container", 17);
    i0.ɵɵtemplate(9, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_9_Template, 6, 4, "div", 17);
    i0.ɵɵtemplate(10, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_10_Template, 8, 6, "div", 17);
    i0.ɵɵtemplate(11, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_11_Template, 10, 8, "div", 17);
    i0.ɵɵtemplate(12, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_12_Template, 7, 8, "div", 17);
    i0.ɵɵtemplate(13, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_13_Template, 13, 11, "div", 17);
    i0.ɵɵtemplate(14, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_14_Template, 12, 11, "div", 17);
    i0.ɵɵtemplate(15, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_15_Template, 6, 7, "div", 17);
    i0.ɵɵtemplate(16, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_16_Template, 5, 7, "div", 17);
    i0.ɵɵtemplate(17, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_17_Template, 7, 5, "div", 17);
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_18_Template, 17, 12, "div", 17);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_div_19_Template, 5, 4, "div", 17);
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
    i0.ɵɵelementStart(1, "span", 87);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r180 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(field_r180.note);
} }
function RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_ng_container_1_Template, 20, 19, "ng-container", 0);
    i0.ɵɵelementStart(2, "div", 16);
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
    i0.ɵɵelementStart(0, "form", 13);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_form_7_div_1_Template, 4, 2, "div", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r176 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("formGroup", ctx_r176.form);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r176.resource.fields)("ngForTrackBy", ctx_r176.trackByFn);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r347 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r347); const ctx_r346 = i0.ɵɵnextContext(4); return ctx_r346.onEdit(); });
    i0.ɵɵtext(1, " > ");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_span_2_Template, 1, 0, "span", 12);
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
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_div_18_button_1_Template, 4, 3, "button", 91);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r177 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r177.PERMISSION.UPDATE);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 88);
} }
function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r351 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r351); const ctx_r350 = i0.ɵɵnextContext(4); return ctx_r350.onCreate(); });
    i0.ɵɵtext(1, " > ");
    i0.ɵɵtemplate(2, RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_span_2_Template, 1, 0, "span", 12);
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
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_div_19_button_1_Template, 4, 3, "button", 91);
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
    i0.ɵɵelementStart(8, "nb-tab", 4);
    i0.ɵɵelementStart(9, "div", 5);
    i0.ɵɵelement(10, "div", 6);
    i0.ɵɵelementStart(11, "div", 7);
    i0.ɵɵelementStart(12, "button", 8);
    i0.ɵɵtext(13);
    i0.ɵɵpipe(14, "translate");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(15, "div");
    i0.ɵɵelement(16, "ng2-smart-table", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "nb-card-footer");
    i0.ɵɵtemplate(18, RestResourceAddComponent_ng_container_1_div_1_div_18_Template, 2, 1, "div", 90);
    i0.ɵɵtemplate(19, RestResourceAddComponent_ng_container_1_div_1_div_19_Template, 2, 1, "div", 90);
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
    i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_div_1_Template, 20, 11, "div", 89);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngxPermissionsOnly", ctx_r1.permissions);
} }
export class RestResourceAddComponent {
    constructor(fb, serviceRest, serviceRestAdminConfig, activatedRoute, nbMenuService, exportService, dialogService, router, notificationService, cdref, permissionsService) {
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
                            return Object.assign(Object.assign({}, cumul), { [elt.name]: [datas[elt.name], Validator.url] });
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
RestResourceAddComponent.ɵfac = function RestResourceAddComponent_Factory(t) { return new (t || RestResourceAddComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder), i0.ɵɵdirectiveInject(i2.RestResourceService), i0.ɵɵdirectiveInject(i3.RestAdminConfigService), i0.ɵɵdirectiveInject(i4.ActivatedRoute), i0.ɵɵdirectiveInject(i5.NbMenuService), i0.ɵɵdirectiveInject(i6.RestExportService), i0.ɵɵdirectiveInject(i5.NbDialogService), i0.ɵɵdirectiveInject(i4.Router), i0.ɵɵdirectiveInject(i7.NotificationService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i8.NgxPermissionsService)); };
RestResourceAddComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceAddComponent, selectors: [["ngx-rest-resource-add"]], viewQuery: function RestResourceAddComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.belongTo = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongToMany = _t.first);
    } }, inputs: { resource: "resource" }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["fullWidth", ""], ["tabTitle", "Ajout simple"], ["class", "row", 3, "formGroup", 4, "ngIf"], ["tabTitle", "Importation"], [1, "row"], [1, "col-9"], [1, "col-3"], ["nbButton", "", "status", "primary", "nbContextMenuTag", "my-context-add", 3, "nbContextMenu"], [3, "settings", "source"], [1, "buttons-row"], ["nbButton", "", "status", "primary", 3, "disabled", "click"], ["class", "spinner-border spinner-border-sm mr-2", 4, "ngIf"], [1, "row", 3, "formGroup"], ["class", "col-12", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "col-12"], [1, ""], ["class", "input-space", 4, "ngIf"], [1, "input-space"], [1, "label"], ["nbInput", "", "fullWidth", "", "type", "text", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "password", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", "type", "number", 3, "id", "attributes", "placeholder", "formControlName"], ["nbInput", "", "fullWidth", "", 3, "placeholder", "nbDatepicker", "attributes", "formControlName"], ["formpicker", ""], ["nbInput", "", "fullWidth", "", 3, "attributes", "placeholder", "nbDatepicker", "formControlName"], ["withSeconds", ""], ["dateTimePicker", ""], ["fullWidth", "", "twelveHoursFormat", "", "nbInput", "", 3, "nbTimepicker", "attributes", "formControlName"], ["timepicker", ""], ["fullWidth", "", 3, "formControlName", "attributes", "placeholder"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "display", "flex", "align-items", "center"], [2, "margin-right", "0.5em"], [3, "formControlName"], ["ngx-dropzone", "", 1, "custom-dropzone", "form-control-custom", "rounded", "m-2", 2, "border", "dashed", "display", "flex", 3, "change"], ["class", "custom-img-dropzone", 3, "attributes", "src", 4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "custom-img-dropzone", 3, "attributes", "src"], ["icon", "cloud-upload-outline", 2, "font-size", "2em", "color", "#ccc"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], ["nbButton", "", "status", "danger", 3, "click"], ["fullWidth", "", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "fullWidth", "", "nbTagInput", "", 3, "attributes", "placeholder", "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "keyup"], ["autoInput", ""], ["class", "col-3", 4, "ngIf"], [3, "selectedChange"], ["autoComplete", ""], [3, "value", "attributes", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "disabled", "true", "type", "text", "placeholder", "Value", 3, "attributes", "value", "id"], [3, "value", "attributes"], [3, "tagRemove"], ["removable", "", 3, "text", "attributes", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "attributes", "nbAutocomplete", "placeholder", "formControlName", "keyup"], ["autoBelongToMany", ""], ["belongToField", ""], ["removable", "", 3, "text", "attributes"], [1, "color-row"], ["nbInput", "", "fullWidth", "", "type", "color", 2, "height", "45px", 3, "id", "attributes", "placeholder", "formControlName"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click", 4, "ngIf"], ["class", "row mb-2", 4, "ngFor", "ngForOf"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "attributes", "click"], ["icon", "plus", "pack", "fas"], [1, "row", "mb-2"], [1, "col", 3, "id"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "col"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["class", "col", 4, "ngIf"], ["fullWidth", "", "nbInput", "", 3, "ngModel", "attributes", "ngModelOptions", "ngModelChange"], ["fullWidth", "", "nbInput", "", "disabled", "", 3, "value"], ["nbButton", "", "status", "primary", "shape", "round", "size", "small", "outline", "", "ghost", "", 3, "click"], ["icon", "trash-alt", "pack", "fas"], ["fullWidth", "", 3, "selectedChange"], [3, "attributes", "value", 4, "ngFor", "ngForOf"], ["nbInput", "", "fullWidth", "", "type", "text", "placeholder", "Enter value", 3, "attributes", "formControlName", "nbAutocomplete", "id", "disabled", "keyup"], [3, "attributes", "value"], [3, "googleMapKey", "latChange", "lngChange"], [1, "text-muted", "ml-20", "mt-3"], [1, "spinner-border", "spinner-border-sm", "mr-2"], [4, "ngxPermissionsOnly"], ["class", "buttons-row", 4, "ngIf"], ["nbButton", "", "status", "primary", 3, "disabled", "click", 4, "ngxPermissionsOnly"]], template: function RestResourceAddComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceAddComponent_ng_container_0_Template, 23, 12, "ng-container", 0);
        i0.ɵɵtemplate(1, RestResourceAddComponent_ng_container_1_Template, 2, 1, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length <= 0);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.resource.permissions.length > 0);
    } }, directives: [i9.NgIf, i5.NbCardComponent, i5.NbCardBodyComponent, i5.NbTabsetComponent, i5.NbTabComponent, i5.NbButtonComponent, i5.NbContextMenuDirective, i10.Ng2SmartTableComponent, i5.NbCardFooterComponent, i5.NbCardHeaderComponent, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.FormGroupDirective, i9.NgForOf, i5.NbInputDirective, i1.DefaultValueAccessor, i11.AttributeDirective, i1.NgControlStatus, i1.FormControlName, i1.NumberValueAccessor, i5.NbDatepickerDirective, i5.NbDatepickerComponent, i5.NbDateTimePickerComponent, i5.NbTimePickerDirective, i5.NbTimePickerComponent, i5.NbSelectComponent, i5.NbOptionComponent, i5.NbToggleComponent, i12.NgxDropzoneComponent, i12.NgxDropzoneLabelDirective, i5.NbIconComponent, i12.NgxDropzonePreviewComponent, i12.NgxDropzoneImagePreviewComponent, i13.ImageCropperComponent, i5.NbTagListComponent, i5.NbTagInputDirective, i5.NbTagComponent, i5.NbAutocompleteDirective, i5.NbAutocompleteComponent, i1.NgModel, i14.GmapsComponent, i8.NgxPermissionsDirective], pipes: [i15.TranslatePipe, i9.TitleCasePipe, i9.AsyncPipe], styles: ["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}.input-space[_ngcontent-%COMP%]{margin-top:1rem}.color-row[_ngcontent-%COMP%]{justify-content:space-between;height:45px}.color-card[_ngcontent-%COMP%]{width:80px;height:30px;border-radius:2px;border-width:2px;border-color:#909293;margin-left:5px;justify-content:center;align-items:center}@use \"@nebular/theme/styles/themes/default\";.nb-theme-default   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-default   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-default   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-default   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-dark   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-dark   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-dark   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-dark   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-cosmic   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-cosmic   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.nb-theme-corporate   [_nghost-%COMP%]   .buttons-row[_ngcontent-%COMP%]{margin:-.5rem}.nb-theme-corporate   [_nghost-%COMP%]   button[nbButton][_ngcontent-%COMP%]{margin:.5rem}[dir=ltr]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-right:.5rem}[dir=rtl]   .nb-theme-corporate   [_nghost-%COMP%]   .action-icon[_ngcontent-%COMP%]{margin-left:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .actions-card[_ngcontent-%COMP%]{height:8rem}.icon[_ngcontent-%COMP%]{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;font-size:14px}svg[_ngcontent-%COMP%]{fill:#909293;height:20px}.overlay[_ngcontent-%COMP%]{position:relative}.delete-button[_ngcontent-%COMP%]{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}nb-toggle[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceAddComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-rest-resource-add',
                templateUrl: './rest-resource-add.component.html',
                styleUrls: ['./rest-resource-add.component.scss'],
            }]
    }], function () { return [{ type: i1.FormBuilder }, { type: i2.RestResourceService }, { type: i3.RestAdminConfigService }, { type: i4.ActivatedRoute }, { type: i5.NbMenuService }, { type: i6.RestExportService }, { type: i5.NbDialogService }, { type: i4.Router }, { type: i7.NotificationService }, { type: i0.ChangeDetectorRef }, { type: i8.NgxPermissionsService }]; }, { resource: [{
            type: Input
        }], belongTo: [{
            type: ViewChild,
            args: ['belongTo']
        }], inputBelongToMany: [{
            type: ViewChild,
            args: ['autoBelongToMany']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBRUwsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLCtCQUErQixDQUFDO0FBRXZDLE9BQU8sRUFFTCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQU92QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBK0IsRUFBRSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUlyRSxPQUFPLEVBQXFCLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR3BFLE9BQU8sRUFBRSxRQUFRLEVBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDM0gsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDcEksT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sS0FBSyxNQUFNLE1B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QUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUM7UUFDM0UsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBRXJFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ25CLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7O2dHQXZ0Q1Usd0JBQXdCOzJFQUF4Qix3QkFBd0I7Ozs7Ozs7O1FDM0NyQyw2RkF5dkJlO1FBRWYsMkZBc3hCZTs7UUFqaERBLDJEQUFzQztRQTJ2QnRDLGVBQXFDO1FBQXJDLDBEQUFxQzs7dUZEaHRCdkMsd0JBQXdCO2NBTHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxTQUFTLEVBQUUsQ0FBQyxvQ0FBb0MsQ0FBQzthQUNsRDt1WEFFVSxRQUFRO2tCQUFoQixLQUFLO1lBK0JpQixRQUFRO2tCQUE5QixTQUFTO21CQUFDLFVBQVU7WUFDVSxpQkFBaUI7a0JBQS9DLFNBQVM7bUJBQUMsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxEYXRhU291cmNlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7XG4gIFJlc3RGaWVsZCxcbiAgUkVTVF9GSUVMRF9UWVBFUyxcbiAgUEVSTUlTU0lPTixcbn0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYkRpYWxvZ1NlcnZpY2UsXG4gIE5iTWVudVNlcnZpY2UsXG4gIE5iVGFnQ29tcG9uZW50LFxuICBOYlRhZ0lucHV0QWRkRXZlbnQsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBvZiwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCwgYmFzZTY0VG9GaWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFMUEhBQkVULCBSZXN0RXhwb3J0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2UvcmVzdC1leHBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFZhbGlkYXRvciB9IGZyb20gJ25neC1pbnB1dC12YWxpZGF0b3InO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc1NlcnZpY2UgfSBmcm9tICduZ3gtcGVybWlzc2lvbnMnO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlc3QtcmVzb3VyY2UtYWRkJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcmVzb3VyY2U6IFJlc3RSZXNvdXJjZTtcbiAgcmVzc291cmNlTmFtZTogc3RyaW5nO1xuICBtZXNzYWdlID0gJ1Jlc3NvdXJjZSBham91dMOpZSBhdmVjIHN1Y2PDqHMnO1xuICAvL0ljb25zXG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuICBmb3JtU3RhdGU6IGFueSA9IHtcbiAgICBidG5MYWJlbDogJ01vZGlmaWVyJyxcbiAgICBpc0FkZDogZmFsc2UsXG4gICAgaWRFbnRpdHk6IG51bGwsXG4gICAgb25SZWFkeTogZmFsc2UsXG4gIH07XG5cbiAgZW50aXR5OiBhbnk7XG4gIC8vIExvYWRlclxuICBsb2FkaW5nID0gZmFsc2U7XG5cbiAgLy8gVGVzdFxuICBwdWJsaWMgdXBsb2FkZWRGaWxlOiBCZWhhdmlvclN1YmplY3Q8YW55PjtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgLy8gRW5kIHRlc3RcblxuICAvL0JFTE9OR19UTyBGSUVMRFxuICBvcHRpb25zOiBhbnkgPSB7fTtcbiAgYWxsRmlsdGVyQ29udGFpbnM6IGFueSA9IHt9O1xuICBiZWxvbmdUb1ZhbHVlOiBhbnkgPSB7fTtcbiAgYmVsb25nVG9NYW55OiBhbnkgPSB7fTtcblxuICAvL2pzb24gZWRpdG9yXG4gIGpzb25FZGl0b3JPcHRpb25zID0ge307XG5cbiAgQFZpZXdDaGlsZCgnYmVsb25nVG8nKSBiZWxvbmdUbzogUXVlcnlMaXN0PGFueT47XG4gIEBWaWV3Q2hpbGQoJ2F1dG9CZWxvbmdUb01hbnknKSBpbnB1dEJlbG9uZ1RvTWFueTtcblxuICBjb250cm9sczogYW55O1xuICBtdWx0aXBsZSA9IGZhbHNlO1xuXG4gIGNvbnRyb2xDcm9wZXI6IGFueSA9IHt9O1xuXG4gIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnkgPSAnJztcbiAgY3JvcHBlZEltYWdlOiBhbnkgPSB7fTtcbiAgaXNDcm9wOiBhbnkgPSB7fTtcblxuICBjb250cm9sc0ltYWdlOiBhbnkgPSB7fTtcblxuICAvLyBDb2xvclxuICBjb2xvcnMgPSBbXTtcblxuICAvLyBFbmQgdGVzdFxuXG4gIC8vSW1wb3J0XG4gIGl0ZW1zID0gW3sgdGl0bGU6ICdEb3dubG9hZCB0ZW1wbGF0ZScgfSwgeyB0aXRsZTogJ0ltcG9ydCcgfV07XG4gIGFscGhhYmVsdDogc3RyaW5nW10gPSBBTFBIQUJFVDtcblxuICAvL0ltYWdlXG4gIGZpbGVzVXBsb2FkID0ge307XG4gIHVybHNJbWFnZSA9IHt9O1xuXG4gIHNvdXJjZTogTG9jYWxEYXRhU291cmNlO1xuICBzZXR0aW5nczogYW55O1xuXG4gIC8vTW9ycGhfZmllbGRcbiAgbW9ycGhGaWVsZHMgPSB7fTtcblxuICBwZXJtaXNzaW9ucyA9IFtQRVJNSVNTSU9OLkNSRUFURSwgUEVSTUlTU0lPTi5VUERBVEVdO1xuICBnb29nbGVNYXBLZXlzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3Q6IFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdEFkbWluQ29uZmlnOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgbmJNZW51U2VydmljZTogTmJNZW51U2VydmljZSxcbiAgICBwcml2YXRlIGV4cG9ydFNlcnZpY2U6IFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgZGlhbG9nU2VydmljZTogTmJEaWFsb2dTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcGVybWlzc2lvbnNTZXJ2aWNlOiBOZ3hQZXJtaXNzaW9uc1NlcnZpY2VcbiAgKSB7XG4gICAgYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZSgocGFyYW1zKSA9PiB7XG4gICAgICB0aGlzLnJlc3NvdXJjZU5hbWUgPVxuICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybC5sZW5ndGggLSAxXG4gICAgICAgIF0ucGF0aC5zcGxpdCgnLScpWzBdO1xuXG4gICAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgIHRoaXMucmVzc291cmNlTmFtZVxuICAgICAgKTtcblxuICAgICAgaWYgKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoICE9IDApIHtcbiAgICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lID1cbiAgICAgICAgICB0aGlzLmFjdGl2YXRlZFJvdXRlLnNuYXBzaG90LnVybFtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUuc25hcHNob3QudXJsLmxlbmd0aCAtIDJcbiAgICAgICAgICBdLnBhdGguc3BsaXQoJy0nKVswXTtcblxuICAgICAgICB0aGlzLnJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgdGhpcy5yZXNzb3VyY2VOYW1lXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgIC5nZXRPbmVSZXNvdXJjZShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXBpOiB0aGlzLnJlc291cmNlLmVkaXRDb25maWcuYXBpLFxuICAgICAgICAgICAgICBxdWVyeVBhcmFtczogdGhpcy5yZXNvdXJjZS5lZGl0Q29uZmlnLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcmFtcy5pZFxuICAgICAgICAgIClcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRGb3JtKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybVN0YXRlID0ge1xuICAgICAgICAgICAgICBidG5MYWJlbDogJ01vZGlmaWVyJyxcbiAgICAgICAgICAgICAgaXNBZGQ6IGZhbHNlLFxuICAgICAgICAgICAgICBpZEVudGl0eTogcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgIG9uUmVhZHk6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbml0Rm9ybShudWxsKTtcbiAgICAgICAgdGhpcy5mb3JtU3RhdGUgPSB7XG4gICAgICAgICAgYnRuTGFiZWw6ICdBam91dGVyJyxcbiAgICAgICAgICBpc0FkZDogdHJ1ZSxcbiAgICAgICAgICBvblJlYWR5OiB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5nb29nbGVNYXBLZXlzID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdvb2dsZU1hcEFwaUtleTtcbiAgICB0aGlzLm5iTWVudVNlcnZpY2VcbiAgICAgIC5vbkl0ZW1DbGljaygpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKCh7IHRhZyB9KSA9PiB0YWcgPT09ICdteS1jb250ZXh0LWFkZCcpLFxuICAgICAgICBtYXAoKHsgaXRlbTogeyB0aXRsZSB9IH0pID0+IHRpdGxlKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgodGl0bGUpID0+IHtcbiAgICAgICAgc3dpdGNoICh0aXRsZSkge1xuICAgICAgICAgIGNhc2UgJ0Rvd25sb2FkIHRlbXBsYXRlJzpcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRUZW1wbGF0ZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnSW1wb3J0JzpcbiAgICAgICAgICAgIHRoaXMuaW1wb3J0RGF0YSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXNzJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgaGlkZVN1YkhlYWRlcjogdHJ1ZSxcbiAgICAgIGFjdGlvbnM6IGZhbHNlLFxuICAgICAgcGFnZXI6IHtcbiAgICAgICAgcGVyUGFnZTogdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLnBlclBhZ2UsXG4gICAgICB9LFxuICAgICAgY29sdW1uczogdGhpcy5jcmVhdGVNYXRUYWJsZUNvbHVtbnMoKSxcbiAgICB9O1xuICAgIHRoaXMuY2RyZWYuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2UucGVybWlzc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5wZXJtaXNzaW9ucy5mb3JFYWNoKChwZXJtaXNzaW9uKSA9PiB7XG4gICAgICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgIGFwaTogcGVybWlzc2lvbi5maWVsZEtleS5hcGkuc3Vic3RyaW5nKDEpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHBlcm1pc3Npb24uZmllbGRLZXkucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgPyBwZXJtaXNzaW9uLmZpZWxkS2V5LnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgIDoge30sXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWwgPSB7fTtcbiAgICAgICAgICAgIHBlcm1pc3Npb24uZmllbGRLZXkuZmllbGRGb3JOZXh0UXVlcnkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICB2YWxbaXRlbV0gPSBfLmdldChyZXNwLCBpdGVtKTtcbiAgICAgICAgICAgICAgaWYgKHZhbFtpdGVtXSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmFkZFBlcm1pc3Npb24ocGVybWlzc2lvbi50eXBlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0Rm9ybShkYXRhcykge1xuICAgIGlmIChkYXRhcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRyb2xzID0gdGhpcy5yZXNvdXJjZS5maWVsZHMucmVkdWNlKChjdW11bCwgZWx0KSA9PiB7XG4gICAgICAgIHZhciBmaWx0ZXJLZXkgPSBlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgPyBlbHQubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgOiAnbmFtZSc7XG4gICAgICAgIGlmIChlbHQuaW5Gb3JtKSB7XG4gICAgICAgICAgc3dpdGNoIChlbHQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkZJTEU6XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuUERGOlxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFOlxuICAgICAgICAgICAgICB0aGlzLmZpbGVzVXBsb2FkW2VsdC5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICB0aGlzLnVybHNJbWFnZVtlbHQubmFtZV0gPSBkYXRhc1tlbHQubmFtZV07XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBuZXcgU2V0KFtkYXRhc1tlbHQubmFtZV1dKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID1cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnJlc291cmNlTmFtZVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgYXBpOiByZXN0UmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICA/IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIDogcmVzdFJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgeFtmaWx0ZXJLZXldXG4gICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5W2ZpbHRlcktleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZWx0Lm5hbWVdID0gb2YodGhpcy5vcHRpb25zW2VsdC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbZGF0YXNbZWx0Lm5hbWVdXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgIGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkTmFtZVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICBhcGk6IHJlc291cmNlLmFwaSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgID8gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIDogcmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdID0gWy4uLnJlc3BvbnNlXS5zb3J0KCh4LCB5KSA9PlxuICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxGaWx0ZXJDb250YWluc1tlbHQubmFtZV0gPSBvZih0aGlzLm9wdGlvbnNbZWx0Lm5hbWVdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy5iZWxvbmdUb01hbnlbZWx0Lm5hbWVdID0gbmV3IFNldChkYXRhc1tlbHQubmFtZV0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW2RhdGFzW2VsdC5uYW1lXV0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5MSU5LOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtkYXRhc1tlbHQubmFtZV0sIFZhbGlkYXRvci51cmxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SOlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5KU09OOlxuICAgICAgICAgICAgICBjb25zdCBqc29uRmllbGRzID0gW107XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEgJiZcbiAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEuYWRkQ29uZmlnICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmpzb25GaWVsZHNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmpzb25GaWVsZHMubWFwKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzW2VsdC5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YXNbZWx0Lm5hbWVdWzBdID09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqc29uRmllbGRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBKU09OLnBhcnNlKGRhdGFzW2VsdC5uYW1lXSlbZmllbGRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciBwYXJzaW5nIEpTT04gZm9yICR7ZmllbGR9IGluICR7ZWx0Lm5hbWV9OiAke2Vycm9yfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhc1tlbHQubmFtZV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25GaWVsZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFzW2VsdC5uYW1lXVtmaWVsZF0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIGFjY2Vzc2luZyBmaWVsZCAke2ZpZWxkfSBpbiAke2VsdC5uYW1lfTogJHtlcnJvcn1gXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBqc29uRmllbGRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAganNvbkZpZWxkcy5wdXNoKHsgbGFiZWw6IGZpZWxkLCB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tlbHQubmFtZV0gPSBqc29uRmllbGRzO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IGRhdGFzW2VsdC5uYW1lXSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLk1PUlBIX09ORTpcbiAgICAgICAgICAgICAgdGhpcy5tb3JwaEZpZWxkc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogZGF0YXNbZWx0Lm5hbWVdLnR5cGUsXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGFzW2VsdC5uYW1lXS5pZCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5NQVA6XG4gICAgICAgICAgICAgIGNvbnN0IGxhdCA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGQ7XG4gICAgICAgICAgICAgIGNvbnN0IGxvbmcgPSBlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbbGF0XTogZGF0YXNbbGF0XSxcbiAgICAgICAgICAgICAgICBbbG9uZ106IGRhdGFzW2xvbmddLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jb250cm9scyA9IHRoaXMucmVzb3VyY2UuZmllbGRzLnJlZHVjZSgoY3VtdWwsIGVsdCkgPT4ge1xuICAgICAgICB2YXIgZmlsdGVyS2V5ID0gZWx0Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8uZmlsdGVyS2V5c1swXVxuICAgICAgICAgID8gZWx0Lm1ldGFEYXRhPy5hZGRDb25maWc/LmJlbG9uZ1RvT3B0aW9ucz8uZmlsdGVyS2V5c1swXVxuICAgICAgICAgIDogJ25hbWUnO1xuICAgICAgICBpZiAoZWx0LmluRm9ybSkge1xuICAgICAgICAgIHN3aXRjaCAoZWx0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5GSUxFOlxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLlBERjpcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5JTUFHRTpcbiAgICAgICAgICAgICAgdGhpcy5maWxlc1VwbG9hZFtlbHQubmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy51cmxzSW1hZ2VbZWx0Lm5hbWVdID0gJyc7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBuZXcgU2V0KFtdKSxcbiAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogZmFsc2UsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPOlxuICAgICAgICAgICAgICBjb25zdCByZXN0UmVzb3VyY2UgPVxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucmVzb3VyY2VOYW1lXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBpZiAocmVzdFJlc291cmNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICAgICAgICAgIGFwaTogcmVzdFJlc291cmNlLmFwaSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlQYXJhbXM6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgPyBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgIDogcmVzdFJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB4W2ZpbHRlcktleV1cbiAgICAgICAgICAgICAgICAgICAgICAgIC50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgPy5sb2NhbGVDb21wYXJlKHlbZmlsdGVyS2V5XS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZWx0Lm5hbWVdID0gb2YoXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJ10sXG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZE5hbWVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgICAgICAgYXBpOiByZXNvdXJjZS5hcGksXG4gICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtczogZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICA/IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICAgICAgICA6IHJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zW2VsdC5uYW1lXSA9IFsuLi5yZXNwb25zZV0uc29ydCgoeCwgeSkgPT5cbiAgICAgICAgICAgICAgICAgICAgeFtmaWx0ZXJLZXldXG4gICAgICAgICAgICAgICAgICAgICAgLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgICAgICAgID8ubG9jYWxlQ29tcGFyZSh5W2ZpbHRlcktleV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZWx0Lm5hbWVdID0gb2YodGhpcy5vcHRpb25zW2VsdC5uYW1lXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIHRoaXMuYmVsb25nVG9NYW55W2VsdC5uYW1lXSA9IG5ldyBTZXQoKTtcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFtdLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuTElOSzpcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICAgICAgICBbZWx0Lm5hbWVdOiBbJycsIFZhbGlkYXRvci51cmxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkpTT046XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBlbHQgJiZcbiAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEgJiZcbiAgICAgICAgICAgICAgICBlbHQubWV0YURhdGEuYWRkQ29uZmlnICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnICYmXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmpzb25GaWVsZHNcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbkZpZWxkcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5qc29uQ29uZmlnLmpzb25GaWVsZHMuZm9yRWFjaChcbiAgICAgICAgICAgICAgICAgIChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBqc29uRmllbGRzLnB1c2goeyBsYWJlbDogZmllbGQsIHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tlbHQubmFtZV0gPSBqc29uRmllbGRzO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNpIHVuZSBwcm9wcmnDqXTDqSByZXF1aXNlIG4nZXN0IHBhcyBwcsOpc2VudGUsIHJlbnZveWVyIHVuZSBlcnJldXJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgICBcIlVuZSBlcnJldXIgcydlc3QgcHJvZHVpdGUgbG9ycyBkdSB0cmFpdGVtZW50IGRlIGwnw6lsw6ltZW50LlwiXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgICAgW2VsdC5uYW1lXTogW251bGxdLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLk1BUDpcbiAgICAgICAgICAgICAgY29uc3QgbGF0ID0gZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZDtcbiAgICAgICAgICAgICAgY29uc3QgbG9uZyA9IGVsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkO1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtsYXRdOiBbbnVsbF0sXG4gICAgICAgICAgICAgICAgW2xvbmddOiBbbnVsbF0sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICAgIFtlbHQubmFtZV06IFsnJ10sXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2VcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgfTtcbiAgICAgIH0sIHt9KTtcbiAgICB9XG5cbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHRoaXMuY29udHJvbHMpO1xuICB9XG5cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh0aGlzLmNvbnRyb2xzKTtcbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgZ2V0IFBFUk1JU1NJT04oKSB7XG4gICAgcmV0dXJuIFBFUk1JU1NJT047XG4gIH1cblxuICAvL1RhZ3NcbiAgb25UYWdSZW1vdmUodGFnVG9SZW1vdmU6IE5iVGFnQ29tcG9uZW50LCBuYW1lKTogdm9pZCB7XG4gICAgY29uc3QgdHJlZXNBID0gbmV3IFNldCh0aGlzLmZvcm0uZ2V0KFtuYW1lXSkudmFsdWUpO1xuXG4gICAgdHJlZXNBLmRlbGV0ZSh0YWdUb1JlbW92ZS50ZXh0KTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtuYW1lXTogQXJyYXkuZnJvbSh0cmVlc0EudmFsdWVzKCkpLFxuICAgIH0pO1xuICB9XG5cbiAgb25UYWdBZGQoeyB2YWx1ZSwgaW5wdXQgfTogTmJUYWdJbnB1dEFkZEV2ZW50LCBuYW1lKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCB0cmVlc0EgPSBuZXcgU2V0KHRoaXMuZm9ybS5nZXQoW25hbWVdKS52YWx1ZSk7XG4gICAgICB0cmVlc0EuYWRkKHZhbHVlKTtcbiAgICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgICAgW25hbWVdOiBBcnJheS5mcm9tKHRyZWVzQS52YWx1ZXMoKSksXG4gICAgICB9KTtcbiAgICB9XG4gICAgaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgLy8gQXV0b2NvbXBsZXRlXG4gIHByaXZhdGUgZmlsdGVyKHZhbHVlOiBhbnksIGZpZWxkKTogc3RyaW5nW10ge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zW2ZpZWxkLm5hbWVdKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0gZWxzZVxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zW2ZpZWxkLm5hbWVdLmZpbHRlcigob3B0aW9uVmFsdWUpID0+IHtcbiAgICAgICAgICByZXR1cm4gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzLnNvbWUoXG4gICAgICAgICAgICAoZWx0KSA9PlxuICAgICAgICAgICAgICBgJHtvcHRpb25WYWx1ZVtlbHRdPy50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgYCR7dmFsdWUudG9Mb3dlckNhc2UoKX1gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBnZXRGaWx0ZXJlZE9wdGlvbnModmFsdWU6IGFueSwgZmllbGQ6IFJlc3RGaWVsZCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICBpZiAoZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTylcbiAgICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdGhpcy5maWx0ZXIoZmlsdGVyU3RyaW5nLCBmaWVsZCkpXG4gICAgICApO1xuICAgIGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5NT1JQSClcbiAgICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT5cbiAgICAgICAgICB0aGlzLmZpbHRlck1hbnkoZmlsdGVyU3RyaW5nLCBmaWVsZCwgJ21vcnBoQ29uZmlnJylcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICByZXR1cm4gb2YodmFsdWUpLnBpcGUoXG4gICAgICBtYXAoKGZpbHRlclN0cmluZzogc3RyaW5nKSA9PiB0aGlzLmZpbHRlck1hbnkoZmlsdGVyU3RyaW5nLCBmaWVsZCkpXG4gICAgKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKGV2ZW50LCBmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgY29uc3QgYlZhbCA9IHRoaXMub3B0aW9uc1tmaWVsZC5uYW1lXVxuICAgICAgPyB0aGlzLm9wdGlvbnNbZmllbGQubmFtZV0uZmluZCgoZWx0KSA9PiBlbHQ/LmlkID09PSBldmVudClcbiAgICAgIDoge307XG4gICAgdGhpcy5iZWxvbmdUb1ZhbHVlW2ZpZWxkLm5hbWVdID0gYlZhbFxuICAgICAgPyBiVmFsW1xuICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYmVsb25nVG9TZWNvbmRGaWVsZExhYmVsXG4gICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYmVsb25nVG9TZWNvbmRGaWVsZExhYmVsXG4gICAgICAgICAgICA6ICduYW1lJ1xuICAgICAgICBdXG4gICAgICA6ICcnO1xuICAgIHRoaXMuYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gPSB0aGlzLmdldEZpbHRlcmVkT3B0aW9ucyhldmVudCwgZmllbGQpO1xuICB9XG5cbiAgZmlsdGVySW5wdXQoZXZlbnQsIGZpZWxkOiBSZXN0RmllbGQpIHtcbiAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICBldmVudC50YXJnZXQudmFsdWUsXG4gICAgICBmaWVsZFxuICAgICk7XG4gIH1cblxuICB0ZXN0KGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQpO1xuICB9XG4gIC8vIEVuZCBBdXRvY29tcGxldGVcblxuICAvL0ltYWdlIGlucHV0XG4gIG9uU2VsZWN0KGV2ZW50LCBmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFtdO1xuICAgIGNvbnN0IGFkZGVkRmlsZXM6IEZpbGUgPSBldmVudC5hZGRlZEZpbGVzO1xuXG4gICAgdGhpcy5maWxlc1VwbG9hZFtmaWVsZC5uYW1lXSA9IFthZGRlZEZpbGVzWzBdXTtcblxuICAgIGlmIChmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0UpIHtcbiAgICAgIHRoaXMuaXNDcm9wW2ZpZWxkLm5hbWVdID0gdHJ1ZTtcbiAgICAgIHRoaXMuY29udHJvbENyb3BlcltmaWVsZC5uYW1lXSA9IGFkZGVkRmlsZXNbMF07XG4gICAgfVxuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBhZGRlZEZpbGVzWzBdLFxuICAgIH0pO1xuICB9XG5cbiAgb25SZW1vdmUoZmllbGQpIHtcbiAgICB0aGlzLmZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdID0gW107XG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBudWxsLFxuICAgIH0pO1xuICB9XG5cbiAgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCwgZmllbGQpIHtcbiAgICB0aGlzLmNyb3BwZWRJbWFnZVtmaWVsZC5uYW1lXSA9IGV2ZW50LmJhc2U2NDtcbiAgfVxuXG4gIGFjdGl2ZUNyb3BlcihmaWVsZCkge1xuICAgIHRoaXMuaXNDcm9wW2ZpZWxkLm5hbWVdID0gdHJ1ZTtcbiAgfVxuXG4gIGRlc2FjdGl2ZUNyb3AoZmllbGQpIHtcbiAgICB0aGlzLmlzQ3JvcFtmaWVsZC5uYW1lXSA9IGZhbHNlO1xuICB9XG5cbiAgc2F2ZUNyb3BlcihmaWVsZDogUmVzdEZpZWxkKSB7XG4gICAgdGhpcy5pc0Nyb3BbZmllbGQubmFtZV0gPSBmYWxzZTtcbiAgICB0aGlzLmZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdID0gW1xuICAgICAgYmFzZTY0VG9GaWxlKHRoaXMuY3JvcHBlZEltYWdlW2ZpZWxkLm5hbWVdKSxcbiAgICBdO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW2ZpZWxkLm5hbWVdOiBuZXcgRmlsZShcbiAgICAgICAgW2Jhc2U2NFRvRmlsZSh0aGlzLmNyb3BwZWRJbWFnZVtmaWVsZC5uYW1lXSldLFxuICAgICAgICBmaWVsZC5uYW1lXG4gICAgICApLFxuICAgIH0pO1xuICB9XG5cbiAgLy9iZWxvbmdUb01hbnlPcHRpb25zXG4gIG9uQ2hvb3NlKGV2ZW50LCBmaWVsZCkge1xuICAgIGNvbnN0IGNlbGxEYXRhOiBhbnlbXSA9IEFycmF5LmZyb20odGhpcy5iZWxvbmdUb01hbnlbZmllbGQubmFtZV0pO1xuICAgIGlmIChldmVudC5pZCkge1xuICAgICAgY29uc3Qgc2VhcmNoID0gY2VsbERhdGEuZmluZCgoZWx0OiBhbnkpID0+IGVsdC5pZCA9PSBldmVudC5pZCk7XG5cbiAgICAgIGlmIChzZWFyY2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsdCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgW2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWRJZE5hbWVdOlxuICAgICAgICAgICAgZXZlbnQuaWQsXG4gICAgICAgICAgW2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlc291cmNlSWROYW1lXTogJycsXG4gICAgICAgICAgW2ZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1dOlxuICAgICAgICAgICAgZXZlbnRbZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXV0sXG4gICAgICAgICAgc2F2ZVJlbGF0ZWRJZE5hbWU6XG4gICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZWxhdGVkSWROYW1lLFxuICAgICAgICAgIHNhdmVSZXNvdXJjZUlkTmFtZTpcbiAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlc291cmNlSWROYW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdLmFkZChuZXdFbHQpO1xuICAgICAgICB0aGlzLmZvcm0ucGF0Y2hWYWx1ZSh7XG4gICAgICAgICAgW2ZpZWxkLm5hbWVdOiBBcnJheS5mcm9tKHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdLnZhbHVlcygpKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXRCZWxvbmdUb01hbnkubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICB9XG5cbiAgb25UYWdSZW1vdmVCZWxvbmcodGFnVG9SZW1vdmU6IE5iVGFnQ29tcG9uZW50LCBmaWVsZCk6IHZvaWQge1xuICAgIGNvbnN0IGNlbGxEYXRhID0gQXJyYXkuZnJvbSh0aGlzLmJlbG9uZ1RvTWFueVtmaWVsZC5uYW1lXSk7XG4gICAgY29uc3Qgc2F2ZSA9IFtdO1xuXG4gICAgY2VsbERhdGEuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsdFtcbiAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5maWx0ZXJLZXlzWzBdXG4gICAgICAgIF0gIT0gdGFnVG9SZW1vdmUudGV4dFxuICAgICAgKVxuICAgICAgICBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdID0gbmV3IFNldChzYXZlKTtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtmaWVsZC5uYW1lXTogc2F2ZSxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZmlsdGVyTWFueShcbiAgICB2YWx1ZTogYW55LFxuICAgIGZpZWxkOiBhbnksXG4gICAgb3B0aW9ucyA9ICdiZWxvbmdUb01hbnlPcHRpb25zJ1xuICApOiBzdHJpbmdbXSB7XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbZmllbGQ/Lm5hbWVdLmZpbHRlcigob3B0aW9uVmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZ1tvcHRpb25zXS5maWx0ZXJLZXlzLnNvbWUoKGVsdCkgPT5cbiAgICAgICAgICBgJHtvcHRpb25WYWx1ZVtlbHRdLnRvTG93ZXJDYXNlKCl9YC5pbmNsdWRlcyhgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWApXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvL0VuZCBCZWxvbmdUb01hbnlcblxuICBvbkNyZWF0ZSgpIHtcbiAgICBsZXQgZGF0YXM7XG4gICAgY29uc3QgbXNnID0ge1xuICAgICAgbGFiZWw6IGBtc2ctYWRkaW5nLXN1Y2Nlc3NgLFxuICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gdGhpcy5mb3JtLnZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZvcm0nLCB0aGlzLmZvcm0udmFsdWUpO1xuXG4gICAgY29uc3QgX2JvZHkgPSB0aGlzLnJlc291cmNlLmFkZENvbmZpZy5ib2R5O1xuXG4gICAgaWYgKHRoaXMucmVzb3VyY2UuaGFzRmlsZSkge1xuICAgICAgZGF0YXMgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaDogUmVzdEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZChcbiAgICAgICAgICAoZWx0KSA9PiBlbHQubmFtZSA9PSBrZXlcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2VhcmNoICYmIGZvcm1EYXRhW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHN3aXRjaCAoc2VhcmNoLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5EQVRFOlxuICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIGAke21vbWVudChmb3JtRGF0YVtrZXldKS5mb3JtYXQoJ1lZWVktTU0tREQnKX1gXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkpTT046XG4gICAgICAgICAgICAgIGxldCBqc29uRmllbGRzID0ge307XG4gICAgICAgICAgICAgIGlmICh0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICB0eXBlb2YgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheSh0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0pXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0ubWFwKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlbHQgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICAgICAgZWx0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgZWx0LmxhYmVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgZWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIGpzb25GaWVsZHMgPSB7IC4uLmpzb25GaWVsZHMsIFtlbHQubGFiZWxdOiBlbHQudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoYCR7a2V5fVske2VsdC5sYWJlbH1dYCwgZWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yOiBJbnZhbGlkIGVsZW1lbnQgaW4ganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XTogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWx0XG4gICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYEVycm9yOiBJbnZhbGlkIHR5cGUgb2YganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XTogJHt0eXBlb2YgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgIC5qc29uRWRpdG9yT3B0aW9uc1trZXldfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBNaXNzaW5nIGpzb25FZGl0b3JPcHRpb25zWyR7a2V5fV1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOOlxuICAgICAgICAgICAgICBpZiAoc2VhcmNoLm1ldGFEYXRhPy5udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGRhdGFzLmFwcGVuZChrZXksIDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCkgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLlBERjpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwpIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5GSUxFOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCkgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgLy8gaWYgKHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fCBzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHwgc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuUEFTU1dPUkQpXG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSAnJyAmJiBmb3JtRGF0YVtrZXldICE9PSBudWxsKVxuICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgT2JqZWN0LmtleXMoX2JvZHkpLm1hcCgoa2V5KSA9PiB7XG4gICAgICAgIGRhdGFzLmFwcGVuZChrZXksIF9ib2R5W2tleV0pO1xuICAgICAgfSk7XG4gICAgICAvLyBBZGQgbWFwIHR5cGU7XG4gICAgICBjb25zdCBtYXBGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbHRlcihcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5NQVBcbiAgICAgICk7XG4gICAgICBtYXBGaWVsZC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgIFtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXSxcbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXVxuICAgICAgICApO1xuICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXSxcbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YWIgPSB7fTtcbiAgICAgIE9iamVjdC5rZXlzKGZvcm1EYXRhKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaDogUmVzdEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZChcbiAgICAgICAgICAoZWx0KSA9PiBlbHQubmFtZSA9PSBrZXlcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHNlYXJjaCkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNba2V5XSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICBmb3JtRGF0YVtrZXldICE9PSAnJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdGFiW2tleV0gPSBmb3JtRGF0YVtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIC8vIEFkZCBtYXAgdHlwZTtcbiAgICAgIGNvbnN0IG1hcEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFxuICAgICAgKTtcbiAgICAgIG1hcEZpZWxkLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICB0YWJbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF0gPVxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdO1xuICAgICAgICB0YWJbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdID1cbiAgICAgICAgICBmb3JtRGF0YVtlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF07XG4gICAgICB9KTtcblxuICAgICAgZGF0YXMgPSB7IC4uLnRhYiwgLi4uX2JvZHkgfTtcbiAgICB9XG5cbiAgICBjb25zdCBzYXZlQmVsb25nVG9tYW55ID0gW107XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkcy5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgIGlmIChlbHQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZKSB7XG4gICAgICAgIHNhdmVCZWxvbmdUb21hbnkucHVzaCh7XG4gICAgICAgICAgcmVzb3VyY2VzOiBkYXRhc1tlbHQubmFtZV0sXG4gICAgICAgICAgcGl2b3Q6IGVsdC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5waXZvdE5hbWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zZXJ2aWNlUmVzdC5hZGRSZXNvdXJjZXModGhpcy5yZXNvdXJjZS5hZGRDb25maWcsIGRhdGFzKS5zdWJzY3JpYmUoXG4gICAgICAocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2F2ZUJlbG9uZ1RvbWFueS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID1cbiAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoZWxlbWVudC5waXZvdCk7XG4gICAgICAgICAgICBjb25zdCBwcm9tcyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbWVudC5yZXNvdXJjZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dOiBpdGVtW2l0ZW1bJ3NhdmVSZWxhdGVkSWROYW1lJ11dLFxuICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIHByb21zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgICAgLmFkZFJlc291cmNlcyhyZXN0UmVzb3VyY2UuYWRkQ29uZmlnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFByb21pc2UuYWxsKHByb21zKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGluZGV4ID09IHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5zdWNjZXNzVG9hc3QobXNnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWQsXG4gICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgYC9hZG1pbi8ke3RoaXMucmVzc291cmNlTmFtZX0tZGV0YWlsYCxcbiAgICAgICAgICAgIHJlc3BvbnNlLmlkLFxuICAgICAgICAgIF0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICBjb25zdCBtc2dFcnJvciA9IHtcbiAgICAgICAgICBsYWJlbDogYG1zZy1hZGRpbmctZXJyb3JgLFxuICAgICAgICAgIHJlc291cmNlTmFtZTogdGhpcy5yZXNzb3VyY2VOYW1lLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmRhbmdlclRvYXN0KG1zZ0Vycm9yKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgb25FZGl0KCkge1xuICAgIGNvbnN0IG1zZyA9IHtcbiAgICAgIGxhYmVsOiBgbXNnLXVwZGF0aW5nLXN1Y2Nlc3NgLFxuICAgICAgcmVzb3VyY2VOYW1lOiB0aGlzLnJlc3NvdXJjZU5hbWUsXG4gICAgfTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGxldCBkYXRhcztcbiAgICBjb25zdCBmb3JtRGF0YSA9IHRoaXMuZm9ybS52YWx1ZTtcbiAgICBjb25zdCBfYm9keSA9IHRoaXMucmVzb3VyY2UuZWRpdENvbmZpZy5ib2R5O1xuICAgIGlmICh0aGlzLnJlc291cmNlLmhhc0ZpbGUpIHtcbiAgICAgIGRhdGFzID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICBPYmplY3Qua2V5cyhmb3JtRGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2g6IFJlc3RGaWVsZCA9IHRoaXMucmVzb3VyY2UuZmllbGRzLmZpbmQoXG4gICAgICAgICAgKGVsdCkgPT4gZWx0Lm5hbWUgPT0ga2V5XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHNlYXJjaCAmJiBmb3JtRGF0YVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBzd2l0Y2ggKHNlYXJjaC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuREFURTpcbiAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICBgJHttb21lbnQoZm9ybURhdGFba2V5XSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9YFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5KU09OOlxuICAgICAgICAgICAgICBsZXQganNvbkZpZWxkcyA9IHt9O1xuICAgICAgICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmpzb25FZGl0b3JPcHRpb25zW2tleV0ubWFwKChlbHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBlbHQgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgICAgICAgZWx0ICE9PSBudWxsICYmXG4gICAgICAgICAgICAgICAgICAgICAgZWx0LmxhYmVsICYmXG4gICAgICAgICAgICAgICAgICAgICAgZWx0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIGpzb25GaWVsZHMgPSB7IC4uLmpzb25GaWVsZHMsIFtlbHQubGFiZWxdOiBlbHQudmFsdWUgfTtcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoYCR7a2V5fVske2VsdC5sYWJlbH1dYCwgZWx0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZWx0LmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoYCR7a2V5fVske2VsdC5sYWJlbH1dYCwgJycpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yOiBJbnZhbGlkIGVsZW1lbnQgaW4ganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XTogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZWx0XG4gICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgYEVycm9yOiBJbnZhbGlkIHR5cGUgb2YganNvbkVkaXRvck9wdGlvbnNbJHtrZXl9XTogJHt0eXBlb2YgdGhpc1xuICAgICAgICAgICAgICAgICAgICAgIC5qc29uRWRpdG9yT3B0aW9uc1trZXldfWBcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yOiBNaXNzaW5nIGpzb25FZGl0b3JPcHRpb25zWyR7a2V5fV1gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOOlxuICAgICAgICAgICAgICBpZiAoc2VhcmNoLm1ldGFEYXRhPy5udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGRhdGFzLmFwcGVuZChrZXksIDApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFzLmFwcGVuZChrZXksIGZvcm1EYXRhW2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLklNQUdFOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCAmJiB0aGlzLmlzRmlsZShmb3JtRGF0YVtrZXldKSlcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuUERGOlxuICAgICAgICAgICAgICBpZiAoZm9ybURhdGFba2V5XSAhPT0gbnVsbCAmJiB0aGlzLmlzRmlsZShmb3JtRGF0YVtrZXldKSlcbiAgICAgICAgICAgICAgICBkYXRhcy5hcHBlbmQoa2V5LCBmb3JtRGF0YVtrZXldKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgICAgICAgaWYgKGZvcm1EYXRhW2tleV0gIT09IG51bGwgJiYgdGhpcy5pc0ZpbGUoZm9ybURhdGFba2V5XSkpXG4gICAgICAgICAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgLy8gaWYgKHNlYXJjaC50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fCBzZWFyY2gudHlwZSA9PT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVIgfHwgc2VhcmNoLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuUEFTU1dPUkQpXG4gICAgICAgICAgICAgIGlmIChmb3JtRGF0YVtrZXldICE9PSAnJykgZGF0YXMuYXBwZW5kKGtleSwgZm9ybURhdGFba2V5XSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBPYmplY3Qua2V5cyhfYm9keSkubWFwKChrZXkpID0+IHtcbiAgICAgICAgZGF0YXMuYXBwZW5kKGtleSwgX2JvZHlba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIC8vIEFkZCBtYXAgdHlwZTtcbiAgICAgIGNvbnN0IG1hcEZpZWxkID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmlsdGVyKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS50eXBlID09PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFxuICAgICAgKTtcbiAgICAgIG1hcEZpZWxkLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgICBkYXRhcy5hcHBlbmQoXG4gICAgICAgICAgW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdLFxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxhdHRpdWRlS2V5RmllbGRdXG4gICAgICAgICk7XG4gICAgICAgIGRhdGFzLmFwcGVuZChcbiAgICAgICAgICBbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubG9uZ2l0dWRlS2V5RmllbGRdLFxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYiA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoZm9ybURhdGEpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoOiBSZXN0RmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKFxuICAgICAgICAgIChlbHQpID0+IGVsdC5uYW1lID09IGtleVxuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgc2VhcmNoICYmXG4gICAgICAgICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1trZXldICE9PSBudWxsICYmXG4gICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgZm9ybURhdGFba2V5XSAhPT0gJydcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFiW2tleV0gPSBmb3JtRGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQWRkIG1hcCB0eXBlO1xuICAgICAgY29uc3QgbWFwRmllbGQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IFJFU1RfRklFTERfVFlQRVMuTUFQXG4gICAgICApO1xuICAgICAgbWFwRmllbGQuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICAgIHRhYltlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sYXR0aXVkZUtleUZpZWxkXSA9XG4gICAgICAgICAgZm9ybURhdGFbZWx0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZF07XG4gICAgICAgIHRhYltlbHQubWV0YURhdGEuYWRkQ29uZmlnLm1hcENvbmZpZy5sb25naXR1ZGVLZXlGaWVsZF0gPVxuICAgICAgICAgIGZvcm1EYXRhW2VsdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkXTtcbiAgICAgIH0pO1xuICAgICAgZGF0YXMgPSB7IC4uLnRhYiwgLi4uX2JvZHkgfTtcbiAgICB9XG4gICAgY29uc3Qgc2F2ZUJlbG9uZ1RvbWFueSA9IFtdO1xuXG4gICAgdGhpcy5yZXNvdXJjZS5maWVsZHMuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoZWx0LnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWSkge1xuICAgICAgICBzYXZlQmVsb25nVG9tYW55LnB1c2goe1xuICAgICAgICAgIHJlc291cmNlczogZGF0YXNbZWx0Lm5hbWVdLFxuICAgICAgICAgIHBpdm90OiBlbHQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucGl2b3ROYW1lLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNlcnZpY2VSZXN0XG4gICAgICAuZWRpdFJlc291cmNlcyhcbiAgICAgICAgdGhpcy5yZXNvdXJjZS5lZGl0Q29uZmlnLFxuICAgICAgICB0aGlzLnJlc291cmNlLmhhc0ZpbGUsXG4gICAgICAgIGRhdGFzLFxuICAgICAgICB0aGlzLmZvcm1TdGF0ZS5pZEVudGl0eVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICBpZiAoc2F2ZUJlbG9uZ1RvbWFueS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzYXZlQmVsb25nVG9tYW55LmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoZWxlbWVudC5waXZvdCk7XG4gICAgICAgICAgICAgIGNvbnN0IHByb21zID0gW107XG5cbiAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1lbnQucmVzb3VyY2VzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50LnJlc291cmNlc1tpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXTogaXRlbVtpdGVtWydzYXZlUmVsYXRlZElkTmFtZSddXSxcbiAgICAgICAgICAgICAgICAgIFtpdGVtWydzYXZlUmVzb3VyY2VJZE5hbWUnXV06IHJlc3BvbnNlLmlkLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBwcm9tcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdFxuICAgICAgICAgICAgICAgICAgICAuYWRkUmVzb3VyY2VzKHJlc3RSZXNvdXJjZS5hZGRDb25maWcsIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBQcm9taXNlLmFsbChwcm9tcykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IHNhdmVCZWxvbmdUb21hbnkubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLnN1Y2Nlc3NUb2FzdChtc2cpO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1xuICAgICAgICAgICAgICAgICAgICBgL2FkbWluLyR7dGhpcy5yZXNzb3VyY2VOYW1lfS1kZXRhaWxgLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1TdGF0ZS5pZEVudGl0eSxcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uuc3VjY2Vzc1RvYXN0KG1zZyk7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXG4gICAgICAgICAgICAgIGAvYWRtaW4vJHt0aGlzLnJlc3NvdXJjZU5hbWV9LWRldGFpbGAsXG4gICAgICAgICAgICAgIHRoaXMuZm9ybVN0YXRlLmlkRW50aXR5LFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIGNvbnN0IG1zZ0Vycm9yID0ge1xuICAgICAgICAgICAgbGFiZWw6IGBtc2ctdXBkYXRpbmctZmFpbGAsXG4gICAgICAgICAgICByZXNvdXJjZU5hbWU6IHRoaXMucmVzc291cmNlTmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5kYW5nZXJUb2FzdChtc2dFcnJvcik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBpc0ZpbGUodmFyaWFibGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09PSAnb2JqZWN0JyAmJiB2YXJpYWJsZSBpbnN0YW5jZW9mIEZpbGU7XG4gIH1cblxuICBkb3dubG9hZFRlbXBsYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVubXM6IGFueSA9IHt9O1xuICAgIGNvbnN0IHNoZWV0SGVhZGVyID0ge307XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuXG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW5tcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdLCBpbmRleCkgPT4ge1xuICAgICAgc2hlZXRIZWFkZXJbdGhpcy5hbHBoYWJlbHRbaW5kZXhdXSA9IGtleTtcbiAgICB9KTtcbiAgICBjb25zdCBlZGF0YTogQXJyYXk8YW55PiA9IFtdO1xuICAgIGNvbnN0IHVkdDogYW55ID0ge1xuICAgICAgZGF0YTogW1xuICAgICAgICBzaGVldEhlYWRlciwgLy8gdGFibGUgaGVhZGVyXG4gICAgICBdLFxuICAgICAgc2tpcEhlYWRlcjogdHJ1ZSxcbiAgICB9O1xuICAgIGVkYXRhLnB1c2godWR0KTtcbiAgICB0aGlzLmV4cG9ydFNlcnZpY2UuZXhwb3J0VG9FeGNlbChlZGF0YSwgJ3Jlc3RfZmlsZV90ZW1wbGF0ZV9kYXRhJyk7XG4gIH1cblxuICBpbXBvcnREYXRhKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IHRoaXMuZGlhbG9nU2VydmljZS5vcGVuKFVwbG9hZEZpbGVDb21wb25lbnQsIHt9KTtcbiAgICBkaWFsb2cub25DbG9zZS5zdWJzY3JpYmUoKHJlc3ApID0+IHtcbiAgICAgIGlmIChyZXNwKSB0aGlzLnNvdXJjZSA9IG5ldyBMb2NhbERhdGFTb3VyY2UocmVzcCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hdFRhYmxlQ29sdW1ucygpIHtcbiAgICBjb25zdCBjb2x1bm1zOiBhbnkgPSB7fTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc291cmNlLmZpZWxkcyk7XG5cbiAgICB0aGlzLnJlc291cmNlLmZpZWxkc1xuICAgICAgLmZpbHRlcigoaXRlbSkgPT4gdGhpcy5yZXNvdXJjZS5saXN0Q29uZmlnLmNvbHVtbnMuaW5jbHVkZXMoaXRlbS5uYW1lKSlcbiAgICAgIC5mb3JFYWNoKChlbHQpID0+IHtcbiAgICAgICAgY29sdW5tc1tlbHQubmFtZV0gPSB7XG4gICAgICAgICAgdGl0bGU6IGVsdC5sYWJlbCxcbiAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICBmaWx0ZXI6IGZhbHNlLFxuICAgICAgICAgIGFkZGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWVQcmVwYXJlRnVuY3Rpb246IChjZWxsLCByb3cpID0+ICh7XG4gICAgICAgICAgICByZXN0RmllbGQ6IGVsdCxcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByb3csXG4gICAgICAgICAgfSksXG4gICAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiAnY3VzdG9tJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVuZGVyQ29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICByZXR1cm4gY29sdW5tcztcbiAgfVxuXG4gIG9uU3VtYml0KCkge1xuICAgIGlmICh0aGlzLmZvcm1TdGF0ZS5pc0FkZCkgdGhpcy5vbkNyZWF0ZSgpO1xuICAgIGVsc2UgdGhpcy5vbkVkaXQoKTtcbiAgfVxuXG4gIGFkZEpTT05GaWVsZChldmVudCkge1xuICAgIHRoaXMuanNvbkVkaXRvck9wdGlvbnNbZXZlbnQubmFtZV0ucHVzaCh7XG4gICAgICBsYWJlbDogJycsXG4gICAgICB2YWx1ZTogJycsXG4gICAgICBhZGQ6IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVKU09ORmllbGQoZXZlbnQsIGluZGV4KSB7XG4gICAgdGhpcy5qc29uRWRpdG9yT3B0aW9uc1tldmVudC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG5cbiAgb25Nb3JwaFNlbGVjdEZpZWxkKGV2ZW50LCBmaWVsZCkge1xuICAgIGNvbnN0IHJlc3NvdXJjZXMgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShldmVudCk7XG4gICAgY29uc3QgZmllbGRDb25maWcgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKChlbHQpID0+IGVsdC5uYW1lID09IGZpZWxkKTtcblxuICAgIHRoaXMuc2VydmljZVJlc3RcbiAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICBhcGk6IHJlc3NvdXJjZXMuYXBpLFxuICAgICAgICBxdWVyeVBhcmFtczogZmllbGRDb25maWcubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgPyBmaWVsZENvbmZpZy5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWcucXVlcnlQYXJhbXNcbiAgICAgICAgICA6IHt9LFxuICAgICAgfSlcbiAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5vcHRpb25zW2ZpZWxkXSA9IHJlc3BvbnNlO1xuICAgICAgICB0aGlzLmFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkXSA9IG9mKHRoaXMub3B0aW9uc1tmaWVsZF0pO1xuICAgICAgfSk7XG4gIH1cblxuICBvbkxhdENoYW5nZSh2YWx1ZSwgZmllbGROYW1lKSB7XG4gICAgY29uc3QgZmllbGRMYXQgPSB0aGlzLnJlc291cmNlLmZpZWxkcy5maW5kKChlbHQpID0+IGVsdC5uYW1lID09IGZpZWxkTmFtZSk7XG4gICAgY29uc3QgbmFtZSA9IGZpZWxkTGF0Lm1ldGFEYXRhLmFkZENvbmZpZy5tYXBDb25maWcubGF0dGl1ZGVLZXlGaWVsZDtcblxuICAgIHRoaXMuZm9ybS5wYXRjaFZhbHVlKHtcbiAgICAgIFtuYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cbiAgb25MbmdDaGFuZ2UodmFsdWUsIGZpZWxkTmFtZSkge1xuICAgIGNvbnN0IGZpZWxkTGF0ID0gdGhpcy5yZXNvdXJjZS5maWVsZHMuZmluZCgoZWx0KSA9PiBlbHQubmFtZSA9PSBmaWVsZE5hbWUpO1xuICAgIGNvbnN0IG5hbWUgPSBmaWVsZExhdC5tZXRhRGF0YS5hZGRDb25maWcubWFwQ29uZmlnLmxvbmdpdHVkZUtleUZpZWxkO1xuXG4gICAgdGhpcy5mb3JtLnBhdGNoVmFsdWUoe1xuICAgICAgW25hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA8PSAwXCI+XG4gIDxuYi1jYXJkPlxuICAgIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5ICYmICFmb3JtU3RhdGUuaXNBZGRcIlxuICAgICAgPnt7IHJlc291cmNlLmVkaXRDb25maWcudGl0bGUgfX1cbiAgICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gICAgPG5iLWNhcmQtaGVhZGVyICpuZ0lmPVwiZm9ybVN0YXRlLm9uUmVhZHkgJiYgZm9ybVN0YXRlLmlzQWRkXCJcbiAgICAgID57eyByZXNvdXJjZS5hZGRDb25maWcudGl0bGUgfX1cbiAgICA8L25iLWNhcmQtaGVhZGVyPlxuXG4gICAgPG5iLWNhcmQtYm9keT5cbiAgICAgIDxuYi10YWJzZXQgZnVsbFdpZHRoPlxuICAgICAgICA8bmItdGFiIHRhYlRpdGxlPVwiQWpvdXQgc2ltcGxlXCI+XG4gICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5XCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgIGxldCBmaWVsZCBvZiByZXNvdXJjZS5maWVsZHM7XG4gICAgICAgICAgICAgICAgdHJhY2tCeTogdHJhY2tCeUZuO1xuICAgICAgICAgICAgICAgIGxldCBpID0gaW5kZXhcbiAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtMTJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuaW5Gb3JtXCI+XG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHN0cmluZyAgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HIHx8XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfT05FXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgdGV4dCAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRFWFRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuUEFTU1dPUkRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnM/LmlzTmVlZENvbmZpcm1cbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LnBhc3N3b3JkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICA/LmNvbmZpcm1MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uY29uZmlybUxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogKGZpZWxkLmxhYmVsICsgXCJfY29uZmlybWF0aW9uXCIgfCB0aXRsZWNhc2UpXG4gICAgICAgICAgICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbCArICdfY29uZmlybWF0aW9uJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5wYXNzd29yZE9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmNvbmZpcm1GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLnBhc3N3b3JkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uZmlybUZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5uYW1lICsgJ19jb25maXJtYXRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIG51bWJlciAgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVJcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBkYXRlIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbbmJEYXRlcGlja2VyXT1cImZvcm1waWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPG5iLWRhdGVwaWNrZXIgI2Zvcm1waWNrZXI+PC9uYi1kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGRhdGVUaW1lIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuREFURVRJTUVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbbmJEYXRlcGlja2VyXT1cImRhdGVUaW1lUGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bmItZGF0ZS10aW1lcGlja2VyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhTZWNvbmRzXG4gICAgICAgICAgICAgICAgICAgICNkYXRlVGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgPjwvbmItZGF0ZS10aW1lcGlja2VyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHRpbWUgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5USU1FXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBbbmJUaW1lcGlja2VyXT1cInRpbWVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIHR3ZWx2ZUhvdXJzRm9ybWF0XG4gICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlcj48L25iLXRpbWVwaWNrZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgZW51bSAtLT5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPG5iLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmVudW1PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9uYi1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgYm9vbGVhbiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU5cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAwLjVlbVwiPnt7XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQubGFiZWwgfCB0aXRsZWNhc2VcbiAgICAgICAgICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIFtuYW1lXT1cImZpZWxkLm5hbWVcIiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPG5iLXRvZ2dsZSBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIj48L25iLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGZpbGUgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRklMRSB8fFxuICAgICAgICAgICAgICAgICAgICBmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuUERGXG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogZGFzaGVkOyBkaXNwbGF5OiBmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tZHJvcHpvbmUgZm9ybS1jb250cm9sLWN1c3RvbSByb3VuZGVkIG0tMlwiXG4gICAgICAgICAgICAgICAgICAgIG5neC1kcm9wem9uZVxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxzSW1hZ2VbZmllbGQubmFtZV0gIT0gJycgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInVybHNJbWFnZVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20taW1nLWRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImNsb3VkLXVwbG9hZC1vdXRsaW5lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAyZW07IGNvbG9yOiAjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIERyYWcgYW5kIGRyb3AgZmlsZXMgaGVyZSBvciBjbGljayB0byB1cGxvYWRcbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgbmdQcm9qZWN0QXM9XCJuZ3gtZHJvcHpvbmUtcHJldmlld1wiXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsZXNVcGxvYWRbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIFtmaWxlXT1cImZcIlxuICAgICAgICAgICAgICAgICAgICAgIFtyZW1vdmFibGVdPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgID57eyBmLm5hbWUgfX0gKHt7IGYudHlwZSB9fSk8L25neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3JkZXI6IGRhc2hlZDsgZGlzcGxheTogZmxleFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWRyb3B6b25lIGZvcm0tY29udHJvbC1jdXN0b20gcm91bmRlZCBtLTJcIlxuICAgICAgICAgICAgICAgICAgICBuZ3gtZHJvcHpvbmVcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblNlbGVjdCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdICE9ICcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJ1cmxzSW1hZ2VbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWltZy1kcm9wem9uZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdID09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2xvdWQtdXBsb2FkLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDJlbTsgY29sb3I6ICNjY2NcIlxuICAgICAgICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgZHJvcCBmaWxlcyBoZXJlIG9yIGNsaWNrIHRvIHVwbG9hZFxuICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1sYWJlbD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICA+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICBuZ1Byb2plY3RBcz1cIm5neC1kcm9wem9uZS1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgZiBvZiBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZlwiXG4gICAgICAgICAgICAgICAgICAgICAgW3JlbW92YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAocmVtb3ZlZCk9XCJvblJlbW92ZShmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXc+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPC9uZy1jb250YWluZXI+IC0tPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgIWlzQ3JvcFtmaWVsZC5uYW1lXSAmJiBjb250cm9sQ3JvcGVyW2ZpZWxkLm5hbWVdICE9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFjdGl2ZUNyb3BlcihmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDUk9QXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ3JvcFtmaWVsZC5uYW1lXVwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UtY3JvcHBlclxuICAgICAgICAgICAgICAgICAgICAgIFtpbWFnZUZpbGVdPVwiY29udHJvbENyb3BlcltmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgW21haW50YWluQXNwZWN0UmF0aW9dPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2FzcGVjdFJhdGlvXT1cIjQgLyAzXCJcbiAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ9XCJwbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIChpbWFnZUNyb3BwZWQpPVwiaW1hZ2VDcm9wcGVkKCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW1hZ2UtY3JvcHBlcj5cblxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2F2ZUNyb3BlcihmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU0FWRSBDSEFOR0VcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImRlc2FjdGl2ZUNyb3AoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIDxpbWcgW3NyY109XCJjcm9wcGVkSW1hZ2VcIiAvPiAtLT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBoYXNNYW55IC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkhBU19NQU5ZXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0XG4gICAgICAgICAgICAgICAgICAgICh0YWdSZW1vdmUpPVwib25UYWdSZW1vdmUoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bmItdGFnXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgcmVtb3ZhYmxlXG4gICAgICAgICAgICAgICAgICAgID48L25iLXRhZz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICh0YWdBZGQpPVwib25UYWdBZGQoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGJlbG9uZ190byAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC05XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAjYXV0b0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImF1dG9Db21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICFmaWVsZC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LnNlY29uZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC0zXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmVsb25nVG9WYWx1ZVtmaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYmVsb25nVG9WYWx1ZVtmaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaSArIDEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPG5iLWF1dG9jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAjYXV0b0NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gfCBhc3luY1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnM/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBiZWxvbmdfdG9fbWFueSAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudCwgZmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBiZWxvbmdUb01hbnlbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJlZVtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgI2F1dG9CZWxvbmdUb01hbnlcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbbmJBdXRvY29tcGxldGVdPVwiYmVsb25nVG9GaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcklucHV0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuXG4gICAgICAgICAgICAgICAgICA8bmItYXV0b2NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICNiZWxvbmdUb0ZpZWxkXG4gICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvbkNob29zZSgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV0gfCBhc3luY1xuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbmItb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgY29sb3IgIC0tPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJoZWlnaHQ6IDQ1cHhcIlxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGxpbmsgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5MSU5LXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIDxkaXZcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgIGZvcm0uZ2V0KFtmaWVsZC5uYW1lXSkuaGFzRXJyb3IoJ2ludmFsaWRVcmwnKSAmJlxuICAgICAgICAgICAgICAgICAgICBmb3JtLmdldChbZmllbGQubmFtZV0pLnRvdWNoZWRcbiAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtZXJyb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHt7IFwicmVzdC1hZGQuaW52YWxpZC1saW5rXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgSlNPTiAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkpTT05cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmVcbiAgICAgICAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmpzb25Db25maWcuaXNPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWRkSlNPTkZpZWxkKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1c1wiIHBhY2s9XCJmYXNcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3cgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtIG9mIGpzb25FZGl0b3JPcHRpb25zW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiBbaWRdPVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpdGVtLmFkZDsgZWxzZSBlbHNlQmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInsgc3RhbmRhbG9uZTogdHJ1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAqbmdJZj1cIml0ZW0uYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcGU9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJyZW1vdmVKU09ORmllbGQoZmllbGQsIGluZGV4KVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLWljb24gaWNvbj1cInRyYXNoLWFsdFwiIHBhY2s9XCJmYXNcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgTU9SUEggLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5NT1JQSFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlJlc3NvdXJjZXM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vcnBoU2VsZWN0RmllbGQoJGV2ZW50LCBmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVsYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICNhdXRvSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmJBdXRvY29tcGxldGVdPVwiYXV0b0NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXJJbnB1dCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICNhdXRvQ29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLm1vcnBoQ29uZmlnPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLm1vcnBoQ29uZmlnPy52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBHT09HTEVNQVAgLS0+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5NQVBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPG5neC1nbWFwc1xuICAgICAgICAgICAgICAgICAgICAobGF0Q2hhbmdlKT1cIm9uTGF0Q2hhbmdlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAobG5nQ2hhbmdlKT1cIm9uTG5nQ2hhbmdlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICBbZ29vZ2xlTWFwS2V5XT1cImdvb2dsZU1hcEtleXNcIlxuICAgICAgICAgICAgICAgICAgPjwvbmd4LWdtYXBzPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLm5vdGUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1tdXRlZCBtbC0yMCBtdC0zXCI+e3sgZmllbGQubm90ZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvbmItdGFiPlxuICAgICAgICA8bmItdGFiIHRhYlRpdGxlPVwiSW1wb3J0YXRpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBbbmJDb250ZXh0TWVudV09XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHQtYWRkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt7IFwicmVzdC1hZGQuaW1wb3J0XCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bmcyLXNtYXJ0LXRhYmxlIFtzZXR0aW5nc109XCJzZXR0aW5nc1wiIFtzb3VyY2VdPVwic291cmNlXCI+XG4gICAgICAgICAgICA8L25nMi1zbWFydC10YWJsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYi10YWI+XG4gICAgICA8L25iLXRhYnNldD5cbiAgICA8L25iLWNhcmQtYm9keT5cblxuICAgIDxuYi1jYXJkLWZvb3Rlcj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zLXJvd1wiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAoY2xpY2spPVwib25TdW1iaXQoKVwiXG4gICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPlxuICAgICAgICAgIDwhLS0gW2Rpc2FibGVkXT1cImxvYWRpbmdcIiAtLT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgKm5nSWY9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXG4gICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICB7eyBmb3JtU3RhdGUuYnRuTGFiZWwgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L25iLWNhcmQtZm9vdGVyPlxuICA8L25iLWNhcmQ+XG48L25nLWNvbnRhaW5lcj5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlc291cmNlLnBlcm1pc3Npb25zLmxlbmd0aCA+IDBcIj5cbiAgPGRpdiAqbmd4UGVybWlzc2lvbnNPbmx5PVwicGVybWlzc2lvbnNcIj5cbiAgICA8bmItY2FyZD5cbiAgICAgIDxuYi1jYXJkLWhlYWRlciAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5ICYmICFmb3JtU3RhdGUuaXNBZGRcIlxuICAgICAgICA+e3sgcmVzb3VyY2UuZWRpdENvbmZpZy50aXRsZSB9fVxuICAgICAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICAgICAgPG5iLWNhcmQtaGVhZGVyICpuZ0lmPVwiZm9ybVN0YXRlLm9uUmVhZHkgJiYgZm9ybVN0YXRlLmlzQWRkXCJcbiAgICAgICAgPnt7IHJlc291cmNlLmFkZENvbmZpZy50aXRsZSB9fVxuICAgICAgPC9uYi1jYXJkLWhlYWRlcj5cblxuICAgICAgPG5iLWNhcmQtYm9keT5cbiAgICAgICAgPG5iLXRhYnNldCBmdWxsV2lkdGg+XG4gICAgICAgICAgPG5iLXRhYiB0YWJUaXRsZT1cIkFqb3V0IHNpbXBsZVwiPlxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImZvcm1TdGF0ZS5vblJlYWR5XCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgIGxldCBmaWVsZCBvZiByZXNvdXJjZS5maWVsZHM7XG4gICAgICAgICAgICAgICAgICB0cmFja0J5OiB0cmFja0J5Rm47XG4gICAgICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4XG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNvbC0xMlwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuaW5Gb3JtXCI+XG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgc3RyaW5nICAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklORyB8fFxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfT05FXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHRleHQgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBBU1NXT1JEXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8uaXNOZWVkQ29uZmlybVxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWc/LnBhc3N3b3JkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uY29uZmlybUxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8ucGFzc3dvcmRPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8uY29uZmlybUxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAoZmllbGQubGFiZWwgKyBcIl9jb25maXJtYXRpb25cIiB8IHRpdGxlY2FzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWwgKyAnX2NvbmZpcm1hdGlvbidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xOYW1lXT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhPy5hZGRDb25maWc/LnBhc3N3b3JkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPy5jb25maXJtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLnBhc3N3b3JkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25maXJtRmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubmFtZSArICdfY29uZmlybWF0aW9uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIG51bWJlciAgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVJcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGRhdGUgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuYkRhdGVwaWNrZXJdPVwiZm9ybXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5iLWRhdGVwaWNrZXIgI2Zvcm1waWNrZXI+PC9uYi1kYXRlcGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBkYXRlVGltZSAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVUSU1FXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIFtuYkRhdGVwaWNrZXJdPVwiZGF0ZVRpbWVQaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxuYi1kYXRlLXRpbWVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICB3aXRoU2Vjb25kc1xuICAgICAgICAgICAgICAgICAgICAgICNkYXRlVGltZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICA+PC9uYi1kYXRlLXRpbWVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIHRpbWUgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5USU1FXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIFtuYlRpbWVwaWNrZXJdPVwidGltZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0d2VsdmVIb3Vyc0Zvcm1hdFxuICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPG5iLXRpbWVwaWNrZXIgI3RpbWVwaWNrZXI+PC9uYi10aW1lcGlja2VyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBlbnVtIC0tPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRU5VTVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwiZmllbGQubGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb24gb2YgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmVudW1PcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9uYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvbmItc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBib29sZWFuIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBzdHlsZT1cIm1hcmdpbi1yaWdodDogMC41ZW1cIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubGFiZWwgfCB0aXRsZWNhc2VcbiAgICAgICAgICAgICAgICAgICAgICB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSBbbmFtZV09XCJmaWVsZC5uYW1lXCIgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLXRvZ2dsZSBbZm9ybUNvbnRyb2xOYW1lXT1cImZpZWxkLm5hbWVcIj48L25iLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIGZpbGUgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIlxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5GSUxFIHx8XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBERlxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiYm9yZGVyOiBkYXNoZWQ7IGRpc3BsYXk6IGZsZXhcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWRyb3B6b25lIGZvcm0tY29udHJvbC1jdXN0b20gcm91bmRlZCBtLTJcIlxuICAgICAgICAgICAgICAgICAgICAgIG5neC1kcm9wem9uZVxuICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25TZWxlY3QoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdICE9ICcnICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbc3JjXT1cInVybHNJbWFnZVtmaWVsZC5uYW1lXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1pbWctZHJvcHpvbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWxhYmVsXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdLmxlbmd0aCA8PSAwXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiY2xvdWQtdXBsb2FkLW91dGxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImZvbnQtc2l6ZTogMmVtOyBjb2xvcjogI2NjY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9uYi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgZHJvcCBmaWxlcyBoZXJlIG9yIGNsaWNrIHRvIHVwbG9hZFxuICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LWRyb3B6b25lLWxhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1wcmV2aWV3XG4gICAgICAgICAgICAgICAgICAgICAgICBuZ1Byb2plY3RBcz1cIm5neC1kcm9wem9uZS1wcmV2aWV3XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmIG9mIGZpbGVzVXBsb2FkW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmaWxlXT1cImZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3JlbW92YWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZW1vdmVkKT1cIm9uUmVtb3ZlKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICA+e3sgZi5uYW1lIH19ICh7eyBmLnR5cGUgfX0pPC9uZ3gtZHJvcHpvbmUtbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8L25neC1kcm9wem9uZS1wcmV2aWV3PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImJvcmRlcjogZGFzaGVkOyBkaXNwbGF5OiBmbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1kcm9wem9uZSBmb3JtLWNvbnRyb2wtY3VzdG9tIHJvdW5kZWQgbS0yXCJcbiAgICAgICAgICAgICAgICAgICAgICBuZ3gtZHJvcHpvbmVcbiAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uU2VsZWN0KCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVybHNJbWFnZVtmaWVsZC5uYW1lXSAhPSAnJyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1VwbG9hZFtmaWVsZC5uYW1lXS5sZW5ndGggPD0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJ1cmxzSW1hZ2VbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20taW1nLWRyb3B6b25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgPG5neC1kcm9wem9uZS1sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoIDw9IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsc0ltYWdlW2ZpZWxkLm5hbWVdID09ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1pY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJjbG91ZC11cGxvYWQtb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiZm9udC1zaXplOiAyZW07IGNvbG9yOiAjY2NjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICBEcmFnIGFuZCBkcm9wIGZpbGVzIGhlcmUgb3IgY2xpY2sgdG8gdXBsb2FkXG4gICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxuZy1jb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmlsZXNVcGxvYWRbZmllbGQubmFtZV0ubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgICAgPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8bmd4LWRyb3B6b25lLWltYWdlLXByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIG5nUHJvamVjdEFzPVwibmd4LWRyb3B6b25lLXByZXZpZXdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmlsZXNVcGxvYWRbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2ZpbGVdPVwiZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbcmVtb3ZhYmxlXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKHJlbW92ZWQpPVwib25SZW1vdmUoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPC9uZ3gtZHJvcHpvbmUtaW1hZ2UtcHJldmlldz5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIDwvbmctY29udGFpbmVyPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICFpc0Nyb3BbZmllbGQubmFtZV0gJiYgY29udHJvbENyb3BlcltmaWVsZC5uYW1lXSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWN0aXZlQ3JvcGVyKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDUk9QXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0Nyb3BbZmllbGQubmFtZV1cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1hZ2UtY3JvcHBlclxuICAgICAgICAgICAgICAgICAgICAgICAgW2ltYWdlRmlsZV09XCJjb250cm9sQ3JvcGVyW2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFttYWludGFpbkFzcGVjdFJhdGlvXT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2FzcGVjdFJhdGlvXT1cIjQgLyAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cInBuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW1hZ2VDcm9wcGVkKT1cImltYWdlQ3JvcHBlZCgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPjwvaW1hZ2UtY3JvcHBlcj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzYXZlQ3JvcGVyKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgU0FWRSBDSEFOR0VcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPVwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkZXNhY3RpdmVDcm9wKGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGltZyBbc3JjXT1cImNyb3BwZWRJbWFnZVwiIC8+IC0tPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBoYXNNYW55IC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPnt7IGZpZWxkLmxhYmVsIHwgdGl0bGVjYXNlIH19PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG5iLXRhZy1saXN0XG4gICAgICAgICAgICAgICAgICAgICAgKHRhZ1JlbW92ZSk9XCJvblRhZ1JlbW92ZSgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi10YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0cmVlIG9mIGZvcm0uZ2V0KFtmaWVsZC5uYW1lXSkudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3RleHRdPVwidHJlZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICh0YWdBZGQpPVwib25UYWdBZGQoJGV2ZW50LCBmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9uYi10YWctbGlzdD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgYmVsb25nX3RvIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICNhdXRvSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJhdXRvQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFmaWVsZC5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnNlY29uZEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb2wtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVsb25nVG9WYWx1ZVtmaWVsZC5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBiZWxvbmdUb1ZhbHVlW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpICsgMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAjYXV0b0NvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudCwgZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnM/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmItYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBiZWxvbmdfdG9fbWFueSAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57eyBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudCwgZmllbGQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPG5iLXRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgYmVsb25nVG9NYW55W2ZpZWxkLm5hbWVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVlW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmFibGVcbiAgICAgICAgICAgICAgICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAjYXV0b0JlbG9uZ1RvTWFueVxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmJBdXRvY29tcGxldGVdPVwiYmVsb25nVG9GaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L25iLXRhZy1saXN0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAjYmVsb25nVG9GaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIChzZWxlY3RlZENoYW5nZSk9XCJvbkNob29zZSgkZXZlbnQsIGZpZWxkKVwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiBvZiBhbGxGaWx0ZXJDb250YWluc1tmaWVsZC5uYW1lXSB8IGFzeW5jXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDwvbmItYXV0b2NvbXBsZXRlPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBjb2xvciAgLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5DT0xPUlwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sb3Itcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiA0NXB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbE5hbWVdPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwhLS0gSW5wdXQgdHlwZSBsaW5rIC0tPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTElOS1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImlcIlxuICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJmaWVsZC5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS5oYXNFcnJvcignaW52YWxpZFVybCcpICYmXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXQoW2ZpZWxkLm5hbWVdKS50b3VjaGVkXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHt7IFwicmVzdC1hZGQuaW52YWxpZC1saW5rXCIgfCB0cmFuc2xhdGUgfX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgSlNPTiAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkpTT05cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXBlPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2hvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmpzb25Db25maWcuaXNPcGVuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhZGRKU09ORmllbGQoZmllbGQpXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwicGx1c1wiIHBhY2s9XCJmYXNcIj48L25iLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdyBtYi0yXCJcbiAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtIG9mIGpzb25FZGl0b3JPcHRpb25zW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIFtpZF09XCJpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXRlbS5hZGQ7IGVsc2UgZWxzZUJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpdGVtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHJpYnV0ZXNdPVwiZmllbGQubWV0YURhdGEuYXR0cmlidXRlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5iSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJpdGVtLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBuYklucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaXRlbS52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ01vZGVsT3B0aW9uc109XCJ7IHN0YW5kYWxvbmU6IHRydWUgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAqbmdJZj1cIml0ZW0uYWRkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5iQnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFwZT1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICBnaG9zdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwicmVtb3ZlSlNPTkZpZWxkKGZpZWxkLCBpbmRleClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwidHJhc2gtYWx0XCIgcGFjaz1cImZhc1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8IS0tIElucHV0IHR5cGUgTU9SUEggLS0+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5NT1JQSFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+UmVzc291cmNlczwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmItc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3JwaFNlbGVjdEZpZWxkKCRldmVudCwgZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9wdGlvbiBvZiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcubW9ycGhDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbGF0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyaWJ1dGVzXT1cImZpZWxkLm1ldGFEYXRhLmF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID57eyBvcHRpb24ubGFiZWwgfX08L25iLW9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25iLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtOVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIj57e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5sYWJlbCB8IHRpdGxlY2FzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICNhdXRvSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmJJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sTmFtZV09XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJhdXRvQ29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVySW5wdXQoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbaWRdPVwiaVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhYWxsRmlsdGVyQ29udGFpbnNbZmllbGQubmFtZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYi1hdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgI2F1dG9Db21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0ZWRDaGFuZ2UpPVwib25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50LCBmaWVsZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb3B0aW9uIG9mIGFsbEZpbHRlckNvbnRhaW5zW2ZpZWxkLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWcubW9ycGhDb25maWc/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZy5tb3JwaENvbmZpZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnaWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0cmlidXRlc109XCJmaWVsZC5tZXRhRGF0YS5hdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5tb3JwaENvbmZpZy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLm1vcnBoQ29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXJLZXlzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uYi1vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPCEtLSBJbnB1dCB0eXBlIEdPT0dMRU1BUCAtLT5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLk1BUFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+e3sgZmllbGQubGFiZWwgfCB0aXRsZWNhc2UgfX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8bmd4LWdtYXBzXG4gICAgICAgICAgICAgICAgICAgICAgKGxhdENoYW5nZSk9XCJvbkxhdENoYW5nZSgkZXZlbnQsIGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAobG5nQ2hhbmdlKT1cIm9uTG5nQ2hhbmdlKCRldmVudCwgZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgIFtnb29nbGVNYXBLZXldPVwiZ29vZ2xlTWFwS2V5c1wiXG4gICAgICAgICAgICAgICAgICAgID48L25neC1nbWFwcz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLm5vdGUgIT0gJydcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LW11dGVkIG1sLTIwIG10LTNcIj57eyBmaWVsZC5ub3RlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvbmItdGFiPlxuICAgICAgICAgIDxuYi10YWIgdGFiVGl0bGU9XCJJbXBvcnRhdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTlcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgbmJCdXR0b25cbiAgICAgICAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgW25iQ29udGV4dE1lbnVdPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgbmJDb250ZXh0TWVudVRhZz1cIm15LWNvbnRleHQtYWRkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7eyBcInJlc3QtYWRkLmltcG9ydFwiIHwgdHJhbnNsYXRlIH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxuZzItc21hcnQtdGFibGUgW3NldHRpbmdzXT1cInNldHRpbmdzXCIgW3NvdXJjZV09XCJzb3VyY2VcIj5cbiAgICAgICAgICAgICAgPC9uZzItc21hcnQtdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25iLXRhYj5cbiAgICAgICAgPC9uYi10YWJzZXQ+XG4gICAgICA8L25iLWNhcmQtYm9keT5cblxuICAgICAgPG5iLWNhcmQtZm9vdGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9ucy1yb3dcIiAqbmdJZj1cIiFmb3JtU3RhdGUuaXNBZGRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uRWRpdCgpXCJcbiAgICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmdcIlxuICAgICAgICAgICAgKm5neFBlcm1pc3Npb25zT25seT1cIlBFUk1JU1NJT04uVVBEQVRFXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAqbmdJZj1cImxvYWRpbmdcIlxuICAgICAgICAgICAgICBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIG1yLTJcIlxuICAgICAgICAgICAgPjwvc3Bhbj5cbiAgICAgICAgICAgIHt7IGZvcm1TdGF0ZS5idG5MYWJlbCB9fVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnMtcm93XCIgKm5nSWY9XCJmb3JtU3RhdGUuaXNBZGRcIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBuYkJ1dHRvblxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ3JlYXRlKClcIlxuICAgICAgICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAqbmd4UGVybWlzc2lvbnNPbmx5PVwiUEVSTUlTU0lPTi5DUkVBVEVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICpuZ0lmPVwibG9hZGluZ1wiXG4gICAgICAgICAgICAgIGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gbXItMlwiXG4gICAgICAgICAgICA+PC9zcGFuPlxuICAgICAgICAgICAge3sgZm9ybVN0YXRlLmJ0bkxhYmVsIH19XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYi1jYXJkLWZvb3Rlcj5cbiAgICA8L25iLWNhcmQ+XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+XG4iXX0=