import { type species } from '../../data/zoo_data';

export type Specie = typeof species[0];

export type SpeciesNames =
  | 'lions'
  | 'tigers'
  | 'bears'
  | 'penguins'
  | 'otters'
  | 'frogs'
  | 'snakes'
  | 'elephants'
  | 'giraffes';
