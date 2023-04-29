import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { AuthService } from 'src/app/Services/auth.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {
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
  parentMessage: any = false;
  buttonMessage: string = "Portfolio";

  constructor(
    private modalService: NgbModal,
    private portfolioService: PortfolioService,
    private authService: AuthService,
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
    localStorage.removeItem("token_auth");
    this.reloadPage();
  }

  reloadPage() {
    window.location.reload();
  }
}