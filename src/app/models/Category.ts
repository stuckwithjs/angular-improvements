import { Element } from './Element';
import { SubCategory } from './SubCategory';

export interface Category extends Element {
  entries: SubCategory[];
}
