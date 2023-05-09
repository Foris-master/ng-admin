import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd } from '@angular/router';
import { NB_DOCUMENT } from '@nebular/theme';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class SeoService {
    constructor(router, document, platformId) {
        this.router = router;
        this.destroy$ = new Subject();
        this.isBrowser = isPlatformBrowser(platformId);
        this.dom = document;
        if (this.isBrowser) {
            this.createCanonicalTag();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    createCanonicalTag() {
        this.linkCanonical = this.dom.createElement('link');
        this.linkCanonical.setAttribute('rel', 'canonical');
        this.dom.head.appendChild(this.linkCanonical);
        this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
    }
    trackCanonicalChanges() {
        if (!this.isBrowser) {
            return;
        }
        this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$))
            .subscribe(() => {
            this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        });
    }
    getCanonicalUrl() {
        return this.dom.location.origin + this.dom.location.pathname;
    }
}
SeoService.ɵfac = function SeoService_Factory(t) { return new (t || SeoService)(i0.ɵɵinject(i1.Router), i0.ɵɵinject(NB_DOCUMENT), i0.ɵɵinject(PLATFORM_ID)); };
SeoService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: SeoService, factory: SeoService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SeoService, [{
        type: Injectable
    }], function () { return [{ type: i1.Router }, { type: undefined, decorators: [{
                type: Inject,
                args: [NB_DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VvLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXN0LWFkbWluL3NyYy9saWIvQGNvcmUvdXRpbHMvc2VvLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7QUFHL0IsTUFBTSxPQUFPLFVBQVU7SUFPckIsWUFDVSxNQUFjLEVBQ0QsUUFBYSxFQUNiLFVBQWU7UUFGNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQU5QLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO1FBVTlDLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFFcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDckIsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLFlBQVksYUFBYSxDQUFDLEVBQ2pELFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCO2FBQ0UsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUMvRCxDQUFDOztvRUFoRFUsVUFBVSxzQ0FTWCxXQUFXLGVBQ1gsV0FBVztnRUFWVixVQUFVLFdBQVYsVUFBVTt1RkFBVixVQUFVO2NBRHRCLFVBQVU7O3NCQVVOLE1BQU07dUJBQUMsV0FBVzs7c0JBQ2xCLE1BQU07dUJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCwgUExBVEZPUk1fSUQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5CX0RPQ1VNRU5UIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZW9TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkb206IERvY3VtZW50O1xuICBwcml2YXRlIHJlYWRvbmx5IGlzQnJvd3NlcjogYm9vbGVhbjtcbiAgcHJpdmF0ZSBsaW5rQ2Fub25pY2FsITogSFRNTExpbmtFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgQEluamVjdChOQl9ET0NVTUVOVCkgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBhbnksXG4gICkge1xuICAgIHRoaXMuaXNCcm93c2VyID0gaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCk7XG4gICAgdGhpcy5kb20gPSBkb2N1bWVudDtcblxuICAgIGlmICh0aGlzLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5jcmVhdGVDYW5vbmljYWxUYWcoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjcmVhdGVDYW5vbmljYWxUYWcoKSB7XG4gICAgdGhpcy5saW5rQ2Fub25pY2FsID0gdGhpcy5kb20uY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIHRoaXMubGlua0Nhbm9uaWNhbC5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdjYW5vbmljYWwnKTtcbiAgICB0aGlzLmRvbS5oZWFkLmFwcGVuZENoaWxkKHRoaXMubGlua0Nhbm9uaWNhbCk7XG4gICAgdGhpcy5saW5rQ2Fub25pY2FsLnNldEF0dHJpYnV0ZSgnaHJlZicsIHRoaXMuZ2V0Q2Fub25pY2FsVXJsKCkpO1xuICB9XG5cbiAgdHJhY2tDYW5vbmljYWxDaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5pc0Jyb3dzZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICAgIGZpbHRlcigoZXZlbnQpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCksXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JCksXG4gICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMubGlua0Nhbm9uaWNhbC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLmdldENhbm9uaWNhbFVybCgpKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDYW5vbmljYWxVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5kb20ubG9jYXRpb24ub3JpZ2luICsgdGhpcy5kb20ubG9jYXRpb24ucGF0aG5hbWU7XG4gIH1cbn1cbiJdfQ==