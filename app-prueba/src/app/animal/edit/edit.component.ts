import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number = 0;
  animal: Animal | any;
  form: FormGroup | any;

  constructor(public animalService: AnimalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idAnimal'];
    this.animalService.find(this.id).subscribe((data: Animal) =>{
      this.animal = data;
    })
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
      console.log('Animal editado con exito!');
      this.router.navigateByUrl('animal/index');
    })
  }
}
