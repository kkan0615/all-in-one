/*
 *
 * Last Updated: 07-13-2020
 * Description: Common logging module.
 *
 * about Winston 3.x: https://github.com/winstonjs/winston
 * about RFC5424 (~conformed log levels): https://tools.ietf.org/html/rfc5424
 */

import winston from 'winston'
import path from 'path'
import moment from 'moment'
import colors from 'colors'
import { logger as config } from '../../config'

class Logger {
    // RFC5424: log levels 0 to 7 (highest to lowest)
    public static options = {
        'tail-highlight': true
    }

    public static get instance (): winston.Logger {
        return this._instance || (this._instance = new this().create())
    }

    constructor (caller = 'system') {
        this._caller = caller.replace(process.cwd(), '').substring(1)
        Logger._instance = this.create()
    }

    // extra extension for the constructor.
    // TODO: production mode ...
    public create (): winston.Logger {
        if (Logger._instance) { return Logger._instance }

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
                        // winston.format.printf((info) => `${info.level}: ${info.message
                        //   .replace('[90m', '').replace('[39m', '')}`)

                    ),
                    filename: config.fileLogging.filename,
                    maxsize: config.fileLogging.maxSize,
                    maxFiles: config.fileLogging.maxFiles
                })
            ]
        })
    }

    public write (message: string, level = 'debug') {
        const currentTime = moment().format('YYYY-MM-DD hh:mm:ss A')
        let tail = `from ${this._caller} at ${currentTime}`
        if (config.options['highlight-tail']) tail = colors.grey(tail)
        const wrappedMessage = `${message}\n\t${tail}`
        Logger._instance.log(level, wrappedMessage)
    }

    public emerg = (message: string) => this.write(message, 'emerg')
    public alert = (message: string) => this.write(message, 'alert')
    public crit = (message: string) => this.write(message, 'crit')
    public error = (message: string) => this.write(message, 'error')
    public warning = (message: string) => this.write(message, 'warning')
    public notice = (message: string) => this.write(message, 'notice')
    public info = (message: string) => this.write(message, 'info')
    public debug = (message: string) => this.write(message, 'debug')

    private static _instance: winston.Logger
    private readonly _caller: string
}

export default Logger
