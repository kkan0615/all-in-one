<template>
  <v-card>
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
      <v-tabs
        v-model="tab"
      >
        <v-tab>This week</v-tab>
        <v-tab>Upcoming</v-tab>
        <v-tab>Done</v-tab>

        <v-spacer />
        <todo-list-view-setting />

        <v-tabs-items v-model="tab">
          <v-tab-item
            v-for="n in 3"
            :key="n"
          >
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="i in 9"
                  :key="i"
                  cols="12"
                  :md="columnSize"
                >
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                    aspect-ratio="1"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-btn
            block
            color="primary"
            :loading="loading"
          >
            more
          </v-btn>
        </v-tabs-items>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import TodoListViewSetting from './components/viewSetting.vue'

@Component({
  name: 'TodoListLeftBox',
  components: {
    TodoListViewSetting
  }
})
export default class extends Vue {
  private tab !: any | null
  private loading !: boolean
  private columnSize !: number

  constructor() {
    super()
    this.tab = null
    this.loading = false
    this.columnSize = 3
  }

  private searchTodo() {
    console.log('hi')
  }
}
</script>
