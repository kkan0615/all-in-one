import router from '@/router'
import { Route } from 'vue-router'
import store from '@/store'
import baseRoutes from '@/router/modules/base'
import Cookies from 'js-cookie'

router.beforeEach(async (to: Route, from: Route, next) => {
  const isLoadedDisplayRoutes = store.getters['menu/isLoadedDisplayRoutes']
  if (!isLoadedDisplayRoutes) {
    await store.dispatch('menu/updateDisplayRoutes', baseRoutes)
  }

  const isLoaded = store.getters['user/isLoaded']
  if (!isLoaded && Cookies.get('X-TOKEN'))
    await store.dispatch('user/updateDetail')
  /* If Routes is not required login */
  if (!to.meta.role || to.meta.role === '') {

    next()
    return
  }

  // if (isLoaded) {
  //   await store.dispatch('menu/updateDisplayRoutes', baseRoutes)
  // } else {
  //   await store.dispatch('user/updateDetail')
  // }
  next()
})
