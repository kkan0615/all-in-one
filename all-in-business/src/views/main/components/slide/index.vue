<template>
  <transition name="slide-fade">
    <v-slide-group
      v-if="pageLoaded2"
      class="pa-4"
      dark
      show-arrows
    >
      <v-slide-item
        v-for="detail in details"
        :key="detail.id"
      >
        <div>
          <introduction-card
            :detail="detail"
          />
        </div>
      </v-slide-item>
    </v-slide-group>
  </transition>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { details } from '../../data/details'

@Component({
  name: 'MainSlide'
})
export default class extends Vue {
  @Prop() private loaded !: boolean

  private model = null
  private details = details
}
</script>

<style lang="scss" scoped>
</style>
