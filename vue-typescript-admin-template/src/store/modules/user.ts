import { MutationTree, ActionTree, GetterTree } from 'vuex'
import Cookie from 'js-cookie'
import authAxios from '@/axios/auth'

// @TODO: (DELETE) 나중에 삭제하기
import baseRoutes from '@/router/modules/base'
import { UserReturnParams } from '@/types/serverParams'
import router from '@/router'
import { User } from '@/types/models/user'
import { Role } from '@/types/models/role'

/**
 * UserState include token and refreshToken used only for personal info
 * @extends User - User information
 */
export interface UserState extends User{
  token: string;
  refreshToken: string;
  roleId: RoleState;
}

/**
 * If there is key value used only for personal info, change to interface from type
 * */
export type RoleState = Role

export interface UserLoginState {
  userId: string;
  password: string;
}

export class UserState implements UserState {
  isLoaded: boolean
  _id: string
  token: string
  refreshToken: string
  nickname: string
  email: string
  roleId: RoleState // @TODO: Change it to specific type
  avatar: string

  constructor (user?: UserState) {
    this.isLoaded = false
    this._id = user?._id || ''
    this.token = user?.token || Cookie.get('X-TOKEN') || ''
    this.refreshToken = user?.refreshToken || Cookie.get('REFRESH-TOKEN') || ''
    this.nickname = user?.nickname || ''
    this.email = user?.email || ''
    this.roleId = user?.roleId || {
      _id: '',
      grade: -1,
      name: '',
      remark: ''
    }
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
    console.log(state)
  },
  SET_TOKEN (state, payload: string) {
    state.token = payload
  },
  SET_REFRESH_TOKEN (state, payload: string) {
    state.refreshToken = payload
  }
} as MutationTree<UserState>

const getters = {
  isLoaded (state) {
    return state.isLoaded
  },
  role (state) {
    return state.roleId
  },
  token (state) {
    return state.token || Cookie.get('X-TOKEN')
  },
  roleGrade (state) {
    return state.roleId.grade
  },
  userId (state) {
    return state._id
  }
} as GetterTree<UserState, never>

const actions = {
  async login ({ state, commit }, payload: UserLoginState) {
    const params = {
      ...payload,
      // TODO: Changed with bcryptjs
      hashedPassword: payload.password
    }

    const user = (await authAxios.post('/auth/login', params)).data as UserReturnParams
    if (user && user.code === 200) {
      console.log(user)
      commit('SET_USER', user.user)
      commit('SET_TOKEN', user.accessToken)
      commit('SET_REFRESH_TOKEN', user.refreshToken)
      state.isLoaded = true
      await this.dispatch('menu/updateDisplayRoutes', baseRoutes)
      return true
    } else {
      // throw new Error('Error: NO DATA')
      return false
    }
  },
  async logout ({ state, commit }) {
    const loggoedOut = (await authAxios.post('/auth/logout')).data as UserReturnParams
    if (loggoedOut.code === 200) {
      state.isLoaded = false
      commit('SET_USER')
      commit('SET_TOKEN', '')
      commit('SET_REFRESH_TOKEN', '')
      await router.push({ name: 'login' })
    } else {
      throw new Error('Error: NO DATA')
    }
  },
  async updateDetail ({ state, commit }) {
    const user = (await authAxios.post('/auth/getDetail')).data as UserReturnParams
    commit('SET_USER', user.user)
    commit('SET_TOKEN', user.accessToken)
    commit('SET_REFRESH_TOKEN', user.refreshToken)
    state.isLoaded = true
    // await this.dispatch('menu/updateDisplayRoutes', baseRoutes)
  }
} as ActionTree<UserState, never>

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
