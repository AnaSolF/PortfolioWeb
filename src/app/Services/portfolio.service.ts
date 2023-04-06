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
  ruta: any;
  url = `${this.baseUrl.urlBase}`;

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

}

