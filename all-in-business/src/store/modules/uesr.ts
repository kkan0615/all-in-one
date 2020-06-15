/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { getAuthToken, setAuthToken } from '@/utils/authUtils'

// import apollo from '@/apolloClient'

/** ********** 삭제해주세요 ************/
// import { findUser } from '@/store/data/user'
// import { gql } from 'apollo-boost'
import Axios from 'axios'

interface LoginFormInterface {
  userId: string,
  password: string
}

// export enum UserRoleEnum {
//   admin = 'admin',
//   guest = 'guest'
// }

export interface UserInterface {
  userToken: string,
  nickname: string
  avator: string,
  roles: Array<string>
  detail: Array<string>
  // username: string
}

// @Module({ namespaced: true, name: 'user' })
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserInterface {
  public userToken = getAuthToken() || ''
  public nickname = 'testNick'
  public avator = ''
  public roles: Array<string> = []
  public detail: Array<string> = []

  @Mutation
  private SET_USETOKEN(token: string) {
    this.userToken = token
    setAuthToken(token)
  }

  @Mutation
  private SET_NICKNAME(nickname: string) {
    this.nickname = nickname
  }

  @Mutation
  private SET_AVACTOR(avator: string) {
    this.avator = avator
  }

  @Mutation
  private SET_ROLES(roles: Array<string>) {
    if (!roles || roles.length === 0) {
      this.roles = []
    } else {
      this.roles = roles
    }
  }

  @Action
  public async login(args:LoginFormInterface) {
    try {
      const res = (await Axios.post('/auth/login', args)).data
      if (res) {
        this.SET_USETOKEN(res.userToken)
        this.SET_NICKNAME(res.nickname)
        this.SET_AVACTOR(res.avator)
        this.SET_ROLES(res.roles)
        return true
      } else {
        return false
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }

  @Action
  public async requestDetail() {
    try {
      const res = (await Axios.post('/auth/detail', { token: this.userToken })).data
      if (res) {
        this.SET_USETOKEN(res.userToken)
        this.SET_NICKNAME(res.nickname)
        this.SET_AVACTOR(res.avator)
        this.SET_ROLES(res.roles)
        return { status: true, message: 'Success to Login' }
      } else {
        return { status: false, message: 'User Id and Password is not matched' }
      }
    } catch (error) {
      console.error(error)
      if (error.message) {
        return { status: false, message: error.message }
      } else {
        return { status: false, message: error }
      }
    }
  }

  @Action
  public async logout() {
    try {
      const res = (await Axios.post('/auth/logout', { token: this.userToken })).data
      if (res) {
        this.SET_USETOKEN('')
        this.SET_NICKNAME('')
        this.SET_AVACTOR('')
        this.SET_ROLES([])

        return true
      } else {
        return false
      }
    } catch (error) {
      console.error(error)
      return false
    }
  }
}

// export default User
export const UserModule = getModule(User)
