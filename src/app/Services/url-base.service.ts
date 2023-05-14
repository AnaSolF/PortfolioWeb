import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBaseService {
  urlBase: any = "https://proyectoback.onrender.com/";

  constructor() { }
}
