<!--
  Author: Youngjin Kwak
  CreatedAt: 11-02-2020
  UpdatedAt: 11-02-2020
  Description: Full screen(w: 100%, h: 100%)
-->
<template>
  <div
    v-if="loading"
    class="loading-panel"
  >
    <div class="loading">
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
      <div class="dot" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { LOADING_VISIBLE_EVENT_BUS_KEY } from '@/types/eventbusKeys'

/**
 * @author - Youngjin Kwak
 * @description -
 */
@Component({
  name: 'FullScreenLoading',
})
export default class FullScreenLoading extends Vue {
  private loading = false

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
    console.log('loading', bool)
    this.loading = bool
  }
}
</script>

<style lang="scss" scoped>
.loading-panel {
  z-index: 100;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;

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
}
</style>
