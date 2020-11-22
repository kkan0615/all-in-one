export type TypeOfViews = 'table' | 'grid'
export type TypeOfVisible = 'infinite' | 'paging'

export interface ViewTypeList {
  icon: string;
  dataField: TypeOfViews;
  caption: string;
}
