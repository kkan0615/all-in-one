import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { Vue } from 'vue-property-decorator'
import authAxios from '@/axios/auth'

// @TODO: (DELETE) 나중에 삭제하기
import baseRoutes from '@/router/modules/base'

export interface UserState {
  token: string;
  nickname: string;
  role: string;
  roleName: string;
  avatar: string;
}

export class UserState implements UserState {
  isLoaded: boolean
  token: string
  nickname: string
  role: string // It will be Hex bit
  roleName: string
  avatar: string

  constructor (user?: UserState) {
    this.isLoaded = false
    this.token = user?.token || ''
    this.nickname = user?.nickname || ''
    this.role = user?.role || ''
    this.roleName = user?.roleName || ''
    this.avatar = user?.avatar || ''
  }
}

const state = new UserState()

const mutations = {
  SET_USER (state, payload: UserState) {
    if (!state) {
      state = new UserState(payload)
    } else {
      state = Object.assign(state, payload)
    }
    state.isLoaded = true
  }
} as MutationTree<UserState>

const getters = {
  role (state) {
    return state.role
  }
} as GetterTree<UserState, never>

const actions = {
  async login ({ commit }) {
    const params = {
      HASHED_PASSWORD: 'TEST'
    }

    const user = (await authAxios.post('/api/auth/login', params)).data as UserState
    commit('SET_USER', user)
  },
  logout ({ state }) {
    state.isLoaded = false
    console.log('logout')
  },
  async updateDetail ({ commit, dispatch }) {
    // const token = Vue.$cookies.get('authToken')
    // if (!token) {
    //   await dispatch('logout')
    //   return
    // }
    //
    // const userDetail = (await authAxios.post('/api/auth/token')).data
    // await commit('login', userDetail)
    console.log('test')
    await this.dispatch('menu/updateDisplayRoutes', baseRoutes)
  }
} as ActionTree<UserState, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
