import Logger from '@/utils/logger'
import { NextFunction, Request, Response } from 'express'
import { ErrorResponseParam } from '@/types/responseParam'
import _jwt from '@/utils/jwt'
import { StatusCode } from '@/types/statusCode'
import User from '@/schemas/user'
import { tokenRule } from '@/config'
import { setTokenToHeader } from '@/utils/auth'

/* Collection of instances */
const jwt = new _jwt()
const logger = new Logger(__filename)

class AuthMiddleware {
  public static async isLoggedIn  (req: Request, res: Response, next: NextFunction) {

    const accessToken = req.headers['access-token'] as string
    const refreshToken = req.headers['refresh-token'] as string
    if (!accessToken) {
      res.status(403).json({
        code: 403,
        error_message: 'User is not logged in',
        error_message_langId: ''
      } as ErrorResponseParam)
    }

    const decoded = jwt.verifyToken(accessToken)

    /* If there is no data from decoded token */
    if (!decoded) {
      return res.status(StatusCode.TokenError).json({
        code: StatusCode.TokenError,
        accessToken: '',
        message: 'token is not verified',
        user: {}
      })
    }

    /* Access token is expired */
    if (decoded.name === 'TokenExpiredError') {
      const decodedRefresh = jwt.verifyToken(refreshToken)
      if (!decodedRefresh || decodedRefresh.name === 'TokenExpiredError') {
        return res.status(StatusCode.TokenError).json({
          code: StatusCode.TokenError,
          accessToken: '',
          message: 'Token is expired'
        })
      }

      const exUser = await User.findOne({
        _id: decodedRefresh._id,
      }).populate('roleId')

      if (!exUser) {
        return res.status(StatusCode.NoExUserError).json({
          code: StatusCode.NoExUserError,
          accessToken: '',
          message: 'User is not existed',
          user: exUser
        })
      }

      /* Sign new access token */
      const newAccessToken = jwt.signToken({
        _id: exUser._id,
        userId: exUser.userId
      }, tokenRule.accessTokenTime)

      // res.setHeader('ACCESS-TOKEN', newAccessToken)
      // res.setHeader('REFRESH-TOKEN', refreshToken)

      setTokenToHeader(res, newAccessToken, refreshToken)
    }

    const user = await User.findById(decoded._id)
    console.log(76, user)
    req.body.user = user
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

export default AuthMiddleware
