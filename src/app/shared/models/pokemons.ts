import {Pokemon} from './pokemon';

export interface Pokemons {
  count?: number;
  next?: string;
  previous?: string;
  results: Pokemon[];
}
