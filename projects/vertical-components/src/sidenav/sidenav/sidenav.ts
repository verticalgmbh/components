//TODO: Parent title should be bold + colored when child is active (problem: There is no css selector for the previous sibling, which would be needed)
//TODO: Scrollbar for the sidenav-content section should not be fullscreen. The content section should have it's own scrollbar

import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { takeWhile, tap } from 'rxjs/operators';
import { VerticalSidenavItem } from '../sidenav-item/sidenav-item';

@Component({
  selector: 'vertical-sidenav',
  templateUrl: 'sidenav.html',
  styleUrls: ['sidenav.scss'],
  host: {
    'class': 'vertical-sidenav'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalSidenav implements AfterContentInit {
  private _isAlive = true;

  @Input() activeItem: VerticalSidenavItem;

  @ContentChildren(VerticalSidenavItem, { descendants: true }) sidenavItems: QueryList<VerticalSidenavItem>;

  constructor(public cdr: ChangeDetectorRef) { }

  ngAfterContentInit(): void {
    // Set first item to active, if not defined
    this.setActiveItem(this.activeItem ? this.activeItem : this.sidenavItems.toArray()[0]);

    // Subscribe to click event of each item
    this.sidenavItems.forEach(item => {
      item.click.pipe(
        takeWhile(() => this._isAlive),
        tap((item: VerticalSidenavItem) => {
          this.setActiveItem(item);
          item.expandItems();
        })
      ).subscribe();
    })
  }

  ngOnDestroy(): void {
    this._isAlive = false;
  }

  setActiveItem(item: VerticalSidenavItem) {
    this.activeItem = item;
    this.sidenavItems.forEach(i => {
      i.isActive = i === item;
      i.cdr.detectChanges();
    })
  }
}