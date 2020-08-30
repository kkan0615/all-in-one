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
  },
  {
    path: '/BaseSample',
    name: 'BaseSample',
    component: BaseLayout,
    meta: {
      icon: 'line_style',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: '',
      title: 'Sample layouts'
    },
    children: [
      {
        path: 'GridForm',
        name: 'GridForm',
        component: () => import('@/views/Sample/GridForm/index.vue'),
        meta: {
          icon: 'vertical_split',
          isForGroup: false,
          menuType: 'desktop',
          margin: 12,
          role: '',
          title: 'Grid with form'
        }
      }
    ]
  }
]

export default baseRoutes
