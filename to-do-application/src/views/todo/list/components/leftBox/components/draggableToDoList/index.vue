<template>
  <v-row>
    <v-col
      v-for="(item, i) in filteredToDoList"
      :key="i"
    >
      <v-list>
        <v-list-item-title>
          {{ item.title }} / {{ item.list.length }}
        </v-list-item-title>
        <draggable
          class="list-group"
          :list="item.list"
          :group="{ name: 'todo' }"
          @change="(event) => change(event, item)"
        >
          <to-do-card
            v-for="todo in item.list"
            :key="todo.id"
            class="ma-4"
            :value="todo"
            @delete="() => deleteToDoCard(i, todo)"
            @done="() => doneToDoCard(i, todo)"
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
  @Prop() private filteredToDoList !: Array<ToDoListInterface>

  private openDetail(todo: ToDoInterface) {
    this.$emit('openDetail', todo)
  }

  private change(event: any, item: ToDoListInterface) {
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
    this.$emit('change', element)
  }

  private deleteToDoCard(itemIndex: number, todo: ToDoInterface) {
    this.$emit('remove', itemIndex, todo)
  }

  private openToDoDetail(todo: ToDoInterface) {
    this.$emit('open', todo)
  }

  private doneToDoCard() {
    this.$emit('doneToDoCard')
  }
}
</script>
