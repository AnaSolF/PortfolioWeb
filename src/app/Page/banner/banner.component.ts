import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  content: any;
  title!: string;
  message: any;
  myModal: any;
  data: any;
  @Input()
  childMessage: string = "Login";

  constructor(private modalService: NgbModal) { }

  openModal() {
    this.modalService.open(this.content)
  };


}
