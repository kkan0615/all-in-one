<template>
  <v-row>
    <v-col
      v-for="(item, i) in filteredToDoList"
      :key="i"
    >
      <v-list>
        <v-list-item-title>{{ item.title }} / {{ item.list.length }}</v-list-item-title>

        <draggable
          class="list-group"
          :list="item.list"
          :group="{ name: 'todo' }"
          @change="(event) => test(event, item)"
        >
          <to-do-card
            v-for="todo in item.list"
            :key="todo.id"
            class="ma-4"
            :value="todo"
            @delete="() => deleteToDoCard(i, todo)"
            @click="openToDoDetail(todo)"
          />
        </draggable>
        <v-list-item v-if="item.list.length < 1">
          <v-list-item-content>
            No data
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import draggable from 'vuedraggable'
import ToDoCard from '@/components/toDoCard/index.vue'
import { ToDoInterface } from '@/types/todo'
import { ToDoListInterface } from './types/draggableToDoList'

@Component({
  name: 'DraggableToDoList',
  components: {
    ToDoCard,
    draggable
  }
})
export default class extends Vue {
  @Prop() private todoList !: Array<ToDoInterface>

  private filteredToDoList !: Array<ToDoListInterface>
  constructor() {
    super()
    this.filteredToDoList = []
  }

  created() {
    this.groupingToDoList()
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

  private openDetail(todo: ToDoInterface) {
    this.$emit('openDetail', todo)
  }

  private test(event: any, item: ToDoListInterface) {
    let element: ToDoInterface
    if (event.added) {
      element = event.added.element
    } else {
      return
    }

    const today = new Date()
    switch (item.title) {
      case 'This week':
        element.status = 'working'
        element.endDate = new Date().toISOString().substr(0, 10)
        break
      case 'Upcomming':
        element.status = 'working'
        element.endDate = new Date(today.setDate(today.getDate() + 7)).toISOString().substr(0, 10)
        break
      case 'done':
        element.status = 'done'
        break
      case 'All day':
        element.endDate = ''
        break
      default:
        break
    }
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

  private openToDoDetail(todo: ToDoInterface) {
    console.log('test')

    this.$emit('open', todo)
  }
}
</script>
