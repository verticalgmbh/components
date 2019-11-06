import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { VerticalButton } from './button';


@NgModule({
  declarations: [
    VerticalButton
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    VerticalButton
  ]
})
export class VerticalButtonModule { }
