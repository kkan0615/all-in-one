<template>
  <v-card
    :id="`todo-${value.id}`"
    :color="value.color"
    :light="islightColor"
    :dark="!islightColor"
    class="resizeable hide-scroll"
    max-width="400px"
    @mouseenter="onVisibleActions"
    @mouseleave="offVisibleActions"
    @mousemove="mousemove"
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
      class="acitons-div"
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
          <v-btn
            v-if="value.status !== 'done'"
            icon
          >
            <v-icon @click="statusToDone">done</v-icon>
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

import _ from 'lodash'
import { ToDoFakeData } from '@/data/fakeData/toDoFakeData'

@Component({
  name: 'ToDoCard'
})
export default class extends Vue {
  @Prop({ required: true }) private value !: ToDoInterface
  private visibleContent !: boolean
  private list !: Array<ListInterface>
  private visibleActions !: boolean

  constructor() {
    super()
    this.list = toDoCardList
    this.visibleActions = false
    this.visibleContent = false
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

  private clickTitle(event: MouseEvent) {
    event.stopPropagation()
    this.$emit('click')
  }

  private resizeHandler() {
    const todo = document.getElementById(`todo-${this.value.id}`)

    if (!todo) {
      return
    }

    if (todo.offsetHeight > 200) {
      this.visibleContent = true
    } else {
      this.visibleContent = false
    }
  }
  private mousemove = _.throttle(this.resizeHandler, 500)

  private statusToDone() {
    const todo = ToDoFakeData.find(e => e.id === this.value.id)
    if (!todo) {
      throw new Error(`No data`)
    }
    todo.status = 'done'
    this.$emit('done')
  }
}
</script>

<style lang="scss" scoped>
.acitons-div {
  height: 50px;
  bottom: 0px;
}

.hide-scroll {
  overflow: hidden;
}
</style>
