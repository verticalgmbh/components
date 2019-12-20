import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule, VerticalChipsModule } from 'projects/vertical-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule, MatIconModule, VerticalChipsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
