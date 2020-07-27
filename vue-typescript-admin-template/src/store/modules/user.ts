import { MutationTree, ActionTree, GetterTree } from 'vuex'

export class User {
  declare token: string
  declare nickname: string
  declare role: string // It will be Hex bit

  constructor () {
    this.token = ''
    this.nickname = ''
    this.role = 'test'
  }
}

// TODO: Snackbar messages should be queued.
const state = new User()

const mutations = {
  SET_USER (state, payload: User) {
    state.token = payload.token
    state.nickname = payload.nickname
  }
} as MutationTree<User>

const getters = {
  role (state) {
    return state.role
  }
} as GetterTree<User, never>

const actions = {
  login () {
    console.log('test')
  }
} as ActionTree<User, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
