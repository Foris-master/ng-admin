import { Injectable } from "@angular/core";
import { HttpResponse, HttpHeaders, } from "@angular/common/http";
import { map } from "rxjs/operators";
import * as i0 from "@angular/core";
export class PaginationInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe(map((event) => {
            if (event instanceof HttpResponse) {
                // console.log(event, "one");
                if (event.body.total) {
                    // console.log(event, "two");
                    let newHeaders = new HttpHeaders({
                        "X-Total-Count": String(event.body.total),
                    });
                    let newEvent = event.clone({ headers: newHeaders });
                    newEvent.headers.set("X-Total-Count", String(event.body.total));
                    // console.log(newEvent);
                    return newEvent;
                }
                return event;
            }
            return event;
        }));
    }
}
PaginationInterceptor.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PaginationInterceptor, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
PaginationInterceptor.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PaginationInterceptor });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.1.5", ngImport: i0, type: PaginationInterceptor, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3Jlc3QtYWRtaW4vc3JjL2xpYi91dGlscy9wYWdpbmF0aW9uLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUtMLFlBQVksRUFDWixXQUFXLEdBQ1osTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBR3JDLE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsZ0JBQWUsQ0FBQztJQUVoQixTQUFTLENBQ1AsT0FBNkIsRUFDN0IsSUFBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDakIsSUFBSSxLQUFLLFlBQVksWUFBWSxFQUFFO2dCQUNqQyw2QkFBNkI7Z0JBQzdCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ3BCLDZCQUE2QjtvQkFDN0IsSUFBSSxVQUFVLEdBQUcsSUFBSSxXQUFXLENBQUM7d0JBQy9CLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7cUJBQzFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQ3BELFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNoRSx5QkFBeUI7b0JBRXpCLE9BQU8sUUFBUSxDQUFDO2lCQUNqQjtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7a0hBM0JVLHFCQUFxQjtzSEFBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG4gIEh0dHBSZXNwb25zZSxcbiAgSHR0cEhlYWRlcnMsXG59IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBtYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25JbnRlcmNlcHRvciBpbXBsZW1lbnRzIEh0dHBJbnRlcmNlcHRvciB7XG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8dW5rbm93bj4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+IHtcbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCkucGlwZShcbiAgICAgIG1hcCgoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBIdHRwUmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgXCJvbmVcIik7XG4gICAgICAgICAgaWYgKGV2ZW50LmJvZHkudG90YWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LCBcInR3b1wiKTtcbiAgICAgICAgICAgIGxldCBuZXdIZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgXCJYLVRvdGFsLUNvdW50XCI6IFN0cmluZyhldmVudC5ib2R5LnRvdGFsKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IG5ld0V2ZW50ID0gZXZlbnQuY2xvbmUoeyBoZWFkZXJzOiBuZXdIZWFkZXJzIH0pO1xuICAgICAgICAgICAgbmV3RXZlbnQuaGVhZGVycy5zZXQoXCJYLVRvdGFsLUNvdW50XCIsIFN0cmluZyhldmVudC5ib2R5LnRvdGFsKSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdFdmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdFdmVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGV2ZW50O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBldmVudDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19