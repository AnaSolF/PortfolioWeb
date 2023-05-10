import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/Models/projects/projects.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-agregar-pro',
  templateUrl: './agregar-pro.component.html',
  styleUrls: ['./agregar-pro.component.css']
})
export class AgregarProComponent implements OnInit {

  nuevoPro: Projects = { id: "", titulo: "", texto: "" };
  ruta: string = "proyectos"
  constructor(private portfolioService: PortfolioService, private router: Router) { }

  agregarPro() {
    this.portfolioService.saveElemento(this.ruta, this.nuevoPro).subscribe(
      res => this.router.navigate(["/proyectos"])
    )
  }

  ngOnInit(): void {
  }

}
