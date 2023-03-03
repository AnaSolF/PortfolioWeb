import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';

import { ActivatedRoute, Route, Router } from '@angular/router';
import { AboutMeModule } from 'src/app/Models/about-me/about-me.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Input()
  datosActuales: AboutMeModule = { id: "", nombre: "", telefono: "", ciudad: "", pais: "", parrafo: "" };
  ruta: any = "SobreMi";
  switch: boolean = false;
  @Input()
  nuevosDatos: AboutMeModule = { id: "", nombre: "Ana Sol", telefono: "3513285087", ciudad: "Córdoba", pais: "Argentina", parrafo: "Prueba." };
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
      },
    )
  }

  editarDatos() {
    this.portfolioService.saveElemento(this.ruta, this.nuevosDatos).subscribe(
      res => {
        this.nuevosDatos = res;
      }
    )
  }

  edit() {
    this.switch = !this.switch;
  }


}
