import { NextFunction, Request, Response } from 'express'
import Menu, { IMenu } from '@/schemas/menu'
import { INestedArray } from '@/utils/nestedArray'

namespace MenuController {
  export interface IVueRouter {
    path: string,
    name: string,
    component: any,
    meta: {
      icon: string,
      isForGroup: true,
      menuType: string,
      margin: number,
      role?: Buffer,
      title: string
    }
    children?: Array<IVueRouter>
  }
}
function getNestedChildren (items: Array<any>, parent: string) {
  const nested: Array<any> = []
  Object.values(items).forEach(item => {
    // parent can be a string or a number
    /* eslint-disable-next-line eqeqeq */
    if (item.parentMenuId._id == parent) {
      const children = getNestedChildren(items, item._id)

      if (children.length) {
        /* eslint-disable-next-line no-param-reassign */
        item.children = children
      }

      nested.push(item)
    }
  })

  return nested
}

class MenuController {
  public static async getMenu (req: Request, res: Response, next: NextFunction) {
    try {
      const menus = await Menu.find({
      }).populate('parentMenuId')

      const treeViewMenus = menus.map(menu => {
        return {
          menu,
          children: []
        }
      })
      console.log(treeViewMenus)
      res.json({
        menus,
        treeViewMenus
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export default MenuController
