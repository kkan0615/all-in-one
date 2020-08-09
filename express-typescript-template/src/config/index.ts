export const server = {
  enabled: true,
  server: '', // If it is '', connect to localhost
  port: 8001
}

export const database = {
//  database config will be here
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
    filename: 'server.log'
  },
  fileErrLogging: {
    enabled: true,
    logLevel: 'Critical',
    maxSize: 16777216, // 16 mega bytes
    maxFiles: 5,
    filename: 'serverErr.log'
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

export const authTokenKey = 'AUTH-TOKEN-KEY'

export const config = {
  server,
  logger,
  database,
  authTokenKey
}

export default config
