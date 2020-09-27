import { Router } from 'express'
import MenuController  from '@/controllers/menu'

const router = Router()

router.get('/', MenuController.getMenu)

export default router
