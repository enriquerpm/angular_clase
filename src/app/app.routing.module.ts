import {NgModule, NgModule} from "@angular/core";
import { RouterModule ,Routes } from '@angular/router';
import {SigninComponent} from './modules/login/signin/signin.component';
import {ProductsComponent} from './modules/admin/products/products.component';
import { ProductoService } from './modules/admin/services/product.service';

const routes:Routes = 
[   {    path:'login',
         component:SigninComponent
    },
    {    path:'admin',
        component:ProductsComponent
    },
    {   path:'',
        redirectTo:'login'
    },
    {   path:'**',
        redirectTo:'admin'
    }
 ];






