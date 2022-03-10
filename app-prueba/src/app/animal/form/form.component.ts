import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  id: number = 0;
  crear: boolean = true;
  animal: Animal = new Animal();
  submitText: string = 'Crear';
  form: FormGroup | any;

  constructor(public animalService: AnimalService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAnimal'];
    this.crear = this.id == undefined;
    if (!this.crear){
      this.submitText = 'Editar'
      this.animalService.find(this.id).subscribe((data: Animal) => {
        this.animal = data;
      })
    }

    this.form = new FormGroup({
      especie: new FormControl('', [Validators.required, Validators.pattern('')]),
      alimentacion: new FormControl('', [Validators.required]),
      descripcion: new FormControl(''),
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    if (this.crear) this.create();
    else this.edit();
  }

  create() {
    this.animalService.create(this.form.value).subscribe(res => {
      console.log(res);

      console.log('Animal creado con exito!');
      this.router.navigateByUrl('animales/index');
    })
  }

  edit() {
    this.animalService.update(this.id, this.form.value).subscribe(res => {
      console.log(res);

      console.log('Animal editado con exito!');
      this.router.navigateByUrl('animales/index');
    })
  }
}
