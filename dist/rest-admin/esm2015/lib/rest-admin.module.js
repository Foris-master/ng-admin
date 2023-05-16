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
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: i2.RestAdminConfigService }, { type: i3.NbIconLibraries }, { type: i4.RestLangService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEVBQ2pCLHFCQUFxQixHQUN0QixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFJTCxRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixhQUFhLEVBQ2IsYUFBYSxFQUNiLGNBQWMsRUFDZCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxlQUFlLEVBQ2YsWUFBWSxFQUNaLGVBQWUsRUFDZixjQUFjLEVBQ2QsZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osbUJBQW1CLEVBRW5CLGFBQWEsRUFDYixjQUFjLEdBQ2YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUs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T0FBTyxFQUFFO3dCQUN4QixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7d0JBQzVCLFVBQVUsQ0FBQyxPQUFPLEVBQUU7d0JBQ3BCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUVoQixlQUFlLENBQUMsT0FBTyxDQUFDOzRCQUN0QixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGVBQWU7Z0NBQ3hCLFVBQVUsRUFBRSx5QkFBeUI7Z0NBQ3JDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQzs2QkFDbkI7eUJBQ0YsQ0FBQztxQkFDSDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7d0JBQzFFLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUMzRTs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixRQUFRLEVBQUUscUJBQXFCOzRCQUMvQixLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRCxTQUFTO3dCQUNULFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixzQkFBc0I7d0JBQ3RCLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixtQkFBbUI7d0JBQ25CLGdCQUFnQjtxQkFDakI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUcmFuc2xhdGVMb2FkZXIsIFRyYW5zbGF0ZU1vZHVsZSB9IGZyb20gJ0BuZ3gtdHJhbnNsYXRlL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwQ2xpZW50TW9kdWxlLFxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgSHR0cENsaWVudEpzb25wTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge1xuICBDb21waWxlcixcbiAgRXJyb3JIYW5kbGVyLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJDYXJkTW9kdWxlLFxuICBOYkNoZWNrYm94TW9kdWxlLFxuICBOYkRhdGVwaWNrZXJNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJJbnB1dE1vZHVsZSxcbiAgTmJSYWRpb01vZHVsZSxcbiAgTmJTZWxlY3RNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJUcmVlR3JpZE1vZHVsZSxcbiAgTmJUaW1lcGlja2VyTW9kdWxlLFxuICBOYlRhZ01vZHVsZSxcbiAgTmJBdXRvY29tcGxldGVNb2R1bGUsXG4gIE5iRGlhbG9nTW9kdWxlLFxuICBOYlNwaW5uZXJNb2R1bGUsXG4gIE5iTWVudU1vZHVsZSxcbiAgTmJQb3BvdmVyTW9kdWxlLFxuICBOYlRhYnNldE1vZHVsZSxcbiAgTmJUb29sdGlwTW9kdWxlLFxuICBOYlRvYXN0ck1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYldpbmRvd01vZHVsZSxcbiAgTmJUb2dnbGVNb2R1bGUsXG4gIE5iTGlzdE1vZHVsZSxcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgTmJJY29uTGlicmFyaWVzLFxuICBOYkFsZXJ0TW9kdWxlLFxuICBOYkxheW91dE1vZHVsZSxcbn0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgTmcyU21hcnRUYWJsZU1vZHVsZSB9IGZyb20gJ25nMi1zbWFydC10YWJsZSc7XG5pbXBvcnQgeyBUaGVtZU1vZHVsZSB9IGZyb20gJy4vQHRoZW1lL3RoZW1lLm1vZHVsZSc7XG5pbXBvcnQgeyBDbmdIdG1sQ29tcGlsZXJNb2R1bGUgfSBmcm9tICdAY29kZWhpbnQtbmcvaHRtbC1jb21waWxlcic7XG5cbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdAaXBsYWIvbmd4LWZpbGUtdXBsb2FkJztcbmltcG9ydCB7IFJvdXRlciwgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtbWFpbi1jb21wb25lbnQvcmVzdC1tYWluLWNvbXBvbmVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdEFkbWluQ29uZmlnU2VydmljZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBSRVNUX0NPTkZJRyB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc291cmNlLWxpc3QvcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9yZXN0LXJlc3NvdXJjZS1kZWxldGUvcmVzdC1yZXNvdXJjZS1kZWxldGUuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlU2VydmljZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1yZXNvdXJjZS5zZXJ2aWNlJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbmltcG9ydCB7IEh0dHBBdXRoSW50ZXJjZXB0b3IgfSBmcm9tICcuL3V0aWxzL2h0dHAtYXV0aC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uSW50ZXJjZXB0b3IgfSBmcm9tICcuL3V0aWxzL3BhZ2luYXRpb24uaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1kZXRhaWwvcmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RFeHBvcnRTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWV4cG9ydC5zZXJ2aWNlJztcbmltcG9ydCB7IFVwbG9hZEZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL3VwbG9hZC1maWxlL3VwbG9hZC1maWxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuaW1wb3J0IHsgUmVzdExhbmdTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWxhbmcuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vdXRpbHMvaHR0cC1lcnJvci5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuL3V0aWxzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgTmd4RHJvcHpvbmVNb2R1bGUgfSBmcm9tICduZ3gtZHJvcHpvbmUnO1xuaW1wb3J0IHsgTmd4UGVybWlzc2lvbnNNb2R1bGUgfSBmcm9tICduZ3gtcGVybWlzc2lvbnMnO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gJy4vQGNvcmUvY29yZS5tb2R1bGUnO1xuaW1wb3J0IHsgRnNJY29uQ0NvbXBvbmVudCB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L2ZzLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlciB9IGZyb20gJ25neC10cmFuc2xhdGUtbXVsdGktaHR0cC1sb2FkZXInO1xuaW1wb3J0IHtcbiAgTmJBdXRoQ29tcG9uZW50LFxuICBOYkF1dGhNb2R1bGUsXG4gIE5iQXV0aFNpbXBsZVRva2VuLFxuICBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5LFxufSBmcm9tICdAbmVidWxhci9hdXRoJztcbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0F1dGhHdWFyZCB9IGZyb20gJy4vdXRpbHMvaXMtYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9ub3RpZmljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSZXN0U2hhcmVTZXJ2aWNlIH0gZnJvbSAnLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXNoYXJlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXR0cmlidXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9yZXN0LWFkbWluL2RpcmVjdGl2ZXMvYXR0cmlidXRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBNZW51RmlsdGVyUGlwZSB9IGZyb20gJy4vcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L21lbnUtZmlsdGVyLnBpcGUnO1xuaW1wb3J0IHsgR21hcHNDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL2dtYXBzL2dtYXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHb29nbGVNYXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZ29vZ2xlLW1hcHMnO1xuaW1wb3J0IHsgU2VsZWN0QWxsQ2hlY2tib3hSZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL2ZzLWljb24tY2NvbXBvbmVudC9zZWxlY3QuY29tcG9uZW50JztcblxuLy8gc2VydmljZVJlc3RDb25maWcucmVzdFBhdGhGaWxlVHJhbnNsYXRlXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHJhbnNsYXRlSHR0cExvYWRlcihodHRwOiBIdHRwQ2xpZW50KSB7XG4gIC8vIHJldHVybiBuZXcgTXVsdGlUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsIFtcbiAgLy8gICB7IHByZWZpeDogJy4vYXNzZXRzL2kxOG4vJywgc3VmZml4OiAnLmpzb24nIH0sLy9ob3N0IGFwcCBpMThuIGFzc2V0c1xuICAvLyAgIHsgcHJlZml4OiAnLi9saWIvYXNzZXRzL2kxOG4vJywgc3VmZml4OiAnLmpzb24nIH0sIC8veW91ciBsaWIgYXNzZXRzXG4gIC8vICAgeyBwcmVmaXg6ICcuL3Jlc3QvbGliL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LCAvL3lvdXIgbGliIGFzc2V0c1xuICAvLyBdKVxuICByZXR1cm4gbmV3IFRyYW5zbGF0ZUh0dHBMb2FkZXIoaHR0cCwgJ2Fzc2V0cy9pMThuLycsICcuanNvbicpO1xufVxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgICBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCxcbiAgICBGc0ljb25DQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEF0dHJpYnV0ZURpcmVjdGl2ZSxcbiAgICBNZW51RmlsdGVyUGlwZSxcbiAgICBHbWFwc0NvbXBvbmVudCxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEdtYXBzQ29tcG9uZW50LFxuICBdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgRnNJY29uQ0NvbXBvbmVudCxcbiAgICBTZWxlY3RBbGxDaGVja2JveFJlbmRlckNvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIExvZ2luQ29tcG9uZW50LFxuICAgIEdtYXBzQ29tcG9uZW50LFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50SnNvbnBNb2R1bGUsXG4gICAgTmJBY3Rpb25zTW9kdWxlLFxuICAgIE5iQnV0dG9uTW9kdWxlLFxuICAgIE5iQ2FyZE1vZHVsZSxcbiAgICBOYkNoZWNrYm94TW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJUYWdNb2R1bGUsXG4gICAgTmJSYWRpb01vZHVsZSxcbiAgICBOYlVzZXJNb2R1bGUsXG4gICAgTmJUcmVlR3JpZE1vZHVsZSxcbiAgICBOYkFsZXJ0TW9kdWxlLFxuICAgIE5iQXV0b2NvbXBsZXRlTW9kdWxlLFxuICAgIE5nMlNtYXJ0VGFibGVNb2R1bGUsXG4gICAgRmlsZVVwbG9hZE1vZHVsZSxcbiAgICBDbmdIdG1sQ29tcGlsZXJNb2R1bGUsXG4gICAgTmJTcGlubmVyTW9kdWxlLFxuICAgIE5iVGFic2V0TW9kdWxlLFxuICAgIE5iUG9wb3Zlck1vZHVsZSxcbiAgICBJbWFnZUNyb3BwZXJNb2R1bGUsXG4gICAgTmJUb2dnbGVNb2R1bGUsXG4gICAgTmJMaXN0TW9kdWxlLFxuICAgIE5iVG9vbHRpcE1vZHVsZSxcbiAgICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZSxcbiAgICBOZ3hEcm9wem9uZU1vZHVsZSxcbiAgICBOZ3hQZXJtaXNzaW9uc01vZHVsZS5mb3JSb290KCksXG4gICAgTmJMYXlvdXRNb2R1bGUsXG4gICAgTmJTZWxlY3RNb2R1bGUsXG4gICAgTmJTaWRlYmFyTW9kdWxlLFxuICAgIE5iTWVudU1vZHVsZS5mb3JSb290KCksXG4gICAgTmJEYXRlcGlja2VyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkRpYWxvZ01vZHVsZS5mb3JSb290KCksXG4gICAgTmJXaW5kb3dNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iVG9hc3RyTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYlRpbWVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENvcmVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRoZW1lTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkljb25Nb2R1bGUsXG4gICAgR29vZ2xlTWFwc01vZHVsZSxcblxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGxvYWRlcjoge1xuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgIHVzZUZhY3Rvcnk6IGNyZWF0ZVRyYW5zbGF0ZUh0dHBMb2FkZXIsXG4gICAgICAgIGRlcHM6IFtIdHRwQ2xpZW50XSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwQXV0aEludGVyY2VwdG9yLCBtdWx0aTogdHJ1ZSB9LFxuICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBIdHRwRXJyb3JJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgIHVzZUNsYXNzOiBQYWdpbmF0aW9uSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIEF1dGhHdWFyZCxcbiAgICBpc0F1dGhHdWFyZCxcbiAgICBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgUmVzdEV4cG9ydFNlcnZpY2UsXG4gICAgUmVzdExhbmdTZXJ2aWNlLFxuICAgIE5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgUmVzdFNoYXJlU2VydmljZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdEFkbWluTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNvbXBpbGVyOiBDb21waWxlcixcbiAgICBwcml2YXRlIHNlcnZpY2VSZXN0QWRtaW46IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBpY29uTGlicmFyaWVzOiBOYkljb25MaWJyYXJpZXMsXG4gICAgcHJpdmF0ZSByZXN0TGFuZ1NlcnZpY2U6IFJlc3RMYW5nU2VydmljZVxuICApIHtcbiAgICB0aGlzLmljb25MaWJyYXJpZXMucmVnaXN0ZXJGb250UGFjaygnZmFzJywge1xuICAgICAgcGFja0NsYXNzOiAnZmFzJyxcbiAgICAgIGljb25DbGFzc1ByZWZpeDogJ2ZhJyxcbiAgICB9KTtcbiAgICB0aGlzLmljb25MaWJyYXJpZXMucmVnaXN0ZXJGb250UGFjaygnZmFyJywge1xuICAgICAgcGFja0NsYXNzOiAnZmFyJyxcbiAgICAgIGljb25DbGFzc1ByZWZpeDogJ2ZhJyxcbiAgICB9KTtcbiAgICB0aGlzLmljb25MaWJyYXJpZXMucmVnaXN0ZXJGb250UGFjaygnZmFiJywge1xuICAgICAgcGFja0NsYXNzOiAnZmFiJyxcbiAgICAgIGljb25DbGFzc1ByZWZpeDogJ2ZhJyxcbiAgICB9KTtcbiAgICB0aGlzLmljb25MaWJyYXJpZXMucmVnaXN0ZXJGb250UGFjaygnZmFkJywge1xuICAgICAgcGFja0NsYXNzOiAnZmEtZHVvdG9uZScsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6ICdmYScsXG4gICAgfSk7XG4gICAgdGhpcy5yZXN0TGFuZ1NlcnZpY2Uuc2V0SW5pdGlhbEFwcExhbmd1YWdlKCk7XG5cbiAgICBjb25zdCB0ZW1wTW9kdWxlID0gTmdNb2R1bGUoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICAgICAgICBjb21wb25lbnQ6IE5iQXV0aENvbXBvbmVudCxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbaXNBdXRoR3VhcmRdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGg6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogTG9naW5Db21wb25lbnQsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogJ2FkbWluJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgICBjaGlsZHJlbjogWy4uLih0aGlzLnNlcnZpY2VSZXN0QWRtaW4uZ2VuZXJhdGVSb3V0ZXMoKSBhcyBhbnkpXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvbG9naW4nLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICAgICAgICAgIC8vIHsgcGF0aDogJyoqJywgcmVkaXJlY3RUbzogJy8nIH0sXG4gICAgICAgIF0pLFxuICAgICAgICBOYkF1dGhNb2R1bGUuZm9yUm9vdCh7XG4gICAgICAgICAgc3RyYXRlZ2llczogW1xuICAgICAgICAgICAgTmJQYXNzd29yZEF1dGhTdHJhdGVneS5zZXR1cCh7XG4gICAgICAgICAgICAgIG5hbWU6IHRoaXMuc2VydmljZVJlc3RBZG1pbi5yZXN0QXV0aFBhcmFtcy5zdHJhdGVneSxcbiAgICAgICAgICAgICAgYmFzZUVuZHBvaW50OiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMuYmFzZUVuZHBvaW50LFxuICAgICAgICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiB0aGlzLnNlcnZpY2VSZXN0QWRtaW4ucmVzdEF1dGhQYXJhbXMubG9naW5FbmRQb2ludCxcbiAgICAgICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICAgICAgc3VjY2VzczpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luLFxuICAgICAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IE5iQXV0aFNpbXBsZVRva2VuLFxuICAgICAgICAgICAgICAgIGtleTogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zXG4gICAgICAgICAgICAgICAgICAudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2UsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZvcm1zOiB7XG4gICAgICAgICAgICBsb2dpbjoge1xuICAgICAgICAgICAgICByZWRpcmVjdERlbGF5OiA1MDAsIC8vIGRlbGF5IGJlZm9yZSByZWRpcmVjdCBhZnRlciBhIHN1Y2Nlc3NmdWwgbG9naW4sIHdoaWxlIHN1Y2Nlc3MgbWVzc2FnZSBpcyBzaG93biB0byB0aGUgdXNlclxuICAgICAgICAgICAgICBzdHJhdGVneTogdGhpcy5zZXJ2aWNlUmVzdEFkbWluLnJlc3RBdXRoUGFyYW1zLnN0cmF0ZWd5LCAvLyBzdHJhdGVneSBpZCBrZXkuXG4gICAgICAgICAgICAgIHNob3dNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KShjbGFzcyB7fSk7XG5cbiAgICB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyh0ZW1wTW9kdWxlKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdXRlcyA9IHtcbiAgICAgICAgcGF0aDogJycsXG4gICAgICAgIGxvYWRDaGlsZHJlbigpIHtcbiAgICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW3JvdXRlcywgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcmVzdENvbmZpZzogUkVTVF9DT05GSUdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSZXN0QWRtaW5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc3RBZG1pbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6ICdyZXN0Q29uZmlnJywgdXNlVmFsdWU6IHJlc3RDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19