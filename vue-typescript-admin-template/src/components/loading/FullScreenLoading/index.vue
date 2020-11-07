<!--
  Author: Youngjin Kwak
  CreatedAt: 11-02-2020
  UpdatedAt: 11-02-2020
  Description: Full screen(w: 100%, h: 100%)
-->
<template>
  <v-overlay
    :value="loading"
    :z-index="100"
    opacity="0.97"
  >
    <div
      class="loading justify-center"
    >
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
    <div
      class="mt-4 text-center text-h6"
    >
      Tip: {{ tip }}
    </div>
  </v-overlay>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LOADING_VISIBLE_EVENT_BUS_KEY } from '@/types/eventbusKeys'
import tips from './data/tips'
import { generatorIntegerRandom } from '@/utils/random'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'FullScreenLoading',
})
export default class FullScreenLoading extends Vue {
  private loading = false
  private tip = 'Random tip will be here'
  private tips = tips

  created () {
    this.$eventbus.$on(
      this.$events.loading.visible,
      this.changeLoadingVisible
    )
  }

  beforeDestroy () {
    this.$eventbus.$off(
      this.$events.loading.visible,
      this.changeLoadingVisible
    )
  }

  private changeLoadingVisible (bool: boolean) {
    this.loading = bool

    /* Generate tip randomly */
    const ran = generatorIntegerRandom(this.tips.length)
    this.tip = this.tips[ran]
  }
}
</script>


<style lang="scss" scoped>
.loading {
  $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  display: flex;

  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i);

        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
</style>
