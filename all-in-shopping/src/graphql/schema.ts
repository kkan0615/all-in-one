/**
 * Schmeas.ts
 * Author: Youngjin Kwak
 * CratedAt: 03-07-2020
 * Version: 1.0
 * Purpose:
 */
/**
 * References:
 * https://velog.io/@caias/graphQL4 // How to modulerize files
 */

import { gql, makeExecutableSchema } from 'apollo-server-express';
import { userSchema } from './schema/userSchema';
import { tabSchema, tagSchema, subTagSchema } from './schema/menuSchema';
import { userResovler } from './resolvers/userResolver';
import { tabsResovler } from './resolvers/menuResolver';
import { commonCodeResovler } from './resolvers/commonCodeResovler';
import { commonCodeSchema } from './schema/commonCodeSchema';

const RootSchema = gql`
  type Query {
    root: String
  }
  type Mutation{
    root: String
  }
`;

const RootResolver = {
  Query: {
    root: () => 'Root resolver is running!',
  },
};

export const schema = makeExecutableSchema({
  typeDefs: [RootSchema, userSchema, tabSchema, tagSchema, subTagSchema, commonCodeSchema],
  resolvers: [RootResolver, userResovler, tabsResovler, commonCodeResovler],
});