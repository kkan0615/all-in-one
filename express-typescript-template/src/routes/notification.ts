import { Router } from 'express'
import Notification from '@/controllers/notification'
import AuthMiddleware from '@/middlewares/auth'

const router = Router()
router.use('/check/*', AuthMiddleware.isLoggedIn)

router.get('/check/unreadAll', Notification.getAllUnreadNotifications)

export default router
