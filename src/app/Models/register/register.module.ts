import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RegisterModule {
  email: string = "";
  password: string = "";

  constructor(email: String, password: String ) {}
 }
