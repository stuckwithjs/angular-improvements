import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { FilterOptions } from '../models/FilterOptions';
import { ItemsStore } from './items.store';

@Injectable({ providedIn: 'root' })
export class ItemsService {
  constructor(
    private itemsStore: ItemsStore,
    private dataService: DataService
  ) {}

  updateFilter(filter: FilterOptions) {
    this.itemsStore.update({
      ui: { filter },
    });
  }

  initReport() {
    console.log('initReport');
    return this.dataService.getItems().pipe(
      tap(({ content, lastUpdated, someMetadata, someOtherData }) => {
        console.log(someOtherData);
        this.itemsStore.update({ lastUpdated, someMetadata, someOtherData });
        this.itemsStore.add(content);
      })
    );
  }
}
