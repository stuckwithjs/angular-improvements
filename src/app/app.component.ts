import { Component } from '@angular/core';

import { FilterOptions } from './models/FilterOptions';
import { ItemsQuery } from './state/items.query';
import { ItemsService } from './state/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'The mighty quest to improve the performance of this list!';

  public categories$ = this.itemsQuery.selectAllCategories$;
  public currentFilter$ = this.itemsQuery.selectCurrentFilter$;
  public showControls = true;

  constructor(
    private itemsQuery: ItemsQuery,
    private itemsService: ItemsService
  ) {
    this.itemsService.initReport().subscribe();
  }

  public changeFilter(newFilter: FilterOptions): void {
    this.itemsService.updateFilter(newFilter);
  }

  // filterReport() {
  //   for (const category of this.report) {
  //     let isCategoryVisible = false;

  //     for (const subCategory of category.entries) {
  //       let isSubCatVisible = false;

  //       for (const entry of subCategory.entries) {
  //         const isEntryVisible = entry.status === this.currentFilter;
  //         entry.isVisible = isEntryVisible;
  //         isSubCatVisible = isSubCatVisible || isEntryVisible;
  //       }
  //       subCategory.isVisible = isSubCatVisible;
  //       isCategoryVisible = isCategoryVisible || isSubCatVisible;
  //     }
  //     category.isVisible = isCategoryVisible;
  //   }

  //   return this.report;
  // }
}
