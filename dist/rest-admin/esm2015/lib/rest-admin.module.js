import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS, } from "@angular/common/http";
import { NgModule, } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbRadioModule, NbSelectModule, NbUserModule, NbTreeGridModule, NbTimepickerModule, NbTagModule, NbAutocompleteModule, NbDialogModule, NbSpinnerModule, NbMenuModule, NbPopoverModule, NbTabsetModule, NbTooltipModule, NbToastrModule, NbSidebarModule, NbWindowModule, NbToggleModule, NbListModule, NbContextMenuModule, } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "./@theme/theme.module";
import { CngHtmlCompilerModule } from "@codehint-ng/html-compiler";
import { FileUploadModule } from "@iplab/ngx-file-upload";
import { RouterModule } from "@angular/router";
import { RestMainComponentComponent } from "./rest-admin/rest-main-component/rest-main-component.component";
import { RestAdminConfigService } from "./rest-admin/rest-resource/service/rest-admin-config.service";
import { RestResourceListComponent } from "./rest-admin/rest-resource/rest-resource-list/rest-resource-list.component";
import { RestResourceListFieldComponent } from "./rest-admin/rest-resource/components/rest.resource-list-field/rest.resource-list-field.component";
import { RestResourceAddComponent } from "./rest-admin/rest-resource/rest-resource-add/rest-resource-add.component";
import { RestResourceDeleteComponent } from "./rest-admin/rest-resource/rest-ressource-delete/rest-resource-delete.component";
import { RestResourceEditorFieldsComponent } from "./rest-admin/rest-resource/components/rest-resource-editor-fields/rest-resource-editor-fields.component";
import { RestResourceService } from "./rest-admin/rest-resource/service/rest-resource.service";
import { ImageCropperModule } from "ngx-image-cropper";
import { HttpAuthInterceptor } from "./utils/http-auth.interceptor";
import { PaginationInterceptor } from "./utils/pagination.interceptor";
import { RestResourceDetailComponent } from "./rest-admin/rest-resource/rest-resource-detail/rest-resource-detail.component";
import { RestExportService } from "./rest-admin/rest-resource/service/rest-export.service";
import { UploadFileComponent } from "./rest-admin/rest-resource/components/upload-file/upload-file.component";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RestLangService } from "./rest-admin/rest-resource/service/rest-lang.service";
import { HttpErrorInterceptor } from "./utils/http-error.interceptor";
import { AuthGuard } from "./utils/auth.guard";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NgxPermissionsModule } from "ngx-permissions";
import { CoreModule } from "./@core/core.module";
import { FsIconCComponent } from "./rest-admin/rest-resource/components/fs-icon-ccomponent/fs-icon.component";
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
    return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}
export class RestAdminModule {
    constructor(router, compiler, serviceRestAdmin, iconLibraries, restLangService) {
        this.router = router;
        this.compiler = compiler;
        this.serviceRestAdmin = serviceRestAdmin;
        this.iconLibraries = iconLibraries;
        this.restLangService = restLangService;
        this.iconLibraries.registerFontPack("fas", {
            packClass: "fas",
            iconClassPrefix: "fa",
        });
        this.iconLibraries.registerFontPack("far", {
            packClass: "far",
            iconClassPrefix: "fa",
        });
        this.iconLibraries.registerFontPack("fab", {
            packClass: "fab",
            iconClassPrefix: "fa",
        });
        this.iconLibraries.registerFontPack("fad", {
            packClass: "fa-duotone",
            iconClassPrefix: "fa",
        });
        this.restLangService.setInitialAppLanguage();
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
        })(class {
        });
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
    static forRoot(restConfig) {
        return {
            ngModule: RestAdminModule,
            providers: [
                RestAdminConfigService,
                { provide: "restConfig", useValue: restConfig },
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
        FsIconCComponent], imports: [CommonModule,
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
        NgxDropzoneModule, i5.NgxPermissionsModule, NbSelectModule,
        NbSidebarModule, i3.NbMenuModule, i3.NbDatepickerModule, i3.NbDialogModule, i3.NbWindowModule, i3.NbToastrModule, i3.NbTimepickerModule, i6.CoreModule, i7.ThemeModule, NbIconModule, i8.TranslateModule], exports: [RestResourceListComponent,
        RestResourceAddComponent,
        RestResourceDeleteComponent,
        RestMainComponentComponent,
        RestResourceEditorFieldsComponent,
        RestResourceListFieldComponent,
        RestResourceDetailComponent,
        UploadFileComponent] });
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
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i0.Compiler }, { type: i2.RestAdminConfigService }, { type: i3.NbIconLibraries }, { type: i4.RestLangService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvcmVzdC1hZG1pbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUNMLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsaUJBQWlCLEdBQ2xCLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUlMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLGVBQWUsRUFDZixjQUFjLEVBQ2QsWUFBWSxFQUNaLGdCQUFnQixFQUNoQixrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLGFBQWEsRUFDYixhQUFhLEVBQ2IsY0FBYyxFQUNkLFlBQVksRUFDWixnQkFBZ0IsRUFDaEIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxvQkFBb0IsRUFDcEIsY0FBYyxFQUNkLGVBQWUsRUFDZixZQUFZLEVBQ1osZUFBZSxFQUNmLGNBQWMsRUFDZCxlQUFlLEVBQ2YsY0FBYyxFQUNkLGVBQWUsRUFDZixjQUFjLEVBQ2QsY0FBYyxFQUNkLFlBQVksRUFDWixtQkFBbUIsR0FFcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdC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ZSxDQUFDLE9BQU8sQ0FBQzs0QkFDdEIsTUFBTSxFQUFFO2dDQUNOLE9BQU8sRUFBRSxlQUFlO2dDQUN4QixVQUFVLEVBQUUseUJBQXlCO2dDQUNyQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUM7NkJBQ25CO3lCQUNGLENBQUM7cUJBQ0g7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUMxRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTt3QkFDM0U7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0QsU0FBUzt3QkFFVCxtQkFBbUI7d0JBQ25CLHNCQUFzQjt3QkFDdEIsaUJBQWlCO3dCQUNqQixlQUFlO3FCQUNoQjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQge1xuICBIdHRwQ2xpZW50LFxuICBIdHRwQ2xpZW50TW9kdWxlLFxuICBIVFRQX0lOVEVSQ0VQVE9SUyxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1xuICBDb21waWxlcixcbiAgRXJyb3JIYW5kbGVyLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7XG4gIE5iQWN0aW9uc01vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iQ2FyZE1vZHVsZSxcbiAgTmJDaGVja2JveE1vZHVsZSxcbiAgTmJEYXRlcGlja2VyTW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iSW5wdXRNb2R1bGUsXG4gIE5iUmFkaW9Nb2R1bGUsXG4gIE5iU2VsZWN0TW9kdWxlLFxuICBOYlVzZXJNb2R1bGUsXG4gIE5iVHJlZUdyaWRNb2R1bGUsXG4gIE5iVGltZXBpY2tlck1vZHVsZSxcbiAgTmJUYWdNb2R1bGUsXG4gIE5iQXV0b2NvbXBsZXRlTW9kdWxlLFxuICBOYkRpYWxvZ01vZHVsZSxcbiAgTmJTcGlubmVyTW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iUG9wb3Zlck1vZHVsZSxcbiAgTmJUYWJzZXRNb2R1bGUsXG4gIE5iVG9vbHRpcE1vZHVsZSxcbiAgTmJUb2FzdHJNb2R1bGUsXG4gIE5iU2lkZWJhck1vZHVsZSxcbiAgTmJXaW5kb3dNb2R1bGUsXG4gIE5iVG9nZ2xlTW9kdWxlLFxuICBOYkxpc3RNb2R1bGUsXG4gIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gIE5iSWNvbkxpYnJhcmllcyxcbn0gZnJvbSBcIkBuZWJ1bGFyL3RoZW1lXCI7XG5pbXBvcnQgeyBOZzJTbWFydFRhYmxlTW9kdWxlIH0gZnJvbSBcIm5nMi1zbWFydC10YWJsZVwiO1xuaW1wb3J0IHsgVGhlbWVNb2R1bGUgfSBmcm9tIFwiLi9AdGhlbWUvdGhlbWUubW9kdWxlXCI7XG5pbXBvcnQgeyBDbmdIdG1sQ29tcGlsZXJNb2R1bGUgfSBmcm9tIFwiQGNvZGVoaW50LW5nL2h0bWwtY29tcGlsZXJcIjtcblxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gXCJAaXBsYWIvbmd4LWZpbGUtdXBsb2FkXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdC1hZG1pbi9yZXN0LW1haW4tY29tcG9uZW50L3Jlc3QtbWFpbi1jb21wb25lbnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIH0gZnJvbSBcIi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZVwiO1xuaW1wb3J0IHsgUkVTVF9DT05GSUcgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWxcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCB9IGZyb20gXCIuL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9jb21wb25lbnRzL3Jlc3QucmVzb3VyY2UtbGlzdC1maWVsZC9yZXN0LnJlc291cmNlLWxpc3QtZmllbGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2UvcmVzdC1yZXNzb3VyY2UtZGVsZXRlL3Jlc3QtcmVzb3VyY2UtZGVsZXRlLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvcmVzdC1yZXNvdXJjZS1lZGl0b3ItZmllbGRzL3Jlc3QtcmVzb3VyY2UtZWRpdG9yLWZpZWxkcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZVNlcnZpY2UgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LXJlc291cmNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gXCJuZ3gtaW1hZ2UtY3JvcHBlclwiO1xuaW1wb3J0IHsgSHR0cEF1dGhJbnRlcmNlcHRvciB9IGZyb20gXCIuL3V0aWxzL2h0dHAtYXV0aC5pbnRlcmNlcHRvclwiO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkludGVyY2VwdG9yIH0gZnJvbSBcIi4vdXRpbHMvcGFnaW5hdGlvbi5pbnRlcmNlcHRvclwiO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVzdEV4cG9ydFNlcnZpY2UgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWV4cG9ydC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBVcGxvYWRGaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvdXBsb2FkLWZpbGUvdXBsb2FkLWZpbGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2h0dHAtbG9hZGVyXCI7XG5pbXBvcnQgeyBSZXN0TGFuZ1NlcnZpY2UgfSBmcm9tIFwiLi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWxhbmcuc2VydmljZVwiO1xuaW1wb3J0IHsgSHR0cEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tIFwiLi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yXCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwiLi91dGlscy9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBOZ3hEcm9wem9uZU1vZHVsZSB9IGZyb20gXCJuZ3gtZHJvcHpvbmVcIjtcbmltcG9ydCB7IE5neFBlcm1pc3Npb25zTW9kdWxlIH0gZnJvbSBcIm5neC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0IHsgQ29yZU1vZHVsZSB9IGZyb20gXCIuL0Bjb3JlL2NvcmUubW9kdWxlXCI7XG5pbXBvcnQgeyBGc0ljb25DQ29tcG9uZW50IH0gZnJvbSBcIi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL2NvbXBvbmVudHMvZnMtaWNvbi1jY29tcG9uZW50L2ZzLWljb24uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNdWx0aVRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tIFwibmd4LXRyYW5zbGF0ZS1tdWx0aS1odHRwLWxvYWRlclwiO1xuXG5cbi8vIHNlcnZpY2VSZXN0Q29uZmlnLnJlc3RQYXRoRmlsZVRyYW5zbGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZUh0dHBMb2FkZXIoXG4gIGh0dHA6IEh0dHBDbGllbnRcbikge1xuICAvLyByZXR1cm4gbmV3IE11bHRpVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCBbXG4gIC8vICAgeyBwcmVmaXg6ICcuL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LC8vaG9zdCBhcHAgaTE4biBhc3NldHNcbiAgLy8gICB7IHByZWZpeDogJy4vbGliL2Fzc2V0cy9pMThuLycsIHN1ZmZpeDogJy5qc29uJyB9LCAvL3lvdXIgbGliIGFzc2V0c1xuICAvLyAgIHsgcHJlZml4OiAnLi9yZXN0L2xpYi9hc3NldHMvaTE4bi8nLCBzdWZmaXg6ICcuanNvbicgfSwgLy95b3VyIGxpYiBhc3NldHNcbiAgLy8gXSlcbiAgcmV0dXJuIG5ldyBUcmFuc2xhdGVIdHRwTG9hZGVyKGh0dHAsIFwiYXNzZXRzL2kxOG4vXCIsIFwiLmpzb25cIik7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURlbGV0ZUNvbXBvbmVudCxcbiAgICBSZXN0TWFpbkNvbXBvbmVudENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VFZGl0b3JGaWVsZHNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlTGlzdEZpZWxkQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICBVcGxvYWRGaWxlQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZWxldGVDb21wb25lbnQsXG4gICAgUmVzdE1haW5Db21wb25lbnRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRWRpdG9yRmllbGRzQ29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUxpc3RGaWVsZENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VMaXN0RmllbGRDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgIEZzSWNvbkNDb21wb25lbnQsXG4gICAgUmVzdFJlc291cmNlRGVsZXRlQ29tcG9uZW50LFxuICAgIFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgIFJlc3RSZXNvdXJjZUVkaXRvckZpZWxkc0NvbXBvbmVudCxcbiAgICBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgVXBsb2FkRmlsZUNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5iQWN0aW9uc01vZHVsZSxcbiAgICBOYkJ1dHRvbk1vZHVsZSxcbiAgICBOYkNhcmRNb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBOYklucHV0TW9kdWxlLFxuICAgIE5iVGFnTW9kdWxlLFxuICAgIE5iUmFkaW9Nb2R1bGUsXG4gICAgTmJVc2VyTW9kdWxlLFxuICAgIE5iVHJlZUdyaWRNb2R1bGUsXG4gICAgTmJBdXRvY29tcGxldGVNb2R1bGUsXG4gICAgTmcyU21hcnRUYWJsZU1vZHVsZSxcbiAgICBGaWxlVXBsb2FkTW9kdWxlLFxuICAgIENuZ0h0bWxDb21waWxlck1vZHVsZSxcbiAgICBOYlNwaW5uZXJNb2R1bGUsXG4gICAgTmJUYWJzZXRNb2R1bGUsXG4gICAgTmJQb3BvdmVyTW9kdWxlLFxuICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcbiAgICBOYlRvZ2dsZU1vZHVsZSxcbiAgICBOYkxpc3RNb2R1bGUsXG4gICAgTmJUb29sdGlwTW9kdWxlLFxuICAgIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIE5neERyb3B6b25lTW9kdWxlLFxuICAgIE5neFBlcm1pc3Npb25zTW9kdWxlLmZvckNoaWxkKCksXG5cbiAgICBOYlNlbGVjdE1vZHVsZSxcbiAgICBOYlNpZGViYXJNb2R1bGUsXG4gICAgTmJNZW51TW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYkRhdGVwaWNrZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iRGlhbG9nTW9kdWxlLmZvclJvb3QoKSxcbiAgICBOYldpbmRvd01vZHVsZS5mb3JSb290KCksXG4gICAgTmJUb2FzdHJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iVGltZXBpY2tlck1vZHVsZS5mb3JSb290KCksXG4gICAgQ29yZU1vZHVsZS5mb3JSb290KCksXG4gICAgVGhlbWVNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5iSWNvbk1vZHVsZSxcbiAgICBUcmFuc2xhdGVNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBsb2FkZXI6IHtcbiAgICAgICAgcHJvdmlkZTogVHJhbnNsYXRlTG9hZGVyLFxuICAgICAgICB1c2VGYWN0b3J5OiBjcmVhdGVUcmFuc2xhdGVIdHRwTG9hZGVyLFxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEF1dGhJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSHR0cEVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogUGFnaW5hdGlvbkludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICBBdXRoR3VhcmQsXG5cbiAgICBSZXN0UmVzb3VyY2VTZXJ2aWNlLFxuICAgIFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UsXG4gICAgUmVzdEV4cG9ydFNlcnZpY2UsXG4gICAgUmVzdExhbmdTZXJ2aWNlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Nb2R1bGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByaXZhdGUgc2VydmljZVJlc3RBZG1pbjogUmVzdEFkbWluQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGljb25MaWJyYXJpZXM6IE5iSWNvbkxpYnJhcmllcyxcbiAgICBwcml2YXRlIHJlc3RMYW5nU2VydmljZTogUmVzdExhbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKFwiZmFzXCIsIHtcbiAgICAgIHBhY2tDbGFzczogXCJmYXNcIixcbiAgICAgIGljb25DbGFzc1ByZWZpeDogXCJmYVwiLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKFwiZmFyXCIsIHtcbiAgICAgIHBhY2tDbGFzczogXCJmYXJcIixcbiAgICAgIGljb25DbGFzc1ByZWZpeDogXCJmYVwiLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKFwiZmFiXCIsIHtcbiAgICAgIHBhY2tDbGFzczogXCJmYWJcIixcbiAgICAgIGljb25DbGFzc1ByZWZpeDogXCJmYVwiLFxuICAgIH0pO1xuICAgIHRoaXMuaWNvbkxpYnJhcmllcy5yZWdpc3RlckZvbnRQYWNrKFwiZmFkXCIsIHtcbiAgICAgIHBhY2tDbGFzczogXCJmYS1kdW90b25lXCIsXG4gICAgICBpY29uQ2xhc3NQcmVmaXg6IFwiZmFcIixcbiAgICB9KTtcbiAgICB0aGlzLnJlc3RMYW5nU2VydmljZS5zZXRJbml0aWFsQXBwTGFuZ3VhZ2UoKTtcbiAgICBjb25zdCB0ZW1wTW9kdWxlID0gTmdNb2R1bGUoe1xuICAgICAgaW1wb3J0czogW1xuICAgICAgICBSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RNYWluQ29tcG9uZW50Q29tcG9uZW50LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgY2hpbGRyZW46IFsuLi4odGhpcy5zZXJ2aWNlUmVzdEFkbWluLmdlbmVyYXRlUm91dGVzKCkgYXMgYW55KV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICBdLFxuICAgIH0pKGNsYXNzIHt9KTtcbiAgICB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyh0ZW1wTW9kdWxlKS50aGVuKChtb2R1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJvdXRlcyA9IHtcbiAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgbG9hZENoaWxkcmVuKCkge1xuICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgdGhpcy5yb3V0ZXIucmVzZXRDb25maWcoW3JvdXRlcywgLi4udGhpcy5yb3V0ZXIuY29uZmlnXSk7XG4gICAgfSk7XG4gIH1cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgcmVzdENvbmZpZzogUkVTVF9DT05GSUdcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxSZXN0QWRtaW5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFJlc3RBZG1pbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IFwicmVzdENvbmZpZ1wiLCB1c2VWYWx1ZTogcmVzdENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=