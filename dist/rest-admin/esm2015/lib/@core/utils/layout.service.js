import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { delay, shareReplay, debounceTime } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class LayoutService {
    constructor() {
        this.layoutSize$ = new Subject();
        this.layoutSizeChange$ = this.layoutSize$.pipe(shareReplay({ refCount: true }));
    }
    changeLayoutSize() {
        this.layoutSize$.next();
    }
    onChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(delay(1));
    }
    onSafeChangeLayoutSize() {
        return this.layoutSizeChange$.pipe(debounceTime(350));
    }
}
LayoutService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LayoutService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LayoutService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LayoutService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: LayoutService, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF5b3V0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvdXRpbHMvbGF5b3V0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUdsRSxNQUFNLE9BQU8sYUFBYTtJQUQxQjtRQUdZLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDakQsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQ2hDLENBQUM7S0FlSDtJQWJDLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELHNCQUFzQjtRQUNwQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQ2hDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQztJQUNKLENBQUM7OzBHQW5CVSxhQUFhOzhHQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlbGF5LCBzaGFyZVJlcGxheSwgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGF5b3V0U2VydmljZSB7XG5cbiAgcHJvdGVjdGVkIGxheW91dFNpemUkID0gbmV3IFN1YmplY3QoKTtcbiAgcHJvdGVjdGVkIGxheW91dFNpemVDaGFuZ2UkID0gdGhpcy5sYXlvdXRTaXplJC5waXBlKFxuICAgIHNoYXJlUmVwbGF5KHsgcmVmQ291bnQ6IHRydWUgfSksXG4gICk7XG5cbiAgY2hhbmdlTGF5b3V0U2l6ZSgpIHtcbiAgICB0aGlzLmxheW91dFNpemUkLm5leHQoKTtcbiAgfVxuXG4gIG9uQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFNpemVDaGFuZ2UkLnBpcGUoZGVsYXkoMSkpO1xuICB9XG5cbiAgb25TYWZlQ2hhbmdlTGF5b3V0U2l6ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmxheW91dFNpemVDaGFuZ2UkLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMzUwKSxcbiAgICApO1xuICB9XG59XG4iXX0=