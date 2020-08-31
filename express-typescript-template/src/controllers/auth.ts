import { NextFunction, Request, Response } from 'express'
import passport from 'passport'
import { ResponseParam } from '@/types/responseParam'
import { users } from '@/models/user'

interface UserReturnParams {
    code: number,
    message: string,
    user?: any
}

class AuthController {
  /**
     * Login
     * @param req - Request
     * @param res - Response
     * @param next - Next
     */
  public static login (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('local', (authError, user, info) => {
      console.log('user', authError)
      if (!user)
        return res.status(403).json({
          code: 403,
          message: info.message || '',
          user: user
        } as UserReturnParams)

      res.cookie('test', 'test')
      console.log(req.cookies)
      return req.login(user, (loginError) => {
        if (loginError)
          return next(loginError)
        return res.json({
          code: 200,
          message: 'Success to Login',
          user: user
        } as UserReturnParams)
      })
    }) (req, res, next)
  }

  /**
     * Test for GET
     * @param req - Request
     * @param res - Response
     * @param next - Next
     */
  public static logout (req: Request, res: Response, next: NextFunction) {
    console.log(req.cookies)
    console.log(req.user)
    req.logout()

    return res.json({
      code: 200,
      message: 'Success to logout',
      recordSet: [],
      recordSets : []
    } as ResponseParam)
  }

  /**
     * Test for GET
     * @param req - Request
     * @param res - Response
     * @param next - Next
     */
  public static getDetail (req: Request, res: Response, next: NextFunction) {
    console.log('------------------')
    console.log(req.headers['x-token'])
    console.log(req.cookies)
    console.log(req.isAuthenticated())


    // const exUser = users.find(user => user.token === userToken)
    // if (!exUser) {
    //   return res.status(403).json({
    //     code: 403,
    //     message: 'Fail to get user',
    //     user: undefined
    //   } as UserReturnParams)
    // }

    return res.json({
      code: 200,
      message: 'Success to get user detail',
      user: {}
    } as UserReturnParams)

  }
}

export default AuthController
