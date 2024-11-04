import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformePagosPageRoutingModule } from './informe-pagos-routing.module';

import { InformePagosPage } from './informe-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformePagosPageRoutingModule
  ],
  declarations: [InformePagosPage]
})
export class InformePagosPageModule {}
