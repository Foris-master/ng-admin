import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { NbAuthService, NbTokenStorage } from "@nebular/auth";
import { GLOBALS } from "./globals";
// import { LocalStorageService } from '../local-storage/local-storage.service';
// import { AUTH_TOKEN } from '../auth/auth.models';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: NbAuthService,
    private serviceToken: NbTokenStorage
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
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
