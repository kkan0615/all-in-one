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
  port: 7274,
  enabled: true
}
