
import { ChangeDetectionStrategy, Component, HostListener, EventEmitter, Input, ElementRef } from '@angular/core';

const VERTICAL_INPUT_INVALID_TYPES = [
  'button',
  'checkbox',
  'file',
  'hidden',
  'image',
  'radio',
  'range',
  'reset',
  'submit'
];

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

  @Input()
  get type(): string { return this._type; }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();
    (this._elementRef.nativeElement as HTMLInputElement).type = this._type;
  };

  protected _type = 'text';
  disabled: boolean;
  focus = new EventEmitter<boolean>();
  @HostListener('focus') _focus = () => this.focus.emit(true);
  @HostListener('blur') _focusLost = () => this.focus.emit(false);

  constructor(private _elementRef: ElementRef) {
    // Set disabled to HTML attribute disabled
    this.disabled = _elementRef.nativeElement.hasAttribute('disabled');
  }

  protected _validateType() {
    if (VERTICAL_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
      throw Error(`Input type "${this._type}" isn't supported by vertical-input.`);
    }
  }
}