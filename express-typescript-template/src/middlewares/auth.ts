import Logger from '@/utils/logger'
import {NextFunction, Request, Response} from 'express'

const logger = new Logger(__filename)

class AuthMiddleware {
  public isLoggedIn  (req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.status(403).send('Login is required')
    }
  }

  public isNotLoggedIn (req: Request, res: Response, next: NextFunction) {
    if(!req.isAuthenticated())
      next()
    else
      res.status(403).send('User is already loggedIn')
  }
}

export default new AuthMiddleware()
