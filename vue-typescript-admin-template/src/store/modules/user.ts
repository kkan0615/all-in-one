import { MutationTree, ActionTree, GetterTree } from 'vuex'
import Cookie from 'js-cookie'
import authAxios from '@/axios/auth'

// @TODO: (DELETE) 나중에 삭제하기
import baseRoutes from '@/router/modules/base'
import { UserReturnParams } from '@/types/ServerResponse/auth'

export interface UserState {
  id: number;
  token: string;
  nickname: string;
  role: any;
  roleGrade: string;
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
  role: any // @TODO: Change it to specific type
  roleGrade: string // HEX String will be here
  roleName: string
  avatar: string

  constructor (user?: UserState) {
    this.isLoaded = false
    this.id = user?.id || 0
    this.token = user?.token || Cookie.get('X-TOKEN') || ''
    this.nickname = user?.nickname || ''
    this.role = user?.role || {}
    this.roleGrade = user?.roleGrade || ''
    this.roleName = user?.roleName || ''
    this.avatar = user?.avatar || ''
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

  },
  SET_TOKEN (state, payload: string) {
    state.token = payload
    Cookie.set('X-TOKEN', payload)
  }
} as MutationTree<UserState>

const getters = {
  isLoaded (state) {
    return state.isLoaded
  },
  role (state) {
    return state.role
  },
  token (state) {
    return state.token

  }
} as GetterTree<UserState, never>

const actions = {
  async login ({ state, commit }, payload: UserLoginState) {
    const params = {
      ...payload,
      hashedPassword: 'adminpass01@'
    }

    const user = (await authAxios.post('/auth/login', params)).data as UserReturnParams
    if (user) {
      commit('SET_USER', user.user)
      commit('SET_TOKEN', user.accessToken)
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
      commit('SET_TOKEN', '')
    } else {
      throw new Error('Error: NO DATA')
    }
  },
  async updateDetail ({ commit, dispatch }) {
    const user = (await authAxios.post('/auth/getDetail')).data as UserReturnParams
    commit('SET_USER', user.user)
    commit('SET_TOKEN', user.accessToken)
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
