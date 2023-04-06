import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgbNavConfig, NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterModule } from 'src/app/Models/register/register.module';
import { AuthService } from 'src/app/Services/auth.service';
import { PortfolioService } from 'src/app/Services/portfolio.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
	// standalone: true,
	
	providers: [NgbNavConfig], // add NgbNavConfig to the component providers
})
export class NavBarComponent  {
	ruta: string = "login";
	registro: RegisterModule = { email: "", password: "" };
	mostrar!: boolean;
	constructor(config: NgbNavConfig,
	private portfolioService: PortfolioService, private authService : AuthService) {
		// customize default values of navs used by this component tree
		config.destroyOnHide = false;
		config.roles = false;	
	}

	mostrarButtons() {
		this.mostrar = !this.mostrar;
	  }

	btnLog() { 
		this.authService.logIn()
		
	}
  

}
