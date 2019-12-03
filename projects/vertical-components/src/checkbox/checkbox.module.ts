import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalCheckbox } from './checkbox';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VerticalCheckbox],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [VerticalCheckbox]
})
export class VerticalCheckboxModule { }