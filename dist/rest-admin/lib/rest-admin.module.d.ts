import { HttpClient } from '@angular/common/http';
import { Compiler, ModuleWithProviders } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';
import { Router } from '@angular/router';
import { RestAdminConfigService } from './rest-admin/rest-resource/service/rest-admin-config.service';
import { REST_CONFIG } from './rest-admin/rest-resource/models/rest-resource.model';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RestLangService } from './rest-admin/rest-resource/service/rest-lang.service';
import * as i0 from "@angular/core";
import * as i1 from "./rest-admin/rest-resource/rest-resource-list/rest-resource-list.component";
import * as i2 from "./rest-admin/rest-resource/rest-resource-add/rest-resource-add.component";
import * as i3 from "./rest-admin/rest-resource/rest-ressource-delete/rest-resource-delete.component";
import * as i4 from "./rest-admin/rest-main-component/rest-main-component.component";
import * as i5 from "./rest-admin/rest-resource/components/rest-resource-editor-fields/rest-resource-editor-fields.component";
import * as i6 from "./rest-admin/rest-resource/components/rest.resource-list-field/rest.resource-list-field.component";
import * as i7 from "./rest-admin/rest-resource/rest-resource-detail/rest-resource-detail.component";
import * as i8 from "./rest-admin/rest-resource/components/upload-file/upload-file.component";
import * as i9 from "./rest-admin/rest-resource/components/fs-icon-ccomponent/fs-icon.component";
import * as i10 from "./auth/login/login.component";
import * as i11 from "./rest-admin/directives/attribute.directive";
import * as i12 from "@angular/common";
import * as i13 from "@angular/platform-browser";
import * as i14 from "@angular/platform-browser/animations";
import * as i15 from "@angular/router";
import * as i16 from "@angular/forms";
import * as i17 from "@angular/common/http";
import * as i18 from "@nebular/theme";
import * as i19 from "ng2-smart-table";
import * as i20 from "@iplab/ngx-file-upload";
import * as i21 from "@codehint-ng/html-compiler";
import * as i22 from "ngx-image-cropper";
import * as i23 from "@ngx-translate/core";
import * as i24 from "ngx-dropzone";
import * as i25 from "ngx-permissions";
import * as i26 from "./@core/core.module";
import * as i27 from "./@theme/theme.module";
export declare function createTranslateHttpLoader(http: HttpClient): TranslateHttpLoader;
export declare class RestAdminModule {
    private router;
    private compiler;
    private serviceRestAdmin;
    private iconLibraries;
    private restLangService;
    constructor(router: Router, compiler: Compiler, serviceRestAdmin: RestAdminConfigService, iconLibraries: NbIconLibraries, restLangService: RestLangService);
    static forRoot(restConfig: REST_CONFIG): ModuleWithProviders<RestAdminModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestAdminModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RestAdminModule, [typeof i1.RestResourceListComponent, typeof i2.RestResourceAddComponent, typeof i3.RestResourceDeleteComponent, typeof i4.RestMainComponentComponent, typeof i5.RestResourceEditorFieldsComponent, typeof i6.RestResourceListFieldComponent, typeof i7.RestResourceDetailComponent, typeof i8.UploadFileComponent, typeof i9.FsIconCComponent, typeof i10.LoginComponent, typeof i11.AttributeDirective], [typeof i12.CommonModule, typeof i13.BrowserModule, typeof i14.BrowserAnimationsModule, typeof i15.RouterModule, typeof i16.ReactiveFormsModule, typeof i16.FormsModule, typeof i17.HttpClientModule, typeof i18.NbActionsModule, typeof i18.NbButtonModule, typeof i18.NbCardModule, typeof i18.NbCheckboxModule, typeof i18.NbInputModule, typeof i18.NbTagModule, typeof i18.NbRadioModule, typeof i18.NbUserModule, typeof i18.NbTreeGridModule, typeof i18.NbAlertModule, typeof i18.NbAutocompleteModule, typeof i19.Ng2SmartTableModule, typeof i20.FileUploadModule, typeof i21.CngHtmlCompilerModule, typeof i18.NbSpinnerModule, typeof i18.NbTabsetModule, typeof i18.NbPopoverModule, typeof i22.ImageCropperModule, typeof i18.NbToggleModule, typeof i18.NbListModule, typeof i18.NbTooltipModule, typeof i18.NbContextMenuModule, typeof i23.TranslateModule, typeof i24.NgxDropzoneModule, typeof i25.NgxPermissionsModule, typeof i18.NbSelectModule, typeof i18.NbSidebarModule, typeof i18.NbMenuModule, typeof i18.NbDatepickerModule, typeof i18.NbDialogModule, typeof i18.NbWindowModule, typeof i18.NbToastrModule, typeof i18.NbTimepickerModule, typeof i26.CoreModule, typeof i27.ThemeModule, typeof i18.NbIconModule, typeof i23.TranslateModule], [typeof i1.RestResourceListComponent, typeof i2.RestResourceAddComponent, typeof i3.RestResourceDeleteComponent, typeof i4.RestMainComponentComponent, typeof i5.RestResourceEditorFieldsComponent, typeof i6.RestResourceListFieldComponent, typeof i7.RestResourceDetailComponent, typeof i8.UploadFileComponent, typeof i10.LoginComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RestAdminModule>;
}
