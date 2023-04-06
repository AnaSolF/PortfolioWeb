import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Projects { 

  destacado!: string;
  titulo!: string;
  texto!: string;
  id!: string;
  constructor(destacado:String = "", titulo:String = "", text:String = "", id: String = "" ) {}
}
