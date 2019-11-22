import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'button[vertical-contained-button], a[vertical-contained-button]',
  templateUrl: './contained-button.component.html',
  styleUrls: ['./contained-button.component.scss'],
  host: {
    class: 'vertical-button vertical-contained-button'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainedButtonComponent {
  constructor(public elementRef: ElementRef) { }
}
