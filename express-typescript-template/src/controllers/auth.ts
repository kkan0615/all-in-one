import { NextFunction, Request, Response } from 'express'
import { ResponseParam } from '@/types/responseParam'
import _jwt from '@/utils/jwt'
import { users } from '@/models/user'
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
    console.log(hashedPassword)
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
      }, '3m')
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
      }, '1m')


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
  public static async logout (req: Request, res: Response, next: NextFunction) {
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
  public static async getDetail (req: Request, res: Response, next: NextFunction) {
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

    if (decoded.name === 'TokenExpiredError') {
      const decodedRefresh = jwt.verifyToken(refreshToken)
      console.log('exp')
      if (!decodedRefresh || decoded.name === 'TokenExpiredError') {
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

      return res.json({
        code: 200,
        accessToken: token,
        refreshToken: refreshToken,
        message: 'Success to get detail',
        user: exUser
      } as UserReturnParams)
    }


    // if (decoded.name === 'TokenExpiredError') {
    //   console.log('test')
    // }
    //
    // // const exUser = users.find(user => user.id === decoded.id)
    // const exUser = await User.findOne({
    //   _id: decoded._id
    // }).populate('roleId')
    // /* Access Token is expired */
    // if (nowValueOf < decoded.exp * 1000) {
    //   if(!exUser) {
    //     return res.status(403).json({
    //       code: 403,
    //       accessToken: '',
    //       message: 'User is not existed or token is expired',
    //       user: exUser
    //     } as UserReturnParams)
    //   }
    //   const refreshTokenDecoded = jwt.verifyToken(exUser.refreshToken)
    //
    //   /* Refresh token is not expired */
    //   if (nowValueOf <= refreshTokenDecoded.exp * 1000) {
    //     const newAccessToken = jwt.signToken({
    //       _id: exUser._id,
    //       userId: exUser.userId
    //     }, '2h')
    //
    //     /* Reset Refresh token */
    //     const updatedUser = await User.findOneAndUpdate({
    //       _id: exUser._id
    //     }, {
    //       refreshToken: jwt.signToken({
    //         _id: exUser._id,
    //         userId: exUser.userId
    //       } as IJwtPayload, '24h')
    //     }).populate('roleId')
    //
    //     return res.json({
    //       code: 200,
    //       accessToken: newAccessToken,
    //       message: 'Success to get detail',
    //       user: updatedUser
    //     } as UserReturnParams)
    //   } else {
    //     exUser.refreshToken = ''
    //
    //     return res.json({
    //       code: 200,
    //       accessToken: '',
    //       message: 'Success to Logout',
    //       user: {}
    //     } as UserReturnParams)
    //   }
    // }

    return res.json({
      code: 200,
      accessToken: token,
      message: 'Success to get detail',
      // user: exUser
    } as UserReturnParams)
  }
}

export default AuthController
