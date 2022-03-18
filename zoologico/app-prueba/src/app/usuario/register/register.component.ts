import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../form.css']
})
export class RegisterComponent implements OnInit {

  usuario = new Usuario;
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
  });

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls;
  }

  register() {
    this.usuarioService.register(this.usuario).subscribe(data => {
      console.log(data);
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }
}
