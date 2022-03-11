import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'',redirectTo:'animales/index',pathMatch:'full'},
  {path:'animales',redirectTo:'animales/index',pathMatch:'full'},
  {path:'animales/index', component:IndexComponent},
  {path:'animales/create', component:FormComponent},
  {path:'animales/show/:idAnimal', component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
