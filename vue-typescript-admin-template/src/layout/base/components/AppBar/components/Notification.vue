<template>
  <v-menu
    v-model="menu"
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
      <v-badge
        color="primary"
        :content="counts"
        :value="counts"
        overlap
      >
        <v-icon
          v-on="on"
        >
          notifications_none
        </v-icon>
      </v-badge>
    </template>
    <v-card>
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
        v-if="counts > 0"
      >
        test
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
}
</script>
