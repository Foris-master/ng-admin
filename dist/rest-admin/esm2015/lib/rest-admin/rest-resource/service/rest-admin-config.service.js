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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFJTCxhQUFhLEdBQ2QsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUs1QixNQUFNLE9BQU8sc0JBQXNCO0lBbUJqQyxZQUEwQyxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBZmpFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBYztZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDN0IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsb0JBQWUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVB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QUFHLE1BQU0sQ0FBQyx1QkFBdUIsR0FBRyxPQUFPO2dCQUNyRCxDQUFDLENBQUMsUUFBUTtZQUNaLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QjtZQUMzRCxDQUFDLENBQUMsTUFBTSxDQUFDLHVCQUF1QjtZQUNoQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUM5RCxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBQ0QsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzttSEF2YlUsc0JBQXNCLGtCQW1CYixZQUFZO3VIQW5CckIsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBb0JjLE1BQU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVYVEVSTl9QQUdFUyxcbiAgUGVybWlzc2lvbkNvbmZpZyxcbiAgUkVTVF9BVVRILFxuICBTVFJBVEVHWV9BVVRILFxufSBmcm9tICcuLy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSRVNUX0NPTkZJRywgVFlQRV9HUk9VUCB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2Uge1xuICBfcmVzdFJlc291cmNlczogUmVzdFJlc291cmNlW107XG4gIF9wZXJtaXNzaW9uczogUGVybWlzc2lvbkNvbmZpZ1tdO1xuICBfZXh0ZXJuUGFnZXM6IEVYVEVSTl9QQUdFU1tdO1xuICBjb21wb25lbnRzID0gW107XG5cbiAgX3Jlc3RBdXRoUGFyYW1zOiBSRVNUX0FVVEggPSB7XG4gICAgc3RyYXRlZ3k6IFNUUkFURUdZX0FVVEguRU1BSUwsXG4gICAgYmFzZUVuZHBvaW50OiAnJyxcbiAgICBsb2dvdXRFbmRQb2ludDogJycsXG4gICAgbG9naW5FbmRQb2ludDogJycsXG4gICAgdXNlckluZm9FbmRQb2ludDogJycsXG4gIH07XG5cbiAgZGVmYXVsdExhbmd1YWdlID0gW1xuICAgIHsgdGV4dDogJ0FuZ2xhaXMnLCB2YWx1ZTogJ2VuJyB9LFxuICAgIHsgdGV4dDogJ0ZyYW7Dp2FpcycsIHZhbHVlOiAnZnInIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgncmVzdENvbmZpZycpIHByaXZhdGUgcmVzdENvbmZpZzogUkVTVF9DT05GSUcpIHtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzID0gcmVzdENvbmZpZy5yZXNvdXJjZXM7XG4gICAgdGhpcy5fcmVzdEF1dGhQYXJhbXMgPSB0aGlzLmNoZWNrVmFsdWVSZXN0QXV0aChcbiAgICAgIHJlc3RDb25maWcuYXV0aENvbmZpZyA/IHJlc3RDb25maWcuYXV0aENvbmZpZyA6IHt9XG4gICAgKTtcbiAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHJlc3RDb25maWcucGVybWlzc2lvbnMgPyByZXN0Q29uZmlnLnBlcm1pc3Npb25zIDogW107XG4gICAgdGhpcy5fZXh0ZXJuUGFnZXMgPSByZXN0Q29uZmlnLmV4dGVyblBhZ2VzID8gcmVzdENvbmZpZy5leHRlcm5QYWdlcyA6IFtdO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0UmVzb3VyY2VzKCk6IFJlc3RSZXNvdXJjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmVzdFJlc291cmNlcyh2OiBSZXN0UmVzb3VyY2VbXSkge1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMgPSB2O1xuICB9XG4gIHB1YmxpYyBnZXQgc2l0ZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5iYXNlVXJsO1xuICB9XG5cbiAgcHVibGljIGdldCBnb29nbGVNYXBBcGlLZXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLmdvb2dsZU1hcEFwaUtleVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcuZ29vZ2xlTWFwQXBpS2V5XG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0UGF0aEZpbGVUcmFuc2xhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlLmZpbGVQYXRoXG4gICAgICA6ICdhc3NldHMvaTE4bi8nO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0TGFuZ3VhZ2UoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlXG4gICAgICA/IHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGUubGFuZ3VhZ2VzXG4gICAgICA6IHRoaXMuZGVmYXVsdExhbmd1YWdlO1xuICB9XG5cbiAgcHVibGljIGdldFNwZWNpZmljUmVzb3VyY2UobmFtZVJlc291cmNlOiBzdHJpbmcpOiBSZXN0UmVzb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzLmZpbmQoXG4gICAgICAocmVzdCkgPT4gcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT0gbmFtZVJlc291cmNlLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVNZW51cygpIHtcbiAgICBsZXQgZ3JvdXBzTmFtZSA9IFtdO1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMubWFwKChyZXN0KSA9PiB7XG4gICAgICBpZiAocmVzdC5saXN0Q29uZmlnLmdyb3VwKSBncm91cHNOYW1lLnB1c2gocmVzdC5saXN0Q29uZmlnLmdyb3VwKTtcbiAgICB9KTtcbiAgICBjb25zdCBtZW51c19ncm91cCA9IHt9O1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubGlzdENvbmZpZy5ncm91cCkge1xuICAgICAgICBzd2l0Y2ggKGl0ZW0ubGlzdENvbmZpZy5ncm91cC50eXBlKSB7XG4gICAgICAgICAgY2FzZSBUWVBFX0dST1VQLlNFUEFSQVRPUjpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSkpXG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWUsXG4gICAgICAgICAgICAgICAgICBncm91cDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgVFlQRV9HUk9VUC5NRU5VOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdKSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShcbiAgICAgICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXVswXVsnY2hpbGRyZW4nXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdWzBdLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV1bMF1bJ2NoaWxkcmVuJ10gPSBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0gPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lLFxuICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5saXN0Q29uZmlnLmdyb3VwLmljb24sXG4gICAgICAgICAgICAgICAgICBleHBhbmRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSkpXG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgbGluazogaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdID0gW107XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICB9KTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSA9IFtdO1xuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLl9leHRlcm5QYWdlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5zaG93SW5NZW51KSB7aWYgKGl0ZW0uZ3JvdXApIHtcbiAgICAgICAgc3dpdGNoIChpdGVtLmdyb3VwLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuU0VQQVJBVE9SOlxuICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5ncm91cC5uYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgVFlQRV9HUk9VUC5NRU5VOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5ncm91cC5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5ncm91cC5uYW1lXVswXVsnY2hpbGRyZW4nXSkpIHtcbiAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmdyb3VwLm5hbWVdWzBdLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ucGF0aCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmdyb3VwLm5hbWVdWzBdWydjaGlsZHJlbiddID0gW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ucGF0aCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5ncm91cC5uYW1lXSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5ncm91cC5uYW1lLFxuICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5ncm91cC5pY29uLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0pKVxuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ucGF0aCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSA9IFtdO1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ucGF0aCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSkpXG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLnBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0gPSBbXTtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ucGF0aCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IG1lbnVzX3Rlc3QgPSBbXTtcbiAgICBsZXQgcHJpb3JpdGllcyA9IGdyb3Vwc05hbWVcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSlcbiAgICAgIC5yZXZlcnNlKCk7XG5cbiAgICBwcmlvcml0aWVzID0gXy51bmlxQnkocHJpb3JpdGllcywgJ25hbWUnKTtcbiAgICBwcmlvcml0aWVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIG1lbnVzX3Rlc3QucHVzaCguLi5tZW51c19ncm91cFtpdGVtLm5hbWVdKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZW51c190ZXN0O1xuICB9XG5cbiAgZ2VuZXJhdGVSb3V0ZXMoKSB7XG4gICAgdmFyIHJvdXRlcyA9IFtdO1xuICAgIHJvdXRlcyA9IFtcbiAgICAgIC4uLnJvdXRlcyxcbiAgICAgIC4uLnRoaXMuX3Jlc3RSZXNvdXJjZXMucmVkdWNlKChjdW11bCwgcmVzdCkgPT4ge1xuICAgICAgICBpZiAocmVzdC5hdXRoUmVxdWlyZWQpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWFkZCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWVkaXQvOmlkJyxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZGV0YWlsLzppZCcsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWFkZCcsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1lZGl0LzppZCcsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1kZXRhaWwvOmlkJyxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgICB9LCBbXSksXG4gICAgXTtcbiAgICBpZiAodGhpcy5fZXh0ZXJuUGFnZXM/Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJvdXRlcyA9IFtcbiAgICAgICAgLi4ucm91dGVzLFxuICAgICAgICAuLi50aGlzLl9leHRlcm5QYWdlcy5yZWR1Y2UoKGN1bXVsLCByZXN0KSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3Q/LmF1dGhSZXF1aXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRoOiByZXN0LnBhdGgsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiByZXN0LnJlbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdGg6IHJlc3QucGF0aCxcbiAgICAgICAgICAgICAgY29tcG9uZW50OiByZXN0LnJlbmRlckNvbXBvbmVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXTtcbiAgICAgICAgfSwgW10pLFxuICAgICAgXTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdEF1dGhQYXJhbXMoKTogUkVTVF9BVVRIIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdEF1dGhQYXJhbXM7XG4gIH1cblxuICBjaGVja1ZhbHVlUmVzdEF1dGgocGFyYW1zOiBSRVNUX0FVVEgpOiBSRVNUX0FVVEgge1xuICAgIGNvbnN0IHJlc3Q6IFJFU1RfQVVUSCA9IHtcbiAgICAgIHN0cmF0ZWd5OiBTVFJBVEVHWV9BVVRILkVNQUlMLFxuICAgICAgYmFzZUVuZHBvaW50OiAnJyxcbiAgICAgIGxvZ291dEVuZFBvaW50OiAnJyxcbiAgICAgIGxvZ2luRW5kUG9pbnQ6ICcnLFxuICAgICAgcHJvZmlsZU5hbWVFbmRQb2ludDogJycsXG4gICAgICBwcm9maWxlUGljdHVyZUVuZFBvaW50OiAnJyxcbiAgICAgIHVzZXJJbmZvRW5kUG9pbnQ6ICcnLFxuICAgIH07XG5cbiAgICByZXN0LnN0cmF0ZWd5ID0gcGFyYW1zLnN0cmF0ZWd5ID8gcGFyYW1zLnN0cmF0ZWd5IDogU1RSQVRFR1lfQVVUSC5FTUFJTDtcbiAgICByZXN0LmJhc2VFbmRwb2ludCA9IHBhcmFtcy5iYXNlRW5kcG9pbnRcbiAgICAgID8gcGFyYW1zLmJhc2VFbmRwb2ludFxuICAgICAgOiB0aGlzLnJlc3RCYXNlVXJsO1xuICAgIHJlc3QubG9naW5FbmRQb2ludCA9IHBhcmFtcy5sb2dpbkVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5sb2dpbkVuZFBvaW50XG4gICAgICA6ICcvYXV0aC9sb2dpbic7XG4gICAgcmVzdC5sb2dvdXRFbmRQb2ludCA9IHBhcmFtcy5sb2dvdXRFbmRQb2ludFxuICAgICAgPyBwYXJhbXMubG9nb3V0RW5kUG9pbnRcbiAgICAgIDogJy9hdXRoL2xvZ291dCc7XG4gICAgcmVzdC51c2VySW5mb0VuZFBvaW50ID0gcGFyYW1zLnVzZXJJbmZvRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLnVzZXJJbmZvRW5kUG9pbnRcbiAgICAgIDogJy91c2Vycy9tZSc7XG4gICAgcmVzdC5wcm9maWxlTmFtZUVuZFBvaW50ID0gcGFyYW1zLnByb2ZpbGVOYW1lRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLnByb2ZpbGVOYW1lRW5kUG9pbnRcbiAgICAgIDogJ29yaWdpbmFsLmZ1bGxfbmFtZSc7XG4gICAgcmVzdC5wcm9maWxlUGljdHVyZUVuZFBvaW50ID0gcGFyYW1zLnByb2ZpbGVQaWN0dXJlRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLnByb2ZpbGVQaWN0dXJlRW5kUG9pbnRcbiAgICAgIDogJ29yaWdpbmFsLmluZm9zLmxvZ28nO1xuICAgIHJlc3QucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4gPSBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW5cbiAgICAgID8gdGhpcy5jaGVja0lmUm91dGVFeGlzdChcbiAgICAgICAgICBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4uc3Vic3RyaW5nKDEpICsgJy1saXN0J1xuICAgICAgICApXG4gICAgICAgID8gJy9hZG1pbicgKyBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4gKyAnLWxpc3QnXG4gICAgICAgIDogJy9hZG1pbidcbiAgICAgIDogJy9hZG1pbic7XG4gICAgcmVzdC50b2tlbkxvY2F0aW9uSW5SZXNwb25zZSA9IHBhcmFtcy50b2tlbkxvY2F0aW9uSW5SZXNwb25zZVxuICAgICAgPyBwYXJhbXMudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2VcbiAgICAgIDogJ2RhdGEudG9rZW4nO1xuICAgIHJldHVybiByZXN0O1xuICB9XG5cbiAgY2hlY2tJZlJvdXRlRXhpc3Qocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUm91dGVzKCkuZmluZCgoaXRlbSkgPT4gaXRlbS5wYXRoID09PSByb3V0ZSlcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcGVybWlzc2lvbigpOiBQZXJtaXNzaW9uQ29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9ucztcbiAgfVxuICBwdWJsaWMgZ2V0IGV4dGVyblBhZ2VzKCk6IEVYVEVSTl9QQUdFU1tdIHtcbiAgICByZXR1cm4gdGhpcy5fZXh0ZXJuUGFnZXM7XG4gIH1cbn1cbiJdfQ==