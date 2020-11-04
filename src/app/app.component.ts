import { Component, OnInit } from '@angular/core';
import * as mockData from '../assets/mockData.json';
import { Category } from './models/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'The mighty quest to improve the performance of this list!';
  private report: Category[] = <Category[]>mockData.content;

  public filteredReport = this.report;
  public currentFilter = 'UNEDITED';
  public showControls = true;

  ngOnInit() {
    this.changeFilter(this.currentFilter);
  }

  public changeFilter(newFilter: string): void {
    this.currentFilter = newFilter;
    this.filteredReport = this.filterReport();
  }

  filterReport() {
    for (const category of this.report) {
      let isCategoryVisible = false;

      for (const subCategory of category.entries) {
        let isSubCatVisible = false;

        for (const entry of subCategory.entries) {
          const isEntryVisible = entry.status === this.currentFilter;
          entry.isVisible = isEntryVisible;
          isSubCatVisible = isSubCatVisible || isEntryVisible;
        }
        subCategory.isVisible = isSubCatVisible;
        isCategoryVisible = isCategoryVisible || isSubCatVisible;
      }
      category.isVisible = isCategoryVisible;
    }

    return this.report;
  }
}
