import { dxElement } from 'devextreme/core/element'

export type DxSelected<T, P extends number | string> = {
  component?: any;
  element?: dxElement;
  model?: any;
  currentSelectedRowKeys?: Array<P>;
  currentDeselectedRowKeys?: Array<P>;
  selectedRowKeys?: Array<P>;
  selectedRowsData?: Array<T>;
}
