import {
  Component,
  OnInit,
  AfterContentInit,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  OnChanges
} from '@angular/core';
import { OnSortCallbackData, SortingStatus } from './models/datagrid.model';
import { ColumnComponent } from './components/column/column.component';
import { UtilityService } from './services/utility.service';
import cloneDeep from 'lodash/cloneDeep';
@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent implements OnInit, AfterContentInit, OnChanges {
  public name = '';
  @Input() gridData: any[] = [];
  @Input() sortable: boolean;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onSortEvt: EventEmitter<OnSortCallbackData> = new EventEmitter<
    OnSortCallbackData
  >();
  @ContentChildren(ColumnComponent) columnComponent: QueryList<ColumnComponent>;
  public tableId = null;
  public copyOfGridData: any[] = [];
  public sortingColStatus = {};
  public sortingStatus: typeof SortingStatus = SortingStatus;
  public columnConfig = [];
  public sortableColFields: string[] = [];
  constructor(public utilityService: UtilityService) {}

  ngOnInit() {
    this.tableId = this.utilityService.uuid();
  }

  ngAfterContentInit() {
    this.copyOfGridData = cloneDeep(this.gridData);
    this.columnConfig = this.columnComponent.toArray();
  }

  ngOnChanges() {
    if ( this.columnConfig && this.columnConfig.length > 0 ) {
      this.setSort();
    }
  }

  private setSort() {
    this.sortingColStatus = {};
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.columnConfig.length; i++) {
      this.sortingColStatus[
        this.columnConfig[i].field
      ] = this.sortingStatus.NORMAL;
    }
    if (this.sortable) {
      this.sortColumn(this.columnConfig[0].field, null);
    }
}
  sortColumn(field, $event) {
    if (this.sortable) {
      this.sortableColFields = Object.keys(this.sortingColStatus);
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.sortableColFields.length; i++) {
        if (field !== this.sortableColFields[i]) {
          this.sortingColStatus[
            this.sortableColFields[i]
          ] = this.sortingStatus.NORMAL;
        }
      }
      if (+this.sortingColStatus[field] === +this.sortingStatus.NORMAL) {
        this.copyOfGridData = cloneDeep(this.gridData);
      }
      if (+this.sortingColStatus[field] === +this.sortingStatus.DESC) {
        this.sortingColStatus[field] = this.sortingStatus.NORMAL;
      } else {
        this.sortingColStatus[field] = this.sortingColStatus[field] + 1;
      }
      if (+this.sortingColStatus[field] === +this.sortingStatus.NORMAL) {
      } else {
        this.gridData.sort(this.keysort(field, this.sortingColStatus[field]));
      }
    }
  }
  private keysort(key: string, sortType: string) {
    return (a: string[], b: string[]) => {
      return +sortType === +this.sortingStatus.DESC
        ? b[key].localeCompare(a[key])
        : a[key].localeCompare(b[key]);
    };
  }
}
