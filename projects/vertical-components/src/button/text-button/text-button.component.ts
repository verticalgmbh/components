import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'button[vertical-text-button], a[vertical-text-button]',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
  host: {
    class: 'vertical-button vertical-text-button'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextButtonComponent {
  constructor(public elementRef: ElementRef) { }
}
