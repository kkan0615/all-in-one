<template>
  <v-list-group
    absolute
    @click="clickItem"
  >
    <template v-slot:activator>
      <v-list-item-avatar><v-icon>{{ item.icon }}</v-icon></v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
      </v-list-item-content>
    </template>

    <v-list
      dense
      subheader
      nav
      @click="clickItem"
    >
      <draggable
        class="dragArea"
        tag="ul"
        :list="item.children"
        :group="{ name: 'g1' }"
        @change="onChange"
      >
        <nested-draggable-content
          v-for="child in item.children"
          :key="child.seq"
          :item="child"
        />
      </draggable>
    </v-list>
  </v-list-group>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import Draggable from 'vuedraggable'

@Component({
  name: 'NestedDraggableChild',
  components: {
    NestedDraggableContent: () => import('./nested-draggable-content.vue'),
    Draggable
  }
})

export default class NestedDraggableChild extends Vue {
  // @Prop() private list!: Array<unknown>
  @Prop() private item!: any
  @Prop({ default: false }) private readonly expandAll!: boolean

  private selectedValue: unknown = null

  created () {
    console.log(this.item)
  }

  @Emit('change')
  private onChange (method: Record<string, unknown>) {
    console.log(this.item)
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
