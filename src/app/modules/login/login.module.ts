import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [SigninComponent ]   

})
export class LoginModule { }
