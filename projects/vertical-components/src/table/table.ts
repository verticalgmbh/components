import { AfterContentInit, ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, ViewContainerRef, Directive, ElementRef, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';

import { VerticalCaption, VerticalHeaderCell, VerticalCell, VerticalCellDef, VerticalColumnDef, VerticalHeaderCellDef } from './directives/cell';
import { getVerticalTableDuplicateCaptionError } from './table-errors';
import { VerticalHeaderRowDef } from './directives/row';

export interface RowOutlet {
  viewContainer: ViewContainerRef;
}

@Directive({ selector: '[headerRowOutlet]' })
export class HeaderRowOutlet {
  constructor(public viewContainer: ViewContainerRef, public elementRef: ElementRef) { }
}

@Directive({ selector: '[dataRowOutlet]' })
export class DataRowOutlet {
  constructor(public viewContainer: ViewContainerRef, public elementRef: ElementRef) { }
}

@Directive({ selector: '[footerRowOutlet]' })
export class FooterRowOutlet {
  constructor(public viewContainer: ViewContainerRef, public elementRef: ElementRef) { }
}

// export interface RenderRow<T> {
//   data: T;
//   dataIndex: number;
//   rowDef: CdkRowDef<T>;
// }

@Component({
  selector: 'table[vertical-table]',
  templateUrl: 'table.html',
  styleUrls: ['table.scss'],
  host: {
    'class': 'vertical-table'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VerticalTable implements AfterContentInit, AfterViewInit {
  ngAfterViewInit(): void {

    // this._headerRowOutlet.viewContainer.createEmbeddedView();
  }
  // private _renderRows: RenderRow<T>[];

  @Input() dataSource;
  @Input() displayedColumns;
  @Input() stickyFooter: boolean;
  @Input() stickyHeader: boolean;

  @ContentChildren(VerticalCaption) caption: QueryList<VerticalCaption>;
  @ContentChildren(VerticalHeaderCell) header: QueryList<VerticalHeaderCell>;
  @ContentChildren(VerticalCell) cells: QueryList<VerticalCell>;
  @ContentChildren(VerticalCellDef) cellDefs: QueryList<VerticalCellDef>;
  @ContentChildren(VerticalColumnDef) columns: QueryList<VerticalColumnDef>;
  @ContentChildren(VerticalHeaderRowDef) test: QueryList<VerticalHeaderRowDef>;

  @ViewChild(DataRowOutlet, { static: true }) dataRowOutlet: DataRowOutlet;
  @ViewChild(HeaderRowOutlet, { static: true }) headerRowOutlet: HeaderRowOutlet;
  @ViewChild(FooterRowOutlet, { static: true }) footerRowOutlet: FooterRowOutlet;

  ngAfterContentInit(): void {
    console.log("Caption: ", this.caption.toArray());
    console.log("Columns: ", this.columns.toArray());
    console.log("Header: ", this.header.toArray());
    console.log("HeaderRowDef: ", this.test.toArray());
    this._validateCaption();
  }

  // Ensure that there is only one caption specified
  private _validateCaption() {
    if (this.caption && this.caption.length > 1) {
      throw getVerticalTableDuplicateCaptionError();
    }
  }

  private _renderRow(outlet: RowOutlet, rowDef, index: number) {
    outlet.viewContainer.createEmbeddedView(rowDef, index);
  }
}