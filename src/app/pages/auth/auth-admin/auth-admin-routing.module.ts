import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthAdminPage } from './auth-admin.page';
import { ForgotPasswordPage } from '../forgot-password/forgot-password.page';
import { SignUpPage } from '../sign-up/sign-up.page';



const routes: Routes = [
  {
    path: '',
    component: AuthAdminPage
  },

  { path: 'forgot-password', 
    component: ForgotPasswordPage 
  },

  {
    path: 'sign-up',
    component: SignUpPage
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthAdminPageRoutingModule {}
