import { RouteConfig } from 'vue-router'
import { UserModule } from '@/store/modules/uesr'

const hasRoles = (roles: Array<string>, comparedRoles: Array<string>) => {
  const result = roles.some((role: string) => {
    return comparedRoles.indexOf(role) >= 0
  })

  return result
}

export const getPermittedMenus = (menus: Array<RouteConfig>) => {
  const permitted = menus.filter(menu => {
    if (menu.meta.roles.length === 0) {
      return true
    }

    return hasRoles(menu.meta.roles, UserModule.roles)
  })

  const result = permitted.map(menu => {
    menu.children = menu.children?.filter(child => {
      if (child.meta.roles.length === 0) {
        return true
      }

      return hasRoles(child.meta.roles, UserModule.roles)
    })
    return menu
  })

  return result
}
