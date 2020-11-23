import Vue from 'vue'
import VueRouter from 'vue-router'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import Home from '../views/Home.vue'
import BaseLayout from '@/layout/base/index.vue'

//TODO: 사용시 변경
// import {searchPermittedRoutes} from '@/utils/permission'
import baseRoutes from '@/router/modules/base'
import authRoutes from '@/router/modules/auth'
Vue.use(VueRouter)

const routes: Array<CustomRouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter (to, from, next) {
      // @TODO: Navigate based on mobile and login
      next('/dashboard/maindashboard')
    },
  },
  {
    path: '*',
    // name: 'NotF',
    component: () => import('@/views/ErrorPage/404/index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
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
  routes: routes.concat(baseRoutes).concat(authRoutes),
})

const router = createRouter()

export default router
