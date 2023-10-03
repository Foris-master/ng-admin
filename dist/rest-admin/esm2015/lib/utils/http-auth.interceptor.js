import { Injectable } from "@angular/core";
import { GLOBALS } from "./globals";
import * as i0 from "@angular/core";
import * as i1 from "@nebular/auth";
// import { LocalStorageService } from '../local-storage/local-storage.service';
// import { AUTH_TOKEN } from '../auth/auth.models';
export class HttpAuthInterceptor {
    constructor(authService, serviceToken) {
        this.authService = authService;
        this.serviceToken = serviceToken;
    }
    intercept(request, next) {
        const token = this.serviceToken.get();
        let lng = JSON.parse(localStorage.getItem(GLOBALS.LNG_KEY));
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`,
                "User-Locale": lng,
            },
        });
        return next.handle(request);
    }
}
HttpAuthInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpAuthInterceptor, deps: [{ token: i1.NbAuthService }, { token: i1.NbTokenStorage }], target: i0.ɵɵFactoryTarget.Injectable });
HttpAuthInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpAuthInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: HttpAuthInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.NbAuthService }, { type: i1.NbTokenStorage }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1hdXRoLmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmVzdC1hZG1pbi9zcmMvbGliL3V0aWxzL2h0dHAtYXV0aC5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxXQUFXLENBQUM7OztBQUNwQyxnRkFBZ0Y7QUFDaEYsb0RBQW9EO0FBR3BELE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFDVSxXQUEwQixFQUMxQixZQUE0QjtRQUQ1QixnQkFBVyxHQUFYLFdBQVcsQ0FBZTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7SUFDbkMsQ0FBQztJQUVKLFNBQVMsQ0FDUCxPQUE2QixFQUM3QixJQUFpQjtRQUVqQixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RDLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN0QixVQUFVLEVBQUU7Z0JBQ1YsYUFBYSxFQUFFLFVBQVUsS0FBSyxFQUFFO2dCQUNoQyxhQUFhLEVBQUUsR0FBRzthQUNuQjtTQUNGLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOztnSEFuQlUsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtcbiAgSHR0cFJlcXVlc3QsXG4gIEh0dHBIYW5kbGVyLFxuICBIdHRwRXZlbnQsXG4gIEh0dHBJbnRlcmNlcHRvcixcbn0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IE5iQXV0aFNlcnZpY2UsIE5iVG9rZW5TdG9yYWdlIH0gZnJvbSBcIkBuZWJ1bGFyL2F1dGhcIjtcbmltcG9ydCB7IEdMT0JBTFMgfSBmcm9tIFwiLi9nbG9iYWxzXCI7XG4vLyBpbXBvcnQgeyBMb2NhbFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vbG9jYWwtc3RvcmFnZS9sb2NhbC1zdG9yYWdlLnNlcnZpY2UnO1xuLy8gaW1wb3J0IHsgQVVUSF9UT0tFTiB9IGZyb20gJy4uL2F1dGgvYXV0aC5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cEF1dGhJbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IE5iQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlVG9rZW46IE5iVG9rZW5TdG9yYWdlXG4gICkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICBjb25zdCB0b2tlbiA9IHRoaXMuc2VydmljZVRva2VuLmdldCgpO1xuICAgIGxldCBsbmcgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEdMT0JBTFMuTE5HX0tFWSkpO1xuICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgIHNldEhlYWRlcnM6IHtcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgIFwiVXNlci1Mb2NhbGVcIjogbG5nLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gIH1cbn1cbiJdfQ==