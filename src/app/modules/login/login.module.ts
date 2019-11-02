import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';



@NgModule({
  declarations: [SigninComponent, LoginComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [SigninComponent ]   

})
export class LoginModule { }
