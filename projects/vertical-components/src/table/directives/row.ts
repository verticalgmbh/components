import { TemplateRef, Directive } from '@angular/core';

@Directive({
  selector: '[verticalHeaderRowDef]',
  inputs: ['columns: matHeaderRowDef']
})
export class VerticalHeaderRowDef {
  constructor(template: TemplateRef<any>) {
  }
}