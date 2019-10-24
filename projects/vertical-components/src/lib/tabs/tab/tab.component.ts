import { Component, HostBinding } from '@angular/core';

@Component({
  selector: '[vertical-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @HostBinding('class.vertical-tab')
  @HostBinding('class.vertical-tab-active')
  classes = true;
  constructor() {}
}
