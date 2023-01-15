import { ListConfig } from '../models/rest-resource.model';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { RestResourceService } from '../service/rest-resource.service';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'ngx-rest-resource-delete',
  templateUrl: './rest-resource-delete.component.html',
  styleUrls: ['./rest-resource-delete.component.scss'],
})
export class RestResourceDeleteComponent {
  @Input() datas: any;
  @Input() title: string;
  @Input() listConfig: ListConfig;
  @Input() resourceName: string;

  isSubmit = false;

  constructor(
    protected ref: NbDialogRef<RestResourceDeleteComponent>,
    private serviceRestResource: RestResourceService,
    private notificationService: NotificationService
  ) {}

  dismiss(val: boolean = false) {
    this.ref.close(val);
  }

  delete() {
    let msg = {};
    this.isSubmit = true;
    this.serviceRestResource
      .deleteResources(this.listConfig, this.datas.id)
      .subscribe(
        () => {
          msg = {
            label: `msg-deleting-success`,
            resourceName: this.resourceName,
          };
          this.isSubmit = false;
          this.notificationService.successToast(msg);

          this.dismiss(true);
        },
        (err) => {
          msg = {
            label: `msg-deleting-fail`,
            resourceName: this.resourceName,
          };
          this.isSubmit = false;
          this.notificationService.dangerToast(msg);
        }
      );
  }
}
