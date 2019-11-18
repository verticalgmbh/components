import { Directive } from "@angular/core";

@Directive({
  selector: 'vertical-hint',
  host: {
    'class': 'vertical-form-field-hint'
  }
})

export class VerticalHint { }