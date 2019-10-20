import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from './common/header/header.components';
import { FooterComponent } from './common/footer/footer.component';
import {ProductsComponent} from './products/products.component';
import { ProductoService } from './services/product.service';
import { ProductNewComponent } from './product-new/product-new.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent ,ProductsComponent, ProductNewComponent, ProductEditComponent] ,
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent,FooterComponent ,ProductsComponent ,ProductNewComponent ,ProductEditComponent ]   ,
  providers :[ProductoService]
})
export class AdminModule { }

