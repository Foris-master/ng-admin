import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  Compiler,
  ErrorHandler,
  ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
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
  NbToastrModule,
  NbSidebarModule,
  NbWindowModule,
  NbToggleModule,
  NbListModule,
  NbContextMenuModule,
  NbIconLibraries,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from './@theme/theme.module';
import { CngHtmlCompilerModule } from '@codehint-ng/html-compiler';

import { FileUploadModule } from '@iplab/ngx-file-upload';
import { Router, RouterModule } from '@angular/router';
import { RestMainComponentComponent } from './rest-admin/rest-main-component/rest-main-component.component';
import { RestAdminConfigService } from './rest-admin/rest-resource/service/rest-admin-config.service';
import { REST_CONFIG } from './rest-admin/rest-resource/models/rest-resource.model';
import { RestResourceListComponent } from './rest-admin/rest-resource/rest-resource-list/rest-resource-list.component';
import { RestResourceListFieldComponent } from './rest-admin/rest-resource/components/rest.resource-list-field/rest.resource-list-field.component';
import { RestResourceAddComponent } from './rest-admin/rest-resource/rest-resource-add/rest-resource-add.component';
import { RestResourceDeleteComponent } from './rest-admin/rest-resource/rest-ressource-delete/rest-resource-delete.component';
import { RestResourceEditorFieldsComponent } from './rest-admin/rest-resource/components/rest-resource-editor-fields/rest-resource-editor-fields.component';
import { RestResourceService } from './rest-admin/rest-resource/service/rest-resource.service';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpAuthInterceptor } from './utils/http-auth.interceptor';
import { PaginationInterceptor } from './utils/pagination.interceptor';
import { RestResourceDetailComponent } from './rest-admin/rest-resource/rest-resource-detail/rest-resource-detail.component';
import { RestExportService } from './rest-admin/rest-resource/service/rest-export.service';
import { UploadFileComponent } from './rest-admin/rest-resource/components/upload-file/upload-file.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RestLangService } from './rest-admin/rest-resource/service/rest-lang.service';
import { HttpErrorInterceptor } from './utils/http-error.interceptor';
import { AuthGuard } from './utils/auth.guard';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxPermissionsModule } from 'ngx-permissions';
import { CoreModule } from './@core/core.module';
import { FsIconCComponent } from './rest-admin/rest-resource/components/fs-icon-ccomponent/fs-icon.component';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// serviceRestConfig.restPathFileTranslate
export function createTranslateHttpLoader(http: HttpClient) {
  // return new MultiTranslateHttpLoader(http, [
  //   { prefix: './assets/i18n/', suffix: '.json' },//host app i18n assets
  //   { prefix: './lib/assets/i18n/', suffix: '.json' }, //your lib assets
  //   { prefix: './rest/lib/assets/i18n/', suffix: '.json' }, //your lib assets
  // ])
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    RestResourceListComponent,
    RestResourceAddComponent,
    RestResourceDeleteComponent,
    RestMainComponentComponent,
    RestResourceEditorFieldsComponent,
    RestResourceListFieldComponent,
    RestResourceDetailComponent,
    UploadFileComponent,
    FsIconCComponent,
  ],
  exports: [
    RestResourceListComponent,
    RestResourceAddComponent,
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
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbInputModule,
    NbTagModule,
    NbRadioModule,
    NbUserModule,
    NbTreeGridModule,
    NbAutocompleteModule,
    Ng2SmartTableModule,
    FileUploadModule,
    CngHtmlCompilerModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbPopoverModule,
    ImageCropperModule,
    NbToggleModule,
    NbListModule,
    NbTooltipModule,
    NbContextMenuModule,
    TranslateModule,
    NgxDropzoneModule,
    NgxPermissionsModule.forChild(),

    NbSelectModule,
    NbSidebarModule,
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbTimepickerModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbIconModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateHttpLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PaginationInterceptor,
      multi: true,
    },
    AuthGuard,

    RestResourceService,
    RestAdminConfigService,
    RestExportService,
    RestLangService,
  ],
})
export class RestAdminModule {
  constructor(
    private router: Router,
    private compiler: Compiler,
    private serviceRestAdmin: RestAdminConfigService,
    private iconLibraries: NbIconLibraries,
    private restLangService: RestLangService
  ) {
    this.iconLibraries.registerFontPack('fas', {
      packClass: 'fas',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('far', {
      packClass: 'far',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('fab', {
      packClass: 'fab',
      iconClassPrefix: 'fa',
    });
    this.iconLibraries.registerFontPack('fad', {
      packClass: 'fa-duotone',
      iconClassPrefix: 'fa',
    });
    this.restLangService.setInitialAppLanguage();

    const tempModule = NgModule({
      imports: [
        RouterModule.forChild([
          {
            path: '',
            component: RestMainComponentComponent,
            canActivate: [AuthGuard],
            children: [...(this.serviceRestAdmin.generateRoutes() as any)],
          },
        ]),
      ],
    })(class {});
    this.compiler.compileModuleAsync(tempModule).then((module) => {
      const routes = {
        path: '',
        loadChildren() {
          return module;
        },
      };
      this.router.resetConfig([routes, ...this.router.config]);
    });
  }
  static forRoot(
    restConfig: REST_CONFIG
  ): ModuleWithProviders<RestAdminModule> {
    return {
      ngModule: RestAdminModule,
      providers: [
        RestAdminConfigService,
        { provide: 'restConfig', useValue: restConfig },
      ],
    };
  }
}
