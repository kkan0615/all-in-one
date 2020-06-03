/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import mainPageRoutes from './modules/mainPage'
import businessRoutes from './modules/business'
import erpTemplateRoutes from './modules/erpTemplate'
import testRoutes from './modules/test'
import authRoutes from './modules/auth'
import listRoutes from './modules/shoppingMall'
import convenienceERP from './modules/convenienceERP'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const defaultRoutes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const createRouter = () => {
  let routes: RouteConfig[] = []
  routes = routes.concat(defaultRoutes)
  routes = routes.concat(mainPageRoutes)
  routes = routes.concat(businessRoutes)
  routes = routes.concat(testRoutes)
  routes = routes.concat(authRoutes)
  routes = routes.concat(listRoutes)
  routes = routes.concat(erpTemplateRoutes)
  routes = routes.concat(convenienceERP)
  return routes
}

const router = new VueRouter({
  // mode: process.env.HISTORY || 'history',
  routes: createRouter()
})

export default router
