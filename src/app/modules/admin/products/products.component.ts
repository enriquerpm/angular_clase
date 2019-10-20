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

  constructor( private productservice:ProductoService ) { }

  ngOnInit() 
  {
    this.products = this.productservice.getProduct();
  }

  retirar_producto( ide:number )
  {   console.log('METODO INVOCADO ' + ide  );
      const rpta =  this.productservice.eliminarProduct(ide);

    if(rpta)
    { console.log('RETIRADO ' + rpta  );

    //this.products = this.productservice.getProduct().filter(product => product.id !== ide );

    this.products = this.products.filter(product => product.id !== ide );

    }
  


  }



}
