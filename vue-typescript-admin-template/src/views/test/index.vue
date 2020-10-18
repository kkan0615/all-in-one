<template>
  <div>
    <p>{{ testValue }}</p>
    <v-text-field
      v-model="title"
      label="title"
      outlined
    />
    <v-text-field
      v-model="content"
      label="content"
      outlined
    />
    <v-text-field
      v-model="toWho"
      label="ID"
      outlined
    />
    <v-btn
      @click="onClickToRole"
    >
      Test Socket
    </v-btn>
    <!--    <v-btn-->
    <!--      @click="pingPongConnect"-->
    <!--    >-->
    <!--      ping-->
    <!--    </v-btn>-->
    <!--    <v-btn-->
    <!--      @click="anotherWord"-->
    <!--    >-->
    <!--      anotherWord-->
    <!--    </v-btn>-->
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
  private testValue: any = 'hi'
  private content = ''
  private title = ''
  private toWho = this.$store.getters['user/role']._id

  mounted () {
    this.$notiSocket.on('addNotification', (data: NotificationState) => {
      console.log(data)
    })

  }

  // private onClickTestButton () {
  //   this.testIo = io('http://localhost:8002', {
  //     transports: ['websocket'],
  //     upgrade: false,
  //     forceNew: true,
  //   })
  //   this.testIo.on('testPong', (data: any) => {
  //     console.log(data)
  //     this.testValue = data
  //   })
  //
  //   this.testIo.on('anotherWordRes', (data: any) => {
  //     console.log(data)
  //     this.testValue = data
  //   })
  //   console.log(this.testIo)
  // }

  private onClickToRole () {
    if (!this.title || !this.content) return
    this.$notiSocket.emit('sendRoleNotification', {
      type: 'info',
      date: moment().format('llll'),
      authorId: this.$store.state.user._id,
      title: this.title,
      content: this.content
    } as NotificationState, this.toWho)
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
