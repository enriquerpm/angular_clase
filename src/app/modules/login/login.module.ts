import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [SigninComponent, LoginComponent],
  imports: [
    CommonModule,FormsModule ,
    LoginRoutingModule
  ],
  exports: [SigninComponent ] ,
  providers:[]  

})
export class LoginModule { }
