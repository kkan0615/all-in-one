<template>
  <div>
    <TodoDetailDialog
      :value="visibleDetail"
      :detail="currentToDo"
      @close="closeDetail"
    />
    <TodoListLeftBox
      :todo-list="todoList"
      :filtered-to-do-list="filteredToDoList"
      @open="openDetail"
      @remove="deleteToDoCard"
      @change="change"
      @search="searchTodo"
      @doneToDoCard="doneToDoCard"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListLeftBox from './components/leftBox/index.vue'
import TodoDetailDialog from './components/detailDialog.vue'
import { ToDoInterface } from '@/types/todo'
import { ToDoListInterface } from './components/leftBox/components/draggableToDoList/types/draggableToDoList'
import { ToDoFakeData } from '../../../data/fakeData/toDoFakeData'

@Component({
  name: 'TodoList',
  components: {
    TodoListLeftBox,
    TodoDetailDialog
  }
})
export default class extends Vue {
  private visibleDetail !: boolean
  private currentToDo : ToDoInterface | null
  private todoList !: Array<ToDoInterface>
  private filteredToDoList !: Array<ToDoListInterface>

  created() {
    this.groupingToDoList(true)
  }

  constructor() {
    super()
    this.visibleDetail = false
    this.currentToDo = null
    this.todoList = ToDoFakeData
    this.filteredToDoList = []
  }

  private showToDoDetail() {
    this.visibleDetail = true
  }

  private openDetail(todo: ToDoInterface) {
    this.currentToDo = todo
    this.showToDoDetail()
  }

  private closeDetail() {
    this.currentToDo = null

    this.visibleDetail = false
  }

  /**
  * @description function for search todos
  */
  private searchTodo(search: string) {
    if (!search) {
      this.groupingToDoList(true)
      return
    }
    const tempTodolist = this.groupingToDoList(false)
    if (!tempTodolist) {
      return
    }
    tempTodolist.map(e => {
      e.list = e.list.filter(todo => {
        return todo.title.includes(search)
      })
    })
    this.filteredToDoList = tempTodolist
  }

  /**
 * @description Grouping the todo list based on title
 * @returns todolist
 */
  private groupingToDoList(created: boolean) {
    let tempToDoList: Array<ToDoInterface> = JSON.parse(JSON.stringify(this.todoList))
    const today = new Date()
    const nextMonday = new Date(today.setDate(today.getDate() + (1 + 7 - today.getDay()) % 7)).toISOString()

    const doneList: ToDoListInterface = {
      title: 'done',
      list: tempToDoList.filter((e) => e.status === 'done') || []
    }
    /** Remove all done values */
    tempToDoList = tempToDoList.filter(e => {
      return e.status !== 'done'
    })

    const allDayLlist: ToDoListInterface = {
      title: 'All day',
      list: tempToDoList.filter((e) => e.endDate === '' && e.status !== 'done') || []
    }

    /** Remove all day values */
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

    if (created) {
      this.filteredToDoList = []
      this.filteredToDoList.push(thisWeekList)
      this.filteredToDoList.push(upcomingList)
      this.filteredToDoList.push(doneList)
      this.filteredToDoList.push(allDayLlist)
    } else {
      const result: Array<ToDoListInterface> = []
      result.push(thisWeekList)
      result.push(upcomingList)
      result.push(doneList)
      result.push(allDayLlist)
      return result
    }
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

  private doneToDoCard() {
    this.groupingToDoList(true)
  }
}
</script>
<style lang="scss" scoped>
.right-list-box {
  overflow: auto;
  height: 100%;
  position: sticky;
  top: 10%;
}
</style>
