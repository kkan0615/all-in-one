import { RouteConfig } from 'vue-router'
const mainPage: RouteConfig[] = [
  {
    path: '/',
    name: 'MainLayout',
    component: () => import('@/layouts/mainLayout/index.vue'),
    children: [
      {
        path: '/main',
        name: 'MainPage',
        component: () => import('@/views/main/index.vue')
      }
    ]
  }
]

export default mainPage
