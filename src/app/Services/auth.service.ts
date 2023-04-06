import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: any;
  mostrar!: any;
  constructor() { }
  

  mostrarButtons() {
		this.mostrar = !this.mostrar;
	  }

  logIn() {
    this.token =  localStorage.getItem ( "auth_token" );
    if (this.token != null) {
      this.mostrar==true
    } 
    return this.mostrar;
  }
  
  //cerrar sesión
  logOut() {
  };

  // visible: boolean = true;
  // @Output() open: EventEmitter<any> = new EventEmitter();
  // @Output() close: EventEmitter<any> = new EventEmitter();

  // // <button class="Buttons" (click)="toggle()">Cerrar</button>
  // toggle() {
  //   this.visible = !this.visible;
  //   if (this.visible) {
  //     this.open.emit(null);
  //   } else {
  //     this.close.emit(null);
  //   }
  // }
}


	
