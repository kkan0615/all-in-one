import Router from './index'
import { Route } from 'vue-router'
import { getAuthToken } from '@/utils/authUtils'
import { UserModule } from '@/store/modules/uesr'

Router.beforeEach((to: Route, from: Route, next :Function) => {
  console.log(to)
  console.log(from)
  console.log(next)
  /** Page doesnt need login */
  if (!getAuthToken()) {
    if (to.meta.roles.length < 1) {
      next()
    } else {
      next({ path: `/auth/login?redirect=${to.path}` })
    }
  } else {
    if (!UserModule.userToken) {
      UserModule.logout()
      next({ path: `/auth/login?redirect=${to.path}` })
    } else {
      if (UserModule.roles.length < 1) {
        console.log('This user doesnt have roles do sth here plz!!!!')
      }
    }
  }
})
