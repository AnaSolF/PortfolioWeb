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
  email!: string;
  password!: string;
  content: any;
  constructor(private portfolioService: PortfolioService,
    private router: Router,
    private modalService: NgbModal) { };
  
    login() {
      console.log(this.email);
      console.log(this.password);
    }

}
