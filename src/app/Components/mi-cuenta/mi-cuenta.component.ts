import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})

export class MiCuentaComponent implements OnInit {
  mostrar: boolean = false;
  parentMessage: any = false;
  buttonMessage: string = "Inicio";
  
  constructor(private authService: AuthService) {
  }

  ngOnInit(): void { }

  mostrarBtn() {
    this.authService.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    });
  }

  //cerrar sesión
  logOut() {
    localStorage.removeItem("token_auth");
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }

}
