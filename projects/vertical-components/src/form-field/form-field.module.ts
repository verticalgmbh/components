import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalFormField } from './form-field';
import { VerticalError } from './directives/error';
import { VerticalHint } from './directives/hint';
import { VerticalLabel } from './directives/label';
import { VerticalPrefix } from './directives/prefix';
import { VerticalSuffix } from './directives/suffix';



@NgModule({
  declarations: [VerticalFormField, VerticalError, VerticalHint, VerticalLabel, VerticalPrefix, VerticalSuffix],
  imports: [
    CommonModule
  ],
  exports: [VerticalFormField, VerticalError, VerticalHint, VerticalLabel, VerticalPrefix, VerticalSuffix]
})
export class VerticalFormFieldModule { }