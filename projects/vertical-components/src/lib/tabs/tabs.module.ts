import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [TabGroupComponent, TabComponent],
  imports: [CommonModule, BrowserAnimationsModule, MatRippleModule],
  exports: [TabGroupComponent, TabComponent]
})
export class VerticalTabsModule {}
