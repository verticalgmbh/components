// Common
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import { MatIconModule } from '@angular/material/icon';

// Custom
import { AppComponent } from './app.component';
import { VerticalButtonModule, VerticalCheckboxModule, VerticalFormFieldModule, VerticalHeaderModule, VerticalInputModule, VerticalSidenavModule, VerticalTabsModule } from 'projects/vertical-components/src/public-api';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatIconModule,
    ReactiveFormsModule,
    VerticalButtonModule,
    VerticalCheckboxModule,
    VerticalFormFieldModule,
    VerticalHeaderModule,
    VerticalInputModule,
    VerticalSidenavModule,
    VerticalTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
