import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'vertical-chip]',
  templateUrl: 'chip.html',
  styleUrls: ['chip.scss'],
  host: {
    'class': 'vertical-chip',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalChip { }