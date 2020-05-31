export interface UserDataInterface {
  userId: string,
  password: string,
  userToken: string,
  nickname: string
  avator: string,
  detail: Array<string>
}

const fakeDataUsers: Array<UserDataInterface> = [
  {
    userId: 'test',
    password: 'test',
    userToken: 'testToken',
    nickname: 'test',
    avator: 'https://previews.123rf.com/images/aquir/aquir1311/aquir131100316/23569861-sample-grunge-red-round-stamp.jpg',
    detail: []
  },
  {
    userId: 'kadeo0330',
    password: 'test',
    userToken: 'kadeoToken',
    nickname: 'Higuchi Kadeo',
    avator: 'https://vignette.wikia.nocookie.net/virtualyoutuber/images/9/97/Higuchi_Kaede_Portrait.png/revision/latest/scale-to-width-down/310?cb=20190313005205',
    detail: []
  },
  {
    userId: 'hanayo0117',
    password: 'test',
    userToken: 'hanayoToken',
    nickname: 'koizumi Hanayo',
    avator: 'https://66.media.tumblr.com/01218e3dde9a6f2ae5edf7a60a5cbcad/463c184dd2788897-11/s500x750/71edff33f63b65fc1f10927c5ba0bc1c35cc61e2.png',
    detail: []
  }
]

export function findUser(userId:string, password: string) {
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
