// Api Server setting
export const apiServer = {
  protocol: 'http',
  sever: '',
  port: 8001
}

/**
 * @description Socket Setting
 */
export const socket = {
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
  // Suspend time for reconnecting
  reconnectInterval: 2000,
  // Reconnecting multiple time 2 * 2 * 2 ...
  reconnectIntervalMultiplier: 2,
  port: 7777,
  enabled: true
}

export const database = {
  user: 'username',
  password: 'password',
  server: '',
  port: 0,
  database: 'sth',
  reconnectInterval: 2000,
  reconnectIntervalMultiplier: 2,
  enabled: true
}

export const logger = {
  fileLogging: {
    enabled: true,
    logLevel: 'info',
    maxSize: 16777216, // 16 mega bytes
    maxFiles: 5,
    filename: 'server.log'
  },
  options: {
    enabled: true,
    logLevel: 'info',
    levels: {
      emerg: 0,
      alert: 1,
      crit: 2,
      error: 3,
      warning: 4,
      notice: 5,
      info: 6,
      debug: 7
    },
    colors: {
      emerg: 'blue',
      alert: 'blue',
      crit: 'red',
      error: 'red',
      warning: 'orange',
      notice: 'yellow',
      info: 'yellow',
      debug: 'green'
    },
    'highlight-tail': true
  }
}
