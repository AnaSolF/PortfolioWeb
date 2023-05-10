import { EventEmitter, Injectable, Output } from '@angular/core';
import { RegisterModule } from '../Models/register/register.module';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token!: any;
  mostrar!: any;
  location: any;
  idUsuario: any;
  rutaAuthenticate: any;
  usuario: any;
  modelo: RegisterModule = { email: "", password: "", token: 0 };
  lista: any = [];

  constructor(private portfolioService: PortfolioService) { }

  logIn() {
    this.token = localStorage.getItem("auth_token");
    if (this.token != null) {
      this.mostrar == true
    }
    return this.mostrar;
  }

  async mostrarButtons(): Promise<boolean> {
    const [id, tokenValido] = await Promise.all([
      localStorage.getItem("id"),
      this.compararToken("authenticate", localStorage.getItem("id") ?? "0")
    ]);
    return id !== null && id !== "0" && tokenValido;
  }

  compararToken(rutaAuthenticate: string, idUsuario: string): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.portfolioService.getUnElemento(rutaAuthenticate, idUsuario).subscribe(
        res => {
          this.modelo = res;
          this.token = localStorage.getItem("token_auth")?.toString();
          const resultado = this.token === (this.modelo.token).toString();
          resolve(resultado);
        },
        error => {
          reject(error);
        }
      );
    });
  }

}
