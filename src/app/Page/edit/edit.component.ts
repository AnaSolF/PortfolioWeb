import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills/skills.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string = "";
  skillActual: any = { id: "", tarea: "", porcentaje: "" };
  ruta: string = "tareas";
  @Input()
  switch: boolean = true;
  @Input()
  mostrar: boolean = false;
  @Input()
  titulo: string = "Buenos días";
  lista: any;
  mostrarSw = 1;
  // @Input()
  // nombre = '';
  // @Input()
  // cif!: string;
  // @Input()
  // direccion: string = "Los Nogales 3804";
  
  constructor( private portfolioService: PortfolioService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.portfolioService.getUnElemento(this.ruta, this.id).subscribe(
        res => { this.skillActual = res },
    )
  }

  guardar() {
    this.portfolioService.editarElemento(this.ruta, this.id, this.skillActual).subscribe(
      res => {
        this.skillActual = res
         this.router.navigate(["/skills"])},
      )
  }

  edit() {
    this.switch = !this.switch;
  }

}
