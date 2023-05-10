import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  datosRegistrados: RegisterModule = { email: "", password: "", token: 0 };
  confirmPassword!: string;
  ruta: string = "authenticate";
  respuesta: any = null;

  constructor(
    private portfolioService: PortfolioService,
    private router: Router,
    config: NgbPopoverConfig) {
    config.placement = 'end';
    config.triggers = 'hover';
  };

  ngOnInit(): void { };

  registro() {
    if (this.datosRegistrados.password == this.confirmPassword) {
      this.guardarRegistro()
    } else (alert("Las contraseñas no coinciden"))
  }

  guardarRegistro() {
    this.portfolioService.saveElemento(this.ruta, this.datosRegistrados).subscribe(
      res => {
        if (res === true) {
          alert("Registro exitoso!");
          this.router.navigate(['/']);
        } else {
          alert("Error en el registro");
        }
      },
    );
  }
}
