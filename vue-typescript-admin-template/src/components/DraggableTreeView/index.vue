<!--
@TODO:
1. Interface정의하기
2. 공통 컴포넌트 역할을 할 수 있게, REMARK,NAME, ICON 변경
3. 선택을 해제한 것들은 NULL  반환해주기
-->
<template>
  <draggable
    class="dragArea"
    :list="list"
    :group="{ name: groupName }"
    @change="onChange"
  >
    <nested-draggable-content
      v-for="item in list"
      :key="item[keyExpr]"
      :item="item"
      :key-expr="keyExpr"
      :key-expr-parent="keyExprParent"
      @click:item="clickItem"
      @change="onChange"
    >
      <template #content="{item: slotItem}">
        <slot
          name="content"
          :item="slotItem"
        />
      </template>
    </nested-draggable-content>
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
  @Prop({ default: 'SEQ' }) private readonly keyExpr !: string
  @Prop({ default: 'SEQ_PARENT' }) private readonly keyExprParent !: string
  @Prop({ default: 'group1' }) private readonly groupName !: string
  @Prop({ default: 'ul' }) private readonly tag !: string
  @Emit('change')
  private onChange (method: Record<string, unknown>) {
    return method
  }
  @Emit('click:item')
  private clickItem (item: unknown) {
    return item
  }
}
</script>
<style scoped>
  .dragArea {
    min-height: 50px;
  }
</style>
