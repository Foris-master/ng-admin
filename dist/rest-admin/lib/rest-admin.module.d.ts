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
import * as i9 from "./rest-admin/rest-resource/components/fs-icon-ccomponent/select.component";
import * as i10 from "./rest-admin/rest-resource/components/fs-icon-ccomponent/fs-icon.component";
import * as i11 from "./auth/login/login.component";
import * as i12 from "./rest-admin/directives/attribute.directive";
import * as i13 from "./rest-admin/rest-main-component/menu-filter.pipe";
import * as i14 from "./rest-admin/rest-resource/components/gmaps/gmaps.component";
import * as i15 from "./rest-admin/rest-resource/components/fs-icon-ccomponent/image-zoom.component";
import * as i16 from "@angular/common";
import * as i17 from "@angular/platform-browser";
import * as i18 from "@angular/platform-browser/animations";
import * as i19 from "@angular/router";
import * as i20 from "@angular/forms";
import * as i21 from "@angular/common/http";
import * as i22 from "@nebular/theme";
import * as i23 from "ng2-smart-table";
import * as i24 from "@iplab/ngx-file-upload";
import * as i25 from "@codehint-ng/html-compiler";
import * as i26 from "ngx-image-cropper";
import * as i27 from "@ngx-translate/core";
import * as i28 from "ngx-dropzone";
import * as i29 from "ngx-permissions";
import * as i30 from "./@core/core.module";
import * as i31 from "./@theme/theme.module";
import * as i32 from "@angular/google-maps";
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
    static ɵmod: i0.ɵɵNgModuleDeclaration<RestAdminModule, [typeof i1.RestResourceListComponent, typeof i2.RestResourceAddComponent, typeof i3.RestResourceDeleteComponent, typeof i4.RestMainComponentComponent, typeof i5.RestResourceEditorFieldsComponent, typeof i6.RestResourceListFieldComponent, typeof i7.RestResourceDetailComponent, typeof i8.UploadFileComponent, typeof i9.SelectAllCheckboxRenderComponent, typeof i10.FsIconCComponent, typeof i11.LoginComponent, typeof i12.AttributeDirective, typeof i13.MenuFilterPipe, typeof i14.GmapsComponent, typeof i15.ImageZoomComponent], [typeof i16.CommonModule, typeof i17.BrowserModule, typeof i18.BrowserAnimationsModule, typeof i19.RouterModule, typeof i20.ReactiveFormsModule, typeof i20.FormsModule, typeof i21.HttpClientModule, typeof i21.HttpClientJsonpModule, typeof i22.NbActionsModule, typeof i22.NbButtonModule, typeof i22.NbCardModule, typeof i22.NbCheckboxModule, typeof i22.NbInputModule, typeof i22.NbTagModule, typeof i22.NbRadioModule, typeof i22.NbUserModule, typeof i22.NbTreeGridModule, typeof i22.NbAlertModule, typeof i22.NbAutocompleteModule, typeof i23.Ng2SmartTableModule, typeof i24.FileUploadModule, typeof i25.CngHtmlCompilerModule, typeof i22.NbSpinnerModule, typeof i22.NbTabsetModule, typeof i22.NbPopoverModule, typeof i26.ImageCropperModule, typeof i22.NbToggleModule, typeof i22.NbListModule, typeof i22.NbTooltipModule, typeof i22.NbContextMenuModule, typeof i27.TranslateModule, typeof i28.NgxDropzoneModule, typeof i29.NgxPermissionsModule, typeof i22.NbLayoutModule, typeof i22.NbSelectModule, typeof i22.NbSidebarModule, typeof i22.NbMenuModule, typeof i22.NbDatepickerModule, typeof i22.NbDialogModule, typeof i22.NbWindowModule, typeof i22.NbToastrModule, typeof i22.NbTimepickerModule, typeof i30.CoreModule, typeof i31.ThemeModule, typeof i22.NbIconModule, typeof i32.GoogleMapsModule, typeof i27.TranslateModule], [typeof i1.RestResourceListComponent, typeof i2.RestResourceAddComponent, typeof i3.RestResourceDeleteComponent, typeof i4.RestMainComponentComponent, typeof i5.RestResourceEditorFieldsComponent, typeof i6.RestResourceListFieldComponent, typeof i7.RestResourceDetailComponent, typeof i8.UploadFileComponent, typeof i11.LoginComponent, typeof i14.GmapsComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RestAdminModule>;
}
