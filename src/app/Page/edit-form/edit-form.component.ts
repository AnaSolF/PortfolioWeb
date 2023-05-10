import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formacion } from 'src/app/Models/formacion/formacion.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  ruta: string = "formacion";
  formActual: Formacion = { id: "", titulo: "", descripcion: "", imagen: "" };
  id!: string;

  constructor(private portfolioService: PortfolioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getUnElemento(this.ruta, this.id).subscribe(
      res => { this.formActual = res },
    )
  }

  guardar() {
    this.portfolioService.editarElemento(this.ruta, this.id, this.formActual).subscribe(
      res => {
        this.formActual = res
        this.router.navigate(["/formacion"])
      },
    )
  }

}
