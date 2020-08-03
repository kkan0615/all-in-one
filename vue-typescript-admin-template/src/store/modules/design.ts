import { MutationTree, ActionTree, GetterTree } from 'vuex'
import {reAllocateStorage} from '@/utils/localStorage'

const LOCASTORAGELKEY = 'design'

export interface DesignInterface {
  logo: boolean;
  nightMode: boolean;
}

export class Design implements DesignInterface {
  logo: boolean
  nightMode: boolean

  constructor (design?: Design) {
    this.logo = design?.logo || false
    this.nightMode = design?.nightMode || false
  }
}

const state = new Design()

const mutations = {
  SET_DESIGN (state, payload: Design) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state = new Design(payload)
  },
  SET_NIGHTMODE (state, nightMode: boolean) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state.nightMode = nightMode
  }
} as MutationTree<Design>

const getters = {
  logo (state) {
    return state.logo
  },
  nightMode (state) {
    return state.nightMode
  },
} as GetterTree<Design, never>

const actions = {
} as ActionTree<Design, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
