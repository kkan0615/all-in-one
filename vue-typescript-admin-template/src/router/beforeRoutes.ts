import router from '@/router'
import { Route } from 'vue-router'
import store from '@/store'
import baseRoutes from '@/router/modules/base'
import Cookies from 'js-cookie'
import { checkPermission } from '@/utils/permission'

router.beforeEach(async (to: Route, from: Route, next) => {
  const isLoadedDisplayRoutes = store.getters['menu/isLoadedDisplayRoutes']
  if (!isLoadedDisplayRoutes) {
    await store.dispatch('menu/updateDisplayRoutes', baseRoutes)
  }

  const isLoaded = store.getters['user/isLoaded']
  if (!isLoaded && Cookies.get('X-TOKEN')) {
    await store.dispatch('user/updateDetail')
    await store.dispatch('menu/createAsyncRoutes')
  }

  /* If Routes is not required login */
  if (!to.meta.role || to.meta.role === '') {
    next()
    return
  } else {
    const role = store.getters['user/roleGrade']
    if (checkPermission(to.meta.role, role)) {
      next()
    } else {
      await store.dispatch('user/logout')
      return
    }
  }
  next()
})
