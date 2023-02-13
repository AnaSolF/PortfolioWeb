import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AboutUsModule {
  id!: String;
  nombre!: String;
  telefono!: String
  ciudad!: String
  pais!: String
  parrafo!: String

  constructor(id: String, nombre: String, telefono: String, ciudad: String, pais: String, parrafo: String) {
  }
 }
