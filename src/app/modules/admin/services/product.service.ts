import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http'

import Product from '../products/product.model';
import {environment} from '../../../../environments/environment'

@Injectable()
export class ProductoService{

private baseURL:string =environment.baseUrl;
private endpoint:string ='products'; 


   private products : Product[] = [ 
        { id:100 , 
        name :'GATO' , 
        detail : 'vehiculo',
        price: 10.0 , stock : 10  
        } , 
        { id:101 , 
          name :'PERRO' , 
          detail : 'vivienda',
          price: 10.0 , 
          stock : 20  }   ];



    constructor( private http:HttpClient )
    {

    }

    getProducts() {
        return this.http.get(`${this.baseURL}${this.endpoint}`);
      }


    getProduct(id: number) {
        return this.http.get(`${this.baseURL}${this.endpoint}/${id}`);
      }


eliminarProduct( ide:number )
{  // console.log(this.products);
   // return true;

    return this.http.delete(`${this.baseURL}${this.endpoint}/${id}`);
}

createProduct(product: Product) {
    const url = `${this.baseURL}${this.endpoint}`;
    return this.http.post(url, product);
  }

  updateProduct(product: Product) {
    const url = `${this.baseURL}${this.endpoint}/${product.id}`;
    return this.http.put(url, product);
  }


metodogenerico(  )
{   console.log('METODO INVOCADO');
}




}