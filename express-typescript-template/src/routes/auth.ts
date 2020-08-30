import { Router } from 'express'
import AuthController  from '@/controllers/auth'

const router = Router()

router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
router.post('/getDetail', AuthController.getDetail)

export default router
