import { NextFunction, Request, Response, Router } from 'express'
import Test from '@/controllers/test'
import TestMiddleware from '@/middlewares/test'
import Role from '@/schemas/role'
import User from '@/schemas/user'

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

router.get('/addTestData', async (req: Request, res: Response, next: NextFunction) => {
  const users = await  User.find()
  const roles = await Role.find()

  res.json({
    users,
    roles,
  })
})

export default router
