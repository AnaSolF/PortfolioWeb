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
import { EditFormComponent } from './Page/edit-form/edit-form.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { AgregarComponent } from './Page/agregar/agregar.component';
import { EditProjectComponent } from './Page/edit-project/edit-project.component';
import { AgregarFormComponent } from './Page/agregar-form/agregar-form.component';
import { AgregarProComponent } from './Page/agregar-pro/agregar-pro.component';
import { MiCuentaComponent } from './Components/mi-cuenta/mi-cuenta.component';
import { NavBarComponent } from './Page/nav-bar/nav-bar.component';

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
  { path: 'agregar-form', component: AgregarFormComponent },
  { path: 'agregar-pro', component: AgregarProComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'edit-form/:id', component: EditFormComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: 'mi-cuenta', component: MiCuentaComponent },
  { path: 'nav-bar', component: NavBarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
