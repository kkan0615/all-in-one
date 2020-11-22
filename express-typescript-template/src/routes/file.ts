import { Router } from 'express'
import FileController from '@/controllers/file'

const router = Router()

router.get('/image/download/:fileDirectory/:fileName', FileController.downloadFile)
router.get('/image/:fileDirectory/:fileName', FileController.getImage)
router.post('/image/loadImageByPost', FileController.loadImageByPost)

export default router
