import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { PortfolioService } from 'src/app/Services/portfolio.service';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id!: string;
  suEmail!: any;
  ruta: any;

  constructor(
    private portfolioService: PortfolioService,
    private authService: AuthService,
  ){ }

  ngOnInit(): void {
  }
  

}
