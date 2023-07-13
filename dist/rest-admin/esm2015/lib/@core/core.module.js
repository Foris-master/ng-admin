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
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(i0.ɵɵinject(CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule], NbAuthModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CoreModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [NbAuthModule],
                declarations: [],
            }]
    }], function () { return [{ type: CoreModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CoreModule, { imports: [CommonModule], exports: [NbAuthModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFFBQVEsRUFDUixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUxQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixhQUFhLEVBQ2IsVUFBVSxFQUNWLFlBQVksR0FDYixNQUFNLFNBQVMsQ0FBQzs7QUFFakIsTUFBTSxXQUFXLEdBQUc7SUFDbEI7UUFDRSxHQUFHLEVBQUUsa0NBQWtDO1FBQ3ZDLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO0tBQ2Y7SUFDRDtRQUNFLEdBQUcsRUFBRSxpQ0FBaUM7UUFDdEMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFVBQVU7S0FDakI7SUFDRDtRQUNFLEdBQUcsRUFBRSwrQkFBK0I7UUFDcEMsTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFNBQVM7S0FDaEI7Q0FDRixDQUFDO0FBRUYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7SUFDdEQsT0FBTztRQUNMLHlEQUF5RDtRQUN6RCxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FBRztJQUMvQixHQUFJLFlBQVksQ0FBQyxPQUFPLENBQUM7UUFDdkIsVUFBVSxFQUFFO1lBQ1YsbUJBQW1CLENBQUMsS0FBSyxDQUFDO2dCQUN4QixJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsSUFBSTthQUNaLENBQUM7U0FDSDtRQUNELEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRTtnQkFDTCxXQUFXLEVBQUUsV0FBVzthQUN6QjtZQUNELFFBQVEsRUFBRTtnQkFDUixXQUFXLEVBQUUsV0FBVzthQUN6QjtTQUNGO0tBQ0YsQ0FBQyxDQUFDLFNBQW1CO0lBRXRCLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztRQUN2QixhQUFhLEVBQUU7WUFDYixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFLEdBQUc7YUFDVjtZQUNELElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsT0FBTztnQkFDZixNQUFNLEVBQUUsR0FBRztnQkFDWCxJQUFJLEVBQUUsR0FBRztnQkFDVCxNQUFNLEVBQUUsR0FBRzthQUNaO1NBQ0Y7S0FDRixDQUFDLENBQUMsU0FBUztJQUVaO1FBQ0UsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLG9CQUFvQjtLQUMvQjtJQUNELGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0NBQ2IsQ0FBQztBQU9GLE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW9DLFlBQXdCO1FBQzFELG9CQUFvQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQztTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7b0VBVlUsVUFBVSxjQUM2QixVQUFVOzREQURqRCxVQUFVO2dFQUpaLENBQUMsWUFBWSxDQUFDLEVBQ2IsWUFBWTt1RkFHWCxVQUFVO2NBTHRCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLEVBQUU7YUFDakI7c0NBRW1ELFVBQVU7c0JBQS9DLFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0QixVQUFVLGNBSlgsWUFBWSxhQUNaLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYkF1dGhNb2R1bGUsIE5iRHVtbXlBdXRoU3RyYXRlZ3kgfSBmcm9tICdAbmVidWxhci9hdXRoJztcbmltcG9ydCB7IE5iU2VjdXJpdHlNb2R1bGUsIE5iUm9sZVByb3ZpZGVyIH0gZnJvbSAnQG5lYnVsYXIvc2VjdXJpdHknO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IHRocm93SWZBbHJlYWR5TG9hZGVkIH0gZnJvbSAnLi9tb2R1bGUtaW1wb3J0LWd1YXJkJztcbmltcG9ydCB7XG4gIEFuYWx5dGljc1NlcnZpY2UsXG4gIExheW91dFNlcnZpY2UsXG4gIFBsYXllclNlcnZpY2UsXG4gIFNlb1NlcnZpY2UsXG4gIFN0YXRlU2VydmljZSxcbn0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IHNvY2lhbExpbmtzID0gW1xuICB7XG4gICAgdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2FrdmVvL25lYnVsYXInLFxuICAgIHRhcmdldDogJ19ibGFuaycsXG4gICAgaWNvbjogJ2dpdGh1YicsXG4gIH0sXG4gIHtcbiAgICB1cmw6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYWt2ZW8vJyxcbiAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgIGljb246ICdmYWNlYm9vaycsXG4gIH0sXG4gIHtcbiAgICB1cmw6ICdodHRwczovL3R3aXR0ZXIuY29tL2FrdmVvX2luYycsXG4gICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICBpY29uOiAndHdpdHRlcicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY2xhc3MgTmJTaW1wbGVSb2xlUHJvdmlkZXIgZXh0ZW5kcyBOYlJvbGVQcm92aWRlciB7XG4gIGdldFJvbGUoKSB7XG4gICAgLy8gaGVyZSB5b3UgY291bGQgcHJvdmlkZSBhbnkgcm9sZSBiYXNlZCBvbiBhbnkgYXV0aCBmbG93XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZignZ3Vlc3QnKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgTkJfQ09SRV9QUk9WSURFUlMgPSBbXG4gIC4uLihOYkF1dGhNb2R1bGUuZm9yUm9vdCh7XG4gICAgc3RyYXRlZ2llczogW1xuICAgICAgTmJEdW1teUF1dGhTdHJhdGVneS5zZXR1cCh7XG4gICAgICAgIG5hbWU6ICdlbWFpbCcsXG4gICAgICAgIGRlbGF5OiAzMDAwLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBmb3Jtczoge1xuICAgICAgbG9naW46IHtcbiAgICAgICAgc29jaWFsTGlua3M6IHNvY2lhbExpbmtzLFxuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyOiB7XG4gICAgICAgIHNvY2lhbExpbmtzOiBzb2NpYWxMaW5rcyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkucHJvdmlkZXJzIGFzIGFueVtdKSxcblxuICBOYlNlY3VyaXR5TW9kdWxlLmZvclJvb3Qoe1xuICAgIGFjY2Vzc0NvbnRyb2w6IHtcbiAgICAgIGd1ZXN0OiB7XG4gICAgICAgIHZpZXc6ICcqJyxcbiAgICAgIH0sXG4gICAgICB1c2VyOiB7XG4gICAgICAgIHBhcmVudDogJ2d1ZXN0JyxcbiAgICAgICAgY3JlYXRlOiAnKicsXG4gICAgICAgIGVkaXQ6ICcqJyxcbiAgICAgICAgcmVtb3ZlOiAnKicsXG4gICAgICB9LFxuICAgIH0sXG4gIH0pLnByb3ZpZGVycyxcblxuICB7XG4gICAgcHJvdmlkZTogTmJSb2xlUHJvdmlkZXIsXG4gICAgdXNlQ2xhc3M6IE5iU2ltcGxlUm9sZVByb3ZpZGVyLFxuICB9LFxuICBBbmFseXRpY3NTZXJ2aWNlLFxuICBMYXlvdXRTZXJ2aWNlLFxuICBQbGF5ZXJTZXJ2aWNlLFxuICBTZW9TZXJ2aWNlLFxuICBTdGF0ZVNlcnZpY2UsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZXhwb3J0czogW05iQXV0aE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IENvcmVNb2R1bGUpIHtcbiAgICB0aHJvd0lmQWxyZWFkeUxvYWRlZChwYXJlbnRNb2R1bGUsICdDb3JlTW9kdWxlJyk7XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvcmVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvcmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFsuLi5OQl9DT1JFX1BST1ZJREVSU10sXG4gICAgfTtcbiAgfVxufVxuIl19