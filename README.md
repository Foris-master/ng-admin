# RestAdmin

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.

# Demo pictures

The demo site is coming [demo rest-admin](https://github.com/Foris-master/ngx-admin)

## Demo pictures

### Login page

![](https://raw.githubusercontent.com/Foris-master/ngx-admin/main/login.png)

### Create page

![](https://raw.githubusercontent.com/Foris-master/ngx-admin/main/create.png)

### Update page

![](https://raw.githubusercontent.com/Foris-master/ngx-admin/main/update.png)

### Listing page

![](https://raw.githubusercontent.com/Foris-master/ngx-admin/main/read1.png)

## License

RestAdmin is licensed under the [MIT license](http://opensource.org/licenses/MIT).

### Installation

```bash
npm i @foris-master/ngx-rest-admin
```

`or`

```
yarn add @foris-master/ngx-rest-admin
```

## Usage

Add the RestAdminModule to the imports of the module which will be using the RestAdmin.

```js
// in app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { RestAdminModule } from '@foris-master/ngx-rest-admin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RESOURCES_CONFIG } from './rest-admin-config';

@NgModule({
  ...
  imports: [
    BrowserModule,
    RestAdminModule.forRoot(RESOURCES_CONFIG),
    AppRoutingModule
  ],
  ...
})
export class AppModule { }
```

Configure your app with the name, the ressources and the baseUrl of the api.

```js
import { REST_CONFIG } from "@foris-master/ngx-rest-admin";
import { resources } from "./resources";

export const RESOURCES_CONFIG: REST_CONFIG = {
  name: "Name of the app",
  baseUrl: "https://api.example.com/api",
  resources: resources,
  //Defaults values
  authConfig: {
    strategy: STRATEGY_AUTH.EMAIL,
    loginEndPoint: "/auth/signin",
    logoutEndPoint: "/auth/logout",
    userInfoEndPoint: "/users/me",
    profileNameEndPoint: "name",
    profilePictureEndPoint: "picture",
    redirectRouteAfterLogin: "/address", //just put the name of resource
  },
};
```

## HTML Example

Add this in our app-routing.module.ts

<router-outlet></router-outlet>

Add in our app-routing.module.ts

```js
import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";

const routes: Routes = [{ path: "**", redirectTo: "/" }];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

### Add Dependency Style

Add _'node_modules/@foris-master/ngx-rest-admin/assets/style/styles.scss'_ style file:

`node_modules/bootstrap/dist/css/bootstrap.css`
`node_modules/typeface-exo/index.css`
`node_modules/roboto-fontface/css/roboto/roboto-fontface.css`,
`node_modules/ionicons/scss/ionicons.scss`
`node_modules/socicon/css/socicon.css`,
`node_modules/nebular-icons/scss/nebular-icons.scss`
`node_modules/pace-js/templates/pace-theme-flash.tmpl.css`,
`node_modules/leaflet/dist/leaflet.css`,
`node_modules/@fortawesome/fontawesome-free/css/all.css`,
`node_modules/@foris-master/ngx-rest-admin/assets/style/styles.scss`

to **angular.json** styles array:

```json

"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "node_modules/typeface-exo/index.css",
  "node_modules/roboto-fontface/css/roboto/roboto-fontface.css",
  "node_modules/ionicons/scss/ionicons.scss",
  "node_modules/socicon/css/socicon.css",
  "node_modules/nebular-icons/scss/nebular-icons.scss",
  "node_modules/pace-js/templates/pace-theme-flash.tmpl.css",
  "node_modules/leaflet/dist/leaflet.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.css",
  "node_modules/@foris-master/ngx-rest-admin/assets/style/styles.scss",
  "src/styles.css"
],

```

## Options

| Options     | Type          | Default | Description        |
| ----------- | ------------- | ------- | ------------------ |
| REST_CONFIG | `REST_CONFIG` |         | configure your app |

#### Examples and Tutorials

A great step-by-step [example of making an Angular CLI project with a library distributed separate from the app](https://github.com/Foris-master/ngx-admin/tree/dev_geol/projects/rest-admin-example)

## Library Contributions

- Fork repo.
- Update `./projects/rest-admin`
- Update `./src/lib` with new functionality.
- Update README.md

### Helpful commands

- Build lib: `$ npm run lib:build`
- Copy license and readme files: `$ npm run copy-files`
- Create package: `$ npm run npm_pack`
- Build lib and create package: `$ npm run package`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Geol1"><img src="https://avatars.githubusercontent.com/u/5000255?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Geol1</b></sub></a><br /><a href="https://github.com/Foris-master/ngx-admin/commits?author=Geol1" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/RoosveltK"><img src="https://avatars.githubusercontent.com/u/13340931?v=4?s=100" width="100px;" alt=""/><br /><sub><b>RoosveltK</b></sub></a><br /><a href="https://github.com/Foris-master/ngx-admin/commits?author=RoosveltK" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
