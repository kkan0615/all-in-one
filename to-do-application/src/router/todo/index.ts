import { RouteConfig } from 'vue-router'

const todoRoutes : RouteConfig[] = [
  {
    path: '/',
    name: 'Todo',
    component: () => import('@/layouts/todo/index.vue'),
    children: [
      {
        path: 'list',
        name: 'List',
        component: () => import('@/views/todo/list/index.vue')
      }
      // {
      //   path: 'create',
      //   name: 'Create',
      //   component: () => import('@/views/auth/register/index.vue')
      // }
    ]
  }
]

export default todoRoutes
