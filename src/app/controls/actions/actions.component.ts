import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
})
export class ActionsComponent {
  @Input() type: string;
}
