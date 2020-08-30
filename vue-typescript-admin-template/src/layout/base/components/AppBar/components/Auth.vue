<template>
  <v-menu
    v-model="menu"
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-btn
        icon
        v-on="on"
      >
        <v-icon>account_circle</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item>
        <v-list-item-title
          class="cursor-pointer"
        >
          Login
        </v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-title
          class="cursor-pointer"
        >
          Register
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'AuthAppBar',
})
export default class AuthAppBar extends Vue {
  /* menu is opened or not */
  private menu = false
}
</script>
