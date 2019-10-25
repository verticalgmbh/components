import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerticalButtonModule, VerticalTabsModule } from 'projects/vertical-components/src/public-api';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, VerticalButtonModule, VerticalTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
