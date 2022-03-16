import { Component, OnInit } from '@angular/core';

import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  animales: Animal[] = [];

  //constructor() { }
  constructor(public animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.getAll().subscribe((data: Animal[]) => {
      this.animales = data;
      console.log(this.animales);
    })
  }

  /*deleteAnimal(id:number) {
    this.animalService.delete(id).subscribe(res => {
      this.animales = this.animales.filter(item => item.id !== id);
      console.log('Animal deleted successfully!');
    })
  }*/
}
