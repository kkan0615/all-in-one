import { NextFunction, Request, Response } from 'express'
import _jwt from '@/utils/jwt'
import User from '@/schemas/user'
import moment from 'moment'
import { error } from 'winston'
import { StatusCode } from '@/types/statusCode'

const jwt = new _jwt()

interface IJwtPayload {
  _id: string,
  userId: string
}

interface UserReturnParams {
  code: number
  accessToken: string
  refreshToken: string
  message: string
  user?: any
}

interface IUserLoginResParams {
  userId: string
  hashedPassword: string
  password: string
}

class AuthController {
  /**
   * Login
   * @param req - Request
   * @param res - Response
   * @param next - Next
   */
  public static async login (req: Request, res: Response, next: NextFunction) {
    const { userId, hashedPassword } = req.body
    try {
      const exUser = await User.findOne({
        userId,
        password: hashedPassword
      })

      if (!exUser) {
        return res.status(StatusCode.NoExUserError).json({
          code: StatusCode.NoExUserError,
          accessToken: '',
          message: 'UserId and Password are not matched',
          user: exUser
        } as UserReturnParams)
      }

      const refreshToken = jwt.signToken({
        _id: exUser._id,
        userId: exUser.userId
      }, '12h')

      const updatedUser = await User.findOneAndUpdate({
        _id: exUser._id
      }, {
        refreshToken,
        lastTime: moment().format('MMMM Do YYYY, h:mm:ss a')
      }).populate('roleId')

      if (!updatedUser) {
        return res.status(StatusCode.TokenError).json({
          code: StatusCode.TokenError,
          accessToken: '',
          message: 'UserId and Password are not matched',
          user: exUser
        } as UserReturnParams)
      }
      const accessToken = jwt.signToken({
        _id: updatedUser._id,
        userId: updatedUser.userId
      }, '1h')

      /* Set the headers */
      res.setHeader('ACCESS-TOKEN', accessToken)
      res.setHeader('REFRESH-TOKEN', refreshToken)

      return res.json({
        code: 200,
        accessToken: accessToken,
        refreshToken: refreshToken,
        message: 'Success to Login',
        user: updatedUser
      } as UserReturnParams)
    } catch (e) {
      error(e)
    }
  }

  /**
   * Test for GET
   * @param req - Request
   * @param res - Response
   * @param next - Next
   */
  public static async logout (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const refreshToken = req.headers['refresh-token'] as string

    if (refreshToken) {
      const exUser = await User.findOne({
        refreshToken
      })

      if (exUser) {
        await User.findOneAndUpdate({
          refreshToken,
        }, {
          refreshToken: undefined
        })
      }
    }

    /* Set the headers */
    res.setHeader('ACCESS-TOKEN', '')
    res.setHeader('REFRESH-TOKEN', '')

    return res.json({
      code: 200,
      accessToken: '',
      refreshToken: '',
      message: 'Success to Logout',
      user: {}
    } as UserReturnParams)
  }

  /**
     * Test for GET
     * @param req - Request
     * @param res - Response
     * @param next - Next
     */
  public static async getDetail (req: Request, res: Response, next: NextFunction): Promise<Response> {
    const token = req.headers['access-token'] as string
    const refreshToken = req.headers['refresh-token'] as string

    if (!token) {
      return res.status(403).json({
        code: 403,
        accessToken: '',
        message: 'token is not existed',
        user: {}
      } as UserReturnParams)
    }

    const decoded = jwt.verifyToken(token)
    const decodedRefresh2 = jwt.verifyToken(refreshToken)
    console.log('decoded', decoded)
    console.log('moment(decodedRefresh.exp)', moment(decodedRefresh2.exp * 1000).fromNow())
    console.log('substract', moment(decodedRefresh2.exp * 1000).subtract(1, 'hour'))

    if (!decoded) {
      return res.status(StatusCode.TokenError).json({
        code: StatusCode.TokenError,
        accessToken: '',
        message: 'token is not verified',
        user: {}
      } as UserReturnParams)
    }

    /* Access token is expired */
    if (decoded.name === 'TokenExpiredError') {
      const decodedRefresh = jwt.verifyToken(refreshToken)
      if (!decodedRefresh || decodedRefresh.name === 'TokenExpiredError') {
        return res.status(StatusCode.TokenError).json({
          code: StatusCode.TokenError,
          accessToken: '',
          message: 'Token is expired'
        } as UserReturnParams)
      }

      const exUser = await User.findOne({
        _id: decodedRefresh._id,
      }).populate('roleId')

      if(!exUser) {
        return res.status(StatusCode.NoExUserError).json({
          code: StatusCode.NoExUserError,
          accessToken: '',
          message: 'User is not existed',
          user: exUser
        } as UserReturnParams)
      }

      console.log(decodedRefresh.exp)
      console.log('moment(decodedRefresh.exp)', moment(decodedRefresh.exp))

      const newAccessToken = jwt.signToken({
        _id: exUser._id,
        userId: exUser.userId
      } as IJwtPayload, '2h')

      res.setHeader('ACCESS-TOKEN', newAccessToken)
      res.setHeader('REFRESH-TOKEN', refreshToken)

      return res.json({
        code: 200,
        accessToken: newAccessToken,
        refreshToken: refreshToken,
        message: 'Success to get detail',
        user: exUser
      } as UserReturnParams)

    } else {
      const exUser = await User.findOne({
        _id: decoded._id,
      }).populate('roleId')

      res.setHeader('ACCESS-TOKEN', token)
      res.setHeader('REFRESH-TOKEN', refreshToken)

      return res.json({
        code: 200,
        accessToken: token,
        refreshToken: refreshToken,
        message: 'Success to get detail',
        user: exUser
      } as UserReturnParams)
    }
  }
}

export default AuthController
