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
import i18n from '@/lang'

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
        name: 'BusinessSetting',
        component: () => import('@/views/business/setting/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'settings', roles: [], keepAlive: false, hidden: true, fullSize: false },
        children: [
          {
            path: '/visual',
            name: 'BusinessSettingVisual',
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
    meta: { title: i18n.t('businessRouter.editorTitle'), icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
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
    meta: { title: 'Business Template', icon: 'album', roles: [], keepAlive: false, hidden: false, fullSize: true },
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
    path: '/business/images',
    name: 'images',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'insert_photo', roles: [], keepAlive: false, hidden: false, fullSize: true },
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
    name: 'BusinessPost',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: i18n.t('businessRouter.postTitle'), icon: 'post_add', roles: [], keepAlive: false, hidden: false, fullSize: false },
    children: [
      {
        path: 'post',
        name: 'Post',
        component: () => import('@/views/business/Post/Post/index.vue'),
        meta: { title: i18n.t('postVer1.title').toString(), icon: 'post_add', roles: [], keepAlive: false, hidden: false, fullSize: false }
      }
    ]
  },
  {
    path: '/business/tables',
    name: 'BusinessTable',
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
    name: 'BusinessForm',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', roles: [], keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'formVer1',
        name: 'FormVer1',
        component: () => import('@/views/business/Form/Playground/index.vue'),
        meta: { title: 'FormVer1', icon: 'note', roles: [], keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  }
]

export default business
