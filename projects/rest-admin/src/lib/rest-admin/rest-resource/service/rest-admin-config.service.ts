import {
  EXTERN_PAGES,
  PermissionConfig,
  REST_AUTH,
  STRATEGY_AUTH,
} from './../models/rest-resource.model';
import { Inject, Injectable } from '@angular/core';
import { AuthGuard } from '../../../utils/auth.guard';
import { RestResource } from '../models/rest-resource';
import { REST_CONFIG, TYPE_GROUP } from '../models/rest-resource.model';
import { RestResourceAddComponent } from '../rest-resource-add/rest-resource-add.component';
import { RestResourceDetailComponent } from '../rest-resource-detail/rest-resource-detail.component';
import { RestResourceListComponent } from '../rest-resource-list/rest-resource-list.component';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class RestAdminConfigService {
  _restResources: RestResource[];
  _permissions: PermissionConfig[];
  _externPages: EXTERN_PAGES[];
  components = [];

  _restAuthParams: REST_AUTH = {
    strategy: STRATEGY_AUTH.EMAIL,
    baseEndpoint: '',
    logoutEndPoint: '',
    loginEndPoint: '',
    userInfoEndPoint: '',
  };

  defaultLanguage = [
    { text: 'Anglais', value: 'en' },
    { text: 'Français', value: 'fr' },
  ];

  constructor(@Inject('restConfig') private restConfig: REST_CONFIG) {
    this._restResources = restConfig.resources;
    this._restAuthParams = this.checkValueRestAuth(
      restConfig.authConfig ? restConfig.authConfig : {}
    );
    this._permissions = restConfig.permissions ? restConfig.permissions : [];
    this._externPages = restConfig.externPages ? restConfig.externPages : [];
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

  public get googleMapApiKey(): string {
    return this.restConfig.googleMapApiKey
      ? this.restConfig.googleMapApiKey
      : '';
  }

  public get restPathFileTranslate(): string {
    return this.restConfig.translate
      ? this.restConfig.translate.filePath
      : 'assets/i18n/';
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
                link: '/admin/' + item.name.toLowerCase() + '-list',
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
                link: '/admin/' + item.name.toLowerCase() + '-list',
              });
            }
            break;
          case TYPE_GROUP.MENU:
            if (Array.isArray(menus_group[item.listConfig.group.name])) {
              if (
                Array.isArray(
                  menus_group[item.listConfig.group.name][0]['children']
                )
              ) {
                menus_group[item.listConfig.group.name][0].children.push({
                  title: item.name,
                  link: '/admin/' + item.name.toLowerCase() + '-list',
                  icon: item.icon,
                });
              } else {
                menus_group[item.listConfig.group.name][0]['children'] = [
                  {
                    title: item.name,
                    link: '/admin/' + item.name.toLowerCase() + '-list',
                    icon: item.icon,
                  },
                ];
              }
            } else {
              menus_group[item.listConfig.group.name] = [
                {
                  title: item.listConfig.group.name,
                  icon: item.listConfig.group.icon,
                  expanded: true,
                  children: [
                    {
                      title: item.name,
                      link: '/admin/' + item.name.toLowerCase() + '-list',
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
                link: item.name.toLowerCase() + '-list',
              });
            else {
              menus_group[TYPE_GROUP.DEFAULT] = [];
              menus_group[TYPE_GROUP.DEFAULT].push({
                title: item.name,
                link: item.name.toLowerCase() + '-list',
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
            link: '/admin/' + item.name.toLowerCase() + '-list',
          });
        else {
          menus_group[TYPE_GROUP.DEFAULT] = [];
          menus_group[TYPE_GROUP.DEFAULT].push({
            title: item.name,
            link: '/admin/' + item.name.toLowerCase() + '-list',
            icon: item.icon,
          });
        }
      }
    });

    this._externPages.forEach((item) => {
      if (item.showInMenu) {if (item.group) {
        switch (item.group.type) {
          case TYPE_GROUP.SEPARATOR:
            menus_group[item.group.name].push({
              title: item.name,
              icon: item.icon,
              link: '/admin/' + item.path,
            });
            break;
          case TYPE_GROUP.MENU:
            if (Array.isArray(menus_group[item.group.name])) {
              if (Array.isArray(menus_group[item.group.name][0]['children'])) {
                menus_group[item.group.name][0].children.push({
                  title: item.name,
                  icon: item.icon,
                  link: '/admin/' + item.path,
                });
              } else {
                menus_group[item.group.name][0]['children'] = [
                  {
                    title: item.name,
                    icon: item.icon,
                    link: '/admin/' + item.path,
                  },
                ];
              }
            } else {
              menus_group[item.group.name] = [
                {
                  title: item.group.name,
                  icon: item.group.icon,
                  expanded: true,
                  children: [
                    {
                      title: item.name,
                      icon: item.icon,
                      link: '/admin/' + item.path,
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
                link: '/admin/' + item.path,
              });
            else {
              menus_group[TYPE_GROUP.DEFAULT] = [];
              menus_group[TYPE_GROUP.DEFAULT].push({
                title: item.name,
                icon: item.icon,
                link: '/admin/' + item.path,
              });
            }
            break;
        }
      } else {
        if (Array.isArray(menus_group[TYPE_GROUP.DEFAULT]))
          menus_group[TYPE_GROUP.DEFAULT].push({
            title: item.name,
            icon: item.icon,
            link: '/admin/' + item.path,
          });
        else {
          menus_group[TYPE_GROUP.DEFAULT] = [];
          menus_group[TYPE_GROUP.DEFAULT].push({
            title: item.name,
            icon: item.icon,
            link: '/admin/' + item.path,
          });
        }
      }
      }
    });

    let menus_test = [];
    let priorities = groupsName
      .sort((a, b) => a.priority - b.priority)
      .reverse();

    priorities = _.uniqBy(priorities, 'name');
    priorities.forEach((item) => {
      menus_test.push(...menus_group[item.name]);
    });

    return menus_test;
  }

  generateRoutes() {
    var routes = [];
    routes = [
      ...routes,
      ...this._restResources.reduce((cumul, rest) => {
        if (rest.authRequired) {
          return [
            ...cumul,
            {
              path: rest.name.toLowerCase() + '-list',
              component: RestResourceListComponent,
              // data: {
              //   ngxPermissions: {
              //     only: rest.permissions,
              //   },
              // },
              canActivate: [AuthGuard],
            },
            {
              path: rest.name.toLowerCase() + '-add',
              component: RestResourceAddComponent,
              // data: {
              //   ngxPermissions: {
              //     only: rest.permissions,
              //   },
              // },
              canActivate: [AuthGuard],
            },
            {
              path: rest.name.toLowerCase() + '-edit/:id',
              component: RestResourceAddComponent,
              // data: {
              //   ngxPermissions: {
              //     only: rest.permissions,
              //   },
              // },
              canActivate: [AuthGuard],
            },
            {
              path: rest.name.toLowerCase() + '-detail/:id',
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
            path: rest.name.toLowerCase() + '-list',
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            component: RestResourceListComponent,
          },
          {
            path: rest.name.toLowerCase() + '-add',
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            component: RestResourceAddComponent,
          },
          {
            path: rest.name.toLowerCase() + '-edit/:id',
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            component: RestResourceAddComponent,
          },
          {
            path: rest.name.toLowerCase() + '-detail/:id',
            // data: {
            //   ngxPermissions: {
            //     only: rest.permissions,
            //   },
            // },
            component: RestResourceDetailComponent,
          },
        ];
      }, []),
    ];
    if (this._externPages?.length > 0) {
      routes = [
        ...routes,
        ...this._externPages.reduce((cumul, rest) => {
          if (rest?.authRequired) {
            return [
              ...cumul,
              {
                path: rest.path,
                component: rest.renderComponent,
                canActivate: [AuthGuard],
              },
            ];
          }
          return [
            ...cumul,
            {
              path: rest.path,
              component: rest.renderComponent,
            },
          ];
        }, []),
      ];
    }
    return routes;
  }

  public get restAuthParams(): REST_AUTH {
    return this._restAuthParams;
  }

  checkValueRestAuth(params: REST_AUTH): REST_AUTH {
    const rest: REST_AUTH = {
      strategy: STRATEGY_AUTH.EMAIL,
      baseEndpoint: '',
      logoutEndPoint: '',
      loginEndPoint: '',
      profileNameEndPoint: '',
      profilePictureEndPoint: '',
      userInfoEndPoint: '',
    };

    rest.strategy = params.strategy ? params.strategy : STRATEGY_AUTH.EMAIL;
    rest.baseEndpoint = params.baseEndpoint
      ? params.baseEndpoint
      : this.restBaseUrl;
    rest.loginEndPoint = params.loginEndPoint
      ? params.loginEndPoint
      : '/auth/login';
    rest.logoutEndPoint = params.logoutEndPoint
      ? params.logoutEndPoint
      : '/auth/logout';
    rest.userInfoEndPoint = params.userInfoEndPoint
      ? params.userInfoEndPoint
      : '/users/me';
    rest.profileNameEndPoint = params.profileNameEndPoint
      ? params.profileNameEndPoint
      : 'original.full_name';
    rest.profilePictureEndPoint = params.profilePictureEndPoint
      ? params.profilePictureEndPoint
      : 'original.infos.logo';
    rest.redirectRouteAfterLogin = params.redirectRouteAfterLogin
      ? this.checkIfRouteExist(
          params.redirectRouteAfterLogin.substring(1) + '-list'
        )
        ? '/admin' + params.redirectRouteAfterLogin + '-list'
        : '/admin'
      : '/admin';
    rest.tokenLocationInResponse = params.tokenLocationInResponse
      ? params.tokenLocationInResponse
      : 'data.token';
    return rest;
  }

  checkIfRouteExist(route: string): boolean {
    return this.generateRoutes().find((item) => item.path === route)
      ? true
      : false;
  }

  public get permission(): PermissionConfig[] {
    return this._permissions;
  }
  public get externPages(): EXTERN_PAGES[] {
    return this._externPages;
  }
}
