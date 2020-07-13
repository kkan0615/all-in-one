import * as express from 'express'
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql'
import { ApolloServer, gql } from 'apollo-server-express';
import { fakeDataUsers } from './src/data/user';
import { schema } from './src/graphql/schema';
import cors from 'cors';

import authRouter from './routes/auth';
import testRouter from './routes/test';

// const typeDefs = gql`
//   type User {
//     userId: String
//     password: String
//     userToken: String
//     nickname: String
//     avator: String
//   }
//   type Query {
//     allUser: [User]
//   }
// `

// const resovler = {
//   Query: {
//     allUser: () => fakeDataUsers
//   }
// }

/** App class */
class App {
  private application: express.Application

  constructor() {
    this.application = express.default()
  }

  getApplication() {
    return this.application
  }
}

/** Create App with class */
const app = new App().getApplication()

/** Set the cors */
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}))

app.use(express.json())

/** Appollo Setting */
const apolloSever = new ApolloServer({
  // typeDefs,
  // resolvers: resovler,
  schema,
  playground: true
})

apolloSever.applyMiddleware({
  app,
  path: '/graphql'
})

/** Set the Port number */
app.set('port', process.env.PORT || 8001)

/** Create sever */
app.listen(app.get('port'), () => {
  console.log(`localhost:${app.get('port')} is running`);
  console.log(`🚀 localhost:${app.get('port')}/graphql is for graphql`);
})

app.use('/auth', authRouter)
app.use('/test', testRouter)

/** Test: Sever is working well or not */
app.use('/', (req: express.Request, res: express.Response) => {
  res.send('Hello Typescript Express World')
})
