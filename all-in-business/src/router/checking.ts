import Router from './index'
import { Route } from 'vue-router'
// import { getAuthToken } from '@/utils/authUtils'
import { UserModule } from '@/store/modules/uesr'
import Vue from 'vue'
import { checkColorToLocalStorage } from '@/utils/color'

/**
 * Check roles
 * @param to - Route
 * @returns bool - boolean
 */
const checkRoles = (to: Route): boolean => {
  return (!to.meta.roles || to.meta.roles.length < 1) && (!to.matched[0] || !to.matched[0].meta.roles || to.matched[0].meta.roles.length < 1)
}

Router.beforeEach(async(to: Route, from: Route, next :Function) => {
  checkColorToLocalStorage()
  try {
    /** Usertoken is not exist */
    if (!UserModule.userToken) {
    /** Login is not required */
      if (checkRoles(to)) {
        next()
      } else {
        Vue.toasted.error('You are not allowed to enter this page')
        next({ path: `/auth/login?redirect=${to.path}` })
      }
    } else {
      if (UserModule.roles.length < 1) {
        const success = await UserModule.requestDetail()
        if (!success) {
          await UserModule.logout()
          next({ path: `/auth/login?redirect=${to.path}` })
        }
        next()
      } else {
        const allowedUser = to.meta.roles.filter((e: any) => UserModule.roles.includes(e))

        if (!allowedUser) {
          Vue.toasted.error('You are not allowed to enter this page')
          next({ path: from.fullPath })
        }
        next()
      }
    }
  } catch (error) {
    console.error(error)
    await UserModule.logout()
    next({ path: `/auth/login` })
  }
})
