import { MutationTree, ActionTree, GetterTree } from 'vuex'
import { Vue } from 'vue-property-decorator'
import authAxios from '@/axios/auth'

// @TODO: (DELETE) 나중에 삭제하기
import baseRoutes from '@/router/modules/base'
import { UserReturnParams } from '@/types/ServerResponse/auth'

export interface UserState {
  id: number;
  token: string;
  nickname: string;
  role: any;
  roleName: string;
  avatar: string;
}

export interface UserLoginState {
  userId: string;
  password: string;
}

export class UserState implements UserState {
  isLoaded: boolean
  id: number
  token: string
  nickname: string
  role: any // It will be Hex bit
  roleName: string
  avatar: string

  constructor (user?: UserState) {
    this.isLoaded = false
    this.id = user?.id || 0
    this.token = user?.token || ''
    this.nickname = user?.nickname || ''
    this.role = user?.role || {}
    this.roleName = user?.roleName || ''
    this.avatar = user?.avatar || ''
    console.log(this.token)

  }
}

const state = new UserState()

const mutations = {
  SET_USER (state, payload?: UserState) {
    if (!state) {
      state = new UserState(payload)
    } else {
      state = Object.assign(state, payload)
    }

    console.log(state)
  }
} as MutationTree<UserState>

const getters = {
  role (state) {
    return state.role
  }
} as GetterTree<UserState, never>

const actions = {
  async login ({ state, commit }, payload: UserLoginState) {
    const params = {
      ...payload,
      hashedPassword: 'adminpass01@'
    }
    console.log(params)
    const user = (await authAxios.post('/auth/login', params)).data as UserReturnParams
    console.log(user)
    if (user) {
      commit('SET_USER', user.user)
      state.isLoaded = true
      return true
    } else {
      throw new Error('Error: NO DATA')
    }
  },
  async logout ({ state, commit }) {
    const loggoedOut = (await authAxios.post('/auth/logout')).data as UserReturnParams
    if (loggoedOut.code === 200) {
      state.isLoaded = false
      commit('SET_USER')
    } else {
      throw new Error('Error: NO DATA')
    }
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
