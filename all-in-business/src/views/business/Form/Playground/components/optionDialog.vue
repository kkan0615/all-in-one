<template>
  <v-dialog
    :value="visible"
    scrollable
    max-width="400px"
    @click:outside="closeDialog"
    @keydown.esc="closeDialog"
  >
    <v-card>
      <v-card-title>Select Country</v-card-title>
      <v-divider />

      <v-card-text class="pa-4" style="overflow: hidden;">
        <v-form
          v-model="form.valid"
          lazy-validation
          @submit.prevent="addToOptionArray"
        >
          <v-row>
            <v-col
              :cols="4"
              :xs="12"
            >
              <v-text-field
                v-model="code"
                :counter="10"
                :rules="[codeRules.required, codeRules.existed]"
                label="Code"
                outlined
                required
                @keyup.enter="addToOptionArray"
              />
            </v-col>
            <v-col
              :cols="8"
              :xs="12"
            >
              <v-text-field
                v-model="value"
                :counter="20"
                :rules="[valueRules.required]"
                label="value"
                outlined
                required
                append-outer-icon="add"
                @keyup.enter="addToOptionArray"
                @click:append-outer="addToOptionArray"
              />
            </v-col>
          </v-row>
        </v-form>
        <v-card
          v-for="(item, i) in optionArray"
          :key="i"
          class="my-2"
        >
          <v-row>
            <v-col class="pa-0 px-3" cols="10">
              <v-card-text>{{ item.code }} / {{ item.value }}</v-card-text>
            </v-col>
            <v-col class="pa-0" cols="2">
              <v-card-actions>
                <v-btn icon @click="onClickClearButton(i)">
                  <v-icon>clear</v-icon>
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-card-text>
      <v-divider />
      <v-card-actions class="justify-center">
        <v-btn :color="designSettingModule.designColor.subColorOne" text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { DesignSettingModule } from '@/store/modules/designSetting'
import { OptionArrayInterface } from '../types'
import { FormClass } from '@/types/common/form'

@Component({
  name: 'OptionDialog'

})
export default class extends Vue {
  @Prop() private visible !: boolean
  @Prop() private optionArray !: Array<OptionArrayInterface>

  private code !: string
  private value !: string
  private form = new FormClass({
    valid: false,
    fields: [
      {
        code: 'code',
        value: '',
        rules: {
          required: (v: string) => !!v || 'Code is required',
          existed: (v: string) => {
            if (this.optionArray.findIndex(e => e.code === v) !== -1) {
              return 'Code is already exsited'
            } else {
              return true
            }
          }
        }
      },
      {
        code: 'value',
        value: '',
        rules: {
          required: (v: string) => !!v || 'Value is required'

        }
      }
    ]
  })

  private codeRules = {
    required: (v: string) => {
      return !!v || 'Code is required'
    },
    existed: (v: string) => {
      if (this.optionArray.findIndex(e => e.code === v) !== -1) {
        return 'Code is already exsited'
      } else {
        return true
      }
    }
  }

  private valueRules = {
    required: (v: string) => !!v || 'Value is required'
  }

  constructor() {
    super()
    this.code = ''
    this.value = ''
  }

  public get designSettingModule(): any {
    return DesignSettingModule
  }

  /**
  * Remove element in array by index
  */
  private onClickClearButton(index: number) {
    this.optionArray.splice(index, 1)
  }

  private addToOptionArray() {
    if (!this.form.valid) {
      return
    }
    // if (this.optionArray.findIndex(e => e.code === this.code) !== -1) {
    //   return
    // }
    this.optionArray.push({
      code: this.code,
      value: this.value
    })
  }

  private closeDialog() {
    this.$emit('update:visible', false)
    this.$emit('close', false)
    this.$nextTick(() => {
      this.code = ''
      this.value = ''
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
