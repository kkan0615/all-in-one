import router from '@/router'
import { Route } from 'vue-router'
import store from '@/store'
import baseRoutes from '@/router/modules/base'

router.beforeEach(async (to: Route, from: Route, next) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const isLoaded = store.getters['user/isLoaded']
  /* If Routes is not required login */
  if (!to.meta.role || to.meta.role === '') {
    const isLoadedDisplayRoutes = store.getters['menu/isLoadedDisplayRoutes']
    if (!isLoadedDisplayRoutes) {
      console.log(baseRoutes)
      await store.dispatch('menu/updateDisplayRoutes', baseRoutes)
    }
    next()
    return
  }

  if (isLoaded) {
    await store.dispatch('menu/updateDisplayRoutes', baseRoutes)
  } else {
    await store.dispatch('user/updateDetail')
  }
  next()
})
