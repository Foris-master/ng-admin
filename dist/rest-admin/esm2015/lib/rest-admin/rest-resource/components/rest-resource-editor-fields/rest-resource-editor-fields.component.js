import { Component, ViewChild } from "@angular/core";
import { FileUploadControl, FileUploadValidators, } from "@iplab/ngx-file-upload";
import { DefaultEditor } from "ng2-smart-table";
import { BehaviorSubject, of } from "rxjs";
import { map } from "rxjs/operators";
import { REST_FIELD_TYPES } from "../../models/rest-resource.model";
import { base64ToFile } from "ngx-image-cropper";
import * as _ from "lodash";
import * as i0 from "@angular/core";
import * as i1 from "../../service/rest-admin-config.service";
import * as i2 from "../../service/rest-resource.service";
import * as i3 from "@angular/common";
import * as i4 from "@nebular/theme";
import * as i5 from "@angular/forms";
import * as i6 from "@iplab/ngx-file-upload";
import * as i7 from "ngx-image-cropper";
const _c0 = ["autoInput"];
const _c1 = ["autoInputBelongToMany"];
function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r19 = i0.ɵɵnextContext(2); return ctx_r19.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r20); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r20); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r1.cell.newValue)("name", ctx_r1.cell.getId())("placeholder", ctx_r1.cell.getTitle())("disabled", !ctx_r1.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(2); return ctx_r24.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_2_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r2.cell.newValue)("name", ctx_r2.cell.getId())("placeholder", ctx_r2.cell.getTitle())("disabled", !ctx_r2.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 11);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r29 = i0.ɵɵnextContext(2); return ctx_r29.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r30); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template_textarea_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r3.cell.newValue)("name", ctx_r3.cell.getId())("placeholder", ctx_r3.cell.getTitle())("disabled", !ctx_r3.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 12);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r35); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r4.cell.newValue)("name", ctx_r4.cell.getId())("placeholder", ctx_r4.cell.getTitle())("disabled", !ctx_r4.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_5_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r5.cell.newValue)("name", ctx_r5.cell.getId())("placeholder", ctx_r5.cell.getTitle())("disabled", !ctx_r5.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-color", ctx_r6.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 15);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_7_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r45); const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r8 = i0.ɵɵreference(9);
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nbDatepicker", _r8)("ngModel", ctx_r7.cell.newValue)("name", ctx_r7.cell.getId())("placeholder", ctx_r7.cell.getTitle())("disabled", !ctx_r7.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 16);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_keydown_esc_1_listener() { i0.ɵɵrestoreView(_r51); const ctx_r54 = i0.ɵɵnextContext(2); return ctx_r54.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "nb-date-timepicker", 17, 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r49 = i0.ɵɵreference(3);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbDatepicker", _r49)("ngModel", ctx_r9.cell.newValue)("name", ctx_r9.cell.getId())("placeholder", ctx_r9.cell.getTitle())("disabled", !ctx_r9.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r57 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 19);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r56 = i0.ɵɵnextContext(2); return ctx_r56.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r58 = i0.ɵɵnextContext(2); return ctx_r58.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r57); const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template_input_keydown_esc_1_listener() { i0.ɵɵrestoreView(_r57); const ctx_r60 = i0.ɵɵnextContext(2); return ctx_r60.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "nb-timepicker", null, 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r55 = i0.ɵɵreference(3);
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTimepicker", _r55)("ngModel", ctx_r10.cell.newValue)("name", ctx_r10.cell.getId())("placeholder", ctx_r10.cell.getTitle())("disabled", !ctx_r10.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r62 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r62.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r62.label);
} }
function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-select", 21);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template_nb_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r63 = i0.ɵɵnextContext(2); return ctx_r63.cell.newValue = $event; })("change", function RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template_nb_select_change_0_listener($event) { i0.ɵɵrestoreView(_r64); const ctx_r65 = i0.ɵɵnextContext(2); return ctx_r65.onClick.emit($event); });
    i0.ɵɵtemplate(1, RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_nb_option_1_Template, 2, 2, "nb-option", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r11.cell.newValue)("name", ctx_r11.cell.getId());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.field.metaData.addConfig.enumOptions);
} }
function RestResourceEditorFieldsComponent_ng_container_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "nb-toggle", 25);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_div_13_Template_nb_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r67); const ctx_r66 = i0.ɵɵnextContext(2); return ctx_r66.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r12.cell.getId())("ngModel", ctx_r12.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 26);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template_file_upload_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r69); const ctx_r68 = i0.ɵɵnextContext(2); return ctx_r68.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r13.cell.newValue)("name", ctx_r13.field.label);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r71 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 26);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template_file_upload_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r71); const ctx_r70 = i0.ɵɵnextContext(2); return ctx_r70.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "object", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r14.cell.newValue)("name", ctx_r14.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", ctx_r14.cell.newValue[0], i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2, "Drag and drop");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " files");
    i0.ɵɵelement(4, "br");
    i0.ɵɵtext(5, " or click here ");
    i0.ɵɵelementContainerEnd();
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1, "Click here");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " to");
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4, " choose a files ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 32);
    i0.ɵɵelement(2, "path", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div", 34);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_container_4_Template, 6, 0, "ng-container", 35);
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_ng_template_5_Template, 5, 0, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r81 = i0.ɵɵreference(6);
    const isFileDragDropAvailable_r78 = i0.ɵɵnextContext().isFileDragDropAvailable;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", isFileDragDropAvailable_r78)("ngIfElse", _r81);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_div_0_Template, 7, 2, "div", 0);
} if (rf & 2) {
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r73.control.size === 0);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(0, "img", 41);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r87 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", i0.ɵɵpipeBind1(1, 1, ctx_r87.uploadedFile), i0.ɵɵsanitizeUrl);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 38);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_Template__svg_svg_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r89); const file_r85 = restoredCtx.file; const control_r86 = restoredCtx.control; return control_r86.removeFile(file_r85); });
    i0.ɵɵelement(2, "path", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_img_3_Template, 2, 3, "img", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r86 = ctx.control;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", control_r86.valid);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r91); const ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.activeCroper(); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r93 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 43);
    i0.ɵɵlistener("imageCropped", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r93); const ctx_r92 = i0.ɵɵnextContext(3); return ctx_r92.imageCropped($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 42);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r93); const ctx_r94 = i0.ɵɵnextContext(3); return ctx_r94.saveCroper(); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r77 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r77.controlCroper)("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 28);
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_2_Template, 1, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_template_4_Template, 4, 1, "ng-template", null, 30, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_button_6_Template, 2, 0, "button", 31);
    i0.ɵɵtemplate(7, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_ng_container_7_Template, 4, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("control", ctx_r15.control);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r15.isCrop && ctx_r15.controlCroper != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r15.isCrop);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_nb_tag_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r96 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r96);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r98 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-tag-list", 44);
    i0.ɵɵlistener("tagRemove", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_nb_tag_list_tagRemove_1_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r97 = i0.ɵɵnextContext(2); return ctx_r97.onTagRemove($event); });
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_nb_tag_2_Template, 1, 1, "nb-tag", 45);
    i0.ɵɵelementStart(3, "input", 46);
    i0.ɵɵlistener("tagAdd", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_input_tagAdd_3_listener($event) { i0.ɵɵrestoreView(_r98); const ctx_r99 = i0.ɵɵnextContext(2); return ctx_r99.onTagAdd($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r16.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r103 = ctx.$implicit;
    const ctx_r102 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r103[(ctx_r102.field == null ? null : ctx_r102.field.metaData == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions.value) ? ctx_r102.field == null ? null : ctx_r102.field.metaData == null ? null : ctx_r102.field.metaData.addConfig == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions == null ? null : ctx_r102.field.metaData.addConfig.belongToOptions.value : "id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r103[ctx_r102.field.metaData.addConfig.belongToOptions.template ? ctx_r102.field.metaData.addConfig.belongToOptions.template : ctx_r102.field.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r105 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 48, 49);
    i0.ɵɵlistener("input", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_input_input_1_listener() { i0.ɵɵrestoreView(_r105); const ctx_r104 = i0.ɵɵnextContext(2); return ctx_r104.onChange(); })("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r106 = i0.ɵɵnextContext(2); return ctx_r106.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-autocomplete", 50, 51);
    i0.ɵɵlistener("selectedChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_nb_autocomplete_selectedChange_3_listener($event) { i0.ɵɵrestoreView(_r105); const ctx_r107 = i0.ɵɵnextContext(2); return ctx_r107.onSelectionChange($event); });
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_option_5_Template, 2, 2, "nb-option", 22);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r101 = i0.ɵɵreference(4);
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r101)("ngModel", ctx_r17.cell.newValue);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx_r17.filteredOptions$));
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r112 = ctx.$implicit;
    const ctx_r108 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("text", tree_r112[ctx_r108.field.metaData.addConfig.belongToManyOptions.template ? ctx_r108.field.metaData.addConfig.belongToManyOptions.template : ctx_r108.field.metaData.addConfig.belongToManyOptions.filterKeys[0]]);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r113 = ctx.$implicit;
    const ctx_r111 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r113);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r113[ctx_r111.field.metaData.addConfig.belongToManyOptions.template ? ctx_r111.field.metaData.addConfig.belongToManyOptions.template : ctx_r111.field.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r115 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "nb-tag-list", 44);
    i0.ɵɵlistener("tagRemove", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r115); const ctx_r114 = i0.ɵɵnextContext(2); return ctx_r114.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_tag_3_Template, 1, 1, "nb-tag", 45);
    i0.ɵɵelementStart(4, "input", 52, 53);
    i0.ɵɵlistener("tagAdd", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template_input_tagAdd_4_listener($event) { i0.ɵɵrestoreView(_r115); const ctx_r116 = i0.ɵɵnextContext(2); return ctx_r116.onTagAdd($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 50, 54);
    i0.ɵɵlistener("selectedChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r115); const ctx_r117 = i0.ɵɵnextContext(2); return ctx_r117.onChoose($event); });
    i0.ɵɵtemplate(8, RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_nb_option_8_Template, 2, 2, "nb-option", 22);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r110 = i0.ɵɵreference(7);
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r18.cell.newValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r110);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 3, ctx_r18.filteredOptions$));
} }
function RestResourceEditorFieldsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceEditorFieldsComponent_ng_container_0_input_1_Template, 1, 4, "input", 1);
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_input_2_Template, 1, 4, "input", 1);
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_textarea_3_Template, 1, 4, "textarea", 2);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_input_4_Template, 1, 4, "input", 3);
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_input_5_Template, 1, 4, "input", 4);
    i0.ɵɵtemplate(6, RestResourceEditorFieldsComponent_ng_container_0_div_6_Template, 1, 2, "div", 5);
    i0.ɵɵtemplate(7, RestResourceEditorFieldsComponent_ng_container_0_input_7_Template, 1, 5, "input", 6);
    i0.ɵɵelement(8, "nb-datepicker", null, 7);
    i0.ɵɵtemplate(10, RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template, 4, 5, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceEditorFieldsComponent_ng_container_0_ng_container_11_Template, 4, 5, "ng-container", 0);
    i0.ɵɵtemplate(12, RestResourceEditorFieldsComponent_ng_container_0_nb_select_12_Template, 2, 3, "nb-select", 8);
    i0.ɵɵtemplate(13, RestResourceEditorFieldsComponent_ng_container_0_div_13_Template, 2, 2, "div", 9);
    i0.ɵɵtemplate(14, RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(15, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template, 3, 3, "ng-container", 0);
    i0.ɵɵtemplate(16, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template, 8, 3, "ng-container", 0);
    i0.ɵɵtemplate(17, RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template, 4, 1, "ng-container", 0);
    i0.ɵɵtemplate(18, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(19, RestResourceEditorFieldsComponent_ng_container_0_ng_container_19_Template, 10, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.STRING);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.LINK);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.TEXT);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.NUMBER);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.COLOR);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.DATE);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.DATETIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.TIME);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.ENUM);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.BOOLEAN);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.FILE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.PDF);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.IMAGE);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.HAS_MANY);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.BELONG_TO);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.BELONG_TO_MANY);
} }
export class RestResourceEditorFieldsComponent extends DefaultEditor {
    constructor(serviceRestAdminConfig, serviceResResource) {
        super();
        this.serviceRestAdminConfig = serviceRestAdminConfig;
        this.serviceResResource = serviceResResource;
        // Test
        this.uploadedFile = new BehaviorSubject(null);
        // Control sur les fichiers a upload
        this.control = new FileUploadControl({
            listVisible: true,
            accept: ["image/*"],
            discardInvalid: true,
            multiple: false,
        }, [
            FileUploadValidators.accept(["image/*"]),
            FileUploadValidators.filesLimit(1),
        ]);
        this.controlCroper = null;
        this.croppedImage = "";
        this.isCrop = false;
    }
    // End test
    ngOnInit() {
        this.subscription = this.control.valueChanges.subscribe((values) => {
            this.getImage(values[0]);
            this.controlCroper = values[0];
        });
        this.infoRows = this.cell.getColumn().valuePrepareFunction();
        this.field = this.infoRows.restField;
        switch (this.field.type) {
            case REST_FIELD_TYPES.HAS_MANY:
                this.cell.newValue = new Set([]);
                break;
            case REST_FIELD_TYPES.BELONG_TO:
                const restResource = this.serviceRestAdminConfig.getSpecificResource(this.field.metaData.addConfig.belongToOptions.resourceName);
                this.serviceResResource
                    .getResources({
                    api: restResource.api,
                    queryParams: this.field.metaData.addConfig.belongToOptions
                        .queryParams
                        ? this.field.metaData.addConfig.belongToOptions.queryParams
                        : restResource.queryParams,
                })
                    .subscribe((response) => {
                    this.options = response;
                    this.filteredOptions$ = of(this.options);
                });
                break;
            case REST_FIELD_TYPES.COLOR:
                if (!this.cell.newValue) {
                    this.cell.newValue = '#A4A';
                }
                break;
            case REST_FIELD_TYPES.BELONG_TO_MANY:
                this.cell.newValue = new Set([]);
                const resource = this.serviceRestAdminConfig.getSpecificResource(this.field.metaData.addConfig.belongToManyOptions.relatedName);
                this.serviceResResource
                    .getResources({
                    api: resource.api,
                    queryParams: this.field.metaData.addConfig.belongToManyOptions
                        .queryParams
                        ? this.field.metaData.addConfig.belongToManyOptions.queryParams
                        : resource.queryParams,
                })
                    .subscribe((response) => {
                    this.options = response;
                    this.filteredOptions$ = of(this.options);
                });
                break;
            case REST_FIELD_TYPES.IMAGE:
            case REST_FIELD_TYPES.FILE:
                this.cell.newValue = [];
                break;
            case REST_FIELD_TYPES.BOOLEAN:
                this.cell.newValue = false;
                break;
            // case REST_FIELD_TYPES.PDF:
            // this.cell.newValue = [];
            // break;
            default:
                break;
        }
    }
    get REST_FIELD_TYPES() {
        return REST_FIELD_TYPES;
    }
    // Tags
    onTagRemove(tagToRemove) {
        const treesA = new Set(this.cell.newValue);
        treesA.delete(tagToRemove.text);
        this.cell.newValue = Array.from(treesA.values());
    }
    onTagAdd({ value, input }) {
        if (value) {
            const treesA = new Set(this.cell.newValue);
            treesA.add(value);
            this.cell.newValue = Array.from(treesA.values());
        }
        input.nativeElement.value = "";
    }
    // End tag
    // Autocomplete
    filter(value) {
        if (typeof value == "string") {
            return this.options.filter((optionValue) => {
                return this.field.metaData.addConfig.belongToOptions.filterKeys.some((elt) => `${optionValue[elt].toLowerCase()}`.includes(`${value.toLowerCase()}`));
            });
        }
    }
    getFilteredOptions(value) {
        return of(value).pipe(map((filterString) => this.filter(filterString)));
    }
    onChange() {
        this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
    }
    onSelectionChange($event) {
        this.filteredOptions$ = this.getFilteredOptions($event);
    }
    // End Autocomplete
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getImage(file) {
        if (FileReader && file) {
            const fr = new FileReader();
            fr.onload = (e) => {
                this.uploadedFile.next(e.target.result);
            };
            fr.readAsDataURL(file);
        }
        else {
            this.uploadedFile.next(null);
        }
    }
    imageCropped(event) {
        this.croppedImage = event.base64;
    }
    activeCroper() {
        this.isCrop = true;
    }
    saveCroper() {
        this.isCrop = false;
        this.uploadedFile.next(this.croppedImage);
        this.cell.setValue(base64ToFile(this.croppedImage));
    }
    //belongToManyOptions
    onChoose(event) {
        const cellData = Array.from(this.cell.newValue.values());
        if (event) {
            const search = cellData.find((elt) => elt.id == event.id);
            if (search == undefined) {
                const newElt = {
                    id: event.id,
                    [this.field.metaData.addConfig.belongToManyOptions.relatedIdName]: event.id,
                    [this.field.metaData.addConfig.belongToManyOptions.resourceIdName]: "",
                    [this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]]: event[this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]],
                    saveRelatedIdName: this.field.metaData.addConfig.belongToManyOptions.relatedIdName,
                    saveResourceIdName: this.field.metaData.addConfig.belongToManyOptions.resourceIdName,
                };
                const treesA = new Set(this.cell.newValue);
                treesA.add(newElt);
                this.cell.newValue = Array.from(treesA.values());
            }
        }
        this.inputBelongTo.nativeElement.value = "";
    }
    onTagRemoveBelong(tagToRemove) {
        const cellData = Array.from(this.cell.newValue.values());
        const save = [];
        cellData.forEach((elt) => {
            if (elt[this.field.metaData.addConfig.belongToManyOptions.template
                ? this.field.metaData.addConfig.belongToManyOptions.template
                : this.field.metaData.addConfig.belongToManyOptions.filterKeys[0]].localeCompare(tagToRemove.text) != 0)
                save.push(elt);
        });
        this.cell.newValue = Array.from(save);
    }
    //End BelongToMany
    getField(fields, value) {
        return _.get(fields, value);
    }
}
RestResourceEditorFieldsComponent.ɵfac = function RestResourceEditorFieldsComponent_Factory(t) { return new (t || RestResourceEditorFieldsComponent)(i0.ɵɵdirectiveInject(i1.RestAdminConfigService), i0.ɵɵdirectiveInject(i2.RestResourceService)); };
RestResourceEditorFieldsComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RestResourceEditorFieldsComponent, selectors: [["input-editor"]], viewQuery: function RestResourceEditorFieldsComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.input = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputBelongTo = _t.first);
    } }, features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], ["type", "text", "class", "form-control ng-valid ng-touched ng-dirty", "fullWidth", "", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["class", "form-control ng-valid ng-touched ng-dirty", "fullWidth", "", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["class", "form-control ng-valid ng-touched ng-dirty", "type", "number", "fullWidth", "", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["type", "text", "class", "form-control ng-valid ng-touched ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["class", "text-center", "style", "width: 80px; height: 30px", 3, "background-color", 4, "ngIf"], ["class", "form-control ng-valid ng-touched ng-dirty", "fullWidth", "", 3, "nbDatepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc", 4, "ngIf"], ["formpicker", ""], ["class", "input-space", "nbInput", "", 3, "ngModel", "name", "ngModelChange", "change", 4, "ngIf"], ["style", "text-align: center", 4, "ngIf"], ["type", "text", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["type", "number", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["type", "text", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], [1, "text-center", 2, "width", "80px", "height", "30px"], ["fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "nbDatepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["nbInput", "", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "nbDatepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["withSeconds", ""], ["dateTimePicker", ""], ["twelveHoursFormat]", "", "nbInput", "", "fullWidth", "", 1, "form-control", "ng-valid", "ng-touched", "ng-dirty", 3, "nbTimepicker", "ngModel", "name", "placeholder", "disabled", "ngModelChange", "click", "keydown.enter", "keydown.esc"], ["timepicker", ""], ["nbInput", "", 1, "input-space", 3, "ngModel", "name", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [2, "text-align", "center"], [3, "name", "ngModel", "ngModelChange"], [1, "input-space", 2, "min-width", "300px", "max-width", "300px", 3, "ngModel", "name", "ngModelChange"], ["width", "300px", "height", "300px", 3, "data"], [3, "control"], ["placeholder", ""], ["item", ""], ["nbButton", "", "status", "primary", 3, "click", 4, "ngIf"], ["viewBox", "0 0 512 512", 1, "icon"], ["d", "M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"], [1, "upload-text"], [4, "ngIf", "ngIfElse"], ["isNotDragDropAvailable", ""], [1, "overlay"], ["viewBox", "0 0 448 512", 1, "delete-button", 3, "click"], ["d", "M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"], [3, "src", 4, "ngIf"], [3, "src"], ["nbButton", "", "status", "primary", 3, "click"], ["format", "png", 3, "imageFile", "maintainAspectRatio", "aspectRatio", "imageCropped"], [1, "input-space", 3, "tagRemove"], ["removable", "", 3, "text", 4, "ngFor", "ngForOf"], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "tagAdd"], ["removable", "", 3, "text"], ["nbInput", "", "type", "text", "placeholder", "Enter value", 3, "nbAutocomplete", "ngModel", "input", "ngModelChange"], ["autoInput", ""], [3, "selectedChange"], ["auto", ""], ["type", "text", "nbTagInput", "", "fullWidth", "", 3, "nbAutocomplete", "tagAdd"], ["autoInputBelongToMany", ""], ["autoBelonToMany", ""]], template: function RestResourceEditorFieldsComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, RestResourceEditorFieldsComponent_ng_container_0_Template, 20, 17, "ng-container", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.field.inForm == true);
    } }, directives: [i3.NgIf, i4.NbDatepickerComponent, i5.DefaultValueAccessor, i5.NgControlStatus, i5.NgModel, i5.NumberValueAccessor, i4.NbDatepickerDirective, i4.NbInputDirective, i4.NbDateTimePickerComponent, i4.NbTimePickerDirective, i4.NbTimePickerComponent, i4.NbSelectComponent, i3.NgForOf, i4.NbOptionComponent, i4.NbToggleComponent, i6.FileUploadComponent, i4.NbButtonComponent, i7.ImageCropperComponent, i4.NbTagListComponent, i4.NbTagInputDirective, i4.NbTagComponent, i4.NbAutocompleteDirective, i4.NbAutocompleteComponent], pipes: [i3.AsyncPipe], styles: [".icon[_ngcontent-%COMP%]{height:35px;width:35px;line-height:30px;text-align:center;border:1px solid #eaeaea;border-radius:4px;float:left;margin-right:20px}.upload-text[_ngcontent-%COMP%]{overflow:hidden;width:auto;font-size:14px}svg[_ngcontent-%COMP%]{fill:#909293;height:20px}.overlay[_ngcontent-%COMP%]{position:relative}.delete-button[_ngcontent-%COMP%]{background-color:#fafafa;position:absolute;top:-6px;right:-6px;cursor:pointer;z-index:10;width:40px;height:40px;text-align:center;font-size:20px;line-height:40px}.file-image[_ngcontent-%COMP%]{min-width:300px;max-width:300px}.file-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}nb-toggle[_ngcontent-%COMP%]{text-align:center}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestResourceEditorFieldsComponent, [{
        type: Component,
        args: [{
                selector: "input-editor",
                templateUrl: "./rest-resource-editor-fields.component.html",
                styleUrls: ["./rest-resource-editor-fields.component.scss"],
            }]
    }], function () { return [{ type: i1.RestAdminConfigService }, { type: i2.RestResourceService }]; }, { input: [{
            type: ViewChild,
            args: ["autoInput"]
        }], inputBelongTo: [{
            type: ViewChild,
            args: ["autoInputBelongToMany"]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixHQUNyQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9FLE9BQU8sRUFBcUIsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNaMUIsaUNBWUU7SUFUQSx5UEFBMkIsMExBSWxCLDRCQUFvQixJQUpGLDBNQUtWLDZCQUFxQixJQUxYLGdNQU1aLDRCQUFvQixJQU5SO0lB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QUE4QztnQkFDM0QsU0FBUyxFQUFFLENBQUMsOENBQThDLENBQUM7YUFDNUQ7MkdBZXlCLEtBQUs7a0JBQTVCLFNBQVM7bUJBQUMsV0FBVztZQUNjLGFBQWE7a0JBQWhELFNBQVM7bUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgRmlsZVVwbG9hZENvbnRyb2wsXG4gIEZpbGVVcGxvYWRWYWxpZGF0b3JzLFxufSBmcm9tIFwiQGlwbGFiL25neC1maWxlLXVwbG9hZFwiO1xuaW1wb3J0IHsgTmJUYWdDb21wb25lbnQsIE5iVGFnSW5wdXRBZGRFdmVudCB9IGZyb20gXCJAbmVidWxhci90aGVtZVwiO1xuaW1wb3J0IHsgRGVmYXVsdEVkaXRvciB9IGZyb20gXCJuZzItc21hcnQtdGFibGVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgb2YsIFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IFJlc3RGaWVsZCwgUkVTVF9GSUVMRF9UWVBFUyB9IGZyb20gXCIuLi8uLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbFwiO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2VcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEltYWdlQ3JvcHBlZEV2ZW50LCBiYXNlNjRUb0ZpbGUgfSBmcm9tIFwibmd4LWltYWdlLWNyb3BwZXJcIjtcblxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiaW5wdXQtZWRpdG9yXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCBleHRlbmRzIERlZmF1bHRFZGl0b3Ige1xuICBpbmZvUm93czogYW55O1xuXG4gIGZpZWxkOiBSZXN0RmllbGQ7XG4gIG9wdGlvbnM6IGFueVtdO1xuICBmaWx0ZXJlZE9wdGlvbnMkOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICAvLyBUZXN0XG4gIHB1YmxpYyByZWFkb25seSB1cGxvYWRlZEZpbGU6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChcbiAgICBudWxsXG4gICk7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIC8vIEVuZCB0ZXN0XG5cbiAgQFZpZXdDaGlsZChcImF1dG9JbnB1dFwiKSBpbnB1dDtcbiAgQFZpZXdDaGlsZChcImF1dG9JbnB1dEJlbG9uZ1RvTWFueVwiKSBpbnB1dEJlbG9uZ1RvO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbkNvbmZpZzogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIHNlcnZpY2VSZXNSZXNvdXJjZTogUmVzdFJlc291cmNlU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgLy8gQ29udHJvbCBzdXIgbGVzIGZpY2hpZXJzIGEgdXBsb2FkXG4gIHB1YmxpYyByZWFkb25seSBjb250cm9sID0gbmV3IEZpbGVVcGxvYWRDb250cm9sKFxuICAgIHtcbiAgICAgIGxpc3RWaXNpYmxlOiB0cnVlLFxuICAgICAgYWNjZXB0OiBbXCJpbWFnZS8qXCJdLFxuICAgICAgZGlzY2FyZEludmFsaWQ6IHRydWUsXG4gICAgICBtdWx0aXBsZTogZmFsc2UsXG4gICAgfSxcbiAgICBbXG4gICAgICBGaWxlVXBsb2FkVmFsaWRhdG9ycy5hY2NlcHQoW1wiaW1hZ2UvKlwiXSksXG4gICAgICBGaWxlVXBsb2FkVmFsaWRhdG9ycy5maWxlc0xpbWl0KDEpLFxuICAgIF1cbiAgKTtcblxuICBjb250cm9sQ3JvcGVyID0gbnVsbDtcbiAgY3JvcHBlZEltYWdlOiBhbnkgPSBcIlwiO1xuICBpc0Nyb3AgPSBmYWxzZTtcblxuICAvLyBFbmQgdGVzdFxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuY29udHJvbC52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKHZhbHVlczogQXJyYXk8RmlsZT4pID0+IHtcbiAgICAgICAgdGhpcy5nZXRJbWFnZSh2YWx1ZXNbMF0pO1xuICAgICAgICB0aGlzLmNvbnRyb2xDcm9wZXIgPSB2YWx1ZXNbMF07XG4gICAgICB9XG4gICAgKTtcbiAgICBcbiAgICB0aGlzLmluZm9Sb3dzID0gdGhpcy5jZWxsLmdldENvbHVtbigpLnZhbHVlUHJlcGFyZUZ1bmN0aW9uKCk7XG4gICAgdGhpcy5maWVsZCA9IHRoaXMuaW5mb1Jvd3MucmVzdEZpZWxkO1xuXG4gICAgc3dpdGNoICh0aGlzLmZpZWxkLnR5cGUpIHtcbiAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWTpcbiAgICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gbmV3IFNldChbXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UTzpcbiAgICAgICAgY29uc3QgcmVzdFJlc291cmNlID0gdGhpcy5zZXJ2aWNlUmVzdEFkbWluQ29uZmlnLmdldFNwZWNpZmljUmVzb3VyY2UoXG4gICAgICAgICAgdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnJlc291cmNlTmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNlcnZpY2VSZXNSZXNvdXJjZVxuICAgICAgICAgIC5nZXRSZXNvdXJjZXMoe1xuICAgICAgICAgICAgYXBpOiByZXN0UmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9uc1xuICAgICAgICAgICAgICAucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgPyB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgOiByZXN0UmVzb3VyY2UucXVlcnlQYXJhbXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSByZXNwb25zZTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zJCA9IG9mKHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SOlxuICAgICAgICAgIGlmICghdGhpcy5jZWxsLm5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSAnI0E0QSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZOlxuICAgICAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBuZXcgU2V0KFtdKTtcblxuICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgIHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZE5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzUmVzb3VyY2VcbiAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgIGFwaTogcmVzb3VyY2UuYXBpLFxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnNcbiAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA6IHJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyQgPSBvZih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5JTUFHRTpcbiAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5GSUxFOlxuICAgICAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBbXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuQk9PTEVBTjpcbiAgICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgLy8gY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLlBERjpcbiAgICAgIC8vIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IFtdO1xuICAgICAgLy8gYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGdldCBSRVNUX0ZJRUxEX1RZUEVTKCkge1xuICAgIHJldHVybiBSRVNUX0ZJRUxEX1RZUEVTO1xuICB9XG5cbiAgLy8gVGFnc1xuICBvblRhZ1JlbW92ZSh0YWdUb1JlbW92ZTogTmJUYWdDb21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0cmVlc0EgPSBuZXcgU2V0KHRoaXMuY2VsbC5uZXdWYWx1ZSk7XG5cbiAgICB0cmVlc0EuZGVsZXRlKHRhZ1RvUmVtb3ZlLnRleHQpO1xuXG4gICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gQXJyYXkuZnJvbSh0cmVlc0EudmFsdWVzKCkpO1xuICB9XG5cbiAgb25UYWdBZGQoeyB2YWx1ZSwgaW5wdXQgfTogTmJUYWdJbnB1dEFkZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBjb25zdCB0cmVlc0EgPSBuZXcgU2V0KHRoaXMuY2VsbC5uZXdWYWx1ZSk7XG4gICAgICB0cmVlc0EuYWRkKHZhbHVlKTtcblxuICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gQXJyYXkuZnJvbSh0cmVlc0EudmFsdWVzKCkpO1xuICAgIH1cbiAgICBpbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIC8vIEVuZCB0YWdcblxuICAvLyBBdXRvY29tcGxldGVcbiAgcHJpdmF0ZSBmaWx0ZXIodmFsdWU6IGFueSk6IHN0cmluZ1tdIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHRpb25WYWx1ZSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLmZpbHRlcktleXMuc29tZShcbiAgICAgICAgICAoZWx0KSA9PlxuICAgICAgICAgICAgYCR7b3B0aW9uVmFsdWVbZWx0XS50b0xvd2VyQ2FzZSgpfWAuaW5jbHVkZXMoXG4gICAgICAgICAgICAgIGAke3ZhbHVlLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0RmlsdGVyZWRPcHRpb25zKHZhbHVlOiBhbnkpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIG9mKHZhbHVlKS5waXBlKFxuICAgICAgbWFwKChmaWx0ZXJTdHJpbmc6IHN0cmluZykgPT4gdGhpcy5maWx0ZXIoZmlsdGVyU3RyaW5nKSlcbiAgICApO1xuICB9XG5cbiAgb25DaGFuZ2UoKSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMkID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoXG4gICAgICB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWVcbiAgICApO1xuICB9XG5cbiAgb25TZWxlY3Rpb25DaGFuZ2UoJGV2ZW50KSB7XG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMkID0gdGhpcy5nZXRGaWx0ZXJlZE9wdGlvbnMoJGV2ZW50KTtcbiAgfVxuXG4gIC8vIEVuZCBBdXRvY29tcGxldGVcblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIGdldEltYWdlKGZpbGU6IEZpbGUpOiB2b2lkIHtcbiAgICBpZiAoRmlsZVJlYWRlciAmJiBmaWxlKSB7XG4gICAgICBjb25zdCBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBmci5vbmxvYWQgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIHRoaXMudXBsb2FkZWRGaWxlLm5leHQoZS50YXJnZXQucmVzdWx0KTtcbiAgICAgIH07XG4gICAgICBmci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwbG9hZGVkRmlsZS5uZXh0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcbiAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcbiAgfVxuXG4gIGFjdGl2ZUNyb3BlcigpIHtcbiAgICB0aGlzLmlzQ3JvcCA9IHRydWU7XG4gIH1cblxuICBzYXZlQ3JvcGVyKCkge1xuICAgIHRoaXMuaXNDcm9wID0gZmFsc2U7XG4gICAgdGhpcy51cGxvYWRlZEZpbGUubmV4dCh0aGlzLmNyb3BwZWRJbWFnZSk7XG4gICAgdGhpcy5jZWxsLnNldFZhbHVlKGJhc2U2NFRvRmlsZSh0aGlzLmNyb3BwZWRJbWFnZSkpO1xuICB9XG5cbiAgLy9iZWxvbmdUb01hbnlPcHRpb25zXG4gIG9uQ2hvb3NlKGV2ZW50KSB7XG4gICAgY29uc3QgY2VsbERhdGEgPSBBcnJheS5mcm9tKHRoaXMuY2VsbC5uZXdWYWx1ZS52YWx1ZXMoKSk7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBjb25zdCBzZWFyY2ggPSBjZWxsRGF0YS5maW5kKChlbHQ6IGFueSkgPT4gZWx0LmlkID09IGV2ZW50LmlkKTtcbiAgICAgIGlmIChzZWFyY2ggPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IG5ld0VsdCA9IHtcbiAgICAgICAgICBpZDogZXZlbnQuaWQsXG4gICAgICAgICAgW3RoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZElkTmFtZV06XG4gICAgICAgICAgICBldmVudC5pZCxcbiAgICAgICAgICBbdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZXNvdXJjZUlkTmFtZV06XG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgIFt0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1dOlxuICAgICAgICAgICAgZXZlbnRbXG4gICAgICAgICAgICAgIHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICBzYXZlUmVsYXRlZElkTmFtZTpcbiAgICAgICAgICAgIHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVsYXRlZElkTmFtZSxcbiAgICAgICAgICBzYXZlUmVzb3VyY2VJZE5hbWU6XG4gICAgICAgICAgICB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlc291cmNlSWROYW1lLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHRyZWVzQSA9IG5ldyBTZXQodGhpcy5jZWxsLm5ld1ZhbHVlKTtcbiAgICAgICAgdHJlZXNBLmFkZChuZXdFbHQpO1xuXG4gICAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IEFycmF5LmZyb20odHJlZXNBLnZhbHVlcygpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnB1dEJlbG9uZ1RvLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgb25UYWdSZW1vdmVCZWxvbmcodGFnVG9SZW1vdmU6IE5iVGFnQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgY2VsbERhdGEgPSBBcnJheS5mcm9tKHRoaXMuY2VsbC5uZXdWYWx1ZS52YWx1ZXMoKSk7XG4gICAgY29uc3Qgc2F2ZSA9IFtdO1xuXG4gICAgY2VsbERhdGEuZm9yRWFjaCgoZWx0KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGVsdFtcbiAgICAgICAgICB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICA/IHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgIDogdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5maWx0ZXJLZXlzWzBdXG4gICAgICAgIF0ubG9jYWxlQ29tcGFyZSh0YWdUb1JlbW92ZS50ZXh0KSAhPSAwXG4gICAgICApXG4gICAgICAgIHNhdmUucHVzaChlbHQpO1xuICAgIH0pO1xuICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IEFycmF5LmZyb20oc2F2ZSk7XG4gIH1cblxuICAvL0VuZCBCZWxvbmdUb01hbnlcblxuICBnZXRGaWVsZChmaWVsZHMsIHZhbHVlKSB7XG4gICAgcmV0dXJuIF8uZ2V0KGZpZWxkcywgdmFsdWUpO1xuICB9XG59XG5cbi8qKlxuICogQWRkY29uZmlnOiBjaGFtcHMgcGFyIGxlcXVlbCBvbiB2YSBmaWx0cmVyLFxuICogbGEgdmFsZXVyIGEgcmV0ZW5pciBldCBsZSB0ZW1wbGF0ZSBhIGFmZmljaGVyXG4gKi9cbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5pbkZvcm0gPT0gdHJ1ZVwiPlxuICA8IS0tIElucHV0IHR5cGUgc3RyaW5nIC0tPlxuICA8aW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuU1RSSU5HXCJcbiAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctdmFsaWQgbmctdG91Y2hlZCBuZy1kaXJ0eVwiXG4gICAgZnVsbFdpZHRoXG4gIC8+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIGxpbmsgLS0+XG4gIDxpbnB1dFxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5MSU5LXCJcbiAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctdmFsaWQgbmctdG91Y2hlZCBuZy1kaXJ0eVwiXG4gICAgZnVsbFdpZHRoXG4gIC8+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIHRleHQgLS0+XG4gIDx0ZXh0YXJlYVxuICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcbiAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbCBuZy12YWxpZCBuZy10b3VjaGVkIG5nLWRpcnR5XCJcbiAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5URVhUXCJcbiAgICBmdWxsV2lkdGhcbiAgPjwvdGV4dGFyZWE+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIG51bWJlciAgLS0+XG4gIDxpbnB1dFxuICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcbiAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbCBuZy12YWxpZCBuZy10b3VjaGVkIG5nLWRpcnR5XCJcbiAgICB0eXBlPVwibnVtYmVyXCJcbiAgICBmdWxsV2lkdGhcbiAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5OVU1CRVJcIlxuICAvPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSBjb2xvciAgLS0+XG4gIDxpbnB1dFxuICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctdmFsaWQgbmctdG91Y2hlZCBuZy1kaXJ0eVwiXG4gICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQ09MT1JcIlxuICAvPlxuICA8IS0tIGZ1bGxXaWR0aCAtLT5cbiAgPGRpdlxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICBjbGFzcz1cInRleHQtY2VudGVyXCJcbiAgICBzdHlsZT1cIndpZHRoOiA4MHB4OyBoZWlnaHQ6IDMwcHhcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNlbGwubmV3VmFsdWVcIlxuICA+PC9kaXY+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIGRhdGUgLS0+XG4gIDxpbnB1dFxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVcIlxuICAgIFtuYkRhdGVwaWNrZXJdPVwiZm9ybXBpY2tlclwiXG4gICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxuICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIlxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLXZhbGlkIG5nLXRvdWNoZWQgbmctZGlydHlcIlxuICAgIGZ1bGxXaWR0aFxuICAvPlxuICA8bmItZGF0ZXBpY2tlciAjZm9ybXBpY2tlcj48L25iLWRhdGVwaWNrZXI+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIGRhdGVUaW1lIC0tPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkRBVEVUSU1FXCI+XG4gICAgPGlucHV0XG4gICAgICBuYklucHV0XG4gICAgICBbbmJEYXRlcGlja2VyXT1cImRhdGVUaW1lUGlja2VyXCJcbiAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLXZhbGlkIG5nLXRvdWNoZWQgbmctZGlydHlcIlxuICAgICAgZnVsbFdpZHRoXG4gICAgLz5cbiAgICA8bmItZGF0ZS10aW1lcGlja2VyIHdpdGhTZWNvbmRzICNkYXRlVGltZVBpY2tlcj48L25iLWRhdGUtdGltZXBpY2tlcj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIHRpbWUgLS0+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVElNRVwiPlxuICAgIDxpbnB1dFxuICAgICAgW25iVGltZXBpY2tlcl09XCJ0aW1lcGlja2VyXCJcbiAgICAgIHR3ZWx2ZUhvdXJzRm9ybWF0XVxuICAgICAgbmJJbnB1dFxuICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcbiAgICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIlxuICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctdmFsaWQgbmctdG91Y2hlZCBuZy1kaXJ0eVwiXG4gICAgICBmdWxsV2lkdGhcbiAgICAvPlxuICAgIDxuYi10aW1lcGlja2VyICN0aW1lcGlja2VyPjwvbmItdGltZXBpY2tlcj5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbnB1dCB0eXBlIGVudW0gLS0+XG4gIDxuYi1zZWxlY3RcbiAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgKGNoYW5nZSk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRU5VTVwiXG4gICAgbmJJbnB1dFxuICA+XG4gICAgPG5iLW9wdGlvblxuICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuZW51bU9wdGlvbnNcIlxuICAgICAgW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiXG4gICAgICA+e3sgb3B0aW9uLmxhYmVsIH19PC9uYi1vcHRpb25cbiAgICA+XG4gIDwvbmItc2VsZWN0PlxuXG4gIDwhLS0gSW5wdXQgdHlwZSBCb29sZWFuIC0tPlxuICA8ZGl2XG4gICAgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIlxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU5cIlxuICA+XG4gICAgPG5iLXRvZ2dsZSBbbmFtZV09XCJjZWxsLmdldElkKClcIiBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIj48L25iLXRvZ2dsZT5cbiAgPC9kaXY+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5GSUxFXCI+XG4gICAgPGZpbGUtdXBsb2FkXG4gICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgICAgY2xhc3M9XCJpbnB1dC1zcGFjZVwiXG4gICAgICBbbmFtZV09XCJmaWVsZC5sYWJlbFwiXG4gICAgICBzdHlsZT1cIm1pbi13aWR0aDogMzAwcHg7IG1heC13aWR0aDogMzAwcHhcIlxuICAgID48L2ZpbGUtdXBsb2FkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlBERlwiPlxuICAgIDxmaWxlLXVwbG9hZFxuICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgW25hbWVdPVwiZmllbGQubGFiZWxcIlxuICAgICAgc3R5bGU9XCJtaW4td2lkdGg6IDMwMHB4OyBtYXgtd2lkdGg6IDMwMHB4XCJcbiAgICA+PC9maWxlLXVwbG9hZD5cbiAgICA8b2JqZWN0IHdpZHRoPVwiMzAwcHhcIiBoZWlnaHQ9XCIzMDBweFwiIFtkYXRhXT1cImNlbGwubmV3VmFsdWVbMF1cIj48L29iamVjdD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5JTUFHRVwiPlxuICAgIDwhLS0gWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICBjbGFzcz1cImZpbGUtaW1hZ2VcIlxuICAgIFtuYW1lXT1cImZpZWxkLmxhYmVsXCIgLS0+XG4gICAgPGZpbGUtdXBsb2FkIFtjb250cm9sXT1cImNvbnRyb2xcIj5cbiAgICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgICBsZXQtaXNGaWxlRHJhZ0Ryb3BBdmFpbGFibGU9XCJpc0ZpbGVEcmFnRHJvcEF2YWlsYWJsZVwiXG4gICAgICAgICNwbGFjZWhvbGRlclxuICAgICAgPlxuICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udHJvbC5zaXplID09PSAwXCI+XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMjk2IDM4NGgtODBjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjE5MmgtODcuN2MtMTcuOCAwLTI2LjctMjEuNS0xNC4xLTM0LjFMMjQyLjMgNS43YzcuNS03LjUgMTkuOC03LjUgMjcuMyAwbDE1Mi4yIDE1Mi4yYzEyLjYgMTIuNiAzLjcgMzQuMS0xNC4xIDM0LjFIMzIwdjE2OGMwIDEzLjMtMTAuNyAyNC0yNCAyNHptMjE2LTh2MTEyYzAgMTMuMy0xMC43IDI0LTI0IDI0SDI0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNFYzNzZjMC0xMy4zIDEwLjctMjQgMjQtMjRoMTM2djhjMCAzMC45IDI1LjEgNTYgNTYgNTZoODBjMzAuOSAwIDU2LTI1LjEgNTYtNTZ2LThoMTM2YzEzLjMgMCAyNCAxMC43IDI0IDI0em0tMTI0IDg4YzAtMTEtOS0yMC0yMC0yMHMtMjAgOS0yMCAyMCA5IDIwIDIwIDIwIDIwLTkgMjAtMjB6bTY0IDBjMC0xMS05LTIwLTIwLTIwcy0yMCA5LTIwIDIwIDkgMjAgMjAgMjAgMjAtOSAyMC0yMHpcIlxuICAgICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgICA8L3N2Zz5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cGxvYWQtdGV4dFwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxuICAgICAgICAgICAgICAqbmdJZj1cImlzRmlsZURyYWdEcm9wQXZhaWxhYmxlOyBlbHNlIGlzTm90RHJhZ0Ryb3BBdmFpbGFibGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Yj5EcmFnIGFuZCBkcm9wPC9iPiBmaWxlczxiciAvPlxuICAgICAgICAgICAgICBvciBjbGljayBoZXJlXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjaXNOb3REcmFnRHJvcEF2YWlsYWJsZT5cbiAgICAgICAgICAgICAgPGI+Q2xpY2sgaGVyZTwvYj4gdG88YnIgLz5cbiAgICAgICAgICAgICAgY2hvb3NlIGEgZmlsZXNcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPG5nLXRlbXBsYXRlIGxldC1pPVwiaW5kZXhcIiBsZXQtZmlsZT1cImZpbGVcIiBsZXQtY29udHJvbD1cImNvbnRyb2xcIiAjaXRlbT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXlcIj5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ0OCA1MTJcIlxuICAgICAgICAgICAgY2xhc3M9XCJkZWxldGUtYnV0dG9uXCJcbiAgICAgICAgICAgIChjbGljayk9XCJjb250cm9sLnJlbW92ZUZpbGUoZmlsZSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIGQ9XCJNMzIgNDY0YTQ4IDQ4IDAgMCAwIDQ4IDQ4aDI4OGE0OCA0OCAwIDAgMCA0OC00OFYxMjhIMzJ6bTI3Mi0yNTZhMTYgMTYgMCAwIDEgMzIgMHYyMjRhMTYgMTYgMCAwIDEtMzIgMHptLTk2IDBhMTYgMTYgMCAwIDEgMzIgMHYyMjRhMTYgMTYgMCAwIDEtMzIgMHptLTk2IDBhMTYgMTYgMCAwIDEgMzIgMHYyMjRhMTYgMTYgMCAwIDEtMzIgMHpNNDMyIDMySDMxMmwtOS40LTE4LjdBMjQgMjQgMCAwIDAgMjgxLjEgMEgxNjYuOGEyMy43MiAyMy43MiAwIDAgMC0yMS40IDEzLjNMMTM2IDMySDE2QTE2IDE2IDAgMCAwIDAgNDh2MzJhMTYgMTYgMCAwIDAgMTYgMTZoNDE2YTE2IDE2IDAgMCAwIDE2LTE2VjQ4YTE2IDE2IDAgMCAwLTE2LTE2elwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDxpbWcgKm5nSWY9XCJjb250cm9sLnZhbGlkXCIgW3NyY109XCJ1cGxvYWRlZEZpbGUgfCBhc3luY1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICA8L2ZpbGUtdXBsb2FkPlxuXG4gICAgPGJ1dHRvblxuICAgICAgbmJCdXR0b25cbiAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgKm5nSWY9XCIhaXNDcm9wICYmIGNvbnRyb2xDcm9wZXIgIT0gbnVsbFwiXG4gICAgICAoY2xpY2spPVwiYWN0aXZlQ3JvcGVyKClcIlxuICAgID5cbiAgICAgIENST1BcbiAgICA8L2J1dHRvbj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0Nyb3BcIj5cbiAgICAgIDxpbWFnZS1jcm9wcGVyXG4gICAgICAgIFtpbWFnZUZpbGVdPVwiY29udHJvbENyb3BlclwiXG4gICAgICAgIFttYWludGFpbkFzcGVjdFJhdGlvXT1cInRydWVcIlxuICAgICAgICBbYXNwZWN0UmF0aW9dPVwiNCAvIDNcIlxuICAgICAgICBmb3JtYXQ9XCJwbmdcIlxuICAgICAgICAoaW1hZ2VDcm9wcGVkKT1cImltYWdlQ3JvcHBlZCgkZXZlbnQpXCJcbiAgICAgID48L2ltYWdlLWNyb3BwZXI+XG5cbiAgICAgIDxidXR0b24gbmJCdXR0b24gc3RhdHVzPVwicHJpbWFyeVwiIChjbGljayk9XCJzYXZlQ3JvcGVyKClcIj5cbiAgICAgICAgU0FWRSBDSEFOR0VcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSA8aW1nIFtzcmNdPVwiY3JvcHBlZEltYWdlXCIgLz4gLS0+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSAgLS0+XG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSEFTX01BTllcIj5cbiAgICA8bmItdGFnLWxpc3QgKHRhZ1JlbW92ZSk9XCJvblRhZ1JlbW92ZSgkZXZlbnQpXCIgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgPG5iLXRhZ1xuICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBjZWxsLm5ld1ZhbHVlXCJcbiAgICAgICAgW3RleHRdPVwidHJlZVwiXG4gICAgICAgIHJlbW92YWJsZVxuICAgICAgPjwvbmItdGFnPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmJUYWdJbnB1dCAodGFnQWRkKT1cIm9uVGFnQWRkKCRldmVudClcIiBmdWxsV2lkdGggLz5cbiAgICA8L25iLXRhZy1saXN0PlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT1wiPlxuICAgIDxpbnB1dFxuICAgICAgI2F1dG9JbnB1dFxuICAgICAgbmJJbnB1dFxuICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgKGlucHV0KT1cIm9uQ2hhbmdlKClcIlxuICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB2YWx1ZVwiXG4gICAgICBbbmJBdXRvY29tcGxldGVdPVwiYXV0b1wiXG4gICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIC8+XG5cbiAgICA8bmItYXV0b2NvbXBsZXRlICNhdXRvIChzZWxlY3RlZENoYW5nZSk9XCJvblNlbGVjdGlvbkNoYW5nZSgkZXZlbnQpXCI+XG4gICAgICA8bmItb3B0aW9uXG4gICAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmlsdGVyZWRPcHRpb25zJCB8IGFzeW5jXCJcbiAgICAgICAgW3ZhbHVlXT1cIlxuICAgICAgICAgIG9wdGlvbltcbiAgICAgICAgICAgIGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucz8udmFsdWVcbiAgICAgICAgICAgICAgPyBmaWVsZD8ubWV0YURhdGE/LmFkZENvbmZpZz8uYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAgICAgICAgICAgICA6ICdpZCdcbiAgICAgICAgICBdXG4gICAgICAgIFwiXG4gICAgICA+XG4gICAgICAgIHt7XG4gICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgOiBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLmZpbHRlcktleXNbMF1cbiAgICAgICAgICBdXG4gICAgICAgIH19XG4gICAgICA8L25iLW9wdGlvbj5cbiAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWVwiPlxuICAgIDxkaXY+XG4gICAgICA8bmItdGFnLWxpc3QgKHRhZ1JlbW92ZSk9XCJvblRhZ1JlbW92ZUJlbG9uZygkZXZlbnQpXCIgY2xhc3M9XCJpbnB1dC1zcGFjZVwiPlxuICAgICAgICA8bmItdGFnXG4gICAgICAgICAgKm5nRm9yPVwibGV0IHRyZWUgb2YgY2VsbC5uZXdWYWx1ZVwiXG4gICAgICAgICAgW3RleHRdPVwiXG4gICAgICAgICAgICB0cmVlW1xuICAgICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICBcIlxuICAgICAgICAgIHJlbW92YWJsZVxuICAgICAgICA+PC9uYi10YWc+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYlRhZ0lucHV0XG4gICAgICAgICAgI2F1dG9JbnB1dEJlbG9uZ1RvTWFueVxuICAgICAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJhdXRvQmVsb25Ub01hbnlcIlxuICAgICAgICAgICh0YWdBZGQpPVwib25UYWdBZGQoJGV2ZW50KVwiXG4gICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIC8+XG5cbiAgICAgICAgPG5iLWF1dG9jb21wbGV0ZSAjYXV0b0JlbG9uVG9NYW55IChzZWxlY3RlZENoYW5nZSk9XCJvbkNob29zZSgkZXZlbnQpXCI+XG4gICAgICAgICAgPG5iLW9wdGlvblxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnMkIHwgYXN5bmNcIlxuICAgICAgICAgICAgW3ZhbHVlXT1cIm9wdGlvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge3tcbiAgICAgICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICA/IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA8L25iLW9wdGlvbj5cbiAgICAgICAgPC9uYi1hdXRvY29tcGxldGU+XG4gICAgICA8L25iLXRhZy1saXN0PlxuICAgIDwvZGl2PlxuICA8L25nLWNvbnRhaW5lcj5cbjwvbmctY29udGFpbmVyPlxuIl19