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
        this._externPages = restConfig.externPages ? restConfig.externPages : [];
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
        this._externPages.forEach((item) => {
            if (item.showInMenu) {
                if (item.group) {
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
                                }
                                else {
                                    menus_group[item.group.name][0]['children'] = [
                                        {
                                            title: item.name,
                                            icon: item.icon,
                                            link: '/admin/' + item.path,
                                        },
                                    ];
                                }
                            }
                            else {
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
                }
                else {
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
        var _a;
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
        if (((_a = this._externPages) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            routes = [
                ...routes,
                ...this._externPages.reduce((cumul, rest) => {
                    if (rest === null || rest === void 0 ? void 0 : rest.authRequired) {
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
    get externPages() {
        return this._externPages;
    }
}
RestAdminConfigService.ɵfac = function RestAdminConfigService_Factory(t) { return new (t || RestAdminConfigService)(i0.ɵɵinject('restConfig')); };
RestAdminConfigService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestAdminConfigService, factory: RestAdminConfigService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestAdminConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: ['restConfig']
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJTCxhQUFhLEdBQ2QsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUs1QixNQUFNLE9BQU8sc0JBQXNCO0lBbUJqQyxZQUEwQyxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBZmpFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBYztZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDN0IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsb0JBQWUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVB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QUFHLE1BQU0sQ0FBQyx1QkFBdUIsR0FBRyxPQUFPO2dCQUNyRCxDQUFDLENBQUMsUUFBUTtZQUNaLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QjtZQUMzRCxDQUFDLENBQUMsTUFBTSxDQUFDLHVCQUF1QjtZQUNoQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUM5RCxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs0RkF2YlUsc0JBQXNCLGNBbUJiLFlBQVk7NEVBbkJyQixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZyQixNQUFNO3VGQUVQLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQW9CYyxNQUFNO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFWFRFUk5fUEFHRVMsXG4gIFBlcm1pc3Npb25Db25maWcsXG4gIFJFU1RfQVVUSCxcbiAgU1RSQVRFR1lfQVVUSCxcbn0gZnJvbSAnLi8uLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUkVTVF9DT05GSUcsIFRZUEVfR1JPVVAgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS1kZXRhaWwvcmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWxpc3QvcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIHtcbiAgX3Jlc3RSZXNvdXJjZXM6IFJlc3RSZXNvdXJjZVtdO1xuICBfcGVybWlzc2lvbnM6IFBlcm1pc3Npb25Db25maWdbXTtcbiAgX2V4dGVyblBhZ2VzOiBFWFRFUk5fUEFHRVNbXTtcbiAgY29tcG9uZW50cyA9IFtdO1xuXG4gIF9yZXN0QXV0aFBhcmFtczogUkVTVF9BVVRIID0ge1xuICAgIHN0cmF0ZWd5OiBTVFJBVEVHWV9BVVRILkVNQUlMLFxuICAgIGJhc2VFbmRwb2ludDogJycsXG4gICAgbG9nb3V0RW5kUG9pbnQ6ICcnLFxuICAgIGxvZ2luRW5kUG9pbnQ6ICcnLFxuICAgIHVzZXJJbmZvRW5kUG9pbnQ6ICcnLFxuICB9O1xuXG4gIGRlZmF1bHRMYW5ndWFnZSA9IFtcbiAgICB7IHRleHQ6ICdBbmdsYWlzJywgdmFsdWU6ICdlbicgfSxcbiAgICB7IHRleHQ6ICdGcmFuw6dhaXMnLCB2YWx1ZTogJ2ZyJyB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3Jlc3RDb25maWcnKSBwcml2YXRlIHJlc3RDb25maWc6IFJFU1RfQ09ORklHKSB7XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcyA9IHJlc3RDb25maWcucmVzb3VyY2VzO1xuICAgIHRoaXMuX3Jlc3RBdXRoUGFyYW1zID0gdGhpcy5jaGVja1ZhbHVlUmVzdEF1dGgoXG4gICAgICByZXN0Q29uZmlnLmF1dGhDb25maWcgPyByZXN0Q29uZmlnLmF1dGhDb25maWcgOiB7fVxuICAgICk7XG4gICAgdGhpcy5fcGVybWlzc2lvbnMgPSByZXN0Q29uZmlnLnBlcm1pc3Npb25zID8gcmVzdENvbmZpZy5wZXJtaXNzaW9ucyA6IFtdO1xuICAgIHRoaXMuX2V4dGVyblBhZ2VzID0gcmVzdENvbmZpZy5leHRlcm5QYWdlcyA/IHJlc3RDb25maWcuZXh0ZXJuUGFnZXMgOiBbXTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdFJlc291cmNlcygpOiBSZXN0UmVzb3VyY2VbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RSZXNvdXJjZXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHJlc3RSZXNvdXJjZXModjogUmVzdFJlc291cmNlW10pIHtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzID0gdjtcbiAgfVxuICBwdWJsaWMgZ2V0IHNpdGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcuYmFzZVVybDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ29vZ2xlTWFwQXBpS2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5nb29nbGVNYXBBcGlLZXlcbiAgICAgID8gdGhpcy5yZXN0Q29uZmlnLmdvb2dsZU1hcEFwaUtleVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdFBhdGhGaWxlVHJhbnNsYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGVcbiAgICAgID8gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZS5maWxlUGF0aFxuICAgICAgOiAnYXNzZXRzL2kxOG4vJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdExhbmd1YWdlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlLmxhbmd1YWdlc1xuICAgICAgOiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTcGVjaWZpY1Jlc291cmNlKG5hbWVSZXNvdXJjZTogc3RyaW5nKTogUmVzdFJlc291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcy5maW5kKFxuICAgICAgKHJlc3QpID0+IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpID09IG5hbWVSZXNvdXJjZS50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWVudXMoKSB7XG4gICAgbGV0IGdyb3Vwc05hbWUgPSBbXTtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzLm1hcCgocmVzdCkgPT4ge1xuICAgICAgaWYgKHJlc3QubGlzdENvbmZpZy5ncm91cCkgZ3JvdXBzTmFtZS5wdXNoKHJlc3QubGlzdENvbmZpZy5ncm91cCk7XG4gICAgfSk7XG4gICAgY29uc3QgbWVudXNfZ3JvdXAgPSB7fTtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmxpc3RDb25maWcuZ3JvdXApIHtcbiAgICAgICAgc3dpdGNoIChpdGVtLmxpc3RDb25maWcuZ3JvdXAudHlwZSkge1xuICAgICAgICAgIGNhc2UgVFlQRV9HUk9VUC5TRVBBUkFUT1I6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0pKVxuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0gPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lLFxuICAgICAgICAgICAgICAgICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuTUVOVTpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoXG4gICAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV1bMF1bJ2NoaWxkcmVuJ11cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXVswXS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdWzBdWydjaGlsZHJlbiddID0gW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5pY29uLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0pKVxuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSA9IFtdO1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgbGluazogaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSkpXG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0gPSBbXTtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fZXh0ZXJuUGFnZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uc2hvd0luTWVudSkge2lmIChpdGVtLmdyb3VwKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS5ncm91cC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBUWVBFX0dST1VQLlNFUEFSQVRPUjpcbiAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0uZ3JvdXAubmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5wYXRoLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuTUVOVTpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0uZ3JvdXAubmFtZV0pKSB7XG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0uZ3JvdXAubmFtZV1bMF1bJ2NoaWxkcmVuJ10pKSB7XG4gICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5ncm91cC5uYW1lXVswXS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5ncm91cC5uYW1lXVswXVsnY2hpbGRyZW4nXSA9IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0uZ3JvdXAubmFtZV0gPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0uZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uZ3JvdXAuaWNvbixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0gPSBbXTtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0pKVxuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5wYXRoLFxuICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdID0gW107XG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBtZW51c190ZXN0ID0gW107XG4gICAgbGV0IHByaW9yaXRpZXMgPSBncm91cHNOYW1lXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAucmV2ZXJzZSgpO1xuXG4gICAgcHJpb3JpdGllcyA9IF8udW5pcUJ5KHByaW9yaXRpZXMsICduYW1lJyk7XG4gICAgcHJpb3JpdGllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBtZW51c190ZXN0LnB1c2goLi4ubWVudXNfZ3JvdXBbaXRlbS5uYW1lXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudXNfdGVzdDtcbiAgfVxuXG4gIGdlbmVyYXRlUm91dGVzKCkge1xuICAgIHZhciByb3V0ZXMgPSBbXTtcbiAgICByb3V0ZXMgPSBbXG4gICAgICAuLi5yb3V0ZXMsXG4gICAgICAuLi50aGlzLl9yZXN0UmVzb3VyY2VzLnJlZHVjZSgoY3VtdWwsIHJlc3QpID0+IHtcbiAgICAgICAgaWYgKHJlc3QuYXV0aFJlcXVpcmVkKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1hZGQnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1lZGl0LzppZCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWRldGFpbC86aWQnLFxuICAgICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1hZGQnLFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZWRpdC86aWQnLFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZGV0YWlsLzppZCcsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfSwgW10pLFxuICAgIF07XG4gICAgaWYgKHRoaXMuX2V4dGVyblBhZ2VzPy5sZW5ndGggPiAwKSB7XG4gICAgICByb3V0ZXMgPSBbXG4gICAgICAgIC4uLnJvdXRlcyxcbiAgICAgICAgLi4udGhpcy5fZXh0ZXJuUGFnZXMucmVkdWNlKChjdW11bCwgcmVzdCkgPT4ge1xuICAgICAgICAgIGlmIChyZXN0Py5hdXRoUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aDogcmVzdC5wYXRoLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcmVzdC5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiByZXN0LnBhdGgsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogcmVzdC5yZW5kZXJDb21wb25lbnQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF07XG4gICAgICAgIH0sIFtdKSxcbiAgICAgIF07XG4gICAgfVxuICAgIHJldHVybiByb3V0ZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RBdXRoUGFyYW1zKCk6IFJFU1RfQVVUSCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RBdXRoUGFyYW1zO1xuICB9XG5cbiAgY2hlY2tWYWx1ZVJlc3RBdXRoKHBhcmFtczogUkVTVF9BVVRIKTogUkVTVF9BVVRIIHtcbiAgICBjb25zdCByZXN0OiBSRVNUX0FVVEggPSB7XG4gICAgICBzdHJhdGVneTogU1RSQVRFR1lfQVVUSC5FTUFJTCxcbiAgICAgIGJhc2VFbmRwb2ludDogJycsXG4gICAgICBsb2dvdXRFbmRQb2ludDogJycsXG4gICAgICBsb2dpbkVuZFBvaW50OiAnJyxcbiAgICAgIHByb2ZpbGVOYW1lRW5kUG9pbnQ6ICcnLFxuICAgICAgcHJvZmlsZVBpY3R1cmVFbmRQb2ludDogJycsXG4gICAgICB1c2VySW5mb0VuZFBvaW50OiAnJyxcbiAgICB9O1xuXG4gICAgcmVzdC5zdHJhdGVneSA9IHBhcmFtcy5zdHJhdGVneSA/IHBhcmFtcy5zdHJhdGVneSA6IFNUUkFURUdZX0FVVEguRU1BSUw7XG4gICAgcmVzdC5iYXNlRW5kcG9pbnQgPSBwYXJhbXMuYmFzZUVuZHBvaW50XG4gICAgICA/IHBhcmFtcy5iYXNlRW5kcG9pbnRcbiAgICAgIDogdGhpcy5yZXN0QmFzZVVybDtcbiAgICByZXN0LmxvZ2luRW5kUG9pbnQgPSBwYXJhbXMubG9naW5FbmRQb2ludFxuICAgICAgPyBwYXJhbXMubG9naW5FbmRQb2ludFxuICAgICAgOiAnL2F1dGgvbG9naW4nO1xuICAgIHJlc3QubG9nb3V0RW5kUG9pbnQgPSBwYXJhbXMubG9nb3V0RW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLmxvZ291dEVuZFBvaW50XG4gICAgICA6ICcvYXV0aC9sb2dvdXQnO1xuICAgIHJlc3QudXNlckluZm9FbmRQb2ludCA9IHBhcmFtcy51c2VySW5mb0VuZFBvaW50XG4gICAgICA/IHBhcmFtcy51c2VySW5mb0VuZFBvaW50XG4gICAgICA6ICcvdXNlcnMvbWUnO1xuICAgIHJlc3QucHJvZmlsZU5hbWVFbmRQb2ludCA9IHBhcmFtcy5wcm9maWxlTmFtZUVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5wcm9maWxlTmFtZUVuZFBvaW50XG4gICAgICA6ICdvcmlnaW5hbC5mdWxsX25hbWUnO1xuICAgIHJlc3QucHJvZmlsZVBpY3R1cmVFbmRQb2ludCA9IHBhcmFtcy5wcm9maWxlUGljdHVyZUVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5wcm9maWxlUGljdHVyZUVuZFBvaW50XG4gICAgICA6ICdvcmlnaW5hbC5pbmZvcy5sb2dvJztcbiAgICByZXN0LnJlZGlyZWN0Um91dGVBZnRlckxvZ2luID0gcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luXG4gICAgICA/IHRoaXMuY2hlY2tJZlJvdXRlRXhpc3QoXG4gICAgICAgICAgcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luLnN1YnN0cmluZygxKSArICctbGlzdCdcbiAgICAgICAgKVxuICAgICAgICA/ICcvYWRtaW4nICsgcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luICsgJy1saXN0J1xuICAgICAgICA6ICcvYWRtaW4nXG4gICAgICA6ICcvYWRtaW4nO1xuICAgIHJlc3QudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2UgPSBwYXJhbXMudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2VcbiAgICAgID8gcGFyYW1zLnRva2VuTG9jYXRpb25JblJlc3BvbnNlXG4gICAgICA6ICdkYXRhLnRva2VuJztcbiAgICByZXR1cm4gcmVzdDtcbiAgfVxuXG4gIGNoZWNrSWZSb3V0ZUV4aXN0KHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVJvdXRlcygpLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucGF0aCA9PT0gcm91dGUpXG4gICAgICA/IHRydWVcbiAgICAgIDogZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBlcm1pc3Npb24oKTogUGVybWlzc2lvbkNvbmZpZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnM7XG4gIH1cbiAgcHVibGljIGdldCBleHRlcm5QYWdlcygpOiBFWFRFUk5fUEFHRVNbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2V4dGVyblBhZ2VzO1xuICB9XG59XG4iXX0=