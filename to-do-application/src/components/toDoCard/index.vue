<template>
  <v-card
    :color="value.color"
    :light="islightColor"
    :dark="!islightColor"
    max-width="400px"
    max-height="200px"
    @mouseenter="onVisibleActions"
    @mouseleave="offVisibleActions"
  >
    <v-card-title
      class="pa-2"
      @click="clickTitle"
    >
      {{ value.title }}
    </v-card-title>
    <v-card-text
      v-if="visibleContent"
      v-html="value.content"
    />
    <div
      class="acitons-height"
    >
      <transition name="fade">
        <v-card-actions
          v-if="visibleActions"
        >
          <v-spacer />
          <v-btn
            icon
          >
            <v-icon @click="onClickdelete">delete</v-icon>
          </v-btn>
        </v-card-actions>
      </transition>
    </div>

  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { islightColor } from '@/uitls/color'
import { ToDoInterface } from '@/types/todo'
import { ListInterface } from '@/types/simpleList'
import { toDoCardList } from './data/list'

@Component({
  name: 'ToDoCard'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {
  @Prop({ required: true }) private value !: ToDoInterface
  @Prop({ required: false, default: false }) private visibleContent !: boolean
  private list !: Array<ListInterface>
  private visibleActions !: boolean

  constructor() {
    super()
    this.list = toDoCardList
    this.visibleActions = false
  }

  public get islightColor() : boolean {
    const result = islightColor(this.value.color)
    return result || this.$vuetify.theme.dark
  }

  private onVisibleActions() {
    this.visibleActions = true
  }

  private offVisibleActions() {
    this.visibleActions = false
  }

  private onClickdelete() {
    this.$emit('delete')
  }

  private clickTitle() {
    this.$emit('click')
  }
}
</script>

<style lang="scss" scoped>
.acitons-height {
  height: 50px;
}
</style>
