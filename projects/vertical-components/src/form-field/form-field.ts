import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, Inject, InjectionToken, Input, OnDestroy, Optional, QueryList } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { VerticalInput } from '../input/input';
import { VerticalError } from './directives/error';
import { VerticalHint } from './directives/hint';
import { VerticalLabel } from './directives/label';
import { VerticalPrefix } from './directives/prefix';
import { VerticalSuffix } from './directives/suffix';
import { VerticalFormFieldControl } from './form-field-control';
import { getVerticalFormFieldDuplicateErrorError, getVerticalFormFieldDuplicateHintError, getVerticalFormFieldDuplicateLabelError, getVerticalFormFieldMissingControlError } from './form-field-errors';

// Possible appearance styles for the form field
export type VerticalFormFieldAppearance = 'filled' | 'outlined';

// Represents the default options for the form field that can be configured using the `VERTICAL_FORM_FIELD_DEFAULT_OPTIONS` injection token
export interface VerticalFormFieldDefaultOptions {
  appearance?: VerticalFormFieldAppearance;
}

// Injections token that can be used to configure the default options for all all form fields within an app
export const VERTICAL_FORM_FIELD_DEFAULT_OPTIONS = new InjectionToken<VerticalFormFieldDefaultOptions>('VERTICAL_FORM_FIELD_DEFAULT_OPTIONS');

@Component({
  selector: 'vertical-form-field',
  templateUrl: 'form-field.html',
  styleUrls: ['form-field.scss'],
  host: {
    'class': 'vertical-form-field',
    '[class.disabled]': 'control.disabled',
    '[class.error]': 'control.errorState',
    '[class.focused]': 'control.focused',
    '[class.vertical-form-field-appearance-filled]': 'appearance == "filled"',
    '[class.vertical-form-field-appearance-outlined]': 'appearance == "outlined"'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalFormField implements AfterContentInit, OnDestroy {

  private _destroyed = new Subject<void>();

  @Input()
  get appearance(): VerticalFormFieldAppearance { return this._appearance; }
  set appearance(value: VerticalFormFieldAppearance) {
    this._appearance = value || (this._defaults && this._defaults.appearance);
  }
  private _appearance: VerticalFormFieldAppearance;

  @ContentChild(VerticalInput, { static: true }) input: VerticalInput;
  @ContentChild(VerticalFormFieldControl) control: VerticalFormFieldControl<any>;
  @ContentChildren(VerticalPrefix, { descendants: true }) prefixChildren: QueryList<VerticalPrefix>;
  @ContentChildren(VerticalSuffix, { descendants: true }) suffixChildren: QueryList<VerticalSuffix>;
  @ContentChildren(VerticalHint, { descendants: true }) hintChildren: QueryList<VerticalHint>;
  @ContentChildren(VerticalError, { descendants: true }) errorChildren: QueryList<VerticalError>;
  @ContentChildren(VerticalLabel, { descendants: true }) labelChildren: QueryList<VerticalError>;

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    @Optional() @Inject(VERTICAL_FORM_FIELD_DEFAULT_OPTIONS) private _defaults) {

    // Set the default through here so the setter gets invoked on the first run
    this.appearance = (_defaults && _defaults.appearance) ? _defaults.appearance : 'filled';
  }

  ngAfterContentInit() {
    this._validateControl();
    this._validateLabel();
    this._validateHints();
    this._validateErrors();

    // Subscribe to changes in the child control state in order to update the form field UI
    this.control.stateChanges.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });

    // Run change detection if the value changes
    if (this.control.ngControl && this.control.ngControl.valueChanges) {
      this.control.ngControl.valueChanges.pipe(takeUntil(this._destroyed)).subscribe(() => this._changeDetectorRef.markForCheck());
    }

    // Run change detection if the prefix or suffix changes
    merge(this.prefixChildren.changes, this.suffixChildren.changes).subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });

    // Re-validate when the number of hints changes
    this.hintChildren.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateHints();
      this._changeDetectorRef.markForCheck();
    });

    // Update UI when the number of errors changes
    this.errorChildren.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateErrors();
      this._changeDetectorRef.markForCheck();
    });

    // Re-validate when the number of labels changes
    this.labelChildren.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._validateLabel();
      this._changeDetectorRef.markForCheck();
    });
  }

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  // Determines whether to display hints or errors
  getDisplayedInfo(): 'error' | 'hint' {
    return (this.errorChildren && this.errorChildren.length > 0 && this.control.errorState) ? 'error' : 'hint'
  }

  // Throws an error if the form field's control is missing
  protected _validateControl() {
    if (!this.control) {
      throw getVerticalFormFieldMissingControlError();
    }
  }

  // Ensure that there is only one `<vertical-error>` specified
  private _validateErrors() {
    if (this.errorChildren && this.errorChildren.length > 1) {
      throw getVerticalFormFieldDuplicateErrorError();
    }
  }

  // Ensure that there is only one `<vertical-hint>` specified
  private _validateHints() {
    if (this.hintChildren && this.hintChildren.length > 1) {
      throw getVerticalFormFieldDuplicateHintError();
    }
  }

  // Ensure that there is only one `<vertical-label>` specified
  private _validateLabel() {
    if (this.labelChildren && this.labelChildren.length > 1) {
      throw getVerticalFormFieldDuplicateLabelError();
    }
  }
}