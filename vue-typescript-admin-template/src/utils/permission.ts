import store from '@/store'
import { CustomRouteConfig } from '@/types/customRouteConfig'

const searchPermittedChildRoutes = (array: Array<CustomRouteConfig>, role: string) => {
  const result: Array<CustomRouteConfig> = []

  for (let i  = 0; i < array.length; i ++) {
    const element = array[i]
    if (!role) {
      if (element.meta?.role === '') {
        result.push(element)
      } else {
        return []
      }
    } else {
      result.push(element)
    }

    if (element.children && element.children.length > 0) {
      element.children = searchPermittedChildRoutes(element.children, role)
    }
  }
  return result
}

export const searchPermittedRoutes = (array: Array<CustomRouteConfig>) => {
  const role = store.getters['user/role']
  let filteredArray
  if (!role) {
    filteredArray = array.filter(route => route.meta?.role === '')
  } else {
    filteredArray = array
  }

  const permittedArray: Array<CustomRouteConfig> = []
  for (let i = 0; i < filteredArray.length; i++) {
    const element = filteredArray[0]
    if (element.children && element.children.length > 0) {
      element.children = searchPermittedChildRoutes(element.children, role)
    }
    permittedArray.push(element)
  }

  return permittedArray
}
