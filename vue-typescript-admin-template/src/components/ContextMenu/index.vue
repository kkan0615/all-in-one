<!--
  Author: Youngjin Kwak
  CreatedAt: 08-15-2020
  UpdatedAt: 08-15-2020
  Description: ContextMenu global Component
-->
<!--
  @TODO: Add some props
-->
<template>
  <div
    v-click-outside="show = !show"
    @contextmenu.prevent="onRightClick"
  >
    <slot name="content" />
    <v-menu
      v-model="show"
      top
      :position-x="x"
      :position-y="y"
      absolute
      offset-y
    >
      <slot name="menu" />
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'ContextMenu',
})
export default class ContextMenu extends Vue {
  private show = false
  private x = 0
  private y = 0

  private onRightClick (e: MouseEvent) {
    this.show = false
    this.x = e.clientX
    this.y = e.clientY
    this.show = true
  }
}
</script>
