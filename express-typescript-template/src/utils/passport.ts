import LocalPassport from '@/utils/localPassport'
import { PassportStatic } from 'passport'
import { User, users } from '@/models/user'

export const passportConfig = (passport: PassportStatic) => {
  passport.serializeUser((user: User, done) => {
    done(null, user.refreshToken)
  })

  passport.deserializeUser((token, done) => {
    const exUser = users.find((user => user.refreshToken === token))
    if (exUser) {
      done(null, exUser)
    }
    done('Error: There is no exUser')
  })

  LocalPassport.init(passport)
}
