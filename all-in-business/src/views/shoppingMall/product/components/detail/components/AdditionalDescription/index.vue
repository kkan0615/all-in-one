<template>
  <div class="my-4" @click="show = !show">
    <v-card outlined dense>
      <v-card-title>
        <v-icon>{{ description.icon }}</v-icon>
        {{ description.title }}
        <v-spacer />
        <v-btn icon>
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-title>
      <div
        v-if="show"
      >
        <v-card-text>
          <span v-html="description.description" />
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AddtionalDescription } from './data'

@Component({
  name: 'ShoppingMallProductDetailWayDescription'
})
export default class extends Vue {
  @Prop() private description !: AddtionalDescription

  private show !: boolean

  constructor() {
    super()
    this.show = false
  }
}
</script>

<style lang="scss" scoped>
</style>
