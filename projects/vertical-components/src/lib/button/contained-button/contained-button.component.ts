import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[vertical-contained-button], a[vertical-contained-button]',
  templateUrl: './contained-button.component.html',
  styleUrls: ['./contained-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainedButtonComponent {
  @HostBinding('class.vertical-button')
  @HostBinding('class.vertical-contained-button')
  classes = true;

  constructor() { }
}
