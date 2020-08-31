import { Strategy } from 'passport-local'
import { PassportStatic } from 'passport'
import {jwtTokenKey} from '@/config'
import { users } from '@/models/user'
import jwt from 'jsonwebtoken'

export class LocalPassport {
  public static init (passport: PassportStatic): any {
    passport.use(new Strategy({
      usernameField: 'userId',
      passwordField: 'hashedPassword'
    }, (userId, password, done) => {

      const exUser = users.find(user => user.userId === userId && user.password === password)
      if (!exUser) {
        return done(null, false,{ message: 'User is not existed'})
      }

      /* Set the Token */
      const authToken = jwt.sign({
        id: exUser.id,
        userId: exUser.userId
      }, jwtTokenKey, { expiresIn: '2h' })
      exUser.token = authToken

      console.log('token - localpassport', authToken)
      done(null, exUser)
    }))

  }
}

export default LocalPassport
