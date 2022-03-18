import { Component } from '@angular/core';
import { Usuario } from './usuario/usuario';
import { UsuarioService } from './usuario/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-prueba';
  usuario: Usuario | undefined;
  token: string | any;

  constructor(public usarioService: UsuarioService) { }

  ngOnInit(): void {
    this.token = this.usarioService.getToken;
    console.log(this.token);
  }

  logout() {
    this.usarioService.removeToken().subscribe(res => console.log(res));
    this.token = null;
  }
}
