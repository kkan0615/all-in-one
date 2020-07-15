import { gql } from 'apollo-server-express';

export const commonCodeSchema = gql`
  type CommonCode {
    id: Int!
    majorCode: String
    majorCodeName: String
    minorCode: String
    minorCodeName: String
    value: String
    searchKey1: String
    searchKey2: String
  }
  extend type Query {
    allCommonCode: [CommonCode]
    findCommonCodeListByCodes(majorCode: String, minorCode: String): [CommonCode]
  }
  extend type Mutation {
    addCommonCode(id: Int!, majorCode: String!, majorName: String!, minorCode: String!, minorCodeName: String!, value:String!, searchKey: String!, searchKey2: String!): CommonCode!
  }
`