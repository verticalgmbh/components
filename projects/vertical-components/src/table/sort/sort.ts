import { Component, ChangeDetectionStrategy, AfterViewInit, EventEmitter, HostListener, ElementRef, ContentChildren, ContentChild, QueryList, AfterContentInit, ViewChild, ChangeDetectorRef, HostBinding } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: '[vertical-sort]',
  templateUrl: 'sort.html',
  styleUrls: ['sort.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalSort {

  arrow: 'arrow_upward' | 'arrow_downward' = 'arrow_upward';

  showIcon: boolean = false;

  @HostBinding('class.active')
  isActive = false;

  constructor(private _elementRef: ElementRef, public cdr: ChangeDetectorRef) { }

  @ViewChild('icon', { static: true }) icon;

  // mouseover = new EventEmitter<any>();
  // mouseout = new EventEmitter<any>();
  click = new EventEmitter<any>();

  @HostListener('click')
  _click() {
    this.click.emit(this);
  }

  // @HostListener('mouseover')
  // _mouseover() {
  //   // this.mouseover.emit();
  //   if (this.isActive === true) {

  //   } else {
  //     this.showIcon = true;
  //     this.renderIcon(0.54);
  //   }
  // }

  // @HostListener('mouseout')
  // _mouseout() {
  //   if (this.isActive === true) {
  //   } else {
  //     // this.mouseout.emit();
  //     this.showIcon = false;
  //     this.renderIcon(0);
  //   }
  // }

  // renderIcon(opacity: number) {
  //   this.icon._elementRef.nativeElement.style.opacity = opacity;
  // }

}