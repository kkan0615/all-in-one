/**
 * Meta data
 * title
 * icon
 * roles: Array<string> - Roles
 * hidden: boolean - Hidden this menu
 * fullSize: boolean
 * keepAlive
 * searchKeyword: Array<string>
 */

import { RouteConfig } from 'vue-router'
// import i18n from '@/lang'

const business: RouteConfig[] = [
  {
    path: '/business',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: true, fullSize: false },
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/business/main/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'note', roles: [], keepAlive: false, hidden: true, fullSize: false }
      },
      {
        path: 'setting',
        name: 'setting',
        component: () => import('@/views/business/setting/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'settings', roles: [], keepAlive: false, hidden: true, fullSize: false }
      }
    ]
  }
]

export default business
