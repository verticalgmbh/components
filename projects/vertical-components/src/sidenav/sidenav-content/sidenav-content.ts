import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vertical-sidenav-content',
  templateUrl: 'sidenav-content.html',
  styleUrls: ['sidenav-content.scss'],
  host: {
    'class': 'vertical-sidenav-content'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalSidenavContent {
}