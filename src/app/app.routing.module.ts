import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './modules/login/signin/signin.component';
import { ProductsComponent } from './modules/admin/products/products.component';
import { ProductNewComponent } from './modules/admin/product-new/product-new.component';
import { ProductEditComponent } from './modules/admin/product-edit/product-edit.component';

const routes: Routes = [
    {   path: 'login',
        loadChildren:() => import('./modules/login/login.module').then(m=>m.LoginModule)
    },
    {   path: 'admin',
        loadChildren:() => import('./modules/admin/admin.module').then(m=>m.AdminModule)
    },
    {   path: 'admin/products/new',
        component: ProductNewComponent
    },
    {
        path: 'admin/products/:id',
        component: ProductEditComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'admin'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}






