import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Formacion } from 'src/app/Models/formacion/formacion.module';
import { AuthService } from 'src/app/Services/auth.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.css'],
  providers: [NgbPopoverConfig],
})
export class FormacionComponent {

  lista: any = [];
  formacionActual: Formacion = { id: "", titulo: "", descripcion: ""};
  nuevaFormacion: Formacion = { id: "", titulo: "", descripcion: "" };

  ruta: any = "formacion";
  mostrar!: boolean;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
    private auth: AuthService,
    config: NgbPopoverConfig
  ) { 
    config.placement = 'end';
    config.triggers = 'hover';
  }
  
  ngOnInit(): void {
    this.auth.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    }); 
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
}
