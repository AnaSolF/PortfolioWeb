import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Projects {

  titulo!: string;
  texto!: string;
  id!: string;
  constructor( titulo: String = "", text: String = "", id: String = "") { }
}
