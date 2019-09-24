import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [
    ContainedButtonComponent,
    OutlinedButtonComponent,
    TextButtonComponent
  ]
})
export class VerticalButtonModule { }
