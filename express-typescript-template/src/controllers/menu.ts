import { NextFunction, Request, Response } from 'express'
import Menu from '@/schemas/menu'

class MenuController {
  public static async getMenu (req: Request, res: Response, next: NextFunction) {
    try {
      const menus = await Menu.find({
      }).populate('roleId').populate('parentMenuId')
      res.json({ menus })
    } catch (error) {
      console.error(error)
    }
  }
}

export default MenuController
