import { Directive } from "@angular/core";

@Directive({
  selector: 'vertical-error',
  host: {
    'class': 'vertical-form-field-error'
  }
})

export class VerticalError { }