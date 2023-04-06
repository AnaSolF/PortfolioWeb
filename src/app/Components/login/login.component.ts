import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  registro: RegisterModule = { email: "", password: "" };
  token: any;
  content: any;
  ruta: string = "login"
  respuesta!: any;
  mostrar: boolean = false;
  constructor(private portfolioService: PortfolioService,
    private router: Router,
    private modalService: NgbModal) { };
    
  //Autenticación

  // login(email: string, password: string) {
  //   this.portfolioService.saveElemento(this.ruta, this.registro).subscribe((resp: any)=> {
  //     this.router.navigate(["banner"]);
  //     localStorage.setItem("auth_token", resp.token);
  //   })
  // }

  mostrarButtons() {
    this.mostrar = !this.mostrar;
  }

  login(email: string, password: string) {
    this.portfolioService.saveElemento(this.ruta, this.registro).subscribe(
      (res: any) => {
        
        if (res) {
          this.token = (Math.random() * 10).toFixed(5).slice(0, 8);
          localStorage.setItem("auth_token", this.token);
          // this.logIn() 
          this.router.navigate(["/mi-cuenta"])
        } else {
          alert("Email o password incorrecto")
          this.closeModal();
        }
      }
    )
  }

  // logIn() {
  //   if (this.token != null) {
  //     this.mostrar = !this.mostrar;
  //   }
    
  // }


  //cerrar sesión
  logOut() {
   
  };

  closeModal() {
  
  }
  //verificar sesión de usuario 
  //Ingresar en los ngIf de los botones.
  

}
