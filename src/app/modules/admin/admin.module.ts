import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './common/header/header.components';
import { FooterComponent } from './common/footer/footer.component';
import {ProductsComponent} from './products/products.component';
import { ProductoService } from './services/product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent ,ProductsComponent, ProductNewComponent, ProductEditComponent] ,
  imports: [
    CommonModule
    ,RouterModule
  ],
  exports: [HeaderComponent,FooterComponent ,ProductsComponent ,ProductNewComponent ,ProductEditComponent ]   ,
  providers :[ProductoService]
})
export class AdminModule { }

