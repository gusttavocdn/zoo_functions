import { type Specie, type SpeciesNames } from './types/Specie';
import { getAnimalsBySpecie } from './utils/getAnimalsBySpecie';

function getAnimalsOlderThan(specie: SpeciesNames, age: number): boolean {
  const { residents } = getAnimalsBySpecie(specie) as Specie;
  return residents.every(({ age: residentAge }) => residentAge > age);
}

export { getAnimalsOlderThan };
