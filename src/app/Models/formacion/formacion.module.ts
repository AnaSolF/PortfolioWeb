import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Formacion {
  id!: string;
  titulo!: string;
  descripcion!: string;
  imagen!: string;

  constructor(id: String, titulo: String, descripcion: String, imagen: String) {

  }

}
