import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id: number = 0;
  animal: Animal | any;
  form: FormGroup | any;

  constructor(public animalService: AnimalService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAnimal'];
    if (this.id == undefined)
      console.log('Este form creara un animal')
    else {
      console.log('Este form editara un animal');
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
    this.animalService.create(this.form.value).subscribe(res => {
      console.log('Animal creado con exito!');
      this.router.navigateByUrl('animales/index');
    })
  }
}
