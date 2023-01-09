import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { RestAdminModule } from 'rest-admin';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => RestAdminModule,
  },
  // { path: "", redirectTo: "admin", pathMatch: "full" },
  { path: '**', redirectTo: '/' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
