import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabComponent } from './tab/tab.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [TabGroupComponent, TabComponent],
  imports: [CommonModule, MatRippleModule],
  exports: [TabGroupComponent, TabComponent]
})
export class VerticalTabsModule { }
