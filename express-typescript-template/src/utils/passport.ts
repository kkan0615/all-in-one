import LocalPassport from '@/utils/localPassport'
import {PassportStatic} from 'passport'
import {User, users} from '@/models/user'

export const passportConfig = (passport: PassportStatic) => {
  passport.serializeUser((user: User, done) => {
    console.log('passport js', user)
    done(null, user.token)
  })

  passport.deserializeUser((token, done) => {
    console.log('test2', token)
    const exUser = users.find((user => user.token === token))
    if (exUser) {
      done(null, exUser)
    }
    done('Error: There is no exUser')
  })

  LocalPassport.init(passport)
}
