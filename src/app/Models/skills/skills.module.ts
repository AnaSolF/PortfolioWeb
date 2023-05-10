import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Skills {
  porcentaje!: string;
  tarea!: string;
  id!: string;

  constructor(id: String = "", tarea: String = "", porcentaje: String = "") {

  }
}
