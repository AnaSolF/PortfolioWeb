import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Projects } from 'src/app/Models/projects/projects.module';
import { AuthService } from 'src/app/Services/auth.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  providers: [NgbPopoverConfig],
})

export class ProyectosComponent implements OnInit {
  lista: any = [];
  nuevoProyecto: Projects = { destacado: "", titulo: "", texto: "", id: "" }
  proyectoActual: any = { destacado: "", titulo: "", texto: "", id: "" }
  ruta: any = "proyectos";
  id: string = "";
  mostrar!: boolean;
  image!: any;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
    private auth: AuthService,
    config: NgbPopoverConfig,
  ) {

    config.placement = 'end';
    config.triggers = 'hover';
  }

  ngOnInit(): void {
    this.auth.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    });
    this.listarProyectos();
  }

  listarProyectos() {
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
