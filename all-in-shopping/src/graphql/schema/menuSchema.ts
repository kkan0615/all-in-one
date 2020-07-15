import { gql } from 'apollo-server-express';

export const tabSchema = gql`
  type Tab {
    id: Int
    icon: String
    name: String
    content: String
    tags: [Tag!]
  }
  extend type Query {
    allTabs: [Tab!]
  }
  extend type Mutation {
    addTabs(id: Int!, icon: String!, name: String!, content: String!): Tab!
  }
`

export const tagSchema = gql`
  type Tag {
    id: Int
    icon: String
    name: String
    link: String
    subTags: [subTag!]
  }
  extend type Query {
    allTags: [Tag!]!
  }
  extend type Mutation {
    addTags(id: Int!, icon: String!, name: String!): Tag!
  }
`


export const subTagSchema = gql`
  type subTag {
    id: Int
    icon: String
    name: String
    link: String
  }
  extend type Query {
    allSubTags: [Tab]
  }
  extend type Mutation {
    addSubTags(id: Int!, icon: String! name: String!): Tag!
  }
`