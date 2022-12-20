import { Injectable } from "@angular/core";
import { HttpErrorResponse, } from "@angular/common/http";
import { tap } from "rxjs/operators";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/** Passes HttpErrorResponse to application-wide error handler */
export class HttpErrorInterceptor {
    constructor(injector, router) {
        this.injector = injector;
        this.router = router;
    }
    intercept(request, next) {
        return next.handle(request).pipe(tap({
            error: (err) => {
                if (err instanceof HttpErrorResponse) {
                    // const appErrorHandler = this.injector.get(ErrorHandler);
                    // appErrorHandler.handleError(err);
                    switch (err.status) {
                        case 401:
                            this.router.navigateByUrl("/auth/login");
                            break;
                        default:
                            break;
                    }
                }
            },
        }));
    }
}
HttpErrorInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor, deps: [{ token: i0.Injector }, { token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
HttpErrorInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpErrorInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.Injector }, { type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1lcnJvci5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi91dGlscy9odHRwLWVycm9yLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUtMLGlCQUFpQixHQUNsQixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBR3JDLGlFQUFpRTtBQUVqRSxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQW9CLFFBQWtCLEVBQVUsTUFBYztRQUExQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFbEUsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQztZQUNGLEtBQUssRUFBRSxDQUFDLEdBQVEsRUFBRSxFQUFFO2dCQUNsQixJQUFJLEdBQUcsWUFBWSxpQkFBaUIsRUFBRTtvQkFDcEMsMkRBQTJEO29CQUMzRCxvQ0FBb0M7b0JBQ3BDLFFBQVEsR0FBRyxDQUFDLE1BQU0sRUFBRTt3QkFDbEIsS0FBSyxHQUFHOzRCQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUN6QyxNQUFNO3dCQUVSOzRCQUNFLE1BQU07cUJBQ1Q7aUJBQ0Y7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztpSEF6QlUsb0JBQW9CO3FIQUFwQixvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFEaEMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEh0dHBFdmVudCxcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBFcnJvclJlc3BvbnNlLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbi8qKiBQYXNzZXMgSHR0cEVycm9yUmVzcG9uc2UgdG8gYXBwbGljYXRpb24td2lkZSBlcnJvciBoYW5kbGVyICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEVycm9ySW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluamVjdG9yOiBJbmplY3RvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpLnBpcGUoXG4gICAgICB0YXAoe1xuICAgICAgICBlcnJvcjogKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvLyBjb25zdCBhcHBFcnJvckhhbmRsZXIgPSB0aGlzLmluamVjdG9yLmdldChFcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgLy8gYXBwRXJyb3JIYW5kbGVyLmhhbmRsZUVycm9yKGVycik7XG4gICAgICAgICAgICBzd2l0Y2ggKGVyci5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgY2FzZSA0MDE6XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9hdXRoL2xvZ2luXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=