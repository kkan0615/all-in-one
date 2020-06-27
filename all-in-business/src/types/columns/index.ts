export interface ColumnInterface {
  text: string,
  textId: string,
  value: string
  align?: 'start' | 'center' | 'end' | 'd-done',
  type : string,
  sortable?: boolean
  filterable?: boolean
  groupable?: boolean
  divider?: boolean
  class?: string | string[]
  width?: string | number
  filter?: (value: any, search: string, item: any) => boolean
  sort?: (a: any, b: any) => number
}

export interface OptionInterface {
  page: number
  itemsPerPage: number
  sortBy: string[]
  sortDesc: boolean[]
  groupBy: string[]
  groupDesc: boolean[]
  multiSort: boolean
  mustSort: boolean
}
