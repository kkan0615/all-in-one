import store from '@/store'
import { CustomRouteConfig } from '@/types/customRouteConfig'

/*
*
*  @TODO 최상위가 '' 이면 role 있는게 addroutes부터안됨
*    @TODO: role 0으로 변경하고 1인거 하나 mongodb에 생성하기
* */


export function checkPermission (hexString: number, roleGrade: number): boolean {
  const grade = 1 << roleGrade
  const result = hexString & grade
  console.log('hexString', hexString)
  console.log(result)
  /*
  * 0이면 권한 X
  * 0이 아닌 다른 숫자면 권한 O
  */
  return result !== 0
}

const searchPermittedChildRoutes = (array: Array<CustomRouteConfig>, role: number) => {
  const result: Array<CustomRouteConfig> = []
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (!role || role < 0) {
      if (element.meta?.role === '') {
        result.push(element)
      }
    } else {
      if (role === 0) {
        result.push(element)
      } else {
        console.log(element)
        console.log(element.meta?.role)
        console.log('role grade', role)
        if (element.meta?.role === '' || (element.meta?.role && checkPermission(parseInt(element.meta.role), role))) {
          console.log('passss')
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
  if (!role || role < 0) {
    filteredArray = array.filter(route => route.meta?.role === '')
  } else {
    /* Role 0 means that this role has all permissions */
    if (role === 0) {
      filteredArray = array
    } else {
      filteredArray = array.filter(route => route.meta?.role === '' || (route.meta?.role && checkPermission(parseInt(route.meta.role), role)))
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
