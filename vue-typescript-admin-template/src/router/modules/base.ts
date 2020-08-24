import { CustomRouteConfig } from '@/types/customRouteConfig'
import BaseLayout from '@/layout/base/index.vue'

const baseRoutes: Array<CustomRouteConfig> = [
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: BaseLayout,
    meta: {
      icon: 'dashboard',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: '',
      title: 'DashBoard'
    },
    children: [
      {
        path: 'MainDashboard',
        name: 'MainDashboard',
        component: () => import('@/views/Dashboard/Main/index.vue'),
        meta: {
          icon: 'dashboard',
          isForGroup: false,
          menuType: 'desktop',
          margin: 12,
          role: '',
          title: 'Main DashBoard'
        }
      }
    ]
  }
]

export default baseRoutes
