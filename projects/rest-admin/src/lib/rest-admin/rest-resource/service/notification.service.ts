import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition, NbToastrService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  positions = NbGlobalPhysicalPosition;
  constructor(
    private toastrService: NbToastrService,
    private translate: TranslateService
  ) {}

  showToast(position, status, msg) {
    this.toastrService.show(status || 'Success', msg, {
      position,
      status,
    });
  }

  //Toastr
  successToast(msg) {
    let msgInfo;

    if (typeof msg === 'string') {
      msgInfo = this.translate.instant(msg);
    } else {
      msgInfo = this.translate.instant(`${msg.label}`, {
        resourceName: msg.resourceName,
      });
    }
    this.showToast(this.positions.TOP_RIGHT, 'success', msgInfo);
  }

  warningToast(msg) {
    let msgInfo;

    if (typeof msg === 'string') {
      msgInfo = this.translate.instant(msg);
    } else {
      msgInfo = this.translate.instant(`${msg.label}`, {
        resourceName: msg.resourceName,
      });
    }
    this.showToast(this.positions.TOP_RIGHT, 'warning', msgInfo);
  }

  dangerToast(msg) {
    let msgInfo;

    if (typeof msg === 'string') {
      msgInfo = this.translate.instant(msg);
    } else {
      msgInfo = this.translate.instant(`${msg.label}`, {
        resourceName: msg.resourceName,
      });
    }
    this.showToast(this.positions.TOP_RIGHT, 'danger', msgInfo);
  }

  infoToast(msg) {
    let msgInfo;

    if (typeof msg === 'string') {
      msgInfo = this.translate.instant(msg);
    } else {
      msgInfo = this.translate.instant(`${msg.label}`, {
        resourceName: msg.resourceName,
      });
    }
    this.showToast(this.positions.TOP_RIGHT, 'info', msgInfo);
  }

  primaryToast(msg) {
    let msgInfo;

    if (typeof msg === 'string') {
      msgInfo = this.translate.instant(msg);
    } else {
      msgInfo = this.translate.instant(`${msg.label}`, {
        resourceName: msg.resourceName,
      });
    }
    this.showToast(this.positions.TOP_RIGHT, 'primary', msgInfo);
  }
}
