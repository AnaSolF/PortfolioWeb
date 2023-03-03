import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  switch: boolean = false;
  mostrar: boolean = true;
  titulo: string = "Hola"
  
  edit() {
    this.switch = !this.switch;
  }

  mostrarInput() {
    this.mostrar = !this.mostrar;
  }

}
