import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UrlBaseService } from './url-base.service';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  urlBase!: any;

  constructor(private http: HttpClient, private baseUrl: UrlBaseService, private router: Router) { }
  urlParametro: any;
  url = `${this.baseUrl.urlBase}`;

  getElements(urlParametro: any): Observable<any> {
    return this.http.get(this.url + urlParametro)
  }

  getUnElemento(urlParametro: any, id: string): Observable<any> {
    return this.http.get(this.url + urlParametro + "/" + id);
  }

  saveElemento(urlParametro: any, tarea: any): Observable<any> {
    return this.http.post(this.url + urlParametro, tarea)
  }

  editarElemento(urlParametro: any, id: string, tarea: any): Observable<any> {
    return this.http.put(this.url + urlParametro + "/" + id, tarea)
  }

  deleteElemento(urlParametro: any, id: string): Observable<any> {
    return this.http.delete(this.url + urlParametro + "/" + id);
  }

  login(email: string, password: string) {
    this.http.post(this.url + this.urlParametro + "/authenticate", { email: email, password: password }).subscribe((resp: any)=> {
      this.router.navigate(["banner"]);
      localStorage.setItem("auth_token", resp.token);
    })
  }

  //cerrar sesión
  logOut() {
    localStorage.removeItem("token");
  };
  
  //verificar sesión de usuario
  public get logIn(): boolean{
    return (localStorage.getItem("token")) !== null;
  }

}

