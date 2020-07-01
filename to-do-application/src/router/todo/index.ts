import { RouteConfig } from 'vue-router'

const todoRoutes : RouteConfig[] = [
  {
    path: '/',
    name: 'Todo',
    component: () => import('@/layouts/todo/index.vue'),
    children: [
      {
        path: 'list',
        name: 'ToDoList',
        component: () => import('@/views/todo/list/index.vue')
      },
      {
        path: 'create',
        name: 'ToDoCreate',
        component: () => import('@/views/todo/create/index.vue')
      }
    ]
  }
]

export default todoRoutes
