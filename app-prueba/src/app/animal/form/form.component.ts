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
  readonly: boolean = false;
  animal: Animal = new Animal();
  submitText: string = 'Crear';
  form: FormGroup | any;

  constructor(public animalService: AnimalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAnimal'];
    this.crear = this.id == undefined;
    if (!this.crear) {
      this.readonly = true;
      this.submitText = 'Editar';
      this.animalService.find(this.id).subscribe(animal => this.animal = animal);
    }

    this.form = new FormGroup({
      especie: new FormControl({ disable: true }, [Validators.required, Validators.pattern('')]),
      peso: new FormControl('', [Validators.required]),
      altura: new FormControl('', [Validators.required]),
      alimentacion: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      imagen: new FormControl(''),
      descripcion: new FormControl(''),
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    if (this.crear) this.create();
    else this.edit();
  }

  reset() {
    if (!this.crear)
      this.animalService.find(this.id).subscribe(animal => this.animal = animal);
  }

  create() {
    this.animalService.create(this.form.value).subscribe(animal => {
      console.log(animal);
      console.log('Animal creado con exito!');
      this.router.navigateByUrl('animales/' + 'show/' + animal.id);
    })
  }

  edit() {
    if (this.readonly) {
      this.submitText = 'Actualizar'
      this.readonly = false;
    } else {
      this.animalService.update(this.id, this.form.value).subscribe(animal => {
        console.log(animal);
        console.log('Animal editado con exito!');
      })
      this.submitText = 'Editar'
      this.readonly = true;
    }

  }
}
