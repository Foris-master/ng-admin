import { Injectable } from '@angular/core';
import { of as observableOf, BehaviorSubject } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { NbLayoutDirection } from '@nebular/theme';
import * as i0 from "@angular/core";
import * as i1 from "@nebular/theme";
export class StateService {
    constructor(directionService) {
        this.layouts = [
            {
                name: 'One Column',
                icon: 'nb-layout-default',
                id: 'one-column',
                selected: true,
            },
            {
                name: 'Two Column',
                icon: 'nb-layout-two-column',
                id: 'two-column',
            },
            {
                name: 'Center Column',
                icon: 'nb-layout-centre',
                id: 'center-column',
            },
        ];
        this.sidebars = [
            {
                name: 'Sidebar at layout start',
                icon: 'nb-layout-sidebar-left',
                id: 'start',
                selected: true,
            },
            {
                name: 'Sidebar at layout end',
                icon: 'nb-layout-sidebar-right',
                id: 'end',
            },
        ];
        this.layoutState$ = new BehaviorSubject(this.layouts[0]);
        this.sidebarState$ = new BehaviorSubject(this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange()
            .pipe(takeWhile(() => this.alive))
            .subscribe(direction => this.updateSidebarIcons(direction));
        this.updateSidebarIcons(directionService.getDirection());
    }
    ngOnDestroy() {
        this.alive = false;
    }
    updateSidebarIcons(direction) {
        const [startSidebar, endSidebar] = this.sidebars;
        const isLtr = direction === NbLayoutDirection.LTR;
        const startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
        const endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
        startSidebar.icon = startIconClass;
        endSidebar.icon = endIconClass;
    }
    setLayoutState(state) {
        this.layoutState$.next(state);
    }
    getLayoutStates() {
        return observableOf(this.layouts);
    }
    onLayoutState() {
        return this.layoutState$.asObservable();
    }
    setSidebarState(state) {
        this.sidebarState$.next(state);
    }
    getSidebarStates() {
        return observableOf(this.sidebars);
    }
    onSidebarState() {
        return this.sidebarState$.asObservable();
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(i0.ɵɵinject(i1.NbLayoutDirectionService)); };
StateService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StateService, factory: StateService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StateService, [{
        type: Injectable
    }], function () { return [{ type: i1.NbLayoutDirectionService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi9AY29yZS91dGlscy9zdGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWdCLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUE0QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHN0UsTUFBTSxPQUFPLFlBQVk7SUF3Q3ZCLFlBQVksZ0JBQTBDO1FBdEM1QyxZQUFPLEdBQVE7WUFDdkI7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLEVBQUUsRUFBRSxZQUFZO2dCQUNoQixRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLEVBQUUsRUFBRSxZQUFZO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGVBQWU7Z0JBQ3JCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEVBQUUsRUFBRSxlQUFlO2FBQ3BCO1NBQ0YsQ0FBQztRQUVRLGFBQVEsR0FBUTtZQUN4QjtnQkFDRSxJQUFJLEVBQUUseUJBQXlCO2dCQUMvQixJQUFJLEVBQUUsd0JBQXdCO2dCQUM5QixFQUFFLEVBQUUsT0FBTztnQkFDWCxRQUFRLEVBQUUsSUFBSTthQUNmO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLHVCQUF1QjtnQkFDN0IsSUFBSSxFQUFFLHlCQUF5QjtnQkFDL0IsRUFBRSxFQUFFLEtBQUs7YUFDVjtTQUNGLENBQUM7UUFFUSxpQkFBWSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxrQkFBYSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBR1gsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUU7YUFDakMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDakMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRU8sa0JBQWtCLENBQUMsU0FBNEI7UUFDckQsTUFBTSxDQUFFLFlBQVksRUFBRSxVQUFVLENBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25ELE1BQU0sS0FBSyxHQUFHLFNBQVMsS0FBSyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7UUFDbEQsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMseUJBQXlCLENBQUM7UUFDcEYsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsd0JBQXdCLENBQUM7UUFDbEYsWUFBWSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUM7UUFDbkMsVUFBVSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7SUFDakMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFVO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBVTtRQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzNDLENBQUM7O3dFQW5GVSxZQUFZO2tFQUFaLFlBQVksV0FBWixZQUFZO3VGQUFaLFlBQVk7Y0FEeEIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgb2YgYXMgb2JzZXJ2YWJsZU9mLCAgT2JzZXJ2YWJsZSwgIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOYkxheW91dERpcmVjdGlvblNlcnZpY2UsIE5iTGF5b3V0RGlyZWN0aW9uIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RhdGVTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwcm90ZWN0ZWQgbGF5b3V0czogYW55ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdPbmUgQ29sdW1uJyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtZGVmYXVsdCcsXG4gICAgICBpZDogJ29uZS1jb2x1bW4nLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVHdvIENvbHVtbicsXG4gICAgICBpY29uOiAnbmItbGF5b3V0LXR3by1jb2x1bW4nLFxuICAgICAgaWQ6ICd0d28tY29sdW1uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDZW50ZXIgQ29sdW1uJyxcbiAgICAgIGljb246ICduYi1sYXlvdXQtY2VudHJlJyxcbiAgICAgIGlkOiAnY2VudGVyLWNvbHVtbicsXG4gICAgfSxcbiAgXTtcblxuICBwcm90ZWN0ZWQgc2lkZWJhcnM6IGFueSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnU2lkZWJhciBhdCBsYXlvdXQgc3RhcnQnLFxuICAgICAgaWNvbjogJ25iLWxheW91dC1zaWRlYmFyLWxlZnQnLFxuICAgICAgaWQ6ICdzdGFydCcsXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdTaWRlYmFyIGF0IGxheW91dCBlbmQnLFxuICAgICAgaWNvbjogJ25iLWxheW91dC1zaWRlYmFyLXJpZ2h0JyxcbiAgICAgIGlkOiAnZW5kJyxcbiAgICB9LFxuICBdO1xuXG4gIHByb3RlY3RlZCBsYXlvdXRTdGF0ZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMubGF5b3V0c1swXSk7XG4gIHByb3RlY3RlZCBzaWRlYmFyU3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdCh0aGlzLnNpZGViYXJzWzBdKTtcblxuICBhbGl2ZSA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoZGlyZWN0aW9uU2VydmljZTogTmJMYXlvdXREaXJlY3Rpb25TZXJ2aWNlKSB7XG4gICAgZGlyZWN0aW9uU2VydmljZS5vbkRpcmVjdGlvbkNoYW5nZSgpXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5hbGl2ZSkpXG4gICAgICAuc3Vic2NyaWJlKGRpcmVjdGlvbiA9PiB0aGlzLnVwZGF0ZVNpZGViYXJJY29ucyhkaXJlY3Rpb24pKTtcblxuICAgIHRoaXMudXBkYXRlU2lkZWJhckljb25zKGRpcmVjdGlvblNlcnZpY2UuZ2V0RGlyZWN0aW9uKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5hbGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTaWRlYmFySWNvbnMoZGlyZWN0aW9uOiBOYkxheW91dERpcmVjdGlvbikge1xuICAgIGNvbnN0IFsgc3RhcnRTaWRlYmFyLCBlbmRTaWRlYmFyIF0gPSB0aGlzLnNpZGViYXJzO1xuICAgIGNvbnN0IGlzTHRyID0gZGlyZWN0aW9uID09PSBOYkxheW91dERpcmVjdGlvbi5MVFI7XG4gICAgY29uc3Qgc3RhcnRJY29uQ2xhc3MgPSBpc0x0ciA/ICduYi1sYXlvdXQtc2lkZWJhci1sZWZ0JyA6ICduYi1sYXlvdXQtc2lkZWJhci1yaWdodCc7XG4gICAgY29uc3QgZW5kSWNvbkNsYXNzID0gaXNMdHIgPyAnbmItbGF5b3V0LXNpZGViYXItcmlnaHQnIDogJ25iLWxheW91dC1zaWRlYmFyLWxlZnQnO1xuICAgIHN0YXJ0U2lkZWJhci5pY29uID0gc3RhcnRJY29uQ2xhc3M7XG4gICAgZW5kU2lkZWJhci5pY29uID0gZW5kSWNvbkNsYXNzO1xuICB9XG5cbiAgc2V0TGF5b3V0U3RhdGUoc3RhdGU6IGFueSk6IGFueSB7XG4gICAgdGhpcy5sYXlvdXRTdGF0ZSQubmV4dChzdGF0ZSk7XG4gIH1cblxuICBnZXRMYXlvdXRTdGF0ZXMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIHJldHVybiBvYnNlcnZhYmxlT2YodGhpcy5sYXlvdXRzKTtcbiAgfVxuXG4gIG9uTGF5b3V0U3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5sYXlvdXRTdGF0ZSQuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICBzZXRTaWRlYmFyU3RhdGUoc3RhdGU6IGFueSk6IGFueSB7XG4gICAgdGhpcy5zaWRlYmFyU3RhdGUkLm5leHQoc3RhdGUpO1xuICB9XG5cbiAgZ2V0U2lkZWJhclN0YXRlcygpOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLnNpZGViYXJzKTtcbiAgfVxuXG4gIG9uU2lkZWJhclN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc2lkZWJhclN0YXRlJC5hc09ic2VydmFibGUoKTtcbiAgfVxufVxuIl19