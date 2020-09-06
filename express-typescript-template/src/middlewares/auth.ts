import Logger from '@/utils/logger'
import { NextFunction, Request, Response } from 'express'
import { ErrorResponseParam } from '@/types/responseParam'
import _jwt from '@/utils/jwt'

/* Collection of instances */
const jwt = new _jwt()
const logger = new Logger(__filename)

class AuthMiddleware {
  public static isLoggedIn  (req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers['ACCESS-TOKEN'] as string
    if (!accessToken) {
      res.status(403).json({
        code: 403,
        error_message: 'User is not logged in',
        error_message_langId: ''
      } as ErrorResponseParam)
    }

    const decoded = jwt.verifyToken(accessToken)
    console.log(decoded)
    next()
  }

  public static isNotLoggedIn (req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers['ACCESS-TOKEN'] as string
    if (accessToken) {
      res.status(403).json({
        code: 403,
        error_message: 'User is already existed',
        error_message_langId: ''
      } as ErrorResponseParam)
    }

    next()
  }
}

export default new AuthMiddleware()
