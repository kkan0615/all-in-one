import router from '@/router'
import { Route } from 'vue-router'
import store from '@/store'

router.beforeEach(async (to: Route, from: Route, next) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  const isLoaded = store.state.user.isLoaded
  if (isLoaded) {
    console.log(isLoaded)
  } else {
    await store.dispatch('user/updateDetail')
  }
  next()
})
