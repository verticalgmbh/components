import { AfterViewInit, Component, ContentChildren, OnDestroy, Input, AfterContentInit, ChangeDetectionStrategy, QueryList } from '@angular/core';
import { takeWhile, tap } from 'rxjs/operators';

import { TabComponent } from '../tab/tab.component';

@Component({
  selector: '[vertical-tab-group]',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupComponent implements AfterViewInit, OnDestroy, AfterContentInit {
  private _isAlive = true;
  @Input() activeTab: TabComponent;

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() { }

  ngAfterContentInit() {

    // TODO: Error Handling, when no tab-component defined inside tab-group
    try {
      // Set first tab to active, if not defined
      if (!this.activeTab) {
        this.activeTab = this.tabs.toArray()[0];
      }
      this.activeTab.isActive = true;
    } catch (error) {
      console.log("No Tab");
    }
  }

  ngAfterViewInit() {
    const tabs = this.tabs.toArray();

    for (const tab of tabs) {
      tab.click
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
