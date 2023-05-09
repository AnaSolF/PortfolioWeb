import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { AuthService } from 'src/app/Services/auth.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  content: any;
  title!: string;
  message: any;
  myModal: any;
  data: any;
  mostrar: boolean = false;
  token: any;
  ruta: string = "authenticate";
  id!: any;
  modeloActual: RegisterModule = { email: "", password: "", token: 0 };
  @Input()
  childMessage!: any
  @Input()
  messageHome!: any;
  state!: any;
  @Input()
  mensajeBoton: string = "";

  constructor(
    private modalService: NgbModal,
    private portfolioService: PortfolioService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mostrarBtn()
  }

  openModal() {
    this.modalService.open(this.content)
  };


  mostrarBtn() {
    this.authService.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    });
  }

  //cerrar sesión
  logOut() {
    // this.messageHome == true;
    this.authService.compararToken(this.ruta, this.id)
    localStorage.removeItem("token_auth");
    localStorage.removeItem("id");
    this.reloadPage();
  }

  registro() {
    this.router.navigate(["/register"])
  }

  contacto() {
    this.router.navigate(["/contact"])
  }

  reloadPage() {
    window.location.reload();
  }
}
