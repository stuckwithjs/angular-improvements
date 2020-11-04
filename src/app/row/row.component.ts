import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
})
export class RowComponent {
  @Input() element;
  @Input() type;
  @Input() currentFilter;
  @Input() showControls;
}
