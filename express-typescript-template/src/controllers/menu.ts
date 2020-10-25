import { NextFunction, Request, Response } from 'express'
import Menu from '@/schemas/menu'
import { createNestedMenu } from '@/utils/nestedArray'

// namespace MenuController {
//   export interface IVueRouter {
//     path: string,
//     name: string,
//     component: any,
//     meta: {
//       icon: string,
//       isForGroup: true,
//       menuType: string,
//       margin: number,
//       role?: Buffer,
//       title: string
//     }
//     children?: Array<IVueRouter>
//   }
// }

class MenuController {
  public static async getMenu (req: Request, res: Response) {
    try {
      const menus = await Menu.find({
      }).populate('parentMenuId')

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const treeViewMenus = await createNestedMenu(menus)
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
