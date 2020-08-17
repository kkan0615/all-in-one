import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import BaseLayout from '@/layout/base/index.vue'

export interface MenuStore {
  favoriteRoutes: Array<CustomRouteConfig>;
  displayRoutes: Array<CustomRouteConfig>;
}

export class MenuStore implements MenuStore {
  favoriteRoutes: Array<CustomRouteConfig>
  displayRoutes: Array<CustomRouteConfig>

  constructor (menuStore?: MenuStore) {
    if (menuStore) {
      Object.assign(this, menuStore)
    }
    this.favoriteRoutes = []
    this.displayRoutes = [
      {
        path: '/Dashboard',
        name: 'Dashboard',
        component: BaseLayout,
        meta: {
          icon: 'dashboard',
          margin: 12,
          role: '',
          title: 'DashBoard',
          description: 'Parent Dashboard'
        },
        children: [
          {
            path: 'MainDashboard',
            name: 'MainDashboard',
            component: () => import('@/views/Dashboard/Main/index.vue'),
            meta: {
              icon: 'view_quilt',
              margin: 12,
              role: '',
              title: 'Main DashBoard',
              description: 'Main Dashboard'
            }
          }
        ]
      },
      {
        path: '/test',
        name: 'Test',
        component: BaseLayout,
        meta: {
          icon: 'face',
          margin: 12,
          role: '',
          title: 'Test',
          description: 'Parent Test menu'
        },
        children: [
          {
            path: 'Test2',
            name: 'Test2',
            component: () => import('@/views/test/index.vue'),
            meta: {
              icon: 'face',
              margin: 12,
              role: '',
              title: 'Test2',
              description: 'test menu'

            }
          }
        ]
      }
    ]
  }
}

const state = new MenuStore()

const mutations = {

} as MutationTree<MenuStore>

const getters = {

} as GetterTree<MenuStore, never>

const actions = {
} as ActionTree<MenuStore, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
