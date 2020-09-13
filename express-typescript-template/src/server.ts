import app from '@/app'
import Logger from '@/utils/logger'
import color from 'colors'
import { mongoDB as mongoDBConfig } from '@/config'
import MongoDB from '@/mongoose'

const logger = new Logger()

const server = app.listen(app.get('port'), async () => {
  logger.info(`${color.cyan('✨')} Sever is running at ${app.get('port')} ${color.cyan('✨')}`)
  mongoDBConfig.enabled && await MongoDB.connect()
})

export default server
