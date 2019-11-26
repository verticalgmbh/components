import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, Optional, Self } from '@angular/core';
import { FormControl, FormGroupDirective, NgControl, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { VerticalFormFieldControl } from '../form-field/form-field-control';
import { getVerticalInputUnsupportedTypeError } from './input-errors';

const VERTICAL_INPUT_VALID_TYPES = [
  'color',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'text',
  'time',
  'url',
  'week'
];

let nextUniqueId: number = 0;

@Component({
  selector: 'input[vertical-input]',
  templateUrl: 'input.html',
  styleUrls: ['input.scss'],
  host: {
    'class': 'vertical-input',
    '[attr.id]': 'id',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '(blur)': '_focusChanged(false)',
    '(focus)': '_focusChanged(true)'
  },
  providers: [{ provide: VerticalFormFieldControl, useExisting: VerticalInput }],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalInput implements VerticalFormFieldControl<any>, OnDestroy {

  errorState: boolean;
  focused: boolean = false;
  protected _uid = `vertical-input-${nextUniqueId++}`;
  readonly stateChanges: Subject<void> = new Subject<void>();

  // Inputs
  @Input()
  get disabled(): boolean {
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (value != null && `${value}` !== 'false') {
      this._disabled = true;
    }

    // Browsers may not fire blur event if the input is disabled too quickly.
    // Reset focused state here to ensure that the element doesn't become stuck.
    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  protected _disabled = false;

  @Input()
  get id(): string { return this._id; }
  set id(value: string) { this._id = value || this._uid }
  protected _id: string;

  @Input() placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) { this._required = value; }
  protected _required = false;

  @Input()
  get type(): string { return this._type; }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();
    (this._elementRef.nativeElement as HTMLInputElement).type = this._type;
  }
  protected _type = 'text';

  @Input()
  get value(): string { return this._elementRef.nativeElement.value; }
  set value(value: string) {
    if (value !== this.value) {
      this._elementRef.nativeElement.value = value;
      this.stateChanges.next();
    }
  }
  protected _value: string;

  constructor(
    private _elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() public _parentForm: NgForm,
    @Optional() public _parentFormGroup: FormGroupDirective) {

    // Force setter to be called in case id was not specified.
    this.id = this.id;
  }

  ngDoCheck() {
    if (this.ngControl) {

      // The error state needs to be checked on every change detection cycle, because there are some error triggers that can't be subscribed to (e.g. parent form submissions).
      this._updateErrorState();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  // Update focus state of the input.
  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
    }
    this.stateChanges.next();
  }

  // Defines how form controls behave with regards to displaying error messages
  private _isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }

  // Updates error state.
  private _updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const control = this.ngControl ? this.ngControl.control as FormControl : null;
    const newState = this._isErrorState(control, parent);

    if (newState !== oldState) {
      this.errorState = newState;
      this.stateChanges.next()
    }
  }

  // Ensure that the input has a supported type.
  private _validateType() {
    if (VERTICAL_INPUT_VALID_TYPES.indexOf(this._type) == -1) {
      throw getVerticalInputUnsupportedTypeError(this._type);
    }
  }
}