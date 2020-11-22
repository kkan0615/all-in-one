import { IMenu } from '@/schemas/menu'

export interface INestedMenu extends IMenu{
  children: Array<IMenu>
}

export async function createNestedMenu (array: Array<INestedMenu>): Promise<Array<INestedMenu>> {
  // console.log(array)
  const topArray = array.filter(menu => {
    return !menu.parentMenuId || !menu.parentMenuId._id
  })

  topArray.map(async parent => {
    parent.children = await createChildNestedMenu(array, parent)
  })

  // console.log('Top', topArray)
  return topArray
}

export async function createChildNestedMenu (array: Array<INestedMenu>, parent: INestedMenu): Promise<Array<INestedMenu>> {
  // console.log('parent', parent)
  const children = array.filter(e => {
    if (!e.parentMenuId) return false
    // console.log('current of parent id:', e.parentMenuId._id)
    // console.log('current Parent:', parent._id.toString())
    // console.log(e.parentMenuId._id.toString() === parent._id.toString())
    return e.parentMenuId._id.toString() === parent._id.toString()
  })

  // console.log('children', children)

  children.map(async child => {
    child.children = await createChildNestedMenu(array, child)
  })

  return children
}
