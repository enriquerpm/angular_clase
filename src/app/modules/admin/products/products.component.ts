import { Component, OnInit } from '@angular/core';
import Product from './product.model';
import { ProductoService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

titulos : string[] = [ '#','nombre','detalle','precio','cantidad' ]

  products : Product[] ;

  constructor(
    private productService: ProductoService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  removeProduct(id: number) {
    this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(prod => prod.id !== id);
    });
  }
  
}
