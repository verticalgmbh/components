import { Component, ChangeDetectionStrategy, Directive } from '@angular/core';

@Directive({
  selector: '[vertical-header-cell]',
  host: {
    'class': 'vertical-table-header__cell'
  }
})

export class VerticalHeaderCell { }