import { RestAdminConfigService } from "../rest-admin/rest-resource/service/rest-admin-config.service";
import * as i0 from "@angular/core";
import * as i1 from "./login/login.component";
import * as i2 from "@angular/common";
import * as i3 from "@ngx-translate/core";
import * as i4 from "./auth-routing.module";
import * as i5 from "@angular/forms";
import * as i6 from "@angular/router";
import * as i7 from "@nebular/theme";
import * as i8 from "@angular/common/http";
import * as i9 from "@nebular/auth";
export declare class AuthModule {
    private restAdminConfigService;
    constructor(restAdminConfigService: RestAdminConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AuthModule, [typeof i1.LoginComponent], [typeof i2.CommonModule, typeof i3.TranslateModule, typeof i4.AuthRoutingModule, typeof i5.FormsModule, typeof i6.RouterModule, typeof i7.NbAlertModule, typeof i7.NbInputModule, typeof i7.NbButtonModule, typeof i7.NbCheckboxModule, typeof i8.HttpClientModule, typeof i9.NbAuthModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AuthModule>;
}
