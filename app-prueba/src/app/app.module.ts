import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AnimalModule } from './animal/animal.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFallimgModule } from 'ng-fallimg';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    HttpClientModule,
    NgbModule,
    NgFallimgModule.forRoot({
      default: 'assets/reserva.png',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
