import { prices } from '../data/zoo_data';

type EntrantsByAgeGroup = {
  child: number
  adult: number
  senior: number
};

type Entrant = {
  name: string
  age: number
};

function countEntrants(entrants: Entrant[]): EntrantsByAgeGroup {
  const entrantsByAgeGroup: EntrantsByAgeGroup = entrants.reduce(
    (visitants, currentValue) => {
      if (currentValue.age < 18) visitants.child += 1;
      if (currentValue.age >= 18 && currentValue.age < 50) visitants.adult += 1;
      if (currentValue.age >= 50) visitants.senior += 1;
      return visitants;
    },
    { adult: 0, child: 0, senior: 0 }
  );

  return entrantsByAgeGroup;
}

function calculateEntry(entrants: Entrant[]): number {
  const { adult, child, senior } = countEntrants(entrants);
  const totalEntryValue =
    adult * prices.adult + child * prices.child + senior * prices.senior;

  return totalEntryValue;
}

export { calculateEntry, countEntrants };
