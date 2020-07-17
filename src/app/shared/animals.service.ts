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

  TOPANIMALS = ANIMALS;

  getTopRated(numEle: number): Observable<Animal[]> {
    return of (this.TOPANIMALS.sort(
      function(a,b) {
        return  b.votes - a.votes;
      }
    ).slice(0, numEle));
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
