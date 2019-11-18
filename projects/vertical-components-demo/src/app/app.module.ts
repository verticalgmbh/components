import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule } from 'projects/vertical-components/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
