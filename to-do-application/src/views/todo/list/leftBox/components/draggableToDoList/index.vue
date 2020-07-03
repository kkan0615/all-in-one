<template>
  <v-row>
    <v-list
      v-for="(item, i) in filteredToDoList"
      :key="i"
    >

      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <div
        v-if="item.list.length > 0"
      >
        <to-do-card
          v-for="todo in item.list"
          :key="todo.id"
          class="ma-4"
          :value="todo"
        />

      </div>
      <div v-else>
        No data
      </div>
    </v-list>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import ToDoCard from '@/components/toDoCard/index.vue'
import { ToDoInterface } from '@/types/todo'
import { ToDoListInterface } from './types/draggableToDoList'

@Component({
  name: 'DraggableToDoList',
  components: {
    ToDoCard
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
    const today = new Date()
    const nextMonday = new Date(today.setDate(today.getDate() + (1 + 7 - today.getDay()) % 7)).toISOString

    const allDayLlist: ToDoListInterface = {
      title: 'All day',
      list: this.todoList.filter((e) => e.endDate.toString !== null && e.status !== 'done')
    }

    const thisWeekList: ToDoListInterface = {
      title: 'This week',
      list: this.todoList.filter((e) => e.endDate.toString <= nextMonday && e.status !== 'done')
    }

    const upcomingList: ToDoListInterface = {
      title: 'Upcomming',
      list: this.todoList.filter((e) => e.endDate.toString > nextMonday && e.status !== 'done')
    }

    const doneList: ToDoListInterface = {
      title: 'Upcomming',
      list: this.todoList.filter((e) => e.status === 'done')
    }

    this.filteredToDoList.push(thisWeekList)
    this.filteredToDoList.push(upcomingList)
    this.filteredToDoList.push(doneList)
    this.filteredToDoList.push(allDayLlist)
    console.log(this.todoList)

    console.log(this.filteredToDoList)
  }

  private openDetail(todo: ToDoInterface) {
    this.$emit('openDetail', todo)
  }
}
</script>
