<!--
 @TODO
  1. If disconnected, refresh
-->
<template>
  <v-menu
    v-model="menu"
    max-height="500px"
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
      <v-badge
        color="primary"
        :content="notifications.length"
        :value="notifications.length"
        overlap
      >
        <v-icon
          v-on="on"
        >
          notifications_none
        </v-icon>
      </v-badge>
    </template>
    <v-card
      class="notification-card"
      color="secondary"
      width="400px"
      height="500px"
    >
      <v-card-title>
        Notification
        <v-spacer />
        <v-btn
          icon
          text
          @click="onClickClose"
        >
          <v-icon>
            close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle
        v-if="notifications.length"
      >
        You have {{ notifications.length }} unread notification
      </v-card-subtitle>
      <v-card-text
        v-if="!$notiSocket.connected"
      >
        <p>
          Notification server is disconnected.
        </p>
        <p>
          Please Press F5 to refresh
        </p>
      </v-card-text>
      <v-card-text
        v-else-if="notifications.length > 0"
      >
        <v-alert
          v-for="(notification) in notifications"
          :key="notification.id"
          :color="notification.color"
          :type="notification.type ? notification.type : 'info'"
          dismissible
          dense
          @input="readNotification(notification)"
        >
          <div class="subtitle-2">
            {{ notification.title }}
          </div>
          <div class="body-1">
            {{ notification.content }}
          </div>
          <div class="caption text-end">
            {{ notification.date }}
          </div>
        </v-alert>
      </v-card-text>
      <v-card-text
        v-else
      >
        No Notification
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NotificationState } from '@/store/modules/alert'
import io from 'socket.io-client'
import moment from 'moment'
import { ResponseParam } from '@/types/serverParams'
import store from '@/store'

@Component({
  name: 'Notification',
})
export default class Notification extends Vue {
  private menu = false

  async created () {
    this.$notiSocket.connect()

    this.$notiSocket.emit('joinRooms', {
      userId: store.getters['user/userId'],
      roleId: store.getters['user/role']._id
    })

    const res = (await this.$http.get<ResponseParam<NotificationState>>('/notification/check/unreadAll')).data
    this.$store.commit('alert/SET_NOTIFICATION', res.recordSet)
  }

  mounted () {
    this.$notiSocket.on('addNotification', (newNoti: NotificationState) => {
      this.$store.commit('alert/addNotification', newNoti)
    })
  }


  private onClickClose () {
    this.menu = false
  }

  private get notifications (): Array<NotificationState> {
    return this.$store.state.alert.notifications
  }

  private readNotification (notification: NotificationState) {
    console.log(notification)
    // this.$notiSocket.emit('readNotification', notification)
    this.$store.commit('alert/removeNotification', notification)
  }

}
</script>
<style lang="scss">

</style>
