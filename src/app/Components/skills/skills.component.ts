import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills/skills.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  lista: any = [];
  skillActual: Skills = {id:"", tarea: "", porcentaje: "" };
  ruta: any = "tareas"; 
  id: string = "";
  

  // switch: boolean = false;

  constructor(private portfolioService: PortfolioService, private router: Router) { };

  ngOnInit(): void {
    this.listarSkills();
  }


  listarSkills() {
    this.portfolioService.getElements(this.ruta).subscribe(
      res => {
        this.lista = res;
      console.log(this.lista)},
      err => console.log(err)
    )
  }
  // listarSkills() {
  //   this.portfolioService.getElements(this.ruta).subscribe(
  //     res => { this.lista = res; },
  //     err => console.log(err),
  //   );
  // }

  eliminar(id: string) {
    this.portfolioService.deleteElemento(this.ruta, id).subscribe(
    res => { this.ngOnInit() },
    err=>console.log(err)
   );
 }

  // inputEditar(id: Tarea) {
  //   this.switch = !this.switch;
  // }
  
}

