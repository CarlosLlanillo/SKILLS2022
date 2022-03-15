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

  crearForm(){
    this.form = new FormGroup({
      especie: new FormControl('', [Validators.required, Validators.pattern('')]),
      peso: new FormControl('', [Validators.required]),
      altura: new FormControl('', [Validators.required]),
      alimentacion: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      imagen: new FormControl('', []),
      descripcion: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAnimal'];
    this.crear = this.id == undefined;
    if (!this.crear) {
      this.readonly = true;
      this.submitText = 'Editar';
      this.animalService.find(this.id).subscribe(animal => this.animal = animal);
    }

    this.crearForm();
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    //console.log(this.animal);

    if (this.crear) this.create();
    else this.edit();
  }
  create() {
    this.animalService.create(this.animal).subscribe(animal => {
      console.log(animal);
      //console.log('Animal creado con exito!');
      this.router.navigateByUrl('animales/' + 'show/' + animal.id);
    })
  }
  edit() {
    if (this.readonly) {
      this.submitText = 'Actualizar'
      this.readonly = false;
    } else {
      this.animalService.update(this.id, this.animal).subscribe(animal => {
        console.log(animal);
        //console.log('Animal editado con exito!');
      })
      this.submitText = 'Editar'
      this.readonly = true;
    }
  }

  delete() {
    this.animalService.delete(this.animal.id).subscribe(res => {
      console.log('Animal deleted successfully!');
      this.router.navigateByUrl('animales/' + 'index');
    })
  }

  onReset() {
    if (this.crear)
      this.router.navigateByUrl('animales/' + 'index');
    else {
      this.animalService.find(this.id).subscribe(animal => this.animal = animal);
      this.readonly = true;
    }
  }

  seleccionarArchivo(event: any) {
    let formData = new FormData();
    formData = event.target.files[0];
    this.animal.imagen = formData;
    console.log(this.animal.imagen);
  }
}
