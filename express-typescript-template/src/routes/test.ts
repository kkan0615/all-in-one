import { NextFunction, Request, Response, Router } from 'express'
import Test from '@/controllers/test'
import TestMiddleware from '@/middlewares/test'
import Role from '@/schemas/role'
import User from '@/schemas/user'
import Menu, { IMenu } from '@/schemas/menu'
import SocketIo from '@/socketIo'
import Notification from '@/schemas/notification'
import AuthMiddleware from '@/middlewares/auth'

const router = Router()

router.use('/debug/*', TestMiddleware.alert)

router.get('/debug', Test.getHandler)

router.post('/debug', Test.postHandler)

router.put('/debug', Test.putHandler)

router.delete('/debug', Test.deleteHandler)

router.get('/', Test.getHandler)

router.post('/', Test.postHandler)

router.put('/', Test.putHandler)

router.delete('/', Test.deleteHandler)

router.post('/debug/big/socketRoute', AuthMiddleware.isLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
  console.log('--------------------------Big----------------------')
  const socket = await SocketIo.connectionPool
  console.log(req.body.user)
  const notiSocket = socket?.of('/notification')
  if (!notiSocket) {
    return res.json({
      message: 'fucnked up'
    })
  }
  const newNoti = await Notification.findById('5f8afeaf3ee75139e8d90a4f')
  // console.log('rooms', notiSocket.)
  notiSocket.emit('addNotification', newNoti)
  res.json({
    message: 'success'
  })
})

router.get('/addTestData', async (req: Request, res: Response, next: NextFunction) => {
  const users = await User.find().populate('roleId')
  const roles = await Role.find()
  // const topMenu = await Menu.create({
  //   title: 'Top Async Menu',
  //   name: 'TopMenu',
  //   parentMenuId: null,
  //   description: 'Test Top Async Menu',
  //   isForGroup: true,
  //   hidden: false,
  //   filePath: 'AsyncMenu/Top',
  //   icon: 'search',
  //   menuType: 'desktop',
  //   path: 'asyncMenu',
  // } as IMenu)
  //
  // const childMenu1 = await Menu.create({
  //   title: 'childMenu1 Async Menu',
  //   name: 'ChildMenu1',
  //   parentMenuId: topMenu,
  //   description: 'Test childMenu1 Async Menu',
  //   isForGroup: false,
  //   hidden: false,
  //   filePath: 'AsyncMenu/childMenu1',
  //   icon: 'search',
  //   menuType: 'desktop',
  //   path: 'child1',
  // } as IMenu)

  const menus = await Menu.find().populate('parentMenuId')

  res.json({
    users,
    roles,
    menus
  })
})

export default router
