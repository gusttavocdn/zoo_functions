import { species } from '../data/zoo_data';
import { type Specie } from './types/Specie';

function getSpeciesByIds(...ids: string[]): Specie[] {
  return species.filter(({ id }) => ids.includes(id));
}

export { getSpeciesByIds };
