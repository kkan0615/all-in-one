import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { reAllocateStorage, findValueByKey } from '@/utils/localStorage'

const LOCASTORAGELKEY = 'application'

export interface AppInterface {
  hint: boolean;
  navigatorStatus: boolean;
  subNavigatorStatus: boolean;
  appBarStatus: boolean;
  permanentStatus: boolean;
}

export class App implements AppInterface {
  declare hint: boolean
  declare navigatorStatus: boolean
  declare subNavigatorStatus: boolean
  declare appBarStatus: boolean
  declare permanentStatus: boolean

  constructor (init?: App) {
    if (init) {
      Object.assign(this, init)
    } else {
      this.hint = findValueByKey(LOCASTORAGELKEY, 'hint') || false
      this.navigatorStatus = findValueByKey(LOCASTORAGELKEY, 'navigatorStatus') || true
      this.subNavigatorStatus = false
      this.appBarStatus = findValueByKey(LOCASTORAGELKEY, 'appBarStatus') || true
      this.permanentStatus = findValueByKey(LOCASTORAGELKEY, 'permanentStatus') || false
    }

  }
}

const state = new App()

const mutations = {
  SET_NAVIGATORSTATUS (state, navigatorStatus: boolean) {
    state.navigatorStatus = navigatorStatus
    reAllocateStorage(LOCASTORAGELKEY, state)
  },
  SET_APPBARSTATUS (state, appBarStatus: boolean) {
    state.appBarStatus = appBarStatus
    reAllocateStorage(LOCASTORAGELKEY, state)
  },
  SET_PERMANENTSTATUS (state, permanentStatus: boolean) {
    state.permanentStatus = permanentStatus
    reAllocateStorage(LOCASTORAGELKEY, state)
  },
  SET_SUBNAVIGATORSTATUS (state, subNavigatorStatus: boolean) {
    state.subNavigatorStatus = subNavigatorStatus
  }
} as MutationTree<App>

const getters = {
  navigatorStatus (state) {
    return state.navigatorStatus
  }
} as GetterTree<App, never>

const actions = {
  controlNavigatorStatus ({ state, commit }) {
    commit('SET_NAVIGATORSTATUS', !state.navigatorStatus)
  },
  controlSubNavigationStatus ({ state, commit }) {
    commit('SET_SUBNAVIGATORSTATUS', !state.subNavigatorStatus)
  },
  controlPermanentStatus ({ state, commit }) {
    commit('SET_PERMANENTSTATUS', !state.permanentStatus)
  },
  controlAppBarStatus ({ state, commit }) {
    commit('SET_APPBARSTATUS', !state.appBarStatus)
  }
} as ActionTree<App, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
