import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'vertical-sidenav-group',
  templateUrl: 'sidenav-group.html',
  styleUrls: ['sidenav-group.scss'],
  host: {
    'class': 'vertical-sidenav-group'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalSidenavGroup {

  @Input() title: string;
}