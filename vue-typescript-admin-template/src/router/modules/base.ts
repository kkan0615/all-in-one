import {CustomRouteConfig} from '@/types/customRouteConfig'
import BaseLayout from '@/layout/base/index.vue'

const baseRoutes: Array<CustomRouteConfig> = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: BaseLayout,
    meta: {
      icon: '',
      margin: 12,
      role: '',
      title: 'DashBoard'
    },
    children: [
      {
        path: 'MainDashboard',
        name: 'MainDashboard',
        component: () => import('@/views/dashboard/main/index.vue'),
        meta: {
          icon: '',
          margin: 12,
          role: '',
          title: 'Main DashBoard'
        }
      }
    ]
  }
]

export default baseRoutes
