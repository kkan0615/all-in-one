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
