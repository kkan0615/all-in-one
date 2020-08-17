<template>
  <v-list>
    <nested-draggable-child
      v-if="item.children && item.children.length > 0"
      :item="item"
      @click:item="clickItem"
      @change="onChange"
    />
    <v-list-item
      v-else
      selectable
      dense
      @click="clickItem"
    >
      <v-list-item-avatar><v-icon>{{ item.icon }}</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import NestedDraggableChild from './nested-draggable-child.vue'

@Component({
  name: 'NestedDraggableContent',
  components: {
    NestedDraggableChild
  }
})

export default class NestedDraggableContent extends Vue {
  // @Prop() private list!: Array<unknown>
  @Prop() private item!: any
  @Prop({ default: false }) private readonly expandAll!: boolean

  private selectedValue: unknown = null

  @Emit('change')
  private onChange (method: Record<string, unknown>) {
    return {
      parentSeq: this.item.seq,
      method
    }
  }

  @Emit('click:item')
  private clickItem () {
    return this.item
  }

  private clicked () {
    console.log('test')
  }
}
</script>
