import { Component, OnInit } from "@angular/core";
import { RestAdminConfigService } from "../rest-resource/service/rest-admin-config.service";

@Component({
  selector: "ngx-rest-main-component",
  styleUrls: ["./rest-main-component.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class RestMainComponentComponent implements OnInit {
  menu = [...this.serviceConfig.generateMenus()];

  constructor(private serviceConfig: RestAdminConfigService) {}

  ngOnInit(): void {}
}
