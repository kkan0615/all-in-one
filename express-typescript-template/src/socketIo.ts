import io from 'socket.io'
import http from 'http'
import { socket as socketConfig } from '@/config'
import Logger from '@/utils/logger'
import User, { IUser } from '@/schemas/user'

import Notification, { INotification } from '@/schemas/notification'
// import user from '@/schemas/user'

const logger = new Logger(__filename)

declare namespace NSocket {
  interface IRooms {
    userId: string,
    roleId: string
  }
}

export default class SocketIo {
  private static _instance: SocketIo
  private _connected = false
  private _reconnectedCount = 0
  private _connectionPool?: io.Server

  public static get instance (): Promise<SocketIo> {
    return (async () => {
      return (this._instance && this._instance._connected)
        ? this._instance : (this._instance = await SocketIo.connect())
    })()
  }

  public static async connect (): Promise<SocketIo> {
    this._instance = this._instance || new SocketIo()

    if (this._instance._connectionPool) return this._instance

    logger.info('Trying to establish socket.io server ...')
    this._instance._connectionPool = io(http.createServer())
    await SocketIo.createTestConnection(this._instance._connectionPool)

    logger.info('Server socket established.')

    // 커넥션
    const notiSocket = this._instance._connectionPool.of('/notification')
    await SocketIo.createNotiConnection(notiSocket)
    // await SocketIo.setPayload(this._instance._connectionPool)

    try {
      logger.info('SocketIo is connecting ...')

      await this._instance._connectionPool.listen(socketConfig.port).origins('http://localhost:8080')
      this._instance._connected = true
      logger.info(`The socket server has been connected at :${socketConfig.server}:${socketConfig.port}`)


      this._instance._reconnectedCount = 0
      return this._instance
    } catch (exception) {
      logger.crit(exception.message)
    }

    // await sleep(config.reconnInterval * Math.pow(2, this._instance._reconnCount++))

    return this.connect()
  }

  private static async createTestConnection (socket: io.Server): Promise<void> {
    // console.log(socket.clients())
    socket.on('connection', (clientSocket: io.Socket) =>{
      console.log('calling', clientSocket.id)
      setTimeout(function () {
        clientSocket.emit('testPing', { tesT: 'testing2 ' + clientSocket.id })
        socket.send('Sent a message 2seconds after connection! ' + clientSocket.id)
      }, 200)
      clientSocket.broadcast.emit('testPong', { tesT: 'testing ' + clientSocket.id })
      clientSocket.emit('testPong', { tesT: 'testing2 ' + clientSocket.id })

      clientSocket.on('testPing', (data: any) =>{
        console.log(clientSocket.id)

        console.log(data)
        console.log('ping pong')
        socket.emit('testPong', { test : 'pong' })
      })

      clientSocket.on('anotherWord', (data: any) =>{
        console.log(data)
        console.log('anotherWordRes')
        socket.emit('anotherWordRes', { test : 'anotherWordRes' })
      })

      clientSocket.on('forceDisconnect', () => {
        console.log('force')
        // notiSocket.disconnect()
      })

      clientSocket.on('disconnect', () => {
        clientSocket.removeAllListeners()
        console.log('Connection Test2 is disconnected ')
      })
    })
  }

  /**
   * @description Notification socket
   * @param notiSocket
   */
  private static async createNotiConnection (notiSocket: io.Namespace) {
    notiSocket.on('connection', async (clientSocket: io.Socket) => {
      clientSocket.on('joinRooms', async (rooms: NSocket.IRooms) => {
        const userId = rooms.userId
        if (userId) clientSocket.join(userId)

        const roleId = rooms.roleId
        if (roleId) clientSocket.join(roleId)

        // console.log('join rooms', rooms)
        // console.log('rooms', clientSocket.rooms)
      })

      clientSocket.on('sendNotification', async (data: INotification) => {
        const newNoti = await Notification.create({
          ...data
        })
        notiSocket.emit('addNotification', newNoti)
      })

      clientSocket.on('sendUserNotification', async (data: INotification, userId: string) => {
        const user = await User.findById(userId)
        if (user) {
          const newNoti = await Notification.create({
            ...data,
            userId: user._id
          })

          // @TODO: 자기가 자기에게 보내지못하도록 하기

          notiSocket.to(user._id).emit('addNotification', newNoti)
        }
      })

      clientSocket.on('sendRoleNotification', async (data: INotification, roleId: string) => {
        const users = await User.find({
          roleId: roleId
        })

        users.map(async (user: IUser) => {
          await Notification.create({
            ...data,
            userId: user._id
          })
        })

        const exRoom = clientSocket.adapter.rooms[roleId]
        // console.log(exRoom)
        if (exRoom) {
          notiSocket.to(roleId).emit('addNotification', data)
        } else {
          clientSocket.join(roleId)
          notiSocket.to(roleId).emit('addNotification', data)
          clientSocket.leave(roleId)
        }
      })

      clientSocket.on('readNotification', async (data: INotification) => {
        const updatedNoti = await Notification.findOneAndUpdate({
          _id: data._id
        }, {
          read: true
        })
        notiSocket.emit('addNotification', updatedNoti)
      })

      clientSocket.on('forceDisconnect', () => {
        notiSocket.emit('disconnect')
      })

      clientSocket.on('disconnect', () => {
        console.log('user disconnected: ')
      })
    })
  }

}
