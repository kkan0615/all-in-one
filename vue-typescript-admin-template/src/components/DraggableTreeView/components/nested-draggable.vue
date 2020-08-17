<template>
  <v-list-item
    v-if="item.children && item.children.length > 0"
  >
    <v-list-group
      v-for="child in item.children"
      :key="child.seq"
      no-action
      sub-group
      :value="expandAll"
      @click="clickItem(child)"
    >
      <template #activator>
        <v-list-item-avatar><v-icon>{{ child.icon }}</v-icon></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ child.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ child.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </template>
      <slot name="content">
        <v-list-item-content>
          <nested-draggable
            :list="child.children"
            @change="onChange"
            @click:item="clickItem"
          />
        </v-list-item-content>
      </slot>
    </v-list-group>
  </v-list-item>
  <v-list-item
    v-else
    dense
    @clicK="clickItem(item)"
  >
    <v-list-item-avatar><v-icon>{{ item.icon }}</v-icon></v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title>{{ item.name }}</v-list-item-title>
      <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
@Component({
  name: 'NestedDraggable'
})

export default class NestedDraggable extends Vue {
  // @Prop() private list!: Array<unknown>
  @Prop() private item!: any
  @Prop({ default: false }) private readonly expandAll!: boolean

  private selectedValue: unknown = null
  //
  // created () {
  //   console.log(this.item)
  // }

  @Emit('change')
  private onChange (e: Record<string, unknown>) {
    return e
  }

  @Emit('click:item')
  private clickItem (item: unknown) {
    return item
  }

  private clicked () {
    console.log('test')
  }
}
</script>
