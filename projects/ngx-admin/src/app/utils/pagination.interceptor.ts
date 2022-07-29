import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class PaginationInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event: any) => {
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
      })
    );
  }
}
