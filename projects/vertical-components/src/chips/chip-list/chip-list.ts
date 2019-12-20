import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vertical-chip-list]',
  templateUrl: 'chip-list.html',
  styleUrls: ['chip-list.scss'],
  host: {
    'class': 'vertical-chip-list',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalChipList { }