import { Router } from 'express'
import User from '@/controllers/user'

const router = Router()

router.get('/users', User.getAllUsers)
router.get('/roles', User.getAllRoles)

export default router
