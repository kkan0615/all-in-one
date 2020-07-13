import { fakeDataUsers } from '../../data/user';
import { GraphQLArgs } from 'graphql';

export const userResovler = {
  Query: {
    allUser: () => {
      return fakeDataUsers
    },
    findUserByuserId(root: any, { userId }: any) {
      return fakeDataUsers.find((e) => e.userId === userId)
    }
  },
  Mutation: {
    addUser: (root: any, args: any) => addUserFn(args)
  }
}

const addUserFn = (args: any) => {
  fakeDataUsers.push(args)
  return args
}