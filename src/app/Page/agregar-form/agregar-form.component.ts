import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/Models/formacion/formacion.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-agregar-form',
  templateUrl: './agregar-form.component.html',
  styleUrls: ['./agregar-form.component.css']
})
export class AgregarFormComponent implements OnInit{
  nuevaForm : Formacion = { id: "", titulo: "", descripcion: "", imagen: "" };
  ruta: string = "formacion";

  constructor(private portfolioService: PortfolioService, private router: Router) { }

  ngOnInit(): void { }
  
  agregarForm() {
    this.portfolioService.saveElemento(this.ruta, this.nuevaForm).subscribe(
      res =>this.router.navigate(["/formacion"])
    )
  }

}
