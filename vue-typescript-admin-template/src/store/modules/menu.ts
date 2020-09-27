import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import { searchPermittedRoutes } from '@/utils/permission'

export interface MenuStore {
  isLoadedDisplayRoutes: boolean;
  favoriteRoutes: Array<CustomRouteConfig>;
  displayRoutes: Array<CustomRouteConfig>;
}

export class MenuStore implements MenuStore {
  isLoadedDisplayRoutes: boolean
  favoriteRoutes: Array<CustomRouteConfig>
  displayRoutes: Array<CustomRouteConfig>

  constructor (menuStore?: MenuStore) {
    if (menuStore) {
      Object.assign(this, menuStore)
    }
    this.isLoadedDisplayRoutes = false
    this.favoriteRoutes = []
    this.displayRoutes = []
  }
}

const state = new MenuStore()

const mutations = {
  SET_DISPLAY_ROUTES (state, payload: Array<CustomRouteConfig>) {
    state.displayRoutes = searchPermittedRoutes(payload)
    state.isLoadedDisplayRoutes = true
  },
  SET_FAVORITE_ROUTES (state, payload: Array<CustomRouteConfig>) {
    state.favoriteRoutes = payload
  },
  addFavoriteRoutes (state, payload: CustomRouteConfig) {
    state.favoriteRoutes.push(payload)
  }
} as MutationTree<MenuStore>

const getters = {
  isLoadedDisplayRoutes (state) {
    return state.isLoadedDisplayRoutes
  }
} as GetterTree<MenuStore, never>

const actions = {
  /**
   *
   * @param commit
   * @param payload
   */
  /* @TODO: Find role based on user role*/
  updateDisplayRoutes ({ commit }, payload: Array<CustomRouteConfig>) {
    commit('SET_DISPLAY_ROUTES', payload)
  },
  updateFavoriteRoutes ({ commit }, payload: Array<CustomRouteConfig>) {
    commit('SET_FAVORITE_ROUTES', payload)
  },
  addFavoriteRoutes ({ commit, state }, payload: CustomRouteConfig) {
    const foundIndex = state.favoriteRoutes.indexOf(payload)
    if (foundIndex === -1)
      commit('addFavoriteRoutes', payload)
  },
  createAsyncRoutes ({ commit, state }, payload: CustomRouteConfig) {
    console.log('{ commit, state }, payload: CustomRouteConfig')
  }
} as ActionTree<MenuStore, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
