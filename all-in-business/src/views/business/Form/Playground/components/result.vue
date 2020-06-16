<template>
  <v-card>
    <v-card-text>
      <FormInput v-for="(item, i) in inputArray" :key="i">
        {{ input }}
      </FormInput>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import FormInput from './formInput.vue'
import { FormInterface } from '../types'

@Component({
  name: 'Result',
  components: {
    FormInput
  }

})
export default class extends Vue {
  @Prop() private inputArray !: Array<FormInterface>

  // constructor() {
  //   super()
  //   this.inputArray = []
  // }
}
</script>

<style lang="scss" scoped>
</style>
