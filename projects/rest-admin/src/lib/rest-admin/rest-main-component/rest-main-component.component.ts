import { RestLangService } from "./../rest-resource/service/rest-lang.service";
import {
  Compiler,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  NgModule,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { RestAdminConfigService } from "../rest-resource/service/rest-admin-config.service";
import { GLOBALS } from "../../utils/globals";
import { NgxPermissionsService } from "ngx-permissions";
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

  constructor(
    private serviceConfig: RestAdminConfigService,
    private activatedRoute: ActivatedRoute,
    private restLangService: RestLangService,
    private router: Router
  ) // private permissionsService: NgxPermissionsService
  {}

  ngOnInit(): void {
    this.restLangService.setInitialAppLanguage();
    // this.permissionsService.loadPermissions([]);
  }
}
