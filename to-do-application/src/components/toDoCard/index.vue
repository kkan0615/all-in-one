<template>
  <v-card
    :color="value.color"
  >
    <v-card-title>
      {{ value.title }}
    </v-card-title>
    <v-card-text>
      text
    </v-card-text>
    <v-card-actions>
      <v-btn
        icon
      >
        <v-icon>
          edit
        </v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { ToDoInterface } from '@/types/todo'

@Component({
  name: 'ToDoCard'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {
  @Prop() private value !: ToDoInterface
}
</script>
