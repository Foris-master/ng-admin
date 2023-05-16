import { STRATEGY_AUTH, } from './../models/rest-resource.model';
import { Inject, Injectable } from '@angular/core';
import { AuthGuard } from '../../../utils/auth.guard';
import { TYPE_GROUP } from '../models/rest-resource.model';
import { RestResourceAddComponent } from '../rest-resource-add/rest-resource-add.component';
import { RestResourceDetailComponent } from '../rest-resource-detail/rest-resource-detail.component';
import { RestResourceListComponent } from '../rest-resource-list/rest-resource-list.component';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
export class RestAdminConfigService {
    constructor(restConfig) {
        this.restConfig = restConfig;
        this.components = [];
        this._restAuthParams = {
            strategy: STRATEGY_AUTH.EMAIL,
            baseEndpoint: '',
            logoutEndPoint: '',
            loginEndPoint: '',
            userInfoEndPoint: '',
        };
        this.defaultLanguage = [
            { text: 'Anglais', value: 'en' },
            { text: 'Français', value: 'fr' },
        ];
        this._restResources = restConfig.resources;
        this._restAuthParams = this.checkValueRestAuth(restConfig.authConfig ? restConfig.authConfig : {});
        this._permissions = restConfig.permissions ? restConfig.permissions : [];
    }
    get restResources() {
        return this._restResources;
    }
    set restResources(v) {
        this._restResources = v;
    }
    get siteName() {
        return this.restConfig.name;
    }
    get restBaseUrl() {
        return this.restConfig.baseUrl;
    }
    get googleMapApiKey() {
        return this.restConfig.googleMapApiKey
            ? this.restConfig.googleMapApiKey
            : '';
    }
    get restPathFileTranslate() {
        return this.restConfig.translate
            ? this.restConfig.translate.filePath
            : 'assets/i18n/';
    }
    get restLanguage() {
        return this.restConfig.translate
            ? this.restConfig.translate.languages
            : this.defaultLanguage;
    }
    getSpecificResource(nameResource) {
        return this._restResources.find((rest) => rest.name.toLowerCase() == nameResource.toLowerCase());
    }
    generateMenus() {
        let groupsName = [];
        this._restResources.map((rest) => {
            if (rest.listConfig.group)
                groupsName.push(rest.listConfig.group);
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
                            if (Array.isArray(menus_group[item.listConfig.group.name][0]['children'])) {
                                menus_group[item.listConfig.group.name][0].children.push({
                                    title: item.name,
                                    link: '/admin/' + item.name.toLowerCase() + '-list',
                                    icon: item.icon,
                                });
                            }
                            else {
                                menus_group[item.listConfig.group.name][0]['children'] = [
                                    {
                                        title: item.name,
                                        link: '/admin/' + item.name.toLowerCase() + '-list',
                                        icon: item.icon,
                                    },
                                ];
                            }
                        }
                        else {
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
            }
            else {
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
        return this._restResources.reduce((cumul, rest) => {
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
        }, []);
    }
    get restAuthParams() {
        return this._restAuthParams;
    }
    checkValueRestAuth(params) {
        const rest = {
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
            ? this.checkIfRouteExist(params.redirectRouteAfterLogin.substring(1) + '-list')
                ? '/admin' + params.redirectRouteAfterLogin + '-list'
                : '/admin'
            : '/admin';
        rest.tokenLocationInResponse = params.tokenLocationInResponse
            ? params.tokenLocationInResponse
            : 'data.token';
        return rest;
    }
    checkIfRouteExist(route) {
        return this.generateRoutes().find((item) => item.path === route)
            ? true
            : false;
    }
    get permission() {
        return this._permissions;
    }
}
RestAdminConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, deps: [{ token: 'restConfig' }], target: i0.ɵɵFactoryTarget.Injectable });
RestAdminConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ['restConfig']
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFHTCxhQUFhLEdBQ2QsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUs1QixNQUFNLE9BQU8sc0JBQXNCO0lBa0JqQyxZQUEwQyxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBZmpFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBYztZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDN0IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsb0JBQWUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVB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SUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzttSEFwVVUsc0JBQXNCLGtCQWtCYixZQUFZO3VIQWxCckIsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBbUJjLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFBlcm1pc3Npb25Db25maWcsXG4gIFJFU1RfQVVUSCxcbiAgU1RSQVRFR1lfQVVUSCxcbn0gZnJvbSAnLi8uLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUkVTVF9DT05GSUcsIFRZUEVfR1JPVVAgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS1kZXRhaWwvcmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWxpc3QvcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIHtcbiAgX3Jlc3RSZXNvdXJjZXM6IFJlc3RSZXNvdXJjZVtdO1xuICBfcGVybWlzc2lvbnM6IFBlcm1pc3Npb25Db25maWdbXTtcbiAgY29tcG9uZW50cyA9IFtdO1xuXG4gIF9yZXN0QXV0aFBhcmFtczogUkVTVF9BVVRIID0ge1xuICAgIHN0cmF0ZWd5OiBTVFJBVEVHWV9BVVRILkVNQUlMLFxuICAgIGJhc2VFbmRwb2ludDogJycsXG4gICAgbG9nb3V0RW5kUG9pbnQ6ICcnLFxuICAgIGxvZ2luRW5kUG9pbnQ6ICcnLFxuICAgIHVzZXJJbmZvRW5kUG9pbnQ6ICcnLFxuICB9O1xuXG4gIGRlZmF1bHRMYW5ndWFnZSA9IFtcbiAgICB7IHRleHQ6ICdBbmdsYWlzJywgdmFsdWU6ICdlbicgfSxcbiAgICB7IHRleHQ6ICdGcmFuw6dhaXMnLCB2YWx1ZTogJ2ZyJyB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3Jlc3RDb25maWcnKSBwcml2YXRlIHJlc3RDb25maWc6IFJFU1RfQ09ORklHKSB7XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcyA9IHJlc3RDb25maWcucmVzb3VyY2VzO1xuICAgIHRoaXMuX3Jlc3RBdXRoUGFyYW1zID0gdGhpcy5jaGVja1ZhbHVlUmVzdEF1dGgoXG4gICAgICByZXN0Q29uZmlnLmF1dGhDb25maWcgPyByZXN0Q29uZmlnLmF1dGhDb25maWcgOiB7fVxuICAgICk7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSByZXN0Q29uZmlnLnBlcm1pc3Npb25zID8gcmVzdENvbmZpZy5wZXJtaXNzaW9ucyA6IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0UmVzb3VyY2VzKCk6IFJlc3RSZXNvdXJjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmVzdFJlc291cmNlcyh2OiBSZXN0UmVzb3VyY2VbXSkge1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMgPSB2O1xuICB9XG4gIHB1YmxpYyBnZXQgc2l0ZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5iYXNlVXJsO1xuICB9XG5cbiAgcHVibGljIGdldCBnb29nbGVNYXBBcGlLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLmdvb2dsZU1hcEFwaUtleVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcuZ29vZ2xlTWFwQXBpS2V5XG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0UGF0aEZpbGVUcmFuc2xhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlLmZpbGVQYXRoXG4gICAgICA6ICdhc3NldHMvaTE4bi8nO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0TGFuZ3VhZ2UoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlXG4gICAgICA/IHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGUubGFuZ3VhZ2VzXG4gICAgICA6IHRoaXMuZGVmYXVsdExhbmd1YWdlO1xuICB9XG5cbiAgcHVibGljIGdldFNwZWNpZmljUmVzb3VyY2UobmFtZVJlc291cmNlOiBzdHJpbmcpOiBSZXN0UmVzb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzLmZpbmQoXG4gICAgICAocmVzdCkgPT4gcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT0gbmFtZVJlc291cmNlLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVNZW51cygpIHtcbiAgICBsZXQgZ3JvdXBzTmFtZSA9IFtdO1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMubWFwKChyZXN0KSA9PiB7XG4gICAgICBpZiAocmVzdC5saXN0Q29uZmlnLmdyb3VwKSBncm91cHNOYW1lLnB1c2gocmVzdC5saXN0Q29uZmlnLmdyb3VwKTtcbiAgICB9KTtcbiAgICBjb25zdCBtZW51c19ncm91cCA9IHt9O1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGlzdENvbmZpZy5ncm91cCkge1xuICAgICAgICBzd2l0Y2ggKGl0ZW0ubGlzdENvbmZpZy5ncm91cC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBUWVBFX0dST1VQLlNFUEFSQVRPUjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSkpXG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWUsXG4gICAgICAgICAgICAgICAgICBncm91cDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgVFlQRV9HUk9VUC5NRU5VOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdKSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShcbiAgICAgICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXVswXVsnY2hpbGRyZW4nXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdWzBdLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV1bMF1bJ2NoaWxkcmVuJ10gPSBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0gPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lLFxuICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5saXN0Q29uZmlnLmdyb3VwLmljb24sXG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSkpXG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgbGluazogaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdID0gW107XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSA9IFtdO1xuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgbGV0IG1lbnVzX3Rlc3QgPSBbXTtcbiAgICBsZXQgcHJpb3JpdGllcyA9IGdyb3Vwc05hbWVcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSlcbiAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICBwcmlvcml0aWVzID0gXy51bmlxQnkocHJpb3JpdGllcywgJ25hbWUnKTtcbiAgICBwcmlvcml0aWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG1lbnVzX3Rlc3QucHVzaCguLi5tZW51c19ncm91cFtpdGVtLm5hbWVdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51c190ZXN0O1xuICB9XG5cbiAgZ2VuZXJhdGVSb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RSZXNvdXJjZXMucmVkdWNlKChjdW11bCwgcmVzdCkgPT4ge1xuICAgICAgaWYgKHJlc3QuYXV0aFJlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWFkZCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1lZGl0LzppZCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1kZXRhaWwvOmlkJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gW1xuICAgICAgICAuLi5jdW11bCxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1hZGQnLFxuICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgLy8gICB9LFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZWRpdC86aWQnLFxuICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgLy8gICB9LFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZGV0YWlsLzppZCcsXG4gICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgIF07XG4gICAgfSwgW10pO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0QXV0aFBhcmFtcygpOiBSRVNUX0FVVEgge1xuICAgIHJldHVybiB0aGlzLl9yZXN0QXV0aFBhcmFtcztcbiAgfVxuXG4gIGNoZWNrVmFsdWVSZXN0QXV0aChwYXJhbXM6IFJFU1RfQVVUSCk6IFJFU1RfQVVUSCB7XG4gICAgY29uc3QgcmVzdDogUkVTVF9BVVRIID0ge1xuICAgICAgc3RyYXRlZ3k6IFNUUkFURUdZX0FVVEguRU1BSUwsXG4gICAgICBiYXNlRW5kcG9pbnQ6ICcnLFxuICAgICAgbG9nb3V0RW5kUG9pbnQ6ICcnLFxuICAgICAgbG9naW5FbmRQb2ludDogJycsXG4gICAgICBwcm9maWxlTmFtZUVuZFBvaW50OiAnJyxcbiAgICAgIHByb2ZpbGVQaWN0dXJlRW5kUG9pbnQ6ICcnLFxuICAgICAgdXNlckluZm9FbmRQb2ludDogJycsXG4gICAgfTtcblxuICAgIHJlc3Quc3RyYXRlZ3kgPSBwYXJhbXMuc3RyYXRlZ3kgPyBwYXJhbXMuc3RyYXRlZ3kgOiBTVFJBVEVHWV9BVVRILkVNQUlMO1xuICAgIHJlc3QuYmFzZUVuZHBvaW50ID0gcGFyYW1zLmJhc2VFbmRwb2ludFxuICAgICAgPyBwYXJhbXMuYmFzZUVuZHBvaW50XG4gICAgICA6IHRoaXMucmVzdEJhc2VVcmw7XG4gICAgcmVzdC5sb2dpbkVuZFBvaW50ID0gcGFyYW1zLmxvZ2luRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLmxvZ2luRW5kUG9pbnRcbiAgICAgIDogJy9hdXRoL2xvZ2luJztcbiAgICByZXN0LmxvZ291dEVuZFBvaW50ID0gcGFyYW1zLmxvZ291dEVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5sb2dvdXRFbmRQb2ludFxuICAgICAgOiAnL2F1dGgvbG9nb3V0JztcbiAgICByZXN0LnVzZXJJbmZvRW5kUG9pbnQgPSBwYXJhbXMudXNlckluZm9FbmRQb2ludFxuICAgICAgPyBwYXJhbXMudXNlckluZm9FbmRQb2ludFxuICAgICAgOiAnL3VzZXJzL21lJztcbiAgICByZXN0LnByb2ZpbGVOYW1lRW5kUG9pbnQgPSBwYXJhbXMucHJvZmlsZU5hbWVFbmRQb2ludFxuICAgICAgPyBwYXJhbXMucHJvZmlsZU5hbWVFbmRQb2ludFxuICAgICAgOiAnb3JpZ2luYWwuZnVsbF9uYW1lJztcbiAgICByZXN0LnByb2ZpbGVQaWN0dXJlRW5kUG9pbnQgPSBwYXJhbXMucHJvZmlsZVBpY3R1cmVFbmRQb2ludFxuICAgICAgPyBwYXJhbXMucHJvZmlsZVBpY3R1cmVFbmRQb2ludFxuICAgICAgOiAnb3JpZ2luYWwuaW5mb3MubG9nbyc7XG4gICAgcmVzdC5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbiA9IHBhcmFtcy5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpblxuICAgICAgPyB0aGlzLmNoZWNrSWZSb3V0ZUV4aXN0KFxuICAgICAgICAgIHBhcmFtcy5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbi5zdWJzdHJpbmcoMSkgKyAnLWxpc3QnXG4gICAgICAgIClcbiAgICAgICAgPyAnL2FkbWluJyArIHBhcmFtcy5yZWRpcmVjdFJvdXRlQWZ0ZXJMb2dpbiArICctbGlzdCdcbiAgICAgICAgOiAnL2FkbWluJ1xuICAgICAgOiAnL2FkbWluJztcbiAgICByZXN0LnRva2VuTG9jYXRpb25JblJlc3BvbnNlID0gcGFyYW1zLnRva2VuTG9jYXRpb25JblJlc3BvbnNlXG4gICAgICA/IHBhcmFtcy50b2tlbkxvY2F0aW9uSW5SZXNwb25zZVxuICAgICAgOiAnZGF0YS50b2tlbic7XG4gICAgcmV0dXJuIHJlc3Q7XG4gIH1cblxuICBjaGVja0lmUm91dGVFeGlzdChyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGVSb3V0ZXMoKS5maW5kKChpdGVtKSA9PiBpdGVtLnBhdGggPT09IHJvdXRlKVxuICAgICAgPyB0cnVlXG4gICAgICA6IGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldCBwZXJtaXNzaW9uKCk6IFBlcm1pc3Npb25Db25maWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICB9XG59XG4iXX0=