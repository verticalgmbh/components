import { Component, EventEmitter, HostBinding, HostListener, ChangeDetectionStrategy, ElementRef } from '@angular/core';

@Component({
  selector: '[vertical-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'vertical-tab'
  }
})

export class VerticalTab {
  click = new EventEmitter<VerticalTab>();
  @HostBinding('class.vertical-tab-active')
  isActive = false;

  @HostListener('click')
  _click = () => this.click.emit(this);

  constructor(public elementRef: ElementRef) { }
}
