<template>
  <section>
    <v-row>
      <v-col>
        <Generator />
      </v-col>
      <v-col>
        <Result
          :input-array="inputArray"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Generator from './components/generator.vue'
import Result from './components/result.vue'
import { FormInterface } from './types'

@Component({
  name: 'Playground',
  components: {
    Generator,
    Result
  }
})
export default class extends Vue {
  private inputArray !: Array<FormInterface>

  constructor() {
    super()
    this.inputArray = []
  }

  private pushToInputArray(data: FormInterface) {
    this.inputArray.push(data)
  }

  private removeFromInputArray(num: number) {
    this.inputArray.slice(num, 0)
  }
}
</script>

<style lang="scss" scoped>
</style>
