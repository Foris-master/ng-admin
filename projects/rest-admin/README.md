# RestAdmin

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

# RestAdmin for Angular
![example](https://github.com/Foris-master/ngx-admin/tree/dev_geol/projects/rest-admin-example)

### Installation
`npm i @foris-master/ngx-rest-admin` or `yarn add @foris-master/ngx-rest-admin`

### Example usage
Add the RestAdminModule to the imports of the module which will be using the RestAdmin.
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestAdminModule } from '@foris-master/ngx-rest-admin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RESOURCES_CONFIG } from './rest-admin-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RestAdminModule.forRoot(RESOURCES_CONFIG),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
