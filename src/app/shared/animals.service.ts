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

animals = ANIMALS;

  getTopRated(numEle: number): Observable<Animal[]> {
    return of( [ ...this.animals ]
			.sort( ( a, b ) => b.votes - a.votes )
			.slice( 0, numEle ) );
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
