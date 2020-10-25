import { Socket } from '@/types/config'

export const server = {
  enabled: true,
  server: 'http://localhost', // If it is '', connect to localhost
  port: 8001
}

export const database = {
//  database config will be here
}

export const socket: Socket = {
  // TODO: Default socket such as table change config will be here
  enabled: true,
  server: 'http://localhost',
  port: 8002
}

export const alertSocket: Socket = {
  // TODO: Alet socket config will be here
  enabled: false,
  server: 'http://localhost',
  port: 8003
}

export const chatSocket: Socket = {
  // TODO: Alet socket config will be here
  enabled: false,
  server: 'http://localhost',
  port: 8004
}

// @TODO: Change option keys as type
export const logger = {
  globalOptions: {
    // From moment formatting: https://momentjs.com/docs/#/displaying/
    timeFormat: 'YYYY-MM-DD hh:mm:ss A',
    tailColor: 'magenta',
    maxMessageSize: 100,
    messageColor: 'black'
  },
  fileLogging: {
    enabled: true,
    logLevel: 'Info',
    maxSize: 16777216, // 16 mega bytes
    maxFiles: 5,
    fileName: 'server.log'
  },
  fileErrLogging: {
    enabled: true,
    logLevel: 'Critical',
    maxSize: 16777216, // 16 mega bytes
    maxFiles: 5,
    fileName: 'serverErr.log'
  },
  options: {
    enabled: true,
    logLevel: 'Info',
    levels: {
      Emergency: 0,
      Alert: 1,
      Critical: 2,
      Error: 3,
      Warning: 4,
      Notice: 5,
      Info: 6,
      Debug: 7
    },
    colors: {
      Emergency: 'blue',
      Alert: 'blue',
      Critical: 'red',
      Error: 'red',
      Warning: 'orange',
      Notice: 'yellow',
      Info: 'cyan',
      Debug: 'green'
    },
    'highlight-tail': true
  }
}

export const mongoDB = {
  enabled: true,
  server: 'localhost:27017/admin',
  userId: 'superAdmin2',
  password: 'admin0615',
  dbName: 'allInOne',
  userNewUrlParser: true,
  useCreateIndex: true,
  reconnectInterval: 2000 // ms
}

// Auth(login) token
export const jwtTokenKey = 'REQUIEM-JWT-TOKEN-KEY'

export const tokenRule = {
  accessTokenTime: '2h',
  refreshTokenTime: '24h'
}

export const cookieKey = 'REQUIEM-COOKIE-TOKEN-KEY'

export const DATEDEFAULTFORMAT = 'llll'

export const config = {
  server,
  socket,
  // alertSocket,
  // chatSocket,
  logger,
  database,
  jwtTokenKey,
  cookieKey,
  DATEDEFAULTFORMAT
}

export default config
