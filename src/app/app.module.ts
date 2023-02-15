import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { FormacionComponent } from './Components/formacion/formacion.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { FooterComponent } from './Page/footer/footer.component';
import { HeaderComponent } from './Page/header/header.component';
import { BannerComponent } from './Page/banner/banner.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { NgbModule, ModalDismissReasons, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { PortfolioService } from './Services/portfolio.service';
import { UrlBaseService } from './Services/url-base.service';
import { ContactComponent } from './Components/contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './Components/modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    FormacionComponent,
    ProyectosComponent,
    SkillsComponent,
    FooterComponent,
    HeaderComponent,
    BannerComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ModalComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [
    PortfolioService,
    UrlBaseService,
    NgbModalConfig,
    NgbModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
