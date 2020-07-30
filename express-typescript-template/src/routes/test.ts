import { Router } from 'express'
import Test from '@/controllers/test'

const router = Router()

router.get('/', Test.getHandler)

router.post('/', Test.postHandler)

router.put('/', Test.putHandler)

router.delete('/', Test.deleteHandler)

export default router
