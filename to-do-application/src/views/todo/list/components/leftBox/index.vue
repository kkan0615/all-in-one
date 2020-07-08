<template>
  <v-card
    class="resizeable"
  >
    <v-card-title>
      <v-text-field
        v-model="search"
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
        :filtered-to-do-list="filteredToDoList"
        @open="openDetail"
        @remove="deleteToDoCard"
        @change="change"
        @doneToDoCard="doneToDoCard"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// import { ToDoFakeData } from '@/data/fakeData/toDoFakeData'
import { ToDoInterface } from '@/types/todo'
import DraggableToDoList from './components/draggableToDoList/index.vue'
import { ToDoListInterface } from './components/draggableToDoList/types/draggableToDoList'

@Component({
  name: 'TodoListLeftBox',
  components: {
    DraggableToDoList
  }
})
export default class extends Vue {
  @Prop() private todoList !: Array<ToDoInterface>
  @Prop() private filteredToDoList !: Array<ToDoListInterface>
  private search !: string

  constructor() {
    super()
    this.search = ''
  }
  /**
  * @description function for search todos
  */
  private searchTodo() {
    this.$emit('search', this.search)
  }

  private change(element: ToDoInterface) {
    this.$emit('change', element)
  }

  private deleteToDoCard(itemIndex: number, todo: ToDoInterface) {
    this.$emit('remove', itemIndex, todo)
  }

  private openDetail(todo: ToDoInterface) {
    this.$emit('open', todo)
  }

  private doneToDoCard() {
    this.$emit('doneToDoCard')
  }
}
</script>

<style lang="scss" scoped>
</style>
