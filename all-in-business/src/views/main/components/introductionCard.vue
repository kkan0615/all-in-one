<template>
  <div>
    <v-card
      class="pa-2 ma-4"
      :width="380"
      :height="400"
    >
      <v-card-title class="justify-center">{{ detail.title }}</v-card-title>
      <v-card-text class="display-1 text-center">
        {{ detail.description }}
      </v-card-text>
      <v-card-actions class="justify-center introduction-card-button">
        <v-btn @click="onClickMoveButton">Move to link</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { DetailInterface } from '../data/details'

@Component({
  name: 'IntroductionCard'
})
export default class extends Vue {
  @Prop() private detail!: DetailInterface

  onClickMoveButton() {
    this.$router.push({ path: this.detail.link })
  }
}
</script>

<style lang="scss" scoped>
.introduction-card-button {
  position: absolute;
  left: 31%;
  bottom: 15px;
}
</style>
