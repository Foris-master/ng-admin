import { Inject, Injectable } from "@angular/core";
import { AuthGuard } from "../../../utils/auth.guard";
import { RestResource } from "../models/rest-resource";
import {
  REST_CONFIG,
  TYPE_GROUP,
} from "../models/rest-resource.model";
import { RestResourceAddComponent } from "../rest-resource-add/rest-resource-add.component";
import { RestResourceDetailComponent } from "../rest-resource-detail/rest-resource-detail.component";
import { RestResourceListComponent } from "../rest-resource-list/rest-resource-list.component";
import * as _ from "lodash";
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
    return this._restResources.find(
      (rest) => rest.name.toLowerCase() == nameResource.toLowerCase()
    );
  }
  
  generateMenus() {
    let groupsName = [];
    this._restResources.map((rest) => {
      if (rest.listConfig.group) groupsName.push(rest.listConfig.group);
    });

    const menus_group = {};
    this._restResources.forEach((item) => {
      if (item.listConfig.group) {
        switch (item.listConfig.group.type) {
          case TYPE_GROUP.SEPARATOR:
            if (Array.isArray(menus_group[item.listConfig.group.name]))
              menus_group[item.listConfig.group.name].push({
                title: item.name,
                icon: item.icon,
                link: "admin/" + item.name.toLowerCase() + "-list",
              });
            else {
              menus_group[item.listConfig.group.name] = [
                {
                  title: item.listConfig.group.name,
                  group: true,
                },
              ];
              menus_group[item.listConfig.group.name].push({
                title: item.name,
                icon: item.icon,
                link: "admin/" + item.name.toLowerCase() + "-list",
              });
            }
            break;
          case TYPE_GROUP.MENU:
            if (Array.isArray(menus_group[item.listConfig.group.name])) {
              menus_group[item.listConfig.group.name][0].children.push({
                title: item.name,
                link: "admin/" + item.name.toLowerCase() + "-list",
                icon: item.icon,
              });
            } else {
              menus_group[item.listConfig.group.name] = [
                {
                  title: item.listConfig.group.name,
                  icon: item.listConfig.group.icon,
                  children: [
                    {
                      title: item.name,
                      link: "admin/" + item.name.toLowerCase() + "-list",
                      icon: item.icon,
                    },
                  ],
                },
              ];
            }
            break;
          default:
            if (Array.isArray(menus_group[TYPE_GROUP.DEFAULT]))
              menus_group[TYPE_GROUP.DEFAULT].push({
                title: item.name,
                icon: item.icon,
                link: "admin/" + item.name.toLowerCase() + "-list",
              });
            else {
              menus_group[TYPE_GROUP.DEFAULT] = [];
              menus_group[TYPE_GROUP.DEFAULT].push({
                title: item.name,
                link: "admin/" + item.name.toLowerCase() + "-list",
                icon: item.icon,
              });
            }
            break;
        }
      } else {
        if (Array.isArray(menus_group[TYPE_GROUP.DEFAULT]))
          menus_group[TYPE_GROUP.DEFAULT].push({
            title: item.name,
            icon: item.icon,
            link: "admin/" + item.name.toLowerCase() + "-list",
          });
        else {
          menus_group[TYPE_GROUP.DEFAULT] = [];
          menus_group[TYPE_GROUP.DEFAULT].push({
            title: item.name,
            link: "admin/" + item.name.toLowerCase() + "-list",
            icon: item.icon,
          });
        }
      }
    });
    let menus_test = [];
    let priorities = groupsName
      .sort((a, b) => a.priority - b.priority)
      .reverse();

    priorities = _.uniqBy(priorities, "name");
    priorities.forEach((item) => {
      menus_test.push(...menus_group[item.name]);
    });

    return menus_test;
  }

  generateRoutes() {
    return this._restResources.reduce((cumul, rest) => {
      if (rest.authRequired) {
        return [
          ...cumul,
          {
            path: "admin/" + rest.name.toLowerCase() + "-list",
            component: RestResourceListComponent,
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            canActivate: [AuthGuard],
          },
          {
            path: "admin/" + rest.name.toLowerCase() + "-add",
            component: RestResourceAddComponent,
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            canActivate: [AuthGuard],
          },
          {
            path: "admin/" + rest.name.toLowerCase() + "-edit/:id",
            component: RestResourceAddComponent,
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            canActivate: [AuthGuard],
          },
          {
            path: "admin/" + rest.name.toLowerCase() + "-detail/:id",
            component: RestResourceDetailComponent,
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            canActivate: [AuthGuard],
          },
        ];
      }
      return [
        ...cumul,
        {
          path: "admin/" + rest.name.toLowerCase() + "-list",
          data: {
            ngxPermissions: {
              only: rest.permissions,
            },
          },
          component: RestResourceListComponent,
        },
        {
          path: "admin/" + rest.name.toLowerCase() + "-add",
          data: {
            ngxPermissions: {
              only: rest.permissions,
            },
          },
          component: RestResourceAddComponent,
        },
        {
          path: "admin/" + rest.name.toLowerCase() + "-edit/:id",
          data: {
            ngxPermissions: {
              only: rest.permissions,
            },
          },
          component: RestResourceAddComponent,
        },
        {
          path: "admin/" + rest.name.toLowerCase() + "-detail/:id",
          data: {
            ngxPermissions: {
              only: rest.permissions,
            },
          },
          component: RestResourceDetailComponent,
        },
      ];
    }, []);
  }
}
