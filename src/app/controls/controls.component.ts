import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
})
export class ControlsComponent {
  @Input() currentFilter;
  @Input() rowType;
}
