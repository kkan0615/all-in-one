export interface FormInterface {
  id: number,
  label: string,
  option: OptionTypeEnum,
  validation: boolean,
  value: any
}

export enum OptionTypeEnum {
  textBox = 'textBox',
  numberBox = 'numberBox',
  selectBox = 'selectBox'
}
