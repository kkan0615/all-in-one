<template>
  <v-speed-dial
    v-model="fab"
    class="fixed"
    :top="false"
    :left="false"
    :bottom="true"
    :right="true"
    absolute
    :transition="'slide-y-reverse-transition'"
  >
    <template v-slot:activator>
      <v-btn
        v-model="fab"
        color="blue darken-2"
        dark
        fab
      >
        <v-icon v-if="fab">mdi-close</v-icon>
        <v-icon v-else>mdi-account-circle</v-icon>
      </v-btn>
    </template>
    <v-btn
      fab
      dark
      small
      color="green"
      :to="'/business/setting'"
    >
      <v-icon>settings</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="indigo"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-btn
      fab
      dark
      small
      color="red"
    >
      <v-icon @click="toTheTop">arrow_upward</v-icon>
    </v-btn>
  </v-speed-dial>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'BusinessFloatingButtons'
})
export default class extends Vue {
  private fab = false

  /** Scroll to the top */
  public toTheTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>

<style lang="scss" scoped>
.fixed {
  position: fixed;
}
</style>
