import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../form.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  form: FormGroup | any;

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  login() {
    const usuario = { email: this.email, password: this.password };
    this.usuarioService.login(usuario).subscribe(data => {
      console.log(data);
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }
}
