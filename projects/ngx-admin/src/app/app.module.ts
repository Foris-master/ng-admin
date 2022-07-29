/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import {
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbMenuModule,
  NbSidebarModule,
  NbTimepickerModule,
  NbToastrModule,
  NbWindowModule,
} from "@nebular/theme";
import { NbTokenLocalStorage, NbTokenStorage } from "@nebular/auth";
import { HttpAuthInterceptor } from "./utils/http-auth.interceptor";
import { AuthGuard } from "./utils/auth.guard";
import { RESOURCES_CONFIG } from "./rest-admin-config";
import { RestAdminModuleModule } from "./rest-admin/rest-admin-module.module";
import { ThemeModule } from "./@theme/theme.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbTimepickerModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    NbIconModule,
    RestAdminModuleModule.forRoot(RESOURCES_CONFIG),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true },
    { provide: NbTokenStorage, useClass: NbTokenLocalStorage },
    AuthGuard,
  ],
})
export class AppModule {}
