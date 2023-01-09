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
import { TranslateModule } from '@ngx-translate/core';
import { RestAdminConfigService } from '../rest-admin/rest-resource/service/rest-admin-config.service';

@NgModule({
  declarations: [],
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
  ],
})
export class AuthModule {}
