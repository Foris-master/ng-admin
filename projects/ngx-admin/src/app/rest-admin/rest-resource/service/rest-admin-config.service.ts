import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { AuthGuard } from "../../../utils/auth.guard";
import { RestResource } from "../models/rest-resource";
import { ListConfig, REST_CONFIG } from "../models/rest-resource.model";
import { RestResourceAddComponent } from "../rest-resource-add/rest-resource-add.component";
import { RestResourceDetailComponent } from "../rest-resource-detail/rest-resource-detail.component";
import { RestResourceListComponent } from "../rest-resource-list/rest-resource-list.component";

@Injectable({
  providedIn: "root",
})
export class RestAdminConfigService {
  _restResources: RestResource[];
  components = [];

  defaultLanguage = [
    { text: "Anglais", value: "en" },
    { text: "Français", value: "fr" },
  ];
  constructor(@Inject("restConfig") private restConfig: REST_CONFIG) {
    this._restResources = restConfig.resources;
  }

  public get restResources(): RestResource[] {
    return this._restResources;
  }

  public set restResources(v: RestResource[]) {
    this._restResources = v;
  }
  public get siteName(): string {
    return this.restConfig.name;
  }

  public get restBaseUrl(): string {
    return this.restConfig.baseUrl;
  }

  public get restPathFileTranslate(): string {
    return this.restConfig.translate
      ? this.restConfig.translate.filePath
      : "assets/i18n/";
  }

  public get restLanguage(): any[] {
    return this.restConfig.translate
      ? this.restConfig.translate.languages
      : this.defaultLanguage;
  }

  public getSpecificResource(nameResource: string): RestResource {
    return this._restResources.find((rest) => rest.name == nameResource);
  }

  generateMenus() {
    const group = this._restResources.filter(
      (rest) => rest.listConfig.group !== null
    );
    if (group.length > 0) {
    }
    return this._restResources.reduce((cumul, rest) => {
      if (rest.showInMenu) {
        return [
          ...cumul,
          {
            title: rest.name,
            icon: rest.icon,
            children: [
              {
                title: "Liste",
                link: "admin/" + rest.name + "-list",
              },
              {
                title: "Ajouter",
                link: "admin/" + rest.name + "-add",
              },
            ],
          },
        ];
      }
      return [...cumul];
    }, []);
  }

  generateRoutes() {
    return this._restResources.reduce((cumul, rest) => {
      if (rest.authRequired) {
        return [
          ...cumul,
          {
            path: "admin/" + rest.name + "-list",
            component: RestResourceListComponent,
            canActivate: [AuthGuard],
          },
          {
            path: "admin/" + rest.name + "-add",
            component: RestResourceAddComponent,
            canActivate: [AuthGuard],
          },
          {
            path: "admin/" + rest.name + "-edit/:id",
            component: RestResourceAddComponent,
            canActivate: [AuthGuard],
          },
          {
            path: "admin/" + rest.name + "-detail/:id",
            component: RestResourceDetailComponent,
            canActivate: [AuthGuard],
          },
        ];
      }
      return [
        ...cumul,
        {
          path: "admin/" + rest.name + "-list",
          component: RestResourceListComponent,
        },
        {
          path: "admin/" + rest.name + "-add",
          component: RestResourceAddComponent,
        },
        {
          path: "admin/" + rest.name + "-edit/:id",
          component: RestResourceAddComponent,
        },
        {
          path: "admin/" + rest.name + "-detail/:id",
          component: RestResourceDetailComponent,
        },
      ];
    }, []);
  }
}
// <ngx-rest-ressource-list [resource]="res"></ngx-rest-ressource-list>

// generateMenus() {
//   return this._restResources.reduce((cumul, rest) => {
//     return [
//       ...cumul,
//       {
//         title: rest.name,
//         icon: rest.icon,
//         link: "admin/" + rest.name + "-list",
//         home: true,
//       },
//     ];
//   }, []);
// }

// generateRoutes() {
//   return this._restResources.reduce((cumul, rest) => {
//     return [
//       ...cumul,
//       {
//         path: "admin/" + rest.name + "-list",
//         component: RestResourceListComponent,
//       },
//     ];
//   }, []);
// }
