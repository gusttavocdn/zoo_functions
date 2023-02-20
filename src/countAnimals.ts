import { species } from '../data/zoo_data';
import { type SpeciesNames, type Specie } from './types/Specie';

type AnimalsQuantity = Record<SpeciesNames, number>;

type Sex = 'male' | 'female';

type Animal = {
  specie: SpeciesNames
  sex?: Sex
};

function getAllAnimalsQuantityBySpecie(): AnimalsQuantity {
  const animalsBySpecieAndQuantity = {} as AnimalsQuantity;

  species.forEach(({ name, residents }) => {
    animalsBySpecieAndQuantity[name as keyof AnimalsQuantity] =
      residents.length;
  });

  return animalsBySpecieAndQuantity;
}

function getAnimalQuantityBySpecie(specie: SpeciesNames): number {
  const allAnimalsQuantity = getAllAnimalsQuantityBySpecie();
  return allAnimalsQuantity[specie];
}

function getAnimalQuantityBySpecieAndSex(
  specie: SpeciesNames,
  sex: Sex
): number {
  const { residents } = species.find(({ name }) => name === specie) as Specie;

  let animalsQuantityBySpecieAndSex = 0;

  residents.forEach(({ sex: residentSex }) => {
    if (residentSex === sex) animalsQuantityBySpecieAndSex += 1;
  });

  return animalsQuantityBySpecieAndSex;
}

function countAnimals(
  animal: Animal | undefined = undefined
): AnimalsQuantity | number {
  if (!animal) return getAllAnimalsQuantityBySpecie();
  if (!animal?.sex) return getAnimalQuantityBySpecie(animal.specie);
  return getAnimalQuantityBySpecieAndSex(animal.specie, animal.sex);
}

export { countAnimals };
