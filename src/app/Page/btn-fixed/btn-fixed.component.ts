import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbPopoverConfig, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-btn-fixed',
  templateUrl: './btn-fixed.component.html',
  styleUrls: ['./btn-fixed.component.css'],
  providers: [NgbPopoverConfig],
})
export class BtnFixedComponent implements OnInit {
  parentMessage: any;
  mostrar!: boolean;
  constructor(
    private router: Router,
    config: NgbPopoverConfig,
    private auth: AuthService,) {
    config.placement = 'end';
    config.triggers = 'hover';
  }
  ngOnInit(): void {
    this.auth.mostrarButtons().then((valorMostrar) => {
      this.mostrar = valorMostrar;
    });
  }

  inicio() {
    this.router.navigate(["/mi-cuenta"])
  }

}
