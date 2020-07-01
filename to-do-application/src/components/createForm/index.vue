<template>
  <v-form
    ref="createFormRef"
  >
    <v-text-field
      label="Title"
      outlined
      clearable
    />
  </v-form>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator'
@Component({
  name: 'ToDoCreateForm'
  // components: {
  //   Footer
  // }
})
export default class extends Vue {
  @Ref() private createFormRef !: HTMLFormElement
}
</script>
