import { gql } from 'apollo-server-express';

export const userSchema = gql`
  type User {
    id: Int
    userId: String
    password: String
    userToken: String
    nickname: String
    avator: String
  }
  extend type Query {
    allUser: [User]
    findUserByuserId(userId: String!): User
  }
  extend type Mutation {
    addUser(id: Int!, userId: String!, password: String!, userToken: String!, nickname: String!, avator: String!): User!
  }
`