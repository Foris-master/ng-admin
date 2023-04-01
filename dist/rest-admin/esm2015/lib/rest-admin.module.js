import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
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
RestAdminModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, deps: [{ token: i1.Router }, { token: i0.Compiler }, { token: i2.RestAdminConfigService }, { token: i3.NbIconLibraries }, { token: i4.RestLangService }], target: i0.ɵɵFactoryTarget.NgModule });
RestAdminModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, declarations: [RestResourceListComponent,
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
        MenuFilterPipe], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
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
        NbSidebarModule, i3.NbMenuModule, i3.NbDatepickerModule, i3.NbDialogModule, i3.NbWindowModule, i3.NbToastrModule, i3.NbTimepickerModule, i6.CoreModule, i7.ThemeModule, NbIconModule, i8.TranslateModule], exports: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent,
        LoginComponent] });
RestAdminModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, providers: [
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
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: createTranslateHttpLoader,
                    deps: [HttpClient],
                },
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminModule, decorators: [{
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
                    ],
                    imports: [
                        CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
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
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: i2.RestAdminConfigService }, { type: i3.NbIconLibraries }, { type: i4.RestLangService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUlMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEVBQ2QsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsRUFFbkIsYUFBYSxFQUNiLGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRSxPQUFPLEVBQUUsZ0JB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Q0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUMxRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt3QkFDM0U7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsU0FBUzt3QkFDVCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsc0JBQXNCO3dCQUN0QixpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YsbUJBQW1CO3dCQUNuQixnQkFBZ0I7cUJBQ2pCO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJhbnNsYXRlTG9hZGVyLCBUcmFuc2xhdGVNb2R1bGUgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgSHR0cENsaWVudCxcbiAgSHR0cENsaWVudE1vZHVsZSxcbiAgSFRUUF9JTlRFUkNFUFRPUlMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBFcnJvckhhbmRsZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQ2hlY2tib3hNb2R1bGUsXG4gIE5iRGF0ZXBpY2tlck1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYklucHV0TW9kdWxlLFxuICBOYlJhZGlvTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYlRyZWVHcmlkTW9kdWxlLFxuICBOYlRpbWVwaWNrZXJNb2R1bGUsXG4gIE5iVGFnTW9kdWxlLFxuICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgTmJNZW51TW9kdWxlLFxuICBOYlBvcG92ZXJNb2R1bGUsXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlRvb2x0aXBNb2R1bGUsXG4gIE5iVG9hc3RyTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iV2luZG93TW9kdWxlLFxuICBOYlRvZ2dsZU1vZHVsZSxcbiAgTmJMaXN0TW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYkljb25MaWJyYXJpZXMsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7IFRoZW1lTW9kdWxlIH0gZnJvbSAnLi9AdGhlbWUvdGhlbWUubW9kdWxlJztcbmltcG9ydCB7IENuZ0h0bWxDb21waWxlck1vZHVsZSB9IGZyb20gJ0Bjb2RlaGludC1uZy9odG1sLWNvbXBpbGVyJztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ0BpcGxhYi9uZ3gtZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1tYWluLWNvbXBvbmVudC9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJFU1RfQ09ORklHIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgSHR0cEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvaHR0cC1hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFBhZ2luYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvcGFnaW5hdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZU1vZHVsZSB9IGZyb20gJ25neC1kcm9wem9uZSc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBGc0ljb25DQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvZnMtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnbmd4LXRyYW5zbGF0ZS1tdWx0aS1odHRwLWxvYWRlcic7XG5pbXBvcnQge1xuICBOYkF1dGhDb21wb25lbnQsXG4gIE5iQXV0aE1vZHVsZSxcbiAgTmJBdXRoU2ltcGxlVG9rZW4sXG4gIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3ksXG59IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IGlzQXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9pcy1hdXRoLmd1YXJkJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJlc3RTaGFyZVNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc3QtYWRtaW4vZGlyZWN0aXZlcy9hdHRyaWJ1dGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtbWFpbi1jb21wb25lbnQvbWVudS1maWx0ZXIucGlwZSc7XG5cbi8vIHNlcnZpY2VSZXN0Q29uZmlnLnJlc3RQYXRoRmlsZVRyYW5zbGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cDogSHR0cENsaWVudCkge1xuICAvLyByZXR1cm4gbmV3IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCBbXG4gIC8vICAgeyBwcmVmaXg6ICcuL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LC8vaG9zdCBhcHAgaTE4biBhc3NldHNcbiAgLy8gICB7IHByZWZpeDogJy4vbGliL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LCAvL3lvdXIgbGliIGFzc2V0c1xuICAvLyAgIHsgcHJlZml4OiAnLi9yZXN0L2xpYi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwgLy95b3VyIGxpYiBhc3NldHNcbiAgLy8gXSlcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsICdhc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgRnNJY29uQ0NvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgICBBdHRyaWJ1dGVEaXJlY3RpdmUsXG4gICAgTWVudUZpbHRlclBpcGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBMb2dpbkNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmJBY3Rpb25zTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJUYWdNb2R1bGUsXG4gICAgTmJSYWRpb01vZHVsZSxcbiAgICBOYlVzZXJNb2R1bGUsXG4gICAgTmJUcmVlR3JpZE1vZHVsZSxcbiAgICBOYkFsZXJ0TW9kdWxlLFxuICAgIE5iQXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE5nMlNtYXJ0VGFibGVNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcbiAgICBDbmdIdG1sQ29tcGlsZXJNb2R1bGUsXG4gICAgTmJTcGlubmVyTW9kdWxlLFxuICAgIE5iVGFic2V0TW9kdWxlLFxuICAgIE5iUG9wb3Zlck1vZHVsZSxcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXG4gICAgTmJUb2dnbGVNb2R1bGUsXG4gICAgTmJMaXN0TW9kdWxlLFxuICAgIE5iVG9vbHRpcE1vZHVsZSxcbiAgICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOZ3hEcm9wem9uZU1vZHVsZSxcbiAgICBOZ3hQZXJtaXNzaW9uc01vZHVsZS5mb3JDaGlsZCgpLFxuICAgIE5iTGF5b3V0TW9kdWxlLFxuXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gICAgTmJTaWRlYmFyTW9kdWxlLFxuICAgIE5iTWVudU1vZHVsZS5mb3JSb290KCksXG4gICAgTmJEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkRpYWxvZ01vZHVsZS5mb3JSb290KCksXG4gICAgTmJXaW5kb3dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iVG9hc3RyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYlRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvcmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRoZW1lTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgbG9hZGVyOiB7XG4gICAgICAgIHByb3ZpZGU6IFRyYW5zbGF0ZUxvYWRlcixcbiAgICAgICAgdXNlRmFjdG9yeTogY3JlYXRlVHJhbnNsYXRlSHR0cExvYWRlcixcbiAgICAgICAgZGVwczogW0h0dHBDbGllbnRdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBBdXRoSW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEh0dHBFcnJvckludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IFBhZ2luYXRpb25JbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAgQXV0aEd1YXJkLFxuICAgIGlzQXV0aEd1YXJkLFxuICAgIFJlc3RSZXNvdXJjZVNlcnZpY2UsXG4gICAgUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBSZXN0RXhwb3J0U2VydmljZSxcbiAgICBSZXN0TGFuZ1NlcnZpY2UsXG4gICAgTm90aWZpY2F0aW9uU2VydmljZSxcbiAgICBSZXN0U2hhcmVTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbjogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGljb25MaWJyYXJpZXM6IE5iSWNvbkxpYnJhcmllcyxcbiAgICBwcml2YXRlIHJlc3RMYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYXMnLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYXMnLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYXInLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYXInLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYWInLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYWInLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYWQnLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYS1kdW90b25lJyxcbiAgICAgIGljb25DbGFzc1ByZWZpeDogJ2ZhJyxcbiAgICB9KTtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcblxuICAgIGNvbnN0IHRlbXBNb2R1bGUgPSBOZ01vZHVsZSh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogTmJBdXRoQ29tcG9uZW50LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtpc0F1dGhHdWFyZF0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogJycsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnYWRtaW4nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbLi4uKHRoaXMuc2VydmljZVJlc3RBZG1pbi5nZW5lcmF0ZVJvdXRlcygpIGFzIGFueSldLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9sb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgICAgLy8geyBwYXRoOiAnKionLCByZWRpcmVjdFRvOiAnLycgfSxcbiAgICAgICAgXSksXG4gICAgICAgIE5iQXV0aE1vZHVsZS5mb3JSb290KHtcbiAgICAgICAgICBzdHJhdGVnaWVzOiBbXG4gICAgICAgICAgICBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5LnNldHVwKHtcbiAgICAgICAgICAgICAgbmFtZTogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLnN0cmF0ZWd5LFxuXG4gICAgICAgICAgICAgIGJhc2VFbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmxvZ2luRW5kUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgIC5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbixcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgLnRva2VuTG9jYXRpb25JblJlc3BvbnNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmb3Jtczoge1xuICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgcmVkaXJlY3REZWxheTogNTAwLCAvLyBkZWxheSBiZWZvcmUgcmVkaXJlY3QgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvZ2luLCB3aGlsZSBzdWNjZXNzIG1lc3NhZ2UgaXMgc2hvd24gdG8gdGhlIHVzZXJcbiAgICAgICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy5zdHJhdGVneSwgLy8gc3RyYXRlZ3kgaWQga2V5LlxuICAgICAgICAgICAgICBzaG93TWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSkoY2xhc3Mge30pO1xuXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmModGVtcE1vZHVsZSkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBjb25zdCByb3V0ZXMgPSB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtyb3V0ZXMsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHJlc3RDb25maWc6IFJFU1RfQ09ORklHXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UmVzdEFkbWluTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXN0QWRtaW5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAncmVzdENvbmZpZycsIHVzZVZhbHVlOiByZXN0Q29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==