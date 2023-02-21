import { species } from '../data/zoo_data';
import { type Specie } from './types/Specie';

type LocationsMap = {
  NE: string[]
  NW: string[]
  SE: string[]
  SW: string[]
};

type MapOptions = {
  sex?: string
  includeNames?: boolean
  sorted?: boolean
};

function getSpeciesByLocation(): LocationsMap {
  const locationsMap = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  } as LocationsMap;

  species.forEach(({ location, name }) => {
    locationsMap[location as keyof LocationsMap].push(name);
  });

  return locationsMap;
}

function getSpeciesByLocationWithAnimalNames(
  sex?: string,
  sort?: boolean
): any {
  const locationsMapWithNames = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  } as any;

  species.forEach(({ name, location }) => {
    locationsMapWithNames[location as keyof any].push(
      getAnimalNamesBySpecie(name, sex, sort)
    );
  });

  return locationsMapWithNames;
}

function getAnimalNamesBySpecie(
  specie: string,
  sex?: string,
  sort?: boolean
): any {
  const { residents } = species.find(({ name }) => name === specie) as Specie;

  if (sex) {
    const residentsNames = residents
      .filter(({ sex: animalSex }) => animalSex === sex)
      .map(({ name }) => name);

    if (sort) return { [specie]: residentsNames.sort() };
    return { [specie]: residentsNames };
  }

  const residentsNames = residents.map(({ name }) => name);

  if (sort) return { [specie]: residentsNames.sort() };
  return { [specie]: residentsNames };
}

function getAnimalMap(options: MapOptions | undefined = undefined): any {
  if (options?.includeNames) {
    return getSpeciesByLocationWithAnimalNames(options.sex, options.sorted);
  }

  return getSpeciesByLocation();
}

export { getAnimalMap };
