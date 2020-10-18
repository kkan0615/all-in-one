import _Vue from 'vue'
import io from 'socket.io-client'
import store from '@/store'

export default function notiSocketPlugin (Vue: typeof _Vue): void {
  console.log({
    userId: store.getters['user/userId'],
    roleId: store.getters['user/roleGrade']
  })
  Vue.prototype.$notiSocket = io('http://localhost:8002/notification', {
    query: {
      userId: store.getters['user/userId'],
      roleId: store.getters['user/roleGrade']
    }
  })
}
