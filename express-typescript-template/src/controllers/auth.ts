import { NextFunction, Request, Response } from 'express'
import { ResponseParam } from '@/types/responseParam'
import _jwt from '@/utils/jwt'
import { users } from '@/models/user'
import moment from 'moment'

const jwt = new _jwt()

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
  public static login (req: Request, res: Response, next: NextFunction) {
    const { userId, hashedPassword } = req.body
    console.log(req.body)
    console.log(users)
    const exUser = users.find(user => user.userId === userId && user.password === hashedPassword)
    if (!exUser) {
      return res.status(403).json({
        code: 403,
        accessToken: '',
        message: 'UserId and Password are not matched',
        user: exUser
      } as UserReturnParams)
    }
    /* Create accessToken */
    const accessToken = jwt.signToken(exUser, '2h')
    /* Create refreshToken */
    exUser.refreshToken = jwt.signToken(exUser, '24h')


    exUser.lastTime = moment().format('MMMM Do YYYY, h:mm:ss a')
    console.log(exUser)
    return res.json({
      code: 200,
      accessToken: accessToken,
      message: 'Success to Login',
      user: exUser
    } as UserReturnParams)
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
  public static getDetail (req: Request, res: Response, next: NextFunction) {
    const token = req.headers['access-token'] as string
    if (!token) {
      return res.status(403).json({
        code: 403,
        accessToken: '',
        message: 'token is not existed',
        user: {}
      } as UserReturnParams)
    }

    const decoded = jwt.verifyToken(token)
    console.log('-------------------------------------')
    console.log(decoded)
    const nowValueOf = moment().valueOf()
    const exUser = users.find(user => user.id === decoded.id)

    /* Access Token is expired */
    if (nowValueOf < decoded.exp * 1000) {
      if(!exUser) {
        return res.status(403).json({
          code: 403,
          accessToken: '',
          message: 'User is not existed',
          user: exUser
        } as UserReturnParams)
      }
      const refreshTokenDecoded = jwt.verifyToken(exUser.refreshToken)

      /* Refresh token is not expired */
      if (nowValueOf <= refreshTokenDecoded.exp * 1000) {
        const newAccessToken = jwt.signToken(exUser, '2h')

        /* Reset Refresh token */
        exUser.refreshToken = jwt.signToken(exUser, '24h')

        return res.json({
          code: 200,
          accessToken: newAccessToken,
          message: 'Success to Login',
          user: exUser
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
