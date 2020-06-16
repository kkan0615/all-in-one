<template>
  <v-card>
    <v-card-text>
      <v-form ref="formRef">
        <v-text-field
          v-model="label"
          :counter="10"
          :rules="[labelRules.required]"
          label="label"
          outlined
          required
        />
        <v-row>
          <v-col :cols="9">
            <v-select
              v-model="type"
              :items="typeOptions"
              outlined
              label="option"
              item-text="key"
              item-value="name"
              :rules="[optionRules.required]"
              @change="onChangeOptions"
            />
          </v-col>
          <v-col v-if="optionsRequire" :cols="3">
            <v-btn large block @click="onClickOptionButton">option</v-btn>
          </v-col>
        </v-row>
        <v-checkbox
          v-model="validation"
          label="Validation"
        />
        <v-row>
          <v-col>
            <v-btn @click="createInputBox">create</v-btn>
          </v-col>
          <v-col>
            <v-btn @click="resetForm">reset</v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { typeOptions, TypeOptionInterface } from '../data/typeOption'
import { OptionTypeEnum } from '../types'

@Component({
  name: 'Generator'

})
export default class extends Vue {
  $refs!: {
    formRef: HTMLFormElement
  }

  private label !: string
  private type !: string
  private validation !: boolean
  private optionsDialogVisible !: boolean
  private typeOptions !: Array<TypeOptionInterface>
  private labelRules = {
    required: (v: string) => !!v || 'Label is required'
  }
  private optionRules = {
    required: (v: string) => !!v || 'Option is required'
  }

  constructor() {
    super()
    this.label = ''
    this.type = ''
    this.optionsDialogVisible = false
    this.validation = false
    this.typeOptions = JSON.parse(JSON.stringify(typeOptions))
  }

  public get optionsRequire() : boolean {
    const result = this.type === OptionTypeEnum.selectBox

    return result
  }

  private onChangeOptions() {
    console.log(this.type)
  }

  private onClickOptionButton() {
    this.optionsDialogVisible = true
  }

  private createInputBox() {
    const validate = this.$refs.formRef.validate()
    if (validate) {
      console.log('i am here')
    }
  }

  private resetForm() {
    this.$refs.formRef.reset()
  }
}
</script>

<style lang="scss" scoped>
</style>
