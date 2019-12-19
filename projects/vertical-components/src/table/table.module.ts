import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalTable, HeaderRowOutlet } from './table';
import { VerticalCaption, VerticalHeaderCell, VerticalCell, VerticalCellDef, VerticalColumnDef, VerticalHeaderCellDef } from './directives/cell';
import { VerticalHeaderRowDef } from './directives/row';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VerticalTable, VerticalCaption, VerticalHeaderCell, VerticalCell, VerticalCellDef, HeaderRowOutlet, VerticalColumnDef, VerticalHeaderCellDef, VerticalHeaderRowDef],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [VerticalTable, VerticalCaption, VerticalHeaderCell, VerticalCell, VerticalCellDef, HeaderRowOutlet, VerticalColumnDef, VerticalHeaderCellDef, VerticalHeaderRowDef]
})
export class VerticalTableModule { }