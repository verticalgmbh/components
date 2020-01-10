import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VerticalHeader } from './header';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [VerticalHeader],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [VerticalHeader]
})
export class VerticalHeaderModule { }