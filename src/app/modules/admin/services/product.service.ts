import { Injectable} from '@angular/core';
import Product from '../products/product.model';

@Injectable()
export class ProductoService{

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



    constructor()
    {

    }


    getProduct()
{
    return this.products;
}


eliminarProduct( ide:number ):boolean
{   console.log(this.products);



    
    return true;
}


metodogenerico(  )
{   console.log('METODO INVOCADO');
}




}