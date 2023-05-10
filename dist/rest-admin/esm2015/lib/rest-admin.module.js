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
i0.ɵɵsetComponentScope(RestResourceAddComponent, [i3.NbCardComponent, i9.NgIf, i3.NbCardHeaderComponent, i3.NbCardBodyComponent, i3.NbTabsetComponent, i3.NbTabComponent, i10.ɵNgNoValidate, i10.NgControlStatusGroup, i10.FormGroupDirective, i9.NgForOf, i3.NbInputDirective, i10.DefaultValueAccessor, AttributeDirective, i10.NgControlStatus, i10.FormControlName, i10.NumberValueAccessor, i3.NbDatepickerDirective, i3.NbDatepickerComponent, i3.NbDateTimePickerComponent, i3.NbTimePickerDirective, i3.NbTimePickerComponent, i3.NbSelectComponent, i3.NbOptionComponent, i3.NbToggleComponent, i11.NgxDropzoneComponent, i11.NgxDropzoneLabelDirective, i3.NbIconComponent, i11.NgxDropzonePreviewComponent, i11.NgxDropzoneImagePreviewComponent, i3.NbButtonComponent, i12.ImageCropperComponent, i3.NbTagListComponent, i3.NbTagComponent, i3.NbTagInputDirective, i3.NbAutocompleteDirective, i3.NbAutocompleteComponent, i10.NgModel, GmapsComponent, i3.NbContextMenuDirective, i13.Ng2SmartTableComponent, i3.NbCardFooterComponent], [i9.TitleCasePipe, i9.AsyncPipe, i8.TranslatePipe]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2QsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osbUJBQW1CLEVBRW5CLGFBQWEsRUFDYixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUs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LDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsaUNBQWlDO1FBQ2pDLDhCQUE4QjtRQUM5QiwyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLGdDQUFnQztRQUNoQyxnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsY0FBYyxhQTZCZCxZQUFZO1FBQ1osYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixjQUFjO1FBQ2QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsV0FBVztRQUNYLGFBQWE7UUFDYixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsaUJBQWlCLDJCQUVqQixjQUFjO1FBRWQsY0FBYztRQUNkLGVBQWUseUpBU2YsWUFBWTtRQUNaLGdCQUFnQixpQ0F4RWhCLHlCQUF5QjtRQUN6Qix3QkFBd0I7UUFDeEIsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixpQ0FBaUM7UUFDakMsOEJBQThCO1FBQzlCLDJCQUEyQjtRQUMzQixtQkFBbUI7UUFDbkIsY0FBYztRQUNkLGNBQWM7dUJBeEJkLHdCQUF3QiwyUEFVeEIsa0JBQWtCLHlsQkFFbEIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBDbGllbnRNb2R1bGUsXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxuICBIdHRwQ2xpZW50SnNvbnBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBFcnJvckhhbmRsZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQ2hlY2tib3hNb2R1bGUsXG4gIE5iRGF0ZXBpY2tlck1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYklucHV0TW9kdWxlLFxuICBOYlJhZGlvTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYlRyZWVHcmlkTW9kdWxlLFxuICBOYlRpbWVwaWNrZXJNb2R1bGUsXG4gIE5iVGFnTW9kdWxlLFxuICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgTmJNZW51TW9kdWxlLFxuICBOYlBvcG92ZXJNb2R1bGUsXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlRvb2x0aXBNb2R1bGUsXG4gIE5iVG9hc3RyTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iV2luZG93TW9kdWxlLFxuICBOYlRvZ2dsZU1vZHVsZSxcbiAgTmJMaXN0TW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYkljb25MaWJyYXJpZXMsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7IFRoZW1lTW9kdWxlIH0gZnJvbSAnLi9AdGhlbWUvdGhlbWUubW9kdWxlJztcbmltcG9ydCB7IENuZ0h0bWxDb21waWxlck1vZHVsZSB9IGZyb20gJ0Bjb2RlaGludC1uZy9odG1sLWNvbXBpbGVyJztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ0BpcGxhYi9uZ3gtZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1tYWluLWNvbXBvbmVudC9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJFU1RfQ09ORklHIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgSHR0cEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvaHR0cC1hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFBhZ2luYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvcGFnaW5hdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZU1vZHVsZSB9IGZyb20gJ25neC1kcm9wem9uZSc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBGc0ljb25DQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvZnMtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnbmd4LXRyYW5zbGF0ZS1tdWx0aS1odHRwLWxvYWRlcic7XG5pbXBvcnQge1xuICBOYkF1dGhDb21wb25lbnQsXG4gIE5iQXV0aE1vZHVsZSxcbiAgTmJBdXRoU2ltcGxlVG9rZW4sXG4gIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3ksXG59IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IGlzQXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9pcy1hdXRoLmd1YXJkJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJlc3RTaGFyZVNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc3QtYWRtaW4vZGlyZWN0aXZlcy9hdHRyaWJ1dGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtbWFpbi1jb21wb25lbnQvbWVudS1maWx0ZXIucGlwZSc7XG5pbXBvcnQgeyBHbWFwc0NvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZ21hcHMvZ21hcHMuY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZU1hcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L3NlbGVjdC5jb21wb25lbnQnO1xuXG4vLyBzZXJ2aWNlUmVzdENvbmZpZy5yZXN0UGF0aEZpbGVUcmFuc2xhdGVcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgLy8gcmV0dXJuIG5ldyBNdWx0aVRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgW1xuICAvLyAgIHsgcHJlZml4OiAnLi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwvL2hvc3QgYXBwIGkxOG4gYXNzZXRzXG4gIC8vICAgeyBwcmVmaXg6ICcuL2xpYi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwgLy95b3VyIGxpYiBhc3NldHNcbiAgLy8gICB7IHByZWZpeDogJy4vcmVzdC9saWIvYXNzZXRzL2kxOG4vJywgc3VmZml4OiAnLmpzb24nIH0sIC8veW91ciBsaWIgYXNzZXRzXG4gIC8vIF0pXG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCAnYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgQXR0cmlidXRlRGlyZWN0aXZlLFxuICAgIE1lbnVGaWx0ZXJQaXBlLFxuICAgIEdtYXBzQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgR21hcHNDb21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBGc0ljb25DQ29tcG9uZW50LFxuICAgIFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgR21hcHNDb21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEh0dHBDbGllbnRKc29ucE1vZHVsZSxcbiAgICBOYkFjdGlvbnNNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iQ2hlY2tib3hNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYlRhZ01vZHVsZSxcbiAgICBOYlJhZGlvTW9kdWxlLFxuICAgIE5iVXNlck1vZHVsZSxcbiAgICBOYlRyZWVHcmlkTW9kdWxlLFxuICAgIE5iQWxlcnRNb2R1bGUsXG4gICAgTmJBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTmcyU21hcnRUYWJsZU1vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIENuZ0h0bWxDb21waWxlck1vZHVsZSxcbiAgICBOYlNwaW5uZXJNb2R1bGUsXG4gICAgTmJUYWJzZXRNb2R1bGUsXG4gICAgTmJQb3BvdmVyTW9kdWxlLFxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcbiAgICBOYlRvZ2dsZU1vZHVsZSxcbiAgICBOYkxpc3RNb2R1bGUsXG4gICAgTmJUb29sdGlwTW9kdWxlLFxuICAgIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5neERyb3B6b25lTW9kdWxlLFxuICAgIE5neFBlcm1pc3Npb25zTW9kdWxlLmZvckNoaWxkKCksXG4gICAgTmJMYXlvdXRNb2R1bGUsXG5cbiAgICBOYlNlbGVjdE1vZHVsZSxcbiAgICBOYlNpZGViYXJNb2R1bGUsXG4gICAgTmJNZW51TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkRhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iRGlhbG9nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYldpbmRvd01vZHVsZS5mb3JSb290KCksXG4gICAgTmJUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgQ29yZU1vZHVsZS5mb3JSb290KCksXG4gICAgVGhlbWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBHb29nbGVNYXBzTW9kdWxlLFxuXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlVHJhbnNsYXRlSHR0cExvYWRlcixcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnRdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBBdXRoSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IFBhZ2luYXRpb25JbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgQXV0aEd1YXJkLFxuICAgIGlzQXV0aEd1YXJkLFxuICAgIFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBSZXN0TGFuZ1NlcnZpY2UsXG4gICAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBSZXN0U2hhcmVTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbjogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGljb25MaWJyYXJpZXM6IE5iSWNvbkxpYnJhcmllcyxcbiAgICBwcml2YXRlIHJlc3RMYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYXMnLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYXMnLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYXInLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYXInLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYWInLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYWInLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYWQnLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYS1kdW90b25lJyxcbiAgICAgIGljb25DbGFzc1ByZWZpeDogJ2ZhJyxcbiAgICB9KTtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcblxuICAgIGNvbnN0IHRlbXBNb2R1bGUgPSBOZ01vZHVsZSh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogTmJBdXRoQ29tcG9uZW50LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtpc0F1dGhHdWFyZF0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnYWRtaW4nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbLi4uKHRoaXMuc2VydmljZVJlc3RBZG1pbi5nZW5lcmF0ZVJvdXRlcygpIGFzIGFueSldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9sb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgLy8geyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnLycgfSxcbiAgICAgICAgXSksXG4gICAgICAgIE5iQXV0aE1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICBzdHJhdGVnaWVzOiBbXG4gICAgICAgICAgICBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5LnNldHVwKHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLnN0cmF0ZWd5LFxuXG4gICAgICAgICAgICAgIGJhc2VFbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmxvZ2luRW5kUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgIC5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbixcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgLnRva2VuTG9jYXRpb25JblJlc3BvbnNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmb3Jtczoge1xuICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgcmVkaXJlY3REZWxheTogNTAwLCAvLyBkZWxheSBiZWZvcmUgcmVkaXJlY3QgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvZ2luLCB3aGlsZSBzdWNjZXNzIG1lc3NhZ2UgaXMgc2hvd24gdG8gdGhlIHVzZXJcbiAgICAgICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy5zdHJhdGVneSwgLy8gc3RyYXRlZ3kgaWQga2V5LlxuICAgICAgICAgICAgICBzaG93TWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSkoY2xhc3Mge30pO1xuXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmModGVtcE1vZHVsZSkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBjb25zdCByb3V0ZXMgPSB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtyb3V0ZXMsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHJlc3RDb25maWc6IFJFU1RfQ09ORklHXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UmVzdEFkbWluTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXN0QWRtaW5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAncmVzdENvbmZpZycsIHVzZVZhbHVlOiByZXN0Q29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==