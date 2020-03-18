// Please note that this component only as styling as of right now. There are no dynamic features.
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'header[vertical-header]',
  templateUrl: 'header.html',
  styleUrls: ['header.scss'],
  host: {
    class: 'vertical-header'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalHeader { }