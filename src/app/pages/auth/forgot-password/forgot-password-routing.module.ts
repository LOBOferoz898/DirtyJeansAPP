import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotPasswordPage } from './forgot-password.page';
import { AuthAdminPage } from '../auth-admin/auth-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotPasswordPage
  },

  {
    path: 'auth-admin',
    component: AuthAdminPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgotPasswordPageRoutingModule {}
