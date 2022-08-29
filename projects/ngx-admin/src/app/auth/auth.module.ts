import { HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import {
  NbAuthModule,
  NbAuthSimpleToken,
  NbPasswordAuthStrategy,
} from "@nebular/auth";
import {
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
} from "@nebular/theme";
import { LoginComponent } from "./login/login.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { environment } from "../../environments/environment";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    TranslateModule,
    AuthRoutingModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    HttpClientModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",

          baseEndpoint: environment.urlBackend,
          login: {
            method: "post",
            endpoint: "/auth/signin",
            redirect: {
              success: "/",
              failure: null,
            },
          },

          token: {
            class: NbAuthSimpleToken,
            key: "data.token",
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: "email", // strategy id key.
          showMessages: {
            success: true,
            error: true,
          },
        },
      },
    }),
  ],
})
export class AuthModule {}
