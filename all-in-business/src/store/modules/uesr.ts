/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import apollo from '@/apolloClient'

/** ********** 삭제해주세요 ************/
// import { findUser } from '@/store/data/user'
import { gql } from 'apollo-boost'

interface LoginFormInterface {
  userId: string,
  password: string
}

export interface UserInterface {
  userToken: string,
  nickname: string
  avator: string,
  detail: Array<string>
  // username: string
}

// @Module({ namespaced: true, name: 'user' })
@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements UserInterface {
  public userToken = ''
  public nickname = 'testNick'
  public avator = ''
  public detail: Array<string> = []

  @Mutation
  private SET_USETOKEN(token: string) {
    this.userToken = token
  }

  @Mutation
  private SET_NICKNAME(nickname: string) {
    this.nickname = nickname
  }

  @Mutation
  private SET_AVACTOR(avator: string) {
    this.avator = avator
  }

  @Action
  public async login(args:LoginFormInterface) {
    // const exUser = findUser(args.userId, args.password)

    const exUser = (await apollo.query({
      query: gql`
        query{
          findUserByuserId(userId: "${args.userId}") {
            id
            userToken
            userId
            nickname
            avator
          }
        }
      `
    })).data.findUserByuserId
    if (exUser) {
      this.SET_USETOKEN(exUser.userToken)
      this.SET_NICKNAME(exUser.nickname)
      this.SET_AVACTOR(exUser.avator)
      return true
    } else {
      console.error(`User is not exist Check your id or password userId: ${args.userId} password: ${args.password}`)
      return false
    }
  }

  @Action
  public logout() {
    this.SET_USETOKEN('')
    this.SET_NICKNAME('')
    this.SET_AVACTOR('')
    return true
  }
}

// export default User
export const UserModule = getModule(User)
