import Logger from '@/utils/logger'
import { Request, Response, NextFunction } from 'express'

const logger = new Logger(__filename)

class testMiddleware {
    public alert(req: Request, res: Response, next: NextFunction) {
        const { status } = req.body as {
            status: number
        }
        logger.debug(`to ${status} has been passed`)

        next()
    }
}

export default new testMiddleware()
