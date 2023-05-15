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
ThemeModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ThemeModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, declarations: [HeaderComponent,
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
        TwoColumnsLayoutComponent] });
ThemeModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, imports: [[CommonModule, ...NB_MODULES], CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: ThemeModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ...NB_MODULES],
                    exports: [CommonModule, ...PIPES, ...COMPONENTS],
                    declarations: [...COMPONENTS, ...PIPES],
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL0B0aGVtZS90aGVtZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxlQUFlLEVBQ2YsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEVBQ2QsZUFBZSxFQUNmLFlBQVksRUFDWixtQkFBbUIsRUFDbkIsY0FBYyxFQUNkLGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxFQUNiLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVyRCxPQUFPLEVBQ0wsZUFBZSxFQUNmLGVBQWUsRUFDZixvQkFBb0IsRUFDcEIsZ0JBQWdCLEdBQ2pCLE1BQU0sY0FBYyxDQUFDO0FBQ3RCLE9BQU8sRUFDTCxjQUFjLEVBQ2QsVUFBVSxFQUNWLFNBQVMsRUFDVCxVQUFVLEVBQ1Ysb0JBQW9CLEdBQ3JCLE1BQU0sU0FBUyxDQUFDO0FBQ2pCLE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsMkJBQTJCLEVBQzNCLHlCQUF5QixHQUMxQixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWpELE1BQU0sVUFBVSxHQUFHO0lBQ2pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGNBQWM7SUFDZCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGNBQWM7Q0FDZixDQUFDO0FBQ0YsTUFBTSxVQUFVLEdBQUc7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IseUJBQXlCO0NBQzFCLENBQUM7QUFDRixNQUFNLEtBQUssR0FBRztJQUNaLGNBQWM7SUFDZCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7SUFDVixvQkFBb0I7Q0FDckIsQ0FBQztBQU9GLE1BQU0sT0FBTyxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQ3RCO29CQUNFLElBQUksRUFBRSxTQUFTO2lCQUNoQixFQUNELENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDLENBQzNELENBQUMsU0FBUztnQkFDWCxnQkFBZ0I7YUFDakI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7d0dBZFUsV0FBVzt5R0FBWCxXQUFXLGlCQXJCdEIsZUFBZTtRQUNmLGVBQWU7UUFDZixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLHdCQUF3QjtRQUN4QiwyQkFBMkI7UUFDM0IseUJBQXlCLEVBR3pCLGNBQWM7UUFDZCxVQUFVO1FBQ1YsU0FBUztRQUNULFVBQVU7UUFDVixvQkFBb0IsYUFJVixZQUFZLEVBaEN0QixjQUFjO1FBQ2QsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsY0FBYztRQUNkLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxjQUFjO1FBQ2QsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixjQUFjLGFBcUJKLFlBQVksRUFUdEIsY0FBYztRQUNkLFVBQVU7UUFDVixTQUFTO1FBQ1QsVUFBVTtRQUNWLG9CQUFvQixFQWJwQixlQUFlO1FBQ2YsZUFBZTtRQUNmLG9CQUFvQjtRQUNwQixnQkFBZ0I7UUFDaEIsd0JBQXdCO1FBQ3hCLDJCQUEyQjtRQUMzQix5QkFBeUI7eUdBZWQsV0FBVyxZQUpiLENBQUMsWUFBWSxFQUFFLEdBQUcsVUFBVSxDQUFDLEVBQzVCLFlBQVk7MkZBR1gsV0FBVztrQkFMdkIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsR0FBRyxVQUFVLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLEtBQUssRUFBRSxHQUFHLFVBQVUsQ0FBQztvQkFDaEQsWUFBWSxFQUFFLENBQUMsR0FBRyxVQUFVLEVBQUUsR0FBRyxLQUFLLENBQUM7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYkFjdGlvbnNNb2R1bGUsXG4gIE5iTGF5b3V0TW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iU2VhcmNoTW9kdWxlLFxuICBOYlNpZGViYXJNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJDb250ZXh0TWVudU1vZHVsZSxcbiAgTmJCdXR0b25Nb2R1bGUsXG4gIE5iU2VsZWN0TW9kdWxlLFxuICBOYkljb25Nb2R1bGUsXG4gIE5iVGhlbWVNb2R1bGUsXG4gIE5iVG9nZ2xlTW9kdWxlLFxuICBOYlNpZGViYXJTZXJ2aWNlLFxufSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5pbXBvcnQgeyBOYkV2YUljb25zTW9kdWxlIH0gZnJvbSAnQG5lYnVsYXIvZXZhLWljb25zJztcbmltcG9ydCB7IE5iU2VjdXJpdHlNb2R1bGUgfSBmcm9tICdAbmVidWxhci9zZWN1cml0eSc7XG5cbmltcG9ydCB7XG4gIEZvb3RlckNvbXBvbmVudCxcbiAgSGVhZGVyQ29tcG9uZW50LFxuICBTZWFyY2hJbnB1dENvbXBvbmVudCxcbiAgVGlueU1DRUNvbXBvbmVudCxcbn0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCB7XG4gIENhcGl0YWxpemVQaXBlLFxuICBQbHVyYWxQaXBlLFxuICBSb3VuZFBpcGUsXG4gIFRpbWluZ1BpcGUsXG4gIE51bWJlcldpdGhDb21tYXNQaXBlLFxufSBmcm9tICcuL3BpcGVzJztcbmltcG9ydCB7XG4gIE9uZUNvbHVtbkxheW91dENvbXBvbmVudCxcbiAgVGhyZWVDb2x1bW5zTGF5b3V0Q29tcG9uZW50LFxuICBUd29Db2x1bW5zTGF5b3V0Q29tcG9uZW50LFxufSBmcm9tICcuL2xheW91dHMnO1xuaW1wb3J0IHsgREVGQVVMVF9USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmRlZmF1bHQnO1xuaW1wb3J0IHsgQ09TTUlDX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuY29zbWljJztcbmltcG9ydCB7IENPUlBPUkFURV9USEVNRSB9IGZyb20gJy4vc3R5bGVzL3RoZW1lLmNvcnBvcmF0ZSc7XG5pbXBvcnQgeyBEQVJLX1RIRU1FIH0gZnJvbSAnLi9zdHlsZXMvdGhlbWUuZGFyayc7XG5cbmNvbnN0IE5CX01PRFVMRVMgPSBbXG4gIE5iTGF5b3V0TW9kdWxlLFxuICBOYk1lbnVNb2R1bGUsXG4gIE5iVXNlck1vZHVsZSxcbiAgTmJBY3Rpb25zTW9kdWxlLFxuICBOYlNlYXJjaE1vZHVsZSxcbiAgTmJTaWRlYmFyTW9kdWxlLFxuICBOYkNvbnRleHRNZW51TW9kdWxlLFxuICBOYlNlY3VyaXR5TW9kdWxlLFxuICBOYkJ1dHRvbk1vZHVsZSxcbiAgTmJTZWxlY3RNb2R1bGUsXG4gIE5iSWNvbk1vZHVsZSxcbiAgTmJFdmFJY29uc01vZHVsZSxcbiAgTmJUb2dnbGVNb2R1bGUsXG5dO1xuY29uc3QgQ09NUE9ORU5UUyA9IFtcbiAgSGVhZGVyQ29tcG9uZW50LFxuICBGb290ZXJDb21wb25lbnQsXG4gIFNlYXJjaElucHV0Q29tcG9uZW50LFxuICBUaW55TUNFQ29tcG9uZW50LFxuICBPbmVDb2x1bW5MYXlvdXRDb21wb25lbnQsXG4gIFRocmVlQ29sdW1uc0xheW91dENvbXBvbmVudCxcbiAgVHdvQ29sdW1uc0xheW91dENvbXBvbmVudCxcbl07XG5jb25zdCBQSVBFUyA9IFtcbiAgQ2FwaXRhbGl6ZVBpcGUsXG4gIFBsdXJhbFBpcGUsXG4gIFJvdW5kUGlwZSxcbiAgVGltaW5nUGlwZSxcbiAgTnVtYmVyV2l0aENvbW1hc1BpcGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCAuLi5OQl9NT0RVTEVTXSxcbiAgZXhwb3J0czogW0NvbW1vbk1vZHVsZSwgLi4uUElQRVMsIC4uLkNPTVBPTkVOVFNdLFxuICBkZWNsYXJhdGlvbnM6IFsuLi5DT01QT05FTlRTLCAuLi5QSVBFU10sXG59KVxuZXhwb3J0IGNsYXNzIFRoZW1lTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUaGVtZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGhlbWVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uTmJUaGVtZU1vZHVsZS5mb3JSb290KFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdkZWZhdWx0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtERUZBVUxUX1RIRU1FLCBDT1NNSUNfVEhFTUUsIENPUlBPUkFURV9USEVNRSwgREFSS19USEVNRV1cbiAgICAgICAgKS5wcm92aWRlcnMsXG4gICAgICAgIE5iU2lkZWJhclNlcnZpY2UsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==