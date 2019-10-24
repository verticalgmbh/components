import { AfterViewInit, Component, ContentChildren, OnDestroy, QueryList } from '@angular/core';
import { takeWhile, tap } from 'rxjs/operators';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: '[vertical-tab-group]',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements AfterViewInit, OnDestroy {
  private _isAlive = true;
  activeTab: TabComponent;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() {}

  ngAfterViewInit() {
    const tabs = this.tabs.toArray();
    for (const tab of tabs) {
      tab.onClick
        .pipe(
          takeWhile(() => this._isAlive),
          tap((active: TabComponent) => (this.activeTab = active)),
          tap((active: TabComponent) => this.tabs.forEach(t => (t.isActive = t === active)))
        )
        .subscribe();
    }
  }

  ngOnDestroy = () => (this._isAlive = false);
}
