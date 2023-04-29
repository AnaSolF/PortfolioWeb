import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-fixed',
  templateUrl: './btn-fixed.component.html',
  styleUrls: ['./btn-fixed.component.css']
})
export class BtnFixedComponent {
  parentMessage: any;
  constructor(private router: Router,) { }
  
}
