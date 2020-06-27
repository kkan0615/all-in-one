export interface ItemInterface {
  ITEMCODE: string
  ITEMNAME: string,
  PRICE: number | string,
  UNIT: string
}

export const fakeItems : Array<ItemInterface> = [
  {
    ITEMCODE: '001',
    ITEMNAME: 'Red cookie Set',
    PRICE: 5000,
    UNIT: 'EA'
  },
  {
    ITEMCODE: '002',
    ITEMNAME: 'RedBean Icecream',
    PRICE: 32500,
    UNIT: 'EA'
  },
  {
    ITEMCODE: '003',
    ITEMNAME: 'Green tea cookie',
    PRICE: 250,
    UNIT: 'EA'
  }
]
