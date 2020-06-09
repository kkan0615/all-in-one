import Router from './index'
import { Route } from 'vue-router'

Router.beforeEach((to: Route, from: Route, next :Function) => {
  console.log(to)
  console.log(from)
  console.log(next)
})
