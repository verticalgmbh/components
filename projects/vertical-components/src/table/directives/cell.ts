import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
  selector: '[verticalColumnDef]'
})

export class VerticalColumnDef {
  @Input('verticalColumnDef') name: string;
}

@Directive({
  selector: 'caption[vertical-caption]',
  host: {
    'class': 'vertical-caption'
  }
})

export class VerticalCaption {
}

@Directive({
  selector: 'th[vertical-header-cell]',
  host: {
    'class': 'vertical-header-cell'
  }
})

export class VerticalHeaderCell {
}

@Directive({
  selector: 'td[vertical-cell]',
  host: {
    'class': 'vertical-cell'
  }
})

export class VerticalCell {
}

@Directive({
  selector: '[verticalCellDef]',
})

export class VerticalCellDef {
  // context = null;

  constructor(
    public template: TemplateRef<any>,
    public viewContainer: ViewContainerRef) { }

  // ngOnInit(): void {
  //   this.context = {
  //     $implicit: 'element'
  //   };

  //   this.viewContainer.createEmbeddedView(this.template, this.context);
  // }
}

@Directive({
  selector: '[verticalHeaderCellDef]'
})
export class VerticalHeaderCellDef {
  constructor(public template: TemplateRef<any>) { }
}