import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { VerticalHeaderCell } from './header-cell/header-cell';

@Component({
  selector: 'table[vertical-table]',
  templateUrl: 'table.html',
  styleUrls: ['table.scss'],
  host: {
    'class': 'vertical-table'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalTable implements AfterContentInit {

  @ContentChildren(VerticalHeaderCell) headerCells: QueryList<VerticalHeaderCell>;

  ngAfterContentInit(): void {
    console.log("Headercells: ", this.headerCells);
  }
}