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
        :filtered-to-do-list="filteredToDoList"
        @open="openDetail"
        @remove="deleteToDoCard"
        @change="change"
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
import { ToDoListInterface } from './components/draggableToDoList/types/draggableToDoList'

@Component({
  name: 'TodoListLeftBox',
  components: {
    TodoListViewSetting,
    DraggableToDoList
  }
})
export default class extends Vue {
  private todoList !: Array<ToDoInterface>
  private filteredToDoList !: Array<ToDoListInterface>

  constructor() {
    super()
    this.todoList = ToDoFakeData
    this.filteredToDoList = []
  }

  created() {
    this.groupingToDoList()
  }

  private searchTodo() {
    console.log('hi')
  }

  private groupingToDoList() {
    let tempToDoList: Array<ToDoInterface> = JSON.parse(JSON.stringify(this.todoList))
    const today = new Date()
    const nextMonday = new Date(today.setDate(today.getDate() + (1 + 7 - today.getDay()) % 7)).toISOString()

    const allDayLlist: ToDoListInterface = {
      title: 'All day',
      list: tempToDoList.filter((e) => e.endDate === '' && e.status !== 'done') || []
    }

    tempToDoList = tempToDoList.filter(e => {
      return e.endDate !== ''
    })

    const thisWeekList: ToDoListInterface = {
      title: 'This week',
      list: tempToDoList.filter((e) => e.endDate <= nextMonday && e.status !== 'done') || []
    }

    const upcomingList: ToDoListInterface = {
      title: 'Upcomming',
      list: tempToDoList.filter((e) => e.endDate > nextMonday && e.status !== 'done') || []
    }

    const doneList: ToDoListInterface = {
      title: 'done',
      list: tempToDoList.filter((e) => e.status === 'done') || []
    }

    this.filteredToDoList.push(thisWeekList)
    this.filteredToDoList.push(upcomingList)
    this.filteredToDoList.push(doneList)
    this.filteredToDoList.push(allDayLlist)
  }

  private change(element: ToDoInterface) {
    const index = this.todoList.findIndex(e => {
      return e.id === element.id
    })
    this.todoList[index] = element
  }

  private deleteToDoCard(itemIndex: number, todo: ToDoInterface) {
    /** Remove from todoList */
    const index = this.todoList.findIndex(e => e.id === todo.id)
    this.todoList.splice(index, 1)

    /** Remove from filterd list (grouped) */
    const toDoListIndex = this.filteredToDoList[itemIndex].list.findIndex(e => e.id === todo.id)
    this.filteredToDoList[itemIndex].list.splice(toDoListIndex, 1)
  }

  private openDetail(todo: ToDoInterface) {
    this.$emit('open', todo)
  }
}
</script>

<style lang="scss" scoped>
</style>
