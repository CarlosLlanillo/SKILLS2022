import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Componentes de diseño.
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFallimgModule } from 'ng-fallimg';

//Componentes de Animales
import { AnimalModule } from './animal/animal.module';
import { CuidadorComponent } from './cuidador/cuidador.component';
import { UsuarioModule } from './usuario/usuario.module';



@NgModule({
  declarations: [
    AppComponent,
    CuidadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimalModule,
    UsuarioModule,
    HttpClientModule,
    NgbModule,
    NgFallimgModule.forRoot({
      default: 'assets/reserva.png',
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
