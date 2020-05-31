import { RouteConfig } from 'vue-router'
const auth: RouteConfig[] = [
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('@/layouts/auth-layout/index.vue'),
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/auth/login/index.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/auth/register/index.vue')
      }
    ]
  }
]

export default auth
