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
  ruta: string = "authenticate";

  constructor(
  private portfolioService: PortfolioService,
  private router: Router){};

  ngOnInit(): void { };
  
  guardarRegistro() {
    this.portfolioService.saveElemento(this.ruta, this.datosRegistrados).subscribe(
      res =>this.router.navigate(["/login"])
  )
  };

}
