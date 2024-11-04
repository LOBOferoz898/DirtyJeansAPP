import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformePagosPage } from './informe-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: InformePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformePagosPageRoutingModule {}
