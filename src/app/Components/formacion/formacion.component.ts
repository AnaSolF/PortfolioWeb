import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/Models/formacion/formacion.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css']
})
export class FormacionComponent {

  lista: any = [];
  formacionActual: Formacion = { id: "", titulo: "", descripcion: "", imagen: "" };
  nuevaFormacion: Formacion = { id: "", titulo: "", descripcion: "", imagen: "" };

  ruta: any = "formacion";
  id: string = "";
  mostrar: boolean= true;

  constructor(private portfolioService: PortfolioService,
    private router: Router) { }
  
    ngOnInit(): void {
      this.listarForm();
    }
  
  listarForm() {
    this.portfolioService.getElements(this.ruta).subscribe(
      res => {
        this.lista = res;
      },
    );
  }
  
  eliminar(id: string) {
    this.portfolioService.deleteElemento(this.ruta, id).subscribe(
      res => { this.ngOnInit() },
    );
  }

  mostrarButtons() {
    this.mostrar = !this.mostrar;
  }
  
  guardarImg() {
    
  }

}
