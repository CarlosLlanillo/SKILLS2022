import { Component, OnInit } from '@angular/core';

import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  animales: Animal[] = [];
  animalImg = environment.animalImg;
  page: number = 0;

  //constructor() { }
  constructor(public animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAll().subscribe(data => {
      this.animales = data;
    })
  }

  siguientes() {
    this.animalService.getAll().subscribe(data => {
      this.animales = data;
    })
  }

  /*deleteAnimal(id:number) {
    this.animalService.delete(id).subscribe(res => {
      this.animales = this.animales.filter(item => item.id !== id);
      console.log('Animal deleted successfully!');
    })
  }*/
}
