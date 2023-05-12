import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbActionsModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSidebarModule, NbUserModule, NbContextMenuModule, NbButtonModule, NbSelectModule, NbIconModule, NbThemeModule, NbToggleModule, NbSidebarService, } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';
import { FooterComponent, HeaderComponent, SearchInputComponent, TinyMCEComponent, } from './components';
import { CapitalizePipe, PluralPipe, RoundPipe, TimingPipe, NumberWithCommasPipe, } from './pipes';
import { OneColumnLayoutComponent, ThreeColumnsLayoutComponent, TwoColumnsLayoutComponent, } from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import * as i0 from "@angular/core";
const NB_MODULES = [
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbSecurityModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbToggleModule,
];
const COMPONENTS = [
    HeaderComponent,
    FooterComponent,
    SearchInputComponent,
    TinyMCEComponent,
    OneColumnLayoutComponent,
    ThreeColumnsLayoutComponent,
    TwoColumnsLayoutComponent,
];
const PIPES = [
    CapitalizePipe,
    PluralPipe,
    RoundPipe,
    TimingPipe,
    NumberWithCommasPipe,
];
export class ThemeModule {
    static forRoot() {
        return {
            ngModule: ThemeModule,
            providers: [
                ...NbThemeModule.forRoot({
                    name: 'default',
                }, [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME]).providers,
                NbSidebarService,
            ],
        };
    }
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ThemeModule });
ThemeModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, ...NB_MODULES], CommonModule] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, ...NB_MODULES],
                exports: [CommonModule, ...PIPES, ...COMPONENTS],
                declarations: [...COMPONENTS, ...PIPES],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ThemeModule, { declarations: [HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        TinyMCEComponent,
        OneColumnLayoutComponent,
        ThreeColumnsLayoutComponent,
        TwoColumnsLayoutComponent, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe], imports: [CommonModule, NbLayoutModule,
        NbMenuModule,
        NbUserModule,
        NbActionsModule,
        NbSearchModule,
        NbSidebarModule,
        NbContextMenuModule,
        NbSecurityModule,
        NbButtonModule,
        NbSelectModule,
        NbIconModule,
        NbEvaIconsModule,
        NbToggleModule], exports: [CommonModule, CapitalizePipe,
        PluralPipe,
        RoundPipe,
        TimingPipe,
        NumberWithCommasPipe, HeaderComponent,
        FooterComponent,
        SearchInputComponent,
        TinyMCEComponent,
        OneColumnLayoutComponent,
        ThreeColumnsLayoutComponent,
        TwoColumnsLayoutComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0B0aGVtZS90aGVtZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsZUFBZSxFQUNmLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxFQUNiLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsZ0JBQWdCLEdBQ2pCLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFDTCxjQUFjLEVBQ2QsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsMkJBQTJCLEVBQzNCLHlCQUF5QixHQUMxQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDZixDQUFDO0FBQ0YsTUFBTSxVQUFVLEdBQUc7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IseUJBQXlCO0NBQzFCLENBQUM7QUFDRixNQUFNLEtBQUssR0FBRztJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7Q0FDckIsQ0FBQztBQU9GLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQ3RCO29CQUNFLElBQUksRUFBRSxTQUFTO2lCQUNoQixFQUNELENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQzNELENBQUMsU0FBUztnQkFDWCxnQkFBZ0I7YUFDakI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7c0VBZFUsV0FBVzs2REFBWCxXQUFXO2lFQUpiLENBQUMsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQzVCLFlBQVk7dUZBR1gsV0FBVztjQUx2QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxLQUFLLEVBQUUsR0FBRyxVQUFVLENBQUM7Z0JBQ2hELFlBQVksRUFBRSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUcsS0FBSyxDQUFDO2FBQ3hDOzt3RkFDWSxXQUFXLG1CQXJCdEIsZUFBZTtRQUNmLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QiwyQkFBMkI7UUFDM0IseUJBQXlCLEVBR3pCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsU0FBUztRQUNULFVBQVU7UUFDVixvQkFBb0IsYUFJVixZQUFZLEVBaEN0QixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxjQUFjO1FBQ2QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixjQUFjLGFBcUJKLFlBQVksRUFUdEIsY0FBYztRQUNkLFVBQVU7UUFDVixTQUFTO1FBQ1QsVUFBVTtRQUNWLG9CQUFvQixFQWJwQixlQUFlO1FBQ2YsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE5iQWN0aW9uc01vZHVsZSxcbiAgTmJMYXlvdXRNb2R1bGUsXG4gIE5iTWVudU1vZHVsZSxcbiAgTmJTZWFyY2hNb2R1bGUsXG4gIE5iU2lkZWJhck1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJTZWxlY3RNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJUaGVtZU1vZHVsZSxcbiAgTmJUb2dnbGVNb2R1bGUsXG4gIE5iU2lkZWJhclNlcnZpY2UsXG59IGZyb20gJ0BuZWJ1bGFyL3RoZW1lJztcbmltcG9ydCB7IE5iRXZhSWNvbnNNb2R1bGUgfSBmcm9tICdAbmVidWxhci9ldmEtaWNvbnMnO1xuaW1wb3J0IHsgTmJTZWN1cml0eU1vZHVsZSB9IGZyb20gJ0BuZWJ1bGFyL3NlY3VyaXR5JztcblxuaW1wb3J0IHtcbiAgRm9vdGVyQ29tcG9uZW50LFxuICBIZWFkZXJDb21wb25lbnQsXG4gIFNlYXJjaElucHV0Q29tcG9uZW50LFxuICBUaW55TUNFQ29tcG9uZW50LFxufSBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtcbiAgQ2FwaXRhbGl6ZVBpcGUsXG4gIFBsdXJhbFBpcGUsXG4gIFJvdW5kUGlwZSxcbiAgVGltaW5nUGlwZSxcbiAgTnVtYmVyV2l0aENvbW1hc1BpcGUsXG59IGZyb20gJy4vcGlwZXMnO1xuaW1wb3J0IHtcbiAgT25lQ29sdW1uTGF5b3V0Q29tcG9uZW50LFxuICBUaHJlZUNvbHVtbnNMYXlvdXRDb21wb25lbnQsXG4gIFR3b0NvbHVtbnNMYXlvdXRDb21wb25lbnQsXG59IGZyb20gJy4vbGF5b3V0cyc7XG5pbXBvcnQgeyBERUZBVUxUX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuZGVmYXVsdCc7XG5pbXBvcnQgeyBDT1NNSUNfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5jb3NtaWMnO1xuaW1wb3J0IHsgQ09SUE9SQVRFX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29ycG9yYXRlJztcbmltcG9ydCB7IERBUktfVEhFTUUgfSBmcm9tICcuL3N0eWxlcy90aGVtZS5kYXJrJztcblxuY29uc3QgTkJfTU9EVUxFUyA9IFtcbiAgTmJMYXlvdXRNb2R1bGUsXG4gIE5iTWVudU1vZHVsZSxcbiAgTmJVc2VyTW9kdWxlLFxuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iU2VhcmNoTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iQ29udGV4dE1lbnVNb2R1bGUsXG4gIE5iU2VjdXJpdHlNb2R1bGUsXG4gIE5iQnV0dG9uTW9kdWxlLFxuICBOYlNlbGVjdE1vZHVsZSxcbiAgTmJJY29uTW9kdWxlLFxuICBOYkV2YUljb25zTW9kdWxlLFxuICBOYlRvZ2dsZU1vZHVsZSxcbl07XG5jb25zdCBDT01QT05FTlRTID0gW1xuICBIZWFkZXJDb21wb25lbnQsXG4gIEZvb3RlckNvbXBvbmVudCxcbiAgU2VhcmNoSW5wdXRDb21wb25lbnQsXG4gIFRpbnlNQ0VDb21wb25lbnQsXG4gIE9uZUNvbHVtbkxheW91dENvbXBvbmVudCxcbiAgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50LFxuICBUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50LFxuXTtcbmNvbnN0IFBJUEVTID0gW1xuICBDYXBpdGFsaXplUGlwZSxcbiAgUGx1cmFsUGlwZSxcbiAgUm91bmRQaXBlLFxuICBUaW1pbmdQaXBlLFxuICBOdW1iZXJXaXRoQ29tbWFzUGlwZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIC4uLk5CX01PRFVMRVNdLFxuICBleHBvcnRzOiBbQ29tbW9uTW9kdWxlLCAuLi5QSVBFUywgLi4uQ09NUE9ORU5UU10sXG4gIGRlY2xhcmF0aW9uczogWy4uLkNPTVBPTkVOVFMsIC4uLlBJUEVTXSxcbn0pXG5leHBvcnQgY2xhc3MgVGhlbWVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRoZW1lTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUaGVtZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5OYlRoZW1lTW9kdWxlLmZvclJvb3QoXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2RlZmF1bHQnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW0RFRkFVTFRfVEhFTUUsIENPU01JQ19USEVNRSwgQ09SUE9SQVRFX1RIRU1FLCBEQVJLX1RIRU1FXVxuICAgICAgICApLnByb3ZpZGVycyxcbiAgICAgICAgTmJTaWRlYmFyU2VydmljZSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19