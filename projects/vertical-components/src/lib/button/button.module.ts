import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';

import { ContainedButtonComponent } from './contained-button/contained-button.component';
import { OutlinedButtonComponent } from './outlined-button/outlined-button.component';
import { TextButtonComponent } from './text-button/text-button.component';


@NgModule({
  declarations: [
    ContainedButtonComponent,
    OutlinedButtonComponent,
    TextButtonComponent
  ],
  imports: [
    CommonModule,
    MatRippleModule
  ],
  exports: [
    ContainedButtonComponent,
    OutlinedButtonComponent,
    TextButtonComponent
  ]
})
export class VerticalButtonModule { }
