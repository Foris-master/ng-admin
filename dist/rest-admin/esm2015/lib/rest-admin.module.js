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
import { SelectAllCheckboxRenderComponent } from './rest-admin/rest-resource/components/fs-icon-ccomponent/select.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./rest-admin/rest-resource/service/rest-admin-config.service";
import * as i3 from "@nebular/theme";
import * as i4 from "./rest-admin/rest-resource/service/rest-lang.service";
import * as i5 from "ngx-permissions";
import * as i6 from "./@core/core.module";
import * as i7 from "./@theme/theme.module";
import * as i8 from "@ngx-translate/core";
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
                    // { path: '**', redirectTo: '/' },
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
            NgxPermissionsModule.forRoot(),
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
                    SelectAllCheckboxRenderComponent,
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
                    SelectAllCheckboxRenderComponent,
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
                    NgxPermissionsModule.forRoot(),
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
        SelectAllCheckboxRenderComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2QsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osbUJBQW1CLEVBRW5CLGFBQWEsRUFDYixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUs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MkI7UUFDM0IsMEJBQTBCO1FBQzFCLGlDQUFpQztRQUNqQyw4QkFBOEI7UUFDOUIsMkJBQTJCO1FBQzNCLG1CQUFtQjtRQUNuQixnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGNBQWMsYUE2QmQsWUFBWTtRQUNaLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsY0FBYztRQUNkLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2Isb0JBQW9CO1FBQ3BCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixjQUFjO1FBQ2QsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsWUFBWTtRQUNaLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQiwyQkFFakIsY0FBYztRQUNkLGNBQWM7UUFDZCxlQUFlLHlKQVNmLFlBQVk7UUFDWixnQkFBZ0IsaUNBdkVoQix5QkFBeUI7UUFDekIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cENsaWVudE1vZHVsZSxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG4gIEh0dHBDbGllbnRKc29ucE1vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtcbiAgQ29tcGlsZXIsXG4gIEVycm9ySGFuZGxlcixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE5iQWN0aW9uc01vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJDaGVja2JveE1vZHVsZSxcbiAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iSW5wdXRNb2R1bGUsXG4gIE5iUmFkaW9Nb2R1bGUsXG4gIE5iU2VsZWN0TW9kdWxlLFxuICBOYlVzZXJNb2R1bGUsXG4gIE5iVHJlZUdyaWRNb2R1bGUsXG4gIE5iVGltZXBpY2tlck1vZHVsZSxcbiAgTmJUYWdNb2R1bGUsXG4gIE5iQXV0b2NvbXBsZXRlTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iUG9wb3Zlck1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iVG9vbHRpcE1vZHVsZSxcbiAgTmJUb2FzdHJNb2R1bGUsXG4gIE5iU2lkZWJhck1vZHVsZSxcbiAgTmJXaW5kb3dNb2R1bGUsXG4gIE5iVG9nZ2xlTW9kdWxlLFxuICBOYkxpc3RNb2R1bGUsXG4gIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gIE5iSWNvbkxpYnJhcmllcyxcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJMYXlvdXRNb2R1bGUsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5nMlNtYXJ0VGFibGVNb2R1bGUgfSBmcm9tICduZzItc21hcnQtdGFibGUnO1xuaW1wb3J0IHsgVGhlbWVNb2R1bGUgfSBmcm9tICcuL0B0aGVtZS90aGVtZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ25nSHRtbENvbXBpbGVyTW9kdWxlIH0gZnJvbSAnQGNvZGVoaW50LW5nL2h0bWwtY29tcGlsZXInO1xuXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnQGlwbGFiL25neC1maWxlLXVwbG9hZCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtYWRtaW4tY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUkVTVF9DT05GSUcgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtcmVzb3VyY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBIdHRwQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9odHRwLWF1dGguaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9wYWdpbmF0aW9uLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0RXhwb3J0U2VydmljZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1leHBvcnQuc2VydmljZSc7XG5pbXBvcnQgeyBVcGxvYWRGaWxlQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy91cGxvYWQtZmlsZS91cGxvYWQtZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyJztcbmltcG9ydCB7IFJlc3RMYW5nU2VydmljZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1sYW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL3V0aWxzL2h0dHAtZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9hdXRoLmd1YXJkJztcbmltcG9ydCB7IE5neERyb3B6b25lTW9kdWxlIH0gZnJvbSAnbmd4LWRyb3B6b25lJztcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zTW9kdWxlIH0gZnJvbSAnbmd4LXBlcm1pc3Npb25zJztcbmltcG9ydCB7IENvcmVNb2R1bGUgfSBmcm9tICcuL0Bjb3JlL2NvcmUubW9kdWxlJztcbmltcG9ydCB7IEZzSWNvbkNDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9mcy1pY29uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNdWx0aVRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICduZ3gtdHJhbnNsYXRlLW11bHRpLWh0dHAtbG9hZGVyJztcbmltcG9ydCB7XG4gIE5iQXV0aENvbXBvbmVudCxcbiAgTmJBdXRoTW9kdWxlLFxuICBOYkF1dGhTaW1wbGVUb2tlbixcbiAgTmJQYXNzd29yZEF1dGhTdHJhdGVneSxcbn0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgaXNBdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2lzLWF1dGguZ3VhcmQnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2Uvbm90aWZpY2F0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgUmVzdFNoYXJlU2VydmljZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1zaGFyZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF0dHJpYnV0ZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9kaXJlY3RpdmVzL2F0dHJpYnV0ZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTWVudUZpbHRlclBpcGUgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1tYWluLWNvbXBvbmVudC9tZW51LWZpbHRlci5waXBlJztcbmltcG9ydCB7IEdtYXBzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9nbWFwcy9nbWFwcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR29vZ2xlTWFwc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2dvb2dsZS1tYXBzJztcbmltcG9ydCB7IFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvc2VsZWN0LmNvbXBvbmVudCc7XG5cbi8vIHNlcnZpY2VSZXN0Q29uZmlnLnJlc3RQYXRoRmlsZVRyYW5zbGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cDogSHR0cENsaWVudCkge1xuICAvLyByZXR1cm4gbmV3IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCBbXG4gIC8vICAgeyBwcmVmaXg6ICcuL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LC8vaG9zdCBhcHAgaTE4biBhc3NldHNcbiAgLy8gICB7IHByZWZpeDogJy4vbGliL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LCAvL3lvdXIgbGliIGFzc2V0c1xuICAvLyAgIHsgcHJlZml4OiAnLi9yZXN0L2xpYi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwgLy95b3VyIGxpYiBhc3NldHNcbiAgLy8gXSlcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICdhc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQsXG4gICAgRnNJY29uQ0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBBdHRyaWJ1dGVEaXJlY3RpdmUsXG4gICAgTWVudUZpbHRlclBpcGUsXG4gICAgR21hcHNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBHbWFwc0NvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gICAgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBHbWFwc0NvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudEpzb25wTW9kdWxlLFxuICAgIE5iQWN0aW9uc01vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iVGFnTW9kdWxlLFxuICAgIE5iUmFkaW9Nb2R1bGUsXG4gICAgTmJVc2VyTW9kdWxlLFxuICAgIE5iVHJlZUdyaWRNb2R1bGUsXG4gICAgTmJBbGVydE1vZHVsZSxcbiAgICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBOZzJTbWFydFRhYmxlTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXG4gICAgQ25nSHRtbENvbXBpbGVyTW9kdWxlLFxuICAgIE5iU3Bpbm5lck1vZHVsZSxcbiAgICBOYlRhYnNldE1vZHVsZSxcbiAgICBOYlBvcG92ZXJNb2R1bGUsXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxuICAgIE5iVG9nZ2xlTW9kdWxlLFxuICAgIE5iTGlzdE1vZHVsZSxcbiAgICBOYlRvb2x0aXBNb2R1bGUsXG4gICAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmd4RHJvcHpvbmVNb2R1bGUsXG4gICAgTmd4UGVybWlzc2lvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iTGF5b3V0TW9kdWxlLFxuICAgIE5iU2VsZWN0TW9kdWxlLFxuICAgIE5iU2lkZWJhck1vZHVsZSxcbiAgICBOYk1lbnVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJEaWFsb2dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iV2luZG93TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYlRvYXN0ck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaGVtZU1vZHVsZS5mb3JSb290KCksXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIEdvb2dsZU1hcHNNb2R1bGUsXG5cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyLFxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEF1dGhJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogUGFnaW5hdGlvbkludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBdXRoR3VhcmQsXG4gICAgaXNBdXRoR3VhcmQsXG4gICAgUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIFJlc3RMYW5nU2VydmljZSxcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIFJlc3RTaGFyZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RBZG1pbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdEFkbWluOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWNvbkxpYnJhcmllczogTmJJY29uTGlicmFyaWVzLFxuICAgIHByaXZhdGUgcmVzdExhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhcycsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhcycsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhcicsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhcicsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhYicsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhYicsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhZCcsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhLWR1b3RvbmUnLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMucmVzdExhbmdTZXJ2aWNlLnNldEluaXRpYWxBcHBMYW5ndWFnZSgpO1xuXG4gICAgY29uc3QgdGVtcE1vZHVsZSA9IE5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBOYkF1dGhDb21wb25lbnQsXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW2lzQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdhZG1pbicsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFsuLi4odGhpcy5zZXJ2aWNlUmVzdEFkbWluLmdlbmVyYXRlUm91dGVzKCkgYXMgYW55KV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAvLyB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvJyB9LFxuICAgICAgICBdKSxcbiAgICAgICAgTmJBdXRoTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgIHN0cmF0ZWdpZXM6IFtcbiAgICAgICAgICAgIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3kuc2V0dXAoe1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMuc3RyYXRlZ3ksXG4gICAgICAgICAgICAgIGJhc2VFbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmxvZ2luRW5kUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgIC5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbixcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgLnRva2VuTG9jYXRpb25JblJlc3BvbnNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmb3Jtczoge1xuICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgcmVkaXJlY3REZWxheTogNTAwLCAvLyBkZWxheSBiZWZvcmUgcmVkaXJlY3QgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvZ2luLCB3aGlsZSBzdWNjZXNzIG1lc3NhZ2UgaXMgc2hvd24gdG8gdGhlIHVzZXJcbiAgICAgICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy5zdHJhdGVneSwgLy8gc3RyYXRlZ3kgaWQga2V5LlxuICAgICAgICAgICAgICBzaG93TWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSkoY2xhc3Mge30pO1xuXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmModGVtcE1vZHVsZSkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBjb25zdCByb3V0ZXMgPSB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtyb3V0ZXMsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHJlc3RDb25maWc6IFJFU1RfQ09ORklHXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UmVzdEFkbWluTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXN0QWRtaW5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAncmVzdENvbmZpZycsIHVzZVZhbHVlOiByZXN0Q29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==