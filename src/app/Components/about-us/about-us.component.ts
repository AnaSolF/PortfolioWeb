import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { UrlBaseService } from 'src/app/Services/url-base.service';
import { AboutUsModule } from 'src/app/Models/about-us/about-us.module';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  lista: any = [];
  datosActuales: AboutUsModule = { id: "", nombre: "", telefono: "", ciudad: "", pais: "", parrafo: "" };
  ruta: any = "SobreMi"; 
  switch: boolean = false;

  constructor(private urlbase: UrlBaseService,
    private portfolioService: PortfolioService
  ) { }
  
  ngOnInit(): void { 
    this.listarDatos() 
  };
  
  listarDatos() {
    this.portfolioService.getElements(this.ruta).subscribe(
      res => {
        this.lista = res;
      console.log(this.lista)},
      err => console.log(err)
    )
  }
  edit() {
    this.switch = !this.switch;
  }

}
