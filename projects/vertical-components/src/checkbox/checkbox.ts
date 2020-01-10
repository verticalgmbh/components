import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

// Possible mat-icons for checkboxIcon
export type VerticalCheckboxIcon = 'check_box' | 'check_box_outline_blank' | 'indeterminate_check_box';

let nextUniqueId: number = 0;

@Component({
  selector: 'vertical-checkbox',
  templateUrl: 'checkbox.html',
  styleUrls: ['checkbox.scss'],
  host: {
    'class': 'vertical-checkbox',
    '[class.checked]': 'checked',
    '[class.disabled]': 'disabled',
    '[class.indeterminate]': 'indeterminate',
    '[class.vertical-checkbox__label--before]': 'labelPosition == "before"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalCheckbox {

  checkboxIcon: VerticalCheckboxIcon = 'check_box_outline_blank';
  private _uid = `vertical-checkbox-${nextUniqueId++}`;

  @Input()
  get checked(): boolean { return this._checked; }
  set checked(value: boolean) {
    if (value != this.checked) {
      this._checked = value;
      this.checkboxIcon = 'check_box';
    }
  }
  private _checked: boolean = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    if (value != this.disabled) {
      this._disabled = value;
    }
  }
  private _disabled: boolean = false;

  @Input()
  get id(): string { return this._id; }
  set id(value: string) { this._id = value || this._uid }
  private _id: string;

  @Input()
  get indeterminate(): boolean { return this._indeterminate; }
  set indeterminate(value: boolean) {
    if (value != this.indeterminate) {
      this._indeterminate = value;
      this.checkboxIcon = 'indeterminate_check_box';
    }
  }
  private _indeterminate: boolean = false;

  @Input() labelPosition: 'before' | 'after' = 'after';

  @Input() name: string | null = null;

  @Input() required: boolean;

  @Input() value: string;

  constructor() {
    // Force setter to be called in case id was not specified.
    this.id = this.id;
  }

  onInputClick(event: Event) {
    // Prevent multiple click events
    event.stopPropagation();

    if (!this.disabled) {
      if (this.indeterminate) {
        this.indeterminate = false;
      }
      this.checked = !this.checked;
      if (this.checked) {
        this.checkboxIcon = 'check_box';
      } else {
        this.checkboxIcon = 'check_box_outline_blank';
      }
    }
  }

}