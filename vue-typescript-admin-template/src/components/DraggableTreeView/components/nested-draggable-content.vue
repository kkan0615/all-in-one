
<template>
  <div>
    <v-list-group
      absolute
      @click="clickItem()"
    >
      <template v-slot:activator>
        <slot
          name="content"
          :item="item"
        >
          <v-list-item-avatar><v-icon>{{ item.ICON }}</v-icon></v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.NAME }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.REMARK }}</v-list-item-subtitle>
          </v-list-item-content>
        </slot>
      </template>

      <v-list
        dense
        subheader
        nav
        @click="clickItem()"
      >
        <draggable
          class="dragArea"
          :tag="tag"
          :list="item.CHILDREN"
          :group="{ name: groupName }"
          @change="onChange"
        >
          <nested-draggable-content
            v-for="child in item.CHILDREN"
            :key="child[keyExpr]"
            :key-expr="keyExpr"
            :key-expr-parent="keyExprParent"
            :item="child"
            @change="onChange"
            @click:item="clickItem"
          >
            <template #content>
              <slot
                name="content"
                :item="child"
              />
            </template>
          </nested-draggable-content>
        </draggable>
      </v-list>
    </v-list-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import Draggable from 'vuedraggable'
@Component({
  name: 'NestedDraggableContent',
  components: {
    Draggable
  }
})
export default class NestedDraggableContent extends Vue {
  @Prop() private item!: any
  @Prop({ default: false }) private readonly expandAll!: boolean
  @Prop() private readonly keyExpr !: string
  @Prop() private readonly keyExprParent !: string
  @Prop({ default: 'group1' }) private readonly groupName !: string
  @Prop({ default: 'ul' }) private readonly tag !: string
  @Emit('change')
  private onChange (method: Record<string, any>) {
    if (method.moved && !method.parentSeq) {
      method.swtichedElement = this.item.CHILDREN[method.moved.oldIndex]
    }
    if (!method.parentSeq) {
      method.parentSeq = this.item[this.keyExpr]
    }
    return method
  }
  @Emit('click:item')
  private clickItem (item?: unknown) {
    return item || this.item
  }
}
</script>
<style lang="scss" scoped>
  .dragArea {
    min-height: 50px;
  }
</style>
