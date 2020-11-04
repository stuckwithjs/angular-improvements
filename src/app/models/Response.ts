import { Category } from './Category';

export interface Response {
  lastUpdated: string;
  someMetadata: boolean;
  someOtherData: boolean;
  content: Category[];
}
