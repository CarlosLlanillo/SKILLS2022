import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup | any;

  constructor(public animalService: AnimalService, private router: Router) {
    
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.pattern('')]),
      alimentacion: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.animalService.create(this.form.value).subscribe(res => {
      console.log('Animal creado con exito!');
      this.router.navigateByUrl('animal/index');
    })
  }
}
