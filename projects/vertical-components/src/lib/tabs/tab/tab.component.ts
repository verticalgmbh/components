import { Component, EventEmitter, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: '[vertical-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  host: {
    class: 'vertical-tab'
  }
})
export class TabComponent {
  onClick = new EventEmitter<TabComponent>();
  @HostBinding('class.vertical-tab-active')
  isActive = false;

  @HostListener('click')
  private _onClick = () => this.onClick.emit(this);

  constructor() {}
}
