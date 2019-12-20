import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTable } from './table';
import { MatIconModule } from '@angular/material/icon';
import { VerticalSort } from './sort/sort';
import { VerticalHeaderCell } from './header-cell/header-cell';

@NgModule({
  declarations: [VerticalTable, VerticalSort, VerticalHeaderCell],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [VerticalTable, VerticalSort, VerticalHeaderCell]
})
export class VerticalTableModule { }