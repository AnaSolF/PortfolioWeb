import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  datosRegistrados: RegisterModule = { email: "", password: "" };
  confirmPassword!: string;
  ruta: string = "authenticate";
  respuesta: any = null;

  constructor(
  private portfolioService: PortfolioService,
  private router: Router){};

  ngOnInit(): void { };

  registro() {
    if (this.datosRegistrados.password == this.confirmPassword) {
      this.guardarRegistro()
    }else(alert("Las contraseñas no coinciden"))
  }

  guardarRegistro() {
    this.portfolioService.saveElemento(this.ruta, this.datosRegistrados).subscribe(
      res => {
        if (res === true) {
          this.router.navigate(['/login']);
          alert("Registro exitoso!");
        } else {
          alert("Error en el registro");
        }
      },
      error => {
        alert("Error en la comunicación con el servidor");
      }
    );
  }
  
  /*guardarRegistro() {
    this.portfolioService.saveElemento(this.ruta, this.datosRegistrados).subscribe(
      res => this.router.navigate(["/login"]),
    )
    alert("Registro exitoso!")
  };
  */
}
