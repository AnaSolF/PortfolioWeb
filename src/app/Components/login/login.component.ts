import { Component, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  @Input() childMessage!: string;
  @Input() childTitle!: string;
  @Input() parentTitle!: string;
  // btn: string = " Login";


  content: any;
  constructor(private portfolioService: PortfolioService,
    private router: Router,
    private modalService: NgbModal) { };

}
