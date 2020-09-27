<template>
  <v-menu
    v-model="menu"
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
      max-height="500px"
    >
      <v-card-title>
        Notifications
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
      <v-card-text
        v-if="notifications.length > 0"
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
        No notification is here
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { NotificationState } from '@/store/modules/alert'

@Component({
  name: 'Notification',
})
export default class Notification extends Vue {
  //  @TODO: Create store subscribe And Socket

  private counts = 0
  private menu = false

  private onClickClose () {
    this.menu = false
  }

  private get notifications (): Array<NotificationState> {
    return this.$store.state.alert.notifications
  }

  private readNotification (notification: NotificationState) {
    this.$store.commit('alert/removeNotification', notification)
  }

}
</script>
<style lang="scss">
  .notification-card {
    overflow: auto;
  }
</style>
