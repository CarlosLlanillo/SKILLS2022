import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {path:'animal',redirectTo:'animal/index',pathMatch:'full'},
  {path:'animal/index', component:IndexComponent},
  {path:'animal/create', component:CreateComponent},
  {path:'animal/edit/:idAnimal', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalRoutingModule { }
