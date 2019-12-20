import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerticalChip } from './chip/chip';
import { VerticalChipList } from './chip-list/chip-list';

@NgModule({
  declarations: [VerticalChip, VerticalChipList],
  imports: [
    CommonModule
  ],
  exports: [VerticalChip, VerticalChipList]
})
export class VerticalChipsModule { }