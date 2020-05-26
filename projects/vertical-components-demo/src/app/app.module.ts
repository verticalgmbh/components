import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import {
  VerticalButtonModule,
  VerticalCheckboxModule,
  VerticalFormFieldModule,
  VerticalHeaderModule,
  VerticalInputModule,
  VerticalTabsModule,
} from 'projects/vertical-components/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatIconModule,

    VerticalButtonModule,
    VerticalCheckboxModule,
    VerticalFormFieldModule,
    VerticalHeaderModule,
    VerticalInputModule,
    VerticalTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
