import { ActionTree, GetterTree, MutationTree } from 'vuex'
import { CustomRouteConfig } from '@/types/customRouteConfig'
import { searchPermittedRoutes } from '@/utils/permission'
import axiosSetting from '@/axios/default'

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
    if (payload) {
      state.displayRoutes = searchPermittedRoutes(payload)
      state.isLoadedDisplayRoutes = true
    } else {
      state.displayRoutes = []
      state.isLoadedDisplayRoutes = false
    }
  },
  SET_FAVORITE_ROUTES (state, payload: Array<CustomRouteConfig>) {
    state.favoriteRoutes = payload
  },
  /*****************************************************
   * @description Add payload to favorite Route
   * @param state - Store state
   * @param payload - Adding target
   *****************************************************/
  addFavoriteRoutes (state, payload: CustomRouteConfig) {
    state.favoriteRoutes.push(payload)
  },
  /*****************************************************
   * @description Remove favorite Route if it's existed
   * @param state - Store state
   * @param payload - Removing target
   *****************************************************/
  removeFavoriteRoutes (state, payload: CustomRouteConfig) {
    state.favoriteRoutes.splice(state.favoriteRoutes.indexOf(payload), 1)
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
    if (foundIndex === -1) {
      commit('addFavoriteRoutes', payload)
    } else {
      commit('removeFavoriteRoutes', payload)
    }

    return foundIndex
  },
  async createAsyncRoutes ({ commit, state }, payload: Array<any>) {
    const res = await axiosSetting.get('/menu')
    console.log(payload)
  },
  resetMenuState ({ commit }) {
    commit('SET_DISPLAY_ROUTES', [])
    commit('SET_FAVORITE_ROUTES', [])
  },
} as ActionTree<MenuStore, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
