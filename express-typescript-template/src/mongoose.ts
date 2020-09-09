import mongoose from 'mongoose'
import { mongoDB } from '@/config'
import Logger from '@/utils/logger'

const logger = new Logger(__filename)

class MongoDB {
  private static _instance: MongoDB

  private _connectionPool: mongoose.Connection

  async constructor () {
    this._connectionPool = await this.connect()
  }

  // public static getInstance() {}

  public async connect (): Promise<mongoose.Connection> {
    const connectionPool = await mongoose.connect(mongoDB.server, {
      dbName: mongoDB.dbName,
      useNewUrlParser: mongoDB.userNewUrlParser,
      useCreateIndex: mongoDB.useCreateIndex
    }, (error) => {
      MongoDB.connected(error)
    })

    connectionPool.connection.on('error', MongoDB.error)

    connectionPool.connection.on('disconnected', MongoDB.connectionError)

    return connectionPool.connection
  }

  private static connected (error: any) {
    if (error) {
      MongoDB.error(error)
    } else {
      logger.info('MongoDB has been connected')
    }
  }
  private static error (error: any) {
    logger.error('MongoDB Connection error' + error)
  }

  private static connectionError () {
    logger.error('MongoDB Connection error, Reconnecting...')
  }
}

export default MongoDB
