import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'button[vertical-outlined-button], a[vertical-outlined-button]',
  templateUrl: './outlined-button.component.html',
  styleUrls: ['./outlined-button.component.scss'],
  host: {
    class: 'vertical-button vertical-outlined-button'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlinedButtonComponent {
  constructor(public elementRef: ElementRef) { }
}
