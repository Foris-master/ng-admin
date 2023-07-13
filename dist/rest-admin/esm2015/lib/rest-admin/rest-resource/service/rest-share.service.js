import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class RestShareService {
    constructor() {
        this.listLoader = false;
    }
    setLoader(value) {
        this.listLoader = value;
    }
}
RestShareService.ɵfac = function RestShareService_Factory(t) { return new (t || RestShareService)(); };
RestShareService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: RestShareService, factory: RestShareService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RestShareService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdC1zaGFyZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3Jlc3QtYWRtaW4vcmVzdC1yZXNvdXJjZS9zZXJ2aWNlL3Jlc3Qtc2hhcmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sZ0JBQWdCO0lBRTNCO1FBREEsZUFBVSxHQUFHLEtBQUssQ0FBQztJQUNKLENBQUM7SUFFaEIsU0FBUyxDQUFDLEtBQWM7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQzs7Z0ZBTlUsZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07dUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlc3RTaGFyZVNlcnZpY2Uge1xuICBsaXN0TG9hZGVyID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBzZXRMb2FkZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmxpc3RMb2FkZXIgPSB2YWx1ZTtcbiAgfVxufVxuIl19