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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUs1QixNQUFNLE9BQU8sc0JBQXNCO0lBaUJqQyxZQUEwQyxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBZmpFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBYztZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLEtBQUs7WUFDN0IsWUFBWSxFQUFFLEVBQUU7WUFDaEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsYUFBYSxFQUFFLEVBQUU7WUFDakIsZ0JBQWdCLEVBQUUsRUFBRTtTQUNyQixDQUFDO1FBRUYsb0JBQWUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVB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QU07MkJBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJFU1RfQVVUSCwgU1RSQVRFR1lfQVVUSCB9IGZyb20gJy4vLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICcuLi8uLi8uLi91dGlscy9hdXRoLmd1YXJkJztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZSB9IGZyb20gJy4uL21vZGVscy9yZXN0LXJlc291cmNlJztcbmltcG9ydCB7IFJFU1RfQ09ORklHLCBUWVBFX0dST1VQIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWwnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlQWRkQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS1hZGQvcmVzdC1yZXNvdXJjZS1hZGQuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCB9IGZyb20gJy4uL3Jlc3QtcmVzb3VyY2UtZGV0YWlsL3Jlc3QtcmVzb3VyY2UtZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnQnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdEFkbWluQ29uZmlnU2VydmljZSB7XG4gIF9yZXN0UmVzb3VyY2VzOiBSZXN0UmVzb3VyY2VbXTtcbiAgY29tcG9uZW50cyA9IFtdO1xuXG4gIF9yZXN0QXV0aFBhcmFtczogUkVTVF9BVVRIID0ge1xuICAgIHN0cmF0ZWd5OiBTVFJBVEVHWV9BVVRILkVNQUlMLFxuICAgIGJhc2VFbmRwb2ludDogJycsXG4gICAgbG9nb3V0RW5kUG9pbnQ6ICcnLFxuICAgIGxvZ2luRW5kUG9pbnQ6ICcnLFxuICAgIHVzZXJJbmZvRW5kUG9pbnQ6ICcnLFxuICB9O1xuXG4gIGRlZmF1bHRMYW5ndWFnZSA9IFtcbiAgICB7IHRleHQ6ICdBbmdsYWlzJywgdmFsdWU6ICdlbicgfSxcbiAgICB7IHRleHQ6ICdGcmFuw6dhaXMnLCB2YWx1ZTogJ2ZyJyB9LFxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ3Jlc3RDb25maWcnKSBwcml2YXRlIHJlc3RDb25maWc6IFJFU1RfQ09ORklHKSB7XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcyA9IHJlc3RDb25maWcucmVzb3VyY2VzO1xuICAgIHRoaXMuX3Jlc3RBdXRoUGFyYW1zID0gdGhpcy5jaGVja1ZhbHVlUmVzdEF1dGgoXG4gICAgICByZXN0Q29uZmlnLmF1dGhDb25maWcgPyByZXN0Q29uZmlnLmF1dGhDb25maWcgOiB7fVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RSZXNvdXJjZXMoKTogUmVzdFJlc291cmNlW10ge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzO1xuICB9XG5cbiAgcHVibGljIHNldCByZXN0UmVzb3VyY2VzKHY6IFJlc3RSZXNvdXJjZVtdKSB7XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcyA9IHY7XG4gIH1cbiAgcHVibGljIGdldCBzaXRlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLmJhc2VVcmw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGdvb2dsZU1hcEFwaUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcuZ29vZ2xlTWFwQXBpS2V5XG4gICAgICA/IHRoaXMucmVzdENvbmZpZy5nb29nbGVNYXBBcGlLZXlcbiAgICAgIDogJyc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RQYXRoRmlsZVRyYW5zbGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlXG4gICAgICA/IHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGUuZmlsZVBhdGhcbiAgICAgIDogJ2Fzc2V0cy9pMThuLyc7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RMYW5ndWFnZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGVcbiAgICAgID8gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZS5sYW5ndWFnZXNcbiAgICAgIDogdGhpcy5kZWZhdWx0TGFuZ3VhZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0U3BlY2lmaWNSZXNvdXJjZShuYW1lUmVzb3VyY2U6IHN0cmluZyk6IFJlc3RSZXNvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RSZXNvdXJjZXMuZmluZChcbiAgICAgIChyZXN0KSA9PiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSA9PSBuYW1lUmVzb3VyY2UudG9Mb3dlckNhc2UoKVxuICAgICk7XG4gIH1cblxuICBnZW5lcmF0ZU1lbnVzKCkge1xuICAgIGxldCBncm91cHNOYW1lID0gW107XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcy5tYXAoKHJlc3QpID0+IHtcbiAgICAgIGlmIChyZXN0Lmxpc3RDb25maWcuZ3JvdXApIGdyb3Vwc05hbWUucHVzaChyZXN0Lmxpc3RDb25maWcuZ3JvdXApO1xuICAgIH0pO1xuICAgIGNvbnN0IG1lbnVzX2dyb3VwID0ge307XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5saXN0Q29uZmlnLmdyb3VwKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS5saXN0Q29uZmlnLmdyb3VwLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuU0VQQVJBVE9SOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6ICcvYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGdyb3VwOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBUWVBFX0dST1VQLk1FTlU6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0pKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KFxuICAgICAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdWzBdWydjaGlsZHJlbiddXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV1bMF0uY2hpbGRyZW4ucHVzaCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXVswXVsnY2hpbGRyZW4nXSA9IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAuaWNvbixcbiAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0gPSBbXTtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0pKVxuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgbGluazogJy9hZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdID0gW107XG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBsaW5rOiAnL2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWVudXNfdGVzdCA9IFtdO1xuICAgIGxldCBwcmlvcml0aWVzID0gZ3JvdXBzTmFtZVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxuICAgICAgLnJldmVyc2UoKTtcblxuICAgIHByaW9yaXRpZXMgPSBfLnVuaXFCeShwcmlvcml0aWVzLCAnbmFtZScpO1xuICAgIHByaW9yaXRpZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbWVudXNfdGVzdC5wdXNoKC4uLm1lbnVzX2dyb3VwW2l0ZW0ubmFtZV0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1lbnVzX3Rlc3Q7XG4gIH1cblxuICBnZW5lcmF0ZVJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcy5yZWR1Y2UoKGN1bXVsLCByZXN0KSA9PiB7XG4gICAgICBpZiAocmVzdC5hdXRoUmVxdWlyZWQpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAuLi5jdW11bCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctYWRkJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWVkaXQvOmlkJyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgY2FuQWN0aXZhdGU6IFtBdXRoR3VhcmRdLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWRldGFpbC86aWQnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXG4gICAgICAgIC4uLmN1bXVsLFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgLy8gICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgLy8gICB9LFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VMaXN0Q29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWFkZCcsXG4gICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1lZGl0LzppZCcsXG4gICAgICAgICAgLy8gZGF0YToge1xuICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1kZXRhaWwvOmlkJyxcbiAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgLy8gICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgXTtcbiAgICB9LCBbXSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RBdXRoUGFyYW1zKCk6IFJFU1RfQVVUSCB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc3RBdXRoUGFyYW1zO1xuICB9XG5cbiAgY2hlY2tWYWx1ZVJlc3RBdXRoKHBhcmFtczogUkVTVF9BVVRIKTogUkVTVF9BVVRIIHtcbiAgICBjb25zdCByZXN0OiBSRVNUX0FVVEggPSB7XG4gICAgICBzdHJhdGVneTogU1RSQVRFR1lfQVVUSC5FTUFJTCxcbiAgICAgIGJhc2VFbmRwb2ludDogJycsXG4gICAgICBsb2dvdXRFbmRQb2ludDogJycsXG4gICAgICBsb2dpbkVuZFBvaW50OiAnJyxcbiAgICAgIHByb2ZpbGVOYW1lRW5kUG9pbnQ6ICcnLFxuICAgICAgcHJvZmlsZVBpY3R1cmVFbmRQb2ludDogJycsXG4gICAgICB1c2VySW5mb0VuZFBvaW50OiAnJyxcbiAgICB9O1xuXG4gICAgcmVzdC5zdHJhdGVneSA9IHBhcmFtcy5zdHJhdGVneSA/IHBhcmFtcy5zdHJhdGVneSA6IFNUUkFURUdZX0FVVEguRU1BSUw7XG4gICAgcmVzdC5iYXNlRW5kcG9pbnQgPSBwYXJhbXMuYmFzZUVuZHBvaW50XG4gICAgICA/IHBhcmFtcy5iYXNlRW5kcG9pbnRcbiAgICAgIDogdGhpcy5yZXN0QmFzZVVybDtcbiAgICByZXN0LmxvZ2luRW5kUG9pbnQgPSBwYXJhbXMubG9naW5FbmRQb2ludFxuICAgICAgPyBwYXJhbXMubG9naW5FbmRQb2ludFxuICAgICAgOiAnL2F1dGgvbG9naW4nO1xuICAgIHJlc3QubG9nb3V0RW5kUG9pbnQgPSBwYXJhbXMubG9nb3V0RW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLmxvZ291dEVuZFBvaW50XG4gICAgICA6ICcvYXV0aC9sb2dvdXQnO1xuICAgIHJlc3QudXNlckluZm9FbmRQb2ludCA9IHBhcmFtcy51c2VySW5mb0VuZFBvaW50XG4gICAgICA/IHBhcmFtcy51c2VySW5mb0VuZFBvaW50XG4gICAgICA6ICcvdXNlcnMvbWUnO1xuICAgIHJlc3QucHJvZmlsZU5hbWVFbmRQb2ludCA9IHBhcmFtcy5wcm9maWxlTmFtZUVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5wcm9maWxlTmFtZUVuZFBvaW50XG4gICAgICA6ICdvcmlnaW5hbC5mdWxsX25hbWUnO1xuICAgIHJlc3QucHJvZmlsZVBpY3R1cmVFbmRQb2ludCA9IHBhcmFtcy5wcm9maWxlUGljdHVyZUVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5wcm9maWxlUGljdHVyZUVuZFBvaW50XG4gICAgICA6ICdvcmlnaW5hbC5pbmZvcy5sb2dvJztcbiAgICByZXN0LnJlZGlyZWN0Um91dGVBZnRlckxvZ2luID0gcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luXG4gICAgICA/IHRoaXMuY2hlY2tJZlJvdXRlRXhpc3QoXG4gICAgICAgICAgcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luLnN1YnN0cmluZygxKSArICctbGlzdCdcbiAgICAgICAgKVxuICAgICAgICA/ICcvYWRtaW4nICsgcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luICsgJy1saXN0J1xuICAgICAgICA6ICcvYWRtaW4nXG4gICAgICA6ICcvYWRtaW4nO1xuICAgIHJlc3QudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2UgPSBwYXJhbXMudG9rZW5Mb2NhdGlvbkluUmVzcG9uc2VcbiAgICAgID8gcGFyYW1zLnRva2VuTG9jYXRpb25JblJlc3BvbnNlXG4gICAgICA6ICdkYXRhLnRva2VuJztcbiAgICByZXR1cm4gcmVzdDtcbiAgfVxuXG4gIGNoZWNrSWZSb3V0ZUV4aXN0KHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVJvdXRlcygpLmZpbmQoKGl0ZW0pID0+IGl0ZW0ucGF0aCA9PT0gcm91dGUpXG4gICAgICA/IHRydWVcbiAgICAgIDogZmFsc2U7XG4gIH1cbn1cbiJdfQ==