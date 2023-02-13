import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBaseService {
urlBase: any = "http://localhost:8080/api/";

  constructor() { }
}
