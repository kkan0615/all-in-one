export interface INestedArray<T> {
  [key: string]: any;
  children: Array<T>
}

export function createNestedArray<T extends INestedArray<T>> (items: Array<T>, parent: number | string, keyExpr: string, parentKeyExpr: string): Array<T> {
  const nested: Array<T> = []

  if (keyExpr || !parentKeyExpr) {
    throw new Error('keyExpr or parentKeyExpr are not exited')
  }

  Object.values(items).forEach(item => {
    if (item[parentKeyExpr] === parent) {
      const children = createNestedArray(items, parent, keyExpr, parentKeyExpr)

      if (children.length) {
        item.children = children
      }

      nested.push(item)
    }
  })

  return nested
}

export function createNestedMenu (array: Array<any>, parentIdExpr: number | string, keyIdExpr: number | string) {
  const topArray = array.filter(e => {
    return !e[parentIdExpr]
  })

  topArray.map(e => {
    e.children = createChildNestedMenu(array, parentIdExpr, keyIdExpr, e)
  })
}

export function createChildNestedMenu (array: Array<any>, parentIdExpr: number | string, keyIdExpr: number | string, parent: any) {
  const children = array.filter(e => {
    return e[parentIdExpr] === parent[keyIdExpr]
  })

  children.map(child => {
    child.children = createChildNestedMenu(array, parentIdExpr, keyIdExpr, child)
  })

  return children
}
