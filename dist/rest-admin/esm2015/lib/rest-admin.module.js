import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule, } from '@angular/common/http';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule, NbTreeGridModule, NbTimepickerModule, NbTagModule, NbAutocompleteModule, NbDialogModule, NbSpinnerModule, NbMenuModule, NbPopoverModule, NbTabsetModule, NbTooltipModule, NbToastrModule, NbSidebarModule, NbWindowModule, NbToggleModule, NbListModule, NbContextMenuModule, NbAlertModule, NbLayoutModule, } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from './@theme/theme.module';
import { CngHtmlCompilerModule } from '@codehint-ng/html-compiler';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { RouterModule } from '@angular/router';
import { RestMainComponentComponent } from './rest-admin/rest-main-component/rest-main-component.component';
import { RestAdminConfigService } from './rest-admin/rest-resource/service/rest-admin-config.service';
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
import { NbAuthComponent, NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy, } from '@nebular/auth';
import { LoginComponent } from './auth/login/login.component';
import { isAuthGuard } from './utils/is-auth.guard';
import { NotificationService } from './rest-admin/rest-resource/service/notification.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestShareService } from './rest-admin/rest-resource/service/rest-share.service';
import { AttributeDirective } from './rest-admin/directives/attribute.directive';
import { MenuFilterPipe } from './rest-admin/rest-main-component/menu-filter.pipe';
import { GmapsComponent } from './rest-admin/rest-resource/components/gmaps/gmaps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./rest-admin/rest-resource/service/rest-admin-config.service";
import * as i3 from "@nebular/theme";
import * as i4 from "./rest-admin/rest-resource/service/rest-lang.service";
import * as i5 from "ngx-permissions";
import * as i6 from "./@core/core.module";
import * as i7 from "./@theme/theme.module";
import * as i8 from "@ngx-translate/core";
import * as i9 from "@angular/common";
import * as i10 from "@angular/forms";
import * as i11 from "ngx-dropzone";
import * as i12 from "ngx-image-cropper";
import * as i13 from "ng2-smart-table";
// serviceRestConfig.restPathFileTranslate
export function createTranslateHttpLoader(http) {
    // return new MultiTranslateHttpLoader(http, [
    //   { prefix: './assets/i18n/', suffix: '.json' },//host app i18n assets
    //   { prefix: './lib/assets/i18n/', suffix: '.json' }, //your lib assets
    //   { prefix: './rest/lib/assets/i18n/', suffix: '.json' }, //your lib assets
    // ])
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
export class RestAdminModule {
    constructor(router, compiler, serviceRestAdmin, iconLibraries, restLangService) {
        this.router = router;
        this.compiler = compiler;
        this.serviceRestAdmin = serviceRestAdmin;
        this.iconLibraries = iconLibraries;
        this.restLangService = restLangService;
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
                        path: 'login',
                        component: NbAuthComponent,
                        canActivate: [isAuthGuard],
                        children: [
                            {
                                path: '',
                                component: LoginComponent,
                            },
                        ],
                    },
                    {
                        path: 'admin',
                        component: RestMainComponentComponent,
                        canActivate: [AuthGuard],
                        children: [...this.serviceRestAdmin.generateRoutes()],
                    },
                    { path: '', redirectTo: '/login', pathMatch: 'full' },
                    { path: '**', redirectTo: '/' },
                ]),
                NbAuthModule.forRoot({
                    strategies: [
                        NbPasswordAuthStrategy.setup({
                            name: this.serviceRestAdmin.restAuthParams.strategy,
                            baseEndpoint: this.serviceRestAdmin.restAuthParams.baseEndpoint,
                            login: {
                                method: 'post',
                                endpoint: this.serviceRestAdmin.restAuthParams.loginEndPoint,
                                redirect: {
                                    success: this.serviceRestAdmin.restAuthParams
                                        .redirectRouteAfterLogin,
                                    failure: null,
                                },
                            },
                            token: {
                                class: NbAuthSimpleToken,
                                key: this.serviceRestAdmin.restAuthParams
                                    .tokenLocationInResponse,
                            },
                        }),
                    ],
                    forms: {
                        login: {
                            redirectDelay: 500,
                            strategy: this.serviceRestAdmin.restAuthParams.strategy,
                            showMessages: {
                                success: true,
                                error: true,
                            },
                        },
                    },
                }),
            ],
        })(class {
        });
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
    static forRoot(restConfig) {
        return {
            ngModule: RestAdminModule,
            providers: [
                RestAdminConfigService,
                { provide: 'restConfig', useValue: restConfig },
            ],
        };
    }
}
RestAdminModule.ɵfac = function RestAdminModule_Factory(t) { return new (t || RestAdminModule)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i2.RestAdminConfigService), i0.ɵɵinject(i3.NbIconLibraries), i0.ɵɵinject(i4.RestLangService)); };
RestAdminModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: RestAdminModule });
RestAdminModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: PaginationInterceptor,
            multi: true,
        },
        AuthGuard,
        isAuthGuard,
        RestResourceService,
        RestAdminConfigService,
        RestExportService,
        RestLangService,
        NotificationService,
        RestShareService,
    ], imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            RouterModule,
            ReactiveFormsModule,
            FormsModule,
            HttpClientModule,
            HttpClientJsonpModule,
            NbActionsModule,
            NbButtonModule,
            NbCardModule,
            NbCheckboxModule,
            NbInputModule,
            NbTagModule,
            NbRadioModule,
            NbUserModule,
            NbTreeGridModule,
            NbAlertModule,
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
            NbLayoutModule,
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
            GoogleMapsModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateHttpLoader,
                    deps: [HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestAdminModule, [{
        type: NgModule,
        args: [{
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
                    LoginComponent,
                    AttributeDirective,
                    MenuFilterPipe,
                    GmapsComponent,
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
                    LoginComponent,
                    GmapsComponent,
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
                    LoginComponent,
                    GmapsComponent,
                ],
                imports: [
                    CommonModule,
                    BrowserModule,
                    BrowserAnimationsModule,
                    RouterModule,
                    ReactiveFormsModule,
                    FormsModule,
                    HttpClientModule,
                    HttpClientJsonpModule,
                    NbActionsModule,
                    NbButtonModule,
                    NbCardModule,
                    NbCheckboxModule,
                    NbInputModule,
                    NbTagModule,
                    NbRadioModule,
                    NbUserModule,
                    NbTreeGridModule,
                    NbAlertModule,
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
                    NbLayoutModule,
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
                    GoogleMapsModule,
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
                    isAuthGuard,
                    RestResourceService,
                    RestAdminConfigService,
                    RestExportService,
                    RestLangService,
                    NotificationService,
                    RestShareService,
                ],
            }]
    }], function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: i2.RestAdminConfigService }, { type: i3.NbIconLibraries }, { type: i4.RestLangService }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(RestAdminModule, { declarations: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent,
        FsIconCComponent,
        LoginComponent,
        AttributeDirective,
        MenuFilterPipe,
        GmapsComponent], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        NbActionsModule,
        NbButtonModule,
        NbCardModule,
        NbCheckboxModule,
        NbInputModule,
        NbTagModule,
        NbRadioModule,
        NbUserModule,
        NbTreeGridModule,
        NbAlertModule,
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
        NgxDropzoneModule, i5.NgxPermissionsModule, NbLayoutModule,
        NbSelectModule,
        NbSidebarModule, i3.NbMenuModule, i3.NbDatepickerModule, i3.NbDialogModule, i3.NbWindowModule, i3.NbToastrModule, i3.NbTimepickerModule, i6.CoreModule, i7.ThemeModule, NbIconModule,
        GoogleMapsModule, i8.TranslateModule], exports: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent,
        LoginComponent,
        GmapsComponent] }); })();
i0.ɵɵsetComponentScope(RestResourceAddComponent, [i3.NbCardComponent, i9.NgIf, i3.NbCardHeaderComponent, i3.NbCardBodyComponent, i3.NbTabsetComponent, i3.NbTabComponent, i10.ɵNgNoValidate, i10.NgControlStatusGroup, i10.FormGroupDirective, i9.NgForOf, i3.NbInputDirective, i10.DefaultValueAccessor, AttributeDirective, i10.NgControlStatus, i10.FormControlName, i10.NumberValueAccessor, i3.NbDatepickerDirective, i3.NbDatepickerComponent, i3.NbDateTimePickerComponent, i3.NbTimePickerDirective, i3.NbTimePickerComponent, i3.NbSelectComponent, i3.NbOptionComponent, i3.NbToggleComponent, i11.NgxDropzoneComponent, i11.NgxDropzoneLabelDirective, i3.NbIconComponent, i11.NgxDropzonePreviewComponent, i11.NgxDropzoneImagePreviewComponent, i3.NbButtonComponent, i12.ImageCropperComponent, i3.NbTagListComponent, i3.NbTagComponent, i3.NbTagInputDirective, i3.NbAutocompleteDirective, i3.NbAutocompleteComponent, i10.NgModel, GmapsComponent, i3.NbContextMenuDirective, i13.Ng2SmartTableComponent, i3.NbCardFooterComponent], [i9.TitleCasePipe, i9.AsyncPipe, i8.TranslatePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2QsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osbUJBQW1CLEVBRW5CLGFBQWEsRUFDYixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUs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QUNqQyw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsY0FBYyxhQTRCZCxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixjQUFjO1FBQ2QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsV0FBVztRQUNYLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsaUJBQWlCLDJCQUVqQixjQUFjO1FBRWQsY0FBYztRQUNkLGVBQWUseUpBU2YsWUFBWTtRQUNaLGdCQUFnQixpQ0F2RWhCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7dUJBdkJkLHdCQUF3QiwyUEFTeEIsa0JBQWtCLHlsQkFFbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBDbGllbnRNb2R1bGUsXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxuICBIdHRwQ2xpZW50SnNvbnBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBFcnJvckhhbmRsZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQ2hlY2tib3hNb2R1bGUsXG4gIE5iRGF0ZXBpY2tlck1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYklucHV0TW9kdWxlLFxuICBOYlJhZGlvTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYlRyZWVHcmlkTW9kdWxlLFxuICBOYlRpbWVwaWNrZXJNb2R1bGUsXG4gIE5iVGFnTW9kdWxlLFxuICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgTmJNZW51TW9kdWxlLFxuICBOYlBvcG92ZXJNb2R1bGUsXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlRvb2x0aXBNb2R1bGUsXG4gIE5iVG9hc3RyTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iV2luZG93TW9kdWxlLFxuICBOYlRvZ2dsZU1vZHVsZSxcbiAgTmJMaXN0TW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYkljb25MaWJyYXJpZXMsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7IFRoZW1lTW9kdWxlIH0gZnJvbSAnLi9AdGhlbWUvdGhlbWUubW9kdWxlJztcbmltcG9ydCB7IENuZ0h0bWxDb21waWxlck1vZHVsZSB9IGZyb20gJ0Bjb2RlaGludC1uZy9odG1sLWNvbXBpbGVyJztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ0BpcGxhYi9uZ3gtZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1tYWluLWNvbXBvbmVudC9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJFU1RfQ09ORklHIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgSHR0cEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvaHR0cC1hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFBhZ2luYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvcGFnaW5hdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZU1vZHVsZSB9IGZyb20gJ25neC1kcm9wem9uZSc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBGc0ljb25DQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvZnMtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnbmd4LXRyYW5zbGF0ZS1tdWx0aS1odHRwLWxvYWRlcic7XG5pbXBvcnQge1xuICBOYkF1dGhDb21wb25lbnQsXG4gIE5iQXV0aE1vZHVsZSxcbiAgTmJBdXRoU2ltcGxlVG9rZW4sXG4gIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3ksXG59IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IGlzQXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9pcy1hdXRoLmd1YXJkJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJlc3RTaGFyZVNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc3QtYWRtaW4vZGlyZWN0aXZlcy9hdHRyaWJ1dGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtbWFpbi1jb21wb25lbnQvbWVudS1maWx0ZXIucGlwZSc7XG5pbXBvcnQgeyBHbWFwc0NvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZ21hcHMvZ21hcHMuY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZU1hcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XG5cbi8vIHNlcnZpY2VSZXN0Q29uZmlnLnJlc3RQYXRoRmlsZVRyYW5zbGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cDogSHR0cENsaWVudCkge1xuICAvLyByZXR1cm4gbmV3IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCBbXG4gIC8vICAgeyBwcmVmaXg6ICcuL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LC8vaG9zdCBhcHAgaTE4biBhc3NldHNcbiAgLy8gICB7IHByZWZpeDogJy4vbGliL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LCAvL3lvdXIgbGliIGFzc2V0c1xuICAvLyAgIHsgcHJlZml4OiAnLi9yZXN0L2xpYi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwgLy95b3VyIGxpYiBhc3NldHNcbiAgLy8gXSlcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICdhc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgRnNJY29uQ0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBBdHRyaWJ1dGVEaXJlY3RpdmUsXG4gICAgTWVudUZpbHRlclBpcGUsXG4gICAgR21hcHNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBHbWFwc0NvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBHbWFwc0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudEpzb25wTW9kdWxlLFxuICAgIE5iQWN0aW9uc01vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iVGFnTW9kdWxlLFxuICAgIE5iUmFkaW9Nb2R1bGUsXG4gICAgTmJVc2VyTW9kdWxlLFxuICAgIE5iVHJlZUdyaWRNb2R1bGUsXG4gICAgTmJBbGVydE1vZHVsZSxcbiAgICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBOZzJTbWFydFRhYmxlTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXG4gICAgQ25nSHRtbENvbXBpbGVyTW9kdWxlLFxuICAgIE5iU3Bpbm5lck1vZHVsZSxcbiAgICBOYlRhYnNldE1vZHVsZSxcbiAgICBOYlBvcG92ZXJNb2R1bGUsXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxuICAgIE5iVG9nZ2xlTW9kdWxlLFxuICAgIE5iTGlzdE1vZHVsZSxcbiAgICBOYlRvb2x0aXBNb2R1bGUsXG4gICAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmd4RHJvcHpvbmVNb2R1bGUsXG4gICAgTmd4UGVybWlzc2lvbnNNb2R1bGUuZm9yQ2hpbGQoKSxcbiAgICBOYkxheW91dE1vZHVsZSxcblxuICAgIE5iU2VsZWN0TW9kdWxlLFxuICAgIE5iU2lkZWJhck1vZHVsZSxcbiAgICBOYk1lbnVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJEaWFsb2dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iV2luZG93TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYlRvYXN0ck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaGVtZU1vZHVsZS5mb3JSb290KCksXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIEdvb2dsZU1hcHNNb2R1bGUsXG5cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyLFxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEF1dGhJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogUGFnaW5hdGlvbkludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBdXRoR3VhcmQsXG4gICAgaXNBdXRoR3VhcmQsXG4gICAgUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIFJlc3RMYW5nU2VydmljZSxcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIFJlc3RTaGFyZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RBZG1pbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdEFkbWluOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWNvbkxpYnJhcmllczogTmJJY29uTGlicmFyaWVzLFxuICAgIHByaXZhdGUgcmVzdExhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhcycsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhcycsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhcicsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhcicsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhYicsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhYicsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhZCcsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhLWR1b3RvbmUnLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMucmVzdExhbmdTZXJ2aWNlLnNldEluaXRpYWxBcHBMYW5ndWFnZSgpO1xuXG4gICAgY29uc3QgdGVtcE1vZHVsZSA9IE5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBOYkF1dGhDb21wb25lbnQsXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW2lzQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdhZG1pbicsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFsuLi4odGhpcy5zZXJ2aWNlUmVzdEFkbWluLmdlbmVyYXRlUm91dGVzKCkgYXMgYW55KV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvJyB9LFxuICAgICAgICBdKSxcbiAgICAgICAgTmJBdXRoTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgIHN0cmF0ZWdpZXM6IFtcbiAgICAgICAgICAgIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3kuc2V0dXAoe1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMuc3RyYXRlZ3ksXG5cbiAgICAgICAgICAgICAgYmFzZUVuZHBvaW50OiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMubG9naW5FbmRQb2ludCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgICAgc3VjY2VzczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luLFxuICAgICAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IE5iQXV0aFNpbXBsZVRva2VuLFxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zXG4gICAgICAgICAgICAgICAgICAudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZvcm1zOiB7XG4gICAgICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgICByZWRpcmVjdERlbGF5OiA1MDAsIC8vIGRlbGF5IGJlZm9yZSByZWRpcmVjdCBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9naW4sIHdoaWxlIHN1Y2Nlc3MgbWVzc2FnZSBpcyBzaG93biB0byB0aGUgdXNlclxuICAgICAgICAgICAgICBzdHJhdGVneTogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLnN0cmF0ZWd5LCAvLyBzdHJhdGVneSBpZCBrZXkuXG4gICAgICAgICAgICAgIHNob3dNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KShjbGFzcyB7fSk7XG5cbiAgICB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyh0ZW1wTW9kdWxlKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdXRlcyA9IHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGxvYWRDaGlsZHJlbigpIHtcbiAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW3JvdXRlcywgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcmVzdENvbmZpZzogUkVTVF9DT05GSUdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSZXN0QWRtaW5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc3RBZG1pbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdyZXN0Q29uZmlnJywgdXNlVmFsdWU6IHJlc3RDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19