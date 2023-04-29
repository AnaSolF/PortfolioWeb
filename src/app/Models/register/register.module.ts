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
  token: number = 0;

  constructor(email: String, password: String, token: Number) { }
}
