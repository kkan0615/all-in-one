import { OptionTypeEnum } from '../types'

export interface TypeOptionInterface {
  key: OptionTypeEnum,
  name: string
}

export const typeOptions: Array<TypeOptionInterface> = [
  {
    key: OptionTypeEnum.textBox,
    name: 'textBox'
  },
  {
    key: OptionTypeEnum.numberBox,
    name: 'numberBox'
  },
  {
    key: OptionTypeEnum.selectBox,
    name: 'selectBox'
  }
]
