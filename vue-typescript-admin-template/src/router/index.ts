import Vue from 'vue'
import VueRouter from 'vue-router'
import {CustomRouteConfig} from '@/types/customRouteConfig'
import Home from '../views/Home.vue'
//TODO: 사용시 변경
// import {searchPermittedRoutes} from '@/utils/permission'
import baseRoutes from '@/router/modules/base'

Vue.use(VueRouter)

const routes: Array<CustomRouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('@/views/test/index.vue')
  }
]

const createRouter = () => new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  //TODO: 나중에는 기본으로 깔아두고 Before router로 permitted찾아서 넣을예정
  routes: routes.concat(baseRoutes),
})

const router = createRouter()
//TODO: 사용시 변경, 비사용시 삭제
// console.log(searchPermittedRoutes(baseRoutes))
// router.addRoutes(searchPermittedRoutes(baseRoutes))

console.log(router)
export default router
