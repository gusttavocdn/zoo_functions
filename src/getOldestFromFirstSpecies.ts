import { employees, species } from '../data/zoo_data';

function getOldestFromFirstSpecies(id: string): any {
  const employee = employees.find(({ id: employeeId }) => employeeId === id);

  const specieId = employee?.responsibleFor[0];
  const speciesInfo = species.find(({ id }) => id === specieId);

  // get oldest animal from resident array
  let oldest = {} as {
    name: string
    sex: string
    age: number
  };

  let oldestAge = -Infinity;

  speciesInfo?.residents.forEach((animal) => {
    if (animal.age > oldestAge) {
      oldestAge = animal.age;
      oldest = animal;
    }
  });

  return [oldest.name, oldest.sex, oldest.age] as any;
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

export { getOldestFromFirstSpecies };
