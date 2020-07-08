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
