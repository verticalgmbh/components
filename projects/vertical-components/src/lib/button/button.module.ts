import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContainedButtonComponent } from './contained-button/contained-button.component';


@NgModule({
  declarations: [
    ContainedButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [
    ContainedButtonComponent
  ]
})
export class VerticalButtonModule { }
