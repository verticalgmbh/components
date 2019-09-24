import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: '[vertical-contained-button]',
  templateUrl: './contained-button.component.html',
  styleUrls: ['./contained-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainedButtonComponent {
  @Input() color: 'accent' | 'primary';
  @Input() class = '';

  @HostBinding('class.vertical-button')
  @HostBinding('class.vertical-contained-button')
  classes = true;

  constructor() { }
}
