import Router from './index'
import { Route } from 'vue-router'
// import { getAuthToken } from '@/utils/authUtils'
import { UserModule } from '@/store/modules/uesr'
// import Vue from 'vue';
// Vue.toasted.error('You are not')

Router.beforeEach(async(to: Route, from: Route, next :Function) => {
  console.log(Router)

  /** Usertoken is not exist */
  if (!UserModule.userToken) {
    if (!to.meta.roles || to.meta.roles.length < 1) {
      next()
    } else {
      next({ path: `/auth/login?redirect=${to.path}` })
    }
  } else {
    if (UserModule.roles.length < 1) {
      const success = await UserModule.requestDetail()
      if (!success) {
        UserModule.logout()
        next({ path: `/auth/login?redirect=${to.path}` })
      }
      next()
    } else {
      next()
    }
  }
})
