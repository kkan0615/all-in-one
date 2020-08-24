import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { reAllocateStorage } from '@/utils/localStorage'

const LOCASTORAGELKEY = 'design'

export interface DesignState {
  logo: boolean;
  nightMode: boolean;
}

export class DesignState implements DesignState {
  logo: boolean
  nightMode: boolean

  constructor (design?: DesignState) {
    this.logo = design?.logo || false
    this.nightMode = design?.nightMode || false
  }
}

const state = new DesignState()

const mutations = {
  SET_DESIGN (state, payload: DesignState) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state = new DesignState(payload)
  },
  SET_NIGHTMODE (state, nightMode: boolean) {
    reAllocateStorage(LOCASTORAGELKEY, state)
    state.nightMode = nightMode
  }
} as MutationTree<DesignState>

const getters = {
  logo (state) {
    return state.logo
  },
  nightMode (state) {
    return state.nightMode
  },
} as GetterTree<DesignState, never>

const actions = {
} as ActionTree<DesignState, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
