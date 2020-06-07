import { RouteConfig } from 'vue-router'

const business: RouteConfig[] = [
  {
    path: '/business',
    name: 'main',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', isRequireLogin: false, keepAlive: false, hidden: true, fullSize: false },
    children: [
      {
        path: '',
        name: 'BusinessMain',
        component: () => import('@/views/business/main/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'note', isRequireLogin: false, keepAlive: false, hidden: true, fullSize: false }
      },
      {
        path: 'setting',
        name: 'BusinessSetting',
        component: () => import('@/views/business/setting/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'settings', isRequireLogin: false, keepAlive: false, hidden: true, fullSize: false },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/business/setting/components/visualSetting/index.vue'),
            meta: { title: 'Markdown Editor', icon: 'note', isRequireLogin: false, keepAlive: false, hidden: true, fullSize: false }
          }
        ]
      }
    ]
  },
  {
    path: '/business/editor',
    name: 'Editor',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'markdownEditor',
        name: 'MarkdownEditor',
        component: () => import('@/views/business/MarkdownEditor/index.vue'),
        meta: { title: 'Markdown Editor', icon: 'note', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  },
  {
    path: '/business/music',
    name: 'Music',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'BusinessMusicList',
        name: 'BusinessMusicList',
        component: () => import('@/views/business/Music/MuiscList/index.vue'),
        meta: { title: 'Music list', icon: 'note', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: false }
      }
    ]
  },
  {
    path: '/business/dropDown',
    name: 'DropDown',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: true },
    children: [
      {
        path: 'DropDownImages',
        name: 'DropDownImages',
        component: () => import('@/views/business/DropDownImages/index.vue'),
        meta: { title: 'DropDownImages', icon: 'note', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: true }
      }
    ]
  },
  {
    path: '/business/post',
    name: 'DropDown',
    component: () => import('@/layouts/business-layout/index.vue'),
    meta: { title: 'Business Template', icon: 'fas fa-edit', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: false },
    children: [
      {
        path: 'Post',
        name: 'Post',
        component: () => import('@/views/business/Post/Post/index.vue'),
        meta: { title: 'Post', icon: 'note', isRequireLogin: false, keepAlive: false, hidden: false, fullSize: false }
      }
    ]
  }
]

export default business
