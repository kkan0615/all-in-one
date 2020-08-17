<!--
  Author: Youngjin Kwak
  CreatedAt: 08-14-2020
  UpdatedAt: 08-15-2020
  Description: Sample Vue Page
-->
<template>
  <draggable
    class="dragArea"
    tag="ul"
    :list="list"
    :group="{ name: 'g1' }"
    @change="onChange"
  >
    <nested-draggable-content
      v-for="item in list"
      :key="item.seq"
      :item="item"
      @click:item="clickItem"
      @change="onChange"
    />
  </draggable>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'
import Draggable from 'vuedraggable'
import NestedDraggableContent from './components/nested-draggable-content.vue'

@Component({
  name: 'DraggableTreeView',
  components: {
    Draggable,
    NestedDraggableContent
  }
})
export default class DraggableTreeView extends Vue {
  @Prop() private readonly list !: Array<unknown>
  @Prop() private readonly selectedValue !: unknown
  // @Prop() private readonly keyExpr !: string
  // @Prop() private readonly keyExprParent !: string


  @Emit('change')
  private onChange (method: Record<string, unknown>) {
    console.log(method)
    return {
      parentSeq: undefined,
      method
    }
  }

  @Emit('click:item')
  private clickItem (item: unknown) {
    console.log(item)
    return item
  }
}
</script>
