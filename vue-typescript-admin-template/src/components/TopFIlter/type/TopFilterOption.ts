export type DataType = 'number' | 'date' | 'datetime' | 'compareDate' | 'text' | 'select' | 'autoComplete' | 'codeFinder'

export interface TopFilterOption<T> {
  caption: string;
  dataType: DataType;
  dataField: keyof T;
}
