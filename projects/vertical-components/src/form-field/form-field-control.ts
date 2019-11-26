import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';

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