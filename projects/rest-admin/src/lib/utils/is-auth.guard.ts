import { RestAdminConfigService } from './../rest-admin/rest-resource/service/rest-admin-config.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { GLOBALS } from './globals';

@Injectable()
export class isAuthGuard implements CanActivate {
  constructor(
    private restAdminConfig: RestAdminConfigService,
    private router: Router
  ) {}

  canActivate() {
    const authJson = localStorage.getItem(GLOBALS.AUTH_APP_TOKEN);

    if (!authJson) return true;
    else {
      this.router.navigateByUrl(
        this.restAdminConfig.restAuthParams.redirectRouteAfterLogin
      );
      return false;
    }
  }
}
