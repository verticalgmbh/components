import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: '[vertical-tab]',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  public active = false;
  constructor() {}
}
