<template>
  <div>
    <v-row>
      <v-col>
        <TodoListLeftBox
          @openDetail="openDetail"
        />
      </v-col>
      <v-col
        v-if="visibleRigBox"
        :cols="3"
      >
        <v-card
          @showToDoDetail="showToDoDetail"
        >
          test2
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListLeftBox from './leftBox/index.vue'
import { ToDoInterface } from '../../../types/todo'

@Component({
  name: 'TodoList',
  components: {
    TodoListLeftBox
  }
})
export default class extends Vue {
  private visibleRigBox !: boolean
  private currentToDo : ToDoInterface | null

  constructor() {
    super()
    this.visibleRigBox = false
    this.currentToDo = null
  }

  private showToDoDetail() {
    this.visibleRigBox = true
  }

  private openDetail(todo: ToDoInterface) {
    this.currentToDo = todo
    this.showToDoDetail()
  }
}
</script>
