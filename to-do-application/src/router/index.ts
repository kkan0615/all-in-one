import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import todoRoutes from './todo'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const defaultRoutes: Array<RouteConfig> = [
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

const createRoutes = () => {
  let routes: RouteConfig[] = []
  routes = routes.concat(defaultRoutes)
  routes = routes.concat(todoRoutes)

  return routes
}

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: createRoutes()
})

export default router
