import { Element } from './Element';
import { FilterOptions } from './FilterOptions';

export interface Entry extends Element {
  status: FilterOptions;
}
