
import { ChangeDetectionStrategy, Component, HostListener, EventEmitter, Input, ElementRef, Optional, Self, OnDestroy } from '@angular/core';
import { VerticalFormFieldControl } from '../form-field/form-field-control';
import { Subject } from 'rxjs';
import { NgControl, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
import { getVerticalInputUnsupportedTypeError } from './input-errors';

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

  protected _uid = `vertical-input-${nextUniqueId++}`;
  readonly stateChanges: Subject<void> = new Subject<void>();
  focused: boolean = false;
  errorState: boolean;

  @Input()
  get value(): string { return this._elementRef.nativeElement.value; }
  set value(value: string) {
    if (value !== this.value) {
      this._elementRef.nativeElement.value = value;
      this.stateChanges.next();
    }
  }
  protected _value: string;

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

    if (this.focused) {
      this.focused = false;
      this.stateChanges.next();
    }
  }
  protected _disabled = false;

  onContainerClick() {
    if (!this.focused) {
      this._elementRef.nativeElement.focus();
    }
  }

  @Input()
  get type(): string { return this._type; }
  set type(value: string) {
    this._type = value || 'text';
    this._validateType();
    (this._elementRef.nativeElement as HTMLInputElement).type = this._type;
  }
  protected _type = 'text';

  constructor(
    private _elementRef: ElementRef,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() public _parentForm: NgForm,
    @Optional() public _parentFormGroup: FormGroupDirective) {

    this.id = this.id;
  }

  protected _validateType() {
    if (VERTICAL_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
      throw getVerticalInputUnsupportedTypeError(this._type);
    }
  }

  _focusChanged(isFocused: boolean) {
    if (isFocused !== this.focused) {
      this.focused = isFocused;
    }
    this.stateChanges.next();
  }

  ngDoCheck() {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  updateErrorState() {
    const oldState = this.errorState;
    const parent = this._parentFormGroup || this._parentForm;
    const control = this.ngControl ? this.ngControl.control as FormControl : null;
    const newState = this.isErrorState(control, parent);

    if (newState !== oldState) {
      this.errorState = newState;
      this.stateChanges.next()
    }
  }

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && (control.touched || (form && form.submitted)));
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}