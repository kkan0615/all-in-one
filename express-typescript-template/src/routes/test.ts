import { Router } from 'express'
import Test from '@/controllers/test'
import TestMiddleware from '@/middlewares/test'

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


export default router
