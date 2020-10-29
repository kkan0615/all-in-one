import store from '@/store'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import { hexTodDecimal } from '@/utils/bitwise'

/*
@commnet example...
* const grade = 1 << 700
const decimal = parseInt('FFFFFFFFFFFFF', 16)
const result = decimal & grade
console.log(result)
* */

/**
 * Check the user role is permitted in this page
 * @param routeRole - Route role
 * @param roleGrade - User's role grade
 */
export function checkPermission (routeRole: string, roleGrade: number): boolean {
  const grade = 1 << roleGrade
  const decimal = hexTodDecimal(routeRole)
  const result = decimal & grade
  /*
  * 0이면 권한 X
  * 0이 아닌 다른 숫자면 권한 O
  */
  console.log('decimal ', decimal, ' routeRole ', routeRole, ' roleGrade ', roleGrade)
  console.log(result !== 0)
  return result !== 0
}

const searchPermittedChildRoutes = (array: Array<CustomRouteConfig>, role: number) => {
  const result: Array<CustomRouteConfig> = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]

    if (role < 0) {
      if (!element.meta?.role) {
        result.push(element)
      }
    } else {
      if (role === 0) {
        result.push(element)
      } else {
        if (!element.meta?.role || (element.meta?.role && checkPermission(element.meta.role.toString('binary'), role))) {
          result.push(element)
        }
      }
    }
    if (element.children && element.children.length > 0) {
      element.children = searchPermittedChildRoutes(element.children, role)
    }
  }
  return result
}

export const searchPermittedRoutes = (array: Array<CustomRouteConfig>) => {
  const role = store.getters['user/roleGrade']
  let filteredArray
  /* role -1 means role is empty*/
  if (role < 0) {
    filteredArray = array.filter(route => !route.meta?.role)
  } else {
    /* Role 0 means that this role has all permissions */
    if (role === 0) {
      filteredArray = array
    } else {
      filteredArray = array.filter(route => !route.meta?.role || route.meta?.role && checkPermission(route.meta.role.toString('binary'), role))
    }
  }
  const permittedArray: Array<CustomRouteConfig> = []
  for (let i = 0; i < filteredArray.length; i++) {
    const element = filteredArray[i]
    if (element.children && element.children.length > 0) {
      element.children = searchPermittedChildRoutes(element.children, role)
    }
    permittedArray.push(element)
  }

  return permittedArray
}
