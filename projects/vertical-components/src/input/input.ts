
import { ChangeDetectionStrategy, Component, HostListener, EventEmitter, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'input[vertical-input]',
  templateUrl: 'input.html',
  styleUrls: ['input.scss'],
  host: {
    'class': 'vertical-input'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalInput {

  disabled: boolean;
  focus = new EventEmitter<boolean>();
  @HostListener('focus') _focus = () => this.focus.emit(true);
  @HostListener('blur') _focusLost = () => this.focus.emit(false);

  constructor(public elementRef: ElementRef) {
    // Set disabled to HTML attribute disabled
    this.disabled = elementRef.nativeElement.hasAttribute('disabled');
  }
}