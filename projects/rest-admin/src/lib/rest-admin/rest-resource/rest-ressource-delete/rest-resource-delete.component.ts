import { ListConfig } from "../models/rest-resource.model";
import { Component, Input, OnInit } from "@angular/core";
import { NbDialogRef, NbDialogService } from "@nebular/theme";
import { RestResourceService } from "../service/rest-resource.service";

@Component({
  selector: "ngx-rest-resource-delete",
  templateUrl: "./rest-resource-delete.component.html",
  styleUrls: ["./rest-resource-delete.component.scss"],
})
export class RestResourceDeleteComponent {
  @Input() datas: any;
  @Input() title: string;
  @Input() listConfig: ListConfig;

  isSubmit = false;

  constructor(
    protected ref: NbDialogRef<RestResourceDeleteComponent>,
    private serviceRestResource: RestResourceService
  ) {}

  dismiss(val: boolean = false) {
    this.ref.close(val);
  }

  delete() {
    this.isSubmit = true;
    this.serviceRestResource
      .deleteResources(this.listConfig, this.datas.id)
      .subscribe(
        () => {
          this.isSubmit = false;
          this.dismiss(true);
        },
        (err) => {
          this.isSubmit = false;
          console.log(err);
        }
      );
  }
}
