import Logger from '@/utils/logger'
import { NextFunction, Request, Response } from 'express'

const logger = new Logger(__filename)

class IpAddressMiddleware {
  public alert (req: Request, res: Response, next: NextFunction) {
    req.body.ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    next()
  }
}

export default new IpAddressMiddleware()
