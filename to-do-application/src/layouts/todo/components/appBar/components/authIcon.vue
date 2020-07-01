<template>
  <v-menu
    left
    bottom
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>

    <!-- <v-list>
      <v-list-item
        v-for="n in 5"
        :key="n"
        @click="() => {}"
      >
        <v-list-item-title>Option {{ n }}</v-list-item-title>
      </v-list-item>
    </v-list> -->
    <v-list>
      <v-list-item
        v-for="(item, i) in list"
        :key="i"
        @click="() => {}"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AuthIconListInterface } from '../types/authIconList'
import { authIconList } from '../data/authIconList'
@Component({
  name: 'TodoLayoutAppBarAuthIcon'
})
export default class extends Vue {
  private list: Array<AuthIconListInterface>

  constructor() {
    super()
    this.list = authIconList
  }
}
</script>
