import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { FormacionComponent } from './Components/formacion/formacion.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { RegisterComponent } from './Components/register/register.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { BannerComponent } from './Page/banner/banner.component';
import { ModalComponent } from './Components/modal/modal.component';
import { EditComponent } from './Page/edit/edit.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { AgregarComponent } from './Page/agregar/agregar.component';


const routes: Routes = [
  { path: '', component: BannerComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'formacion', component: FormacionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'modal', component: ModalComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
