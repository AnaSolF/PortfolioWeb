import { Component, Output, ViewChild } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from 'src/app/Models/skills/skills.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  @Input()
  lista: any = [];
  @Input()
  skillActual: Skills = { id: "", tarea: "HTML", porcentaje: "80" };
  @Input()
  nuevaSkill : Skills = { id: "", tarea: "", porcentaje: "" };
  ruta: any = "tareas";
  id: string = "";
  // content: any;
  switch: boolean = false;
  porcentaje!: number;
  content: any = "";
  titulo: any = "Editar";
  mostrar: boolean = false;

  constructor(private portfolioService: PortfolioService,
    private router: Router,
    private modalService: NgbModal) { };

  ngOnInit(): void {
    this.listarSkills();
  }

  listarSkills() {
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

  open(content: string) {
    this.modalService.open(this.content)
  };

  edit() {
    this.switch = !this.switch;
  }

  mostrarButtons() {
    this.mostrar = !this.mostrar;
  }


}

