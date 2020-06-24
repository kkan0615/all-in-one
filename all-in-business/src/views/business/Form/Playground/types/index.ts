export interface InputFormInterface {
  id: number,
  label: string,
  option: OptionTypeEnum,
  validation: boolean,
  value: any,
  optionArray: null | Array<OptionArrayInterface>
}

export enum OptionTypeEnum {
  textBox = 'textBox',
  numberBox = 'numberBox',
  selectBox = 'selectBox',
  emailBox = 'emailBox'
}

export interface OptionArrayInterface {
  code: string,
  value: string
}
