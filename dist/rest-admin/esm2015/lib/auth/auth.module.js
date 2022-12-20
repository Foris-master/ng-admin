import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NbAuthModule, NbAuthSimpleToken, NbPasswordAuthStrategy, } from "@nebular/auth";
import { NbAlertModule, NbInputModule, NbButtonModule, NbCheckboxModule, } from "@nebular/theme";
import { LoginComponent } from "./login/login.component";
import { TranslateModule } from "@ngx-translate/core";
import * as i0 from "@angular/core";
import * as i1 from "../rest-admin/rest-resource/service/rest-admin-config.service";
import * as i2 from "@nebular/auth";
export class AuthModule {
    constructor(restAdminConfigService) {
        this.restAdminConfigService = restAdminConfigService;
    }
}
AuthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, deps: [{ token: i1.RestAdminConfigService }], target: i0.ɵɵFactoryTarget.NgModule });
AuthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, declarations: [LoginComponent], imports: [CommonModule,
        TranslateModule,
        AuthRoutingModule,
        FormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        HttpClientModule, i2.NbAuthModule] });
AuthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, imports: [[
            CommonModule,
            TranslateModule,
            AuthRoutingModule,
            FormsModule,
            RouterModule,
            NbAlertModule,
            NbInputModule,
            NbButtonModule,
            NbCheckboxModule,
            HttpClientModule,
            NbAuthModule.forRoot({
                strategies: [
                    NbPasswordAuthStrategy.setup({
                        name: "email",
                        baseEndpoint: "https://api.marylis.com/api",
                        login: {
                            method: "post",
                            endpoint: "/auth/signin",
                            redirect: {
                                success: "/",
                                failure: null,
                            },
                        },
                        token: {
                            class: NbAuthSimpleToken,
                            key: "data.token",
                        },
                    }),
                ],
                forms: {
                    login: {
                        redirectDelay: 500,
                        strategy: "email",
                        showMessages: {
                            success: true,
                            error: true,
                        },
                    },
                },
            }),
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: AuthModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [LoginComponent],
                    imports: [
                        CommonModule,
                        TranslateModule,
                        AuthRoutingModule,
                        FormsModule,
                        RouterModule,
                        NbAlertModule,
                        NbInputModule,
                        NbButtonModule,
                        NbCheckboxModule,
                        HttpClientModule,
                        NbAuthModule.forRoot({
                            strategies: [
                                NbPasswordAuthStrategy.setup({
                                    name: "email",
                                    baseEndpoint: "https://api.marylis.com/api",
                                    login: {
                                        method: "post",
                                        endpoint: "/auth/signin",
                                        redirect: {
                                            success: "/",
                                            failure: null,
                                        },
                                    },
                                    token: {
                                        class: NbAuthSimpleToken,
                                        key: "data.token",
                                    },
                                }),
                            ],
                            forms: {
                                login: {
                                    redirectDelay: 500,
                                    strategy: "email",
                                    showMessages: {
                                        success: true,
                                        error: true,
                                    },
                                },
                            },
                        }),
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i1.RestAdminConfigService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQWMsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLHNCQUFzQixHQUN2QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsYUFBYSxFQUNiLGFBQWEsRUFDYixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBbUIsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7QUFtRHZFLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQXFCLHNCQUE4QztRQUE5QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO0lBRW5FLENBQUM7O3VHQUhVLFVBQVU7d0dBQVYsVUFBVSxpQkE5Q04sY0FBYyxhQUUzQixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixhQUFhO1FBQ2IsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixnQkFBZ0I7d0dBbUNQLFVBQVUsWUE3Q1o7WUFDUCxZQUFZO1lBQ1osZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixXQUFXO1lBQ1gsWUFBWTtZQUNaLGFBQWE7WUFDYixhQUFhO1lBQ2IsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsWUFBWSxDQUFDLE9BQU8sQ0FBQztnQkFDbkIsVUFBVSxFQUFFO29CQUNWLHNCQUFzQixDQUFDLEtBQUssQ0FBQzt3QkFDM0IsSUFBSSxFQUFFLE9BQU87d0JBRWIsWUFBWSxFQUFFLDZCQUE2Qjt3QkFDM0MsS0FBSyxFQUFFOzRCQUNMLE1BQU0sRUFBRSxNQUFNOzRCQUNkLFFBQVEsRUFBRSxjQUFjOzRCQUN4QixRQUFRLEVBQUU7Z0NBQ1IsT0FBTyxFQUFFLEdBQUc7Z0NBQ1osT0FBTyxFQUFFLElBQUk7NkJBQ2Q7eUJBQ0Y7d0JBRUQsS0FBSyxFQUFFOzRCQUNMLEtBQUssRUFBRSxpQkFBaUI7NEJBQ3hCLEdBQUcsRUFBRSxZQUFZO3lCQUNsQjtxQkFDRixDQUFDO2lCQUNIO2dCQUNELEtBQUssRUFBRTtvQkFDTCxLQUFLLEVBQUU7d0JBQ0wsYUFBYSxFQUFFLEdBQUc7d0JBQ2xCLFFBQVEsRUFBRSxPQUFPO3dCQUNqQixZQUFZLEVBQUU7NEJBQ1osT0FBTyxFQUFFLElBQUk7NEJBQ2IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1NBQ0g7MkZBRVUsVUFBVTtrQkEvQ3RCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO29CQUM5QixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsV0FBVzt3QkFDWCxZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsYUFBYTt3QkFDYixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsZ0JBQWdCO3dCQUNoQixZQUFZLENBQUMsT0FBTyxDQUFDOzRCQUNuQixVQUFVLEVBQUU7Z0NBQ1Ysc0JBQXNCLENBQUMsS0FBSyxDQUFDO29DQUMzQixJQUFJLEVBQUUsT0FBTztvQ0FFYixZQUFZLEVBQUUsNkJBQTZCO29DQUMzQyxLQUFLLEVBQUU7d0NBQ0wsTUFBTSxFQUFFLE1BQU07d0NBQ2QsUUFBUSxFQUFFLGNBQWM7d0NBQ3hCLFFBQVEsRUFBRTs0Q0FDUixPQUFPLEVBQUUsR0FBRzs0Q0FDWixPQUFPLEVBQUUsSUFBSTt5Q0FDZDtxQ0FDRjtvQ0FFRCxLQUFLLEVBQUU7d0NBQ0wsS0FBSyxFQUFFLGlCQUFpQjt3Q0FDeEIsR0FBRyxFQUFFLFlBQVk7cUNBQ2xCO2lDQUNGLENBQUM7NkJBQ0g7NEJBQ0QsS0FBSyxFQUFFO2dDQUNMLEtBQUssRUFBRTtvQ0FDTCxhQUFhLEVBQUUsR0FBRztvQ0FDbEIsUUFBUSxFQUFFLE9BQU87b0NBQ2pCLFlBQVksRUFBRTt3Q0FDWixPQUFPLEVBQUUsSUFBSTt3Q0FDYixLQUFLLEVBQUUsSUFBSTtxQ0FDWjtpQ0FDRjs2QkFDRjt5QkFDRixDQUFDO3FCQUNIO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBBdXRoUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2F1dGgtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge1xuICBOYkF1dGhNb2R1bGUsXG4gIE5iQXV0aFNpbXBsZVRva2VuLFxuICBOYlBhc3N3b3JkQXV0aFN0cmF0ZWd5LFxufSBmcm9tIFwiQG5lYnVsYXIvYXV0aFwiO1xuaW1wb3J0IHtcbiAgTmJBbGVydE1vZHVsZSxcbiAgTmJJbnB1dE1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iQ2hlY2tib3hNb2R1bGUsXG59IGZyb20gXCJAbmVidWxhci90aGVtZVwiO1xuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUxvYWRlciwgVHJhbnNsYXRlTW9kdWxlIH0gZnJvbSBcIkBuZ3gtdHJhbnNsYXRlL2NvcmVcIjtcbmltcG9ydCB7IFRyYW5zbGF0ZUh0dHBMb2FkZXIgfSBmcm9tIFwiQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXJcIjtcbmltcG9ydCB7IFJlc3RBZG1pbkNvbmZpZ1NlcnZpY2UgfSBmcm9tIFwiLi4vcmVzdC1hZG1pbi9yZXN0LXJlc291cmNlL3NlcnZpY2UvcmVzdC1hZG1pbi1jb25maWcuc2VydmljZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb2dpbkNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgVHJhbnNsYXRlTW9kdWxlLFxuICAgIEF1dGhSb3V0aW5nTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBOYkFsZXJ0TW9kdWxlLFxuICAgIE5iSW5wdXRNb2R1bGUsXG4gICAgTmJCdXR0b25Nb2R1bGUsXG4gICAgTmJDaGVja2JveE1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5iQXV0aE1vZHVsZS5mb3JSb290KHtcbiAgICAgIHN0cmF0ZWdpZXM6IFtcbiAgICAgICAgTmJQYXNzd29yZEF1dGhTdHJhdGVneS5zZXR1cCh7XG4gICAgICAgICAgbmFtZTogXCJlbWFpbFwiLFxuXG4gICAgICAgICAgYmFzZUVuZHBvaW50OiBcImh0dHBzOi8vYXBpLm1hcnlsaXMuY29tL2FwaVwiLFxuICAgICAgICAgIGxvZ2luOiB7XG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL2F1dGgvc2lnbmluXCIsXG4gICAgICAgICAgICByZWRpcmVjdDoge1xuICAgICAgICAgICAgICBzdWNjZXNzOiBcIi9cIixcbiAgICAgICAgICAgICAgZmFpbHVyZTogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRva2VuOiB7XG4gICAgICAgICAgICBjbGFzczogTmJBdXRoU2ltcGxlVG9rZW4sXG4gICAgICAgICAgICBrZXk6IFwiZGF0YS50b2tlblwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIGZvcm1zOiB7XG4gICAgICAgIGxvZ2luOiB7XG4gICAgICAgICAgcmVkaXJlY3REZWxheTogNTAwLCAvLyBkZWxheSBiZWZvcmUgcmVkaXJlY3QgYWZ0ZXIgYSBzdWNjZXNzZnVsIGxvZ2luLCB3aGlsZSBzdWNjZXNzIG1lc3NhZ2UgaXMgc2hvd24gdG8gdGhlIHVzZXJcbiAgICAgICAgICBzdHJhdGVneTogXCJlbWFpbFwiLCAvLyBzdHJhdGVneSBpZCBrZXkuXG4gICAgICAgICAgc2hvd01lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge1xuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSByZXN0QWRtaW5Db25maWdTZXJ2aWNlOiBSZXN0QWRtaW5Db25maWdTZXJ2aWNlICkge1xuXG4gIH1cbn1cbiJdfQ==