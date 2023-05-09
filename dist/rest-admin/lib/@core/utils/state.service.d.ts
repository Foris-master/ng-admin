import { OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { NbLayoutDirectionService } from '@nebular/theme';
import * as i0 from "@angular/core";
export declare class StateService implements OnDestroy {
    protected layouts: any;
    protected sidebars: any;
    protected layoutState$: BehaviorSubject<any>;
    protected sidebarState$: BehaviorSubject<any>;
    alive: boolean;
    constructor(directionService: NbLayoutDirectionService);
    ngOnDestroy(): void;
    private updateSidebarIcons;
    setLayoutState(state: any): any;
    getLayoutStates(): Observable<any[]>;
    onLayoutState(): Observable<any>;
    setSidebarState(state: any): any;
    getSidebarStates(): Observable<any[]>;
    onSidebarState(): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<StateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StateService>;
}
//# sourceMappingURL=state.service.d.ts.map