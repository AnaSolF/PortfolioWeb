import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/Models/skills/skills.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  nuevaSkill: Skills = { id: "", tarea: "", porcentaje: "" };
  ruta: any = "tareas";
  id: string = "";
  switch: boolean = false;
  porcentaje!: number;

  constructor(private portfolioService: PortfolioService, private router: Router) {
  }

  ngOnInit(): void { }

  agregarSkill() {
    this.portfolioService.saveElemento(this.ruta, this.nuevaSkill).subscribe(
      res => this.router.navigate(["/skills"])
    )
  }

}
