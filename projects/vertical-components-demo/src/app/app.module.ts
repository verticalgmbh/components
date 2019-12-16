import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule, VerticalCheckboxModule } from 'projects/vertical-components/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule, MatIconModule, VerticalCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
