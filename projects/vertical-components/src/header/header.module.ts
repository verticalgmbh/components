import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VerticalHeader } from './header';

@NgModule({
  declarations: [VerticalHeader],
  imports: [
    CommonModule
  ],
  exports: [VerticalHeader]
})
export class VerticalHeaderModule { }
