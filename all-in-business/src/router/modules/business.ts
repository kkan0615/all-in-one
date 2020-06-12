/**
 * Meta data
 * title
 * icon
 * roles: Array -
 * hidden: boolean
 * fullSize: boolean
 * keepAlive
 */

import { RouteConfig } from 'vue-router'

const business: RouteConfig[] = [
  {
    path: '/business',
    name: 'main',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: true, fullSize: false },
    children: [
      {
        path: '',
        name: 'BusinessMain',
        component: () => import('@/views/business/main/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'note', roles: [], keepAlive: false, hidden: true, fullSize: false }
      },
      {
        path: 'setting',
        name: 'BusinessSetting',
        component: () => import('@/views/business/setting/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'settings', roles: [], keepAlive: false, hidden: true, fullSize: false },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/business/setting/components/visualSetting/index.vue'),
            meta: { title: 'Markdown Editor', icon: 'note', roles: [], keepAlive: false, hidden: true, fullSize: false }
          }
        ]
      }
    ]
  },
  {
    path: '/business/editor',
    name: 'Editor',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'markdownEditor',
        name: 'MarkdownEditor',
        component: () => import('@/views/business/MarkdownEditor/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  },
  {
    path: '/business/music',
    name: 'Music',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'businessMusicList',
        name: 'BusinessMusicList',
        component: () => import('@/views/business/Music/MuiscList/index.vue'),
        meta: { title: 'Music list', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: false }
      }
    ]
  },
  {
    path: '/business/dropDown',
    name: 'DropDown',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'dropDownImages',
        name: 'DropDownImages',
        component: () => import('@/views/business/DropDownImages/index.vue'),
        meta: { title: 'DropDownImages', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  },
  {
    path: '/business/post',
    name: 'DropDown',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: false },
    children: [
      {
        path: 'post',
        name: 'Post',
        component: () => import('@/views/business/Post/Post/index.vue'),
        meta: { title: 'Post', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: false }
      }
    ]
  },
  {
    path: '/business/tables',
    name: 'Table',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/business/Restaurant/Tables/index.vue'),
        meta: { title: 'Table', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  },
  {
    path: '/business/form',
    name: 'Form',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'form',
        name: 'Form',
        component: () => import('@/views/business/Form/Playground/index.vue'),
        meta: { title: 'Form', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  }
]

export default business
