import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { FormacionComponent } from './Components/formacion/formacion.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { FooterComponent } from './Page/footer/footer.component';
import { BannerComponent } from './Page/banner/banner.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgbModule, ModalDismissReasons, NgbModal, NgbModalConfig, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from './Services/portfolio.service';
import { UrlBaseService } from './Services/url-base.service';
import { AuthService } from './Services/auth.service';
import { ContactComponent } from './Components/contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './Components/modal/modal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EditComponent } from './Page/edit/edit.component';
import { AgregarComponent } from './Page/agregar/agregar.component';
import { NavBarComponent } from './Page/nav-bar/nav-bar.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    FormacionComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ModalComponent,
    EditComponent,
    AgregarComponent,
    NavBarComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule, 
    NgbModalModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],

  providers: [
    PortfolioService,
    UrlBaseService,
    NgbModalConfig,
    NgbModal,
    AuthService //Ver si usar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
