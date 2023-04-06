import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioWeb';
  mostrar: boolean = false;

mostrarButtons() {
    this.mostrar = !this.mostrar;
  }
  
}


