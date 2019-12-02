import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTabGroup } from './tab-group/tab-group.component';
import { VerticalTab } from './tab/tab.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [VerticalTabGroup, VerticalTab],
  imports: [CommonModule, MatRippleModule],
  exports: [VerticalTabGroup, VerticalTab]
})
export class VerticalTabsModule { }
