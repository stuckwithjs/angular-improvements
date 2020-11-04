import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { RowComponent } from './row/row.component';
import { ControlsComponent } from './controls/controls.component';
import { ActionsComponent } from './controls/actions/actions.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    RowComponent,
    ControlsComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
