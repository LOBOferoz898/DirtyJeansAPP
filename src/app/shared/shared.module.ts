import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { CustomInputComponent } from './components/custom-input/custom-input.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoAdminComponent } from './components/logo-admin/logo-admin.component';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    LogoAdminComponent,
    AddUpdateProductComponent
  ],
  exports: [
    HeaderComponent,
    CustomInputComponent,
    LogoComponent,
    LogoAdminComponent,
    ReactiveFormsModule,
    AddUpdateProductComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
