import { ChangeDetectionStrategy, Component, ContentChildren, QueryList, AfterContentInit, AfterViewInit } from '@angular/core';
import { VerticalHeaderCell } from './header-cell/header-cell';
import { VerticalSort } from './sort/sort';
import { takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'table[vertical-table]',
  templateUrl: 'table.html',
  styleUrls: ['table.scss'],
  host: {
    'class': 'vertical-table'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalTable implements AfterContentInit, AfterViewInit {

  activeSort: VerticalSort;
  private _isAlive = true;

  @ContentChildren(VerticalHeaderCell) headerCells: QueryList<VerticalHeaderCell>;
  @ContentChildren(VerticalSort) sortCells: QueryList<VerticalSort>;

  ngAfterContentInit(): void {
    //console.log("Headercells: ", this.headerCells);
  }

  ngAfterViewInit(): void {
    console.log("Sorts: ", this.sortCells);
    // this.headerCells.toArray().forEach(headerCell => {
    //   headerCell.mouseover.pipe(
    //     takeWhile(() => this._isAlive),
    //     tap((sortHover))
    //   ).subscribe();
    // });

    this.sortCells.toArray().forEach(sortCell => {
      console.log("SortCell: ", sortCell);
      sortCell.click.pipe(
        takeWhile(() => this._isAlive),
        tap((active: VerticalSort) => {
          if (active.isActive === false) {
            active.isActive = true;
            this.activeSort = active;
            this.sortCells.toArray().forEach(s => {
              s.isActive = s === active;
              if (s != active) {
                s.arrow = 'arrow_upward';
                s.cdr.detectChanges();
              }
            });
          } else {
            if (active.arrow === 'arrow_upward') {
              active.arrow = 'arrow_downward'
            } else {
              active.isActive = false;
              this.activeSort = undefined;
              active.arrow = 'arrow_upward';
            }
          }
        })
      ).subscribe();
    });
  }

  ngOnDestroy = () => (this._isAlive = false);
}