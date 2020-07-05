<template>
  <div>
    <v-row>
      <v-col>
        <TodoListLeftBox
          @open="openDetail"
        />
      </v-col>
      <v-col
        v-if="visibleRightBox"
        :cols="3"
      >
        <v-card>
          <v-card-title>
            {{ currentToDo.title }}
            <v-btn
              icon
            >
              <v-icon
                @click="closeDetail"
              >
                close
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>
            {{ currentToDo.endDate || 'All day' }}
          </v-card-subtitle>
          <v-card-text>
            <v-card v-html="currentToDo.content" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListLeftBox from './leftBox/index.vue'
import { ToDoInterface } from '@/types/todo'

@Component({
  name: 'TodoList',
  components: {
    TodoListLeftBox
  }
})
export default class extends Vue {
  private visibleRightBox !: boolean
  private currentToDo : ToDoInterface | null

  constructor() {
    super()
    this.visibleRightBox = false
    this.currentToDo = null
  }

  private showToDoDetail() {
    this.visibleRightBox = true
  }

  private openDetail(todo: ToDoInterface) {
    this.currentToDo = todo
    this.showToDoDetail()
  }

  private closeDetail() {
    this.currentToDo = null

    this.visibleRightBox = false
  }
}
</script>
