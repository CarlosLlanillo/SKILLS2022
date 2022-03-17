import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../form.css']
})
export class RegisterComponent implements OnInit {

  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(public usuarioService: UsuarioService, public router: Router) { }

  ngOnInit(): void {

  }

  get f() {
    return this.form.controls;
  }

  register() {
    const usuario = { email: this.email, password: this.password, confirmPassword: this.confirmPassword };
    this.usuarioService.register(usuario).subscribe(data => {
      console.log(data);
      this.usuarioService.setToken(data.token);
      this.router.navigateByUrl('/');
    });
  }
}
