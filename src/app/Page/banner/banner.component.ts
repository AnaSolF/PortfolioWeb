import { Component } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
  
export class BannerComponent {
  content: any;

constructor(private modalService: NgbModal){}

openModal() {
  this.modalService.open(this.content)
};
}
