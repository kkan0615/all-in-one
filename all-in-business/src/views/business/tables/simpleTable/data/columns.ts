import { ColumnInterface } from '@/types/columns'

export const columns : Array<ColumnInterface> = [
  {
    text: 'Itemcode',
    textId: 'itemname',
    value: 'ITEMCODE',
    align: 'center',
    type: 'textBox'
  },
  {
    text: 'Itemname',
    textId: 'itemname',
    value: 'ITEMNAME',
    align: 'center',
    type: 'textBox'
  },
  {
    text: 'Price',
    textId: 'price',
    value: 'PRICE',
    align: 'end',
    type: 'textBox'
  },
  {
    text: 'Unit',
    textId: 'unit',
    value: 'UNIT',
    align: 'center',
    type: 'textBox'
  }

]
