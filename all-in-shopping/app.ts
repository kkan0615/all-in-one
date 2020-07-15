import * as express from 'express'
import { apiServer as config } from './config'
import Logger from './src/utils/logger'
// import graphqlHTTP from 'express-graphql';
// import { buildSchema } from 'graphql'
import { ApolloServer, gql } from 'apollo-server-express';
// import { fakeDataUsers } from './src/data/user';
import { schema } from './src/graphql/schema';
import cors from 'cors';

import authRouter from './routes/auth';
import testRouter from './routes/test';

const logger = new Logger(__filename)

/** App class */
class App {
  private readonly application: express.Application

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
  schema,
  playground: true
})

apolloSever.applyMiddleware({
  app,
  path: '/graphql'
})

/** Set the Port number */
app.set('port', process.env.PORT || config.port || 8001)

/** Create sever */
app.listen(app.get('port'), () => {
  logger.info(`localhost:${app.get('port')} is running`)
  logger.info(`🚀 localhost:${app.get('port')}/graphql is for graphql`)

})

/** Collection of routers */
app.use('/auth', authRouter)
app.use('/test', testRouter)

/** Test: Sever is working well or not */
app.use('/', (req: express.Request, res: express.Response) => {
  res.send('Hello Typescript Express World')
})
