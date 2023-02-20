import { species } from '../../data/zoo_data';
import { type Specie, type SpeciesNames } from '../types/Specie';

export function getAnimalsBySpecie(specie: SpeciesNames): Specie | undefined {
  return species.find(({ name }) => name === specie);
}
