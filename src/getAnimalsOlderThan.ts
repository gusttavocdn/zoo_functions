import { species } from '../data/zoo_data';
import { type Specie, type SpeciesNames } from './types/Specie';

function getAnimalsBySpecie(specie: SpeciesNames): Specie | undefined {
  return species.find(({ name }) => name === specie);
}

function getAnimalsOlderThan(specie: SpeciesNames, age: number): boolean {
  const { residents } = getAnimalsBySpecie(specie) as Specie;
  return residents.every(({ age: residentAge }) => residentAge > age);
}

export { getAnimalsOlderThan };
