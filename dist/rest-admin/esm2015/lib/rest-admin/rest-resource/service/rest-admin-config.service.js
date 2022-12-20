import { Inject, Injectable } from "@angular/core";
import { AuthGuard } from "../../../utils/auth.guard";
import { TYPE_GROUP, } from "../models/rest-resource.model";
import { RestResourceAddComponent } from "../rest-resource-add/rest-resource-add.component";
import { RestResourceDetailComponent } from "../rest-resource-detail/rest-resource-detail.component";
import { RestResourceListComponent } from "../rest-resource-list/rest-resource-list.component";
import * as _ from "lodash";
import * as i0 from "@angular/core";
export class RestAdminConfigService {
    constructor(restConfig) {
        this.restConfig = restConfig;
        this.components = [];
        this.defaultLanguage = [
            { text: "Anglais", value: "en" },
            { text: "Français", value: "fr" },
        ];
        this._restResources = restConfig.resources;
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
            : "assets/i18n/";
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
                        }
                        else {
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
            }
            else {
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
RestAdminConfigService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, deps: [{ token: "restConfig" }], target: i0.ɵɵFactoryTarget.Injectable });
RestAdminConfigService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: RestAdminConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Inject,
                    args: ["restConfig"]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1hZG1pbi1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9yZXN0LWFkbWluL3Jlc3QtcmVzb3VyY2Uvc2VydmljZS9yZXN0LWFkbWluLWNvbmZpZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV0RCxPQUFPLEVBRUwsVUFBVSxHQUNYLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sd0RBQXdELENBQUM7QUFDckcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDL0YsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7O0FBSTVCLE1BQU0sT0FBTyxzQkFBc0I7SUFRakMsWUFBMEMsVUFBdUI7UUFBdkIsZUFBVSxHQUFWLFVBQVUsQ0FBYTtRQU5qRSxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLG9CQUFlLEdBQUc7WUFDaEIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7WUFDaEMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDbEMsQ0FBQztRQUVBLElBQUksQ0FBQyxjQUFjLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM3QixDQUFDO0lBRUQsSUFBVyxhQUFhLENBQUMsQ0FBaUI7UUFDeEMsSUFBSSxDQUFD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b0JBQ3RELElBQUksRUFBRTt3QkFDSixjQUFjLEVBQUU7NEJBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO3lCQUN2QjtxQkFDRjtvQkFDRCxTQUFTLEVBQUUsd0JBQXdCO2lCQUNwQztnQkFDRDtvQkFDRSxJQUFJLEVBQUUsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsYUFBYTtvQkFDeEQsSUFBSSxFQUFFO3dCQUNKLGNBQWMsRUFBRTs0QkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7eUJBQ3ZCO3FCQUNGO29CQUNELFNBQVMsRUFBRSwyQkFBMkI7aUJBQ3ZDO2FBQ0YsQ0FBQztRQUNKLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNULENBQUM7O21IQXpPVSxzQkFBc0Isa0JBUWIsWUFBWTt1SEFSckIsc0JBQXNCLGNBRnJCLE1BQU07MkZBRVAsc0JBQXNCO2tCQUhsQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBU2MsTUFBTTsyQkFBQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9hdXRoLmd1YXJkXCI7XG5pbXBvcnQgeyBSZXN0UmVzb3VyY2UgfSBmcm9tIFwiLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2VcIjtcbmltcG9ydCB7XG4gIFJFU1RfQ09ORklHLFxuICBUWVBFX0dST1VQLFxufSBmcm9tIFwiLi4vbW9kZWxzL3Jlc3QtcmVzb3VyY2UubW9kZWxcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUFkZENvbXBvbmVudCB9IGZyb20gXCIuLi9yZXN0LXJlc291cmNlLWFkZC9yZXN0LXJlc291cmNlLWFkZC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuLi9yZXN0LXJlc291cmNlLWRldGFpbC9yZXN0LXJlc291cmNlLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi4vcmVzdC1yZXNvdXJjZS1saXN0L3Jlc3QtcmVzb3VyY2UtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBcInJvb3RcIixcbn0pXG5leHBvcnQgY2xhc3MgUmVzdEFkbWluQ29uZmlnU2VydmljZSB7XG4gIF9yZXN0UmVzb3VyY2VzOiBSZXN0UmVzb3VyY2VbXTtcbiAgY29tcG9uZW50cyA9IFtdO1xuXG4gIGRlZmF1bHRMYW5ndWFnZSA9IFtcbiAgICB7IHRleHQ6IFwiQW5nbGFpc1wiLCB2YWx1ZTogXCJlblwiIH0sXG4gICAgeyB0ZXh0OiBcIkZyYW7Dp2Fpc1wiLCB2YWx1ZTogXCJmclwiIH0sXG4gIF07XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoXCJyZXN0Q29uZmlnXCIpIHByaXZhdGUgcmVzdENvbmZpZzogUkVTVF9DT05GSUcpIHtcbiAgICB0aGlzLl9yZXN0UmVzb3VyY2VzID0gcmVzdENvbmZpZy5yZXNvdXJjZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RSZXNvdXJjZXMoKTogUmVzdFJlc291cmNlW10ge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzO1xuICB9XG5cbiAgcHVibGljIHNldCByZXN0UmVzb3VyY2VzKHY6IFJlc3RSZXNvdXJjZVtdKSB7XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcyA9IHY7XG4gIH1cbiAgcHVibGljIGdldCBzaXRlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcubmFtZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLmJhc2VVcmw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHJlc3RQYXRoRmlsZVRyYW5zbGF0ZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlXG4gICAgICA/IHRoaXMucmVzdENvbmZpZy50cmFuc2xhdGUuZmlsZVBhdGhcbiAgICAgIDogXCJhc3NldHMvaTE4bi9cIjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgcmVzdExhbmd1YWdlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yZXN0Q29uZmlnLnRyYW5zbGF0ZVxuICAgICAgPyB0aGlzLnJlc3RDb25maWcudHJhbnNsYXRlLmxhbmd1YWdlc1xuICAgICAgOiB0aGlzLmRlZmF1bHRMYW5ndWFnZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTcGVjaWZpY1Jlc291cmNlKG5hbWVSZXNvdXJjZTogc3RyaW5nKTogUmVzdFJlc291cmNlIHtcbiAgICByZXR1cm4gdGhpcy5fcmVzdFJlc291cmNlcy5maW5kKFxuICAgICAgKHJlc3QpID0+IHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpID09IG5hbWVSZXNvdXJjZS50b0xvd2VyQ2FzZSgpXG4gICAgKTtcbiAgfVxuICBcbiAgZ2VuZXJhdGVNZW51cygpIHtcbiAgICBsZXQgZ3JvdXBzTmFtZSA9IFtdO1xuICAgIHRoaXMuX3Jlc3RSZXNvdXJjZXMubWFwKChyZXN0KSA9PiB7XG4gICAgICBpZiAocmVzdC5saXN0Q29uZmlnLmdyb3VwKSBncm91cHNOYW1lLnB1c2gocmVzdC5saXN0Q29uZmlnLmdyb3VwKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1lbnVzX2dyb3VwID0ge307XG4gICAgdGhpcy5fcmVzdFJlc291cmNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5saXN0Q29uZmlnLmdyb3VwKSB7XG4gICAgICAgIHN3aXRjaCAoaXRlbS5saXN0Q29uZmlnLmdyb3VwLnR5cGUpIHtcbiAgICAgICAgICBjYXNlIFRZUEVfR1JPVVAuU0VQQVJBVE9SOlxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdLnB1c2goe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiYWRtaW4vXCIgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArIFwiLWxpc3RcIixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGdyb3VwOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiBcImFkbWluL1wiICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1saXN0XCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBUWVBFX0dST1VQLk1FTlU6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZV0pKSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW2l0ZW0ubGlzdENvbmZpZy5ncm91cC5uYW1lXVswXS5jaGlsZHJlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiYWRtaW4vXCIgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArIFwiLWxpc3RcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbaXRlbS5saXN0Q29uZmlnLmdyb3VwLm5hbWVdID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLmxpc3RDb25maWcuZ3JvdXAubmFtZSxcbiAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0ubGlzdENvbmZpZy5ncm91cC5pY29uLFxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgbGluazogXCJhZG1pbi9cIiArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgXCItbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdKSlcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGljb246IGl0ZW0uaWNvbixcbiAgICAgICAgICAgICAgICBsaW5rOiBcImFkbWluL1wiICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1saXN0XCIsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0gPSBbXTtcbiAgICAgICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIGxpbms6IFwiYWRtaW4vXCIgKyBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSArIFwiLWxpc3RcIixcbiAgICAgICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0pKVxuICAgICAgICAgIG1lbnVzX2dyb3VwW1RZUEVfR1JPVVAuREVGQVVMVF0ucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgaWNvbjogaXRlbS5pY29uLFxuICAgICAgICAgICAgbGluazogXCJhZG1pbi9cIiArIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpICsgXCItbGlzdFwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBtZW51c19ncm91cFtUWVBFX0dST1VQLkRFRkFVTFRdID0gW107XG4gICAgICAgICAgbWVudXNfZ3JvdXBbVFlQRV9HUk9VUC5ERUZBVUxUXS5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXG4gICAgICAgICAgICBsaW5rOiBcImFkbWluL1wiICsgaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1saXN0XCIsXG4gICAgICAgICAgICBpY29uOiBpdGVtLmljb24sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgbWVudXNfdGVzdCA9IFtdO1xuICAgIGxldCBwcmlvcml0aWVzID0gZ3JvdXBzTmFtZVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxuICAgICAgLnJldmVyc2UoKTtcblxuICAgIHByaW9yaXRpZXMgPSBfLnVuaXFCeShwcmlvcml0aWVzLCBcIm5hbWVcIik7XG4gICAgcHJpb3JpdGllcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBtZW51c190ZXN0LnB1c2goLi4ubWVudXNfZ3JvdXBbaXRlbS5uYW1lXSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudXNfdGVzdDtcbiAgfVxuXG4gIGdlbmVyYXRlUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXN0UmVzb3VyY2VzLnJlZHVjZSgoY3VtdWwsIHJlc3QpID0+IHtcbiAgICAgIGlmIChyZXN0LmF1dGhSZXF1aXJlZCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIC4uLmN1bXVsLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiYWRtaW4vXCIgKyByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArIFwiLWxpc3RcIixcbiAgICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlTGlzdENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBhdGg6IFwiYWRtaW4vXCIgKyByZXN0Lm5hbWUudG9Mb3dlckNhc2UoKSArIFwiLWFkZFwiLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcImFkbWluL1wiICsgcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1lZGl0LzppZFwiLFxuICAgICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VBZGRDb21wb25lbnQsXG4gICAgICAgICAgICAvLyBkYXRhOiB7XG4gICAgICAgICAgICAvLyAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAvLyAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhHdWFyZF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYXRoOiBcImFkbWluL1wiICsgcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1kZXRhaWwvOmlkXCIsXG4gICAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZURldGFpbENvbXBvbmVudCxcbiAgICAgICAgICAgIC8vIGRhdGE6IHtcbiAgICAgICAgICAgIC8vICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIGNhbkFjdGl2YXRlOiBbQXV0aEd1YXJkXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4uY3VtdWwsXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFkbWluL1wiICsgcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1saXN0XCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbmd4UGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgb25seTogcmVzdC5wZXJtaXNzaW9ucyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjb21wb25lbnQ6IFJlc3RSZXNvdXJjZUxpc3RDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiBcImFkbWluL1wiICsgcmVzdC5uYW1lLnRvTG93ZXJDYXNlKCkgKyBcIi1hZGRcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJhZG1pbi9cIiArIHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgXCItZWRpdC86aWRcIixcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBuZ3hQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgICBvbmx5OiByZXN0LnBlcm1pc3Npb25zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbXBvbmVudDogUmVzdFJlc291cmNlQWRkQ29tcG9uZW50LFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGF0aDogXCJhZG1pbi9cIiArIHJlc3QubmFtZS50b0xvd2VyQ2FzZSgpICsgXCItZGV0YWlsLzppZFwiLFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIG5neFBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgIG9ubHk6IHJlc3QucGVybWlzc2lvbnMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY29tcG9uZW50OiBSZXN0UmVzb3VyY2VEZXRhaWxDb21wb25lbnQsXG4gICAgICAgIH0sXG4gICAgICBdO1xuICAgIH0sIFtdKTtcbiAgfVxufVxuIl19