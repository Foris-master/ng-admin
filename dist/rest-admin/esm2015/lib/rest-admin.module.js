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
import { ImageZoomComponent } from './rest-admin/rest-resource/components/fs-icon-ccomponent/image-zoom.component';
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
        SelectAllCheckboxRenderComponent,
        FsIconCComponent,
        LoginComponent,
        AttributeDirective,
        MenuFilterPipe,
        GmapsComponent,
        ImageZoomComponent], imports: [CommonModule,
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
        GmapsComponent] });
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
                        SelectAllCheckboxRenderComponent,
                        FsIconCComponent,
                        LoginComponent,
                        AttributeDirective,
                        MenuFilterPipe,
                        GmapsComponent,
                        ImageZoomComponent,
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
                        ImageZoomComponent,
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
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: i2.RestAdminConfigService }, { type: i3.NbIconLibraries }, { type: i4.RestLangService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2QsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osbUJBQW1CLEVBRW5CLGFBQWEsRUFDYixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUs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QWM7d0JBQ2QsZUFBZTt3QkFDZixZQUFZLENBQUMsT0FBTyxFQUFFO3dCQUN0QixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzVCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hCLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hCLGtCQUFrQixDQUFDLE9BQU8sRUFBRTt3QkFDNUIsVUFBVSxDQUFDLE9BQU8sRUFBRTt3QkFDcEIsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsWUFBWTt3QkFDWixnQkFBZ0I7d0JBRWhCLGVBQWUsQ0FBQyxPQUFPLENBQUM7NEJBQ3RCLE1BQU0sRUFBRTtnQ0FDTixPQUFPLEVBQUUsZUFBZTtnQ0FDeEIsVUFBVSxFQUFFLHlCQUF5QjtnQ0FDckMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDOzZCQUNuQjt5QkFDRixDQUFDO3FCQUNIO29CQUNELFNBQVMsRUFBRTt3QkFDVCxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt3QkFDMUUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLG9CQUFvQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7d0JBQzNFOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFFBQVEsRUFBRSxxQkFBcUI7NEJBQy9CLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNELFNBQVM7d0JBQ1QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQixlQUFlO3dCQUNmLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3FCQUNqQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEh0dHBDbGllbnQsXG4gIEh0dHBDbGllbnRNb2R1bGUsXG4gIEhUVFBfSU5URVJDRVBUT1JTLFxuICBIdHRwQ2xpZW50SnNvbnBNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBFcnJvckhhbmRsZXIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYkNhcmRNb2R1bGUsXG4gIE5iQ2hlY2tib3hNb2R1bGUsXG4gIE5iRGF0ZXBpY2tlck1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYklucHV0TW9kdWxlLFxuICBOYlJhZGlvTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYlRyZWVHcmlkTW9kdWxlLFxuICBOYlRpbWVwaWNrZXJNb2R1bGUsXG4gIE5iVGFnTW9kdWxlLFxuICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgTmJEaWFsb2dNb2R1bGUsXG4gIE5iU3Bpbm5lck1vZHVsZSxcbiAgTmJNZW51TW9kdWxlLFxuICBOYlBvcG92ZXJNb2R1bGUsXG4gIE5iVGFic2V0TW9kdWxlLFxuICBOYlRvb2x0aXBNb2R1bGUsXG4gIE5iVG9hc3RyTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iV2luZG93TW9kdWxlLFxuICBOYlRvZ2dsZU1vZHVsZSxcbiAgTmJMaXN0TW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYkljb25MaWJyYXJpZXMsXG4gIE5iQWxlcnRNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSAnbmcyLXNtYXJ0LXRhYmxlJztcbmltcG9ydCB7IFRoZW1lTW9kdWxlIH0gZnJvbSAnLi9AdGhlbWUvdGhlbWUubW9kdWxlJztcbmltcG9ydCB7IENuZ0h0bWxDb21waWxlck1vZHVsZSB9IGZyb20gJ0Bjb2RlaGludC1uZy9odG1sLWNvbXBpbGVyJztcblxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ0BpcGxhYi9uZ3gtZmlsZS11cGxvYWQnO1xuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1tYWluLWNvbXBvbmVudC9yZXN0LW1haW4tY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJFU1RfQ09ORklHIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC5yZXNvdXJjZS1saXN0LWZpZWxkL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzc291cmNlLWRlbGV0ZS9yZXN0LXJlc291cmNlLWRlbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9yZXN0LXJlc291cmNlLWVkaXRvci1maWVsZHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgSHR0cEF1dGhJbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvaHR0cC1hdXRoLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFBhZ2luYXRpb25JbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvcGFnaW5hdGlvbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtZXhwb3J0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXBsb2FkRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tICdAbmd4LXRyYW5zbGF0ZS9odHRwLWxvYWRlcic7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3QtbGFuZy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZU1vZHVsZSB9IGZyb20gJ25neC1kcm9wem9uZSc7XG5pbXBvcnQgeyBOZ3hQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJ25neC1wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBDb3JlTW9kdWxlIH0gZnJvbSAnLi9AY29yZS9jb3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBGc0ljb25DQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvZnMtaWNvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnbmd4LXRyYW5zbGF0ZS1tdWx0aS1odHRwLWxvYWRlcic7XG5pbXBvcnQge1xuICBOYkF1dGhDb21wb25lbnQsXG4gIE5iQXV0aE1vZHVsZSxcbiAgTmJBdXRoU2ltcGxlVG9rZW4sXG4gIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3ksXG59IGZyb20gJ0BuZWJ1bGFyL2F1dGgnO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IGlzQXV0aEd1YXJkIH0gZnJvbSAnLi91dGlscy9pcy1hdXRoLmd1YXJkJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IFJlc3RTaGFyZVNlcnZpY2UgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZSc7XG5pbXBvcnQgeyBBdHRyaWJ1dGVEaXJlY3RpdmUgfSBmcm9tICcuL3Jlc3QtYWRtaW4vZGlyZWN0aXZlcy9hdHRyaWJ1dGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IE1lbnVGaWx0ZXJQaXBlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtbWFpbi1jb21wb25lbnQvbWVudS1maWx0ZXIucGlwZSc7XG5pbXBvcnQgeyBHbWFwc0NvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZ21hcHMvZ21hcHMuY29tcG9uZW50JztcbmltcG9ydCB7IEdvb2dsZU1hcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XG5pbXBvcnQgeyBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L3NlbGVjdC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW1hZ2Vab29tQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvY29tcG9uZW50cy9mcy1pY29uLWNjb21wb25lbnQvaW1hZ2Utem9vbS5jb21wb25lbnQnO1xuXG4vLyBzZXJ2aWNlUmVzdENvbmZpZy5yZXN0UGF0aEZpbGVUcmFuc2xhdGVcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgLy8gcmV0dXJuIG5ldyBNdWx0aVRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgW1xuICAvLyAgIHsgcHJlZml4OiAnLi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwvL2hvc3QgYXBwIGkxOG4gYXNzZXRzXG4gIC8vICAgeyBwcmVmaXg6ICcuL2xpYi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwgLy95b3VyIGxpYiBhc3NldHNcbiAgLy8gICB7IHByZWZpeDogJy4vcmVzdC9saWIvYXNzZXRzL2kxOG4vJywgc3VmZml4OiAnLmpzb24nIH0sIC8veW91ciBsaWIgYXNzZXRzXG4gIC8vIF0pXG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCAnYXNzZXRzL2kxOG4vJywgJy5qc29uJyk7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIFNlbGVjdEFsbENoZWNrYm94UmVuZGVyQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gICAgTG9naW5Db21wb25lbnQsXG4gICAgQXR0cmlidXRlRGlyZWN0aXZlLFxuICAgIE1lbnVGaWx0ZXJQaXBlLFxuICAgIEdtYXBzQ29tcG9uZW50LFxuICAgIEltYWdlWm9vbUNvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEdtYXBzQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgRnNJY29uQ0NvbXBvbmVudCxcbiAgICBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEdtYXBzQ29tcG9uZW50LFxuICAgIEltYWdlWm9vbUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgSHR0cENsaWVudEpzb25wTW9kdWxlLFxuICAgIE5iQWN0aW9uc01vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iVGFnTW9kdWxlLFxuICAgIE5iUmFkaW9Nb2R1bGUsXG4gICAgTmJVc2VyTW9kdWxlLFxuICAgIE5iVHJlZUdyaWRNb2R1bGUsXG4gICAgTmJBbGVydE1vZHVsZSxcbiAgICBOYkF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBOZzJTbWFydFRhYmxlTW9kdWxlLFxuICAgIEZpbGVVcGxvYWRNb2R1bGUsXG4gICAgQ25nSHRtbENvbXBpbGVyTW9kdWxlLFxuICAgIE5iU3Bpbm5lck1vZHVsZSxcbiAgICBOYlRhYnNldE1vZHVsZSxcbiAgICBOYlBvcG92ZXJNb2R1bGUsXG4gICAgSW1hZ2VDcm9wcGVyTW9kdWxlLFxuICAgIE5iVG9nZ2xlTW9kdWxlLFxuICAgIE5iTGlzdE1vZHVsZSxcbiAgICBOYlRvb2x0aXBNb2R1bGUsXG4gICAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUsXG4gICAgTmd4RHJvcHpvbmVNb2R1bGUsXG4gICAgTmd4UGVybWlzc2lvbnNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iTGF5b3V0TW9kdWxlLFxuICAgIE5iU2VsZWN0TW9kdWxlLFxuICAgIE5iU2lkZWJhck1vZHVsZSxcbiAgICBOYk1lbnVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iRGF0ZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJEaWFsb2dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iV2luZG93TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYlRvYXN0ck1vZHVsZS5mb3JSb290KCksXG4gICAgTmJUaW1lcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBDb3JlTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaGVtZU1vZHVsZS5mb3JSb290KCksXG4gICAgTmJJY29uTW9kdWxlLFxuICAgIEdvb2dsZU1hcHNNb2R1bGUsXG5cbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyLFxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEF1dGhJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogUGFnaW5hdGlvbkludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBdXRoR3VhcmQsXG4gICAgaXNBdXRoR3VhcmQsXG4gICAgUmVzdFJlc291cmNlU2VydmljZSxcbiAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIFJlc3RFeHBvcnRTZXJ2aWNlLFxuICAgIFJlc3RMYW5nU2VydmljZSxcbiAgICBOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgIFJlc3RTaGFyZVNlcnZpY2UsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RBZG1pbk1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlUmVzdEFkbWluOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgaWNvbkxpYnJhcmllczogTmJJY29uTGlicmFyaWVzLFxuICAgIHByaXZhdGUgcmVzdExhbmdTZXJ2aWNlOiBSZXN0TGFuZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhcycsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhcycsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhcicsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhcicsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhYicsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhYicsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5pY29uTGlicmFyaWVzLnJlZ2lzdGVyRm9udFBhY2soJ2ZhZCcsIHtcbiAgICAgIHBhY2tDbGFzczogJ2ZhLWR1b3RvbmUnLFxuICAgICAgaWNvbkNsYXNzUHJlZml4OiAnZmEnLFxuICAgIH0pO1xuICAgIHRoaXMucmVzdExhbmdTZXJ2aWNlLnNldEluaXRpYWxBcHBMYW5ndWFnZSgpO1xuXG4gICAgY29uc3QgdGVtcE1vZHVsZSA9IE5nTW9kdWxlKHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgUm91dGVyTW9kdWxlLmZvckNoaWxkKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiAnbG9naW4nLFxuICAgICAgICAgICAgY29tcG9uZW50OiBOYkF1dGhDb21wb25lbnQsXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW2lzQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiAnJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdhZG1pbicsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFsuLi4odGhpcy5zZXJ2aWNlUmVzdEFkbWluLmdlbmVyYXRlUm91dGVzKCkgYXMgYW55KV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgICAgICAgICAvLyB7IHBhdGg6ICcqKicsIHJlZGlyZWN0VG86ICcvJyB9LFxuICAgICAgICBdKSxcbiAgICAgICAgTmJBdXRoTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgICAgIHN0cmF0ZWdpZXM6IFtcbiAgICAgICAgICAgIE5iUGFzc3dvcmRBdXRoU3RyYXRlZ3kuc2V0dXAoe1xuICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMuc3RyYXRlZ3ksXG4gICAgICAgICAgICAgIGJhc2VFbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmJhc2VFbmRwb2ludCxcbiAgICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLmxvZ2luRW5kUG9pbnQsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6IHtcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgICAgIC5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbixcbiAgICAgICAgICAgICAgICAgIGZhaWx1cmU6IG51bGwsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICB0b2tlbjoge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBOYkF1dGhTaW1wbGVUb2tlbixcbiAgICAgICAgICAgICAgICBrZXk6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtc1xuICAgICAgICAgICAgICAgICAgLnRva2VuTG9jYXRpb25JblJlc3BvbnNlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmb3Jtczoge1xuICAgICAgICAgICAgbG9naW46IHtcbiAgICAgICAgICAgICAgcmVkaXJlY3REZWxheTogNTAwLCAvLyBkZWxheSBiZWZvcmUgcmVkaXJlY3QgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvZ2luLCB3aGlsZSBzdWNjZXNzIG1lc3NhZ2UgaXMgc2hvd24gdG8gdGhlIHVzZXJcbiAgICAgICAgICAgICAgc3RyYXRlZ3k6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy5zdHJhdGVneSwgLy8gc3RyYXRlZ3kgaWQga2V5LlxuICAgICAgICAgICAgICBzaG93TWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgICAgIGVycm9yOiB0cnVlLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgfSkoY2xhc3Mge30pO1xuXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmModGVtcE1vZHVsZSkudGhlbigobW9kdWxlKSA9PiB7XG4gICAgICBjb25zdCByb3V0ZXMgPSB7XG4gICAgICAgIHBhdGg6ICcnLFxuICAgICAgICBsb2FkQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgfSxcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucm91dGVyLnJlc2V0Q29uZmlnKFtyb3V0ZXMsIC4uLnRoaXMucm91dGVyLmNvbmZpZ10pO1xuICAgIH0pO1xuICB9XG4gIHN0YXRpYyBmb3JSb290KFxuICAgIHJlc3RDb25maWc6IFJFU1RfQ09ORklHXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UmVzdEFkbWluTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBSZXN0QWRtaW5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiAncmVzdENvbmZpZycsIHVzZVZhbHVlOiByZXN0Q29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==