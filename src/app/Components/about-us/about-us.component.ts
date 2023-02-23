import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { UrlBaseService } from 'src/app/Services/url-base.service';
import { AboutUsModule } from 'src/app/Models/about-us/about-us.module';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  datosActuales: AboutUsModule = { id: "", nombre: "", telefono: "", ciudad: "", pais: "", parrafo: "" };
  ruta: any = "SobreMi";
  switch: boolean = false;
  nuevosDatos: AboutUsModule = { id: "", nombre: "", telefono: "", ciudad: "", pais: "", parrafo: "" };
  id: string = "31";

  constructor(
    private portfolioService: PortfolioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
     this.listarDatos()
  };

  listarDatos() {
    this.portfolioService.getUnElemento(this.ruta, this.id).subscribe(
      res => {
        this.nuevosDatos = res;
        console.log(this.nuevosDatos)
      },
    )
  }

  editarDatos() {
    this.portfolioService.saveElemento(this.ruta, this.nuevosDatos).subscribe(
      res => {
        this.nuevosDatos = res;
        console.log(res)
      }
    )
  }

  edit() {
    this.switch = !this.switch;
  }

}
