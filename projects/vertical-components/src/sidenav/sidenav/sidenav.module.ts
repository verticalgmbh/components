import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { VerticalSidenavGroup } from '../sidenav-group/sidenav-group';
import { LimitCountPipe } from '../sidenav-item/limit-count.pipe';
import { VerticalSidenavItem } from '../sidenav-item/sidenav-item';
import { VerticalSidenav } from './sidenav';

@NgModule({
  declarations: [VerticalSidenavItem, VerticalSidenavGroup, VerticalSidenav, LimitCountPipe],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [VerticalSidenavItem, VerticalSidenavGroup, VerticalSidenav]
})
export class VerticalSidenavModule {
}