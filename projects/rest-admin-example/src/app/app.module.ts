import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestAdminModule } from 'rest-admin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RESOURCES_CONFIG } from './rest-admin-config';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RestAdminModule.forRoot(RESOURCES_CONFIG),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
