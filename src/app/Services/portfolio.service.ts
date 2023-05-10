import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlBaseService } from './url-base.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';
import { RegisterModule } from '../Models/register/register.module';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  urlBase!: any;
  id!: string;
  ruta: any;
  url = `${this.baseUrl.urlBase}`;
  idUsuario: any;
  rutaAuthenticate: any;
  localStorageToken: any;
  usuario: any;
  modelo: RegisterModule = { email: "", password: "", token: 0 };
  lista: any = [];
  mostrar!: boolean;
  token: any;
  urlApi: any;

  constructor(private http: HttpClient,
    private baseUrl: UrlBaseService,
    private router: Router) { }


  getElements(ruta: any): Observable<any> {
    return this.http.get(this.url + ruta)
  }

  getUnElemento(ruta: any, id: string): Observable<any> {
    return this.http.get(this.url + ruta + "/" + id);
  }

  saveElemento(ruta: any, tarea: any): Observable<any> {
    return this.http.post(this.url + ruta, tarea)
  }

  editarElemento(ruta: any, id: string, tarea: any): Observable<any> {
    return this.http.put(this.url + ruta + "/" + id, tarea)
  }

  deleteElemento(ruta: any, id: string): Observable<any> {
    return this.http.delete(this.url + ruta + "/" + id);
  }

  mostrarButtons() {
    this.mostrar = false;
    this.idUsuario = localStorage.getItem("id") != null && localStorage.getItem("id") != "0" ? localStorage.getItem("id")?.toString() : "0";
    this.rutaAuthenticate = "authenticate";
    if (this.idUsuario != "0" && this.idUsuario != null) {
      this.getUnElemento(this.rutaAuthenticate, this.idUsuario).subscribe(
        res => {
          this.modelo = res;
          this.token = localStorage.getItem("token_auth")?.toString();
          this.mostrar = this.token == (this.modelo.token).toString();
          console.log(res);
        }
      )
    }
    return this.mostrar;
  }
}
