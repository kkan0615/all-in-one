<template>
  <div>
    <v-row>
      <v-col>
        <TodoListLeftBox />
      </v-col>
      <v-col
        v-if="visibleRigBox"
        :cols="3"
      >
        <v-card
          @showToDoDetail="showToDoDetail"
        >
          test2
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListLeftBox from './leftBox/index.vue'

@Component({
  name: 'TodoList',
  components: {
    TodoListLeftBox
  }
})
export default class extends Vue {
  private visibleRigBox !: boolean

  constructor() {
    super()
    this.visibleRigBox = false
  }

  private showToDoDetail() {
    this.visibleRigBox = true
  }
}
</script>
