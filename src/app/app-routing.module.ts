import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactComponent } from './Components/contact/contact.component';
import { FormacionComponent } from './Components/formacion/formacion.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { RegisterComponent } from './Components/register/register.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { BannerComponent } from './Page/banner/banner.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
