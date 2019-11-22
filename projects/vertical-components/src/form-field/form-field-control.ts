import { Directive } from "@angular/core";
import { Observable } from 'rxjs';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'vertical-form-field-control'
})
export abstract class VerticalFormFieldControl<T> {

  value: T | null;

  readonly stateChanges: Observable<void>;

  readonly id: string;

  readonly placeholder: string;

  readonly ngControl: NgControl | null;

  readonly focused: boolean;

  readonly required: boolean;

  readonly disabled: boolean;

  readonly errorState: boolean;

  abstract onContainerClick(): void;
}