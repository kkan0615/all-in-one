<template>
  <v-card>
    <OptionDialog
      :visible.sync="optionsDialogVisible"
      :option-array="optionArray"
    />
    <v-card-text>
      <v-form
        ref="formRef"
      >
        <v-text-field
          ref="labelTextBoxRef"
          v-model="label"
          :counter="20"
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
        <v-card-actions
          class="justify-center"
        >
          <v-btn
            :color="designSettingModule.designColor.subColorOne"
            outlined
            @click="createInputBox"
          >
            create
          </v-btn>
          <v-btn
            :color="designSettingModule.designColor.subColorOne"
            outlined
            @click="resetForm"
          >
            reset
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { typeOptions, TypeOptionInterface } from '../data/typeOption'
import { OptionTypeEnum, OptionArrayInterface, InputFormInterface } from '../types'
import OptionDialog from './optionDialog.vue'
import { DesignSettingModule } from '@/store/modules/designSetting'

@Component({
  name: 'Generator',
  components: {
    OptionDialog
  }

})
export default class extends Vue {
  $refs!: {
    formRef: HTMLFormElement,
    labelTextBoxRef: HTMLInputElement
  }

  @Prop() private inputFormArray !: Array<InputFormInterface>

  private label !: string
  private type !: string
  private validation !: boolean
  private typeOptions !: Array<TypeOptionInterface>
  private optionArray !: Array<OptionArrayInterface>

  private optionsDialogVisible !: boolean

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
    this.optionArray = []
  }

  public get optionsRequire() : boolean {
    const result = this.type === OptionTypeEnum.selectBox

    return result
  }

  public get designSettingModule() : any {
    return DesignSettingModule
  }

  mounted() {
    this.$refs.labelTextBoxRef.focus()
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
      const inputForm: InputFormInterface = {
        id: this.inputFormArray.length,
        option: this.type as OptionTypeEnum,
        label: this.label,
        validation: this.validation,
        optionArray: this.optionArray,
        value: null
      }
      this.$emit('push', inputForm)
      this.$nextTick(() => {
        this.optionArray = []
      })
    }
  }

  private resetForm() {
    this.$refs.formRef.reset()
  }
}
</script>

<style lang="scss" scoped>
</style>
