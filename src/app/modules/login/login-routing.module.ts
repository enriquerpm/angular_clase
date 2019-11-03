import {NgModule} from '@angular/core';
import {RouterModule,Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {LoginComponent} from './login.component';


const routes:Routes=[
{   path:'',
    component:LoginComponent,
    children:[
        {path:'sign-in' , component:SigninComponent },
        {path:'', redirectTo: 'sign-in',pathMatch: 'full'}
    ]
}
];

@NgModule({
    imports :[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LoginRoutingModule{}