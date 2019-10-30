import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[vertical-outlined-button], a[vertical-outlined-button]',
  templateUrl: './outlined-button.component.html',
  styleUrls: ['./outlined-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutlinedButtonComponent {
  @HostBinding('class.vertical-button')
  @HostBinding('class.vertical-outlined-button')
  classes = true;

  constructor() { }
}
