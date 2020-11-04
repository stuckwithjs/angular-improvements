import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Category } from '../models/Category';
import { FilterOptions } from '../models/FilterOptions';

export interface ItemState extends EntityState<Category> {
  ui: {
    filter: FilterOptions;
  };
  lastUpdated: string;
  someMetadata: boolean;
  someOtherData: boolean;
}

const initialState = {
  ui: {
    filter: 'UNEDITED' as FilterOptions,
  },
};

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'items' })
export class ItemsStore extends EntityStore<ItemState> {
  constructor() {
    super(initialState);
  }
}
