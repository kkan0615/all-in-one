<template>
  <v-card>
    <v-card-text>
      <input-form
        v-for="(inputForm, i) in inputFormArray"
        :key="i"
        :input-form="inputForm"
      />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import inputForm from './inputForm.vue'
import { InputFormInterface } from '../types'

@Component({
  name: 'Result',
  components: {
    inputForm
  }

})
export default class extends Vue {
  @Prop() private inputFormArray !: Array<InputFormInterface>

  // constructor() {
  //   super()
  //   this.inputArray = []
  // }

  created() {
    console.log(this.inputFormArray)
  }
}
</script>

<style lang="scss" scoped>
</style>
