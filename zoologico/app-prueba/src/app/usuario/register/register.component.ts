import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
//import { MustMatch } from '../confirmed.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: []
})
export class RegisterComponent implements OnInit {

  usuario = new Usuario;
  form: FormGroup | any = this.formBuilder.group({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl('', [Validators.required]),
  }, {
    validators: this.MustMatch('password', 'password_confirmation')
  });

  constructor(public usuarioService: UsuarioService, public router: Router, private formBuilder: FormBuilder) { }

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

  private MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control: any = formGroup.controls[controlName];
      const matchingControl: any = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch)
        return;


      if (control.value !== matchingControl.value)
        return matchingControl.setErrors({ mustMatch: true });
      else
        return matchingControl.setErrors(null);
    }
  }
}
