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
            <!-- autocomplete로 변경하기 -->
            <v-text-field
              v-model="option"
              :rules="[labelRules.required]"
              label="option"
              outlined
              required
            />
          </v-col>
          <v-col :cols="3">
            <v-btn large block @click="resetForm">option</v-btn>
          </v-col>
        </v-row>
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

@Component({
  name: 'Generator'

})
export default class extends Vue {
  $refs!: {
    formRef: HTMLFormElement
  }

  private label !: string
  private option !: string
  private optionDialogVisible !: boolean

  private labelRules = {
    required: (v: string) => !!v || 'Label is required'
  }

  constructor() {
    super()
    this.label = ''
    this.option = ''
    this.optionDialogVisible = false
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
