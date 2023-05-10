import { Component } from "@angular/core";
import { RestAdminConfigService } from "../../../rest-admin/rest-resource/service/rest-admin-config.service";

@Component({
  selector: "ngx-footer",
  styleUrls: ["./footer.component.scss"],
  template: `
    <span class="created-by"> <b>{{ serviceRestAdmin.siteName }}</b> copyright </span>
    <div class="socials">
      <a
        href="https://github.com/Foris-master/ngx-admin"
        target="_blank"
        class="ion ion-social-github"
      ></a>
    </div>
  `,
})
export class FooterComponent {
  constructor(
    public serviceRestAdmin: RestAdminConfigService,
  ) {
  }
}
