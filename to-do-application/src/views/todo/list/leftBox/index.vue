<template>
  <v-card
    class="resizeable"
  >
    <v-card-title>
      <v-text-field
        label="search"
        outlined
        hide-details
        append-icon="search"
        @keyup.enter="searchTodo"
        @click:append="searchTodo"
      />
      <v-spacer />
      <v-btn
        color="primary"
        link
        :to="{name: 'ToDoCreate'}"
      >
        Add new
      </v-btn>
    </v-card-title>
    <v-card-text>
      <draggable-to-do-list
        :todo-list="todoList"
        @open="openDetail"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ToDoFakeData } from '@/data/fakeData/toDoFakeData'
import { ToDoInterface } from '@/types/todo'
import TodoListViewSetting from './components/viewSetting.vue'
import DraggableToDoList from './components/draggableToDoList/index.vue'

@Component({
  name: 'TodoListLeftBox',
  components: {
    TodoListViewSetting,
    DraggableToDoList
  }
})
export default class extends Vue {
  private todoList !: Array<ToDoInterface>
  constructor() {
    super()
    this.todoList = ToDoFakeData
  }

  private searchTodo() {
    console.log('hi')
  }

  private openDetail(todo: ToDoInterface) {
    this.$emit('open', todo)
  }
}
</script>

<style lang="scss" scoped>
</style>
