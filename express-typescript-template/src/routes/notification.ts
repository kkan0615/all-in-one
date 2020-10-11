import { NextFunction, Request, Response, Router } from 'express'
import Notification from '@/controllers/notification'
import TestMiddleware from '@/middlewares/test'

const router = Router()

router.get('/unreadAll', Notification.getAllUnreadNotifications)

export default router
