import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './usuario/login/login.component';
import { RegisterComponent } from './usuario/register/register.component';


const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'animales' },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },

  // Esta objeto redirecciona a una ruta especifica cuando no encuentra una ruta específica
  { path: '**', redirectTo: 'animales' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
