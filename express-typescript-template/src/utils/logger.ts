import winston from 'winston'
import moment from 'moment'
import colors from 'colors'
import { logger as config } from '@/config'

class Logger {
  private static _instance: winston.Logger
  private readonly _fileName: string

  constructor (fileName = 'system') {
    this._fileName = fileName.replace(process.cwd(), '').substring(1)
    Logger._instance = this.create()
  }

  public static get instance () : winston.Logger {
    return this._instance || (this._instance = new this().create())
  }

  public create () : winston.Logger {
    if (Logger._instance) {
      return Logger._instance
    }

    winston.addColors(config.options.colors)
    return winston.createLogger({
      levels: config.options.levels,
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple(),
          ),
          level: config.options.logLevel,
          silent: false
        }),
        new winston.transports.File({
          level: config.fileLogging.logLevel,
          silent: false,
          format: winston.format.combine(
            winston.format.simple(),
            winston.format.colorize(),
          ),
          filename: config.fileLogging.fileName,
          maxsize: config.fileLogging.maxSize,
          maxFiles: config.fileLogging.maxFiles
        }),
        new winston.transports.File({
          level: config.fileErrLogging.logLevel,
          silent: false,
          format: winston.format.combine(
            winston.format.simple(),
            winston.format.colorize(),
          ),
          filename: config.fileErrLogging.fileName,
          maxsize: config.fileErrLogging.maxSize,
          maxFiles: config.fileErrLogging.maxFiles
        })
      ]
    })
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public write (message: string | object, level = 'Debug') {
    const currentTime = moment().format(config.globalOptions.timeFormat)
    let tail = `from ${this._fileName} at ${currentTime}`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    tail = colors[config.globalOptions.tailColor](tail)

    let detailMessage = typeof message === 'object'
      ? JSON.stringify(message) : message

    if (detailMessage.length > config.globalOptions.maxMessageSize) {
      detailMessage = detailMessage.substring(0, config.globalOptions.maxMessageSize)
      detailMessage += ' ...'
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    detailMessage = colors[config.globalOptions.messageColor](detailMessage)

    const wrappedMessage = `${detailMessage}\n\t${tail}`
    Logger._instance.log(level, wrappedMessage)
  }

  // eslint-disable-next-line @typescript-eslint/ban-types
  public emerg = (message: string | object) => this.write(message, 'Emergency')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public alert = (message: string | object) => this.write(message, 'Alert')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public crit = (message: string | object) => this.write(message, 'Critical')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public error = (message: string | object) => this.write(message, 'Error')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public warning = (message: string | object) => this.write(message, 'Warning')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public notice = (message: string | object) => this.write(message, 'Notice')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public info = (message: string | object) => this.write(message, 'Info')
  // eslint-disable-next-line @typescript-eslint/ban-types
  public debug = (message: string | object) => this.write(message, 'Debug')
}

export default Logger
