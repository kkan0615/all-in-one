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
      margin: 10,
      role: undefined,
      title: 'Dash Board'
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
          margin: 10,
          role: undefined,
          title: 'Main DashBoard'
        }
      }
    ]
  },
  /* Components */
  {
    path: '/components',
    name: 'Component',
    component: BaseLayout,
    meta: {
      icon: 'ballot',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: undefined,
      title: 'Components'
    },
    // children: [
    //   {
    //     path: 'MainDashboard',
    //     name: 'MainDashboard',
    //     component: () => import('@/views/Dashboard/Main/index.vue'),
    //     meta: {
    //       icon: 'dashboard',
    //       isForGroup: false,
    //       menuType: 'desktop',
    //       margin: 12,
    //       role: undefined,
    //       title: 'Main DashBoard'
    //     }
    //   }
    // ]
  },
  /* Sample */
  {
    path: '/samples',
    name: 'Sample',
    component: BaseLayout,
    meta: {
      icon: 'developer_board',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: undefined,
      title: 'Samples'
    },
    children: [
      {
        path: 'CardTableSwapper',
        name: 'CardTableSwapper',
        component: () => import('@/views/Sample/CardTableSwapper/index.vue'),
        meta: {
          icon: 'view_module',
          margin: 12,
          isForGroup: false,
          menuType: 'desktop',
          role: undefined,
          title: 'Card Table Swapper'
        },
      },
      {
        path: 'detail/:id',
        name: 'Detail',
        hidden: true,
        component: () => import('@/views/Sample/Detail/index.vue'),
        meta: {
          icon: 'post_add',
          margin: 12,
          isForGroup: false,
          menuType: 'desktop',
          role: undefined,
          title: 'Detail'
        },
      }
    ]
  },
  /* Functions */
  {
    path: '/functionComponent',
    name: 'FunctionComponent',
    component: BaseLayout,
    meta: {
      icon: 'functions',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: undefined,
      title: 'Function Samples'
    },
    children: [
      {
        path: '/alert',
        name: 'alert',
        component: () => import('@/layout/Grouping/index.vue'),
        meta: {
          icon: 'check',
          margin: 8,
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
              margin: 8,
              isForGroup: false,
              menuType: 'desktop',
              role: undefined,
              title: 'Confirm Dialog'
            }
          }
        ]
      },
    ]
  },
  /* Basic samples */
  {
    path: '/basicsample',
    name: 'BasicSample',
    component: BaseLayout,
    meta: {
      icon: 'folder',
      isForGroup: true,
      menuType: 'desktop',
      margin: 12,
      role: undefined,
      title: 'Basic Sample'
    },
    children: [
      {
        path: 'form',
        name: 'BasicSampleForm',
        component: () => import('@/views/BasicSample/Form/index.vue'),
        meta: {
          icon: 'view_day',
          isForGroup: false,
          menuType: 'desktop',
          margin: 8,
          role: undefined,
          title: 'Form'
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
