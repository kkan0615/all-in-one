<template>
  <div>
    <TodoDetailDialog
      :value="visibleDetail"
      :detail="currentToDo"
      @close="closeDetail"
    />
    <TodoListLeftBox
      @open="openDetail"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListLeftBox from './components/leftBox/index.vue'
import TodoDetailDialog from './components/detailDialog.vue'
import { ToDoInterface } from '@/types/todo'

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

  constructor() {
    super()
    this.visibleDetail = false
    this.currentToDo = null
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
