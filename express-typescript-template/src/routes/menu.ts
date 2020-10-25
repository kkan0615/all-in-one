import { Router } from 'express'
import MenuController  from '@/controllers/menu'
import AuthMiddleware from '@/middlewares/auth'

const router = Router()

router.get('/', AuthMiddleware.isLoggedIn, MenuController.getMenu)

export default router
