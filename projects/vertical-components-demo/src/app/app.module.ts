import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VerticalButtonModule, VerticalTabsModule, VerticalFormFieldModule, VerticalInputModule, VerticalCheckboxModule, VerticalSidenavModule, VerticalHeaderModule } from 'projects/vertical-components/src/public-api';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    VerticalButtonModule,
    VerticalTabsModule,
    VerticalFormFieldModule,
    VerticalInputModule,
    MatIconModule,
    VerticalCheckboxModule,
    VerticalSidenavModule,
    VerticalHeaderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
