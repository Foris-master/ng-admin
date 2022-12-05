import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { NbAuthService } from "@nebular/auth";
import { tap } from "rxjs/operators";
import { GLOBALS } from "./globals";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router) {}

  canActivate() {
    const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);
    const authApp = authJson ? JSON.parse(authJson) : {};
    
    if (authApp && authApp?.value) return true;
    else {
      this.router.navigateByUrl("/auth/login");
      return false;
    }
  }
}
