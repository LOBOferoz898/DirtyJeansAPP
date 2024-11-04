import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeAdminPage } from './home-admin.page';
import { ProductosPage } from '../productos/productos.page';
import { ColaboradoresPage } from '../colaboradores/colaboradores.page';
import { InformePagosPage } from '../informe-pagos/informe-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAdminPage
  },
  {
    path: 'productos',
    component: ProductosPage  
  },
  {
    path: 'colaboradores',
    component: ColaboradoresPage
  },
  {
    path: 'informe-pagos',
    component: InformePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeAdminPageRoutingModule {}
