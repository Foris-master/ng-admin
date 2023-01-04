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
        this.defaultLanguage = [
            { text: 'Anglais', value: 'en' },
            { text: 'Français', value: 'fr' },
        ];
        this._restResources = restConfig.resources;
        RestAdminConfigService._authParams = this.checkValueRestAuth(restConfig.authConfig ? restConfig.authConfig : {});
        console.log('RestAdminConfigService', RestAdminConfigService._authParams);
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
                                link: item.name.toLowerCase() + '-list',
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
                                link: 'admin/' + item.name.toLowerCase() + '-list',
                            });
                        }
                        break;
                    case TYPE_GROUP.MENU:
                        if (Array.isArray(menus_group[item.listConfig.group.name])) {
                            menus_group[item.listConfig.group.name][0].children.push({
                                title: item.name,
                                link: 'admin/' + item.name.toLowerCase() + '-list',
                                icon: item.icon,
                            });
                        }
                        else {
                            menus_group[item.listConfig.group.name] = [
                                {
                                    title: item.listConfig.group.name,
                                    icon: item.listConfig.group.icon,
                                    children: [
                                        {
                                            title: item.name,
                                            link: 'admin/' + item.name.toLowerCase() + '-list',
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
                                link: 'admin/' + item.name.toLowerCase() + '-list',
                            });
                        else {
                            menus_group[TYPE_GROUP.DEFAULT] = [];
                            menus_group[TYPE_GROUP.DEFAULT].push({
                                title: item.name,
                                link: 'admin/' + item.name.toLowerCase() + '-list',
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
                        link: 'admin/' + item.name.toLowerCase() + '-list',
                    });
                else {
                    menus_group[TYPE_GROUP.DEFAULT] = [];
                    menus_group[TYPE_GROUP.DEFAULT].push({
                        title: item.name,
                        link: 'admin/' + item.name.toLowerCase() + '-list',
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
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceListComponent,
                },
                {
                    path: rest.name.toLowerCase() + '-add',
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceAddComponent,
                },
                {
                    path: rest.name.toLowerCase() + '-edit/:id',
                    data: {
                        ngxPermissions: {
                            only: rest.permissions,
                        },
                    },
                    component: RestResourceAddComponent,
                },
                {
                    path: rest.name.toLowerCase() + '-detail/:id',
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
    checkValueRestAuth(params) {
        const rest = {
            strategy: STRATEGY_AUTH.EMAIL,
            baseEndpoint: '',
            logoutEndPoint: '',
            loginEndPoint: '',
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
            : 'auth/logout';
        rest.userInfoEndPoint = params.userInfoEndPoint
            ? params.userInfoEndPoint
            : '/users/me';
        rest.redirectRouteAfterLogin = params.redirectRouteAfterLogin
            ? params.redirectRouteAfterLogin
            : '/';
        rest.tokenLocationInResponse = params.tokenLocationInResponse
            ? params.tokenLocationInResponse
            : 'data.token';
        return rest;
    }
}
RestAdminConfigService._authParams = {
    strategy: STRATEGY_AUTH.EMAIL,
    baseEndpoint: '',
    logoutEndPoint: '',
    loginEndPoint: '',
    userInfoEndPoint: '',
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBYSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFdEQsT0FBTyxFQUFlLFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQy9GLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOztBQUk1QixNQUFNLE9BQU8sc0JBQXNCO0lBZ0JqQyxZQUEwQyxVQUF1QjtRQUF2QixlQUFVLEdBQVYsVUFBVSxDQUFhO1FBZGpFLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFTaEIsb0JBQWUsR0FBRztZQUNoQixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUNoQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtTQUNsQyxDQUFDO1FBR0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDO1FBQzNDLHNCQUFzQixDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQzFELFVBQVUsQ0FBQyxVQUFV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QyxhQUFhO1lBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsYUFBYTtZQUN0QixDQUFDLENBQUMsYUFBYSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWM7WUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjO1lBQ3ZCLENBQUMsQ0FBQyxhQUFhLENBQUM7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDN0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0I7WUFDekIsQ0FBQyxDQUFDLFdBQVcsQ0FBQztRQUNoQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsTUFBTSxDQUFDLHVCQUF1QjtZQUMzRCxDQUFDLENBQUMsTUFBTSxDQUFDLHVCQUF1QjtZQUNoQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ1IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLE1BQU0sQ0FBQyx1QkFBdUI7WUFDM0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUI7WUFDaEMsQ0FBQyxDQUFDLFlBQVksQ0FBQztRQUVqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O0FBbFJNLGtDQUFXLEdBQWM7SUFDOUIsUUFBUSxFQUFFLGFBQWEsQ0FBQyxLQUFLO0lBQzdCLFlBQVksRUFBRSxFQUFFO0lBQ2hCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGFBQWEsRUFBRSxFQUFFO0lBQ2pCLGdCQUFnQixFQUFFLEVBQUU7Q0FDckIsQ0FBQzttSEFUUyxzQkFBc0Isa0JBZ0JiLFlBQVk7dUhBaEJyQixzQkFBc0IsY0FGckIsTUFBTTsyRkFFUCxzQkFBc0I7a0JBSGxDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzswQkFpQmMsTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUkVTVF9BVVRILCBTVFJBVEVHWV9BVVRIIH0gZnJvbSAnLi8uLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2F1dGguZ3VhcmQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlIH0gZnJvbSAnLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UnO1xuaW1wb3J0IHsgUkVTVF9DT05GSUcsIFRZUEVfR1JPVVAgfSBmcm9tICcuLi9tb2RlbHMvcmVzdC1yZXNvdXJjZS5tb2RlbCc7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVzdFJlc291cmNlRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi4vcmVzdC1yZXNvdXJjZS1kZXRhaWwvcmVzdC1yZXNvdXJjZS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tICcuLi9yZXN0LXJlc291cmNlLWxpc3QvcmVzdC1yZXNvdXJjZS1saXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUmVzdEFkbWluQ29uZmlnU2VydmljZSB7XG4gIF9yZXN0UmVzb3VyY2VzOiBSZXN0UmVzb3VyY2VbXTtcbiAgY29tcG9uZW50cyA9IFtdO1xuICBzdGF0aWMgX2F1dGhQYXJhbXM6IFJFU1RfQVVUSCA9IHtcbiAgICBzdHJhdGVneTogU1RSQVRFR1lfQVVUSC5FTUFJTCxcbiAgICBiYXNlRW5kcG9pbnQ6ICcnLFxuICAgIGxvZ291dEVuZFBvaW50OiAnJyxcbiAgICBsb2dpbkVuZFBvaW50OiAnJyxcbiAgICB1c2VySW5mb0VuZFBvaW50OiAnJyxcbiAgfTtcblxuICBkZWZhdWx0TGFuZ3VhZ2UgPSBbXG4gICAgeyB0ZXh0OiAnQW5nbGFpcycsIHZhbHVlOiAnZW4nIH0sXG4gICAgeyB0ZXh0OiAnRnJhbsOnYWlzJywgdmFsdWU6ICdmcicgfSxcbiAgXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KCdyZXN0Q29uZmlnJykgcHJpdmF0ZSByZXN0Q29uZmlnOiBSRVNUX0NPTkZJRykge1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMgPSByZXN0Q29uZmlnLnJlc291cmNlcztcbiAgICBSZXN0QWRtaW5Db25maWdTZXJ2aWNlLl9hdXRoUGFyYW1zID0gdGhpcy5jaGVja1ZhbHVlUmVzdEF1dGgoXG4gICAgICByZXN0Q29uZmlnLmF1dGhDb25maWcgPyByZXN0Q29uZmlnLmF1dGhDb25maWcgOiB7fVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZygnUmVzdEFkbWluQ29uZmlnU2VydmljZScsIFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UuX2F1dGhQYXJhbXMpO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0UmVzb3VyY2VzKCk6IFJlc3RSZXNvdXJjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcztcbiAgfVxuXG4gIHB1YmxpYyBzZXQgcmVzdFJlc291cmNlcyh2OiBSZXN0UmVzb3VyY2VbXSkge1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMgPSB2O1xuICB9XG4gIHB1YmxpYyBnZXQgc2l0ZU5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLm5hbWU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RCYXNlVXJsKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVzdENvbmZpZy5iYXNlVXJsO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0UGF0aEZpbGVUcmFuc2xhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlLmZpbGVQYXRoXG4gICAgICA6ICdhc3NldHMvaTE4bi8nO1xuICB9XG5cbiAgcHVibGljIGdldCByZXN0TGFuZ3VhZ2UoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlXG4gICAgICA/IHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGUubGFuZ3VhZ2VzXG4gICAgICA6IHRoaXMuZGVmYXVsdExhbmd1YWdlO1xuICB9XG5cbiAgcHVibGljIGdldFNwZWNpZmljUmVzb3VyY2UobmFtZVJlc291cmNlOiBzdHJpbmcpOiBSZXN0UmVzb3VyY2Uge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzLmZpbmQoXG4gICAgICAocmVzdCkgPT4gcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgPT0gbmFtZVJlc291cmNlLnRvTG93ZXJDYXNlKClcbiAgICApO1xuICB9XG5cbiAgZ2VuZXJhdGVNZW51cygpIHtcbiAgICBsZXQgZ3JvdXBzTmFtZSA9IFtdO1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMubWFwKChyZXN0KSA9PiB7XG4gICAgICBpZiAocmVzdC5saXN0Q29uZmlnLmdyb3VwKSBncm91cHNOYW1lLnB1c2gocmVzdC5saXN0Q29uZmlnLmdyb3VwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVzX2dyb3VwID0ge307XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5saXN0Q29uZmlnLmdyb3VwKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS5saXN0Q29uZmlnLmdyb3VwLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuU0VQQVJBVE9SOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6IGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGdyb3VwOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuTUVOVTpcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSkpIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdWzBdLmNoaWxkcmVuLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgbGluazogJ2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXSA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWUsXG4gICAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAuaWNvbixcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICdhZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiAnYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXSA9IFtdO1xuICAgICAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgbGluazogJ2FkbWluLycgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgIGxpbms6ICdhZG1pbi8nICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWxpc3QnLFxuICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdID0gW107XG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBsaW5rOiAnYWRtaW4vJyArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIGxldCBtZW51c190ZXN0ID0gW107XG4gICAgbGV0IHByaW9yaXRpZXMgPSBncm91cHNOYW1lXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAucmV2ZXJzZSgpO1xuXG4gICAgcHJpb3JpdGllcyA9IF8udW5pcUJ5KHByaW9yaXRpZXMsICduYW1lJyk7XG4gICAgcHJpb3JpdGllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBtZW51c190ZXN0LnB1c2goLi4ubWVudXNfZ3JvdXBbaXRlbS5uYW1lXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudXNfdGVzdDtcbiAgfVxuXG4gIGdlbmVyYXRlUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzLnJlZHVjZSgoY3VtdWwsIHJlc3QpID0+IHtcbiAgICAgIGlmIChyZXN0LmF1dGhSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1saXN0JyxcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgJy1hZGQnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZWRpdC86aWQnLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctZGV0YWlsLzppZCcsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctbGlzdCcsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArICctYWRkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWVkaXQvOmlkJyxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyAnLWRldGFpbC86aWQnLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIGNoZWNrVmFsdWVSZXN0QXV0aChwYXJhbXM6IFJFU1RfQVVUSCk6IFJFU1RfQVVUSCB7XG4gICAgY29uc3QgcmVzdDogUkVTVF9BVVRIID0ge1xuICAgICAgc3RyYXRlZ3k6IFNUUkFURUdZX0FVVEguRU1BSUwsXG4gICAgICBiYXNlRW5kcG9pbnQ6ICcnLFxuICAgICAgbG9nb3V0RW5kUG9pbnQ6ICcnLFxuICAgICAgbG9naW5FbmRQb2ludDogJycsXG4gICAgICB1c2VySW5mb0VuZFBvaW50OiAnJyxcbiAgICB9O1xuICAgIHJlc3Quc3RyYXRlZ3kgPSBwYXJhbXMuc3RyYXRlZ3kgPyBwYXJhbXMuc3RyYXRlZ3kgOiBTVFJBVEVHWV9BVVRILkVNQUlMO1xuICAgIHJlc3QuYmFzZUVuZHBvaW50ID0gcGFyYW1zLmJhc2VFbmRwb2ludFxuICAgICAgPyBwYXJhbXMuYmFzZUVuZHBvaW50XG4gICAgICA6IHRoaXMucmVzdEJhc2VVcmw7XG4gICAgcmVzdC5sb2dpbkVuZFBvaW50ID0gcGFyYW1zLmxvZ2luRW5kUG9pbnRcbiAgICAgID8gcGFyYW1zLmxvZ2luRW5kUG9pbnRcbiAgICAgIDogJy9hdXRoL2xvZ2luJztcbiAgICByZXN0LmxvZ291dEVuZFBvaW50ID0gcGFyYW1zLmxvZ291dEVuZFBvaW50XG4gICAgICA/IHBhcmFtcy5sb2dvdXRFbmRQb2ludFxuICAgICAgOiAnYXV0aC9sb2dvdXQnO1xuICAgIHJlc3QudXNlckluZm9FbmRQb2ludCA9IHBhcmFtcy51c2VySW5mb0VuZFBvaW50XG4gICAgICA/IHBhcmFtcy51c2VySW5mb0VuZFBvaW50XG4gICAgICA6ICcvdXNlcnMvbWUnO1xuICAgIHJlc3QucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW4gPSBwYXJhbXMucmVkaXJlY3RSb3V0ZUFmdGVyTG9naW5cbiAgICAgID8gcGFyYW1zLnJlZGlyZWN0Um91dGVBZnRlckxvZ2luXG4gICAgICA6ICcvJztcbiAgICByZXN0LnRva2VuTG9jYXRpb25JblJlc3BvbnNlID0gcGFyYW1zLnRva2VuTG9jYXRpb25JblJlc3BvbnNlXG4gICAgICA/IHBhcmFtcy50b2tlbkxvY2F0aW9uSW5SZXNwb25zZVxuICAgICAgOiAnZGF0YS50b2tlbic7XG5cbiAgICByZXR1cm4gcmVzdDtcbiAgfVxufVxuIl19