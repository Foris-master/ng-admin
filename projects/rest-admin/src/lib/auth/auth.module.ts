import {
  REST_AUTH,
  STRATEGY_AUTH,
} from './../rest-admin/rest-resource/models/rest-resource.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NbAuthModule,
  NbAuthSimpleToken,
  NbPasswordAuthStrategy,
} from '@nebular/auth';
import {
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
} from '@nebular/theme';
import { LoginComponent } from './login/login.component';
import { TranslateModule } from '@ngx-translate/core';
import { RestAdminConfigService } from '../rest-admin/rest-resource/service/rest-admin-config.service';

const DEFAULT_VALUES: REST_AUTH = {
  strategy: STRATEGY_AUTH.EMAIL,
  baseEndpoint: '',
  loginEndPoint: '',
  redirectRouteAfterLogin: '',
  tokenLocationInResponse: '',
};

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
          name: 'email',

          baseEndpoint: 'https://api.marylis.com/api',
          login: {
            method: 'post',
            endpoint: '/auth/signin',
            redirect: {
              success: '/',
              failure: null,
            },
          },

          token: {
            class: NbAuthSimpleToken,
            key: 'data.token',
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 500, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email', // strategy id key.
          showMessages: {
            success: true,
            error: true,
          },
        },
      },
    }),
  ],
})
export class AuthModule {
  constructor(private restAdminConfigService: RestAdminConfigService) {}

  static forRoot(restConfig: REST_AUTH): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        RestAdminConfigService,
        { provide: 'restConfig', useValue: restConfig },
      ],
    };
  }
}
