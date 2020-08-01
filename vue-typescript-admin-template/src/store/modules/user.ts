import { MutationTree, ActionTree, GetterTree } from 'vuex'

interface UserInterface {
  token: string;
  nickname: string;
  role: string;
  roleName: string;
}

export class User implements UserInterface {
  declare token: string
  declare nickname: string
  declare role: string // It will be Hex bit
  declare roleName: string

  constructor (user?: User) {
    this.token = user?.token || ''
    this.nickname = user?.nickname || ''
    this.role = user?.role || ''
    this.roleName = user?.roleName || ''
  }
}

const state = new User()

const mutations = {
  SET_USER (state, payload: User) {
    state = new User(payload)
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
