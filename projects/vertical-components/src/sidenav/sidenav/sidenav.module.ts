import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { VerticalSidenavGroup } from '../sidenav-group/sidenav-group';
import { LimitCountPipe } from '../sidenav-item/limit-count.pipe';
import { VerticalSidenavItem } from '../sidenav-item/sidenav-item';
import { VerticalSidenav } from './sidenav';
import { VerticalSidenavContainer } from '../sidenav-container/sidenav-container';
import { VerticalSidenavContent } from '../sidenav-content/sidenav-content';

@NgModule({
  declarations: [VerticalSidenavItem, VerticalSidenavGroup, VerticalSidenav, LimitCountPipe, VerticalSidenavContainer, VerticalSidenavContent],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule
  ],
  exports: [VerticalSidenavItem, VerticalSidenavGroup, VerticalSidenav, VerticalSidenavContainer, VerticalSidenavContent],
})
export class VerticalSidenavModule {
}