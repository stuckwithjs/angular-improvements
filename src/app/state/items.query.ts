import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ItemsStore, ItemState } from './items.store';

@Injectable({
  providedIn: 'root',
})
export class ItemsQuery extends QueryEntity<ItemState> {
  selectCurrentFilter$ = this.select((state) => state.ui.filter);
  selectAllCategories$ = this.selectAll();

  constructor(protected store: ItemsStore) {
    super(store);
  }
}
