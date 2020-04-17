export interface GridConfig {
  classes: string;
  sortable: boolean;
}

export interface ColumnConfig {
  classes: string;
  sortable: boolean;
}

export enum SortingStatus {
  NORMAL,
  ASC,
  DESC
}

export interface OnSortCallbackData {
  originalEvent: any;
  field: string;
  status: string;
}
