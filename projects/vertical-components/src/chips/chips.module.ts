import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VerticalChipList } from './chip-list/chip-list';
import { VerticalChip } from './chip/chip';

@NgModule({
  declarations: [VerticalChip, VerticalChipList],
  imports: [
    CommonModule
  ],
  exports: [VerticalChip, VerticalChipList]
})
export class VerticalChipsModule { }