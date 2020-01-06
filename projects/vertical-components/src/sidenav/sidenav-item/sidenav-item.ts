import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, EventEmitter, HostListener, Input, QueryList } from '@angular/core';

@Component({
  selector: 'vertical-sidenav-item',
  templateUrl: 'sidenav-item.html',
  styleUrls: ['sidenav-item.scss'],
  host: {
    'class': 'vertical-sidenav-item',
    '[class.active]': 'isActive'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalSidenavItem implements AfterContentInit {

  hasChildren: boolean = false;
  isExpanded: boolean = false;
  isActive: boolean = false;
  arrowIcon: 'keyboard_arrow_right' | 'keyboard_arrow_down' = 'keyboard_arrow_right';
  click = new EventEmitter<VerticalSidenavItem>();
  @Input() title: string;
  @Input() count: number = 0;

  @HostListener('click')
  onClick() {
    // Prevent click event on parent
    event.stopPropagation();

    this.click.emit(this);
  }

  @ContentChildren(VerticalSidenavItem) children: QueryList<VerticalSidenavItem>;

  constructor(public cdr: ChangeDetectorRef) {
  }

  ngAfterContentInit(): void {
    this.hasChildren = this.children.length > 1;
    this._setCount();
  }

  private _toggleArrowIcon() {
    this.arrowIcon = this.isExpanded ? 'keyboard_arrow_down' : 'keyboard_arrow_right';
  }

  expandItems() {
    if (this.hasChildren) {
      this.isExpanded = !this.isExpanded;
      this._toggleArrowIcon();
      this.children.forEach(child => {
        child.cdr.detectChanges();
      })
    }
  }

  private _setCount() {
    if (this.hasChildren) {
      this.count = 0;
      this.children.forEach((child, index) => {
        if (index > 0) {
          this.count += child.count;
        }
      })
    }
  }
}