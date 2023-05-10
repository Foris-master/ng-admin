import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AdditionalComponent } from './additionalcomponent/additional.component';

const routes: Routes = [
  // { path: '**', redirectTo: '/' },

  {
    path: 'ecommerce',
    component: AdditionalComponent,
    // canActivate: [isAuthGuard],
    // data: { title: extract('Conversations') },
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
