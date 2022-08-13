import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import {
  Compiler,
  ErrorHandler,
  ModuleWithProviders,
  NgModule,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTreeGridModule,
  NbTimepickerModule,
  NbTagModule,
  NbAutocompleteModule,
  NbDialogModule,
  NbSpinnerModule,
  NbMenuModule,
  NbPopoverModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbToggleModule,
  NbListModule,
  NbContextMenuModule,
} from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../@theme/theme.module";
import { CngHtmlCompilerModule } from "@codehint-ng/html-compiler";

import { FileUploadModule } from "@iplab/ngx-file-upload";
import { Router, RouterModule } from "@angular/router";
import { RestMainComponentComponent } from "./rest-main-component/rest-main-component.component";
import { RestAdminConfigService } from "./rest-resource/service/rest-admin-config.service";
import { REST_CONFIG } from "./rest-resource/models/rest-resource.model";
import { RestResourceListComponent } from "./rest-resource/rest-resource-list/rest-resource-list.component";
import {
  FsIconCComponent,
  RestResourceListFieldComponent,
} from "./rest-resource/components/rest.resource-list-field/rest.resource-list-field.component";
import { RestResourceAddComponent } from "./rest-resource/rest-resource-add/rest-resource-add.component";
import { RestResourceDeleteComponent } from "./rest-resource/rest-ressource-delete/rest-resource-delete.component";
import { RestResourceEditorFieldsComponent } from "./rest-resource/components/rest-resource-editor-fields/rest-resource-editor-fields.component";
import { RestResourceService } from "./rest-resource/service/rest-resource.service";
import { ImageCropperModule } from "ngx-image-cropper";
import { HttpAuthInterceptor } from "../utils/http-auth.interceptor";
import { PaginationInterceptor } from "../utils/pagination.interceptor";
import { RestResourceDetailComponent } from "./rest-resource/rest-resource-detail/rest-resource-detail.component";
import { RestExportService } from "./rest-resource/service/rest-export.service";
import { UploadFileComponent } from "./rest-resource/components/upload-file/upload-file.component";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RestLangService } from "./rest-resource/service/rest-lang.service";
import { HttpErrorInterceptor } from "../utils/http-error.interceptor";
import { AuthGuard } from "../utils/auth.guard";

// serviceRestConfig.restPathFileTranslate
export function createTranslateHttpLoader(
  http: HttpClient,
  serviceRestConfig: RestAdminConfigService
) {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

@NgModule({
  declarations: [
    RestResourceListComponent,
    RestResourceEditorFieldsComponent,
    RestResourceAddComponent,
    FsIconCComponent,
    RestResourceDeleteComponent,
    RestMainComponentComponent,
    RestResourceEditorFieldsComponent,
    RestResourceListFieldComponent,
    RestResourceDetailComponent,
    UploadFileComponent,
  ],
  exports: [
    RestResourceListComponent,
    RestResourceEditorFieldsComponent,
    RestResourceAddComponent,
    FsIconCComponent,
    RestResourceDeleteComponent,
    RestMainComponentComponent,
    RestResourceEditorFieldsComponent,
    RestResourceListFieldComponent,
    RestResourceDetailComponent,
    UploadFileComponent,
  ],
  entryComponents: [
    RestResourceListComponent,
    RestResourceListFieldComponent,
    RestResourceAddComponent,
    FsIconCComponent,
    RestResourceDeleteComponent,
    RestMainComponentComponent,
    RestResourceEditorFieldsComponent,
    RestResourceDetailComponent,
    UploadFileComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbTagModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbTreeGridModule,
    NbTimepickerModule,
    NbAutocompleteModule,
    ThemeModule,
    Ng2SmartTableModule,
    FileUploadModule,
    CngHtmlCompilerModule,
    NbDialogModule.forChild(),
    NbSpinnerModule,
    NbMenuModule,
    NbWindowModule.forChild(),
    NbTabsetModule,
    NbPopoverModule,
    NbTooltipModule,
    ImageCropperModule,
    NbToggleModule,
    NbListModule,
    NbTooltipModule,
    NbContextMenuModule,
    TranslateModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateHttpLoader,
    //     deps: [HttpClient],
    //   },
    // }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PaginationInterceptor,
      multi: true,
    },

    RestResourceService,
    RestAdminConfigService,
    RestExportService,
    RestLangService,
  ],
})
export class RestAdminModuleModule {
  constructor(
    private router: Router,
    private compiler: Compiler,
    private serviceRestAdmin: RestAdminConfigService
  ) {
    const tempModule = NgModule({
      imports: [
        RouterModule.forChild([
          {
            path: "",
            component: RestMainComponentComponent,
            canActivate: [AuthGuard],
            children: [...this.serviceRestAdmin.generateRoutes()],
          },
        ]),
      ],
    })(class {});
    this.compiler.compileModuleAsync(tempModule).then((module) => {
      const routes = {
        path: "",
        loadChildren() {
          return module;
        },
      };
      this.router.resetConfig([routes, ...this.router.config]);
    });
  }
  static forRoot(
    restConfig: REST_CONFIG
  ): ModuleWithProviders<RestAdminModuleModule> {
    return {
      ngModule: RestAdminModuleModule,
      providers: [
        RestAdminConfigService,
        { provide: "restConfig", useValue: restConfig },
      ],
    };
  }
}
