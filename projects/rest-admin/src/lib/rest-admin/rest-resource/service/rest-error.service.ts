import { Injectable } from '@angular/core';
import { GLOBALS } from '../../../utils/globals';
import { Router } from '@angular/router';
import { RestShareService } from './rest-share.service';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class RestErrorService {
  constructor(
    private translate: TranslateService,
    private router: Router,
    private restShare: RestShareService
  ) {}

  handleError(error, innerHTML = true) {
    let message = '';
    let errors = {};
    try {
      if (error?.error?.error?.errors) {
        errors = error?.error?.error?.errors;
      } else if (error?.error?.errors) {
        errors = error?.error?.errors;
      } else if (error?.errors) {
        errors = error?.errors;
      } else {
        errors = error;
      }
    } catch (error) {
      console.log(error, 'error ======= > ');
    }
    switch (error.status) {
      case 401:
        localStorage.removeItem(GLOBALS.AUTH_APP_TOKEN);
        setTimeout(() => {
          this.router.navigate(['/login']);
          this.restShare.setLoader(false);
        }, 500);
        break;
      case 422:
        for (const key in errors) {
          message += errors[key].join(' ');
          if (innerHTML) {
            message += '<br>';
          }
        }
        break;
      case 403:
        message = this.translate.instant(`msg-not-authorized`);
        this.restShare.setLoader(false);
        break;
      case 404:
        message = this.translate.instant(`msg-not-found`);
        this.restShare.setLoader(false);
        break;
      case 500:
        message = this.translate.instant(`msg-internal-error`);
        this.restShare.setLoader(false);
        break;

      default:
        message = this.translate.instant(`msg-internal-error`);
        this.restShare.setLoader(false);
        break;
    }

    return message;
  }
}
