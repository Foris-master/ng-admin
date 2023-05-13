import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  NbAlertModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
} from '@nebular/theme';
import { TranslateModule } from '@ngx-translate/core';

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
