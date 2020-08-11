import app from '@/app'
import Logger from '@/utils/logger'
import color from 'colors'

const logger = new Logger()

const server = app.listen(app.get('port'), () => {
  logger.info(`${color.cyan('✨')} Sever is running at ${app.get('port')} ${color.cyan('✨')}`)
})

export default server
