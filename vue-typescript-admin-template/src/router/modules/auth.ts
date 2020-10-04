import { CustomRouteConfig } from '@/types/customRouteConfig'
import AuthLayout from '@/layout/auth/index.vue'

const authRoutes: Array<CustomRouteConfig> = [
  {
    path: '/Auth',
    name: 'Auth',
    component: AuthLayout,
    meta: {
      icon: 'how_to_reg',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: undefined,
      title: 'Auth page'
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/Auth/Login/index.vue'),
        meta: {
          icon: 'login',
          isForGroup: false,
          menuType: 'desktop',
          margin: 12,
          role: undefined,
          title: 'Login'
        }
      }
    ]
  }
]

export default authRoutes
