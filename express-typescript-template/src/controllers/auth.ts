import { NextFunction, Request, Response } from 'express'
import { ResponseParam } from '@/types/responseParam'
import _jwt from '@/utils/jwt'
import { users } from '@/models/user'
import User from '@/schemas/user'
import moment from 'moment'
import { error } from 'winston'

const jwt = new _jwt()

interface IJwtPayload {
  _id: string,
  userId: string
}

interface UserReturnParams {
  code: number
  accessToken: string
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

    console.log(req.body)

    try {
      const exUser = await User.findOne({
        userId,
        password: hashedPassword
      })

      console.log('42', exUser)
      if (!exUser) {
        return res.status(403).json({
          code: 403,
          accessToken: '',
          message: 'UserId and Password are not matched',
          user: exUser
        } as UserReturnParams)
      }
      /* Create accessToken */
      // const accessToken2 = jwt.signToken(exUser2, '2h')
      /* Create refreshToken */
      // exUser2.refreshToken = jwt.signToken(exUser2, '24h')


      // exUser2.lastTime = moment().format('MMMM Do YYYY, h:mm:ss a')
      const updatedUser = await User.findOneAndUpdate({
        _id: exUser._id
      }, {
        refreshToken: jwt.signToken({
          _id: exUser._id,
          userId: exUser.userId
        }, '24h'),
        lastTime: moment().format('MMMM Do YYYY, h:mm:ss a')
      }).populate('roleId')
      console.log('test', updatedUser)
      if (!updatedUser) {
        return res.status(403).json({
          code: 403,
          accessToken: '',
          message: 'UserId and Password are not matched',
          user: exUser
        } as UserReturnParams)
      }
      const accessToken = jwt.signToken({
        _id: updatedUser._id,
        userId: updatedUser.userId
      }, '2h')
      console.log('token', accessToken)
      return res.json({
        code: 200,
        accessToken: accessToken,
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
  public static logout (req: Request, res: Response, next: NextFunction) {
    const token = req.headers['access-token'] as string
    const decoded = jwt.verifyToken(token)
    const exUser = users.find(user => user.id === decoded.id)

    /* User is not existed */
    if (!exUser) {
      return res.status(403).json({
        code: 403,
        accessToken: '',
        message: 'User is not existed',
        user: exUser
      } as UserReturnParams)
    }

    exUser.refreshToken = ''

    return res.json({
      code: 200,
      accessToken: '',
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
    console.log('pass')
    const token = req.headers['access-token'] as string

    console.log(token)
    if (!token) {
      return res.status(403).json({
        code: 403,
        accessToken: '',
        message: 'token is not existed',
        user: {}
      } as UserReturnParams)
    }

    const decoded = jwt.verifyToken(token)
    const nowValueOf = moment().valueOf()
    console.log(decoded)
    // const exUser = users.find(user => user.id === decoded.id)
    const exUser = await User.findOne({
      _id: decoded._id
    }).populate('roleId')
    console.log(exUser)
    console.log('------------------')
    /* Access Token is expired */
    if (nowValueOf < decoded.exp * 1000) {
      if(!exUser) {
        return res.status(403).json({
          code: 403,
          accessToken: '',
          message: 'User is not existed or token is expired',
          user: exUser
        } as UserReturnParams)
      }
      const refreshTokenDecoded = jwt.verifyToken(exUser.refreshToken)

      /* Refresh token is not expired */
      if (nowValueOf <= refreshTokenDecoded.exp * 1000) {
        const newAccessToken = jwt.signToken({
          _id: exUser._id,
          userId: exUser.userId
        }, '2h')

        /* Reset Refresh token */
        const updatedUser = await User.findOneAndUpdate({
          _id: exUser._id
        }, {
          refreshToken: jwt.signToken({
            _id: exUser._id,
            userId: exUser.userId
          } as IJwtPayload, '24h')
        }).populate('roleId')

        return res.json({
          code: 200,
          accessToken: newAccessToken,
          message: 'Success to get detail',
          user: updatedUser
        } as UserReturnParams)
      } else {
        exUser.refreshToken = ''

        return res.json({
          code: 200,
          accessToken: '',
          message: 'Success to Logout',
          user: {}
        } as UserReturnParams)
      }
    }

    return res.json({
      code: 200,
      accessToken: token,
      message: 'Success to get detail',
      user: exUser
    } as UserReturnParams)
  }
}

export default AuthController
