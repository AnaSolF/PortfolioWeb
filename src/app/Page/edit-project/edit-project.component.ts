import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projects } from 'src/app/Models/projects/projects.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit{
  
  proyectoActual: Projects = { id: "", destacado: "", titulo: "", texto: "" };
  id!: string;
  ruta : string = "proyectos"
  constructor( private portfolioService: PortfolioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getUnElemento(this.ruta, this.id).subscribe(
        res => { this.proyectoActual = res },
    )
  }
  guardar() {
    this.portfolioService.editarElemento(this.ruta, this.id, this.proyectoActual).subscribe(
      res => {
        this.proyectoActual = res
         this.router.navigate(["/proyectos"])},
      )
  }

  
}
