import { Component, Input, Output, ContentChildren, EventEmitter, QueryList } from '@angular/core';
import { OnSortCallbackData } from '../components/datagrid/models/datagrid.model';
@Component({
  selector: 'mat-label',
  template: ''
})
export class MatLabelComponent {
}

@Component({
  selector: 'mat-form-field',
  template: ''
})
export class MatFormFieldComponent {
}

@Component({
  selector: 'app-body-template-loader',
  template: ''
})
export class AppBodyTemplateLoaderComponent {
  @Input() column: any;
  @Input() rowData: any;
  @Input() rowIndex: any;
}

@Component({
  selector: 'jar-toaster',
  template: ''
})
export class JarvisToasterComponent {
}



@Component({
  selector: 'app-column',
  template: ''
})
export class ColumnComponent {
  @Input() field: string;
  @Input() title: string;
  @Input() width: string;
}

@Component({
  selector: 'ngx-ui-loader',
  template: ''
})
export class UiLoaderComponent {
}

@Component({
  selector: 'app-datagrid',
  template: ''
})
export class DatagridComponent {

  public name = '';
  @Input() gridData: any[] = [];
  @Input() sortable: boolean;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSortEvt: EventEmitter<OnSortCallbackData> = new EventEmitter<
    OnSortCallbackData
  >();
  @ContentChildren(ColumnComponent) columnComponent: QueryList<ColumnComponent>;
}
