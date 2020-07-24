import { AnimalsService } from './../../shared/animals.service';
import { ANIMALS } from './model/mock-animals';
import { Animal } from './model/animal';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  constructor(private animalService: AnimalsService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  animals: Animal[];

  getAnimals():void {
    this.animalService.getAnimals()
    .subscribe (animals => this.animals = animals);
  }

  isAdopted(animal: Animal): string {
    return this.animalService.isAdopted(animal);
  }
  
}
