import { MutationTree, ActionTree, GetterTree } from 'vuex'
import {reAllocateStorage, findValueByKey} from '@/utils/localStorage'

const LOCASTORAGELKEY = 'application'

export interface AppInterface {
  hint: boolean;
  navigatorStatus: boolean;
  subNavigatorStatus: boolean;
  appBarStatus: boolean;
  permanentStatus: boolean;
}

export class App implements AppInterface {
  hint: boolean
  navigatorStatus: boolean
  subNavigatorStatus: boolean
  appBarStatus: boolean
  permanentStatus: boolean

  constructor () {
    this.hint = findValueByKey(LOCASTORAGELKEY, 'hint') || false
    this.navigatorStatus = findValueByKey(LOCASTORAGELKEY, 'navigatorStatus') || false
    this.subNavigatorStatus = false
    this.appBarStatus= findValueByKey(LOCASTORAGELKEY, 'appBarStatus') || true
    this.permanentStatus = findValueByKey(LOCASTORAGELKEY, 'permanentStatus') || false
  }
}

const state = new App()

const mutations = {
  SET_NAVIGATORSTATUS (state, navigatorStatus: boolean) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state.navigatorStatus = navigatorStatus
  },
  SET_APPBARSTATUS (state, appBarStatus: boolean) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state.appBarStatus = appBarStatus
  },
  SET_PERMANENTSTATUS (state, permanentStatus: boolean) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state.permanentStatus = permanentStatus
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
  controlNavigatorStatus ({state, commit}) {
    commit('SET_NAVIGATORSTATUS', !state.navigatorStatus)
  },
  controlSubNavigationStatus ({state, commit}) {
    commit('SET_SUBNAVIGATORSTATUS', !state.subNavigatorStatus)
  },
  controlPermanentStatus ({state, commit}) {
    commit('SET_PERMANENTSTATUS', !state.permanentStatus)
  }
} as ActionTree<App, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
