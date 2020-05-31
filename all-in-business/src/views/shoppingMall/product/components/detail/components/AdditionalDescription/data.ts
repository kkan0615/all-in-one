/**
 * icon: icon
 * title: title
 * descripton: description with html element
 */
export interface AddtionalDescription {
  icon: string
  title: string
  description: string /** HTML will be here */
}

export const basicAddtionalDescription: Array<AddtionalDescription> = [
  {
    icon: '',
    title: 'Delivery',
    description: 'Free - delivery'
  },
  {
    icon: '',
    title: 'Return or Refund',
    description: 'Some address will be here!'
  },
  {
    icon: '',
    title: 'Fix',
    description: 'Some address will be here!'
  }
]
