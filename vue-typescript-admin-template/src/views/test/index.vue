<template>
  <div>
    <p>{{ testValue }}</p>
    <v-btn
      @click="onClickTestButton"
    >
      Test Socket
    </v-btn>
    <v-btn
      @click="pingPongConnect"
    >
      ping
    </v-btn>
    <v-btn
      @click="anotherWord"
    >
      anotherWord
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import io from 'socket.io-client'
import { NotificationState } from '@/store/modules/alert'
import moment from 'moment'

@Component({
  name: 'Test',
  components: {
  }
})
export default class Test extends Vue {
  private testIo: SocketIOClient.Socket | null = null
  private testValue: any = 'hi'

  created () {
    // this.testIo = io('http://localhost:8002')
  }

  mounted () {
    if(!this.testIo) return
    console.log(this.testIo)
    this.testIo.on('testPong', (data: any) => {
      console.log(data)
      this.testValue = data
    })

    this.testIo.on('anotherWordRes', (data: any) => {
      console.log(data)
      this.testValue = data
    })
  }

  beforeDestroy () {
    if (this.testIo) {
      this.testIo.disconnect()
    }
  }

  private onClickTestButton () {
    this.testIo = io('http://localhost:8002', {
      transports: ['websocket'],
      upgrade: false,
      forceNew: true,
    })
    this.testIo.on('testPong', (data: any) => {
      console.log(data)
      this.testValue = data
    })

    this.testIo.on('anotherWordRes', (data: any) => {
      console.log(data)
      this.testValue = data
    })
    console.log(this.testIo)
  }

  private pingPongConnect () {
    if (!this.testIo) return
    console.log('ping pong')
    console.log(this.testIo.id)
    this.testIo.emit('testPing', { test: 'from client' })
  }

  private anotherWord () {
    if (!this.testIo) return
    console.log('anotherWord!')
    this.testIo.emit('anotherWord', { anotherWord: 'anotherWord' })
  }

  // private pingPongConnect () {
  // this.$notiSocket.emit('sendNotification', {
  //   type: 'info',
  //   date: moment().format('llll'),
  //   userId: this.$store.state.user._id || '5f5cc20b67681639f8989716',
  //   //authorId: this.$store.state.user._id,
  //   title: 'ABC airplane is ready',
  //   content: 'the airplane ABC is ready'
  // } as NotificationState)
  // }
}
</script>
