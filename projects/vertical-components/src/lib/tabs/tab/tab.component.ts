import { Component, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: '[vertical-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'vertical-tab'
  }
})
export class TabComponent {
  click = new EventEmitter<TabComponent>();
  @HostBinding('class.vertical-tab-active')
  isActive = false;

  @HostListener('click')
  _click = () => this.click.emit(this);

  constructor() { }
}
