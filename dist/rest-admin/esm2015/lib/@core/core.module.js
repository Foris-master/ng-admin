import { NgModule, Optional, SkipSelf, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbDummyAuthStrategy } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { AnalyticsService, LayoutService, PlayerService, SeoService, StateService, } from './utils';
import * as i0 from "@angular/core";
const socialLinks = [
    {
        url: 'https://github.com/akveo/nebular',
        target: '_blank',
        icon: 'github',
    },
    {
        url: 'https://www.facebook.com/akveo/',
        target: '_blank',
        icon: 'facebook',
    },
    {
        url: 'https://twitter.com/akveo_inc',
        target: '_blank',
        icon: 'twitter',
    },
];
export class NbSimpleRoleProvider extends NbRoleProvider {
    getRole() {
        // here you could provide any role based on any auth flow
        return observableOf('guest');
    }
}
export const NB_CORE_PROVIDERS = [
    ...NbAuthModule.forRoot({
        strategies: [
            NbDummyAuthStrategy.setup({
                name: 'email',
                delay: 3000,
            }),
        ],
        forms: {
            login: {
                socialLinks: socialLinks,
            },
            register: {
                socialLinks: socialLinks,
            },
        },
    }).providers,
    NbSecurityModule.forRoot({
        accessControl: {
            guest: {
                view: '*',
            },
            user: {
                parent: 'guest',
                create: '*',
                edit: '*',
                remove: '*',
            },
        },
    }).providers,
    {
        provide: NbRoleProvider,
        useClass: NbSimpleRoleProvider,
    },
    AnalyticsService,
    LayoutService,
    PlayerService,
    SeoService,
    StateService,
];
export class CoreModule {
    constructor(parentModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [...NB_CORE_PROVIDERS],
        };
    }
}
CoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, deps: [{ token: CoreModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
CoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, imports: [CommonModule], exports: [NbAuthModule] });
CoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, imports: [[CommonModule], NbAuthModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: CoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [NbAuthModule],
                    declarations: [],
                }]
        }], ctorParameters: function () { return [{ type: CoreModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLFNBQVMsQ0FBQzs7QUFFakIsTUFBTSxXQUFXLEdBQUc7SUFDbEI7UUFDRSxHQUFHLEVBQUUsa0NBQWtDO1FBQ3ZDLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRDtRQUNFLEdBQUcsRUFBRSxpQ0FBaUM7UUFDdEMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSwrQkFBK0I7UUFDcEMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFNBQVM7S0FDaEI7Q0FDRixDQUFDO0FBRUYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7SUFDdEQsT0FBTztRQUNMLHlEQUF5RDtRQUN6RCxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixHQUFJLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDdkIsVUFBVSxFQUFFO1lBQ1YsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUN4QixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7U0FDSDtRQUNELEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsV0FBVzthQUN6QjtZQUNELFFBQVEsRUFBRTtnQkFDUixXQUFXLEVBQUUsV0FBVzthQUN6QjtTQUNGO0tBQ0YsQ0FBQyxDQUFDLFNBQW1CO0lBRXRCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUN2QixhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEdBQUc7YUFDVjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsR0FBRztnQkFDWCxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsR0FBRzthQUNaO1NBQ0Y7S0FDRixDQUFDLENBQUMsU0FBUztJQUVaO1FBQ0UsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtLQUMvQjtJQUNELGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0NBQ2IsQ0FBQztBQU9GLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW9DLFlBQXdCO1FBQzFELG9CQUFvQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7dUdBVlUsVUFBVSxrQkFDNkIsVUFBVTt3R0FEakQsVUFBVSxZQUpYLFlBQVksYUFDWixZQUFZO3dHQUdYLFVBQVUsWUFKWixDQUFDLFlBQVksQ0FBQyxFQUNiLFlBQVk7MkZBR1gsVUFBVTtrQkFMdEIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOzBEQUVtRCxVQUFVOzBCQUEvQyxRQUFROzswQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmJBdXRoTW9kdWxlLCBOYkR1bW15QXV0aFN0cmF0ZWd5IH0gZnJvbSAnQG5lYnVsYXIvYXV0aCc7XG5pbXBvcnQgeyBOYlNlY3VyaXR5TW9kdWxlLCBOYlJvbGVQcm92aWRlciB9IGZyb20gJ0BuZWJ1bGFyL3NlY3VyaXR5JztcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyB0aHJvd0lmQWxyZWFkeUxvYWRlZCB9IGZyb20gJy4vbW9kdWxlLWltcG9ydC1ndWFyZCc7XG5pbXBvcnQge1xuICBBbmFseXRpY3NTZXJ2aWNlLFxuICBMYXlvdXRTZXJ2aWNlLFxuICBQbGF5ZXJTZXJ2aWNlLFxuICBTZW9TZXJ2aWNlLFxuICBTdGF0ZVNlcnZpY2UsXG59IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBzb2NpYWxMaW5rcyA9IFtcbiAge1xuICAgIHVybDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ha3Zlby9uZWJ1bGFyJyxcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgIGljb246ICdnaXRodWInLFxuICB9LFxuICB7XG4gICAgdXJsOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2FrdmVvLycsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICBpY29uOiAnZmFjZWJvb2snLFxuICB9LFxuICB7XG4gICAgdXJsOiAnaHR0cHM6Ly90d2l0dGVyLmNvbS9ha3Zlb19pbmMnLFxuICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgaWNvbjogJ3R3aXR0ZXInLFxuICB9LFxuXTtcblxuZXhwb3J0IGNsYXNzIE5iU2ltcGxlUm9sZVByb3ZpZGVyIGV4dGVuZHMgTmJSb2xlUHJvdmlkZXIge1xuICBnZXRSb2xlKCkge1xuICAgIC8vIGhlcmUgeW91IGNvdWxkIHByb3ZpZGUgYW55IHJvbGUgYmFzZWQgb24gYW55IGF1dGggZmxvd1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YoJ2d1ZXN0Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5CX0NPUkVfUFJPVklERVJTID0gW1xuICAuLi4oTmJBdXRoTW9kdWxlLmZvclJvb3Qoe1xuICAgIHN0cmF0ZWdpZXM6IFtcbiAgICAgIE5iRHVtbXlBdXRoU3RyYXRlZ3kuc2V0dXAoe1xuICAgICAgICBuYW1lOiAnZW1haWwnLFxuICAgICAgICBkZWxheTogMzAwMCxcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgZm9ybXM6IHtcbiAgICAgIGxvZ2luOiB7XG4gICAgICAgIHNvY2lhbExpbmtzOiBzb2NpYWxMaW5rcyxcbiAgICAgIH0sXG4gICAgICByZWdpc3Rlcjoge1xuICAgICAgICBzb2NpYWxMaW5rczogc29jaWFsTGlua3MsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLnByb3ZpZGVycyBhcyBhbnlbXSksXG5cbiAgTmJTZWN1cml0eU1vZHVsZS5mb3JSb290KHtcbiAgICBhY2Nlc3NDb250cm9sOiB7XG4gICAgICBndWVzdDoge1xuICAgICAgICB2aWV3OiAnKicsXG4gICAgICB9LFxuICAgICAgdXNlcjoge1xuICAgICAgICBwYXJlbnQ6ICdndWVzdCcsXG4gICAgICAgIGNyZWF0ZTogJyonLFxuICAgICAgICBlZGl0OiAnKicsXG4gICAgICAgIHJlbW92ZTogJyonLFxuICAgICAgfSxcbiAgICB9LFxuICB9KS5wcm92aWRlcnMsXG5cbiAge1xuICAgIHByb3ZpZGU6IE5iUm9sZVByb3ZpZGVyLFxuICAgIHVzZUNsYXNzOiBOYlNpbXBsZVJvbGVQcm92aWRlcixcbiAgfSxcbiAgQW5hbHl0aWNzU2VydmljZSxcbiAgTGF5b3V0U2VydmljZSxcbiAgUGxheWVyU2VydmljZSxcbiAgU2VvU2VydmljZSxcbiAgU3RhdGVTZXJ2aWNlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOYkF1dGhNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBDb3JlTW9kdWxlKSB7XG4gICAgdGhyb3dJZkFscmVhZHlMb2FkZWQocGFyZW50TW9kdWxlLCAnQ29yZU1vZHVsZScpO1xuICB9XG5cbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb3JlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb3JlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uTkJfQ09SRV9QUk9WSURFUlNdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==