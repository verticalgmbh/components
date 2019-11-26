import { Directive } from "@angular/core";
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Directive({
  selector: 'vertical-form-field-control'
})
export abstract class VerticalFormFieldControl<T> {
  readonly disabled: boolean;
  readonly errorState: boolean;
  readonly focused: boolean;
  readonly id: string;
  readonly ngControl: NgControl | null;
  readonly placeholder: string;
  readonly required: boolean;
  readonly stateChanges: Observable<void>;
  value: T | null;
}