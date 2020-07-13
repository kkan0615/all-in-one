/** To do list
 *  1. Detail panel 추가
 *  2. 권한 추가시키기
 *
*/
interface UserDataInterface {
  id: Number,
  userId: string,
  password: string,
  userToken: string,
  nickname: string,
  roles: Array<string>
  avator: string,
  // detail: Array<string>
}

export const fakeDataUsers: Array<UserDataInterface> = [
  {
    id: 0,
    userId: 'test',
    password: 'test',
    userToken: 'testToken',
    nickname: 'test',
    roles: ['admin'],
    avator: 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
    // detail: []
  },
  {
    id: 1,
    userId: 'kadeo0330',
    password: 'test',
    userToken: 'kadeoToken',
    nickname: 'Higuchi Kadeo',
    roles: ['admin'],
    avator: 'https://vignette.wikia.nocookie.net/virtualyoutuber/images/9/97/Higuchi_Kaede_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190313005205',
    // detail: []
  },
  {
    id: 2,
    userId: 'hanayo0117',
    password: 'test',
    userToken: 'hanayoToken',
    nickname: 'koizumi Hanayo',
    roles: ['admin'],
    avator: 'https://66.media.tumblr.com/01218e3dde9a6f2ae5edf7a60a5cbcad/463c184dd2788897-11/s500x750/71edff33f63b65fc1f10927c5ba0bc1c35cc61e2.png',
    // detail: []
  }
]

export function findUser(userId: string, password: string) {
  const user = fakeDataUsers.find((e) => e.userId === userId)
  // console.log(`userId: ${userId} password: ${password}`)

  if (user) {
    if (user.password === password) {
      return user
    } else {
      return null
    }
  } else {
    return null
  }
}

export function findUserByToken(token: string) {
  const user = fakeDataUsers.find((e) => e.userToken === token)
  // console.log(`userId: ${userId} password: ${password}`)

  if (user) {
    return user
  }
}