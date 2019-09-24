import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[vertical-text-button]',
  templateUrl: './text-button.component.html',
  styleUrls: ['./text-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextButtonComponent {
  @Input() color: 'accent' | 'primary';
  @Input() class = '';

  @HostBinding('class.vertical-button')
  @HostBinding('class.vertical-text-button')
  classes = true;

  constructor() { }
}
