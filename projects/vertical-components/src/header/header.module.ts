import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { VerticalHeader } from './header';

@NgModule({
  declarations: [VerticalHeader,],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [VerticalHeader]
})
export class VerticalHeaderModule { }