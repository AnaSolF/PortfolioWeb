import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AboutMeModule } from 'src/app/Models/about-me/about-me.module';
import { AuthService } from 'src/app/Services/auth.service';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  providers: [NgbPopoverConfig],
})
export class AboutMeComponent implements OnInit {

  @Input()
  datosActuales: AboutMeModule = { id: "", nombre: "", telefono: "", ciudad: "", pais: "", parrafo: ""};
  ruta: any = "SobreMi";
  switch: boolean = false;

  @Input()
  nuevosDatos: AboutMeModule = { id: "", nombre: "Su nombre", telefono: "3510000000", ciudad: "Su ciudad", pais: "Su país", parrafo: ""};

  id: string = "31";
  token!: any;
  mostrar!: boolean;


  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    config: NgbPopoverConfig
  ) {
    config.placement = 'end';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
    this.authService.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    });
    this.listarDatos();
  };

  listarDatos() {
    this.portfolioService.getUnElemento(this.ruta, this.id).subscribe(
      res => {
        this.nuevosDatos = res;
      },
    )
  }

  editarDatos() {
    this.portfolioService.saveElemento(this.ruta, this.nuevosDatos).subscribe(
      res => {
        this.nuevosDatos = res;
        this.edit();
      }
    )
  }

  edit() {
    this.switch = !this.switch;
    this.mostrar == false;
  }

  btnLog() {
    this.authService.logIn()
  }

  public logIn(): boolean {
    return (localStorage.getItem("auth_token")) === this.token;
  }
}
