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
      <draggable-to-do-list />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

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
  // constructor() {
  //   super()

  // }

  private searchTodo() {
    console.log('hi')
  }
}
</script>
