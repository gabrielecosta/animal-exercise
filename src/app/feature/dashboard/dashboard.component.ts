import { AnimalsService } from './../../shared/animals.service';
import { ANIMALS } from './../animals/model/mock-animals';
import { Animal } from './../animals/model/animal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private animalService: AnimalsService) { }

  ngOnInit(): void {
    this.getTopRated();
  }

  animals: Animal[];
  
  getTopRated():void {
    this.animalService.getTopRated(4)
    .subscribe (animals => this.animals = animals);
  }

  isAdopted(animal: Animal): string {
    if (animal.adopted === true) {
      status = 'Adopted';
    } else {
      status = 'NotAdopted';
    }
    return status;
  }
  
}
