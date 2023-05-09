import { Component } from '@angular/core';
import { OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from 'src/app/Models/skills/skills.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { AuthService } from 'src/app/Services/auth.service';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [NgbPopoverConfig],
})

export class SkillsComponent implements OnInit {
  @Input()
  lista: any = [];
  @Input()
  skillActual: Skills = { id: "", tarea: "HTML", porcentaje: "80" };
  @Input()
  nuevaSkill: Skills = { id: "", tarea: "", porcentaje: "" };
  ruta: any = "tareas";
  id: string = "";
  switch: boolean = false;
  porcentaje!: number;
  content: any = "";
  titulo: any = "Editar";
  mostrar!: boolean;

  constructor(
    private portfolioService: PortfolioService,
    private auth: AuthService,
    private router: Router,
    private modalService: NgbModal,
    config: NgbPopoverConfig
  ) {
  config.placement = 'end';
  config.triggers = 'hover';
  };

  ngOnInit(): void {
    this.auth.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    });
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

  
  
}

