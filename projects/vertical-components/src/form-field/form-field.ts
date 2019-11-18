
import { ChangeDetectionStrategy, Component, QueryList, ContentChildren, Input, AfterContentInit, ContentChild, OnDestroy } from '@angular/core';
import { VerticalError } from './directives/error';
import { VerticalInput } from '../input/input';
import { tap, takeWhile } from 'rxjs/operators';
import { VerticalPrefix } from './directives/prefix';
import { VerticalSuffix } from './directives/suffix';

@Component({
  selector: 'vertical-form-field',
  templateUrl: 'form-field.html',
  styleUrls: ['form-field.scss'],
  host: {
    '[class.disabled]': 'disabled',
    '[class.focused]': 'focused',
    '[class.error]': 'error',
    '[class.vertical-form-field-appearance-filled]': 'appearance == "filled"',
    '[class.vertical-form-field-appearance-outlined]': 'appearance == "outlined"'
  },
  inputs: ['appearance'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalFormField implements AfterContentInit, OnDestroy {

  private _isAlive = true;
  focused: boolean;
  disabled: boolean;
  error: boolean;

  @ContentChild(VerticalInput, { static: true }) input: VerticalInput;
  @ContentChildren(VerticalPrefix, { descendants: true }) _prefixChildren: QueryList<VerticalPrefix>;
  @ContentChildren(VerticalSuffix, { descendants: true }) _suffixChildren: QueryList<VerticalSuffix>;
  @ContentChildren(VerticalError, { descendants: true }) _errorChildren: QueryList<VerticalError>;

  ngAfterContentInit(): void {
    this.disabled = this.input.disabled;
    if (this._errorState() == 'error') {
      this.error = true;
    }

    this.input.focus.pipe(
      takeWhile(() => this._isAlive),
      tap(isFocused => this.focused = isFocused)
    ).subscribe();
  }

  ngOnDestroy = () => (this._isAlive = false)

  private _errorState(): 'error' | 'hint' {
    return (this._errorChildren && this._errorChildren.length > 0) ? 'error' : 'hint'
  }
}