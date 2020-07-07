<template>
  <div>
    <TodoDetailDialog
      :value="visibleDetail"
      :detail="currentToDo"
      @close="closeDetail"
    />
    <v-row>
      <v-col
        :cols="12"
        :xl="9"
        :lg="9"
      >
        <TodoListLeftBox
          @open="openDetail"
        />
      </v-col>
      <!-- <v-col
        v-if="visibleRightBox"
        :cols="12"
        :xl="3"
        :lg="3"
        class="right-list-box"
      >
        <v-card>
          <v-card-title>
            {{ currentToDo.title }}
            <v-btn
              icon
            >
              <v-icon
                @click="closeDetail"
              >
                close
              </v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>
            {{ currentToDo.endDate || 'All day' }}
          </v-card-subtitle>
          <v-card-text>
            <v-card v-html="currentToDo.content" />
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListLeftBox from './leftBox/index.vue'
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

  private resizeHandler() {
    console.log('resizeHandler')
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
