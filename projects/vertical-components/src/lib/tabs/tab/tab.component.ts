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
  click = new EventEmitter<TabComponent>();
  @HostBinding('class.vertical-tab-active')
  isActive = false;

  @HostListener('click')
  private _click = () => this.click.emit(this);

  constructor() {}
}
