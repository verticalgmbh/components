import { Component, ChangeDetectionStrategy, Directive, HostBinding, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[vertical-header-cell]',
  host: {
    'class': 'vertical-table-header__cell'
  }
})

export class VerticalHeaderCell {
}