import { ANIMALS } from './../feature/animals/model/mock-animals';
import { Animal } from './../feature/animals/model/animal';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  constructor() { }

  getAnimals(): Observable <Animal[]> {
    return of (ANIMALS);
  }

}
