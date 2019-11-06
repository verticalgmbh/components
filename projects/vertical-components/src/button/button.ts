import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
  'vertical-contained-button',
  'vertical-outlined-button',
  'vertical-text-button'
]

@Component({
  selector: 'button[vertical-contained-button], button[vertical-outlined-button], button[vertical-text-button], a[vertical-contained-button], a[vertical-outlined-button], a[vertical-text-button]',
  templateUrl: './button.html',
  styleUrls: ['button.scss'],
  // inputs: ['disabled'],
  // outputs: ['click'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalButton {

  constructor(public elementRef: ElementRef) {

    // Add base class that applies to all buttons
    elementRef.nativeElement.classList.add('vertical-button');

    // For each button variant that is present in the BUTTON_HOST_ATTRIBUTES, add the corresponding class
    /* TODO: Add error handling: More than one attribute is added or no matching attribute found */
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (elementRef.nativeElement.hasAttribute(attr)) {
        elementRef.nativeElement.classList.add(attr);
      }
    }
  }
}