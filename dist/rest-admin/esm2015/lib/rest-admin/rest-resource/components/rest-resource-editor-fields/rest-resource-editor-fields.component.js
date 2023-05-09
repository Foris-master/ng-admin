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
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 10);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r21 = i0.ɵɵnextContext(2); return ctx_r21.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_1_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r22 = i0.ɵɵnextContext(2); return ctx_r22.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r1.cell.newValue)("name", ctx_r1.cell.getId())("placeholder", ctx_r1.cell.getTitle())("disabled", !ctx_r1.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_textarea_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 11);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_textarea_2_Template_textarea_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r23 = i0.ɵɵnextContext(2); return ctx_r23.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_textarea_2_Template_textarea_click_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r25 = i0.ɵɵnextContext(2); return ctx_r25.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_textarea_2_Template_textarea_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r26 = i0.ɵɵnextContext(2); return ctx_r26.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_textarea_2_Template_textarea_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r2.cell.newValue)("name", ctx_r2.cell.getId())("placeholder", ctx_r2.cell.getTitle())("disabled", !ctx_r2.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 12);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_3_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(2); return ctx_r28.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_3_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_3_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(2); return ctx_r31.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_3_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r3.cell.newValue)("name", ctx_r3.cell.getId())("placeholder", ctx_r3.cell.getTitle())("disabled", !ctx_r3.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 13);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r33 = i0.ɵɵnextContext(2); return ctx_r33.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r34); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_4_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r4.cell.newValue)("name", ctx_r4.cell.getId())("placeholder", ctx_r4.cell.getTitle())("disabled", !ctx_r4.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 14);
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵstyleProp("background-color", ctx_r5.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_input_6_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 15);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_input_6_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_input_6_Template_input_click_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_input_6_Template_input_keydown_enter_0_listener($event) { i0.ɵɵrestoreView(_r39); const ctx_r41 = i0.ɵɵnextContext(2); return ctx_r41.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_input_6_Template_input_keydown_esc_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r42 = i0.ɵɵnextContext(2); return ctx_r42.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(8);
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nbDatepicker", _r7)("ngModel", ctx_r6.cell.newValue)("name", ctx_r6.cell.getId())("placeholder", ctx_r6.cell.getTitle())("disabled", !ctx_r6.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 16);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_9_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r44 = i0.ɵɵnextContext(2); return ctx_r44.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_9_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r46 = i0.ɵɵnextContext(2); return ctx_r46.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_9_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r45); const ctx_r47 = i0.ɵɵnextContext(2); return ctx_r47.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_9_Template_input_keydown_esc_1_listener() { i0.ɵɵrestoreView(_r45); const ctx_r48 = i0.ɵɵnextContext(2); return ctx_r48.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "nb-date-timepicker", 17, 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r43 = i0.ɵɵreference(3);
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbDatepicker", _r43)("ngModel", ctx_r8.cell.newValue)("name", ctx_r8.cell.getId())("placeholder", ctx_r8.cell.getTitle())("disabled", !ctx_r8.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r51 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 19);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r50 = i0.ɵɵnextContext(2); return ctx_r50.cell.newValue = $event; })("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_click_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r52 = i0.ɵɵnextContext(2); return ctx_r52.onClick.emit($event); })("keydown.enter", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r51); const ctx_r53 = i0.ɵɵnextContext(2); return ctx_r53.onEdited.emit($event); })("keydown.esc", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template_input_keydown_esc_1_listener() { i0.ɵɵrestoreView(_r51); const ctx_r54 = i0.ɵɵnextContext(2); return ctx_r54.onStopEditing.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "nb-timepicker", null, 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r49 = i0.ɵɵreference(3);
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbTimepicker", _r49)("ngModel", ctx_r9.cell.newValue)("name", ctx_r9.cell.getId())("placeholder", ctx_r9.cell.getTitle())("disabled", !ctx_r9.cell.isEditable());
} }
function RestResourceEditorFieldsComponent_ng_container_0_nb_select_11_nb_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r56 = ctx.$implicit;
    i0.ɵɵproperty("value", option_r56.value);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(option_r56.label);
} }
function RestResourceEditorFieldsComponent_ng_container_0_nb_select_11_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "nb-select", 21);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_nb_select_11_Template_nb_select_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r57 = i0.ɵɵnextContext(2); return ctx_r57.cell.newValue = $event; })("change", function RestResourceEditorFieldsComponent_ng_container_0_nb_select_11_Template_nb_select_change_0_listener($event) { i0.ɵɵrestoreView(_r58); const ctx_r59 = i0.ɵɵnextContext(2); return ctx_r59.onClick.emit($event); });
    i0.ɵɵtemplate(1, RestResourceEditorFieldsComponent_ng_container_0_nb_select_11_nb_option_1_Template, 2, 2, "nb-option", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngModel", ctx_r10.cell.newValue)("name", ctx_r10.cell.getId());
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r10.field.metaData.addConfig.enumOptions);
} }
function RestResourceEditorFieldsComponent_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵelementStart(1, "nb-toggle", 25);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_div_12_Template_nb_toggle_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r61); const ctx_r60 = i0.ɵɵnextContext(2); return ctx_r60.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", ctx_r11.cell.getId())("ngModel", ctx_r11.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 26);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_13_Template_file_upload_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r63); const ctx_r62 = i0.ɵɵnextContext(2); return ctx_r62.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r12.cell.newValue)("name", ctx_r12.field.label);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r65 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 26);
    i0.ɵɵlistener("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template_file_upload_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r65); const ctx_r64 = i0.ɵɵnextContext(2); return ctx_r64.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "object", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r13.cell.newValue)("name", ctx_r13.field.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("data", ctx_r13.cell.newValue[0], i0.ɵɵsanitizeResourceUrl);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "b");
    i0.ɵɵtext(2, "Drag and drop");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(3, " files");
    i0.ɵɵelement(4, "br");
    i0.ɵɵtext(5, " or click here ");
    i0.ɵɵelementContainerEnd();
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_div_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "b");
    i0.ɵɵtext(1, "Click here");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2, " to");
    i0.ɵɵelement(3, "br");
    i0.ɵɵtext(4, " choose a files ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 32);
    i0.ɵɵelement(2, "path", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(3, "div", 34);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_div_0_ng_container_4_Template, 6, 0, "ng-container", 35);
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_div_0_ng_template_5_Template, 5, 0, "ng-template", null, 36, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r75 = i0.ɵɵreference(6);
    const isFileDragDropAvailable_r72 = i0.ɵɵnextContext().isFileDragDropAvailable;
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", isFileDragDropAvailable_r72)("ngIfElse", _r75);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_div_0_Template, 7, 2, "div", 0);
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r67.control.size === 0);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_4_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelement(0, "img", 41);
    i0.ɵɵpipe(1, "async");
} if (rf & 2) {
    const ctx_r81 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("src", i0.ɵɵpipeBind1(1, 1, ctx_r81.uploadedFile), i0.ɵɵsanitizeUrl);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r83 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 38);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_4_Template__svg_svg_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r83); const file_r79 = restoredCtx.file; const control_r80 = restoredCtx.control; return control_r80.removeFile(file_r79); });
    i0.ɵɵelement(2, "path", 39);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_4_img_3_Template, 2, 3, "img", 40);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const control_r80 = ctx.control;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", control_r80.valid);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r85 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 42);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r85); const ctx_r84 = i0.ɵɵnextContext(3); return ctx_r84.activeCroper(); });
    i0.ɵɵtext(1, " CROP ");
    i0.ɵɵelementEnd();
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "image-cropper", 43);
    i0.ɵɵlistener("imageCropped", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_container_7_Template_image_cropper_imageCropped_1_listener($event) { i0.ɵɵrestoreView(_r87); const ctx_r86 = i0.ɵɵnextContext(3); return ctx_r86.imageCropped($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "button", 42);
    i0.ɵɵlistener("click", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_container_7_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r87); const ctx_r88 = i0.ɵɵnextContext(3); return ctx_r88.saveCroper(); });
    i0.ɵɵtext(3, " SAVE CHANGE ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r71 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("imageFile", ctx_r71.controlCroper)("maintainAspectRatio", true)("aspectRatio", 4 / 3);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "file-upload", 28);
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_2_Template, 1, 1, "ng-template", null, 29, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_template_4_Template, 4, 1, "ng-template", null, 30, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_button_6_Template, 2, 0, "button", 31);
    i0.ɵɵtemplate(7, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_ng_container_7_Template, 4, 3, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("control", ctx_r14.control);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngIf", !ctx_r14.isCrop && ctx_r14.controlCroper != null);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r14.isCrop);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_nb_tag_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r90 = ctx.$implicit;
    i0.ɵɵproperty("text", tree_r90);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    const _r92 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nb-tag-list", 44);
    i0.ɵɵlistener("tagRemove", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template_nb_tag_list_tagRemove_1_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r91 = i0.ɵɵnextContext(2); return ctx_r91.onTagRemove($event); });
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_nb_tag_2_Template, 1, 1, "nb-tag", 45);
    i0.ɵɵelementStart(3, "input", 46);
    i0.ɵɵlistener("tagAdd", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template_input_tagAdd_3_listener($event) { i0.ɵɵrestoreView(_r92); const ctx_r93 = i0.ɵɵnextContext(2); return ctx_r93.onTagAdd($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r15.cell.newValue);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_nb_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r97 = ctx.$implicit;
    const ctx_r96 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r97[(ctx_r96.field == null ? null : ctx_r96.field.metaData == null ? null : ctx_r96.field.metaData.addConfig.belongToOptions == null ? null : ctx_r96.field.metaData.addConfig.belongToOptions.value) ? ctx_r96.field == null ? null : ctx_r96.field.metaData == null ? null : ctx_r96.field.metaData.addConfig == null ? null : ctx_r96.field.metaData.addConfig.belongToOptions == null ? null : ctx_r96.field.metaData.addConfig.belongToOptions.value : "id"]);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r97[ctx_r96.field.metaData.addConfig.belongToOptions.template ? ctx_r96.field.metaData.addConfig.belongToOptions.template : ctx_r96.field.metaData.addConfig.belongToOptions.filterKeys[0]], " ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r99 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 48, 49);
    i0.ɵɵlistener("input", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_input_input_1_listener() { i0.ɵɵrestoreView(_r99); const ctx_r98 = i0.ɵɵnextContext(2); return ctx_r98.onChange(); })("ngModelChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r99); const ctx_r100 = i0.ɵɵnextContext(2); return ctx_r100.cell.newValue = $event; });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "nb-autocomplete", 50, 51);
    i0.ɵɵlistener("selectedChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template_nb_autocomplete_selectedChange_3_listener($event) { i0.ɵɵrestoreView(_r99); const ctx_r101 = i0.ɵɵnextContext(2); return ctx_r101.onSelectionChange($event); });
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_nb_option_5_Template, 2, 2, "nb-option", 22);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r95 = i0.ɵɵreference(4);
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r95)("ngModel", ctx_r16.cell.newValue);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 3, ctx_r16.filteredOptions$));
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_tag_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "nb-tag", 47);
} if (rf & 2) {
    const tree_r106 = ctx.$implicit;
    const ctx_r102 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("text", tree_r106[ctx_r102.field.metaData.addConfig.belongToManyOptions.template ? ctx_r102.field.metaData.addConfig.belongToManyOptions.template : ctx_r102.field.metaData.addConfig.belongToManyOptions.filterKeys[0]]);
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "nb-option", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r107 = ctx.$implicit;
    const ctx_r105 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", option_r107);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", option_r107[ctx_r105.field.metaData.addConfig.belongToManyOptions.template ? ctx_r105.field.metaData.addConfig.belongToManyOptions.template : ctx_r105.field.metaData.addConfig.belongToManyOptions.filterKeys[0]], " ");
} }
function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r109 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelementStart(2, "nb-tag-list", 44);
    i0.ɵɵlistener("tagRemove", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_nb_tag_list_tagRemove_2_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r108 = i0.ɵɵnextContext(2); return ctx_r108.onTagRemoveBelong($event); });
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_tag_3_Template, 1, 1, "nb-tag", 45);
    i0.ɵɵelementStart(4, "input", 52, 53);
    i0.ɵɵlistener("tagAdd", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_input_tagAdd_4_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r110 = i0.ɵɵnextContext(2); return ctx_r110.onTagAdd($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "nb-autocomplete", 50, 54);
    i0.ɵɵlistener("selectedChange", function RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template_nb_autocomplete_selectedChange_6_listener($event) { i0.ɵɵrestoreView(_r109); const ctx_r111 = i0.ɵɵnextContext(2); return ctx_r111.onChoose($event); });
    i0.ɵɵtemplate(8, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_nb_option_8_Template, 2, 2, "nb-option", 22);
    i0.ɵɵpipe(9, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const _r104 = i0.ɵɵreference(7);
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r17.cell.newValue);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nbAutocomplete", _r104);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(9, 3, ctx_r17.filteredOptions$));
} }
function RestResourceEditorFieldsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RestResourceEditorFieldsComponent_ng_container_0_input_1_Template, 1, 4, "input", 1);
    i0.ɵɵtemplate(2, RestResourceEditorFieldsComponent_ng_container_0_textarea_2_Template, 1, 4, "textarea", 2);
    i0.ɵɵtemplate(3, RestResourceEditorFieldsComponent_ng_container_0_input_3_Template, 1, 4, "input", 3);
    i0.ɵɵtemplate(4, RestResourceEditorFieldsComponent_ng_container_0_input_4_Template, 1, 4, "input", 4);
    i0.ɵɵtemplate(5, RestResourceEditorFieldsComponent_ng_container_0_div_5_Template, 1, 2, "div", 5);
    i0.ɵɵtemplate(6, RestResourceEditorFieldsComponent_ng_container_0_input_6_Template, 1, 5, "input", 6);
    i0.ɵɵelement(7, "nb-datepicker", null, 7);
    i0.ɵɵtemplate(9, RestResourceEditorFieldsComponent_ng_container_0_ng_container_9_Template, 4, 5, "ng-container", 0);
    i0.ɵɵtemplate(10, RestResourceEditorFieldsComponent_ng_container_0_ng_container_10_Template, 4, 5, "ng-container", 0);
    i0.ɵɵtemplate(11, RestResourceEditorFieldsComponent_ng_container_0_nb_select_11_Template, 2, 3, "nb-select", 8);
    i0.ɵɵtemplate(12, RestResourceEditorFieldsComponent_ng_container_0_div_12_Template, 2, 2, "div", 9);
    i0.ɵɵtemplate(13, RestResourceEditorFieldsComponent_ng_container_0_ng_container_13_Template, 2, 2, "ng-container", 0);
    i0.ɵɵtemplate(14, RestResourceEditorFieldsComponent_ng_container_0_ng_container_14_Template, 3, 3, "ng-container", 0);
    i0.ɵɵtemplate(15, RestResourceEditorFieldsComponent_ng_container_0_ng_container_15_Template, 8, 3, "ng-container", 0);
    i0.ɵɵtemplate(16, RestResourceEditorFieldsComponent_ng_container_0_ng_container_16_Template, 4, 1, "ng-container", 0);
    i0.ɵɵtemplate(17, RestResourceEditorFieldsComponent_ng_container_0_ng_container_17_Template, 7, 5, "ng-container", 0);
    i0.ɵɵtemplate(18, RestResourceEditorFieldsComponent_ng_container_0_ng_container_18_Template, 10, 5, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.field.type == ctx_r0.REST_FIELD_TYPES.STRING);
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
        i0.ɵɵtemplate(0, RestResourceEditorFieldsComponent_ng_container_0_Template, 19, 16, "ng-container", 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWlCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNwRSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLG9CQUFvQixHQUNyQixNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFjLEVBQUUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9FLE9BQU8sRUFBcUIsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFcEUsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7SUNaMUIsaUNBWUU7SUFUQSx5UEFBMkIsMExBSWxCLDRCQUFvQixJQUpGLDBNQUtWLDZCQUFxQixJQUxYLGdNQU1aLDRCQUFvQixJQU5SO0lB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SW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEZpbGVVcGxvYWRDb250cm9sLFxuICBGaWxlVXBsb2FkVmFsaWRhdG9ycyxcbn0gZnJvbSBcIkBpcGxhYi9uZ3gtZmlsZS11cGxvYWRcIjtcbmltcG9ydCB7IE5iVGFnQ29tcG9uZW50LCBOYlRhZ0lucHV0QWRkRXZlbnQgfSBmcm9tIFwiQG5lYnVsYXIvdGhlbWVcIjtcbmltcG9ydCB7IERlZmF1bHRFZGl0b3IgfSBmcm9tIFwibmcyLXNtYXJ0LXRhYmxlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBSZXN0RmllbGQsIFJFU1RfRklFTERfVFlQRVMgfSBmcm9tIFwiLi4vLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWxcIjtcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCwgYmFzZTY0VG9GaWxlIH0gZnJvbSBcIm5neC1pbWFnZS1jcm9wcGVyXCI7XG5cbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImlucHV0LWVkaXRvclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudC5zY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgZXh0ZW5kcyBEZWZhdWx0RWRpdG9yIHtcbiAgaW5mb1Jvd3M6IGFueTtcblxuICBmaWVsZDogUmVzdEZpZWxkO1xuICBvcHRpb25zOiBhbnlbXTtcbiAgZmlsdGVyZWRPcHRpb25zJDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgLy8gVGVzdFxuICBwdWJsaWMgcmVhZG9ubHkgdXBsb2FkZWRGaWxlOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoXG4gICAgbnVsbFxuICApO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAvLyBFbmQgdGVzdFxuXG4gIEBWaWV3Q2hpbGQoXCJhdXRvSW5wdXRcIikgaW5wdXQ7XG4gIEBWaWV3Q2hpbGQoXCJhdXRvSW5wdXRCZWxvbmdUb01hbnlcIikgaW5wdXRCZWxvbmdUbztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0QWRtaW5Db25maWc6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzUmVzb3VyY2U6IFJlc3RSZXNvdXJjZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8vIENvbnRyb2wgc3VyIGxlcyBmaWNoaWVycyBhIHVwbG9hZFxuICBwdWJsaWMgcmVhZG9ubHkgY29udHJvbCA9IG5ldyBGaWxlVXBsb2FkQ29udHJvbChcbiAgICB7XG4gICAgICBsaXN0VmlzaWJsZTogdHJ1ZSxcbiAgICAgIGFjY2VwdDogW1wiaW1hZ2UvKlwiXSxcbiAgICAgIGRpc2NhcmRJbnZhbGlkOiB0cnVlLFxuICAgICAgbXVsdGlwbGU6IGZhbHNlLFxuICAgIH0sXG4gICAgW1xuICAgICAgRmlsZVVwbG9hZFZhbGlkYXRvcnMuYWNjZXB0KFtcImltYWdlLypcIl0pLFxuICAgICAgRmlsZVVwbG9hZFZhbGlkYXRvcnMuZmlsZXNMaW1pdCgxKSxcbiAgICBdXG4gICk7XG5cbiAgY29udHJvbENyb3BlciA9IG51bGw7XG4gIGNyb3BwZWRJbWFnZTogYW55ID0gXCJcIjtcbiAgaXNDcm9wID0gZmFsc2U7XG5cbiAgLy8gRW5kIHRlc3RcbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICh2YWx1ZXM6IEFycmF5PEZpbGU+KSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0SW1hZ2UodmFsdWVzWzBdKTtcbiAgICAgICAgdGhpcy5jb250cm9sQ3JvcGVyID0gdmFsdWVzWzBdO1xuICAgICAgfVxuICAgICk7XG4gICAgXG4gICAgdGhpcy5pbmZvUm93cyA9IHRoaXMuY2VsbC5nZXRDb2x1bW4oKS52YWx1ZVByZXBhcmVGdW5jdGlvbigpO1xuICAgIHRoaXMuZmllbGQgPSB0aGlzLmluZm9Sb3dzLnJlc3RGaWVsZDtcblxuICAgIHN3aXRjaCAodGhpcy5maWVsZC50eXBlKSB7XG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSEFTX01BTlk6XG4gICAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IG5ldyBTZXQoW10pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE86XG4gICAgICAgIGNvbnN0IHJlc3RSZXNvdXJjZSA9IHRoaXMuc2VydmljZVJlc3RBZG1pbkNvbmZpZy5nZXRTcGVjaWZpY1Jlc291cmNlKFxuICAgICAgICAgIHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5yZXNvdXJjZU5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlUmVzUmVzb3VyY2VcbiAgICAgICAgICAuZ2V0UmVzb3VyY2VzKHtcbiAgICAgICAgICAgIGFwaTogcmVzdFJlc291cmNlLmFwaSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnNcbiAgICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgID8gdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnF1ZXJ5UGFyYW1zXG4gICAgICAgICAgICAgIDogcmVzdFJlc291cmNlLnF1ZXJ5UGFyYW1zLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2U6IGFueSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gcmVzcG9uc2U7XG4gICAgICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyQgPSBvZih0aGlzLm9wdGlvbnMpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5DT0xPUjpcbiAgICAgICAgICBpZiAoIXRoaXMuY2VsbC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gJyNBNEEnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5CRUxPTkdfVE9fTUFOWTpcbiAgICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gbmV3IFNldChbXSk7XG5cbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLnNlcnZpY2VSZXN0QWRtaW5Db25maWcuZ2V0U3BlY2lmaWNSZXNvdXJjZShcbiAgICAgICAgICB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWROYW1lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuc2VydmljZVJlc1Jlc291cmNlXG4gICAgICAgICAgLmdldFJlc291cmNlcyh7XG4gICAgICAgICAgICBhcGk6IHJlc291cmNlLmFwaSxcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zXG4gICAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xuICAgICAgICAgICAgICA/IHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucXVlcnlQYXJhbXNcbiAgICAgICAgICAgICAgOiByZXNvdXJjZS5xdWVyeVBhcmFtcyxcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMkID0gb2YodGhpcy5vcHRpb25zKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuSU1BR0U6XG4gICAgICBjYXNlIFJFU1RfRklFTERfVFlQRVMuRklMRTpcbiAgICAgICAgdGhpcy5jZWxsLm5ld1ZhbHVlID0gW107XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBSRVNUX0ZJRUxEX1RZUEVTLkJPT0xFQU46XG4gICAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIC8vIGNhc2UgUkVTVF9GSUVMRF9UWVBFUy5QREY6XG4gICAgICAvLyB0aGlzLmNlbGwubmV3VmFsdWUgPSBbXTtcbiAgICAgIC8vIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBnZXQgUkVTVF9GSUVMRF9UWVBFUygpIHtcbiAgICByZXR1cm4gUkVTVF9GSUVMRF9UWVBFUztcbiAgfVxuXG4gIC8vIFRhZ3NcbiAgb25UYWdSZW1vdmUodGFnVG9SZW1vdmU6IE5iVGFnQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgdHJlZXNBID0gbmV3IFNldCh0aGlzLmNlbGwubmV3VmFsdWUpO1xuXG4gICAgdHJlZXNBLmRlbGV0ZSh0YWdUb1JlbW92ZS50ZXh0KTtcblxuICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IEFycmF5LmZyb20odHJlZXNBLnZhbHVlcygpKTtcbiAgfVxuXG4gIG9uVGFnQWRkKHsgdmFsdWUsIGlucHV0IH06IE5iVGFnSW5wdXRBZGRFdmVudCk6IHZvaWQge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgY29uc3QgdHJlZXNBID0gbmV3IFNldCh0aGlzLmNlbGwubmV3VmFsdWUpO1xuICAgICAgdHJlZXNBLmFkZCh2YWx1ZSk7XG5cbiAgICAgIHRoaXMuY2VsbC5uZXdWYWx1ZSA9IEFycmF5LmZyb20odHJlZXNBLnZhbHVlcygpKTtcbiAgICB9XG4gICAgaW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9IFwiXCI7XG4gIH1cblxuICAvLyBFbmQgdGFnXG5cbiAgLy8gQXV0b2NvbXBsZXRlXG4gIHByaXZhdGUgZmlsdGVyKHZhbHVlOiBhbnkpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcigob3B0aW9uVmFsdWUpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy5maWx0ZXJLZXlzLnNvbWUoXG4gICAgICAgICAgKGVsdCkgPT5cbiAgICAgICAgICAgIGAke29wdGlvblZhbHVlW2VsdF0udG9Mb3dlckNhc2UoKX1gLmluY2x1ZGVzKFxuICAgICAgICAgICAgICBgJHt2YWx1ZS50b0xvd2VyQ2FzZSgpfWBcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldEZpbHRlcmVkT3B0aW9ucyh2YWx1ZTogYW55KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIG1hcCgoZmlsdGVyU3RyaW5nOiBzdHJpbmcpID0+IHRoaXMuZmlsdGVyKGZpbHRlclN0cmluZykpXG4gICAgKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCkge1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zJCA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKFxuICAgICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlXG4gICAgKTtcbiAgfVxuXG4gIG9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudCkge1xuICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zJCA9IHRoaXMuZ2V0RmlsdGVyZWRPcHRpb25zKCRldmVudCk7XG4gIH1cblxuICAvLyBFbmQgQXV0b2NvbXBsZXRlXG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBnZXRJbWFnZShmaWxlOiBGaWxlKTogdm9pZCB7XG4gICAgaWYgKEZpbGVSZWFkZXIgJiYgZmlsZSkge1xuICAgICAgY29uc3QgZnIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgZnIub25sb2FkID0gKGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnVwbG9hZGVkRmlsZS5uZXh0KGUudGFyZ2V0LnJlc3VsdCk7XG4gICAgICB9O1xuICAgICAgZnIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGxvYWRlZEZpbGUubmV4dChudWxsKTtcbiAgICB9XG4gIH1cblxuICBpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50KSB7XG4gICAgdGhpcy5jcm9wcGVkSW1hZ2UgPSBldmVudC5iYXNlNjQ7XG4gIH1cblxuICBhY3RpdmVDcm9wZXIoKSB7XG4gICAgdGhpcy5pc0Nyb3AgPSB0cnVlO1xuICB9XG5cbiAgc2F2ZUNyb3BlcigpIHtcbiAgICB0aGlzLmlzQ3JvcCA9IGZhbHNlO1xuICAgIHRoaXMudXBsb2FkZWRGaWxlLm5leHQodGhpcy5jcm9wcGVkSW1hZ2UpO1xuICAgIHRoaXMuY2VsbC5zZXRWYWx1ZShiYXNlNjRUb0ZpbGUodGhpcy5jcm9wcGVkSW1hZ2UpKTtcbiAgfVxuXG4gIC8vYmVsb25nVG9NYW55T3B0aW9uc1xuICBvbkNob29zZShldmVudCkge1xuICAgIGNvbnN0IGNlbGxEYXRhID0gQXJyYXkuZnJvbSh0aGlzLmNlbGwubmV3VmFsdWUudmFsdWVzKCkpO1xuICAgIGlmIChldmVudCkge1xuICAgICAgY29uc3Qgc2VhcmNoID0gY2VsbERhdGEuZmluZCgoZWx0OiBhbnkpID0+IGVsdC5pZCA9PSBldmVudC5pZCk7XG4gICAgICBpZiAoc2VhcmNoID09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBuZXdFbHQgPSB7XG4gICAgICAgICAgaWQ6IGV2ZW50LmlkLFxuICAgICAgICAgIFt0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWRJZE5hbWVdOlxuICAgICAgICAgICAgZXZlbnQuaWQsXG4gICAgICAgICAgW3RoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMucmVzb3VyY2VJZE5hbWVdOlxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICBbdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5maWx0ZXJLZXlzWzBdXTpcbiAgICAgICAgICAgIGV2ZW50W1xuICAgICAgICAgICAgICB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLmZpbHRlcktleXNbMF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgc2F2ZVJlbGF0ZWRJZE5hbWU6XG4gICAgICAgICAgICB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnJlbGF0ZWRJZE5hbWUsXG4gICAgICAgICAgc2F2ZVJlc291cmNlSWROYW1lOlxuICAgICAgICAgICAgdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy5yZXNvdXJjZUlkTmFtZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB0cmVlc0EgPSBuZXcgU2V0KHRoaXMuY2VsbC5uZXdWYWx1ZSk7XG4gICAgICAgIHRyZWVzQS5hZGQobmV3RWx0KTtcblxuICAgICAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBBcnJheS5mcm9tKHRyZWVzQS52YWx1ZXMoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaW5wdXRCZWxvbmdUby5uYXRpdmVFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIG9uVGFnUmVtb3ZlQmVsb25nKHRhZ1RvUmVtb3ZlOiBOYlRhZ0NvbXBvbmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNlbGxEYXRhID0gQXJyYXkuZnJvbSh0aGlzLmNlbGwubmV3VmFsdWUudmFsdWVzKCkpO1xuICAgIGNvbnN0IHNhdmUgPSBbXTtcblxuICAgIGNlbGxEYXRhLmZvckVhY2goKGVsdCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBlbHRbXG4gICAgICAgICAgdGhpcy5maWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgPyB0aGlzLmZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICA6IHRoaXMuZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICBdLmxvY2FsZUNvbXBhcmUodGFnVG9SZW1vdmUudGV4dCkgIT0gMFxuICAgICAgKVxuICAgICAgICBzYXZlLnB1c2goZWx0KTtcbiAgICB9KTtcbiAgICB0aGlzLmNlbGwubmV3VmFsdWUgPSBBcnJheS5mcm9tKHNhdmUpO1xuICB9XG5cbiAgLy9FbmQgQmVsb25nVG9NYW55XG5cbiAgZ2V0RmllbGQoZmllbGRzLCB2YWx1ZSkge1xuICAgIHJldHVybiBfLmdldChmaWVsZHMsIHZhbHVlKTtcbiAgfVxufVxuXG4vKipcbiAqIEFkZGNvbmZpZzogY2hhbXBzIHBhciBsZXF1ZWwgb24gdmEgZmlsdHJlcixcbiAqIGxhIHZhbGV1ciBhIHJldGVuaXIgZXQgbGUgdGVtcGxhdGUgYSBhZmZpY2hlclxuICovXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuaW5Gb3JtID09IHRydWVcIj5cbiAgPCEtLSBJbnB1dCB0eXBlIHN0cmluZyAtLT5cbiAgPGlucHV0XG4gICAgdHlwZT1cInRleHRcIlxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlNUUklOR1wiXG4gICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxuICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIlxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLXZhbGlkIG5nLXRvdWNoZWQgbmctZGlydHlcIlxuICAgIGZ1bGxXaWR0aFxuICAvPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSB0ZXh0IC0tPlxuICA8dGV4dGFyZWFcbiAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctdmFsaWQgbmctdG91Y2hlZCBuZy1kaXJ0eVwiXG4gICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuVEVYVFwiXG4gICAgZnVsbFdpZHRoXG4gID48L3RleHRhcmVhPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSBudW1iZXIgIC0tPlxuICA8aW5wdXRcbiAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgIFtuYW1lXT1cImNlbGwuZ2V0SWQoKVwiXG4gICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgKGNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgbmctdmFsaWQgbmctdG91Y2hlZCBuZy1kaXJ0eVwiXG4gICAgdHlwZT1cIm51bWJlclwiXG4gICAgZnVsbFdpZHRoXG4gICAgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuTlVNQkVSXCJcbiAgLz5cblxuICA8IS0tIElucHV0IHR5cGUgY29sb3IgIC0tPlxuICA8aW5wdXRcbiAgICB0eXBlPVwidGV4dFwiXG4gICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxuICAgIFtkaXNhYmxlZF09XCIhY2VsbC5pc0VkaXRhYmxlKClcIlxuICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAoa2V5ZG93bi5lc2MpPVwib25TdG9wRWRpdGluZy5lbWl0KClcIlxuICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLXZhbGlkIG5nLXRvdWNoZWQgbmctZGlydHlcIlxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgLz5cbiAgICA8IS0tIGZ1bGxXaWR0aCAtLT5cbiAgPGRpdlxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkNPTE9SXCJcbiAgICBjbGFzcz1cInRleHQtY2VudGVyXCJcbiAgICBzdHlsZT1cIndpZHRoOiA4MHB4OyBoZWlnaHQ6IDMwcHhcIlxuICAgIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNlbGwubmV3VmFsdWVcIlxuICA+XG4gIDwvZGl2PlxuXG4gIDwhLS0gSW5wdXQgdHlwZSBkYXRlIC0tPlxuICA8aW5wdXRcbiAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFXCJcbiAgICBbbmJEYXRlcGlja2VyXT1cImZvcm1waWNrZXJcIlxuICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICBbcGxhY2Vob2xkZXJdPVwiY2VsbC5nZXRUaXRsZSgpXCJcbiAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgIChrZXlkb3duLmVudGVyKT1cIm9uRWRpdGVkLmVtaXQoJGV2ZW50KVwiXG4gICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCJcbiAgICBjbGFzcz1cImZvcm0tY29udHJvbCBuZy12YWxpZCBuZy10b3VjaGVkIG5nLWRpcnR5XCJcbiAgICBmdWxsV2lkdGhcbiAgLz5cbiAgPG5iLWRhdGVwaWNrZXIgI2Zvcm1waWNrZXI+PC9uYi1kYXRlcGlja2VyPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSBkYXRlVGltZSAtLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5EQVRFVElNRVwiPlxuICAgIDxpbnB1dFxuICAgICAgbmJJbnB1dFxuICAgICAgW25iRGF0ZXBpY2tlcl09XCJkYXRlVGltZVBpY2tlclwiXG4gICAgICBbKG5nTW9kZWwpXT1cImNlbGwubmV3VmFsdWVcIlxuICAgICAgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJjZWxsLmdldFRpdGxlKClcIlxuICAgICAgW2Rpc2FibGVkXT1cIiFjZWxsLmlzRWRpdGFibGUoKVwiXG4gICAgICAoY2xpY2spPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgICAgKGtleWRvd24uZW50ZXIpPVwib25FZGl0ZWQuZW1pdCgkZXZlbnQpXCJcbiAgICAgIChrZXlkb3duLmVzYyk9XCJvblN0b3BFZGl0aW5nLmVtaXQoKVwiXG4gICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBuZy12YWxpZCBuZy10b3VjaGVkIG5nLWRpcnR5XCJcbiAgICAgIGZ1bGxXaWR0aFxuICAgIC8+XG4gICAgPG5iLWRhdGUtdGltZXBpY2tlciB3aXRoU2Vjb25kcyAjZGF0ZVRpbWVQaWNrZXI+PC9uYi1kYXRlLXRpbWVwaWNrZXI+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSB0aW1lIC0tPlxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLlRJTUVcIj5cbiAgICA8aW5wdXRcbiAgICAgIFtuYlRpbWVwaWNrZXJdPVwidGltZXBpY2tlclwiXG4gICAgICB0d2VsdmVIb3Vyc0Zvcm1hdF1cbiAgICAgIG5iSW5wdXRcbiAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgICAgW3BsYWNlaG9sZGVyXT1cImNlbGwuZ2V0VGl0bGUoKVwiXG4gICAgICBbZGlzYWJsZWRdPVwiIWNlbGwuaXNFZGl0YWJsZSgpXCJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXG4gICAgICAoa2V5ZG93bi5lbnRlcik9XCJvbkVkaXRlZC5lbWl0KCRldmVudClcIlxuICAgICAgKGtleWRvd24uZXNjKT1cIm9uU3RvcEVkaXRpbmcuZW1pdCgpXCJcbiAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIG5nLXZhbGlkIG5nLXRvdWNoZWQgbmctZGlydHlcIlxuICAgICAgZnVsbFdpZHRoXG4gICAgLz5cbiAgICA8bmItdGltZXBpY2tlciAjdGltZXBpY2tlcj48L25iLXRpbWVwaWNrZXI+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gSW5wdXQgdHlwZSBlbnVtIC0tPlxuICA8bmItc2VsZWN0XG4gICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICBbbmFtZV09XCJjZWxsLmdldElkKClcIlxuICAgIChjaGFuZ2UpPVwib25DbGljay5lbWl0KCRldmVudClcIlxuICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkVOVU1cIlxuICAgIG5iSW5wdXRcbiAgPlxuICAgIDxuYi1vcHRpb25cbiAgICAgICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmVudW1PcHRpb25zXCJcbiAgICAgIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgPnt7IG9wdGlvbi5sYWJlbCB9fTwvbmItb3B0aW9uXG4gICAgPlxuICA8L25iLXNlbGVjdD5cblxuICA8IS0tIElucHV0IHR5cGUgQm9vbGVhbiAtLT5cbiAgPGRpdlxuICAgIHN0eWxlPVwidGV4dC1hbGlnbjogY2VudGVyXCJcbiAgICAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5CT09MRUFOXCJcbiAgPlxuICAgIDxuYi10b2dnbGUgW25hbWVdPVwiY2VsbC5nZXRJZCgpXCIgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCI+PC9uYi10b2dnbGU+XG4gIDwvZGl2PlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuRklMRVwiPlxuICAgIDxmaWxlLXVwbG9hZFxuICAgICAgWyhuZ01vZGVsKV09XCJjZWxsLm5ld1ZhbHVlXCJcbiAgICAgIGNsYXNzPVwiaW5wdXQtc3BhY2VcIlxuICAgICAgW25hbWVdPVwiZmllbGQubGFiZWxcIlxuICAgICAgc3R5bGU9XCJtaW4td2lkdGg6IDMwMHB4OyBtYXgtd2lkdGg6IDMwMHB4XCJcbiAgICA+PC9maWxlLXVwbG9hZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5QREZcIj5cbiAgICA8ZmlsZS11cGxvYWRcbiAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgICBjbGFzcz1cImlucHV0LXNwYWNlXCJcbiAgICAgIFtuYW1lXT1cImZpZWxkLmxhYmVsXCJcbiAgICAgIHN0eWxlPVwibWluLXdpZHRoOiAzMDBweDsgbWF4LXdpZHRoOiAzMDBweFwiXG4gICAgPjwvZmlsZS11cGxvYWQ+XG4gICAgPG9iamVjdCB3aWR0aD1cIjMwMHB4XCIgaGVpZ2h0PVwiMzAwcHhcIiBbZGF0YV09XCJjZWxsLm5ld1ZhbHVlWzBdXCI+PC9vYmplY3Q+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuSU1BR0VcIj5cbiAgICA8IS0tIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgY2xhc3M9XCJmaWxlLWltYWdlXCJcbiAgICBbbmFtZV09XCJmaWVsZC5sYWJlbFwiIC0tPlxuICAgIDxmaWxlLXVwbG9hZFxuICAgICAgW2NvbnRyb2xdPVwiY29udHJvbFwiXG4gICAgPlxuICAgICAgPG5nLXRlbXBsYXRlXG4gICAgICAgIGxldC1pc0ZpbGVEcmFnRHJvcEF2YWlsYWJsZT1cImlzRmlsZURyYWdEcm9wQXZhaWxhYmxlXCJcbiAgICAgICAgI3BsYWNlaG9sZGVyXG4gICAgICA+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJjb250cm9sLnNpemUgPT09IDBcIj5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0yOTYgMzg0aC04MGMtMTMuMyAwLTI0LTEwLjctMjQtMjRWMTkyaC04Ny43Yy0xNy44IDAtMjYuNy0yMS41LTE0LjEtMzQuMUwyNDIuMyA1LjdjNy41LTcuNSAxOS44LTcuNSAyNy4zIDBsMTUyLjIgMTUyLjJjMTIuNiAxMi42IDMuNyAzNC4xLTE0LjEgMzQuMUgzMjB2MTY4YzAgMTMuMy0xMC43IDI0LTI0IDI0em0yMTYtOHYxMTJjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMjRjLTEzLjMgMC0yNC0xMC43LTI0LTI0VjM3NmMwLTEzLjMgMTAuNy0yNCAyNC0yNGgxMzZ2OGMwIDMwLjkgMjUuMSA1NiA1NiA1Nmg4MGMzMC45IDAgNTYtMjUuMSA1Ni01NnYtOGgxMzZjMTMuMyAwIDI0IDEwLjcgMjQgMjR6bS0xMjQgODhjMC0xMS05LTIwLTIwLTIwcy0yMCA5LTIwIDIwIDkgMjAgMjAgMjAgMjAtOSAyMC0yMHptNjQgMGMwLTExLTktMjAtMjAtMjBzLTIwIDktMjAgMjAgOSAyMCAyMCAyMCAyMC05IDIwLTIwelwiXG4gICAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDwvc3ZnPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInVwbG9hZC10ZXh0XCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyXG4gICAgICAgICAgICAgICpuZ0lmPVwiaXNGaWxlRHJhZ0Ryb3BBdmFpbGFibGU7IGVsc2UgaXNOb3REcmFnRHJvcEF2YWlsYWJsZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxiPkRyYWcgYW5kIGRyb3A8L2I+IGZpbGVzPGJyIC8+XG4gICAgICAgICAgICAgIG9yIGNsaWNrIGhlcmVcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNpc05vdERyYWdEcm9wQXZhaWxhYmxlPlxuICAgICAgICAgICAgICA8Yj5DbGljayBoZXJlPC9iPiB0bzxiciAvPlxuICAgICAgICAgICAgICBjaG9vc2UgYSBmaWxlc1xuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuXG4gICAgICA8bmctdGVtcGxhdGUgbGV0LWk9XCJpbmRleFwiIGxldC1maWxlPVwiZmlsZVwiIGxldC1jb250cm9sPVwiY29udHJvbFwiICNpdGVtPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiPlxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNDQ4IDUxMlwiXG4gICAgICAgICAgICBjbGFzcz1cImRlbGV0ZS1idXR0b25cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImNvbnRyb2wucmVtb3ZlRmlsZShmaWxlKVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZD1cIk0zMiA0NjRhNDggNDggMCAwIDAgNDggNDhoMjg4YTQ4IDQ4IDAgMCAwIDQ4LTQ4VjEyOEgzMnptMjcyLTI1NmExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwem0tOTYgMGExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwem0tOTYgMGExNiAxNiAwIDAgMSAzMiAwdjIyNGExNiAxNiAwIDAgMS0zMiAwek00MzIgMzJIMzEybC05LjQtMTguN0EyNCAyNCAwIDAgMCAyODEuMSAwSDE2Ni44YTIzLjcyIDIzLjcyIDAgMCAwLTIxLjQgMTMuM0wxMzYgMzJIMTZBMTYgMTYgMCAwIDAgMCA0OHYzMmExNiAxNiAwIDAgMCAxNiAxNmg0MTZhMTYgMTYgMCAwIDAgMTYtMTZWNDhhMTYgMTYgMCAwIDAtMTYtMTZ6XCJcbiAgICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPGltZyAqbmdJZj1cImNvbnRyb2wudmFsaWRcIiBbc3JjXT1cInVwbG9hZGVkRmlsZSB8IGFzeW5jXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25nLXRlbXBsYXRlPlxuICAgIDwvZmlsZS11cGxvYWQ+XG5cbiAgICA8YnV0dG9uXG4gICAgICBuYkJ1dHRvblxuICAgICAgc3RhdHVzPVwicHJpbWFyeVwiXG4gICAgICAqbmdJZj1cIiFpc0Nyb3AgJiYgY29udHJvbENyb3BlciAhPSBudWxsXCJcbiAgICAgIChjbGljayk9XCJhY3RpdmVDcm9wZXIoKVwiXG4gICAgPlxuICAgICAgQ1JPUFxuICAgIDwvYnV0dG9uPlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQ3JvcFwiPlxuICAgICAgPGltYWdlLWNyb3BwZXJcbiAgICAgICAgW2ltYWdlRmlsZV09XCJjb250cm9sQ3JvcGVyXCJcbiAgICAgICAgW21haW50YWluQXNwZWN0UmF0aW9dPVwidHJ1ZVwiXG4gICAgICAgIFthc3BlY3RSYXRpb109XCI0IC8gM1wiXG4gICAgICAgIGZvcm1hdD1cInBuZ1wiXG4gICAgICAgIChpbWFnZUNyb3BwZWQpPVwiaW1hZ2VDcm9wcGVkKCRldmVudClcIlxuICAgICAgPjwvaW1hZ2UtY3JvcHBlcj5cblxuICAgICAgPGJ1dHRvbiBuYkJ1dHRvbiBzdGF0dXM9XCJwcmltYXJ5XCIgKGNsaWNrKT1cInNhdmVDcm9wZXIoKVwiPlxuICAgICAgICBTQVZFIENIQU5HRVxuICAgICAgPC9idXR0b24+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIDxpbWcgW3NyY109XCJjcm9wcGVkSW1hZ2VcIiAvPiAtLT5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBJbnB1dCB0eXBlICAtLT5cbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLnR5cGUgPT0gUkVTVF9GSUVMRF9UWVBFUy5IQVNfTUFOWVwiPlxuICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlKCRldmVudClcIiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICA8bmItdGFnXG4gICAgICAgICpuZ0Zvcj1cImxldCB0cmVlIG9mIGNlbGwubmV3VmFsdWVcIlxuICAgICAgICBbdGV4dF09XCJ0cmVlXCJcbiAgICAgICAgcmVtb3ZhYmxlXG4gICAgICA+PC9uYi10YWc+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYlRhZ0lucHV0ICh0YWdBZGQpPVwib25UYWdBZGQoJGV2ZW50KVwiIGZ1bGxXaWR0aCAvPlxuICAgIDwvbmItdGFnLWxpc3Q+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC50eXBlID09IFJFU1RfRklFTERfVFlQRVMuQkVMT05HX1RPXCI+XG4gICAgPGlucHV0XG4gICAgICAjYXV0b0lucHV0XG4gICAgICBuYklucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAoaW5wdXQpPVwib25DaGFuZ2UoKVwiXG4gICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHZhbHVlXCJcbiAgICAgIFtuYkF1dG9jb21wbGV0ZV09XCJhdXRvXCJcbiAgICAgIFsobmdNb2RlbCldPVwiY2VsbC5uZXdWYWx1ZVwiXG4gICAgLz5cblxuICAgIDxuYi1hdXRvY29tcGxldGUgI2F1dG8gKHNlbGVjdGVkQ2hhbmdlKT1cIm9uU2VsZWN0aW9uQ2hhbmdlKCRldmVudClcIj5cbiAgICAgIDxuYi1vcHRpb25cbiAgICAgICAgKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaWx0ZXJlZE9wdGlvbnMkIHwgYXN5bmNcIlxuICAgICAgICBbdmFsdWVdPVwiXG4gICAgICAgICAgb3B0aW9uW1xuICAgICAgICAgICAgZmllbGQ/Lm1ldGFEYXRhPy5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zPy52YWx1ZVxuICAgICAgICAgICAgICA/IGZpZWxkPy5tZXRhRGF0YT8uYWRkQ29uZmlnPy5iZWxvbmdUb09wdGlvbnM/LnZhbHVlXG4gICAgICAgICAgICAgIDogJ2lkJ1xuICAgICAgICAgIF1cbiAgICAgICAgXCJcbiAgICAgID5cbiAgICAgICAge3tcbiAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9PcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvT3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICA6IGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb09wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICAgIF1cbiAgICAgICAgfX1cbiAgICAgIDwvbmItb3B0aW9uPlxuICAgIDwvbmItYXV0b2NvbXBsZXRlPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQudHlwZSA9PSBSRVNUX0ZJRUxEX1RZUEVTLkJFTE9OR19UT19NQU5ZXCI+XG4gICAgPGRpdj5cbiAgICAgIDxuYi10YWctbGlzdCAodGFnUmVtb3ZlKT1cIm9uVGFnUmVtb3ZlQmVsb25nKCRldmVudClcIiBjbGFzcz1cImlucHV0LXNwYWNlXCI+XG4gICAgICAgIDxuYi10YWdcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJlZSBvZiBjZWxsLm5ld1ZhbHVlXCJcbiAgICAgICAgICBbdGV4dF09XCJcbiAgICAgICAgICAgIHRyZWVbXG4gICAgICAgICAgICAgIGZpZWxkLm1ldGFEYXRhLmFkZENvbmZpZy5iZWxvbmdUb01hbnlPcHRpb25zLnRlbXBsYXRlXG4gICAgICAgICAgICAgICAgPyBmaWVsZC5tZXRhRGF0YS5hZGRDb25maWcuYmVsb25nVG9NYW55T3B0aW9ucy50ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgXVxuICAgICAgICAgIFwiXG4gICAgICAgICAgcmVtb3ZhYmxlXG4gICAgICAgID48L25iLXRhZz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIG5iVGFnSW5wdXRcbiAgICAgICAgICAjYXV0b0lucHV0QmVsb25nVG9NYW55XG4gICAgICAgICAgW25iQXV0b2NvbXBsZXRlXT1cImF1dG9CZWxvblRvTWFueVwiXG4gICAgICAgICAgKHRhZ0FkZCk9XCJvblRhZ0FkZCgkZXZlbnQpXCJcbiAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgLz5cblxuICAgICAgICA8bmItYXV0b2NvbXBsZXRlICNhdXRvQmVsb25Ub01hbnkgKHNlbGVjdGVkQ2hhbmdlKT1cIm9uQ2hvb3NlKCRldmVudClcIj5cbiAgICAgICAgICA8bmItb3B0aW9uXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpbHRlcmVkT3B0aW9ucyQgfCBhc3luY1wiXG4gICAgICAgICAgICBbdmFsdWVdPVwib3B0aW9uXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7e1xuICAgICAgICAgICAgICBvcHRpb25bXG4gICAgICAgICAgICAgICAgZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgID8gZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMudGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgIDogZmllbGQubWV0YURhdGEuYWRkQ29uZmlnLmJlbG9uZ1RvTWFueU9wdGlvbnMuZmlsdGVyS2V5c1swXVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvbmItb3B0aW9uPlxuICAgICAgICA8L25iLWF1dG9jb21wbGV0ZT5cbiAgICAgIDwvbmItdGFnLWxpc3Q+XG4gICAgPC9kaXY+XG4gIDwvbmctY29udGFpbmVyPlxuPC9uZy1jb250YWluZXI+XG4iXX0=