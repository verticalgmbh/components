import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalButtonModule } from 'projects/vertical-components/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    VerticalButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
