import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalRoutingModule } from './animal-routing.module';

import { IndexComponent } from './index/index.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgFallimgModule } from 'ng-fallimg';
import { RevisionComponent } from './revision/revision.component';


@NgModule({
  declarations: [
    IndexComponent,
    FormComponent,
    RevisionComponent,
  ],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgFallimgModule,
  ]
})
export class AnimalModule { }
