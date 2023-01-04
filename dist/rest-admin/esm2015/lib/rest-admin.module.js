import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule, NbTreeGridModule, NbTimepickerModule, NbTagModule, NbAutocompleteModule, NbDialogModule, NbSpinnerModule, NbMenuModule, NbPopoverModule, NbTabsetModule, NbTooltipModule, NbToastrModule, NbSidebarModule, NbWindowModule, NbToggleModule, NbListModule, NbContextMenuModule, NbAlertModule, } from '@nebular/theme';
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
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./rest-admin/rest-resource/service/rest-admin-config.service";
import * as i3 from "@nebular/theme";
import * as i4 from "./rest-admin/rest-resource/service/rest-lang.service";
import * as i5 from "ngx-permissions";
import * as i6 from "./@core/core.module";
import * as i7 from "./@theme/theme.module";
import * as i8 from "@ngx-translate/core";
import * as i9 from "@nebular/auth";
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
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                ]),
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
            const authRoutes = {
                path: '',
                component: NbAuthComponent,
                children: [
                    {
                        path: 'login',
                        component: LoginComponent,
                    },
                ],
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
        LoginComponent], imports: [CommonModule,
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
        NgxDropzoneModule, i5.NgxPermissionsModule, NbSelectModule,
        NbSidebarModule, i3.NbMenuModule, i3.NbDatepickerModule, i3.NbDialogModule, i3.NbWindowModule, i3.NbToastrModule, i3.NbTimepickerModule, i6.CoreModule, i7.ThemeModule, NbIconModule, i8.TranslateModule, i9.NbAuthModule], exports: [RestResourceListComponent,
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
        RestResourceService,
        RestAdminConfigService,
        RestExportService,
        RestLangService,
    ], imports: [[
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
            NbAuthModule.forRoot({
                strategies: [
                    NbPasswordAuthStrategy.setup({
                        name: RestAdminConfigService._authParams.strategy,
                        baseEndpoint: RestAdminConfigService._authParams.baseEndpoint,
                        login: {
                            method: 'post',
                            endpoint: RestAdminConfigService._authParams.loginEndPoint,
                            redirect: {
                                success: RestAdminConfigService._authParams.redirectRouteAfterLogin,
                                failure: null,
                            },
                        },
                        token: {
                            class: NbAuthSimpleToken,
                            key: RestAdminConfigService._authParams.tokenLocationInResponse,
                        },
                    }),
                ],
                forms: {
                    login: {
                        redirectDelay: 500,
                        strategy: RestAdminConfigService._authParams.strategy,
                        showMessages: {
                            success: true,
                            error: true,
                        },
                    },
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
                        NbAuthModule.forRoot({
                            strategies: [
                                NbPasswordAuthStrategy.setup({
                                    name: RestAdminConfigService._authParams.strategy,
                                    baseEndpoint: RestAdminConfigService._authParams.baseEndpoint,
                                    login: {
                                        method: 'post',
                                        endpoint: RestAdminConfigService._authParams.loginEndPoint,
                                        redirect: {
                                            success: RestAdminConfigService._authParams.redirectRouteAfterLogin,
                                            failure: null,
                                        },
                                    },
                                    token: {
                                        class: NbAuthSimpleToken,
                                        key: RestAdminConfigService._authParams.tokenLocationInResponse,
                                    },
                                }),
                            ],
                            forms: {
                                login: {
                                    redirectDelay: 500,
                                    strategy: RestAdminConfigService._authParams.strategy,
                                    showMessages: {
                                        success: true,
                                        error: true,
                                    },
                                },
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
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: i2.RestAdminConfigService }, { type: i3.NbIconLibraries }, { type: i4.RestLangService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUlMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEVBQ2QsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsRUFFbkIsYUFBYSxHQUNkLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxN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QUU7b0NBQ0wsYUFBYSxFQUFFLEdBQUc7b0NBQ2xCLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsUUFBUTtvQ0FDckQsWUFBWSxFQUFFO3dDQUNaLE9BQU8sRUFBRSxJQUFJO3dDQUNiLEtBQUssRUFBRSxJQUFJO3FDQUNaO2lDQUNGOzZCQUNGO3lCQUNGLENBQUM7cUJBQ0g7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUMxRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt3QkFDM0U7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsU0FBUzt3QkFDVCxtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBDbGllbnRNb2R1bGUsXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBDb21waWxlcixcbiAgRXJyb3JIYW5kbGVyLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkNoZWNrYm94TW9kdWxlLFxuICBOYkRhdGVwaWNrZXJNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJJbnB1dE1vZHVsZSxcbiAgTmJSYWRpb01vZHVsZSxcbiAgTmJTZWxlY3RNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJUcmVlR3JpZE1vZHVsZSxcbiAgTmJUaW1lcGlja2VyTW9kdWxlLFxuICBOYlRhZ01vZHVsZSxcbiAgTmJBdXRvY29tcGxldGVNb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG4gIE5iTWVudU1vZHVsZSxcbiAgTmJQb3BvdmVyTW9kdWxlLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJUb29sdGlwTW9kdWxlLFxuICBOYlRvYXN0ck1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYldpbmRvd01vZHVsZSxcbiAgTmJUb2dnbGVNb2R1bGUsXG4gIE5iTGlzdE1vZHVsZSxcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgTmJJY29uTGlicmFyaWVzLFxuICBOYkFsZXJ0TW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7IFRoZW1lTW9kdWxlIH0gZnJvbSAnLi9AdGhlbWUvdGhlbWUubW9kdWxlJztcbmltcG9ydCB7IENuZ0h0bWxDb21waWxlck1vZHVsZSB9IGZyb20gJ0Bjb2RlaGludC1uZy9odG1sLWNvbXBpbGVyJztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ0BpcGxhYi9uZ3gtZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1tYWluLWNvbXBvbmVudC9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJFU1RfQ09ORklHIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgSHR0cEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvaHR0cC1hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFBhZ2luYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvcGFnaW5hdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZU1vZHVsZSB9IGZyb20gJ25neC1kcm9wem9uZSc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBGc0ljb25DQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvZnMtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnbmd4LXRyYW5zbGF0ZS1tdWx0aS1odHRwLWxvYWRlcic7XG5pbXBvcnQge1xuICBOYkF1dGhDb21wb25lbnQsXG4gIE5iQXV0aE1vZHVsZSxcbiAgTmJBdXRoU2ltcGxlVG9rZW4sXG4gIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3ksXG59IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50JztcblxuLy8gc2VydmljZVJlc3RDb25maWcucmVzdFBhdGhGaWxlVHJhbnNsYXRlXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNsYXRlSHR0cExvYWRlcihodHRwOiBIdHRwQ2xpZW50KSB7XG4gIC8vIHJldHVybiBuZXcgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsIFtcbiAgLy8gICB7IHByZWZpeDogJy4vYXNzZXRzL2kxOG4vJywgc3VmZml4OiAnLmpzb24nIH0sLy9ob3N0IGFwcCBpMThuIGFzc2V0c1xuICAvLyAgIHsgcHJlZml4OiAnLi9saWIvYXNzZXRzL2kxOG4vJywgc3VmZml4OiAnLmpzb24nIH0sIC8veW91ciBsaWIgYXNzZXRzXG4gIC8vICAgeyBwcmVmaXg6ICcuL3Jlc3QvbGliL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LCAvL3lvdXIgbGliIGFzc2V0c1xuICAvLyBdKVxuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJ2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBGc0ljb25DQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gIF0sXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBGc0ljb25DQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgIFVwbG9hZEZpbGVDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOYkFjdGlvbnNNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJDYXJkTW9kdWxlLFxuICAgIE5iQ2hlY2tib3hNb2R1bGUsXG4gICAgTmJJbnB1dE1vZHVsZSxcbiAgICBOYlRhZ01vZHVsZSxcbiAgICBOYlJhZGlvTW9kdWxlLFxuICAgIE5iVXNlck1vZHVsZSxcbiAgICBOYlRyZWVHcmlkTW9kdWxlLFxuICAgIE5iQWxlcnRNb2R1bGUsXG4gICAgTmJBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTmcyU21hcnRUYWJsZU1vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIENuZ0h0bWxDb21waWxlck1vZHVsZSxcbiAgICBOYlNwaW5uZXJNb2R1bGUsXG4gICAgTmJUYWJzZXRNb2R1bGUsXG4gICAgTmJQb3BvdmVyTW9kdWxlLFxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcbiAgICBOYlRvZ2dsZU1vZHVsZSxcbiAgICBOYkxpc3RNb2R1bGUsXG4gICAgTmJUb29sdGlwTW9kdWxlLFxuICAgIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5neERyb3B6b25lTW9kdWxlLFxuICAgIE5neFBlcm1pc3Npb25zTW9kdWxlLmZvckNoaWxkKCksXG5cbiAgICBOYlNlbGVjdE1vZHVsZSxcbiAgICBOYlNpZGViYXJNb2R1bGUsXG4gICAgTmJNZW51TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkRhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iRGlhbG9nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYldpbmRvd01vZHVsZS5mb3JSb290KCksXG4gICAgTmJUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgQ29yZU1vZHVsZS5mb3JSb290KCksXG4gICAgVGhlbWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyLFxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIE5iQXV0aE1vZHVsZS5mb3JSb290KHtcbiAgICAgIHN0cmF0ZWdpZXM6IFtcbiAgICAgICAgTmJQYXNzd29yZEF1dGhTdHJhdGVneS5zZXR1cCh7XG4gICAgICAgICAgbmFtZTogUmVzdEFkbWluQ29uZmlnU2VydmljZS5fYXV0aFBhcmFtcy5zdHJhdGVneSxcblxuICAgICAgICAgIGJhc2VFbmRwb2ludDogUmVzdEFkbWluQ29uZmlnU2VydmljZS5fYXV0aFBhcmFtcy5iYXNlRW5kcG9pbnQsXG4gICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UuX2F1dGhQYXJhbXMubG9naW5FbmRQb2ludCxcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XG4gICAgICAgICAgICAgIHN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgUmVzdEFkbWluQ29uZmlnU2VydmljZS5fYXV0aFBhcmFtcy5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbixcbiAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICBjbGFzczogTmJBdXRoU2ltcGxlVG9rZW4sXG4gICAgICAgICAgICBrZXk6IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UuX2F1dGhQYXJhbXMudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgZm9ybXM6IHtcbiAgICAgICAgbG9naW46IHtcbiAgICAgICAgICByZWRpcmVjdERlbGF5OiA1MDAsIC8vIGRlbGF5IGJlZm9yZSByZWRpcmVjdCBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9naW4sIHdoaWxlIHN1Y2Nlc3MgbWVzc2FnZSBpcyBzaG93biB0byB0aGUgdXNlclxuICAgICAgICAgIHN0cmF0ZWd5OiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLl9hdXRoUGFyYW1zLnN0cmF0ZWd5LCAvLyBzdHJhdGVneSBpZCBrZXkuXG4gICAgICAgICAgc2hvd01lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwQXV0aEludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwRXJyb3JJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBQYWdpbmF0aW9uSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIEF1dGhHdWFyZCxcbiAgICBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgUmVzdEV4cG9ydFNlcnZpY2UsXG4gICAgUmVzdExhbmdTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbjogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGljb25MaWJyYXJpZXM6IE5iSWNvbkxpYnJhcmllcyxcbiAgICBwcml2YXRlIHJlc3RMYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYXMnLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYXMnLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYXInLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYXInLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYWInLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYWInLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKCdmYWQnLCB7XG4gICAgICBwYWNrQ2xhc3M6ICdmYS1kdW90b25lJyxcbiAgICAgIGljb25DbGFzc1ByZWZpeDogJ2ZhJyxcbiAgICB9KTtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcblxuICAgIGNvbnN0IHRlbXBNb2R1bGUgPSBOZ01vZHVsZSh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogTmJBdXRoQ29tcG9uZW50LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2FkbWluJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWy4uLih0aGlzLnNlcnZpY2VSZXN0QWRtaW4uZ2VuZXJhdGVSb3V0ZXMoKSBhcyBhbnkpXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sXG4gICAgICAgIF0pLFxuICAgICAgXSxcbiAgICB9KShjbGFzcyB7fSk7XG4gICAgdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmModGVtcE1vZHVsZSkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBjb25zdCByb3V0ZXMgPSB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBjb25zdCBhdXRoUm91dGVzID0ge1xuICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgY29tcG9uZW50OiBOYkF1dGhDb21wb25lbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2xvZ2luJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgICB0aGlzLnJvdXRlci5yZXNldENvbmZpZyhbcm91dGVzLCAuLi50aGlzLnJvdXRlci5jb25maWddKTtcbiAgICB9KTtcbiAgfVxuICBzdGF0aWMgZm9yUm9vdChcbiAgICByZXN0Q29uZmlnOiBSRVNUX0NPTkZJR1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFJlc3RBZG1pbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUmVzdEFkbWluTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogJ3Jlc3RDb25maWcnLCB1c2VWYWx1ZTogcmVzdENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=