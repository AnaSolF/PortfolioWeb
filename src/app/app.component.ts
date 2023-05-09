import { Component, OnInit } from '@angular/core';
import { ImagesService } from './Services/images.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PortfolioWeb';
  imagen: any;
  images!: any[];

  constructor(private imagesService: ImagesService) { }
  ngOnInit(): void {
    this.traerImagen() 
  }
  
  traerImagen() {
    return this.imagesService.getDatos().subscribe(data =>{
      this.imagen = data;
      return this.imagen;
  })
  }
}




