import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vertical-sidenav-container',
  templateUrl: 'sidenav-container.html',
  styleUrls: ['sidenav-container.scss'],
  host: {
    'class': 'vertical-sidenav-container'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalSidenavContainer {
  @Input() opened: boolean = true;
}