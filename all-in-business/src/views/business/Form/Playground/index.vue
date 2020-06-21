<template>
  <section>
    <v-row>
      <v-col
        :cols="6"
        :xl="6"
        :lg="6"
        :md="6"
        :xs="12"
        :sm="12"
      >
        <Generator
          :input-form-array="inputFormArray"
          @push="pushToInputFormArray"
        />
      </v-col>
      <v-col
        :cols="6"
        :xl="6"
        :lg="6"
        :md="6"
        :xs="12"
        :sm="12"
      >
        <Result
          :input-form-array="inputFormArray"
        />
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Generator from './components/generator.vue'
import Result from './components/result.vue'
import { InputFormInterface } from './types'

@Component({
  name: 'Playground',
  components: {
    Generator,
    Result
  }
})
export default class extends Vue {
  private inputFormArray !: Array<InputFormInterface>

  constructor() {
    super()
    this.inputFormArray = []
  }

  private pushToInputFormArray(data: InputFormInterface) {
    this.inputFormArray.push(data)
  }

  private removeFromInputFormArray(num: number) {
    this.inputFormArray.splice(num, 1)
  }
}
</script>

<style lang="scss" scoped>
</style>
