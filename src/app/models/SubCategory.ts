import { Element } from './Element';
import { Entry } from './Entry';

export interface SubCategory extends Element {
  entries: Entry[];
}
