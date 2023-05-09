import { STRATEGY_AUTH } from './../models/rest-resource.model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUk1QixNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQyxZQUEwQyxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBZmpFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBYztZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDN0IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsb0JBQWUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNsQyxDQUFDO1FBR0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUM1QyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQ25ELENBQUM7SUFDSixDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsQ0FBaUI7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBVyxlQUFlO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlO1lBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWU7WUFDakMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxJQUFXLHFCQUFxQjtRQUM5QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztZQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNwQyxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFNBQVM7WUFDckMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUVNLG1CQUFtQixDQUFDLFlBQW9CO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQzdCLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FDaEUsQ0FBQztJQUNKLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUs7Z0JBQUUsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtnQkFDekIsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ2xDLEtBQUssVUFBVSxDQUFDLFNBQVM7d0JBQ3ZCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3hELFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQzNDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtnQ0FDaEIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dDQUNmLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPOzZCQUNwRCxDQUFDLENBQUM7NkJBQ0E7NEJBQ0gsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHO2dDQUN4QztvQ0FDRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtvQ0FDakMsS0FBSyxFQUFFLElBQUk7aUNBQ1o7NkJBQ0YsQ0FBQzs0QkFDRixXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO2dDQUMzQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0NBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQ0FDZixJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTzs2QkFDcEQsQ0FBQyxDQUFDO3lCQUNKO3dCQUNELE1BQU07b0JBQ1IsS0FBSyxVQUFVLENBQUMsSUFBSTt3QkFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFOzRCQUMxRCxJQUNFLEtBQUssQ0FBQyxPQUFPLENBQ1gsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUN2RCxFQUNEO2dDQUNBLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29DQUN2RCxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7b0NBQ2hCLElBQUksRUFBRSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPO29DQUNuRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7aUNBQ2hCLENBQUMsQ0FBQzs2QkFDSjtpQ0FBTTtnQ0FDTCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUc7b0NBQ3ZEO3dDQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTt3Q0FDaEIsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU87d0NBQ25ELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtxQ0FDaEI7aUNBQ0YsQ0FBQzs2QkFDSDt5QkFDRjs2QkFBTTs0QkFDTCxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Z0NBQ3hDO29DQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJO29DQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSTtvQ0FDaEMsUUFBUSxFQUFFLElBQUk7b0NBQ2QsUUFBUSxFQUFFO3dDQUNSOzRDQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTs0Q0FDaEIsSUFBSSxFQUFFLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLE9BQU87NENBQ25ELElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt5Q0FDaEI7cUNBQ0Y7aUNBQ0Y7NkJBQ0YsQ0FBQzt5QkFDSDt3QkFDRCxNQUFNO29CQUNSO3dCQUNFLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUNoRCxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO2dDQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0NBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTzs2QkFDeEMsQ0FBQyxDQUFDOzZCQUNBOzRCQUNILFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDOzRCQUNyQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztnQ0FDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO2dDQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxPQUFPO2dDQUN2QyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7NkJBQ2hCLENBQUMsQ0FBQzt5QkFDSjt3QkFDRCxNQUFNO2lCQUNUO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hELFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTt3QkFDZixJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTztxQkFDcEQsQ0FBQyxDQUFDO3FCQUNBO29CQUNILFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNyQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNoQixJQUFJLEVBQUUsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTzt3QkFDbkQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3FCQUNoQixDQUFDLENBQUM7aUJBQ0o7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksVUFBVSxHQUFHLFVBQVU7YUFDeEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDO2FBQ3ZDLE9BQU8sRUFBRSxDQUFDO1FBRWIsVUFBVSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUMxQixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ2hELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsT0FBTztvQkFDTCxHQUFHLEtBQUs7b0JBQ1I7d0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTzt3QkFDdkMsU0FBUyxFQUFFLHlCQUF5Qjt3QkFDcEMsVUFBVTt3QkFDVixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIsT0FBTzt3QkFDUCxLQUFLO3dCQUNMLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsTUFBTTt3QkFDdEMsU0FBUyxFQUFFLHdCQUF3Qjt3QkFDbkMsVUFBVTt3QkFDVixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIsT0FBTzt3QkFDUCxLQUFLO3dCQUNMLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsV0FBVzt3QkFDM0MsU0FBUyxFQUFFLHdCQUF3Qjt3QkFDbkMsVUFBVTt3QkFDVixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIsT0FBTzt3QkFDUCxLQUFLO3dCQUNMLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDekI7b0JBQ0Q7d0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsYUFBYTt3QkFDN0MsU0FBUyxFQUFFLDJCQUEyQjt3QkFDdEMsVUFBVTt3QkFDVixzQkFBc0I7d0JBQ3RCLDhCQUE4Qjt3QkFDOUIsT0FBTzt3QkFDUCxLQUFLO3dCQUNMLFdBQVcsRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDekI7aUJBQ0YsQ0FBQzthQUNIO1lBQ0QsT0FBTztnQkFDTCxHQUFHLEtBQUs7Z0JBQ1I7b0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsT0FBTztvQkFDdkMsVUFBVTtvQkFDVixzQkFBc0I7b0JBQ3RCLDhCQUE4QjtvQkFDOUIsT0FBTztvQkFDUCxLQUFLO29CQUNMLFNBQVMsRUFBRSx5QkFBeUI7aUJBQ3JDO2dCQUNEO29CQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU07b0JBQ3RDLFVBQVU7b0JBQ1Ysc0JBQXNCO29CQUN0Qiw4QkFBOEI7b0JBQzlCLE9BQU87b0JBQ1AsS0FBSztvQkFDTCxTQUFTLEVBQUUsd0JBQXdCO2lCQUNwQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxXQUFXO29CQUMzQyxVQUFVO29CQUNWLHNCQUFzQjtvQkFDdEIsOEJBQThCO29CQUM5QixPQUFPO29CQUNQLEtBQUs7b0JBQ0wsU0FBUyxFQUFFLHdCQUF3QjtpQkFDcEM7Z0JBQ0Q7b0JBQ0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsYUFBYTtvQkFDN0MsVUFBVTtvQkFDVixzQkFBc0I7b0JBQ3RCLDhCQUE4QjtvQkFDOUIsT0FBTztvQkFDUCxLQUFLO29CQUNMLFNBQVMsRUFBRSwyQkFBMkI7aUJBQ3ZDO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxJQUFXLGNBQWM7UUFDdkIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxNQUFpQjtRQUNsQyxNQUFNLElBQUksR0FBYztZQUN0QixRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDN0IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsbUJBQW1CLEVBQUUsRUFBRTtZQUN2QixzQkFBc0IsRUFBRSxFQUFFO1lBQzFCLGdCQUFnQixFQUFFLEVBQUU7U0FDckIsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUN4RSxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZO1lBQ3JDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWTtZQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhO1lBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjO1lBQ3ZCLENBQUMsQ0FBQyxjQUFjLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDN0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDekIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQjtZQUNuRCxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQjtZQUM1QixDQUFDLENBQUMsb0JBQW9CLENBQUM7UUFDekIsSUFBSSxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxzQkFBc0I7WUFDekQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxzQkFBc0I7WUFDL0IsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO1FBQzFCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsdUJBQXVCO1lBQzNELENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQ3BCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUN0RDtnQkFDRCxDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsR0FBRyxPQUFPO2dCQUNyRCxDQUFDLENBQUMsUUFBUTtZQUNaLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDYixJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QjtZQUMzRCxDQUFDLENBQUMsTUFBTSxDQUFDLHVCQUF1QjtZQUNoQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQWE7UUFDN0IsT0FBTyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUM5RCxDQUFDLENBQUMsSUFBSTtZQUNOLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDWixDQUFDOzs0RkE5VFUsc0JBQXNCLGNBaUJiLFlBQVk7NEVBakJyQixzQkFBc0IsV0FBdEIsc0JBQXNCLG1CQUZyQixNQUFNO3VGQUVQLHNCQUFzQjtjQUhsQyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQWtCYyxNQUFNO3VCQUFDLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSRVNUX0FVVEgsIFNUUkFURUdZX0FVVEggfSBmcm9tICcuLy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXV0aC5ndWFyZCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZSc7XG5pbXBvcnQgeyBSRVNUX0NPTkZJRywgVFlQRV9HUk9VUCB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlLm1vZGVsJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2UtYWRkL3Jlc3QtcmVzb3VyY2UtYWRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2UtbGlzdC9yZXN0LXJlc291cmNlLWxpc3QuY29tcG9uZW50JztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSZXN0QWRtaW5Db25maWdTZXJ2aWNlIHtcbiAgX3Jlc3RSZXNvdXJjZXM6IFJlc3RSZXNvdXJjZVtdO1xuICBjb21wb25lbnRzID0gW107XG5cbiAgX3Jlc3RBdXRoUGFyYW1zOiBSRVNUX0FVVEggPSB7XG4gICAgc3RyYXRlZ3k6IFNUUkFURUdZX0FVVEguRU1BSUwsXG4gICAgYmFzZUVuZHBvaW50OiAnJyxcbiAgICBsb2dvdXRFbmRQb2ludDogJycsXG4gICAgbG9naW5FbmRQb2ludDogJycsXG4gICAgdXNlckluZm9FbmRQb2ludDogJycsXG4gIH07XG5cbiAgZGVmYXVsdExhbmd1YWdlID0gW1xuICAgIHsgdGV4dDogJ0FuZ2xhaXMnLCB2YWx1ZTogJ2VuJyB9LFxuICAgIHsgdGV4dDogJ0ZyYW7Dp2FpcycsIHZhbHVlOiAnZnInIH0sXG4gIF07XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgncmVzdENvbmZpZycpIHByaXZhdGUgcmVzdENvbmZpZzogUkVTVF9DT05GSUcpIHtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzID0gcmVzdENvbmZpZy5yZXNvdXJjZXM7XG4gICAgdGhpcy5fcmVzdEF1dGhQYXJhbXMgPSB0aGlzLmNoZWNrVmFsdWVSZXN0QXV0aChcbiAgICAgIHJlc3RDb25maWcuYXV0aENvbmZpZyA/IHJlc3RDb25maWcuYXV0aENvbmZpZyA6IHt9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdFJlc291cmNlcygpOiBSZXN0UmVzb3VyY2VbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RSZXNvdXJjZXM7XG4gIH1cblxuICBwdWJsaWMgc2V0IHJlc3RSZXNvdXJjZXModjogUmVzdFJlc291cmNlW10pIHtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzID0gdjtcbiAgfVxuICBwdWJsaWMgZ2V0IHNpdGVOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5uYW1lO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcuYmFzZVVybDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ29vZ2xlTWFwQXBpS2V5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5nb29nbGVNYXBBcGlLZXlcbiAgICAgID8gdGhpcy5yZXN0Q29uZmlnLmdvb2dsZU1hcEFwaUtleVxuICAgICAgOiAnJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdFBhdGhGaWxlVHJhbnNsYXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGVcbiAgICAgID8gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZS5maWxlUGF0aFxuICAgICAgOiAnYXNzZXRzL2kxOG4vJztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdExhbmd1YWdlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlLmxhbmd1YWdlc1xuICAgICAgOiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTcGVjaWZpY1Jlc291cmNlKG5hbWVSZXNvdXJjZTogc3RyaW5nKTogUmVzdFJlc291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcy5maW5kKFxuICAgICAgKHJlc3QpID0+IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpID09IG5hbWVSZXNvdXJjZS50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgfVxuXG4gIGdlbmVyYXRlTWVudXMoKSB7XG4gICAgbGV0IGdyb3Vwc05hbWUgPSBbXTtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzLm1hcCgocmVzdCkgPT4ge1xuICAgICAgaWYgKHJlc3QubGlzdENvbmZpZy5ncm91cCkgZ3JvdXBzTmFtZS5wdXNoKHJlc3QubGlzdENvbmZpZy5ncm91cCk7XG4gICAgfSk7XG4gICAgY29uc3QgbWVudXNfZ3JvdXAgPSB7fTtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLmxpc3RDb25maWcuZ3JvdXApIHtcbiAgICAgICAgc3dpdGNoIChpdGVtLmxpc3RDb25maWcuZ3JvdXAudHlwZSkge1xuICAgICAgICAgIGNhc2UgVFlQRV9HUk9VUC5TRVBBUkFUT1I6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0pKVxuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0ucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0gPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lLFxuICAgICAgICAgICAgICAgICAgZ3JvdXA6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuTUVOVTpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkoXG4gICAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV1bMF1bJ2NoaWxkcmVuJ11cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXVswXS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdWzBdWydjaGlsZHJlbiddID0gW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5pY29uLFxuICAgICAgICAgICAgICAgICAgZXhwYW5kZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0pKVxuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSA9IFtdO1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgbGluazogaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSkpXG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgfSk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0gPSBbXTtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtZW51c190ZXN0ID0gW107XG4gICAgbGV0IHByaW9yaXRpZXMgPSBncm91cHNOYW1lXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAucmV2ZXJzZSgpO1xuXG4gICAgcHJpb3JpdGllcyA9IF8udW5pcUJ5KHByaW9yaXRpZXMsICduYW1lJyk7XG4gICAgcHJpb3JpdGllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBtZW51c190ZXN0LnB1c2goLi4ubWVudXNfZ3JvdXBbaXRlbS5uYW1lXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudXNfdGVzdDtcbiAgfVxuXG4gIGdlbmVyYXRlUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzLnJlZHVjZSgoY3VtdWwsIHJlc3QpID0+IHtcbiAgICAgIGlmIChyZXN0LmF1dGhSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1hZGQnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZWRpdC86aWQnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZGV0YWlsLzppZCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctYWRkJyxcbiAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWVkaXQvOmlkJyxcbiAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWRldGFpbC86aWQnLFxuICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgLy8gICB9LFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdEF1dGhQYXJhbXMoKTogUkVTVF9BVVRIIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdEF1dGhQYXJhbXM7XG4gIH1cblxuICBjaGVja1ZhbHVlUmVzdEF1dGgocGFyYW1zOiBSRVNUX0FVVEgpOiBSRVNUX0FVVEgge1xuICAgIGNvbnN0IHJlc3Q6IFJFU1RfQVVUSCA9IHtcbiAgICAgIHN0cmF0ZWd5OiBTVFJBVEVHWV9BVVRILkVNQUlMLFxuICAgICAgYmFzZUVuZHBvaW50OiAnJyxcbiAgICAgIGxvZ291dEVuZFBvaW50OiAnJyxcbiAgICAgIGxvZ2luRW5kUG9pbnQ6ICcnLFxuICAgICAgcHJvZmlsZU5hbWVFbmRQb2ludDogJycsXG4gICAgICBwcm9maWxlUGljdHVyZUVuZFBvaW50OiAnJyxcbiAgICAgIHVzZXJJbmZvRW5kUG9pbnQ6ICcnLFxuICAgIH07XG5cbiAgICByZXN0LnN0cmF0ZWd5ID0gcGFyYW1zLnN0cmF0ZWd5ID8gcGFyYW1zLnN0cmF0ZWd5IDogU1RSQVRFR1lfQVVUSC5FTUFJTDtcbiAgICByZXN0LmJhc2VFbmRwb2ludCA9IHBhcmFtcy5iYXNlRW5kcG9pbnRcbiAgICAgID8gcGFyYW1zLmJhc2VFbmRwb2ludFxuICAgICAgOiB0aGlzLnJlc3RCYXNlVXJsO1xuICAgIHJlc3QubG9naW5FbmRQb2ludCA9IHBhcmFtcy5sb2dpbkVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5sb2dpbkVuZFBvaW50XG4gICAgICA6ICcvYXV0aC9sb2dpbic7XG4gICAgcmVzdC5sb2dvdXRFbmRQb2ludCA9IHBhcmFtcy5sb2dvdXRFbmRQb2ludFxuICAgICAgPyBwYXJhbXMubG9nb3V0RW5kUG9pbnRcbiAgICAgIDogJy9hdXRoL2xvZ291dCc7XG4gICAgcmVzdC51c2VySW5mb0VuZFBvaW50ID0gcGFyYW1zLnVzZXJJbmZvRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLnVzZXJJbmZvRW5kUG9pbnRcbiAgICAgIDogJy91c2Vycy9tZSc7XG4gICAgcmVzdC5wcm9maWxlTmFtZUVuZFBvaW50ID0gcGFyYW1zLnByb2ZpbGVOYW1lRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLnByb2ZpbGVOYW1lRW5kUG9pbnRcbiAgICAgIDogJ29yaWdpbmFsLmZ1bGxfbmFtZSc7XG4gICAgcmVzdC5wcm9maWxlUGljdHVyZUVuZFBvaW50ID0gcGFyYW1zLnByb2ZpbGVQaWN0dXJlRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLnByb2ZpbGVQaWN0dXJlRW5kUG9pbnRcbiAgICAgIDogJ29yaWdpbmFsLmluZm9zLmxvZ28nO1xuICAgIHJlc3QucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4gPSBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW5cbiAgICAgID8gdGhpcy5jaGVja0lmUm91dGVFeGlzdChcbiAgICAgICAgICBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4uc3Vic3RyaW5nKDEpICsgJy1saXN0J1xuICAgICAgICApXG4gICAgICAgID8gJy9hZG1pbicgKyBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4gKyAnLWxpc3QnXG4gICAgICAgIDogJy9hZG1pbidcbiAgICAgIDogJy9hZG1pbic7XG4gICAgcmVzdC50b2tlbkxvY2F0aW9uSW5SZXNwb25zZSA9IHBhcmFtcy50b2tlbkxvY2F0aW9uSW5SZXNwb25zZVxuICAgICAgPyBwYXJhbXMudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2VcbiAgICAgIDogJ2RhdGEudG9rZW4nO1xuICAgIHJldHVybiByZXN0O1xuICB9XG5cbiAgY2hlY2tJZlJvdXRlRXhpc3Qocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmdlbmVyYXRlUm91dGVzKCkuZmluZCgoaXRlbSkgPT4gaXRlbS5wYXRoID09PSByb3V0ZSlcbiAgICAgID8gdHJ1ZVxuICAgICAgOiBmYWxzZTtcbiAgfVxufVxuIl19