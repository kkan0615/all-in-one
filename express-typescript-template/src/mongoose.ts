import mongoose from 'mongoose'
import { mongoDB as mongoDBConfig } from '@/config'
import Logger from '@/utils/logger'
import { sleep } from '@/utils/sleep'

const logger = new Logger(__filename)

class MongoDB {
  private static _instance: MongoDB

  private _connected = false
  private _connectionPool?: mongoose.Mongoose
  private _reconnCount = 0
  // public static getInstance() {}

  public static get instance (): Promise<MongoDB> {
    return (async () => {
      return (this._instance && this._instance._connectionPool && this._instance._connectionPool)
        ? this._instance : (this._instance = await MongoDB.connect())
    })()
  }

  public static async connect (): Promise<MongoDB> {
    this._instance = this._instance || new MongoDB()

    if (this._instance._connectionPool && this._instance._connected) return this._instance

    try {
      const fullServerPath = `mongodb://${mongoDBConfig.userId}:${mongoDBConfig.password}@${mongoDBConfig.server}`

      logger.info(`MongoDB is connecting to ${fullServerPath}`)
      const connectionPool = await mongoose.connect(fullServerPath, {
        dbName: mongoDBConfig.dbName,
        useNewUrlParser: mongoDBConfig.userNewUrlParser,
        useCreateIndex: mongoDBConfig.useCreateIndex,
        useFindAndModify: false,
        useUnifiedTopology: true,
      })


      connectionPool.connection.on('error', MongoDB.error)

      connectionPool.connection.on('disconnected', MongoDB.connectionError)

      this._instance._connected = true
      this._instance._connectionPool = connectionPool
      /* Info: It's success to connect with Database */
      logger.info('MongoDB has been connected at ' + fullServerPath)

      return this._instance
    } catch (error) {
      console.error(error)
      logger.crit(error)
    }

    await sleep(mongoDBConfig.reconnectInterval * Math.pow(2, this._instance._reconnCount++))
    return await this.connect()
  }

  private static connected (error: any) {
    if (error) {
      MongoDB.error(error)
    } else {
      logger.info('MongoDB has been connected')
      this._instance._connected = true
    }
  }
  private static error (error: any) {
    logger.error('MongoDB Connection error: ' + error)
    this._instance._connected = false
  }

  private static connectionError () {
    logger.error('MongoDB Connection error, Reconnecting...')
    this._instance._connected = false
    this._instance._connectionPool = undefined
  }
}

export default MongoDB
