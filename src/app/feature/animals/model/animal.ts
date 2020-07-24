import { AnimalType } from './animal-type';

export interface Animal {
    id: number,
    name: string,
    type: AnimalType,
    race: string,
    age: number,
    votes: number,
    adopted: boolean,
    imagepath: string
}