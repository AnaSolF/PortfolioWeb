import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { UrlBaseService } from './url-base.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  urlBase!: any;

  constructor(private http: HttpClient, private baseUrl: UrlBaseService) { }

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

}

