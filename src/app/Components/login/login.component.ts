import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { AuthService } from 'src/app/Services/auth.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  registro: RegisterModule = { email: "", password: "", token: 0 };
  ruta: string = "login"
  mostrar!: boolean;
  parentMessage: any;

  constructor(private portfolioService: PortfolioService,
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthService) {

  };

  login(email: string, password: string) {
    this.portfolioService.saveElemento(this.ruta, this.registro).subscribe(
      (res: any) => {

        if (res[0] != 0) {
          localStorage.setItem("id", res[0])
          localStorage.setItem("token_auth", res[1])
          this.reloadPage()
        } else {
          alert("Email o password incorrecto")
        }
      }
    )
  }

  reloadPage() {
    window.location.reload();
  }

  close() {
    this.modalService.dismissAll();
  }

}
