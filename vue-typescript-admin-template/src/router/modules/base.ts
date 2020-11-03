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
      role: undefined,
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
          role: undefined,
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
      role: undefined,
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
          role: undefined,
          title: 'Grid with form'
        }
      },
      {
        path: 'GridFormTEST',
        name: 'GridFormTEST',
        component: () => import('@/views/Sample/GridForm/index.vue'),
        meta: {
          icon: 'vertical_split',
          isForGroup: false,
          menuType: 'desktop',
          margin: 12,
          role: 'FFFFFFFFFFFFF',
          title: 'GridFormTEST'
        }
      },
    ]
  },
  {
    path: '/test',
    name: 'Test',
    component: BaseLayout,
    meta: {
      icon: '',
      margin: 12,
      isForGroup: true,
      menuType: 'desktop',
      role: undefined,
      title: 'Test'
    },
    children: [
      {
        path: 'Test2',
        name: 'Test2',
        component: () => import('@/views/test/index.vue'),
        meta: {
          icon: '',
          margin: 12,
          isForGroup: false,
          menuType: 'desktop',
          role: undefined,
          title: 'Test2'
        }
      }
    ]
  },
  /* Alert and Confirm */
  {
    path: '/alert',
    name: 'alert',
    component: BaseLayout,
    meta: {
      icon: 'check',
      margin: 12,
      isForGroup: true,
      menuType: 'desktop',
      role: undefined,
      title: 'Alert and Confirm'
    },
    children: [
      {
        path: 'confirmDialog',
        name: 'confirmDialog',
        component: () => import('@/views/ConfirmDialog/index.vue'),
        meta: {
          icon: 'check',
          margin: 12,
          isForGroup: false,
          menuType: 'desktop',
          role: undefined,
          title: 'Confirm Dialog'
        }
      }
    ]
  },
  /* Notification */
  {
    path: '/notification',
    name: 'notification',
    component: BaseLayout,
    meta: {
      icon: 'check',
      margin: 12,
      isForGroup: true,
      menuType: 'desktop',
      role: undefined,
      title: 'Notification Examples'
    },
    // children: [
    //   {
    //     path: 'socketNotification',
    //     name: 'socketNotification',
    //     component: () => import('@/views/Notification/index.vue'),
    //     meta: {
    //       icon: 'check',
    //       margin: 12,
    //       isForGroup: false,
    //       menuType: 'desktop',
    //       role: undefined,
    //       title: 'Socket Notification Example'
    //     }
    //   }
    // ]
  }
]

export default baseRoutes
