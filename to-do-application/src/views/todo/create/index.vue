<template>
  <v-row
    align="center"
    justify="center"
    no-gutters
    class="mb-6"
  >
    <v-col
      cols="12"
      sm="12"
      md="7"
    >
      <to-do-create-form />

    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import ToDoCreateForm from '@/components/createForm/index.vue'

@Component({
  name: 'ToDoCreate',
  components: {
    ToDoCreateForm
  }
})
export default class extends Vue {
}
</script>
